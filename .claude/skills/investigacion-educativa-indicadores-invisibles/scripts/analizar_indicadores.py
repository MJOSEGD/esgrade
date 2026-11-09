#!/usr/bin/env python3
"""
Análisis reproducible de indicadores "invisibles" (bienestar, agencia, pertenencia...) a partir de un CSV.

Uso:
    python analizar_indicadores.py datos.csv --salida ./salida [--config config.json] [--sep ;] [--encoding utf-8]

Sin config: trata cada columna numérica como un indicador y produce descriptivos y gráficos.
Con config (ver README.md y assets/config-ejemplo.json): construye escalas a partir de ítems, recodifica
ítems inversos, calcula fiabilidad (alfa de Cronbach), compara grupos y momentos (pre/post) con tamaño del
efecto (g de Hedges con IC 95 %), correlaciones entre escalas y genera gráficos listos para el informe.

Salidas (en --salida):
    01_descriptivos.csv, 01b_descriptivos_por_grupo.csv, 02_fiabilidad.csv, 02b_item_total.csv,
    03_comparaciones.csv, 04_correlaciones.csv, resumen.md, graficos/*.png, datos_procesados.csv

Requiere: pandas, numpy, scipy, matplotlib.
"""
from __future__ import annotations

import argparse
import json
import math
import sys
from pathlib import Path

import numpy as np
import pandas as pd
from scipy import stats

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt  # noqa: E402

# Paleta accesible (Okabe-Ito), legible para daltonismo y en blanco y negro.
PALETA = ["#0072B2", "#E69F00", "#009E73", "#CC79A7", "#56B4E9", "#D55E00", "#F0E442", "#000000"]
N_MINIMO_GRUPO = 5  # por debajo, un grupo no se publica por separado (privacidad y fiabilidad)


# ----------------------------------------------------------------------------- utilidades estadísticas
def alfa_cronbach(items: pd.DataFrame) -> float:
    datos = items.dropna()
    k = datos.shape[1]
    if k < 2 or len(datos) < 3:
        return float("nan")
    var_items = datos.var(axis=0, ddof=1).sum()
    var_total = datos.sum(axis=1).var(ddof=1)
    if var_total == 0:
        return float("nan")
    return float(k / (k - 1) * (1 - var_items / var_total))


def correlacion_item_total(items: pd.DataFrame) -> pd.Series:
    datos = items.dropna()
    res = {}
    for col in datos.columns:
        resto = datos.drop(columns=col).mean(axis=1)
        res[col] = datos[col].corr(resto) if resto.std() > 0 and datos[col].std() > 0 else float("nan")
    return pd.Series(res, name="r_item_total")


def hedges_g(a: np.ndarray, b: np.ndarray) -> tuple[float, float, float]:
    """g de Hedges (b respecto a a: positivo si b > a) con IC 95 % aproximado."""
    a, b = np.asarray(a, float), np.asarray(b, float)
    a, b = a[~np.isnan(a)], b[~np.isnan(b)]
    n1, n2 = len(a), len(b)
    if n1 < 2 or n2 < 2:
        return float("nan"), float("nan"), float("nan")
    s_pool = math.sqrt(((n1 - 1) * a.var(ddof=1) + (n2 - 1) * b.var(ddof=1)) / (n1 + n2 - 2))
    if s_pool == 0:
        return float("nan"), float("nan"), float("nan")
    d = (b.mean() - a.mean()) / s_pool
    j = 1 - 3 / (4 * (n1 + n2) - 9)
    g = d * j
    se = math.sqrt((n1 + n2) / (n1 * n2) + g**2 / (2 * (n1 + n2)))
    return g, g - 1.96 * se, g + 1.96 * se


def ic95_media(x: pd.Series) -> float:
    x = x.dropna()
    if len(x) < 2:
        return float("nan")
    return float(stats.t.ppf(0.975, len(x) - 1) * x.std(ddof=1) / math.sqrt(len(x)))


def eta_cuadrado(grupos: list[np.ndarray]) -> float:
    todos = np.concatenate(grupos)
    gran_media = todos.mean()
    ss_entre = sum(len(g) * (g.mean() - gran_media) ** 2 for g in grupos)
    ss_total = ((todos - gran_media) ** 2).sum()
    return float(ss_entre / ss_total) if ss_total > 0 else float("nan")


