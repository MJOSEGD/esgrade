# Métodos, análisis y cautelas

Lee este archivo en la Fase 3 (diseño del análisis) y vuelve a él al interpretar resultados.

## 1. Elegir el diseño según los datos que hay

| Datos disponibles | Diseño posible | Qué se puede concluir |
|---|---|---|
| Una medición, un grupo | Descriptivo | Cómo está el grupo; dónde hay techo o dispersión; qué perfiles aparecen |
| Una medición, varios grupos (cursos, centros, itinerarios) | Comparativo transversal | Diferencias entre grupos; no se puede atribuir causa |
| Dos mediciones (pre/post), un grupo | Pre/post sin control | Cambio en el tiempo; no se puede atribuir al programa (maduración, otros eventos, regresión a la media) |
| Dos mediciones, grupo que participó y grupo que no | Cuasiexperimental (diferencias en diferencias) | Efecto plausible del programa si los grupos eran comparables al inicio |
| Asignación aleatoria de aulas o alumnos | Experimental | Efecto causal en ese contexto |
| Varias variables en el mismo momento | Correlacional | Asociaciones; hipótesis sobre mecanismos |
| Entrevistas, grupos focales, textos abiertos | Cualitativo (análisis temático) | Significados, mecanismos, matices; complementa lo cuantitativo |
| Cuantitativo + cualitativo | Mixto | Qué pasa y por qué; el más útil en centros educativos |

Casi siempre el usuario tendrá los tres primeros casos. No es un problema: un buen descriptivo bien
contextualizado con la literatura es una investigación legítima. Lo que no es legítimo es presentar un
pre/post sin control como prueba de eficacia.

## 2. Preparar las puntuaciones

1. **Recodifica los ítems inversos** antes de nada: nuevo valor = (mín + máx) − valor.
2. **Comprueba la fiabilidad** de cada escala con alfa de Cronbach (y omega de McDonald si puedes).
   Orientación habitual: por encima de 0,70 aceptable para investigación; por encima de 0,80 buena.
   Con escalas de 3 o 4 ítems, alfas de 0,60-0,70 son frecuentes y no invalidan el uso descriptivo, pero
   avísalo. Mira también la correlación ítem-total: un ítem por debajo de 0,30 probablemente no pertenece
   a la escala.
3. **Calcula la puntuación de escala** como media de los ítems (no suma) si hay valores perdidos; exige al
   menos el 70 % de los ítems respondidos para calcularla.
4. **Valores perdidos**: informa cuántos hay y por qué. Si faltan más del 10-15 % en un ítem, pregúntate si
   la pregunta se entendió. No imputes sin decirlo.
5. **Efectos techo y suelo**: porcentaje de respuestas en el valor máximo o mínimo. Por encima del 20-25 %
   en el techo, la escala no discrimina bien en ese grupo y los cambios pre/post quedan comprimidos.

## 3. Estadísticos y cuándo usarlos

| Pregunta | Estadístico | Alternativa si la distribución es muy asimétrica o la muestra pequeña |
|---|---|---|
| ¿Cómo está el grupo? | Media, desviación típica, mediana, percentiles, % en cada categoría | Igual; añade el gráfico de distribución |
| ¿Difieren dos grupos independientes? | t de Welch | U de Mann-Whitney |
| ¿Cambió el mismo grupo entre dos momentos? | t para muestras relacionadas (requiere identificador por persona) | Prueba de Wilcoxon |
| ¿Difieren tres o más grupos? | ANOVA de un factor | Kruskal-Wallis |
| ¿Se relacionan dos dimensiones? | Correlación de Spearman (escalas Likert) | Igual |
| ¿Qué predice un indicador controlando otros? | Regresión lineal múltiple | Regresión ordinal |
| ¿Los alumnos están anidados en aulas o centros? | Modelo multinivel; informa el coeficiente de correlación intraclase (ICC) | Como mínimo, analiza y representa la variabilidad entre aulas |

Acompaña **siempre** el valor p de un tamaño del efecto y su intervalo de confianza. El valor p depende de
la muestra; la magnitud es lo que interesa al centro.

## 4. Tamaños del efecto e interpretación

- **g de Hedges** (o d de Cohen) para diferencias de medias: diferencia dividida por la desviación típica
  combinada. El script lo calcula con su intervalo de confianza al 95 %.
