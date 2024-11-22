<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Informe diagnóstico turístico
    
    p.mb-5(data-aos="fade-left") El informe diagnóstico turístico en Colombia es un documento clave para analizar la situación actual del sector, identificar fortalezas, debilidades y oportunidades, y trazar estrategias de desarrollo. Gracias a su biodiversidad, riqueza cultural y geográfica, Colombia ha emergido como un destino turístico de interés tanto a nivel regional como global. Sin embargo, enfrenta retos significativos que deben ser abordados para consolidar su crecimiento sostenible en este sector.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una de las fortalezas más destacadas en el informe es la diversidad de destinos, que incluyen desde playas caribeñas hasta selvas amazónicas, pasando por montañas andinas y sitios arqueológicos de gran valor cultural, como San Agustín y Ciudad Perdida. Además, el turismo de naturaleza y aventura ha ganado fuerza, impulsado por la creciente tendencia hacia el ecoturismo y la sostenibilidad. Ciudades como Bogotá, Medellín y Cartagena también se han posicionado como destinos turísticos urbanos de referencia.
          br
          br
          | 

    p.mb-5(data-aos="fade-left") Sin embargo, el informe resalta importantes debilidades. La infraestructura turística sigue siendo insuficiente en varias regiones, especialmente en zonas rurales o de difícil acceso. A pesar de la mejora en la percepción de seguridad en las últimas décadas, esta sigue afectando la imagen del país. También se identifican desafíos relacionados con la falta de capacitación adecuada en algunos sectores del turismo y la necesidad de un mayor enfoque en la promoción internacional.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon.color-secundario.p-4
          p.mb-0 El informe destaca oportunidades estratégicas, como el potencial del turismo comunitario y sostenible, que puede beneficiar a las comunidades locales y preservar el medio ambiente. El turismo en Colombia tiene un amplio margen de crecimiento, y la implementación de políticas adecuadas podría posicionar al país como un referente en turismo sostenible a nivel mundial.

    p.mb-5(data-aos="fade-left") Un informe diagnóstico turístico evalúa el estado actual de una zona o destino turístico con el fin de identificar fortalezas, debilidades, oportunidades y amenazas (análisis FODA) en términos de su potencial turístico. Este informe suele ser el primer paso para la planificación y desarrollo de estrategias turísticas. A continuación, se presenta una estructura básica de un informe diagnóstico turístico: 

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-11.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span <i>Estructura básica de un informe diagnóstico turístico.</i>
        .tabla-a.clstabla.color-acento-contenido
          table
            thead
              tr
                th Método
                th Descripción
            tbody
              tr(style="background-color: #F6F6F6; width: 20%")
                td.text-bold Introducción
                td 
                  ul.lista-ul
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 <b>Objetivo</b>: explicar el propósito del informe y qué se espera lograr con el diagnóstico.
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 <b>Alcance</b>: delimitar la región o área turística que será evaluada.
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 <b>Metodología</b>: describir los métodos y técnicas utilizados para recopilar la información (entrevistas, encuestas, observación directa, análisis de datos secundarios, etc.).
              tr
                td.text-bold Descripción del destino
                td 
                  ul.lista-ul
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 <b>Ubicación geográfica</b>: explicar dónde se encuentra el destino y cómo llegar a él.
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 <b>Accesibilidad</b>: descripción de las vías de acceso (carreteras, aeropuertos, transporte público, etc.).
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 <b>Características geográficas y climáticas</b>: describir el entorno natural, relieve, clima, biodiversidad, entre otros.
              tr(style="background-color: #F6F6F6; width: 20%")
                td.text-bold Oferta turística 
                td 
                  ul.lista-ul
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 <b>Atractivos turísticos</b>: detallar los principales atractivos (naturales, culturales, históricos, gastronómicos, etc.).
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 <b>Productos y servicios turísticos: evaluar la calidad de los servicios y productos disponibles para los turistas.</b>
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 <b>Actividades turísticas</b>: listar y evaluar las actividades disponibles para los turistas, como ecoturismo, deportes, turismo cultural, entre otros.
              tr
                td.text-bold Demanda turística
                td 
                  ul.lista-ul
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 <b>Perfil del turista</b>: descripción del tipo de turista que visita la zona (nacional, extranjero, edades, intereses, etc.).
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 <b>Estacionalidad</b>: identificar las temporadas altas y bajas de turismo.
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 <b>Tendencias de demanda</b>: análisis de las tendencias actuales y potenciales en el número de visitantes.
              tr(style="background-color: #F6F6F6; width: 20%")
                td.text-bold Análisis FODA
                td 
                  ul.lista-ul
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 <b>Fortalezas</b>: aspectos positivos del destino que lo hacen atractivo para los turistas.
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 <b>Oportunidades</b>: potencial de crecimiento o desarrollo.
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 <b>Debilidades</b>: aspectos que limitan el desarrollo turístico.
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 <b>TAmenazas</b>: factores externos que podrían afectar negativamente al turismo en el área.
              tr
                td.text-bold Análisis socioeconómico
                td 
                  ul.lista-ul
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 <b>Impacto del turismo en la economía local</b>: empleo generado, ingresos, efectos sobre los negocios locales.
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 <b>Relación con la comunidad local</b>: impacto del turismo en la vida cotidiana de los habitantes, percepción de la comunidad sobre el turismo.
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 <b>Sostenibilidad</b>: evaluación de cómo el turismo afecta al medio ambiente y la cultura local. Estrategias de turismo sostenible.
              tr(style="background-color: #F6F6F6; width: 20%")
                td.text-bold Competencia
                td 
                  ul.lista-ul
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 <b>Destinos turísticos similares</b>: comparación con destinos que compiten por el mismo tipo de turistas.
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 <b>Posicionamiento</b>: análisis del lugar que ocupa el destino en comparación con sus competidores.
              tr
                td.text-bold Conclusiones y recomendaciones 
                td 
                  ul.lista-ul
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 <b>Conclusiones</b>: resumen de los hallazgos principales.
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 <b>Recomendaciones</b>: sugerencias para mejorar la oferta turística, infraestructura, <em>marketing</em>, sostenibilidad, entre otros aspectos.
              tr(style="background-color: #F6F6F6; width: 20%")
                td.text-bold Plan de acción (opcional)
                td 
                  ul.lista-ul
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 Desarrollo de un plan estratégico con medidas concretas a tomar a corto, mediano y largo plazo para mejorar la competitividad del destino.
              tr
                td.text-bold Fuentes
                td 
                  ul.lista-ul
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 Listado de las referencias utilizadas para la elaboración del informe.


    p.mb-5(data-aos="fade-left") Este tipo de informe es fundamental para que las autoridades locales, empresarios y la comunidad en general puedan tomar decisiones informadas para impulsar el desarrollo turístico de una región.
              
    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Procedimientos en la recolección de la información turística

    p.mb-5(data-aos="fade-left") La recolección de información turística es fundamental para desarrollar estrategias efectivas en la promoción y gestión del turismo. Los procedimientos utilizados en esta tarea son variados y deben seleccionarse en función de los objetivos específicos.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-9.position-relative
        .avatar
          figure
            img(src="@/assets/curso/temas/tema5/img05.svg", alt="Imagen decorativa").img250
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema5/img02.svg", alt="Imagen decorativa").img100
            .col
              p <b>Primero</b>, es necesario definir claramente las fuentes de información, que pueden ser tanto primarias como secundarias. Las fuentes primarias incluyen encuestas, entrevistas y observación directa en el lugar turístico. Las encuestas, tanto en línea como presenciales, permiten obtener datos cuantitativos y cualitativos de los turistas sobre sus experiencias, preferencias y expectativas. Por su parte, las entrevistas ofrecen una visión más profunda de la percepción de los visitantes y de los actores locales.
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema5/img03.svg", alt="Imagen decorativa").img100
            .col
              p <b>En segundo lugar</b>, es esencial establecer un sistema de categorización y análisis de los datos recolectados. Los datos obtenidos deben organizarse en categorías como demografía, gasto turístico, satisfacción del cliente y opiniones sobre infraestructura, para su posterior análisis. Las herramientas tecnológicas, como bases de datos y <em>software</em> de análisis, facilitan la interpretación de grandes volúmenes de información
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema5/img04.svg", alt="Imagen decorativa").img100
            .col
              p <b>Finalmente</b>, es necesario validar los datos, garantizando su fiabilidad y representatividad, para que puedan ser utilizados en la toma de decisiones estratégicas. Con procedimientos adecuados, la información turística puede ayudar a mejorar la experiencia del turista y optimizar el desarrollo de destinos.

    p.mb-5(data-aos="fade-left") La recolección de información turística es un proceso esencial para entender las preferencias, comportamientos y necesidades de los turistas, así como para la planificación y desarrollo de destinos turísticos. A continuación, se detallan algunos procedimientos comunes en la recolección de esta información:

    .tarjeta.tarjeta--BG10.p-4.mb-5(data-aos="flip-up")
      .tarjeta.tarjeta--blanca.p-md-5.p-4
        SlyderA(tipo="b")
          .row.justify-content-center.p-4
            .col-lg-6.order-lg-1.order-2
              h4 Definir los objetivos de la investigación, estos pueden incluir:
              ul.lista-ul
                  li.mb-1 
                    i.lista-ul__vineta
                    p.mb-0 Conocer el perfil del turista (edad, género, nacionalidad, entre otros).
                  li.mb-1 
                    i.lista-ul__vineta
                    p.mb-0 Identificar las preferencias turísticas (actividades, lugares de interés, entre otros). 
                  li.mb-1 
                    i.lista-ul__vineta
                    p.mb-0 Analizar el gasto promedio y hábitos de consumo.
                  li.mb-1 
                    i.lista-ul__vineta
                    p.mb-0 Medir la satisfacción del turista con el destino y los servicios.
          
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img06.png', alt='Imagen decorativa')

          .row.justify-content-center.p-4
            .col-lg-6.order-lg-1.order-2
              h4 Seleccionar las fuentes de información, entre las cuales se destacan:
              ul.lista-ul
                  li.mb-1 
                    i.lista-ul__vineta
                    p.mb-0 <b>Primarias</b>: datos recolectados directamente de los turistas o actores del sector a través de encuestas, entrevistas, <em>focus groups</em>, entre otros.
                  li.mb-1 
                    i.lista-ul__vineta
                    p.mb-0 <b>Secundarias</b>: datos ya existentes, como estadísticas de organismos gubernamentales, estudios anteriores, reportes de empresas turísticas y bases de datos de turismo.
                              
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img07.png', alt='Imagen decorativa')

          .row.justify-content-center.p-4
            .col-lg-6.order-lg-1.order-2
              h4 Diseñar las herramientas de recolección de datos, según se requiera:
              ul.lista-ul
                  li.mb-1 
                    i.lista-ul__vineta
                    p.mb-0 <b>Encuestas y cuestionarios</b>: son uno de los métodos más comunes y pueden realizarse en línea, cara a cara, por teléfono o por correo electrónico.
                  li.mb-1 
                    i.lista-ul__vineta
                    p.mb-0 <b>Entrevistas en profundidad</b>: para obtener datos cualitativos sobre la experiencia del turista.
                  li.mb-1 
                    i.lista-ul__vineta
                    p.mb-0 <b><em>Focus groups</em></b>: grupos de discusión con turistas o expertos del sector para obtener percepciones y sugerencias sobre ciertos aspectos del destino o servicios turísticos.
                  li.mb-1 
                    i.lista-ul__vineta
                    p.mb-0 <b>Observación directa</b>: observar el comportamiento y las interacciones de los turistas en los destinos.
                  li.mb-1 
                    i.lista-ul__vineta
                    p.mb-0 <b>Recolección de datos automatizada</b>: uso de tecnologías como sensores, dispositivos GPS o análisis de <em><b>big data</b></em> provenientes de redes sociales y plataformas de reseñas como TripAdvisor.
          
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img08.png', alt='Imagen decorativa')

          .row.justify-content-center.p-4
            .col-lg-6.order-lg-1.order-2
              h4 Definir la muestra, precisando a quiénes se les va a aplicar las encuestas o herramientas:
              ul.lista-ul
                  li.mb-1 
                    i.lista-ul__vineta
                    p.mb-0 Tamaño de la muestra.
                  li.mb-1 
                    i.lista-ul__vineta
                    p.mb-0 Características sociodemográficas (edad, sexo y nacionalidad).
                  li.mb-1 
                    i.lista-ul__vineta
                    p.mb-0 Lugar de recolección (aeropuertos, estaciones de tren, hoteles, atracciones turísticas, entre otros).
                  li.mb-1 
                    i.lista-ul__vineta
                    p.mb-0 Temporalidad (temporada alta, baja, ferias o eventos especiales).
          
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img09.png', alt='Imagen decorativa')

          .row.justify-content-center.p-4
            .col-lg-6.order-lg-1.order-2
              h4 Recolección de los datos según el plan establecido, ya sea de manera presencial, en línea o mediante herramientas tecnológica:
              ul.lista-ul
                  li.mb-1 
                    i.lista-ul__vineta
                    p.mb-0 <b>Calidad de los datos</b>: evitar errores, sesgos o preguntas ambiguas.
                  li.mb-1 
                    i.lista-ul__vineta
                    p.mb-0 <b>Ética y confidencialidad</b>: informar a los turistas sobre el uso de la información y garantizar su anonimato si es necesario.
          
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img10.png', alt='Imagen decorativa')

          .row.justify-content-center.p-4
            .col-lg-6.order-lg-1.order-2
              h4 Análisis de la información recolectada:
              ul.lista-ul
                  li.mb-1 
                    i.lista-ul__vineta
                    p.mb-0 <b>Cuantitativo</b>: utilización de estadísticas descriptivas, tablas, gráficos y análisis matemáticos. 
                  li.mb-1 
                    i.lista-ul__vineta
                    p.mb-0 <b>Cualitativo</b>: análisis de opiniones, comentarios o narrativas que describen la experiencia del turista.
          
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img11.png', alt='Imagen decorativa')

          .row.justify-content-center.p-4
            .col-lg-6.order-lg-1.order-2
              h4 Interpretación y presentación de resultados:
              ul.lista-ul
                  li.mb-1 
                    i.lista-ul__vineta
                    p.mb-0 Los resultados deben presentarse de manera clara y comprensible para los tomadores de decisiones. Esto puede hacerse a través de informes, presentaciones o visualizaciones de datos. Además, se deben incluir recomendaciones basadas en los hallazgos.
          
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img12.png', alt='Imagen decorativa')

          .row.justify-content-center.p-4
            .col-lg-6.order-lg-1.order-2
              h4 Monitoreo y evaluación continua
              ul.lista-ul
                  li.mb-1 
                    i.lista-ul__vineta
                    p.mb-0 La recolección de información turística no debe ser un evento aislado, sino un proceso continuo para monitorear cambios en las tendencias, satisfacción y comportamiento de los turistas a lo largo del tiempo. Esto permite la adaptación y mejora continua del destino y sus servicios.
          
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img13.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-left") Para llevar a cabo una recolección de información turística efectiva, es fundamental contar con herramientas tecnológicas que faciliten el proceso y optimicen los resultados. Estas herramientas permiten no solo la recolección, sino también el análisis y la interpretación de los datos, garantizando así que la información obtenida sea útil y pertinente para la toma de decisiones estratégicas. A continuación, se presentan algunas herramientas tecnológicas adicionales que pueden ser de gran ayuda en este contexto:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-xxl-4.col-lg-6.col-sm-10.col-md-8.mb-xxl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema5/img14.svg' alt="Imagen decorativa")
          .tarjetas-up_card.BG04
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 <em>Software</em> de encuestas
            p.text-center.mb-0.px-3 Plataformas como Google Forms, SurveyMonkey y Qualtrics permiten crear y distribuir encuestas de manera sencilla, recopilando datos tanto cuantitativos como cualitativos de los turistas.

      .col-xxl-4.col-lg-6.col-sm-10.col-md-8.mb-xxl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema5/img15.svg' alt="Imagen decorativa")
          .tarjetas-up_card.BG04
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 Plataformas de análisis de redes sociales
            p.text-center.mb-0.px-3 Estas herramientas son esenciales para estudiar reseñas y comentarios en sitios como TripAdvisor, Yelp y redes sociales, lo que proporciona una visión valiosa sobre la percepción del destino y sus servicios.

      .col-xxl-4.col-lg-6.col-sm-10.col-md-8.mb-xxl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema5/img16.svg' alt="Imagen decorativa")
          .tarjetas-up_card.BG04
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 Sistemas de Gestión de Destino (DMS)
            p.text-center.mb-0.px-3 Estas plataformas ayudan a gestionar la información turística en tiempo real, desde la recolección de datos hasta la promoción y gestión del destino, facilitando una respuesta rápida a las necesidades del mercado.

    p.mb-5(data-aos="fade-left") Con la integración de estas herramientas tecnológicas, los profesionales del turismo pueden mejorar significativamente su capacidad para entender y responder a las necesidades de los turistas, lo que a su vez contribuye al desarrollo sostenible de los destinos turísticos.

    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Trabajo de campo en la recolección de información turística

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img17.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El trabajo de campo en la recolección de información turística es fundamental para obtener datos precisos y actualizados. Consiste en observar y analizar el comportamiento de los turistas, las características de los destinos y la oferta de servicios. Este proceso permite identificar las preferencias, necesidades y expectativas de los viajeros, así como las fortalezas y debilidades de los destinos turísticos. La recolección in situ, a través de encuestas, entrevistas o registros de actividades, proporciona información valiosa para mejorar la planificación y promoción turística, contribuyendo a una mejor toma de decisiones y al desarrollo sostenible del sector.
          br
          br
          | 

    p.mb-5(data-aos="fade-left") El trabajo de campo implica la recopilación directa de datos en el entorno donde se desarrollan las actividades turísticas. Este enfoque permite obtener información precisa sobre diversos aspectos del turismo, como la infraestructura, los servicios, las atracciones, el perfil de los turistas y las percepciones de la población local. A continuación, se describen los principales pasos y metodologías para realizar este tipo de recolección de datos:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-11.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span <i>Metodologías para la recolección de información turística.</i>
        .tabla-a.clstabla.color-acento-contenido
          table
            thead
              tr
                th Actividad
                th Descripción
            tbody
              tr(style="background-color: #F6F6F6; width: 20%")
                td.text-bold Definición de objetivos
                td Establecer qué tipo de información se necesita y con qué propósito (mejora de servicios, promoción turística, análisis del comportamiento de los turistas, etc.).                  
              tr
                td.text-bold Selección de metodologías
                td 
                  p.text-bold.mb-3 Elegir entre diferentes métodos de recolección de datos:
                  ul.lista-ul
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 <b>Encuestas y cuestionarios</b>: dirigidos a turistas, prestadores de servicios turísticos o la comunidad local, para recoger opiniones, experiencias y sugerencias. Pueden ser en formato físico o digital.
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 <b>Entrevistas</b>: conversaciones más profundas con actores clave del sector turístico (dueños de hoteles, guías u operadores turísticos) para obtener una perspectiva más detallada y cualitativa.
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 <b>Observación directa</b>: permite registrar el comportamiento de los turistas y la manera en que interactúan con el entorno y los servicios.
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 <b>Fotografía y video</b>: recolección de imágenes y videos para documentar el estado de las instalaciones, paisajes, o cualquier aspecto visual que pueda ser relevante.
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 <b>Análisis de documentos y fuentes locales</b>: revisión de documentos de instituciones turísticas, estadísticas locales, y materiales promocionales.
              tr(style="background-color: #F6F6F6; width: 20%")
                td.text-bold Selección del lugar de trabajo
                td El lugar o los lugares a estudiar dependerán del objetivo del proyecto. Puede ser una región turística, una ciudad en particular, un sitio específico (como un parque natural o una playa), o un área más extensa.
              tr
                td.text-bold Recolección de datos en el terreno
                td 
                  p.mb-3 Durante la visita al lugar, es importante llevar una planificación detallada y ajustarse a ella para no omitir ningún aspecto relevante. Las actividades incluyen:
                  ul.lista-ul
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 Aplicación de encuestas a turistas y lugareños.
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 Entrevistas a personas clave de la industria.
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 Recolección de folletos, mapas y cualquier material turístico disponible.
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 Observación de la infraestructura turística (hoteles, restaurantes, centros de información, transporte, entre otros).
              tr(style="background-color: #F6F6F6; width: 20%")
                td.text-bold Registro y organización de los datos
                td 
                  p.mb-3 Es esencial organizar la información de manera clara y sistemática. Para las encuestas, puede ser útil utilizar <b><em>software</em></b> para la creación de bases de datos (como Excel, Google Sheets o herramientas especializadas en análisis de encuestas).
                  p.mb-0 Las entrevistas pueden ser transcritas o grabadas, y los materiales visuales (fotos o videos) deben etiquetarse adecuadamente.
              tr
                td.text-bold Análisis de los datos
                td Después de la recolección, se analizan los datos para identificar patrones, fortalezas y áreas de mejora en el destino turístico. Los análisis pueden ser cualitativos (análisis de contenido) o cuantitativos (estadísticas descriptivas).
              tr(style="background-color: #F6F6F6; width: 20%")
                td.text-bold Elaboración de Informes
                td El último paso es sintetizar los hallazgos en un informe, que pueda ser manejado por los interesados, como autoridades locales, empresas turísticas o grupos comunitarios, para tomar decisiones sobre el desarrollo y promoción del turismo.

    p.mb-5(data-aos="fade-left") El trabajo de campo es clave para obtener una visión real y completa de la situación turística de un lugar, permitiendo diseñar estrategias adecuadas y basadas en la realidad local.

    separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Participación de los actores del turismo en el diagnóstico del territorio

    p.mb-5(data-aos="fade-left") La participación de los actores del turismo en el diagnóstico del territorio es clave para desarrollar estrategias sostenibles y efectivas. Estos actores, que incluyen a las comunidades locales, empresas turísticas, autoridades gubernamentales y organizaciones no gubernamentales, aportan conocimientos diversos sobre el entorno y sus necesidades. Al involucrarse en el proceso de diagnóstico, se garantiza que las decisiones se tomen de manera inclusiva y con un enfoque que considere tanto los beneficios económicos como la protección del patrimonio cultural y ambiental.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-lg-8.col-12.order-lg-1.order-2 
            p Además, la participación activa de los actores locales favorece una mayor aceptación de las políticas y proyectos implementados, ya que se sienten parte del proceso y, por tanto, más responsables de su éxito. El conocimiento que los residentes y actores clave tienen sobre el territorio es invaluable para identificar problemas y oportunidades que puedan pasar desapercibidos para observadores externos. De esta forma, se fortalece la planificación turística, se previenen impactos negativos y se promueve un desarrollo equilibrado que beneficie a todas las partes involucradas.
            p La participación de los actores en el diagnóstico del territorio es fundamental para garantizar que el desarrollo turístico sea sostenible, inclusivo y coherente con las características y necesidades locales. Esta participación permite identificar las oportunidades, fortalezas, debilidades y amenazas del destino desde múltiples perspectivas, lo que resulta en una planificación más integral y equitativa. 
            .cajon.cajon.color-secundario.p-4.mb-3
              p.mb-0 En síntesis, la inclusión de los actores del turismo en el diagnóstico del territorio asegura que las iniciativas sean más efectivas, responsables y alineadas con las necesidades locales y la sostenibilidad a largo plazo. A continuación, se destacan algunos de los actores clave y su rol en el proceso.
          .col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema5/img18.png', alt='Imagen decorativa')

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-11.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span <i>Actores clave y su rol en el diagnóstico del territorio.</i>
        .tabla-a.clstabla.color-acento-contenido
          table
            thead
              tr
                th Actor
                th Rol
                th Contribución
            tbody
              tr(style="background-color: #F6F6F6; width: 20%")
                td.text-bold Gobiernos locales y regionales
                td Planifican y regulan el territorio, integrando el turismo en la estrategia de desarrollo económico y social de la región.
                td Ofrecen datos demográficos, económicos, ambientales y sociales, además de información sobre infraestructura y normativas locales.
              tr
                td.text-bold Empresarios turísticos (hoteles, agencias, operadores y guías)
                td Generan empleo, inversión y servicios, asegurando que el sector privado esté representado en el diagnóstico.
                td Aportan datos sobre demanda, necesidades de infraestructura y áreas de mejora en la experiencia del visitante.
              tr(style="background-color: #F6F6F6; width: 20%")
                td.text-bold Comunidad local
                td Impactada directamente por el turismo, asegura que el desarrollo turístico respete tradiciones y necesidades.
                td Conocimientos locales sobre historia, cultura y patrimonio, e identificación de áreas que necesitan protección o mejora.
              tr
                td.text-bold Organizaciones no gubernamentales y asociaciones civiles
                td Representan intereses específicos, como conservación ambiental y promoción cultural, para un turismo inclusivo y sostenible.
                td Ofrecen estudios sobre impactos socioambientales y buenas prácticas en gestión turística.
              tr(style="background-color: #F6F6F6; width: 20%")
                td.text-bold Investigadores y académicos
                td Aportan un enfoque técnico y metodológico para estudios de sostenibilidad y capacidad de carga.
                td Proveen investigaciones sobre impactos del turismo, estrategias de mitigación y enfoques innovadores de gestión territorial.
              tr
                td.text-bold Turistas
                td Aportan su percepción y comportamiento, esenciales para comprender la dinámica del destino y mejorar la oferta.
                td Retroalimentación sobre la calidad de servicios, infraestructura y experiencia general del destino.
              tr(style="background-color: #F6F6F6; width: 20%")
                td.text-bold Entidades financieras e inversionistas
                td Facilitan la inversión en infraestructura turística y aseguran la viabilidad económica de los proyectos.
                td Información sobre tendencias de inversión, fuentes de financiamiento y viabilidad de proyectos turísticos.

    p.mb-5(data-aos="fade-left") La participación de todos los actores en el diagnóstico del territorio permite una visión integral y efectiva para la planificación turística. Desde gobiernos locales hasta empresarios turísticos y comunidades, cada actor aporta conocimientos y perspectivas esenciales que contribuyen a un desarrollo sostenible y equilibrado. Esta participación es clave para identificar oportunidades y mitigar riesgos, logrando un enfoque que responde a las características locales y que promueve la sostenibilidad en el tiempo. 

    .row.mb-5(data-aos="flip-up")
      .col-lg-4.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/img19.svg' alt='AvatarTop')
          .tarjeta.color5(style= "width: 100%")
            .p-4
              h4.text-center Visión integral
              p.text-center La participación de todos estos actores asegura una visión 360° del territorio, considerando no solo las oportunidades de negocio, sino también los impactos sociales y ambientales.
      .col-lg-4.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/img20.svg' alt='AvatarTop')
          .tarjeta.color5(style= "width: 100%")
            .p-4
              h4.text-center Sostenibilidad
              p.text-center Involucrar a la comunidad y a las ONG ayuda a identificar formas de desarrollar el turismo sin comprometer el patrimonio natural y cultural.
      .col-lg-4.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/img21.svg' alt='AvatarTop')
          .tarjeta.color5(style= "width: 100%")
            .p-4
              h4.text-center Legitimidad y consenso
              p.text-center Un proceso participativo favorece la aceptación social de los proyectos turísticos, minimizando conflictos y aumentando el compromiso de todos los actores.

    p.mb-5(data-aos="fade-left") El diagnóstico participativo del territorio es, en definitiva, un proceso colaborativo que permite un desarrollo turístico más equilibrado, equitativo y sostenible, beneficiando tanto a los turistas como a la comunidad local y a otros interesados.

    separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.4 Diagnóstico de la demanda y la oferta turística en el territorio

    p.mb-5(data-aos="fade-left") El diagnóstico de la demanda y la oferta turística en un territorio es esencial para el desarrollo sostenible de la actividad turística. La demanda turística se refiere al comportamiento de los visitantes, sus preferencias, motivaciones y expectativas al viajar. Este análisis permite identificar el perfil de los turistas, sus consumos, la duración de sus estadías y el gasto promedio. Esta información es clave para ajustar los servicios a las necesidades del mercado.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-lg-8.col-12.order-lg-1.order-2 
            p Por otro lado, la oferta turística incluye los recursos, infraestructuras y servicios disponibles en el territorio, como alojamientos, restaurantes, atractivos naturales y culturales, y actividades recreativas. El análisis de la oferta permite identificar tanto las fortalezas del destino como las áreas que requieren mejoras en infraestructura, calidad de servicio o sostenibilidad.
            p Un diagnóstico integral de la oferta y demanda turística es crucial para lograr un equilibrio entre ambas, maximizando la satisfacción del turista y promoviendo el desarrollo económico local, la conservación del entorno y la identidad cultural del destino. A continuación, se detallan los principales puntos a tener en cuenta en este tipo de diagnóstico:
          .col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema5/img22.png', alt='Imagen decorativa')

    .titulo.mb-5(data-aos="flip-up")
      img(src='@/assets/curso/temas/ico.svg', alt='Imagen decorativa')
      h4.mb-0 Diagnóstico de la demanda turística

    p.mb-5(data-aos="fade-left") La demanda turística se compone de los visitantes actuales y potenciales del destino. Este análisis debe enfocarse en varios aspectos clave:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema5/img23.png', alt='Imagen decorativa')     
          .col-lg-8.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
            LineaTiempoD.color-acento-botones.especial
              p(numero="1" titulo="Perfil del turista") 
                ul.lista-ul
                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-3 <b>Demografía</b>: edad, genero, nivel educativo, ocupación, origen geográfico, entre otros.
                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-3 <b>Motivos de viaje</b>: ocio, negocios, salud, estudios, entre otros.
                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-0 <b>Comportamiento del turista</b>: gasto promedio, duración de la estadía, tipo de alojamiento utilizado, medios de transporte preferidos y actividades mas frecuentes.
              p(numero="2" titulo="Estacionalidad") 
                ul.lista-ul
                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-3 <b>Periodos de mayor y menor afluencia</b>: identificar las épocas del año en que el destino recibe más turistas.
                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-3 <b>Factores que influyen en la estacionalidad</b>: vacaciones, festivales, eventos, clima, entre otros.

              p(numero="3" titulo="Satisfacción y expectativas del turista") 
                ul.lista-ul
                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-3 <b>Evaluación de la experiencia</b>: mediante encuestas o análisis de opiniones en línea para comprender la percepción de los turistas sobre su experiencia en el destino.
                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-3 <b>Preferencias y necesidades</b>: aspectos que los turistas consideran importantes, como la calidad de los servicios, accesibilidad y seguridad.
              p(numero="4" titulo="Tendencias en la demanda turística") 
                ul.lista-ul
                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-3 <b>Cambios en el comportamiento</b>: nuevas tendencias como ecoturismo, turismo de aventura o turismo rural.
                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-3 <b>Mercados emergentes</b>: análisis de nuevos mercados que podrían ser atractivos para el destino.

    //- .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
    //-   .col-lg-3.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
    //-     figure
    //-       img(src='@/assets/curso/temas/tema5/img23.png', alt='Imagen decorativa')
    //-   .col-lg-9.col-12.order-lg-1.order-2 
    //-     TabsA.color-acento-botones
    //-       .tarjeta.color-primario.p-4(titulo="Perfil del turista")
    //-         ul.lista-ul
    //-           li.mb-0 
    //-             i.lista-ul__vineta
    //-             p.mb-3 <b>Demografía</b>: edad, genero, nivel educativo, ocupación, origen geográfico, entre otros.
    //-           li.mb-0 
    //-             i.lista-ul__vineta
    //-             p.mb-3 <b>Motivos de viaje</b>: ocio, negocios, salud, estudios, entre otros.
    //-           li.mb-0 
    //-             i.lista-ul__vineta
    //-             p.mb-0 <b>Comportamiento del turista</b>: gasto promedio, duración de la estadía, tipo de alojamiento utilizado, medios de transporte preferidos y actividades mas frecuentes.

    //-       .tarjeta.color-primario.p-4(titulo="Estacionalidad")
    //-         ul.lista-ul
    //-           li.mb-0 
    //-             i.lista-ul__vineta
    //-             p.mb-3 <b>Periodos de mayor y menor afluencia</b>: identificar las épocas del año en que el destino recibe más turistas.
    //-           li.mb-0 
    //-             i.lista-ul__vineta
    //-             p.mb-0 <b>Factores que influyen en la estacionalidad</b>: vacaciones, festivales, eventos, clima, entre otros.

    //-       .tarjeta.color-primario.p-4(titulo="Satisfacción y expectativas del turista")
    //-         ul.lista-ul
    //-           li.mb-0 
    //-             i.lista-ul__vineta
    //-             p.mb-3 <b>Evaluación de la experiencia</b>: mediante encuestas o análisis de opiniones en línea para comprender la percepción de los turistas sobre su experiencia en el destino.
    //-           li.mb-0 
    //-             i.lista-ul__vineta
    //-             p.mb-0 <b>Preferencias y necesidades</b>: aspectos que los turistas consideran importantes, como la calidad de los servicios, accesibilidad y seguridad.

    //-       .tarjeta.color-primario.p-4(titulo="Tendencias en la demanda turística")
    //-         ul.lista-ul
    //-           li.mb-0 
    //-             i.lista-ul__vineta
    //-             p.mb-3 <b>Cambios en el comportamiento</b>: nuevas tendencias como ecoturismo, turismo de aventura o turismo rural.
    //-           li.mb-0 
    //-             i.lista-ul__vineta
    //-             p.mb-0 <b>Mercados emergentes</b>: análisis de nuevos mercados que podrían ser atractivos para el destino.

    .titulo.mb-5(data-aos="flip-up")
      img(src='@/assets/curso/temas/ico.svg', alt='Imagen decorativa')
      h4.mb-0 Diagnóstico de la oferta turística

    p.mb-5(data-aos="fade-left") La oferta turística comprende los servicios y recursos disponibles en el destino para satisfacer las necesidades del turista. Este análisis se centra en los siguientes aspectos:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema5/img24.png', alt='Imagen decorativa')     
          .col-lg-7.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
            LineaTiempoD.color-acento-botones.especial
              p(numero="1" titulo="Recursos turístico") 
                ul.lista-ul
                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-3 <b>Recursos naturales</b>: playas, montañas, ríos, parques nacionales, entre otros.
                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-3 <b>Recursos culturales</b>: museos, patrimonio histórico, tradiciones, gastronomía, eventos culturales, festivales, entre otros.
                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-0 <b>Recursos intangibles</b>: hospitalidad de la población local y autenticidad del destino.
              p(numero="2" titulo="Infraestructura turística") 
                ul.lista-ul
                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-3 <b>Alojamiento</b>: hoteles, hostales, casas rurales, apartamentos turísticos, campings.
                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-3 <b>Transporte</b>: accesibilidad al destino, disponibilidad de transporte interno como autobuses, taxis y alquiler de coches.
                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-0 <b>Servicios complementarios</b>: restaurantes, bares, tiendas, oficinas de información turística y guías.
              p(numero="3" titulo="Calidad de los servicios turísticos") 
                ul.lista-ul
                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-3 <b>Normativas y certificaciones</b>: estándares de calidad de los servicios turísticos, como certificaciones de sostenibilidad y accesibilidad.
                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-3 <b>Capacitación del personal</b>: nivel de profesionalización en la atención al turista, capacitación en idiomas y conocimiento del destino.
              p(numero="4" titulo="Capacidad de carga turística") 
                ul.lista-ul
                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-3 <b>Saturación del destino</b>: capacidad del destino para recibir turistas sin afectar negativamente el entorno y la calidad de vida de los residentes locales.
                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-3 <b>Impactos ambientales</b>: evaluación del impacto del turismo en el medio ambiente y los recursos naturales.

    .titulo.mb-5(data-aos="flip-up")
      img(src='@/assets/curso/temas/ico.svg', alt='Imagen decorativa')
      h4.mb-0 Análisis Comparativo

    p.mb-5(data-aos="fade-left") Una vez recopilados los datos sobre la oferta y la demanda, es esencial realizar un análisis comparativo para identificar desequilibrios o áreas de oportunidad. Algunos puntos clave son: 

    .row.justify-content-center.ali.mb-4(data-aos="flip-up")
      .tarjeta--container.row.mb-5
        .col-xl.col-md-6.tarjeta.color-primario.p-5
          .row.justify-content-center.mb-3
            .col-lg-5.col-md-6.col-sm-4.col-6
              figure
                img(src='@/assets/curso/temas/tema5/img25.svg', alt='Imagen decorativa')
            
          h4.text-center Coincidencia entre oferta y demanda
          p.text-center Verificar si los servicios ofrecidos responden a las expectativas y necesidades de los turistas.

        .col-xl.col-md-6.tarjeta.color-secundario.p-5
          .row.justify-content-center.mb-3
            .col-lg-5.col-md-6.col-sm-4.col-6
              figure
                img(src='@/assets/curso/temas/tema5/img26.svg', alt='Imagen decorativa')
            
          h4.text-center Brechas en la oferta
          p.text-center Identificar servicios o infraestructuras faltantes que podrían ser necesarios para atraer y retener a los turistas.

        .col-xl.col-md-6.tarjeta.color-acento-contenido.p-5
          .row.justify-content-center.mb-3
            .col-lg-5.col-md-6.col-sm-4.col-6
              figure
                img(src='@/assets/curso/temas/tema5/img27.svg', alt='Imagen decorativa')
            
          h4.text-center Posibles mejoras
          p.text-center Evaluar áreas de oportunidad en la calidad de los servicios, infraestructura, accesibilidad o sostenibilidad del destino.

    .titulo.mb-5(data-aos="flip-up")
      img(src='@/assets/curso/temas/ico.svg', alt='Imagen decorativa')
      h4.mb-0 Conclusiones y recomendaciones

    p.mb-5(data-aos="fade-left") El diagnóstico debe llevar a conclusiones y recomendaciones para guiar la planificación y gestión del turismo en el territorio. Estas pueden incluir:
    
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-8.col-12
        .row.justify-content-center.align-items-center
          .col-lg-4.col-md-6.col-8.mb-3
            figure
              img(src='@/assets/curso/temas/tema5/img28.png', alt='Imagen decorativa')
          .col-lg-8.col-12
            .cajon.cajon1.p-4.mb-3
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Estrategias de promoción y <em>marketing</em>.
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Mejora de infraestructuras o servicios turísticos.
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Diversificación de la oferta turística.
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Estrategias para mitigar los efectos de la estacionalidad.
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Implementación de políticas de turismo sostenible.

    p.mb-5(data-aos="fade-left") Un diagnóstico completo permite a los gestores del destino tomar decisiones informadas para mejorar la competitividad, la sostenibilidad y la experiencia del turista, contribuyendo al desarrollo socioeconómico del territorio.

    separador
    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.5 Sistematización de los resultados del diagnóstico turístico en el territorio

    p.mb-5(data-aos="fade-left") La sistematización de los resultados del diagnóstico turístico en un territorio implica recopilar, organizar y analizar la información obtenida para identificar fortalezas, debilidades, oportunidades y amenazas. Este proceso permite estructurar los datos recogidos durante la fase de diagnóstico, facilitando la toma de decisiones informadas para el desarrollo turístico sostenible. A través de la sistematización, es posible visualizar tendencias, comportamientos y necesidades específicas del destino, permitiendo diseñar estrategias eficaces que incrementen su atractivo turístico, mejoren la infraestructura y fomenten el desarrollo económico local, en armonía con la preservación del patrimonio cultural y natural.

    p.mb-5(data-aos="fade-left") A continuación, se presentan los pasos a seguir para realizar esta sistematización: 

    .tarjeta.tarjeta--BG11.p-4.mb-5.p-md-5(data-aos="flip-up")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            h4 Recolección de información
            ul.lista-ul
              li.mb-3 
                i.lista-ul__vineta
                p.mb-0 <b>Fuentes primarias</b>: entrevistas a actores locales, encuestas a turistas y observaciones directas.
              li.mb-3 
                i.lista-ul__vineta
                p.mb-0 <b>Fuentes secundarias</b>: datos estadísticos (INE y observatorios turísticos), informes previos y estudios académicos.
              li.mb-3 
                i.lista-ul__vineta
                p.mb-0 <b>Variables clave</b>: oferta turística (alojamiento, restauración y actividades), demanda turística, accesibilidad, recursos naturales y culturales, e infraestructura.
        
          .col-lg-5.col-10.col-md-8.order-lg-2.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema5/img29.png', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-7.order-lg-1.order-2
            h4 Análisis de los datos
            p.mb-0.text-bold Análisis de la oferta turística: 
            ul.lista-ul
              li.mb-0 
                i.lista-ul__vineta
                p.mb-0 Tipos de servicios (hoteles, restaurantes, actividades, etc.).
              li.mb-0 
                i.lista-ul__vineta
                p.mb-0 Calidad y cantidad de la infraestructura turística.
              li.mb-0 
                i.lista-ul__vineta
                p.mb-0 Niveles de ocupación, precios y diversidad de productos.

            p.mb-0.text-bold Análisis de la demanda turística:
            ul.lista-ul
              li.mb-0 
                i.lista-ul__vineta
                p.mb-0 Perfil de los turistas (edad, procedencia e intereses).
              li.mb-0 
                i.lista-ul__vineta
                p.mb-0 Estacionalidad de las visitas.
              li.mb-0 
                i.lista-ul__vineta
                p.mb-0 Grado de satisfacción del turista.

            p.mb-0.text-bold Análisis del entorno:
            ul.lista-ul
              li.mb-0 
                i.lista-ul__vineta
                p.mb-0 Recursos naturales y culturales disponibles.
              li.mb-0 
                i.lista-ul__vineta
                p.mb-0 Capacidad de carga del territorio.
              li.mb-0 
                i.lista-ul__vineta
                p.mb-0 Impacto ambiental del turismo.

            p.mb-0.text-bold Análisis de la accesibilidad y conectividad:
            ul.lista-ul
              li.mb-0 
                i.lista-ul__vineta
                p.mb-0 Infraestructura vial, transporte público y señalización.
              li.mb-0 
                i.lista-ul__vineta
                p.mb-0 Proximidad a mercados emisores de turistas.
        
          .col-lg-5.col-10.col-md-8.order-lg-2.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema5/img30.png', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-6.order-lg-1.order-2
            h4 Identificación de oportunidades y problemas
            ul.lista-ul
              li.mb-3 
                i.lista-ul__vineta
                p.mb-0 <b>Fortalezas</b>: aspectos positivos del territorio en términos de atractivo turístico, calidad de servicios y competitividad.
              li.mb-3 
                i.lista-ul__vineta
                p.mb-0 <b>Debilidades</b>: carencias o problemas existentes (falta de infraestructura, escasa promoción o falta de formación de personal).
              li.mb-3 
                i.lista-ul__vineta
                p.mb-0 <b>Oportunidades</b>: factores externos o tendencias de mercado que puedan favorecer el crecimiento turístico.
              li.mb-0 
                i.lista-ul__vineta
                p.mb-0 <b>Amenazas</b>: riesgos o situaciones que podrían afectar el desarrollo (degradación ambiental, conflictos sociales o competencia de otros destinos).
        
          .col-lg-6.col-10.col-md-8.order-lg-2.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema5/img31.png', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-6.order-lg-1.order-2
            h4 Propuestas de mejora
            ul.lista-ul
              li.mb-3 
                i.lista-ul__vineta
                p.mb-0 <b>Diversificación de la oferta turística</b>: opciones para ampliar o mejorar las actividades y servicios.
              li.mb-3 
                i.lista-ul__vineta
                p.mb-0 <b>Sostenibilidad</b>: medidas para minimizar el impacto ambiental del turismo y fomentar un desarrollo responsable.
              li.mb-3 
                i.lista-ul__vineta
                p.mb-0 <b>Capacitación y profesionalización</b>: planes para mejorar la formación de actores locales y la calidad del servicio.
              li.mb-3 
                i.lista-ul__vineta
                p.mb-0 <b>Promoción turística</b>: estrategias para posicionar el destino en mercados nacionales e internacionales.
              li.mb-0 
                i.lista-ul__vineta
                p.mb-0 <b>Infraestructura y accesibilidad</b>: propuestas para mejorar la conectividad y las infraestructuras del territorio.
        
          .col-lg-6.col-10.col-md-8.order-lg-2.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema5/img32.png', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-6.order-lg-1.order-2
            h4 Conclusiones y recomendaciones
            ul.lista-ul
              li.mb-3 
                i.lista-ul__vineta
                p.mb-0 Resumen de hallazgos clave.
              li.mb-3 
                i.lista-ul__vineta
                p.mb-0 Priorización de intervenciones necesarias para el desarrollo turístico.
              li.mb-3 
                i.lista-ul__vineta
                p.mb-0 Recomendaciones para una gobernanza turística efectiva y la coordinación entre actores locales.
        
          .col-lg-6.col-10.col-md-8.order-lg-2.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema5/img33.png', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-6.order-lg-1.order-2
            h4 Presentación de resultados.
            ul.lista-ul
              li.mb-3 
                i.lista-ul__vineta
                p.mb-0 <b>Informe</b>: documento detallado con los resultados, análisis y propuestas.
              li.mb-3 
                i.lista-ul__vineta
                p.mb-0 <b>Mapas y gráficos</b>: visualización de datos geográficos y estadísticas relevantes (por ejemplo, mapas de recursos turísticos y gráficos de flujo de turistas).
              li.mb-3 
                i.lista-ul__vineta
                p.mb-0 <b>Presentaciones orales</b>: para informar a los actores clave (autoridades locales, operadores turísticos y comunidad).
        
          .col-lg-6.col-10.col-md-8.order-lg-2.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema5/img34.png', alt='Imagen decorativa')


    p.mb-0(data-aos="fade-left") Este proceso convierte los datos del diagnóstico en información clave para la planificación y toma de decisiones estratégicas en el territorio.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