# ----------------------------------------------------------------------------- preparación de datos
def cargar(ruta: Path, sep: str | None, encoding: str) -> pd.DataFrame:
    if ruta.suffix.lower() in (".xlsx", ".xls"):
        return pd.read_excel(ruta)
    if sep is None:
        return pd.read_csv(ruta, sep=None, engine="python", encoding=encoding)
    return pd.read_csv(ruta, sep=sep, encoding=encoding)


def construir_escalas(df: pd.DataFrame, cfg: dict, avisos: list[str]) -> tuple[pd.DataFrame, dict]:
    escalas = cfg.get("escalas", {})
    vmin, vmax = cfg.get("escala_min"), cfg.get("escala_max")
    for col in cfg.get("invertir", []):
        if col not in df.columns:
            avisos.append(f"Ítem inverso '{col}' no está en los datos.")
            continue
        if vmin is None or vmax is None:
            avisos.append("Hay ítems inversos pero falta escala_min/escala_max en el config; no se recodifican.")
            break
        df[col] = (vmin + vmax) - pd.to_numeric(df[col], errors="coerce")
    minimo = cfg.get("minimo_items_respondidos", 0.7)
    for nombre, items in escalas.items():
        faltan = [i for i in items if i not in df.columns]
        if faltan:
            avisos.append(f"Escala '{nombre}': ítems no encontrados {faltan}; se omiten.")
        items_ok = [i for i in items if i in df.columns]
        if not items_ok:
            continue
        bloque = df[items_ok].apply(pd.to_numeric, errors="coerce")
        respondidos = bloque.notna().mean(axis=1)
        df[nombre] = bloque.mean(axis=1).where(respondidos >= minimo)
    return df, escalas


def indicadores_a_analizar(df: pd.DataFrame, cfg: dict) -> list[str]:
    if cfg.get("escalas"):
        return [e for e in cfg["escalas"] if e in df.columns]
    excluir = {cfg.get("grupo"), cfg.get("momento"), cfg.get("id")}
    return [c for c in df.select_dtypes(include="number").columns if c not in excluir]


# ----------------------------------------------------------------------------- análisis
def descriptivos(df: pd.DataFrame, inds: list[str], cfg: dict) -> pd.DataFrame:
    vmin, vmax = cfg.get("escala_min"), cfg.get("escala_max")
    filas = []
    for ind in inds:
        x = pd.to_numeric(df[ind], errors="coerce")
        fila = {
            "indicador": ind, "n": int(x.notna().sum()), "perdidos": int(x.isna().sum()),
            "media": x.mean(), "dt": x.std(ddof=1), "ic95": ic95_media(x), "mediana": x.median(),
            "p25": x.quantile(0.25), "p75": x.quantile(0.75), "min": x.min(), "max": x.max(),
        }
        if vmin is not None and vmax is not None:
            fila["pct_techo"] = 100 * (x >= vmax - 1e-9).mean()
            fila["pct_suelo"] = 100 * (x <= vmin + 1e-9).mean()
        filas.append(fila)
    return pd.DataFrame(filas).round(3)


def descriptivos_por_grupo(df: pd.DataFrame, inds: list[str], grupo: str, avisos: list[str]) -> pd.DataFrame:
    filas = []
    for g, sub in df.groupby(grupo, dropna=True):
        for ind in inds:
            x = pd.to_numeric(sub[ind], errors="coerce").dropna()
            if len(x) < N_MINIMO_GRUPO:
                avisos.append(f"Grupo '{g}' en '{ind}' tiene n={len(x)} (<{N_MINIMO_GRUPO}); se suprime por privacidad.")
                continue
            filas.append({"grupo": g, "indicador": ind, "n": len(x), "media": x.mean(), "dt": x.std(ddof=1),
                          "ic95": ic95_media(x), "mediana": x.median()})
    return pd.DataFrame(filas).round(3)


