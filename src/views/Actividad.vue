<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Diagnóstico turístico del territorio',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Lea la afirmación de cada ítem y luego señale verdadero o falso según corresponda.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'El territorio de un país incluye no solo la superficie terrestre, sino también el espacio aéreo y marítimo correspondiente.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el diagnóstico turístico del territorio.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'El diagnóstico territorial se centra exclusivamente en los aspectos físicos del territorio, como el relieve y el clima, sin considerar los factores sociales, económicos o culturales.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el diagnóstico turístico del territorio.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'El diagnóstico turístico consiste en el análisis de los recursos, la infraestructura, la demanda y la oferta turística de un destino para identificar sus fortalezas y debilidades, con el fin de desarrollar estrategias de mejora.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el diagnóstico turístico del territorio.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'En las etapas del diseño turístico, la fase de "Planificación" se enfoca únicamente en la promoción y comercialización de los destinos turísticos.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el diagnóstico turístico del territorio.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'La normativa de las etapas del diseño turístico establece que la planificación del espacio turístico debe realizarse únicamente en la fase de evaluación, antes de iniciar cualquier diseño conceptual.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el diagnóstico turístico del territorio.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'En las etapas del diagnóstico turístico, la fase de recopilación de información es aquella en la que se analizan los datos recolectados para identificar las oportunidades y amenazas del destino turístico.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el diagnóstico turístico del territorio.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'El marco normativo del turismo en muchos países incluye regulaciones específicas para la protección del medio ambiente y el patrimonio cultural, estableciendo sanciones en caso de incumplimiento.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el diagnóstico turístico del territorio.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'Los actores del turismo en un territorio, como empresarios, comunidades locales y autoridades gubernamentales, deben trabajar de manera coordinada para garantizar un desarrollo turístico sostenible y respetuoso con el entorno cultural y ambiental.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el diagnóstico turístico del territorio.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'El diagnóstico de la demanda y oferta turística en un territorio implica analizar tanto los recursos y servicios disponibles para los visitantes como las características y preferencias de los turistas.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el diagnóstico turístico del territorio.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'La estacionalidad es un factor que afecta la demanda turística, ya que ciertos destinos reciben más visitantes en temporadas específicas del año.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el diagnóstico turístico del territorio.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'La oferta turística de un destino incluye únicamente los alojamientos y restaurantes disponibles para los visitantes.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el diagnóstico turístico del territorio.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            'La capacitación del personal que trabaja en el sector turístico es esencial para garantizar un servicio de calidad a los turistas.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el diagnóstico turístico del territorio.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'La sostenibilidad en el turismo se refiere únicamente a la conservación de los recursos naturales, sin considerar la cultura local.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el diagnóstico turístico del territorio.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            'Las encuestas a turistas son una herramienta útil para evaluar la satisfacción del visitante y conocer sus expectativas.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el diagnóstico turístico del territorio.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            'La identificación de las debilidades en la infraestructura turística es un paso clave en el diagnóstico para mejorar la experiencia del turista.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el diagnóstico turístico del territorio.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'El análisis de la competencia es irrelevante en el diagnóstico turístico, ya que cada destino es único y no debe compararse con otros.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el diagnóstico turístico del territorio.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'Los eventos y festivales locales pueden ser considerados como parte de la oferta turística de un destino.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el diagnóstico turístico del territorio.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'Un diagnóstico turístico debe incluir únicamente datos cuantitativos, como el número de visitantes, sin considerar datos cualitativos.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el diagnóstico turístico del territorio.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            'La participación de la comunidad local en el diagnóstico turístico es importante para asegurar que las estrategias desarrolladas sean inclusivas y respetuosas con sus intereses.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el diagnóstico turístico del territorio.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'La evaluación del impacto ambiental del turismo es un aspecto secundario en el diagnóstico, ya que el crecimiento económico es la única prioridad.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el diagnóstico turístico del territorio.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Lo felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
