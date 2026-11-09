# ATLAS.ti en el flujo de investigación

Lee este archivo cuando el usuario trabaje con ATLAS.ti (o con otro programa de análisis cualitativo
asistido por ordenador, CAQDAS) o cuando haya entrevistas, grupos focales, respuestas abiertas, diarios o
documentos que convenga codificar de forma sistemática. ATLAS.ti es uno de los programas CAQDAS más
utilizados en investigación educativa iberoamericana; desde septiembre de 2024 pertenece a Lumivero.

Lo que sigue se ha verificado en la documentación del fabricante en noviembre de 2026 (enlaces al final).
Las funciones cambian entre versiones (Windows, Mac y Web no son idénticos): cuando una función sea
decisiva para el usuario, comprueba el manual de su versión antes de prometerla.

## 1. Qué aporta a la evaluación de indicadores invisibles

Los indicadores invisibles se miden mal con cuestionarios solos. ATLAS.ti permite dar estructura y
trazabilidad a la parte cualitativa:

- **Codificar** transcripciones de entrevistas, grupos focales, respuestas abiertas, observaciones de aula,
  documentos del centro (proyecto educativo, actas) y también audio, vídeo e imágenes.
- **Vincular cada afirmación del informe a citas literales** (en ATLAS.ti, "quotations") y a los
  documentos de origen. Esto es lo que convierte una impresión en evidencia.
- **Cruzar codificación con atributos** de los participantes (curso, género, centro, rol) mediante grupos de
  documentos, para ver si un tema aparece más en un grupo que en otro.
- **Medir el acuerdo entre codificadores** (en Desktop: porcentaje de acuerdo, índice de Holsti y alfa de
  Krippendorff; no disponible en la versión Web). Si dos personas codifican de forma independiente y el
  acuerdo es alto, los temas no dependen de quién mira.
- **Exportar tablas** que la parte cuantitativa del análisis puede reutilizar.

## 2. Flujo recomendado con el usuario

1. **Antes de codificar: definir el marco.** Partir de los constructos de
   `constructos-e-instrumentos.md` como códigos iniciales (codificación deductiva) y dejar espacio a
   códigos emergentes (inductiva). Documentar cada código con una definición y un ejemplo en su comentario:
   ese es el libro de códigos que irá al anexo del informe.
2. **Codificar una muestra y revisar.** Con 3 o 4 documentos codificados, revisar el libro de códigos:
   fusionar duplicados, dividir códigos demasiado amplios. Si hay dos codificadores, calcular el acuerdo
   aquí y renegociar definiciones antes de seguir.
3. **Codificar el resto** y escribir memos con las interpretaciones a medida que aparecen, fechadas.
4. **Analizar dentro de ATLAS.ti**: tabla código-documento (frecuencia de cada código por documento o
   grupo), tabla de coocurrencia (qué códigos aparecen juntos en las mismas citas), redes y diagramas de
   Sankey para visualizar relaciones.
5. **Exportar** lo que el informe necesita (ver apartado 3) y seguir en Python con el script
   `scripts/cualitativo_atlasti.py` para integrarlo con los datos cuantitativos y generar gráficos
   homogéneos con el resto del informe.
6. **Devolver** en el informe: tabla de temas con definición, frecuencia (personas o documentos, no solo
   citas) y 1-2 citas literales anonimizadas por tema; convergencias y divergencias con los datos
   cuantitativos.

## 3. Exportaciones útiles y cómo tratarlas

| Qué exportar | Dónde (Desktop) | Para qué sirve después |
|---|---|---|
| Lista de citas con sus códigos y documento (Excel) | Quotation Manager o Quotation Reader, botón de exportación a Excel; se exportan las columnas visibles | Entrada principal del script `cualitativo_atlasti.py`: frecuencias, matriz código-documento, coocurrencias |
| Libro de códigos (Excel o QDC) | Pestaña Import & Export, Export Codebook | Anexo del informe; reutilización en otros proyectos |
| Tabla código-documento y tabla de coocurrencia (Excel) | Desde la propia herramienta de análisis | Ya agregadas; se pueden graficar directamente |
| Sintaxis SPSS | Project > Export | Codes como variables y citas como casos (valores 0/1); también legible con PSPP |
| Excel genérico | Project > Export | Importable en R, Python, SPSS, Stata |
| Proyecto completo en QDPX (estándar REFI-QDA) | Project > Export > REFI-QDA Project (QDPX) | Intercambio con otros programas (NVivo, MAXQDA...). Solo incluye lo que todos los programas comparten; no sirve para migrar entre versiones de ATLAS.ti |

