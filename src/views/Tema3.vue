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
    
    .cont_3_1.row
      .col-lg-3.mb-4.mb-lg-0(style="place-self:center;")
        .p-4.pt-5.pb-5(style="background-color:#CDEDFC;border-radius:30px 30px 0px 30px;right: -50%;width:150%;box-shadow: 0px 0px 10px rgba(0,0,0,.2);position:relative;z-index:2;")
          p(data-aos="fade-up") Un indicador se puede definir como una valoración cuantitativa que se puede observar y verificar, y que permite describir fenómenos o comportamientos de la realidad. Dicho objetivo se logra con la medición de una variable o la relación entre varias de ellas.
      .col-lg-9(style="place-self:center;")
        figure
          img(src="@/assets/curso/temas/tema3/3.png" data-aos="zoom-in-up")
    
    Separador.mt-5

    .titulo-segundo
      h2#t_3_2 3.2 Tipos de indicadores
    
    p(data-aos="fade-up") Dentro de los indicadores se encuentra:

    .row.mt-5
      .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
        LineaTiempoD.color-primario
          p(numero="1" titulo="Indicadores puntuales") Se pretende medir una situación en un momento muy puntual. Por ejemplo, la cantidad de proveedores que se inscribieron a la convocatoria.
          p(numero="2" titulo="Indicadores acumulados") Se evalúan a final de cada mes para observar el comportamiento de ese indicador en el tiempo. Un ejemplo de esto puede ser la medición mensual de las entregas, a tiempo, por parte de los proveedores.
          p(numero="3" titulo="Indicadores de eficiencia") Se mide el grado de cumplimiento con las metas establecidas, teniendo en cuenta el uso adecuado de los recursos.
          p(numero="4" titulo="Indicadores de eficacia") Se mide el grado de cumplimiento con las metas establecidas.
          p(numero="5" titulo="Indicadores de efectividad") Evalúan la capacidad de la compañía para transformar las debilidades en fortalezas y manejar los reclamos de los clientes, para brindarles soluciones que los satisfagan.
          p(numero="6" titulo="Indicadores de planeación") Mide el grado de cumplimiento en comparación con lo planificado, comparando la compañía con la competencia.
          p(numero="7" titulo="Indicadores de calidad") Evalúan si el servicio y/o productos ofrecidos a los clientes, cumplen con sus expectativas de calidad.
      .col-lg-6(style="place-self:center;")
        figure
          img(src="@/assets/curso/temas/tema3/4.svg" data-aos="fade-left")

    Separador.mt-5

    .titulo-segundo
      h2#t_3_3 3.3 Características de los indicadores

    p(data-aos="fade-up") Las principales características de los indicadores son:

    .row.mt-5
      .col-lg.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.d-flex.align-items-center.flex-wrap.justify-content-center(style="background-color:#E4DDFA;border-bottom:4px #7E5EE3 solid;border-radius:0px;")
              figure.d-flex.align-items-center.flex-wrap.justify-content-center
                img(src="@/assets/curso/temas/tema3/5.svg" style="max-width:100px;display:inline;")
              h4 Simplificar
            .tarjeta-flip__contenido.p-4.pt-5.pb-5.d-flex.align-items-center.justify-content-center(style="background-color:#E4DDFA;border-top:4px #7E5EE3 solid;border-radius:0px;")
              p.text-center Ser muy específico en lo que se quiere medir.
      .col-lg.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.d-flex.align-items-center.flex-wrap.justify-content-center(style="background-color:#E4DDFA;border-bottom:4px #7E5EE3 solid;border-radius:0px;")
              figure.d-flex.align-items-center.flex-wrap.justify-content-center
                img(src="@/assets/curso/temas/tema3/6.svg" style="max-width:100px;display:inline;")
              h4 Medir
            .tarjeta-flip__contenido.p-4.pt-5.pb-5.d-flex.align-items-center.justify-content-center(style="background-color:#E4DDFA;border-top:4px #7E5EE3 solid;border-radius:0px;")
              p.text-center Compararse con algún estándar para determinar que tan cerca se está de este y realizar mediciones en el tiempo, con el fin de analizar el comportamiento de una situación.
      .col-lg.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.d-flex.align-items-center.flex-wrap.justify-content-center(style="background-color:#E4DDFA;border-bottom:4px #7E5EE3 solid;border-radius:0px;")
              figure.d-flex.align-items-center.flex-wrap.justify-content-center
                img(src="@/assets/curso/temas/tema3/7.svg" style="max-width:100px;display:inline;")
              h4 Comunicar
            .tarjeta-flip__contenido.p-4.pt-5.pb-5.d-flex.align-items-center.justify-content-center(style="background-color:#E4DDFA;border-top:4px #7E5EE3 solid;border-radius:0px;")
              p.text-center A través del resultado obtenido, un indicador debe dar información con respecto un tema específico y luego se deben tomar decisiones de acuerdo con lo obtenido.
    
    Separador.mt-5 

    .titulo-segundo
      h2#t_3_4 3.4 Medición y valoración de los indicadores

    p(data-aos="fade-up") Teniendo claro qué es un indicador, cuáles son sus tipos y sus características. Ahora, se creará un indicador, y para ello se deben seguir los siguientes pasos, los cuales se estudiarán a la par con un ejemplo:

    .row.mt-5
      .col-lg-5.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/temas/tema3/8.svg" data-aos="fade-left")
      .col-lg-7(style="place-self:center;")
        LineaTiempoD.color-primario
          p(numero="1" titulo="Paso 1 – Definir el objetivo que se pretende medir") Para evaluar a los proveedores, se plantea el siguiente objetivo: #[br] Verificar el grado de cumplimiento de los proveedores con respecto a los tiempos de entrega de los productos farmacéuticos.
          p(numero="2" titulo="Paso 2 – Definir tipo de indicador") Se va a utilizar un indicador de #[strong #[u eficacia]], debido a que se pretende medir el grado de cumplimiento con un parámetro establecido (Tiempos de entrega).
          div(numero="3" titulo="Paso 3 – Redactar el indicador")
            p La expresión del indicador será la siguiente: #[br] % de cumplimiento con los tiempos de entrega =
            figure.col-10.m-auto
              img(src="@/assets/curso/temas/tema3/9.svg")
          p(numero="4" titulo="Paso 4 – Verificar que el indicador sea el adecuado") Se entiende lo que se quiere medir y la expresión del indicador, porque mide el objetivo propuesto y porque se tiene la información disponible para poder extraer los datos necesarios (facturas, actas de recepción, etc).
          div(numero="5" titulo="Paso 5 – Armar la ficha técnica")
            p La información que debe tener la ficha técnica del indicador es la siguiente:
            ul.lista-ul.mb-0
              li(data-aos="fade-up")
                i.fas.fa-atom(style="color:#7E5EE3;")
                | Nombre del indicador.
              li(data-aos="fade-up")
                i.fas.fa-atom(style="color:#7E5EE3;")
                | Objetivo.
              li(data-aos="fade-up")
                i.fas.fa-atom(style="color:#7E5EE3;")
                | Tipo.
              li(data-aos="fade-up")
                i.fas.fa-atom(style="color:#7E5EE3;")
                | Línea base.
              li(data-aos="fade-up")
                i.fas.fa-atom(style="color:#7E5EE3;")
                | Meta objetivo.
              li(data-aos="fade-up")
                i.fas.fa-atom(style="color:#7E5EE3;")
                | Información para la medición del indicador: unidad de medida, frecuencia, responsable de medición y análisis, actores interesados en el resultado.
              li(data-aos="fade-up")
                i.fas.fa-atom(style="color:#7E5EE3;")
                | Fuente de información y cálculo.
              li(data-aos="fade-up")
                i.fas.fa-atom(style="color:#7E5EE3;")
                | Comportamiento del indicador.
              li(data-aos="fade-up")
                i.fas.fa-atom(style="color:#7E5EE3;")
                | Medición.
              li(data-aos="fade-up")
                i.fas.fa-atom(style="color:#7E5EE3;")
                | Análisis e interpretación.
              li.mb-0(data-aos="fade-up")
                i.fas.fa-atom(style="color:#7E5EE3;")
                | Requiere acción correctiva o de mejora.
    
    p.mt-5(data-aos="fade-up") Observar el siguiente modelo en la figura 8 de ficha técnica de indicadores.

    .col-lg-8.m-auto.mt-5
      .titulo-sexto.color-acento-botones(data-aos="fade-up")
          h5 Figura 8.
          span #[em Modelo ficha técnica de indicadores]
      figure.mt-4.ps-4.pe-4.pt-3.pb-3(style="background-color:#E8E8E8;")
        img(src="@/assets/curso/temas/tema3/10.svg" data-aos="zoom-in-up")
    
    p.mt-5(data-aos="fade-up") En ella se puede observar toda la información que se debe registrar en la ficha técnica del indicador, con el objetivo de realizar su medición y generar oportunidades de mejora a partir de los resultados. En este ejemplo se evidenció un seguimiento mensual al indicador, cuya frecuencia de medición era mensual.



</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    indicadorTarjetaFlip: true,
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
.cont_3_1,.cont_3_1 *
  position: relative
.cont_3_1:before
  content: ''
  position: absolute
  width: 125%
  height: 100%
  left: -15%
  background: url(../assets/curso/temas/tema3/2.png)
  background-size: cover
  background-psiition: center
  background-repeat: no-repeat
.linea-tiempo-d__item--selected .linea-tiempo-d__item__content.tarjeta.tarjeta--gris
  background-color: #ABDAE0
.linea-tiempo-d.color-primario .linea-tiempo-d__item--selected .linea-tiempo-d__item__number
  background-color: #ABDAE0
</style>
