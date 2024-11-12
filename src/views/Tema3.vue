<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Diagnóstico turístico
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El diagnóstico turístico es un proceso esencial para evaluar el estado y el potencial de un destino. A través de este proceso, se identifican fortalezas, debilidades, oportunidades y amenazas en aspectos como la infraestructura, los recursos naturales, los recursos culturales, la accesibilidad y la sostenibilidad. Este análisis permite comprender la demanda actual y potencial, así como las capacidades del destino para atraer y retener visitantes. Además, el diagnóstico facilita la planificación estratégica, promoviendo el desarrollo sostenible del turismo y mejorando la calidad de vida de las comunidades locales. Al identificar áreas de mejora, el diagnóstico turístico contribuye a optimizar recursos, fomentar inversiones y diseñar políticas que aumenten la competitividad y el atractivo de un destino en un entorno global cada vez más exigente.
          br
          br
          | 
    p.mb-5(data-aos="fade-left") Para lograr un diagnóstico efectivo, es fundamental realizar un estudio exhaustivo de diversos factores que impactan el turismo, incluyendo la oferta turística, la demanda, la infraestructura, los servicios, el entorno natural y cultural, así como los aspectos sociales y económicos que influyen en el sector. En este contexto, es importante identificar los componentes que forman parte del diagnóstico turístico:

    .row.justify-content-center.align-items-center(data-aos="flip-up")
      .col-12.mb-5
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--verde")
          .row.justify-content-center.align-items-center.p-4(titulo="Análisis de la oferta turística")
            .col-lg-6.order-lg-1.order-2
              ul.lista-ul
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 Recursos naturales (paisajes, playas, montañas, etc.).
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 Patrimonio cultural (monumentos, tradiciones, gastronomía, etc.).
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 Infraestructura turística (hoteles, restaurantes, transporte, etc.).
                li.mb-0 
                  i.lista-ul__vineta
                  p.mb-0 Servicios complementarios (guías turísticos, agencias de viaje, etc.).
            .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img02.png', alt='Imagen decorativa')

          .row.justify-content-center.align-items-center.p-4(titulo="Análisis de la demanda turística")
            .col-lg-6.order-lg-1.order-2
              ul.lista-ul
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 Perfil de los turistas (origen, edad, motivaciones y expectativas).
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 Tipos de turismo practicados (de aventura, cultural, sol y playa, etc.).
                li.mb-0 
                  i.lista-ul__vineta
                  p.mb-0 Tendencias del turismo en la región y cambios en los patrones de consumo.
            .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img03.png', alt='Imagen decorativa')

          .row.justify-content-center.align-items-center.p-4(titulo="Estudio del entorno")
            .col-lg-6.order-lg-1.order-2
              ul.lista-ul
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 Factores ambientales (impacto del turismo sobre el medio ambiente).
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 Políticas y regulaciones locales relacionadas con el turismo.
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 Sostenibilidad y capacidad de carga del destino.
            .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img04.png', alt='Imagen decorativa')

          .row.justify-content-center.align-items-center.p-4(titulo="Análisis socioeconómico")
            .col-lg-6.order-lg-1.order-2
              ul.lista-ul
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 Impacto económico del turismo en la comunidad local.
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 Empleo generado por el turismo.
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 Distribución de los beneficios económicos del turismo.
            .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img05.png', alt='Imagen decorativa')

          .row.justify-content-center.align-items-center.p-4(titulo="Fortalezas y debilidades")
            .col-lg-6.order-lg-1.order-2
              ul.lista-ul
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 Identificación de aspectos positivos que favorecen el turismo (buena conectividad, atractivos únicos y hospitalidad).
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 Detección de carencias o amenazas que limitan el desarrollo turístico (falta de infraestructura, baja calidad en los servicios y saturación del destino).
            .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img06.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-left") Este proceso es clave para el diseño de planes de desarrollo turístico, ya que permite una comprensión clara del estado actual del destino y sus posibilidades de mejora. Un buen diagnóstico turístico contribuye a:

    .row.mb-5(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-lg-5.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema3/img07.svg' alt='AvatarTop')
        h4.text-center a.
        p.text-center Maximizar el aprovechamiento de los recursos locales.
      .col-md-6.col-lg.tarjeta--tabla1.p-4
        .row.justify-content-center.mb-3
          .col-lg-5.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema3/img08.svg' alt='AvatarTop')
        h4.text-center b.
        p.text-center Mejorar la experiencia del turista.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-lg-5.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema3/img09.svg' alt='AvatarTop')
        h4.text-center c.
        p.text-center Fomentar el desarrollo económico y social de las comunidades locales.
      .col-md-6.col-lg.tarjeta--tabla1.p-4
        .row.justify-content-center.mb-3
          .col-lg-5.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema3/img10.svg' alt='AvatarTop')
        h4.text-center d.
        p.text-center Promover un turismo sostenible y responsable.

    p.mb-5(data-aos="fade-left") El diagnóstico sirve como base para la toma de decisiones y la planificación de acciones estratégicas que orienten el desarrollo turístico hacia un crecimiento equilibrado y sostenible.
    
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Metodología del diseño turístico

    p.mb-5(data-aos="fade-left") La metodología del diseño turístico es un enfoque sistemático que busca planificar, desarrollar y gestionar destinos y experiencias turísticas de manera sostenible y efectiva. Este proceso incluye varias etapas, como la investigación del entorno, el análisis de los recursos naturales y culturales, y la identificación de las necesidades de los visitantes. Se considera tanto la oferta como la demanda para garantizar que los productos turísticos sean atractivos y viables.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-7.col-12.order-lg-1.order-2 
        .cajon.cajon.color-secundario.p-4.mb-3
          p.mb-0 El diseño turístico promueve la participación activa de las comunidades locales, fomentando su bienestar económico y social. Además, la metodología abarca la evaluación de impactos ambientales y culturales, con el objetivo de minimizar efectos negativos y maximizar beneficios. Finalmente, la implementación de estrategias de <em>marketing</em> y promoción asegura que los destinos se posicionen de manera competitiva en el mercado global. Esta planificación integral contribuye a un desarrollo turístico equilibrado y sostenible.
        p En resumen, la metodología del diseño turístico se refiere a un conjunto de procedimientos, herramientas y enfoques utilizados para desarrollar productos y servicios turísticos que sean atractivos, sostenibles y alineados con las necesidades de los viajeros. Este enfoque incluye varias etapas y componentes clave:
      .col-lg-5.col-8.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema3/img11.png', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center(data-aos="flip-up")
      .tarjeta.tarjeta--BG06.p-4.mb-5
        LineaTiempoC.color-acento-botones.especial
          .row.justify-content-center(titulo="1")
            .col-lg-7.col-12.order-lg-2.order-2
              h4 Investigación y análisis de mercado
              ul.lista-ul
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 <b>Estudio de mercado</b>: análisis de tendencias, segmentos de mercado y preferencias de los consumidores.
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 <b>Análisis de la competencia</b>: revisión de otros destinos o productos turísticos similares.
                li.mb-0 
                  i.lista-ul__vineta
                  p.mb-0 <b>Evaluación de recursos</b>: identificación de los recursos naturales, culturales y humanos en el destino.
          
            .col-lg-5.col-8.order-lg-1.order-1.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img12.png', alt='Imagen decorativa')

          .row.justify-content-center(titulo="2")
            .col-lg-7.col-12.order-lg-2.order-2
              h4 Definición del producto turístico
              ul.lista-ul
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 <b>Segmentación del mercado</b>: definición del segmento de turistas al que se dirigirá el producto (familias, aventureros, turistas de lujo, etc.).
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 <b>Desarrollo de conceptos</b>: creación de conceptos de productos turísticos que reflejen la identidad del destino.
                li.mb-0 
                  i.lista-ul__vineta
                  p.mb-0 <b>Innovación y creatividad</b>: incorporación de elementos novedosos y experiencias únicas.
          
            .col-lg-5.col-8.order-lg-1.order-1.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img13.png', alt='Imagen decorativa')

          .row.justify-content-center(titulo="3")
            .col-lg-7.col-12.order-lg-2.order-2
              h4 Planificación y diseño
              ul.lista-ul
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 <b>Plan de desarrollo</b>: elaboración de un plan que incluya implementación, financiamiento y <em>marketing</em>.
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 <b>Diseño de experiencias</b>: creación de itinerarios y actividades que ofrezcan experiencias memorables.
                li.mb-0 
                  i.lista-ul__vineta
                  p.mb-0 <b>Sostenibilidad</b>: prácticas sostenibles que reduzcan el impacto ambiental y beneficien a la comunidad local.
          
            .col-lg-5.col-8.order-lg-1.order-1.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img14.png', alt='Imagen decorativa')

          .row.justify-content-center(titulo="4")
            .col-lg-7.col-12.order-lg-2.order-2
              h4 Implementación
              ul.lista-ul
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 <b>Colaboración con actores locales</b>: involucrar a la comunidad y proveedores locales en el desarrollo.
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 <b>Capacitación</b>: formación del personal en atención al cliente y en el nuevo producto.
                li.mb-0 
                  i.lista-ul__vineta
                  p.mb-0 <b>Infraestructura</b>: asegurar instalaciones y servicios alineados con el producto diseñado.
          
            .col-lg-5.col-8.order-lg-1.order-1.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img15.png', alt='Imagen decorativa')

          .row.justify-content-center(titulo="5")
            .col-lg-7.col-12.order-lg-2.order-2
              h4 Promoción y <em>marketing</em>
              ul.lista-ul
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 <b>Estrategia de <em>marketing</em></b>: definir canales de promoción para llegar al público objetivo.
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 <b>Comunicación</b>: mensajes atractivos que resalten las experiencias.
                li.mb-0 
                  i.lista-ul__vineta
                  p.mb-0 <b>Uso de tecnología</b>: plataformas digitales para promoción y reserva del producto.
          
            .col-lg-5.col-8.order-lg-1.order-1.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img16.png', alt='Imagen decorativa')

          .row.justify-content-center(titulo="6")
            .col-lg-7.col-12.order-lg-2.order-2
              h4 Evaluación y retroalimentación
              ul.lista-ul
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 <b>Monitoreo de resultados</b>: evaluar el desempeño del producto mediante indicadores.
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 <b>Encuestas y opiniones</b>: <em>feedback</em> de turistas para mejorar la oferta.
                li.mb-0 
                  i.lista-ul__vineta
                  p.mb-0 <b>Ajustes y mejoras</b>: modificaciones basadas en evaluación y cambios de mercado.
          
            .col-lg-5.col-8.order-lg-1.order-1.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img17.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-left") La metodología del diseño turístico es un proceso dinámico y adaptable que debe ser revisado y actualizado regularmente para responder a las necesidades del mercado y asegurar la sostenibilidad del destino. La colaboración con la comunidad local y el respeto por el medio ambiente son fundamentales para el éxito a largo plazo del diseño turístico.

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Etapas del diseño turístico

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-7.col-12.order-lg-1.order-2
        .cajon.cajon.color-secundario.p-4.mb-3
          p.mb-0 El diseño turístico abarca varias etapas clave que garantizan el éxito de un destino o producto. La primera etapa es la investigación, donde se analizan las características del destino, el mercado objetivo y las tendencias. La segunda etapa es la planificación, en la que se definen los objetivos, recursos y estrategias, y se crean itinerarios o experiencias ajustadas a las necesidades de los turistas. La tercera etapa es la implementación, donde se ponen en marcha los planes, se desarrollan infraestructuras y se promueve el destino. Finalmente, la evaluación y control asegura que los objetivos se cumplan, ajustando aspectos según las necesidades y los cambios del mercado. Un diseño turístico bien estructurado garantiza experiencias satisfactorias y el desarrollo sostenible del destino, respetando el entorno y la cultura local.
      .col-lg-5.col-8.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema3/img18.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-left") El diseño turístico implica una serie de etapas clave para crear una experiencia atractiva y sostenible para los visitantes. A continuación, se describen las etapas principales:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-10
        LineaTiempoE.color-acento-contenido.mb-5
          .row(titulo="01")
            .col-lg-2.mb-3.mb-lg-0
              figure
                img.img200(src='@/assets/curso/temas/tema3/img19.svg', alt='Imagen decorativa')
            .col-lg-10.mb-4.mb-lg-0
              h4 Investigación de mercado
              ul.lista-ul
                li.mb-1 
                  i.lista-ul__vineta
                  p.mb-0 Análisis de tendencias y demandas del mercado.
                li.mb-1 
                  i.lista-ul__vineta
                  p.mb-0 Identificación de segmentos de mercado y sus preferencias.
                li.mb-0 
                  i.lista-ul__vineta
                  p.mb-0 Evaluación de la competencia y el entorno turístico.

          .row(titulo="02")
            .col-lg-2.mb-3.mb-lg-0
              figure
                img.img200(src='@/assets/curso/temas/tema3/img20.svg', alt='Imagen decorativa')
            .col-lg-10.mb-4.mb-lg-0
              h4 Planificación
              ul.lista-ul
                li.mb-1 
                  i.lista-ul__vineta
                  p.mb-0 Definición de los objetivos y metas del proyecto turístico.
                li.mb-1 
                  i.lista-ul__vineta
                  p.mb-0 Creación de un plan estratégico que incluya recursos humanos, financieros y materiales.
                li.mb-0 
                  i.lista-ul__vineta
                  p.mb-0 Selección de la ubicación y tipo de infraestructura necesaria.

          .row(titulo="03")
            .col-lg-2.mb-3.mb-lg-0
              figure
                img.img200(src='@/assets/curso/temas/tema3/img21.svg', alt='Imagen decorativa')
            .col-lg-10.mb-4.mb-lg-0
              h4 Desarrollo del producto turístico
              ul.lista-ul
                li.mb-1 
                  i.lista-ul__vineta
                  p.mb-0 Diseño de la oferta turística (atracciones, actividades y servicios).
                li.mb-1 
                  i.lista-ul__vineta
                  p.mb-0 Consideración de la sostenibilidad y el impacto ambiental.
                li.mb-0 
                  i.lista-ul__vineta
                  p.mb-0 Creación de itinerarios y paquetes turísticos.

          .row(titulo="04")
            .col-lg-2.mb-3.mb-lg-0
              figure
                img.img200(src='@/assets/curso/temas/tema3/img22.svg', alt='Imagen decorativa')
            .col-lg-10.mb-4.mb-lg-0
              h4 <em>Marketing</em> y promoción
              ul.lista-ul
                li.mb-1 
                  i.lista-ul__vineta
                  p.mb-0 Desarrollo de una estrategia de <em>marketing</em> para atraer a los visitantes.
                li.mb-1 
                  i.lista-ul__vineta
                  p.mb-0 Utilización de diferentes canales de comunicación (redes sociales, publicidad, etc.).
                li.mb-0 
                  i.lista-ul__vineta
                  p.mb-0 Creación de una identidad de marca que refleje los valores del destino.

          .row(titulo="05")
            .col-lg-2.mb-3.mb-lg-0
              figure
                img.img200(src='@/assets/curso/temas/tema3/img23.svg', alt='Imagen decorativa')
            .col-lg-10.mb-4.mb-lg-0
              h4 Implementación
              ul.lista-ul
                li.mb-1 
                  i.lista-ul__vineta
                  p.mb-0 Ejecución del plan diseñado, incluyendo la construcción y equipamiento de infraestructuras.
                li.mb-1 
                  i.lista-ul__vineta
                  p.mb-0 Capacitación del personal y establecimiento de estándares de servicio.

          .row(titulo="06")
            .col-lg-2.mb-3.mb-lg-0
              figure
                img.img200(src='@/assets/curso/temas/tema3/img24.svg', alt='Imagen decorativa')
            .col-lg-10.mb-4.mb-lg-0
              h4 Evaluación y retroalimentación
              ul.lista-ul
                li.mb-1 
                  i.lista-ul__vineta
                  p.mb-0 Recopilación de comentarios de los turistas y otros <em>stakeholders</em>.
                li.mb-1 
                  i.lista-ul__vineta
                  p.mb-0 Análisis del rendimiento del producto turístico.
                li.mb-0 
                  i.lista-ul__vineta
                  p.mb-0 Realización de ajustes y mejoras basadas en la retroalimentación.

          .row(titulo="07")
            .col-lg-2.mb-3.mb-lg-0
              figure
                img.img200(src='@/assets/curso/temas/tema3/img25.svg', alt='Imagen decorativa')
            .col-lg-10.mb-4.mb-lg-0
              h4 Mantenimiento y sostenibilidad
              ul.lista-ul
                li.mb-1 
                  i.lista-ul__vineta
                  p.mb-0 Monitoreo del impacto ambiental y social del turismo. 
                li.mb-1 
                  i.lista-ul__vineta
                  p.mb-0 Implementación de prácticas sostenibles para asegurar la conservación del destino.
                li.mb-0 
                  i.lista-ul__vineta
                  p.mb-0 Fomento de la participación de la comunidad local en el desarrollo turístico.

    p.mb-5(data-aos="fade-left") Cada una de estas etapas es fundamental para el éxito de un proyecto turístico, garantizando no solo la satisfacción del visitante, sino también la viabilidad a largo plazo del destino.

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Normativa del diseño turístico en Colombia

    p.mb-5(data-aos="fade-left") La normativa del diseño turístico en Colombia está enfocada en promover el desarrollo sostenible del sector, garantizando la protección ambiental, la conservación del patrimonio cultural y la inclusión social. Las principales leyes que regulan este ámbito son la Ley General de Turismo (Ley 300 de 1996, modificada por la Ley 1558 de 2012) y sus decretos reglamentarios. Estas leyes establecen las directrices para la planificación y el desarrollo de destinos turísticos, buscando asegurar que los proyectos turísticos sean compatibles con el entorno y las comunidades locales. Además, el Ministerio de Comercio, Industria y Turismo, junto con entidades como ProColombia y Fontur, se encargan de promover políticas para la infraestructura, la accesibilidad y la calidad en los servicios turísticos. La normativa también impulsa la certificación en sostenibilidad para operadores y destinos, fomentando un turismo responsable y competitivo. 

    p.mb-5(data-aos="fade-left") La normativa del diseño turístico en Colombia se basa en un marco regulatorio que busca promover el desarrollo sostenible del turismo, la protección del patrimonio cultural y natural, y la mejora de la calidad de vida de las comunidades locales. Aquí te presento algunos de los aspectos más relevantes:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img26.svg' alt='AvatarTop')
          h4.text-center Ley 300 de 1996
          p.text-center También conocida como el Estatuto del Turismo, establece los principios y normas para el desarrollo del turismo en Colombia. Fomenta la inversión en el sector y regula las actividades turísticas para asegurar su sostenibilidad.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img27.svg' alt='AvatarTop')
          h4.text-center Ley 1101 de 2006
          p.text-center Esta ley complementa la Ley 300, enfocándose en la promoción del turismo en áreas rurales y la inclusión de comunidades en el desarrollo turístico.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img28.svg' alt='AvatarTop')
          h4.text-center Plan Nacional de Desarrollo (PND)
          p.text-center Establece las directrices para el desarrollo del sector turístico, priorizando el ecoturismo y el turismo cultural, además de garantizar la sostenibilidad ambiental.
          
        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img29.svg' alt='AvatarTop')
          h4.text-center Normativa ambiental 
          p.text-center La legislación ambiental en Colombia, como la Ley 99 de 1993, regula el uso y conservación de los recursos naturales, lo cual es esencial para el diseño de proyectos turísticos.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img30.svg' alt='AvatarTop')
          h4.text-center Ley 1448 de 2011
          p.text-center Se refiere a la atención y reparación integral a las víctimas del conflicto armado en Colombia, promoviendo el turismo en zonas afectadas como una estrategia de recuperación y desarrollo.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img31.svg' alt='AvatarTop')
          h4.text-center Normas Urbanísticas y de Ordenamiento Territorial
          p.text-center Cada municipio tiene su propio código de ordenamiento territorial que regula el uso del suelo y el diseño de infraestructuras turísticas.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img32.svg' alt='AvatarTop')
          h4.text-center Normas de accesibilidad
          p.text-center La Ley 1618 de 2013 establece disposiciones para garantizar la accesibilidad de las personas con discapacidad a los espacios turísticos.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img33.svg' alt='AvatarTop')
          h4.text-center Certificaciones y Sello de Calidad
          p.text-center El Ministerio de Comercio, Industria y Turismo promueve certificaciones como el Sello de Calidad Turística, que asegura que los servicios turísticos cumplan con estándares de calidad y sostenibilidad.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img34.svg' alt='AvatarTop')
          h4.text-center Políticas de desarrollo sostenible
          p.text-center Se han implementado políticas para fomentar el turismo sostenible, que integra las dimensiones económica, social y ambiental.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img35.svg' alt='AvatarTop')
          h4.text-center Planes de manejo
          p.text-center Para áreas protegidas, se requiere la elaboración de planes de manejo que regulen las actividades turísticas y aseguren la conservación de la biodiversidad.

    p.mb-5(data-aos="fade-left") Estas normativas buscan garantizar que el turismo en Colombia se desarrolle de manera sostenible, beneficiando a las comunidades locales y protegiendo el patrimonio cultural y natural del país. 

    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Técnicas e instrumentos de recolección de información turística en Colombia

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img36.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las técnicas e instrumentos de recolección de información turística en Colombia son fundamentales para entender el comportamiento de los viajeros y mejorar la calidad de los servicios. Las técnicas más utilizadas incluyen encuestas, entrevistas y observación directa. Las encuestas permiten obtener datos cuantitativos sobre las preferencias y satisfacción de los turistas, mientras que las entrevistas ofrecen información cualitativa más profunda. La observación directa, empleada en estudios de comportamiento, permite obtener una visión real del comportamiento de los visitantes en los destinos.
          br
          br
          | 

    p.mb-4(data-aos="fade-left") Entre los instrumentos, destacan los cuestionarios, grabadoras de voz para entrevistas y aplicaciones móviles, que facilitan la recopilación de datos en tiempo real. Las plataformas digitales y redes sociales también proporcionan información sobre tendencias y opiniones de los turistas, contribuyendo a que entidades gubernamentales y privadas puedan tomar decisiones informadas y promover un desarrollo turístico sostenible en Colombia.

    p.mb-5(data-aos="fade-left") A continuación, se describen las principales técnicas e instrumentos empleados en la recolección de información turística en Colombia: 

    TabsC.color-acento-botones.mb-5(data-aos="flip-up")
      .py-3.py-md-4(titulo="Encuestas")
        .row.justify-content-center.p-4
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img37.png', alt='Imagen decorativa')
          .col-lg-5.order-lg-1.order-2
            ul.lista-ul
              li.mb-3 
                i.lista-ul__vineta
                p.mb-0 <b>Cuestionarios estructurados</b>: se utilizan para recoger datos cuantitativos sobre la satisfacción del turista, preferencias y comportamientos.
              li.mb-3 
                i.lista-ul__vineta
                p.mb-0 <b>Encuestas en línea</b>: Facilitan la recolección de datos de manera mas rápida y económica.

      .py-3.py-md-4(titulo="Entrevistas")
        .row.justify-content-center.p-4
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img38.png', alt='Imagen decorativa')
          .col-lg-5.order-lg-1.order-2
            ul.lista-ul
              li.mb-3 
                i.lista-ul__vineta
                p.mb-0 <b>Entrevistas personales</b>: permiten obtener información cualitativa más profunda a través de conversaciones con turistas, operadores turísticos y locales.
              li.mb-3 
                i.lista-ul__vineta
                p.mb-0 <b><em>Focus group</em></b>: grupos de discusión que ayudan a explorar percepciones y actitudes hacia diferentes destinos.

      .py-3.py-md-4(titulo="Observación")
        .row.justify-content-center.p-4
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img39.png', alt='Imagen decorativa')
          .col-lg-5.order-lg-1.order-2
            ul.lista-ul
              li.mb-3 
                i.lista-ul__vineta
                p.mb-0 <b>Observación directa</b>: consiste en observar el comportamiento de los turistas en diferentes entornos, lo que puede ofrecer información sobre sus flujos turísticos y preferencias.
              li.mb-3 
                i.lista-ul__vineta
                p.mb-0 <b>Participación en eventos turísticos</b>: implica en la inmersión en festivales o ferias para entender las tendencias y dinámicas del sector.

      .py-3.py-md-4(titulo="Análisis de fuentes secundarias")
        .row.justify-content-center.p-4
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img40.png', alt='Imagen decorativa')
          .col-lg-5.order-lg-1.order-2
            ul.lista-ul
              li.mb-3 
                i.lista-ul__vineta
                p.mb-0 <b>Estudios de mercado</b>: uso de informes de consultorías, estadísticas de turismo del gobierno y estudios académicos.
              li.mb-3 
                i.lista-ul__vineta
                p.mb-0 <b>Datos de plataformas digitales</b>: análisis de opiniones y reseñas en redes sociales y paginas de turismo como Tripadvisor o Booking.com

    p.mb-5(data-aos="fade-left") A continuación, se describen los principales instrumentos empleados en la recopilación de datos turísticos en Colombia, esenciales para comprender el comportamiento de los viajeros y optimizar los servicios: 

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-lg-6.col-12.mb-5.mb-md-0.order-lg-1.order-2.mb-lg-0
            LineaTiempoD.color-acento-botones.especial
              p(numero="1" titulo="<em>Software</em> de encuestas") Herramientas como Google Forms, SurveyMonkey y Typeform para crear y distribuir encuestas.
              
              p(numero="2" titulo="Aplicaciones móviles") Aplicaciones que permiten la recolección de datos en campo, facilitando el acceso y la gestión de la información.
              
              p(numero="3" titulo="Sistemas de Información Geográfica (SIG)") Herramientas que permiten analizar datos espaciales, ayudando en la planificación y desarrollo de destinos turísticos.
              
              p(numero="4" titulo="Bases de datos turísticas") Repositorios de información que contienen datos sobre infraestructura turística, alojamiento, y atracciones.

              p(numero="4" titulo="Plataformas de redes sociales") Utilización de herramientas de análisis de datos para extraer tendencias y opiniones sobre destinos turísticos.
          .col-lg-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img41.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-left") Es importante considerar algunos aspectos adicionales que fortalecen el proceso de recolección de información turística en Colombia:

    .row.justify-content-center.ali.mb-4(data-aos="flip-up")
      .tarjeta--container.row.mb-5
        .col-xl.col-md-6.tarjeta.color-primario.p-5
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              figure
                img(src='@/assets/curso/temas/tema3/img42.png', alt='Imagen decorativa')
            
          h4.text-center Métodos mixtos
          p.text-center La combinación de técnicas cuantitativas y cualitativas ofrece una visión más integral del panorama turístico, permitiendo entender tanto los números como las percepciones y experiencias de los turistas. 

        .col-xl.col-md-6.tarjeta.color-secundario.p-5
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              figure
                img(src='@/assets/curso/temas/tema3/img43.png', alt='Imagen decorativa')
            
          h4.text-center Ética y privacidad
          p.text-center Asegurar el consentimiento informado de los participantes y la protección de sus datos personales es fundamental. La recolección de información debe respetar la confidencialidad y cumplir con las normativas vigentes en protección de datos.

        .col-xl.col-md-6.tarjeta.color-acento-contenido.p-5
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              figure
                img(src='@/assets/curso/temas/tema3/img44.png', alt='Imagen decorativa')
            
          h4.text-center Adaptabilidad de los instrumentos
          p.text-center Los instrumentos deben ser flexibles y adaptarse a las circunstancias cambiantes del mercado y del entorno, especialmente en un contexto turístico dinámico.

    p.mb-5(data-aos="fade-left") Estas consideraciones garantizan la validez, confiabilidad y ética del proceso, contribuyendo al desarrollo de un turismo sostenible y centrado en el bienestar tanto de los turistas como de las comunidades locales.
          
    separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Plan de acción en turismo

    p.mb-5(data-aos="fade-left") Un plan de acción en turismo es una estrategia integral que busca fomentar el desarrollo sostenible del sector, optimizando los recursos locales y mejorando la experiencia del visitante. Este tipo de plan se basa en un análisis detallado de la situación actual, estableciendo objetivos claros a corto, mediano y largo plazo. Entre sus componentes clave se encuentran la promoción de destinos, la mejora de infraestructuras, la formación del personal y la preservación del patrimonio cultural y natural. Además, un buen plan de acción debe incluir la participación de la comunidad local y de actores privados para garantizar el beneficio colectivo. Es crucial que las iniciativas sean sostenibles, considerando el impacto ambiental y socioeconómico a largo plazo. Un plan de acción en turismo bien diseñado impulsa la competitividad del destino, mejora la experiencia del turista y promueve un desarrollo equilibrado del sector.
    
    p.mb-5(data-aos="fade-left") Elaborar un plan de acción en turismo implica desarrollar una estrategia clara y organizada para alcanzar objetivos específicos en este sector. Las principales etapas incluyen: 

    .tarjeta.tarjeta--BG01.p-4.mb-5(data-aos="flip-up")
      SlyderA(tipo="b")
        .row.justify-content-center.p-4
          .col-lg-6.order-lg-1.order-2
            h4 Análisis de la situación
            ul.lista-ul
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 <b>Estudio de mercado</b>: investigación del mercado turístico actual, identificando tendencias, competencia y perfil del turista.
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 <b>Análisis FODA</b>: identificar fortalezas, oportunidades, debilidades y amenazas del destino turístico.
        
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img45.png', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-6.order-lg-1.order-2
            h4 Definición de objetivos
            ul.lista-ul
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 <b>Objetivos generales</b>: establecer metas amplias, como aumentar la llegada de turistas en un 20 % en dos años.
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 <b>Objetivos específicos</b>: definir metas concretas, como incrementar las visitas a un museo local en un 15 %.
        
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img46.png', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-6.order-lg-1.order-2
            h4 Segmentación del mercado
            ul.lista-ul
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 <b>Identificación de segmentos</b>: determinar los diferentes grupos de turistas (familias, jóvenes, ecoturistas, etc.).
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 <b>Adaptación de ofertas</b>: diseñar productos y servicios adaptados a cada segmento.
        
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img47.png', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-6.order-lg-1.order-2
            h4 Desarrollo de estrategias
            ul.lista-ul
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 <b><em>Marketing</em> y promoción</b>: diseñar campañas de <em>Marketing</em> digital, redes sociales, ferias de turismo, etc.
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 <b>Desarrollo de productos</b>: crear nuevos paquetes turísticos, tours o experiencias culturales.
        
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img48.png', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-6.order-lg-1.order-2
            h4 Colaboraciones y alianzas
            ul.lista-ul
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 <b><em>Stakeholders</em></b>: colaboración con autoridades locales, empresas de turismo, hoteles y organizaciones comunitarias.
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 <b>Programas de capacitación</b>: ofrecer formación a guías turísticos y personal en servicio al cliente.
        
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img49.png', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-6.order-lg-1.order-2
            h4 Implementación
            ul.lista-ul
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 <b>Cronograma</b>: establecer un calendario para la implementación de cada acción.
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 <b>Recursos</b>: definir el presupuesto y recursos necesarios para llevar a cabo el plan.
        
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img50.png', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-6.order-lg-1.order-2
            h4 Monitoreo y evaluación
            ul.lista-ul
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 <b>Indicadores de desempeño</b>: establecer KPIs (Indicadores Clave de Desempeño) para evaluar el progreso.
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 <b>Revisión periódica</b>: realizar análisis regulares para ajustar estrategias según los resultados obtenidos.
        
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img51.png', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-6.order-lg-1.order-2
            h4 Sostenibilidad
            ul.lista-ul
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 <b>Prácticas sostenibles</b>: fomentar el turismo responsable y sostenible, minimizando el impacto ambiental.
                li.mb-3 
                  i.lista-ul__vineta
                  p.mb-0 <b>Beneficio a la comunidad</b>: asegurar que el turismo beneficie a la comunidad local.
        
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img52.png', alt='Imagen decorativa')
      
    p(data-aos="fade-left") Este plan puede ser adaptado según las necesidades específicas del destino y los recursos disponibles, ofreciendo una guía estructurada que orienta el desarrollo sostenible y exitoso del turismo en la región.

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