Notas prácticas:

- La exportación de citas es "lo que ves es lo que exportas": pide al usuario que muestre al menos las
  columnas de documento, códigos y contenido de la cita antes de exportar. Los nombres de columna varían
  con la versión y el idioma del programa, por eso el script acepta un mapeo de columnas.
- En ATLAS.ti un código es dicotómico (la cita lo tiene o no). Para codificar intensidades u ordinales hay
  que usar una convención de nombres (el manual describe el formato `nombre%valor`) o atributos de documento.
- Al exportar citas agrupadas por código, ATLAS.ti crea una hoja por código; el script lee todas las hojas.
- Cuenta siempre **personas o documentos** que mencionan un tema, no solo número de citas: una persona muy
  habladora infla las citas.

## 4. Funciones de IA de ATLAS.ti: cómo tratarlas

El fabricante ofrece codificación con IA ("AI Coding" e "Intentional AI Coding", que pide primero la
pregunta o el foco de investigación), conversación con documentos y, desde la versión 26.1 de Desktop
(julio de 2026 según su historial de versiones), un **servidor MCP** local que permite conectar un cliente
de IA como Claude Desktop o Claude Code al proyecto para leer y, con permiso, escribir en él. El fabricante
indica que el servidor MCP requiere macOS 15 o superior; comprueba los requisitos actuales.

Criterios para usarlas con rigor:

- La codificación automática es un **primer borrador**, nunca el resultado. El investigador revisa cada
  código y cada cita; documenta en el informe que se usó IA y cómo se revisó.
- Las funciones de IA del programa envían texto a un proveedor externo (el fabricante menciona OpenAI);
  existe un modo de privacidad que las desactiva. Con datos de menores, pregunta al usuario qué autoriza su
  consentimiento informado antes de activar nada.
- Si el usuario tiene el servidor MCP configurado, puedes leer códigos, citas y memos directamente desde
  esta sesión y ahorrarte las exportaciones manuales. Trátalo como fuente de datos: nunca modifiques el
  proyecto del usuario sin pedírselo de forma explícita.
- El acuerdo entre codificadores sigue siendo la garantía de calidad, con o sin IA.

## 5. Alternativas cuando no hay ATLAS.ti

Si el usuario no tiene licencia, el mismo flujo se puede hacer con otros programas CAQDAS (NVivo, MAXQDA,
QDA Miner Lite, Taguette, que es libre) o con una hoja de cálculo bien estructurada (una fila por cita,
columnas: documento, participante, código, texto). El script `cualitativo_atlasti.py` acepta cualquier
tabla con esa estructura, no solo exportaciones de ATLAS.ti.

## Fuentes consultadas (noviembre de 2026)

- Documentación de exportación de ATLAS.ti (Windows): https://manuals.atlasti.com/Win/en/manual/Export/Export.html
- Exportación para análisis estadístico y sintaxis SPSS: https://doc.atlasti.com/ManualWin.v9/Export/ExportForFurtherStatisticalAnalysis.html y https://doc.atlasti.com/ManualWin.v9/Export/ExportSpssSyntax.html
- QDPX / REFI-QDA: https://atlasti.com/pt/features/project-export-in-qdpx-format y https://doc.atlasti.com/ManualMac.v9/Export/ExportQDPXUniversalDataExchange.html
- Opciones de exportación en Windows, Mac y Web: https://atlastihelp.helpscoutdocs.com/article/762-export-options-in-atlas-ti-windows-mac-and-web
- Informes y exportación de citas (Mac): https://doc.atlasti.com/ManualMac.v22/Reports/Reports.html
- Acuerdo entre codificadores: https://atlastihelp.helpscoutdocs.com/article/723-how-to-measure-inter-coder-agreement-in-atlas-ti
- Codificación con IA: https://atlastihelp.helpscoutdocs.com/article/729-how-to-use-ai-coding-in-atlas-ti y https://atlasti.com/es/intentional-ai-coding
- Información oficial sobre IA y servidor MCP: https://atlasti.com/ai-info y https://atlasti.com/mcp-release
- Historial de versiones (26.1.0, 26.1.1, 26.1.2): https://atlasti.com/updates
- Comparativa Desktop y Web: https://atlasti.com/atlas-ti-product-feature-comparison
- Uso en investigación educativa (ejemplos de literatura en español): San Martín-Cantero (2014), *Revista Electrónica de Investigación Educativa*; Sabariego-Puig, Vilà-Baños y Sandín-Esteban (2014), *REIRE*. Verifica la cita completa antes de usarla en un informe.
