<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row
      .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") Toda empresa, entre ellas, los establecimientos y servicios farmacéuticos, están relacionados con unas partes interesadas como son: clientes, estado, colaboradores, entes de vigilancia y control, competidores y los proveedores. Estos últimos son de vital importancia para el desarrollo de las actividades de las empresas del sector farmacéutico, porque se convierten en aliados estratégicos, con un impacto muy significativo desde el punto de vista de la calidad, los precios, el cumplimiento con la demanda y la prestación del servicio a los usuarios.
        p.mt-4(data-aos="fade-up") Dichos aliados deben ser evaluados para evidenciar el grado de cumplimiento con los requisitos previamente establecidos en las negociaciones. Esta actividad se convierte en una estrategia de mejoramiento continuo, donde ambas partes se beneficiarán.
        .cajon.color-secundario.p-4.mt-4
          p.mb-0(data-aos="fade-up") Se aprenderán, a través de este contenido, los métodos de evaluación, las características a evaluar, los modelos de formatos para la evaluación, cómo diligenciarlos y, finalmente, los indicadores con los cuales se obtendrán los resultados.
        p.mt-4.text-center(data-aos="fade-up" class="fw-bold") ¡Muchos éxitos en este proceso de aprendizaje!
      .col-lg-5(style="place-self:center;")
        figure
          img(src="@/assets/curso/intro1.png" data-aos="fade-left")

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass">
.cajon.color-secundario
  background-color: #DED6F8
</style>
