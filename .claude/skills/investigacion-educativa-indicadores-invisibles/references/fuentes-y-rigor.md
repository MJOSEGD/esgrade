# Fuentes, estrategia de búsqueda y rúbrica de rigor

Lee este archivo al empezar la Fase 2 (búsqueda y valoración de evidencia).

## 1. Dónde buscar

Orden recomendado: primero los repositorios que ya han hecho la síntesis y la valoración de rigor,
después las bases de datos académicas, por último la literatura gris institucional.

### Repositorios de evidencia sintetizada (empieza aquí)

| Recurso | Qué ofrece | Uso típico |
|---|---|---|
| Education Endowment Foundation (EEF), Teaching and Learning Toolkit | Síntesis de metaanálisis por tipo de intervención, con coste, solidez de la evidencia y meses de progreso | Saber si una intervención (p. ej. aprendizaje socioemocional, metacognición) tiene respaldo |
| What Works Clearinghouse (WWC, IES, EE. UU.) | Valoración de estudios individuales con estándares explícitos de diseño | Comprobar si un programa concreto cumple estándares de rigor |
| Campbell Collaboration (grupo de educación) | Revisiones sistemáticas con protocolo registrado | Revisiones sobre bienestar, conducta, participación |
| Best Evidence Encyclopedia (Johns Hopkins) | Síntesis de programas con criterios de evidencia | Programas escolares evaluados |
| OECD iLibrary / PISA (informes de bienestar del alumnado, Learning Compass 2030) | Datos comparados internacionales e indicadores de bienestar, pertenencia y agencia | Marcos conceptuales y valores de referencia por país |
| UNESCO (Educación para el Desarrollo Sostenible, objetivos de aprendizaje) y GreenComp (Comisión Europea, JRC) | Marcos de competencias de sostenibilidad | Operacionalizar "compromiso con la sostenibilidad" |

### Bases de datos académicas

- **ERIC** (eric.ed.gov): la base de referencia en educación; gratuita; filtra por "peer reviewed".
- **Dialnet**, **Redalyc**, **SciELO**: producción en español y portugués; imprescindibles para contexto
  iberoamericano y para validaciones de instrumentos en español.
- **Scopus** y **Web of Science**: cobertura amplia y métricas de citación; requieren suscripción.
- **PsycINFO**: constructos psicológicos (bienestar, autoeficacia, motivación).
- **OpenAlex**, **Semantic Scholar**, **Crossref**: abiertas y con API; útiles para localizar DOI,
  comprobar que una referencia existe y rastrear citas. Si tienes acceso de red, usa estas APIs para
  verificar cada cita antes de incluirla.
- **Google Scholar**: para búsquedas exploratorias y para encontrar versiones en acceso abierto;
  no filtra por calidad, así que nunca es la única fuente.
- **CORE** y repositorios institucionales: acceso abierto a tesis y preprints.

### Literatura gris que sí merece la pena

Informes de la OCDE, UNESCO, UNICEF (Innocenti, informes sobre bienestar infantil), Comisión Europea
(Eurydice, JRC), ministerios e institutos nacionales de evaluación. Son útiles para marcos y datos de
referencia; valóralos como "informe institucional", no como estudio primario con revisión por pares.

## 2. Cómo construir la búsqueda

Combina tres bloques con operadores booleanos: **constructo** AND **población o etapa** AND **tipo de
estudio o instrumento**. Busca en inglés y en español; la mayoría de validaciones en castellano están en
Dialnet o SciELO y no aparecen con términos ingleses.

Ejemplos de cadenas:

```
("student well-being" OR "student wellbeing" OR "subjective well-being") AND (school OR secondary OR adolescen*)
  AND (meta-analysis OR "systematic review")

("student agency" OR "learner agency" OR "student voice" OR "self-determination")
  AND (school OR classroom) AND (scale OR questionnaire OR validation OR measure)

("sense of belonging" OR "school belonging" OR "school connectedness") AND (intervention OR program*) AND (effect*)

(bienestar OR "bienestar subjetivo" OR "bienestar escolar") AND (alumnado OR estudiantes OR adolescentes)
  AND (validación OR escala OR cuestionario)

("agencia del alumnado" OR "agencia estudiantil" OR "voz del alumnado" OR "participación estudiantil")
  AND (educación secundaria OR universidad)
```

