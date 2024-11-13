<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") El diagnóstico turístico es fundamental para comprender el estado actual de un destino y sus posibilidades de crecimiento. Este análisis evalúa los recursos turísticos naturales y culturales, la infraestructura existente, y la oferta y demanda del turismo, identificando tanto los atractivos clave con capacidad de atraer visitantes como las deficiencias en infraestructura o servicios que pueden limitar el desarrollo turístico. También considera la posición competitiva del territorio mediante una comparación con destinos similares, y examina factores socioeconómicos y ambientales que pueden influir en el desarrollo turístico sostenible. El informe final sintetiza estos hallazgos, destacando oportunidades para mejorar la experiencia del visitante y proponiendo recomendaciones para fortalecer la planificación turística en concordancia con la normativa y fomentando un desarrollo equilibrado.

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis del componente formativo “Diagnóstico turístico del territorio” se abordan los temas de comprensión del territorio, diagnóstico territorial, diagnóstico turístico, normatividad y elaboración de un informe diagnóstico.")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