def fiabilidad(df: pd.DataFrame, escalas: dict) -> tuple[pd.DataFrame, pd.DataFrame]:
    filas, filas_item = [], []
    for nombre, items in escalas.items():
        items_ok = [i for i in items if i in df.columns]
        if len(items_ok) < 2:
            continue
        bloque = df[items_ok].apply(pd.to_numeric, errors="coerce")
        a = alfa_cronbach(bloque)
        valor = "buena" if a >= 0.8 else "aceptable" if a >= 0.7 else "baja (interpretar con cautela)" if a >= 0.6 else "insuficiente"
        filas.append({"escala": nombre, "n_items": len(items_ok), "n_casos_completos": int(bloque.dropna().shape[0]),
                      "alfa_cronbach": round(a, 3), "valoracion": valor})
        rit = correlacion_item_total(bloque)
        for item, r in rit.items():
            filas_item.append({"escala": nombre, "item": item, "r_item_total": round(r, 3),
                               "aviso": "revisar (<0,30)" if pd.notna(r) and r < 0.30 else ""})
    return pd.DataFrame(filas), pd.DataFrame(filas_item)


def comparaciones(df: pd.DataFrame, inds: list[str], cfg: dict, avisos: list[str]) -> pd.DataFrame:
    filas = []
    grupo, momento, idcol = cfg.get("grupo"), cfg.get("momento"), cfg.get("id")

    # Pre/post
    if momento and momento in df.columns:
        niveles = cfg.get("orden_momentos") or sorted(df[momento].dropna().unique().tolist(), key=str)
        if len(niveles) == 2:
            pre, post = niveles
            for ind in inds:
                a = pd.to_numeric(df.loc[df[momento] == pre, ind], errors="coerce")
                b = pd.to_numeric(df.loc[df[momento] == post, ind], errors="coerce")
                fila = {"tipo": "pre/post", "indicador": ind, "comparacion": f"{pre} -> {post}",
                        "n_a": int(a.notna().sum()), "n_b": int(b.notna().sum()),
                        "media_a": a.mean(), "media_b": b.mean(), "diferencia": b.mean() - a.mean()}
                pareado = False
                if idcol and idcol in df.columns:
                    ancho = df[df[momento].isin([pre, post])].pivot_table(index=idcol, columns=momento, values=ind, aggfunc="first")
                    if {pre, post}.issubset(ancho.columns):
                        par = ancho[[pre, post]].dropna()
                        if len(par) >= 3:
                            pareado = True
                            fila["n_pares"] = len(par)
                            fila["p_t_pareada"] = stats.ttest_rel(par[post], par[pre]).pvalue
                            try:
                                fila["p_wilcoxon"] = stats.wilcoxon(par[post], par[pre]).pvalue
                            except ValueError:
                                fila["p_wilcoxon"] = float("nan")
                if not pareado:
                    if a.notna().sum() >= 2 and b.notna().sum() >= 2:
                        fila["p_t_welch"] = stats.ttest_ind(b.dropna(), a.dropna(), equal_var=False).pvalue
                        fila["p_mann_whitney"] = stats.mannwhitneyu(b.dropna(), a.dropna()).pvalue
                    if idcol:
                        avisos.append(f"'{ind}': no hay suficientes pares con el mismo id; se compara como grupos independientes.")
                g, lo, hi = hedges_g(a.values, b.values)
                fila.update({"g_hedges": g, "g_ic95_inf": lo, "g_ic95_sup": hi, "disenio": "pareado" if pareado else "independiente"})
                filas.append(fila)
        elif len(niveles) > 2:
            avisos.append(f"La variable de momento tiene {len(niveles)} niveles; solo se comparan automáticamente dos.")

    # Grupos
    if grupo and grupo in df.columns:
        sub = df
        if momento and momento in df.columns and cfg.get("comparar_grupos_en"):
            sub = df[df[momento] == cfg["comparar_grupos_en"]]
        conteos = sub[grupo].value_counts()
        validos = [g for g, n in conteos.items() if n >= N_MINIMO_GRUPO]
        for ind in inds:
            muestras = {g: pd.to_numeric(sub.loc[sub[grupo] == g, ind], errors="coerce").dropna().values for g in validos}
            muestras = {g: v for g, v in muestras.items() if len(v) >= N_MINIMO_GRUPO}
            if len(muestras) == 2:
                (ga, va), (gb, vb) = muestras.items()
                g_, lo, hi = hedges_g(va, vb)
                filas.append({"tipo": "grupos", "indicador": ind, "comparacion": f"{ga} vs {gb}", "n_a": len(va), "n_b": len(vb),
                              "media_a": va.mean(), "media_b": vb.mean(), "diferencia": vb.mean() - va.mean(),
                              "p_t_welch": stats.ttest_ind(vb, va, equal_var=False).pvalue,
                              "p_mann_whitney": stats.mannwhitneyu(vb, va).pvalue,
                              "g_hedges": g_, "g_ic95_inf": lo, "g_ic95_sup": hi, "disenio": "independiente"})
            elif len(muestras) > 2:
                vals = list(muestras.values())
                filas.append({"tipo": "grupos", "indicador": ind, "comparacion": " / ".join(map(str, muestras)),
                              "n_a": int(sum(len(v) for v in vals)),
                              "p_anova": stats.f_oneway(*vals).pvalue, "p_kruskal": stats.kruskal(*vals).pvalue,
                              "eta_cuadrado": eta_cuadrado(vals), "disenio": f"{len(vals)} grupos"})
    return pd.DataFrame(filas).round(4)


