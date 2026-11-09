#!/usr/bin/env python3
"""
Análisis de una exportación de citas codificadas (ATLAS.ti u otro CAQDAS, o una hoja de cálculo propia).

Entrada: Excel (todas las hojas) o CSV con una fila por cita. Columnas necesarias: documento, códigos, texto.
Los nombres de columna cambian según la versión e idioma de ATLAS.ti, así que se indican con --col-*:

    python cualitativo_atlasti.py citas.xlsx --salida ./salida_cuali \
        --col-documento "Document" --col-codigos "Codes" --col-texto "Quotation Content" \
        [--col-participante "Participante"] [--atributos atributos.csv --col-atributo-doc Documento]

Si una cita tiene varios códigos en la misma celda, se separan con --sep-codigos (por defecto ";" o salto de línea).
Un fichero de atributos (opcional) asocia a cada documento variables como curso, género o centro.

Salidas:
    01_frecuencia_codigos.csv   citas, documentos (y participantes) que mencionan cada código
    02_codigo_por_documento.csv matriz código x documento (recuento de citas)
    03_coocurrencias.csv        matriz código x código (citas que comparten ambos códigos)
    04_codigo_por_atributo.csv  % de documentos de cada categoría del atributo que mencionan cada código
    05_citas_ejemplo.md         dos citas por código, acortadas, para seleccionar en el informe
    graficos/*.png              frecuencias, coocurrencias, códigos por atributo
    resumen.md

Requiere: pandas, numpy, matplotlib (y openpyxl para Excel).
"""
from __future__ import annotations

import argparse
import re
from pathlib import Path

import numpy as np
import pandas as pd

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt  # noqa: E402

PALETA = ["#0072B2", "#E69F00", "#009E73", "#CC79A7", "#56B4E9", "#D55E00", "#F0E442", "#000000"]
N_MINIMO_GRUPO = 5


def cargar(ruta: Path) -> pd.DataFrame:
    if ruta.suffix.lower() in (".xlsx", ".xls"):
        hojas = pd.read_excel(ruta, sheet_name=None)
        partes = []
        for nombre, h in hojas.items():
            if h.empty:
                continue
            h = h.copy()
            h["_hoja"] = nombre
            partes.append(h)
        return pd.concat(partes, ignore_index=True)
    return pd.read_csv(ruta, sep=None, engine="python")


def localizar_columna(df: pd.DataFrame, pedida: str | None, candidatos: list[str], obligatoria: bool) -> str | None:
    cols = {c.strip().lower(): c for c in df.columns}
    if pedida:
        if pedida in df.columns:
            return pedida
        if pedida.strip().lower() in cols:
            return cols[pedida.strip().lower()]
        raise SystemExit(f"No existe la columna '{pedida}'. Columnas disponibles: {list(df.columns)}")
    for c in candidatos:
        if c.lower() in cols:
            return cols[c.lower()]
    if obligatoria:
        raise SystemExit(f"No se pudo localizar la columna ({candidatos}). Indícala con el argumento correspondiente. "
                         f"Columnas disponibles: {list(df.columns)}")
    return None


def explotar_codigos(df: pd.DataFrame, col_codigos: str, sep: str) -> pd.DataFrame:
    patron = re.compile(sep)
    df = df.copy()
    df["_codigo"] = df[col_codigos].fillna("").astype(str).apply(lambda s: [c.strip() for c in patron.split(s) if c.strip() and c.strip().lower() != "nan"])
    df["_cita"] = np.arange(len(df))  # identificador de la cita original, para coocurrencias
    return df.explode("_codigo").dropna(subset=["_codigo"]).reset_index(drop=True)


def estilo():
    plt.rcParams.update({"figure.dpi": 150, "savefig.dpi": 200, "font.size": 10, "axes.spines.top": False,
                         "axes.spines.right": False, "axes.grid": True, "grid.alpha": 0.25, "axes.axisbelow": True})


