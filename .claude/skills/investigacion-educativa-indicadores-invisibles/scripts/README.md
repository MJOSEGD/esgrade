# Scripts de análisis

Los dos scripts son reproducibles: cualquier persona con Python puede volver a ejecutarlos y obtener las
mismas tablas y gráficos. Dependencias: `pandas numpy scipy matplotlib openpyxl tabulate`.

```bash
pip install pandas numpy scipy matplotlib openpyxl tabulate
```

## 1. `analizar_indicadores.py` (datos cuantitativos)

Entrada: CSV o Excel con una fila por persona y momento. Columnas: identificador (opcional), variable de
grupo (opcional), variable de momento (opcional) y los ítems o puntuaciones.

```bash
python analizar_indicadores.py encuesta.csv --salida ./salida --config config.json
```

### El archivo `config.json`

Copia `assets/config-ejemplo.json` y adapta:

| Clave | Significado |
|---|---|
| `escalas` | Diccionario nombre de escala -> lista de columnas (ítems) que la forman. La puntuación es la media de los ítems. |
| `invertir` | Ítems redactados en negativo que hay que recodificar antes de promediar. |
| `escala_min`, `escala_max` | Valores mínimo y máximo de la escala de respuesta (p. ej. 1 y 5). Necesarios para invertir ítems, calcular techo/suelo y fijar los ejes. |
| `minimo_items_respondidos` | Proporción mínima de ítems respondidos para calcular la escala (por defecto 0,7). |
| `grupo` | Columna que define grupos a comparar (curso, centro, género...). |
| `momento` | Columna con el momento de medida (p. ej. `pre` / `post`). |
| `orden_momentos` | Lista con el orden correcto de los dos momentos. |
| `id` | Identificador de persona. Si existe, la comparación pre/post se hace pareada (misma persona en los dos momentos). |
| `comparar_grupos_en` | Si hay momentos, en cuál comparar los grupos (p. ej. solo en `post`). |

Sin `config.json`, el script trata cada columna numérica como un indicador y produce descriptivos y gráficos.

### Salidas

| Archivo | Contenido |
|---|---|
| `01_descriptivos.csv` | n, perdidos, media, DT, IC 95 %, mediana, percentiles, % techo y suelo |
| `01b_descriptivos_por_grupo.csv` | Lo mismo por grupo; los grupos con menos de 5 casos se suprimen |
| `02_fiabilidad.csv`, `02b_item_total.csv` | Alfa de Cronbach por escala y correlación ítem-total |
| `03_comparaciones.csv` | Pre/post (t pareada y Wilcoxon, o Welch y Mann-Whitney) y grupos (Welch/Mann-Whitney o ANOVA/Kruskal con eta cuadrado), con g de Hedges e IC 95 % |
| `04_correlaciones.csv` | Rho de Spearman entre escalas |
| `graficos/` | Medias con IC, medias por grupo, distribución de cada escala, cambio pre/post, matriz de correlaciones |
| `resumen.md` | Todas las tablas en Markdown con los avisos del análisis |
| `datos_procesados.csv` | Datos con ítems recodificados y escalas calculadas |

Lee siempre los **avisos** al final de la ejecución: indican ítems no encontrados, grupos suprimidos por
tamaño, o comparaciones que no pudieron hacerse pareadas.

## 2. `cualitativo_atlasti.py` (citas codificadas)

Entrada: exportación de citas de ATLAS.ti (Excel; lee todas las hojas e ignora la hoja de información) o
cualquier tabla con una fila por cita y columnas de documento, códigos y texto. Si varios códigos van en la
misma celda, se separan por `;`, salto de línea o `|` (configurable con `--sep-codigos`).

```bash
python cualitativo_atlasti.py citas.xlsx --salida ./salida_cuali \
    --col-documento "Document" --col-codigos "Codes" --col-texto "Quotation Content" \
    --atributos atributos.csv --col-atributo-doc "Document"
```

Los nombres de columna cambian con la versión y el idioma de ATLAS.ti. Si no se indican, el script prueba
nombres habituales en inglés y español y, si no los encuentra, lista las columnas disponibles.

`atributos.csv` (opcional): una fila por documento con variables como curso, género o centro. Permite ver qué
porcentaje de documentos de cada categoría menciona cada código. Categorías con menos de 5 documentos se
suprimen.

### Salidas

| Archivo | Contenido |
|---|---|
| `01_frecuencia_codigos.csv` | Citas, documentos (y participantes) por código y % de documentos que lo mencionan |
| `02_codigo_por_documento.csv` | Matriz código x documento |
| `03_coocurrencias.csv` | Citas que comparten cada par de códigos |
| `04_codigo_por_atributo.csv` | % de documentos por categoría que mencionan cada código |
| `05_citas_ejemplo.md` | Dos citas por código para seleccionar, anonimizar y verificar |
| `graficos/` | Presencia de códigos, coocurrencias, códigos por atributo |
| `resumen.md` | Resumen con las tablas principales |

## Convenciones de los gráficos

Paleta Okabe-Ito (accesible para daltonismo), eje de la escala completo (nunca recortado para exagerar),
n visible, intervalos de confianza al 95 % cuando se comparan medias, un mensaje por gráfico en el título.
Si la skill `dataviz` está disponible, cárgala antes de crear gráficos adicionales.