def correlaciones(df: pd.DataFrame, inds: list[str]) -> pd.DataFrame:
    if len(inds) < 2:
        return pd.DataFrame()
    return df[inds].apply(pd.to_numeric, errors="coerce").corr(method="spearman").round(3)


# ----------------------------------------------------------------------------- gráficos
def estilo():
    plt.rcParams.update({"figure.dpi": 150, "savefig.dpi": 200, "font.size": 10, "axes.spines.top": False,
                         "axes.spines.right": False, "axes.grid": True, "grid.alpha": 0.25, "axes.axisbelow": True})


def rango_eje(cfg: dict, x: pd.Series | None = None):
    vmin, vmax = cfg.get("escala_min"), cfg.get("escala_max")
    if vmin is not None and vmax is not None:
        return vmin - 0.1, vmax + 0.1
    return None


def grafico_medias(desc: pd.DataFrame, cfg: dict, ruta: Path, titulo: str):
    if desc.empty:
        return
    fig, ax = plt.subplots(figsize=(7, 0.5 * len(desc) + 1.5))
    y = np.arange(len(desc))
    ax.barh(y, desc["media"], xerr=desc["ic95"].fillna(0), color=PALETA[0], alpha=0.9, capsize=3)
    ax.set_yticks(y)
    ax.set_yticklabels([f"{i} (n={n})" for i, n in zip(desc["indicador"], desc["n"])])
    ax.invert_yaxis()
    r = rango_eje(cfg)
    if r:
        ax.set_xlim(*r)
    ax.set_xlabel("Media (barras de error: IC 95 %)")
    ax.set_title(titulo, loc="left", fontweight="bold")
    fig.tight_layout()
    fig.savefig(ruta)
    plt.close(fig)


def grafico_por_grupo(dg: pd.DataFrame, cfg: dict, ruta: Path, grupo: str):
    if dg.empty:
        return
    inds = dg["indicador"].unique().tolist()
    grupos = dg["grupo"].unique().tolist()
    fig, ax = plt.subplots(figsize=(max(7, 1.2 * len(inds) + 2), 4.5))
    ancho = 0.8 / max(len(grupos), 1)
    x = np.arange(len(inds))
    for k, g in enumerate(grupos):
        sub = dg[dg["grupo"] == g].set_index("indicador").reindex(inds)
        ax.bar(x + k * ancho - 0.4 + ancho / 2, sub["media"], ancho, yerr=sub["ic95"].fillna(0), capsize=2,
               color=PALETA[k % len(PALETA)], label=f"{g} (n={int(sub['n'].dropna().min()) if sub['n'].notna().any() else '?'})")
    ax.set_xticks(x)
    ax.set_xticklabels(inds, rotation=20, ha="right")
    r = rango_eje(cfg)
    if r:
        ax.set_ylim(*r)
    ax.set_ylabel("Media (IC 95 %)")
    ax.set_title(f"Indicadores por {grupo}", loc="left", fontweight="bold")
    ax.legend(frameon=False, fontsize=8, loc="upper center", bbox_to_anchor=(0.5, -0.22), ncol=min(len(grupos), 4))
    fig.tight_layout()
    fig.savefig(ruta)
    plt.close(fig)