def main(argv=None):
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("citas", type=Path)
    ap.add_argument("--salida", type=Path, default=Path("salida_cuali"))
    ap.add_argument("--col-documento")
    ap.add_argument("--col-codigos")
    ap.add_argument("--col-texto")
    ap.add_argument("--col-participante")
    ap.add_argument("--sep-codigos", default=r";|\n|\|", help="Expresión regular que separa códigos en una celda")
    ap.add_argument("--atributos", type=Path, help="CSV/Excel con una fila por documento y sus atributos")
    ap.add_argument("--col-atributo-doc", help="Columna del fichero de atributos con el nombre del documento")
    ap.add_argument("--max-codigos-grafico", type=int, default=25)
    args = ap.parse_args(argv)

    df = cargar(args.citas)
    df.columns = [str(c).strip() for c in df.columns]
    c_doc = localizar_columna(df, args.col_documento, ["Document", "Documento", "Document Name", "Nombre del documento"], True)
    c_cod = localizar_columna(df, args.col_codigos, ["Codes", "Códigos", "Codigos", "Code", "Código"], True)
    c_txt = localizar_columna(df, args.col_texto, ["Quotation Content", "Contenido de la cita", "Content", "Texto", "Text", "Quotation"], True)
    c_par = localizar_columna(df, args.col_participante, ["Participante", "Participant", "Speaker", "Hablante"], False)
    # Las exportaciones de ATLAS.ti incluyen una hoja "Info" y filas vacías: se quedan solo las citas reales.
    df = df.dropna(subset=[c_doc, c_cod]).reset_index(drop=True)

    largo = explotar_codigos(df, c_cod, args.sep_codigos)
    salida = args.salida
    (salida / "graficos").mkdir(parents=True, exist_ok=True)
    estilo()
    avisos: list[str] = []

    # 01 frecuencias
    frec = largo.groupby("_codigo").agg(citas=(c_txt, "size"), documentos=(c_doc, "nunique"))
    if c_par:
        frec["participantes"] = largo.groupby("_codigo")[c_par].nunique()
    n_docs = df[c_doc].nunique()
    frec["pct_documentos"] = (100 * frec["documentos"] / n_docs).round(1)
    frec = frec.sort_values(["documentos", "citas"], ascending=False)
    frec.to_csv(salida / "01_frecuencia_codigos.csv")

    # 02 código x documento
    cxd = pd.crosstab(largo["_codigo"], largo[c_doc])
    cxd.to_csv(salida / "02_codigo_por_documento.csv")

    # 03 coocurrencias (citas que comparten dos códigos)
    presencia = pd.crosstab(largo["_cita"], largo["_codigo"]).clip(upper=1)
    cooc = presencia.T.dot(presencia)
    cooc = cooc.where(~np.eye(len(cooc), dtype=bool), 0)
    cooc.to_csv(salida / "03_coocurrencias.csv")

    # 04 por atributo
    por_atributo = None
    if args.atributos:
        atr = cargar(args.atributos)
        atr.columns = [str(c).strip() for c in atr.columns]
        c_adoc = localizar_columna(atr, args.col_atributo_doc, [c_doc, "Document", "Documento"], True)
        atr = atr.drop_duplicates(subset=c_adoc).set_index(c_adoc)
        filas = []
        for atributo in [c for c in atr.columns]:
            docs_por_cat = atr.groupby(atributo).size()
            for cat, n_cat in docs_por_cat.items():
                if n_cat < N_MINIMO_GRUPO:
                    avisos.append(f"Atributo '{atributo}', categoría '{cat}' tiene {n_cat} documentos (<{N_MINIMO_GRUPO}); se suprime.")
                    continue
                docs_cat = set(atr.index[atr[atributo] == cat])
                sub = largo[largo[c_doc].isin(docs_cat)]
                menciona = sub.groupby("_codigo")[c_doc].nunique()
                for codigo in frec.index:
                    filas.append({"atributo": atributo, "categoria": cat, "n_documentos": int(n_cat), "codigo": codigo,
                                  "documentos_que_mencionan": int(menciona.get(codigo, 0)),
                                  "pct": round(100 * menciona.get(codigo, 0) / n_cat, 1)})
        por_atributo = pd.DataFrame(filas)
        por_atributo.to_csv(salida / "04_codigo_por_atributo.csv", index=False)

    # 05 citas de ejemplo
    lineas = ["# Citas de ejemplo por código\n", "Seleccionar, anonimizar y verificar contra el documento original antes de usarlas en el informe.\n"]
    for codigo in frec.index:
        sub = largo[largo["_codigo"] == codigo]
        lineas.append(f"## {codigo}  (citas: {len(sub)}, documentos: {sub[c_doc].nunique()})")
        for _, f in sub.head(2).iterrows():
            texto = re.sub(r"\s+", " ", str(f[c_txt])).strip()
            texto = texto if len(texto) <= 300 else texto[:297] + "..."
            lineas.append(f"- [{f[c_doc]}] \"{texto}\"")
        lineas.append("")
    (salida / "05_citas_ejemplo.md").write_text("\n".join(lineas), encoding="utf-8")

    # gráficos
    top = frec.head(args.max_codigos_grafico)
    fig, ax = plt.subplots(figsize=(7, 0.4 * len(top) + 1.5))
    y = np.arange(len(top))
    ax.barh(y, top["pct_documentos"], color=PALETA[0])
    for i, (cit, d) in enumerate(zip(top["citas"], top["documentos"])):
        ax.text(top["pct_documentos"].iloc[i] + 1, i, f"{d} doc. / {cit} citas", va="center", fontsize=8)
    ax.set_yticks(y)
    ax.set_yticklabels(top.index)
    ax.invert_yaxis()
    ax.set_xlim(0, 115)
    ax.set_xlabel(f"% de documentos que mencionan el código (de {n_docs})")
    ax.set_title("Presencia de cada código", loc="left", fontweight="bold")
    fig.tight_layout()
    fig.savefig(salida / "graficos" / "frecuencia_codigos.png")
    plt.close(fig)

    if len(cooc) >= 2:
        orden = [c for c in top.index if c in cooc.index]
        m = cooc.loc[orden, orden]
        fig, ax = plt.subplots(figsize=(1.5 + 0.5 * len(m), 1.5 + 0.5 * len(m)))
        im = ax.imshow(m.values, cmap="Blues")
        ax.set_xticks(range(len(m)))
        ax.set_yticks(range(len(m)))
        ax.set_xticklabels(m.columns, rotation=60, ha="right", fontsize=8)
        ax.set_yticklabels(m.index, fontsize=8)
        ax.grid(False)
        for i in range(len(m)):
            for j in range(len(m)):
                if m.values[i, j] > 0:
                    ax.text(j, i, int(m.values[i, j]), ha="center", va="center", fontsize=7,
                            color="white" if m.values[i, j] > m.values.max() * 0.6 else "black")
        fig.colorbar(im, ax=ax, fraction=0.046, label="citas con ambos códigos")
        ax.set_title("Coocurrencia de códigos", loc="left", fontweight="bold")
        fig.tight_layout()
        fig.savefig(salida / "graficos" / "coocurrencias.png")
        plt.close(fig)

    if por_atributo is not None and not por_atributo.empty:
        for atributo, sub in por_atributo.groupby("atributo"):
            piv = sub.pivot_table(index="codigo", columns="categoria", values="pct").reindex(top.index).dropna(how="all")
            if piv.empty:
                continue
            fig, ax = plt.subplots(figsize=(7, 0.45 * len(piv) + 1.5))
            y = np.arange(len(piv))
            k = len(piv.columns)
            alto = 0.8 / k
            for j, cat in enumerate(piv.columns):
                ax.barh(y + j * alto - 0.4 + alto / 2, piv[cat], alto, color=PALETA[j % len(PALETA)], label=str(cat))
            ax.set_yticks(y)
            ax.set_yticklabels(piv.index)
            ax.invert_yaxis()
            ax.set_xlim(0, 100)
            ax.set_xlabel("% de documentos de la categoría que mencionan el código")
            ax.set_title(f"Códigos según {atributo}", loc="left", fontweight="bold")
            ax.legend(frameon=False, fontsize=8, loc="upper center", bbox_to_anchor=(0.5, -0.15), ncol=min(k, 4))
            fig.tight_layout()
            fig.savefig(salida / "graficos" / f"codigos_por_{re.sub(r'[^a-zA-Z0-9]+', '_', atributo)}.png")
            plt.close(fig)

    resumen = ["# Resumen del análisis cualitativo\n",
               f"Citas: {len(df)}. Documentos: {n_docs}. Códigos distintos: {frec.shape[0]}.\n",
               "Las frecuencias describen presencia, no importancia. Cada tema del informe debe sostenerse en citas verificadas.\n"]
    if avisos:
        resumen.append("## Avisos\n" + "\n".join(f"- {a}" for a in dict.fromkeys(avisos)) + "\n")
    resumen.append("## Frecuencia de códigos\n" + frec.to_markdown() + "\n")
    resumen.append("## Gráficos\n" + "\n".join(f"- graficos/{p.name}" for p in sorted((salida / "graficos").glob("*.png"))) + "\n")
    (salida / "resumen.md").write_text("\n".join(resumen), encoding="utf-8")
    print(f"Análisis cualitativo completado. Resultados en {salida.resolve()}")
    for a in dict.fromkeys(avisos):
        print("AVISO:", a)


if __name__ == "__main__":
    main()
