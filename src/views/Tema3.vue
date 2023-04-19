<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Indicadores de evaluación de proveedores

    p(data-aos="fade-up") Tener en cuenta que todo proceso o actividad debe ser medida, con el objetivo de poder obtener información con respecto a su cumplimiento. Es por eso que:

    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/temas/tema3/1.svg" data-aos="fade-right")
      .col-lg-8(style="place-self:center;")
        .cajon.color-primario.p-4
          p.mb-0(data-aos="fade-up") En la evaluación de proveedores, se deben plantear unos indicadores con el objetivo de verificar cuáles son los depósitos con los cuales se seguirá contando y con cuáles habrá que implementar acciones de mejora. 
        p.mt-4(data-aos="fade-up") Para una mejor comprensión del tema se debe identificar qué es un indicador, cuáles son los tipos de indicadores que existen, sus características y la medición y valoración de cada uno de estos indicadores.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_3_1 3.1 Concepto de indicador



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

<style lang="sass">
.cajon.color-primario
  background-color: rgba(0, 188, 212,.22)
</style>