def grafico_distribuciones(df: pd.DataFrame, inds: list[str], cfg: dict, carpeta: Path):
    vmin, vmax = cfg.get("escala_min"), cfg.get("escala_max")
    for ind in inds:
        x = pd.to_numeric(df[ind], errors="coerce").dropna()
        if x.empty:
            continue
        fig, ax = plt.subplots(figsize=(6, 3.5))
        if vmin is not None and vmax is not None and (vmax - vmin) <= 10:
            bins = np.arange(vmin - 0.25, vmax + 0.5, 0.5)
        else:
            bins = "auto"
        ax.hist(x, bins=bins, color=PALETA[0], alpha=0.85, edgecolor="white")
        ax.axvline(x.mean(), color=PALETA[1], lw=2, label=f"media {x.mean():.2f}")
        ax.axvline(x.median(), color=PALETA[2], lw=2, ls="--", label=f"mediana {x.median():.2f}")
        ax.set_title(f"Distribución de {ind} (n={len(x)})", loc="left", fontweight="bold")
        ax.set_xlabel("Puntuación")
        ax.set_ylabel("Personas")
        ax.legend(frameon=False, fontsize=8)
        fig.tight_layout()
        fig.savefig(carpeta / f"distribucion_{ind}.png")
        plt.close(fig)


def grafico_prepost(comp: pd.DataFrame, cfg: dict, ruta: Path):
    pp = comp[comp["tipo"] == "pre/post"] if not comp.empty and "tipo" in comp else pd.DataFrame()
    if pp.empty:
        return
    fig, ax = plt.subplots(figsize=(7, 0.6 * len(pp) + 1.5))
    y = np.arange(len(pp))
    for i, (_, f) in enumerate(pp.iterrows()):
        ax.plot([f["media_a"], f["media_b"]], [i, i], color="#999999", lw=2, zorder=1)
        ax.scatter(f["media_a"], i, color=PALETA[0], s=60, zorder=2, label="antes" if i == 0 else None)
        ax.scatter(f["media_b"], i, color=PALETA[1], s=60, zorder=2, label="después" if i == 0 else None)
        g = f.get("g_hedges")
        if pd.notna(g):
            ax.annotate(f"g = {g:+.2f} [{f['g_ic95_inf']:.2f}, {f['g_ic95_sup']:.2f}]", (max(f["media_a"], f["media_b"]), i),
                        xytext=(8, -3), textcoords="offset points", fontsize=8)
    ax.set_yticks(y)
    ax.set_yticklabels(pp["indicador"])
    ax.invert_yaxis()
    r = rango_eje(cfg)
    if r:
        ax.set_xlim(*r)
    ax.set_xlabel("Media")
    ax.set_title("Cambio entre momentos (g de Hedges con IC 95 %)", loc="left", fontweight="bold")
    ax.legend(frameon=False, loc="upper center", bbox_to_anchor=(0.5, -0.18), ncol=2, fontsize=8)
    fig.tight_layout()
    fig.savefig(ruta)
    plt.close(fig)


def grafico_correlaciones(corr: pd.DataFrame, ruta: Path):
    if corr.empty:
        return
    fig, ax = plt.subplots(figsize=(1 + 0.8 * len(corr), 1 + 0.8 * len(corr)))
    im = ax.imshow(corr.values, cmap="PuOr_r", vmin=-1, vmax=1)
    ax.set_xticks(range(len(corr)))
    ax.set_yticks(range(len(corr)))
    ax.set_xticklabels(corr.columns, rotation=45, ha="right")
    ax.set_yticklabels(corr.index)
    ax.grid(False)
    for i in range(len(corr)):
        for j in range(len(corr)):
            v = corr.values[i, j]
            ax.text(j, i, f"{v:.2f}", ha="center", va="center", fontsize=8, color="white" if abs(v) > 0.6 else "black")
    fig.colorbar(im, ax=ax, fraction=0.046, label="rho de Spearman")
    ax.set_title("Correlaciones entre indicadores", loc="left", fontweight="bold")
    fig.tight_layout()
    fig.savefig(ruta)
    plt.close(fig)


