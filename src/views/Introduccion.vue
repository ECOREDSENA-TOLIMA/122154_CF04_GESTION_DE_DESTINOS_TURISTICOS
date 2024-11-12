<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5(data-aos="fade-left") El estudio del territorio es fundamental para comprender las características físicas, sociales, económicas y culturales que lo definen y lo hacen único. Este análisis permite identificar tanto los recursos como las limitaciones de una región, facilitando así la planificación y gestión adecuadas de sus actividades. En este contexto, el diagnóstico territorial cobra especial relevancia, ya que evalúa el estado actual de una zona desde diversas perspectivas, tales como la infraestructura, los servicios, el medio ambiente y las condiciones socioeconómicas de la población.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-lg-9.col-12.order-lg-2.order-2 
            .cajon-b.color-primario.p-3.mb-0
              p.mb-0 Dentro del diagnóstico territorial, el análisis turístico adquiere especial importancia cuando la región tiene, o podría tener, un desarrollo turístico significativo. Este tipo de evaluación busca analizar los recursos turísticos, la capacidad de acogida, las dinámicas de visitantes y la sostenibilidad de las actividades relacionadas con el turismo. Al estudiar estos factores, es posible identificar no solo el potencial actual del turismo en el territorio, sino también los desafíos y oportunidades a abordar para fomentar un desarrollo equilibrado y sostenible. 
            .bloque-texto-b.color-primario.p-3
              .bloque-texto-b__texto
                p.mb-0 El marco normativo del turismo abarca el conjunto de leyes, reglamentos y políticas que regulan las actividades turísticas en un territorio. Este marco es esencial para garantizar que el desarrollo turístico se realice de manera ordenada, respetuosa con el medio ambiente y beneficiosa para la comunidad local. Comprender las normativas vigentes es crucial para realizar un diagnóstico adecuado y proponer acciones que se alineen con los principios legales y éticos.
          .col-lg-3.col-8.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/intro/img01.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-left") El informe del diagnóstico turístico resulta de un análisis exhaustivo que recopila datos, reflexiones y proyecciones sobre el estado actual y las perspectivas del desarrollo turístico en una región. Este informe es clave para gestores públicos, inversionistas privados y la comunidad local, ya que ofrece una visión clara sobre las estrategias a seguir para mejorar la oferta turística y asegurar su sostenibilidad a largo plazo.
    
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