Pautas:

- Empieza por los últimos 10 años; amplía si el constructo tiene instrumentos clásicos (muchos son de los
  años 90 y siguen siendo la referencia).
- Guarda la cadena exacta, la base de datos, la fecha y el número de resultados. Va al anexo del informe.
- Revisa las referencias de las revisiones sistemáticas que encuentres ("bola de nieve hacia atrás") y
  quién las cita después ("hacia adelante").
- Para en un punto razonable: cuando tres fuentes de calidad coinciden y las nuevas no añaden nada, basta.
  El informe es para actuar, no una tesis.

## 3. Rúbrica de rigor

Asigna un nivel a cada fuente y escríbelo en su ficha. La jerarquía ayuda, pero no sustituye a leer el
estudio: un metaanálisis con estudios flojos vale menos que un buen cuasiexperimento.

| Nivel | Tipo de estudio | Qué permite afirmar |
|---|---|---|
| A | Revisión sistemática o metaanálisis con protocolo (idealmente PRISMA) y valoración del riesgo de sesgo | Síntesis sólida del efecto medio y su heterogeneidad |
| B | Ensayo aleatorizado (incluidos ensayos por aulas o centros) con muestra suficiente y baja pérdida de participantes | Efecto causal en ese contexto |
| C | Cuasiexperimento con grupo de comparación y control de diferencias previas (emparejamiento, diferencias en diferencias, regresión discontinua) | Efecto plausible, con cautelas sobre sesgo de selección |
| D | Estudio longitudinal o correlacional con muestra amplia y modelos adecuados (p. ej. multinivel) | Asociaciones y predictores; no causalidad |
| E | Estudio descriptivo, pre/post sin grupo de comparación, estudio de caso, investigación cualitativa | Descripción, mecanismos, hipótesis; evidencia de contexto |
| F | Opinión experta, informe sin datos, material divulgativo | Marco conceptual; nunca como prueba de eficacia |

Para cada estudio, anota además:

- **Muestra**: tamaño, edad o etapa, país, tipo de centro. Un resultado en universidades estadounidenses
  no se traslada sin más a primaria en España.
- **Medida**: qué instrumento, qué fiabilidad reporta, si es autoinforme.
- **Resultado principal con su magnitud**: tamaño del efecto e intervalo de confianza si lo hay, no solo
  "significativo".
- **Limitaciones declaradas por los autores** y las que tú detectes (pérdida muestral, falta de
  preregistro, conflicto de interés del desarrollador del programa).
- **Estado de verificación**: "verificada" solo si has abierto el texto completo o el registro oficial
  (DOI, ERIC). "Solo resumen" si leíste el abstract. "Pendiente" si procede de memoria o de una cita
  indirecta. Las pendientes no sostienen afirmaciones en el informe.

### Señales de alerta

- Tamaños del efecto enormes (por encima de 1,0) en intervenciones breves sobre bienestar: casi siempre
  hay un problema de diseño o de medida.
- Síntesis que promedian efectos de constructos distintos como si fueran uno.
- Instrumentos "propios" sin propiedades psicométricas publicadas.
- Metaanálisis de metaanálisis con rankings de factores: son populares y útiles como mapa, pero han
  recibido críticas metodológicas serias; úsalos para orientarte, no para cerrar una discusión.
- Estudios financiados o realizados por quien vende el programa evaluado, sin evaluación independiente.

## 4. Estándares de reporte que conviene conocer

Sirven para valorar estudios ajenos y para escribir el propio informe:

- **PRISMA 2020** para revisiones sistemáticas.
- **CONSORT** para ensayos aleatorizados; **STROBE** para estudios observacionales.
- **COREQ** y **SRQR** para investigación cualitativa.
- **APA JARS** (Journal Article Reporting Standards) para estudios cuantitativos, cualitativos y mixtos.
- **Estándares del WWC** para juzgar diseño, pérdida muestral y equivalencia inicial.

## 5. Cómo citar en el informe

Usa estilo APA 7. Incluye DOI o URL estable siempre que exista. En el cuerpo del informe, acompaña cada
afirmación basada en literatura con la cita y el nivel de rigor entre corchetes, por ejemplo:
"(Autor, año) [Nivel A]". En el anexo, la ficha completa de cada fuente con el formato de
`assets/ficha-fuente.md`.
