<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 El territorio

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Existen múltiples definiciones de la palabra "territorio" y de lo que se ha generado a lo largo del tiempo en los diferentes territorios del mundo. A través de la historia, ha habido una evolución constante en las comunidades, motivada por el interés de delimitar y definir los espacios donde vivían y realizaban diversas actividades para sobrevivir. Estas actividades se fueron perfeccionando y adaptando tanto a las condiciones climáticas como a la productividad de cada región, lo que llevó a las comunidades a especializarse. Esta especialización, a su vez, las impulsó a buscar nuevos territorios, ya fuera para aumentar su poder o simplemente para expandir su cultura, mejorar su nivel económico o aplicar sus modelos geopolíticos.
          br
          br
          | 

    p.mb-5(data-aos="fade-left") Se puede afirmar que existen diferentes niveles para delimitar un territorio y que la posesión o propiedad de un espacio ha variado con el tiempo. En sus inicios, muchos territorios eran libres, sin fronteras establecidas. Con el paso del tiempo y debido a los movimientos y desplazamientos humanos, se comenzaron a definir fronteras, basadas en factores como la importancia de la ubicación, la producción agrícola, el clima y el acceso. Estos factores dieron lugar a asentamientos humanos donde se desarrollaron actividades económicas, socioculturales y políticas, además de tener un impacto en el medio ambiente. A medida que se profundiza en cada una de estas temáticas, se fortalece la comprensión de lo que significa el territorio y su importancia en la implementación de políticas, planes y proyectos en aspectos ambientales, sociales y económicos.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Sistemas que lo integran

    .titulo.mb-5(data-aos="flip-up")
      img(src='@/assets/curso/temas/ico.svg', alt='Imagen decorativa')
      h4.mb-0 ¿Qué son los sistemas territoriales?

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-lg-8.col-12.order-lg-2.order-2 
            p.mb-3 Los sistemas territoriales son estructuras complejas que integran actores, políticas, procesos y tecnologías, orientados a la gestión de información ambiental y regional. Estos sistemas facilitan la generación de conocimiento, la toma de decisiones, la educación y la participación social, con el objetivo de promover el desarrollo sostenible en un contexto subnacional o regional. 
            p.mb-0 Dichos sistemas abarcan tanto los componentes físicos (como el aire, el clima, los suelos y los recursos naturales) como los componentes sociales (incluyendo la población, las infraestructuras, las actividades económicas y las instituciones). Estos elementos interactúan dentro de un espacio geográfico determinado, buscando una gestión integrada que permita un desarrollo equilibrado entre los aspectos ambientales, sociales y económicos.
          .col-lg-4.col-8.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema1/img02.png', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon.color-secundario.p-4
          p.mb-0 Los sistemas territoriales desempeñan un papel crucial en la organización y planificación del territorio, ya que ayudan a identificar las potencialidades y limitaciones de una región, facilitando la implementación de políticas públicas que respondan a las necesidades locales. Además, estos sistemas se encargan de analizar cómo las decisiones territoriales afectan a las dinámicas locales y globales, promoviendo un enfoque sostenible y adaptado a las particularidades de cada espacio.

    p.mb-5(data-aos="fade-left") Dentro de los sistemas territoriales, es posible identificar subsistemas clave como el ambiental, el económico, el sociocultural y el político-institucional. Todos estos subsistemas interactúan entre sí y deben estar alineados con las políticas de ordenamiento territorial, con el fin de garantizar un desarrollo armónico y sostenible, que tenga en cuenta la interacción entre los recursos naturales y las actividades humanas.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Entidades y niveles territoriales

    .row.justify-content-center(data-aos="flip-up")
      .col-lg-11.col-12
        .row.justify-content-center
          .col-lg-2.col-4.mb-5
            figure
              img(src='@/assets/curso/temas/tema1/img03.png', alt='Imagen decorativa')
          .col-lg-9.col-12
            .bloque-texto-f.color-primario.pt-4.px-5.mb-5
              .bloque-texto-f__comillas
                i.fas.fa-quote-left
                i.fas.fa-quote-right
              p.text-regular.bloque-texto-f__texto.text-center <b>El artículo 286 de la Constitución</b> establece que "son entidades territoriales los departamentos, municipios, distritos y territorios indígenas, los cuales conforman los diferentes niveles de organización territorial de la república".

    p.mb-5(data-aos="fade-left") El país, como territorio macro, está conformado por áreas terrestres (suelo y subsuelo), insulares y marítimas, dividido en seis regiones geográficas:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span <i>Regiones geográficas de Colombia.</i>
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema1/img04.svg', alt='En la figura 1,  se presentan las seis regiones geográficas de Colombia, comprendidas por Amazonia, Andina, Caribe, Insular, Orinoquía y Pacífica.')
          figure.movil
            img(src='@/assets/curso/temas/tema1/img05.svg', alt='En la figura 1,  se presentan las seis regiones geográficas de Colombia, comprendidas por Amazonia, Andina, Caribe, Insular, Orinoquía y Pacífica.')

    p.mb-5(data-aos="fade-left") A su vez, estas regiones se subdividen en 32 departamentos, dentro de los cuales se encuentran seis distritos especiales, incluido el Distrito Capital. Además, Colombia cuenta con 1.122 municipios, que incluyen territorios con presencia de comunidades indígenas, todo bajo un espacio aéreo soberano.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-7.col-12.order-lg-1.order-2 
        .cajon.cajon.color-secundario.p-4.mb-3
          p.mb-0  Las entidades territoriales tienen competencias específicas en administración, planificación y desarrollo dentro de sus respectivas jurisdicciones. Los departamentos, municipios y distritos cuentan con autonomía administrativa y financiera, lo que les permite implementar políticas públicas acordes a sus necesidades locales.
        p En el contexto turístico, estas entidades juegan un papel fundamental en la promoción y gestión de destinos, así como en la regulación de actividades que impactan el desarrollo sostenible del turismo en sus territorios. La planificación de proyectos turísticos, la gestión de recursos naturales y culturales, y el control del impacto ambiental y social de la actividad turística son tareas clave que recaen en las autoridades territoriales, en coordinación con el gobierno nacional y los actores del sector privado.
      .col-lg-5.col-8.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema1/img06.png', alt='Imagen decorativa')

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Planes por nivel territorial

    p.mb-5(data-aos="fade-left") En el marco de la planificación territorial en Colombia, existen diferentes planes que se diseñan y ejecutan a nivel nacional, regional y local. Estos planes tienen como objetivo guiar el desarrollo integral de los territorios, garantizando un equilibrio entre el crecimiento económico, la sostenibilidad ambiental y el bienestar social.

    TabsB.color-acento-botones.mb-5(data-aos="flip-up")
      .py-4.py-md-5(titulo="Planes de desarrollo territorial" :icono="require('@/assets/curso/temas/tema1/img12.svg')")
        .row.justify-content-center.p-4
          .col-lg-7.order-lg-2.order-2
            p Son herramientas clave para la planificación a largo plazo en los departamentos, distritos y municipios. Estos planes establecen las metas, estrategias y acciones que las entidades territoriales deben implementar durante un periodo de gobierno (normalmente cada cuatro años), con el fin de promover el desarrollo económico, social y cultural en sus territorios.
          .col-lg-5.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img07.png', alt='Imagen decorativa')

      .py-4.py-md-5(titulo="Plan de Ordenamiento Territorial (POT)" :icono="require('@/assets/curso/temas/tema1/img13.svg')")
        .row.justify-content-center.p-4
          .col-lg-7.order-lg-2.order-2
            p Es un instrumento que regula el uso y ocupación del suelo en el territorio colombiano. Se establecen directrices para el desarrollo urbano y rural, definiendo zonas de protección ambiental, áreas para actividades económicas, zonas residenciales, entre otras. El POT es un instrumento obligatorio para los municipios y distritos, y se ajusta periódicamente para responder a las dinámicas locales y a las políticas nacionales.
          .col-lg-5.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img08.png', alt='Imagen decorativa')

      .py-4.py-md-5(titulo="Programa POT Modernos" :icono="require('@/assets/curso/temas/tema1/img14.svg')")
        .row.justify-content-center.p-4
          .col-lg-7.order-lg-2.order-2
            p Este programa del gobierno nacional busca actualizar y mejorar los Planes de Ordenamiento Territorial, dotándolos de herramientas tecnológicas avanzadas para facilitar su implementación. Con ello, se pretende que los POT sean más flexibles, inclusivos y acordes a las nuevas necesidades de las generaciones futuras, incorporando principios de sostenibilidad y adaptabilidad al cambio climático.
          .col-lg-5.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img09.png', alt='Imagen decorativa')

      .py-4.py-md-5(titulo="Planes de vida" :icono="require('@/assets/curso/temas/tema1/img15.svg')")
        .row.justify-content-center.p-4
          .col-lg-7.order-lg-2.order-2
            p Estos son desarrollados por las comunidades indígenas y buscan preservar su identidad cultural y su relación armónica con el territorio. Los planes de vida representan una forma autónoma de planificación, donde las comunidades definen sus propios objetivos de desarrollo y las estrategias para alcanzarlos, respetando sus tradiciones y formas de vida.
          .col-lg-5.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img10.png', alt='Imagen decorativa')

      .py-4.py-md-5(titulo="Planes de etnodesarrollo" :icono="require('@/assets/curso/temas/tema1/img16.svg')")
        .row.justify-content-center.p-4
          .col-lg-7.order-lg-2.order-2
            p Son iniciativas que buscan promover el desarrollo económico, social y cultural de las comunidades afrodescendientes, indígenas y otros grupos étnicos. Estos planes reconocen las particularidades de los territorios étnicos y fomentan el uso sostenible de los recursos naturales y el fortalecimiento de las prácticas culturales y sociales propias de cada comunidad.
          .col-lg-5.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img11.png', alt='Imagen decorativa')

    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Gobernanza y gobernabilidad

    p.mb-5(data-aos="fade-left") La gobernanza y la gobernabilidad son dos conceptos fundamentales para entender el desarrollo político de Colombia y la forma en que se gestiona el país.

    .row.justify-content-center.ali.mb-4(data-aos="flip-up")
      .tarjeta--container.row.mb-5
        .col-xl.col-md-6.tarjeta.color-primario.p-5
          .row.justify-content-center.mb-3
            .col-lg-4.col-md-4.col-5
              figure
                img(src='@/assets/curso/temas/tema1/img17.svg', alt='Imagen decorativa')
            
          h4.text-center Gobernanza
          p Se refiere a los procesos y estructuras mediante los cuales las instituciones públicas, el sector privado y la sociedad civil interactúan y toman decisiones que afectan el bienestar colectivo. La gobernanza promueve principios de transparencia, participación ciudadana y rendición de cuentas, aspectos clave en la búsqueda del bien común. En Colombia, los esfuerzos por mejorar la gobernanza se han materializado en reformas que intentan combatir la corrupción, fortalecer la institucionalidad y mejorar la eficiencia del Estado. Sin embargo, este proceso enfrenta desafíos importantes debido a la desigualdad social, la falta de confianza en las instituciones y la debilidad del control estatal en algunas zonas rurales y periféricas.

        .col-xl.col-md-6.tarjeta.color-secundario.p-5
          .row.justify-content-center.mb-3
            .col-lg-4.col-md-4.col-5
              figure
                img(src='@/assets/curso/temas/tema1/img18.svg', alt='Imagen decorativa')
            
          h4.text-center Gobernabilidad
          p Hace referencia a la capacidad del gobierno para implementar políticas, mantener el orden y atender las demandas sociales de manera eficaz y legítima. En Colombia, la gobernabilidad ha estado históricamente afectada por factores como el conflicto armado, la presencia de actores ilegales y la fragmentación del control territorial. Si bien los acuerdos de paz con las FARC representaron un avance significativo en la consolidación de la paz, la gobernabilidad sigue siendo un reto en diversas áreas rurales del país, donde el control estatal es limitado y persisten dinámicas de violencia y exclusión. La estabilidad y efectividad del gobierno en estas zonas son claves para mejorar la gobernabilidad en todo el territorio nacional.

    .titulo.mb-5(data-aos="flip-up")
      img(src='@/assets/curso/temas/ico.svg', alt='Imagen decorativa')
      h4.mb-0 ¿Qué es la gobernabilidad en Colombia? 

    p.mb-5(data-aos="fade-left") Se refiere semánticamente a la capacidad de ser gobernable y conceptualmente a la relación que se manifiesta cuando existe un estado de equilibrio en el ejercicio del poder político derivado de la solución de demandas sociales y la capacidad de los gobiernos de atender éstas de forma eficaz, estable y legítima.

    .titulo.mb-5(data-aos="flip-up")
      img(src='@/assets/curso/temas/ico.svg', alt='Imagen decorativa')
      h4.mb-0 ¿Cómo se define la gobernanza?

    p.mb-5(data-aos="fade-left") El concepto de gobernanza hace referencia a todos los procesos de gobierno, instituciones, procedimientos y prácticas mediante los que se deciden y regulan los asuntos que atañen al conjunto de la sociedad.
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
