<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Diagnóstico territorial

    .col.mb-5
      figure
        img(src='@/assets/curso/temas/tema2/img01.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-left") El diagnóstico territorial es un proceso de análisis exhaustivo que tiene como objetivo evaluar las características y condiciones de un territorio en términos sociales, económicos, ambientales, y culturales. Este tipo de diagnóstico se utiliza para comprender las dinámicas de un área específica, identificar problemas, potencialidades, riesgos, y oportunidades, y así facilitar la toma de decisiones en la planificación del desarrollo territorial. A continuación, se describen los componentes principales del diagnóstico territorial: 

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-xl-3.col-lg-3.col-sm-10.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema2/img02.svg' alt="Imagen decorativa")
          .tarjetas-up_card.BG04
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Diagnóstico físico-ambiental
            p.text-center.mb-0.px-2 Evalúa las condiciones naturales del territorio, como el clima, la geografía, los suelos, la biodiversidad y los recursos hídricos. También analiza los riesgos ambientales, como desastres naturales o degradación de recursos.

      .col-xl-3.col-lg-3.col-sm-10.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema2/img03.svg' alt="Imagen decorativa")
          .tarjetas-up_card.BG04
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Diagnóstico socioeconómico
            p.text-center.mb-0.px-0 Analiza la estructura social y económica, incluyendo aspectos como el empleo, los ingresos, los servicios públicos (salud, educación, transporte, entre otros), las actividades productivas y la distribución de la riqueza.

      .col-xl-3.col-lg-3.col-sm-10.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema2/img04.svg' alt="Imagen decorativa")
          .tarjetas-up_card.BG04
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Diagnóstico político-institucional
            p.text-center.mb-0.px-2 Estudia el marco legal, las políticas públicas y la capacidad institucional del territorio. Analiza cómo las instituciones locales, regionales o nacionales interactúan con la población y el territorio.

      .col-xl-3.col-lg-3.col-sm-10.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema2/img05.svg' alt="Imagen decorativa")
          .tarjetas-up_card.BG04
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Diagnóstico cultural y social
            p.text-center.mb-0.px-2 Considera aspectos relacionados con las costumbres, tradiciones, prácticas culturales, la cohesión social, los niveles de participación ciudadana y la identidad local.

    p.mb-5(data-aos="fade-left") Los objetivos del diagnóstico territorial se centran en diversos aspectos clave para la comprensión y el desarrollo de un territorio. Estos incluyen:

    .row.mb-5(data-aos="flip-up")
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 1
          p.text-center 
            b Identificación de fortalezas y debilidades
          p.text-center Se busca entender qué recursos y capacidades tiene un territorio y qué limitaciones enfrenta.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            .h2 2
          p.text-center 
            b Orientación para la planificación
          p.text-center Sirve como base para desarrollar estrategias y proyectos que promuevan el desarrollo sostenible y equilibrado del territorio.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 3
          p.text-center 
            b Participación ciudadana
          p.text-center Promueve la inclusión de las voces locales en el análisis y en la definición de soluciones para su entorno.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones-especial.p-5
          .tarjeta-numerada__numero
            .h2 4
          p.text-center 
            b Evaluación del impacto de políticas
          p.text-center Analiza cómo las políticas actuales afectan al territorio y qué cambios pueden implementarse para mejorar las condiciones de vida.

    p.mb-5(data-aos="fade-left") Un buen diagnóstico territorial es clave para diseñar intervenciones pertinentes, eficientes y sostenibles a largo plazo.
    
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Generalidades del diagnóstico territorial

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img06.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El diagnóstico territorial es un proceso fundamental en la planificación y gestión de áreas geográficas. Su propósito es analizar las características físicas, sociales, económicas y ambientales de un territorio para identificar problemáticas, fortalezas, potencialidades y limitaciones. Este análisis incluye la recopilación de datos sobre geografía, clima, demografía, infraestructura y recursos naturales. A través de este diagnóstico, es posible detectar problemas como la desigualdad social, la degradación ambiental o la carencia de servicios básicos, al tiempo que se identifican oportunidades para el desarrollo sostenible.
          br
          br
          | 

    p.mb-5(data-aos="fade-left") El diagnóstico territorial permite diseñar estrategias que fomenten el equilibrio entre el crecimiento económico, la conservación ambiental y el bienestar social, siendo una herramienta esencial para la toma de decisiones informadas y la formulación de políticas públicas que respondan a las necesidades específicas de una comunidad o región. A continuación, se presentan las generalidades del diagnóstico territorial:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-lg-9.col-12.mb-5.mb-md-0.order-lg-2.order-2.mb-lg-0
            LineaTiempoD.color-acento-botones.especial
              .row(numero="1" titulo="Objetivos")
                .col-12.mb-4.mb-md-0
                  ul.lista-ul
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 <b>Identificación de recursos</b>: estudia los recursos naturales, económicos, sociales y culturales disponibles.
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 <b>Detección de problemas</b>: identifica las debilidades, desafíos y conflictos presentes en el territorio.
                    li.mb-3 
                      i.lista-ul__vineta
                      p.mb-0 <b>Reconocimiento de potencialidades</b>: destaca oportunidades para el desarrollo sostenible.

              .row(numero="2" titulo="Dimensiones del análisis")
                .col-12.mb-4.mb-md-0
                  ul.lista-ul
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 <b>Geográfica</b>: considera ubicación, topografía, clima y medio ambiente.
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 <b>Demográfica</b>: analiza la población, su distribución, crecimiento, densidad y características socioeconómicas.
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 <b>Económica</b>: evalúa las actividades productivas, empleo, infraestructura y desarrollo económico.
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 <b>Social</b>: examina bienestar, educación, salud, vivienda y cohesión social.
                    li.mb-3 
                      i.lista-ul__vineta
                      p.mb-0 <b>Política y administrativa</b>: revisa estructuras de gobierno, capacidad de gestión y marcos legales que influyen en el territorio.

              .row(numero="3" titulo="Metodología")
                .col-12.mb-4.mb-md-0
                  ul.lista-ul
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 <b>Recolección de datos</b>: información cualitativa y cuantitativa obtenida mediante censos, encuestas, entrevistas y fuentes secundarias (estadísticas oficiales, estudios previos).
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 <b>Análisis de actores</b>: identifica actores clave, sus intereses, recursos y poder de influencia en el territorio.
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 <b>Sistemas de Información Geográfica (SIG)</b>: utilización de herramientas SIG para análisis espacial y visualización de mapas temáticos.
                    li.mb-3 
                      i.lista-ul__vineta
                      p.mb-0 <b>Participación comunitaria</b>: involucra a la comunidad local para asegurar que sus necesidades y perspectivas sean consideradas.

              .row(numero="4" titulo="Resultados esperados")
                .col-12.mb-4.mb-md-0
                  ul.lista-ul
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 <b>Perfil territorial</b>: visión general de las características del territorio.
                    li.mb-0 
                      i.lista-ul__vineta
                      p.mb-0 <b>Problemas priorizados</b>: identificación de los principales desafíos que requieren atención.
                    li.mb-3 
                      i.lista-ul__vineta
                      p.mb-0 <b>Estrategias de intervención</b>: propuestas para resolver los problemas identificados y aprovechar las oportunidades.
          .col-lg-3.col-sm-4.col-5.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img07.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-left") En conclusión, el diagnóstico territorial es crucial para planificar el desarrollo sostenible, permitiendo una visión clara de la situación actual del territorio y diseñando estrategias adecuadas para su desarrollo futuro.

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Investigación diagnóstica territorial

    p.mb-5(data-aos="fade-left") La investigación diagnóstica territorial, al centrarse en el análisis de un territorio específico, tiene como objetivo proporcionar un entendimiento profundo del contexto local. El proceso permite no solo la identificación de problemas y necesidades, sino también la detección de potencialidades que pueden ser aprovechadas para el desarrollo sostenible y equilibrado de la región. A continuación, se describen los objetivos de la investigación diagnóstica territorial:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema2/img08.svg' alt='AvatarTop')
          h4.text-center Identificación de recursos y capacidades locales
          p.text-center Evaluar los recursos naturales, humanos y económicos disponibles en el territorio.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema2/img09.svg' alt='AvatarTop')
          h4.text-center Reconocimiento de problemas y necesidades
          p.text-center Detectar las áreas de mayor vulnerabilidad o carencia, como la falta de servicios básicos, infraestructuras o empleo.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema2/img10.svg' alt='AvatarTop')
          h4.text-center Evaluación de oportunidades y potencialidades
          p.text-center Identificar posibles áreas de desarrollo económico, turístico o cultural, así como iniciativas sostenibles.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema2/img11.svg' alt='AvatarTop')
          h4.text-center Comprensión de dinámicas sociales y políticas
          p.text-center Analizar la estructura social y política, las relaciones entre los actores locales y la forma en que influyen en el desarrollo del territorio.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema2/img12.svg' alt='AvatarTop')
          h4.text-center Generación de datos para la planificación estratégica
          p.text-center Proporcionar una base sólida de información para la creación de políticas públicas, planes de desarrollo o proyectos de intervención.

    p.mb-5(data-aos="fade-left") Este enfoque garantiza que las decisiones tomadas para el desarrollo territorial sean fundamentadas, eficientes y sostenibles a largo plazo. Para llevar a cabo una investigación diagnóstica territorial efectiva, es fundamental seguir un proceso estructurado. A continuación, se presentan las fases principales que permiten abordar de manera integral los aspectos clave del territorio y garantizar una planificación adecuada: 

    .row.justify-content-center(data-aos="flip-up")
      .col-lg-10.desktop
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img13.svg', alt='Imagen decorativa')
          .tarjeta.color3.p-3(x="15.1%" y="25.3%" numero="+")
            p Implica recopilar datos cualitativos y cuantitativos mediante encuestas, entrevistas, observación directa, análisis de documentos y fuentes secundarias.
          .tarjeta.color3.p-3(x="49.3%" y="9.6%" numero="+")
            p Evalúa los recursos naturales, la infraestructura disponible, las actividades económicas y los servicios públicos, así como la organización social y política del territorio.
          .tarjeta.color3.p-3(x="15.1%" y="58.5%" numero="+")
            p Examina las condiciones de vida de la población, incluyendo el empleo, los ingresos, el acceso a la educación, la salud y otros servicios.
          .tarjeta.color3.p-3(x="82.3%" y="23%" numero="+")
            p Identifica a los actores clave que intervienen en el territorio (como el gobierno, ONG, empresas, comunidades) y analiza las dinámicas de poder entre ellos.
          .tarjeta.color3.p-3(x="83.6%" y="68.3%" numero="+")
            p Integra la información obtenida para crear un diagnóstico que brinde una visión clara de la situación del territorio y ofrezca recomendaciones para su desarrollo.
    
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-sm-9.col-10.movil
        figure
          img(src='@/assets/curso/temas/tema2/img14.svg', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-left") Después de describir las fases, es importante reconocer el uso del diagnóstico territorial, que incluye: 

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-8.col-12
        .row.justify-content-center.align-items-center
          .col-lg-4.col-6.mb-3
            figure
              img(src='@/assets/curso/temas/tema2/img15.png', alt='Imagen decorativa')
          .col-lg-8.col-12
            .cajon.cajon.p-4.mb-3
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Planificación urbana o rural.
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Desarrollo de políticas públicas. 
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Diseño de proyectos de desarrollo sostenible.
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Gestión de riesgos y vulnerabilidades ambientales.
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Empoderamiento de comunidades locales.


    p.mb-5(data-aos="fade-left") Este tipo de investigación es clave para promover un desarrollo inclusivo y sostenible que considere las particularidades de cada territorio.

    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Métodos diagnósticos territoriales

    p.mb-5(data-aos="fade-left") Los métodos diagnósticos territoriales son herramientas y técnicas utilizadas para analizar el estado actual de un territorio o región desde diversas perspectivas (social, económica, ambiental, cultural, etc.). Estos diagnósticos permiten identificar fortalezas, debilidades, oportunidades y amenazas en un territorio, proporcionando una base sólida para la planificación y la toma de decisiones. A continuación, se describen algunos de los métodos más comunes:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-11.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span <i>Métodos más utilizados en diagnósticos territoriales.</i>
        .tabla-a.clstabla.color-acento-contenido
          table
            thead
              tr
                th Método
                th Descripción
                th Aplicación
            tbody.text-center
              tr
                td.text-bold Análisis FODA (Fortalezas, Oportunidades, Debilidades y Amenazas)
                td Es un método utilizado para identificar las fortalezas internas del territorio, así como sus debilidades. también se analizan las oportunidades y amenazas externas.
                td Permite a las autoridades locales y a los planificadores entender los factores que pueden influir en el desarrollo sostenible del territorio.
              tr
                td.text-bold Cartografía participativa
                td Consiste en la creación de mapas por parte de las comunidades locales para representar su conocimiento del territorio, sus recursos y sus problemas.
                td Utilizado en la gestión territorial comunitaria, permite involucrar a los actores locales en el diagnóstico.
              tr
                td.text-bold Análisis SIG (Sistemas de Información Geográfica)
                td Herramienta digital que permite recopilar, analizar y visualizar datos espaciales y geográficos del territorio.
                td Se usa para estudiar patrones de uso del suelo, recursos naturales, infraestructura y otras variables espaciales que afectan el territorio.
              tr
                td.text-bold Encuestas y entrevistas
                td Recolección de datos cualitativos y cuantitativos a través de encuestas o entrevistas a actores clave en el territorio (residentes, líderes comunitarios, empresarios, etc.).
                td Permite obtener información directa sobre la percepción de los problemas, necesidades y oportunidades en el territorio.
              tr
                td.text-bold Evaluación Ambiental Estratégica (EAE)
                td Es un proceso sistemático para evaluar los impactos ambientales de políticas, planes o programas en un territorio.
                td Garantiza que los aspectos ambientales se consideren desde el inicio en la toma de decisiones.
              tr
                td.text-bold Análisis de Redes Sociales (ARS)
                td Herramienta que estudia las relaciones e interacciones entre los actores del territorio, como organizaciones, instituciones y grupos sociales.
                td Permite identificar líderes, relaciones de poder y cooperación dentro del territorio.
              tr
                td.text-bold Análisis de Capacidad de Carga
                td Se utiliza para evaluar la capacidad del territorio para sostener cierta cantidad de población o actividades sin causar deterioro ambiental o social.
                td Fundamental para la planificación sostenible y la gestión de recursos.
              tr
                td.text-bold Mapeo de conflictos
                td Identificación y análisis de conflictos existentes o potenciales en el uso y gestión del territorio, como disputas por el uso de la tierra o acceso a recursos.
                td Útil para la mediación y resolución de conflictos.
              tr
                td.text-bold Talleres participativos
                td Reuniones con actores locales para discutir problemas y soluciones territoriales.
                td Promueve la participación activa de la comunidad en la construcción de diagnósticos y soluciones
              tr
                td.text-bold Análisis de riesgos
                td Evaluación de los riesgos naturales, sociales o económicos que pueden afectar al territorio, como inundaciones, terremotos, pobreza, etc.
                td Se usa para desarrollar estrategias de mitigación y gestión de riesgos.

    p.mb-5(data-aos="fade-left") Estos métodos proporcionan una visión integral del territorio y son clave para la planificación territorial efectiva, el desarrollo sostenible y la gestión de recursos.

</template>

<script>
export default {
  name: 'Tema2',
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