- **Eta cuadrado** para ANOVA; **rho de Spearman** para correlaciones.
- Umbrales clásicos de Cohen (0,2 pequeño, 0,5 mediano, 0,8 grande) proceden de la psicología y resultan
  demasiado exigentes para intervenciones educativas. Trabajos recientes sobre tamaños del efecto en
  educación (por ejemplo, Kraft, 2020, en *Educational Researcher*; verifica la cita) proponen
  considerar relevante un efecto desde 0,05-0,10 cuando la intervención es barata y escalable, y
  tratar efectos por encima de 0,20 como grandes en evaluaciones rigurosas. Interpreta siempre en
  relación con lo que la literatura encuentra en intervenciones parecidas.
- Traduce la magnitud a algo tangible para el lector: "equivale a que un alumno medio pase del percentil
  50 al 58" o "la diferencia entre cursos es mayor que el cambio logrado por el programa en un año".

## 5. Cautelas específicas de los indicadores invisibles

- **Muestra pequeña.** Con menos de 30 casos por grupo, los intervalos de confianza serán amplios. Dilo y
  evita conclusiones firmes. Con menos de 5 casos en un grupo, no publiques ese grupo por separado
  (privacidad y fiabilidad); el script lo suprime por defecto.
- **Cambios en la composición.** Si en el pre había 120 alumnos y en el post 85, compara solo quienes
  respondieron en ambos momentos cuando tengas identificador; si no, informa de la pérdida y de si los que
  faltan se parecían al resto.
- **Deseabilidad social y aquiescencia.** Más fuertes cuando el cuestionario lo pasa el propio docente y
  no es anónimo. Anota las condiciones de aplicación.
- **Regresión a la media.** Los grupos seleccionados por puntuar bajo mejoran solos en parte.
- **Efecto del momento.** Encuestas pasadas la semana de exámenes o tras un conflicto cambian todo el
  perfil. Pregunta cuándo se aplicó.
- **Comparaciones múltiples.** Si cruzas 8 escalas por 4 grupos, algo saldrá "significativo" por azar.
  Prioriza las comparaciones del plan de análisis y trata el resto como exploratorio.
- **Causalidad inversa.** El bienestar puede causar participación tanto como la participación bienestar.
  Con datos transversales, no elijas dirección.

## 6. Análisis cualitativo

Cuando hay respuestas abiertas, entrevistas o grupos focales:

1. Lee todo el material antes de codificar.
2. Aplica un **análisis temático** (el procedimiento de Braun y Clarke es la referencia habitual):
   familiarización, codificación inicial, búsqueda de temas, revisión, definición y redacción.
3. Mantén una tabla de códigos con definición, ejemplo textual y frecuencia aproximada.
4. Cita fragmentos literales anonimizados para sostener cada tema; indica cuántas personas lo expresaron
   ("8 de 23 docentes") en lugar de "muchos".
5. Contrasta los temas con los resultados cuantitativos: la convergencia refuerza; la divergencia es un
   hallazgo que hay que explicar, no esconder.

## 7. Ética y protección de datos

- Trabaja con datos **anonimizados o seudonimizados**. Si recibes nombres, elimínalos antes de analizar y
  dile al usuario que lo has hecho.
- No informes de resultados que permitan identificar a una persona (grupos de menos de 5, cruces muy
  finos, citas con detalles reconocibles).
- Para nuevas recogidas de datos con menores, recuerda al usuario que necesita consentimiento informado
  (de las familias y, según la edad y la normativa aplicable, del propio menor) y una finalidad clara.
  En España, la normativa de protección de datos fija la edad de consentimiento propio en 14 años; verifica
  la normativa vigente del país del usuario y, en universidades, el procedimiento de su comité de ética.
- Las guías éticas de asociaciones de investigación educativa (BERA en Reino Unido, AERA en EE. UU.) son
  referencias útiles para redactar un apartado de ética en el informe.
- La devolución de resultados es parte de la ética: el alumnado y las familias que respondieron merecen
  saber qué se encontró y qué se va a hacer.

## 8. Lista de comprobación antes de cerrar el informe

- [ ] Cada afirmación tiene su nivel: muestra / sugiere / no permite concluir.
- [ ] Cada cifra del texto coincide con la tabla o el gráfico de donde sale.
- [ ] Cada cita de literatura está verificada o marcada como pendiente.
- [ ] Los gráficos muestran la escala completa, el n y la incertidumbre.
- [ ] Se explican la muestra, la tasa de respuesta y los valores perdidos.
- [ ] Las recomendaciones son accionables y tienen indicador de seguimiento.
- [ ] Ningún grupo pequeño ni ninguna persona es identificable.
- [ ] El código y los datos procesados permiten reproducir todo.