# ----------------------------------------------------------------------------- resumen
def escribir_resumen(salida: Path, desc, dg, fiab, comp, corr, avisos, cfg, n_total):
    partes = ["# Resumen automático del análisis\n",
              f"Casos (filas) en los datos: {n_total}. Umbral de privacidad: grupos con menos de {N_MINIMO_GRUPO} casos no se publican.\n",
              "Este resumen es descriptivo. Interpretar con `references/metodos-y-analisis.md`.\n"]
    if avisos:
        partes.append("## Avisos\n" + "\n".join(f"- {a}" for a in dict.fromkeys(avisos)) + "\n")
    partes.append("## Descriptivos\n" + desc.to_markdown(index=False) + "\n")
    if not fiab.empty:
        partes.append("## Fiabilidad de las escalas\n" + fiab.to_markdown(index=False) + "\n")
    if dg is not None and not dg.empty:
        partes.append(f"## Por {cfg.get('grupo')}\n" + dg.to_markdown(index=False) + "\n")
    if not comp.empty:
        partes.append("## Comparaciones\n" + comp.to_markdown(index=False) + "\n")
    if not corr.empty:
        partes.append("## Correlaciones (Spearman)\n" + corr.to_markdown() + "\n")
    partes.append("## Gráficos\n" + "\n".join(f"- graficos/{p.name}" for p in sorted((salida / "graficos").glob("*.png"))) + "\n")
    (salida / "resumen.md").write_text("\n".join(partes), encoding="utf-8")


# ----------------------------------------------------------------------------- main
def main(argv=None):
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("datos", type=Path)
    ap.add_argument("--salida", type=Path, default=Path("salida"))
    ap.add_argument("--config", type=Path)
    ap.add_argument("--sep", default=None, help="Separador del CSV (por defecto se detecta)")
    ap.add_argument("--encoding", default="utf-8")
    args = ap.parse_args(argv)

    cfg = json.loads(args.config.read_text(encoding="utf-8")) if args.config else {}
    avisos: list[str] = []
    df = cargar(args.datos, args.sep, args.encoding)
    df.columns = [str(c).strip() for c in df.columns]
    df, escalas = construir_escalas(df, cfg, avisos)
    inds = indicadores_a_analizar(df, cfg)
    if not inds:
        sys.exit("No se encontraron indicadores numéricos que analizar.")

    salida = args.salida
    (salida / "graficos").mkdir(parents=True, exist_ok=True)
    estilo()

    desc = descriptivos(df, inds, cfg)
    desc.to_csv(salida / "01_descriptivos.csv", index=False)

    dg = None
    grupo = cfg.get("grupo")
    if grupo and grupo in df.columns:
        dg = descriptivos_por_grupo(df, inds, grupo, avisos)
        dg.to_csv(salida / "01b_descriptivos_por_grupo.csv", index=False)
        grafico_por_grupo(dg, cfg, salida / "graficos" / "medias_por_grupo.png", grupo)
    elif grupo:
        avisos.append(f"La variable de grupo '{grupo}' no está en los datos.")

    fiab, item_total = fiabilidad(df, escalas) if escalas else (pd.DataFrame(), pd.DataFrame())
    if not fiab.empty:
        fiab.to_csv(salida / "02_fiabilidad.csv", index=False)
        item_total.to_csv(salida / "02b_item_total.csv", index=False)

    comp = comparaciones(df, inds, cfg, avisos)
    if not comp.empty:
        comp.to_csv(salida / "03_comparaciones.csv", index=False)
        grafico_prepost(comp, cfg, salida / "graficos" / "cambio_pre_post.png")

    corr = correlaciones(df, inds)
    if not corr.empty:
        corr.to_csv(salida / "04_correlaciones.csv")
        grafico_correlaciones(corr, salida / "graficos" / "correlaciones.png")

    grafico_medias(desc, cfg, salida / "graficos" / "medias_global.png", "Medias por indicador (todos los casos)")
    grafico_distribuciones(df, inds, cfg, salida / "graficos")
    df.to_csv(salida / "datos_procesados.csv", index=False)

    escribir_resumen(salida, desc, dg, fiab, comp, corr, avisos, cfg, len(df))
    print(f"Análisis completado. Resultados en {salida.resolve()}")
    for a in dict.fromkeys(avisos):
        print("AVISO:", a)


if __name__ == "__main__":
    main()
