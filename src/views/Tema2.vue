<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Ficha técnica de los productos farmacéuticos
    
    .row
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/temas/tema2/1.png" data-aos="zoom-in-up")
      .col-lg-4(style="place-self:center;")
        .p-4(style="background-color:#CDEDFC;border-radius:30px 30px 0px 30px;left: -50%;width:150%;box-shadow: 0px 0px 10px rgba(0,0,0,.2);position:relative;")
          p(data-aos="fade-up") Uno de los documentos más importantes que debe entregar un proveedor de productos farmacéuticos en el momento del despacho de esos insumos, es la ficha técnica, porque a través de ella se brinda información técnica importante para el manejo de los productos.
          p.mt-4.mb-0(data-aos="fade-up") Esta ficha, que también recibe el nombre de “Resumen de las Características del Producto” en el ámbito farmacéutico, es un documento oficial, aprobado por las autoridades sanitarias competentes, que contiene la información más relevante que se genera durante la investigación y evaluación de un producto farmacéutico. 
    
    Separador.mt-5

    .titulo-segundo.mb-2
      h2#t_2_1 2.1 Características de la ficha técnica
    
    .row.cont_2_1.pt-5
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/temas/tema2/2.svg" data-aos="fade-right")
      .col-lg-8(style="place-self:center;")
        p(data-aos="fade-up") La ficha técnica de un producto farmacéutico presenta una información técnica muy relevante que sirve como guía, de los profesionales de la salud, para el manejo de los productos.
        p.mt-4(data-aos="fade-up") La información contenida varía según el producto farmacéutico, ya sea un medicamento (homeopático, fitoterapéutico, nutracéutico), dispositivo médico, cosmético, biológico, etc.
        p.mt-4(data-aos="fade-up") A continuación en la figura 7, se presenta un ejemplo de la estructura de una ficha técnica de un producto farmacéutico y de los dispositivos médicos.
    
    .col-lg-8.mt-5.m-auto
      .titulo-sexto.color-acento-botones(data-aos="fade-up")
          h5 Figura 7.
          span #[em Estructura de la ficha técnica de un medicamento]
      figure.mt-4
        img(src="@/assets/curso/temas/tema2/3.svg" data-aos="zoom-in-up")
        figcaption.mt-3.fw-normal Nota. SENA (2021).
    
    p.mt-5(data-aos="fade-up") La ficha técnica, de un medicamento, aplica para establecimientos farmacéuticos comerciales como las Farmacias-Droguerías, Droguerías y depósitos, así como también para los servicios farmacéuticos, porque la información abarca temas comerciales, de almacenamiento, conservación y clínicos.
    p.mt-4(data-aos="fade-up") En el material complementario se encuentra un enlace que lo llevará a un ejemplo de ficha técnica de un medicamento.

    .col-lg-8.mt-5.m-auto
      .titulo-sexto.color-acento-botones(data-aos="fade-up")
          h5 Figura 8.
          span #[em Estructura de la ficha técnica de un Dispositivo Médico]
      figure.mt-4
        img(src="@/assets/curso/temas/tema2/4.svg" data-aos="zoom-in-up")
        figcaption.mt-3.fw-normal Nota. SENA (2021).
    
    p.mt-5(data-aos="fade-up") En el material complementario se encuentra un enlace que lo llevará a un ejemplo de ficha técnica de un dispositivo médico, , ver la figura 8.

    Separador.mt-5

    .titulo-segundo
      h2#t_2_2 2.2 Aplicaciones de la ficha técnica

    .col-lg-8.mt-5.m-auto.row
      .col-md-6.mb-4.mb-md-0.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/temas/tema2/5.png" data-aos="fade-right" style="position:relative;z-index:2;")
      .col-md-6.ps-0(style="place-self:center;")
        .cont_2_2.p-4.ps-0
          p.mb-0(data-aos="fade-up") #[strong Recordar que:] la ficha técnica es un documento de gran utilidad para todos los profesionales que hacen parte del sector farmacéutico y, en general, del sector salud, y es una herramienta para la autoridad sanitaria debido a que abarca información legal y técnica de los productos farmacéuticos.
    
    p.mt-5(data-aos="fade-up") Tiene, entre otras, las siguientes aplicaciones:

    .cont_2_3
      .row.mt-5
        .col-lg-3.mb-4.mb-lg-0(style="place-self:end;")
          figure.image_1
            img(src="@/assets/curso/temas/tema2/6.svg" data-aos="fade-right")
        .row.col-lg-9
          .col-lg-4.mb-4
            .tarjeta-numerada.color-acento-contenido.p-5.h-100
              .tarjeta-numerada__numero
                .h2 1
              p(data-aos="fade-up") Promoción del producto farmacéutico enfocado al profesional sanitario.
          .col-lg-4.mb-4
            .tarjeta-numerada.color-acento-contenido.p-5.h-100
              .tarjeta-numerada__numero
                .h2 2
              p(data-aos="fade-up") Elaboración de guías farmacológicas.
          .col-lg-4.mb-4
            .tarjeta-numerada.color-acento-contenido.p-5.h-100
              .tarjeta-numerada__numero
                .h2 3
              p(data-aos="fade-up") Fuente de información y consulta sobre la eficacia y seguridad del producto farmacéutico. 
          .col-lg-4
          .col-lg-4.mb-4
            .tarjeta-numerada.color-acento-contenido.p-5.h-100
              .tarjeta-numerada__numero
                .h2 4
              p(data-aos="fade-up") Actualización periódica sobre la seguridad de los productos farmacéuticos ante las autoridades sanitarias.
          .col-lg-4.mb-4
            .tarjeta-numerada.color-acento-contenido.p-5.h-100
              .tarjeta-numerada__numero
                .h2 5
              p(data-aos="fade-up") Apoyo, en caso de litigios legales por mala praxis de los profesionales sanitarios.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_2_3 2.3 Técnicas de elaboración y diligenciamiento de formatos

    p(data-aos="fade-up") Los formatos hacen parte del Sistema de Calidad del establecimiento y servicio farmacéutico y cuando se diligencian, se convierten en un registro por medio del cual se deja evidencia de la realización de una actividad. 
    p.mt-4(data-aos="fade-up") Para la creación y diligenciamiento de un formato de evaluación de proveedores, se deben tener en cuenta los siguientes aspectos:

    .row.mt-5.col-lg-10.m-auto
      .col-lg.mb-4.mb-lg-0(style="place-self:center;")
        .row.mb-4
          .col-auto.pe-0(style="place-self:center;" data-aos="fade-right")
            span.h2.text-white.ps-4.pt-3.pb-3.pe-4(style="background-color:#00BCD4;border-radius:100%;") 1
          .col.ps-0(style="place-self:center;")
            .p-3(style="background-color:#F2EEFC;")
              p.mb-0(data-aos="fade-up") Debe existir un procedimiento dónde se haga referencia a este formato.
        .row.mb-4
          .col-auto.pe-0(style="place-self:center;" data-aos="fade-right")
            span.h2.text-white.ps-4.pt-3.pb-3.pe-4(style="background-color:#00BCD4;border-radius:100%;") 2
          .col.ps-0(style="place-self:center;")
            .p-3(style="background-color:#F2EEFC;")
              p.mb-0(data-aos="fade-up") Definir para qué se va a utilizar.
        .row.mb-4
          .col-auto.pe-0(style="place-self:center;" data-aos="fade-right")
            span.h2.text-white.ps-4.pt-3.pb-3.pe-4(style="background-color:#00BCD4;border-radius:100%;") 3
          .col.ps-0(style="place-self:center;")
            .p-3(style="background-color:#F2EEFC;")
              p.mb-0(data-aos="fade-up") Asignarle una codificación, nombre, fecha de elaboración y versión.
      .col-lg.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/temas/tema2/7.svg" data-aos="zoom-in-up")
      .col-lg(style="place-self:center;")
        .row.mb-4
          .col-auto.pe-0(style="place-self:center;" data-aos="fade-right")
            span.h2.text-white.ps-4.pt-3.pb-3.pe-4(style="background-color:#00BCD4;border-radius:100%;") 4
          .col.ps-0(style="place-self:center;")
            .p-3(style="background-color:#F2EEFC;")
              p.mb-0(data-aos="fade-up") Definir la estructura y la información que va a ir.
        .row.mb-4
          .col-auto.pe-0(style="place-self:center;" data-aos="fade-right")
            span.h2.text-white.ps-4.pt-3.pb-3.pe-4(style="background-color:#00BCD4;border-radius:100%;") 5
          .col.ps-0(style="place-self:center;")
            .p-3(style="background-color:#F2EEFC;")
              p.mb-0(data-aos="fade-up") Diligenciarlo.
        .row.mb-4
          .col-auto.pe-0(style="place-self:center;" data-aos="fade-right")
            span.h2.text-white.ps-4.pt-3.pb-3.pe-4(style="background-color:#00BCD4;border-radius:100%;") 6
          .col.ps-0(style="place-self:center;")
            .p-3(style="background-color:#F2EEFC;")
              p.mb-0(data-aos="fade-up") Almacenarlo y controlarlo.
    
    p.mt-5(data-aos="fade-up") En el documento de evaluación de proveedores, se debe determinar el paso a paso de la actividad y del objetivo responsables, y hacer referencia al formato que se va a utilizar para registrar la información.

    .row.mt-5.col-lg-8.m-auto.p-4.pb-0(style="background-color:#E6F7FE;")
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/temas/tema2/8.svg" data-aos="fade-right")
      .col-lg-8(style="place-self:center;")
        a.anexo.mb-4(:href="obtenerLink('downloads/Anexo_CF9_Criterios_Eval_Prov.pdf')" target="_blank" data-aos="fade-left")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p.fw-bold Anexo. Criterios Evaluación Proveedores
    
    p.mt-5(data-aos="fade-up") Al crear el formato, se debe tener presente:

    SlyderA.mt-5.pt-5.pb-5(style="background-color: #DEE4F0;")
      .row.col-8.m-auto
        div
          figure
            img(src='@/assets/curso/temas/tema2/9.svg')
          .p-4.mt-5.cont_flecha(style="background-color:#FFEBCC;")
            p.mb-0 El encabezado, el nombre que se le de va a dar y la codificación, para dar cumplimiento con los requisitos del sistema de calidad.
      .row.col-8.m-auto
        div
          figure
            img(src='@/assets/curso/temas/tema2/10.svg')
          .p-4.mt-5.cont_flecha(style="background-color:#FFEBCC;")
            p.mb-0 Codificación, versión y fecha de elaboración.
      .row.col-8.m-auto
        div
          figure
            img(src='@/assets/curso/temas/tema2/11.svg')
          .p-4.mt-5.cont_flecha(style="background-color:#FFEBCC;")
            p.mb-0 Datos del proveedor.
      .row.col-8.m-auto
        div
          figure
            img(src='@/assets/curso/temas/tema2/12.svg')
          .p-4.mt-5.cont_flecha(style="background-color:#FFEBCC;")
            p.mb-0 Datos de quien realiza la evaluación.
      .row.col-8.m-auto
        div
          figure
            img(src='@/assets/curso/temas/tema2/13.svg')
          .p-4.mt-5.cont_flecha(style="background-color:#FFEBCC;")
            p.mb-0 Los criterios a evaluar.
      .row.col-8.m-auto
        div
          figure
            img(src='@/assets/curso/temas/tema2/14.svg')
          .p-4.mt-5.cont_flecha(style="background-color:#FFEBCC;")
            p.mb-0 Parámetros de la evaluación.
      .row.col-8.m-auto
        div
          figure
            img(src='@/assets/curso/temas/tema2/15.svg')
          .p-4.mt-5.cont_flecha(style="background-color:#FFEBCC;")
            p.mb-0 Puntajes de la evaluación.

    .row.mt-5.col-lg-8.m-auto.p-4.pb-0(style="background-color:#E6F7FE;")
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/temas/tema2/16.svg" data-aos="fade-right")
      .col-lg-8(style="place-self:center;")
        a.anexo.mb-4(:href="obtenerLink('downloads/Anexo_CF9_Formato_Eval_Prov.pdf')" target="_blank" data-aos="fade-left")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p.fw-bold Anexo. Formato evaluación proveedores

    p.mt-5(data-aos="fade-up") Y el paso a paso para el diligenciamiento del formato es el siguiente:

    PasosB.color-secundario.mt-5.p-4(style="background-color:#F6F6F6;border-radius:20px;")
      .row(titulo="")
        .col-lg-5.mb-4.mb-lg-0(style="place-self:center;")
          figure
            img(src='@/assets/curso/temas/tema2/17.svg')
        .col-lg-7(style="place-self:center;")
          p Crear un instructivo con el paso a paso del diligenciamiento del formato.
      .row(titulo="")
        .col-lg-5.mb-4.mb-lg-0(style="place-self:center;")
          figure
            img(src='@/assets/curso/temas/tema2/18.svg')
        .col-lg-7(style="place-self:center;")
          p Divulgarlo para resolver dudas.
      .row(titulo="")
        .col-lg-5.mb-4.mb-lg-0(style="place-self:center;")
          figure
            img(src='@/assets/curso/temas/tema2/19.svg')
        .col-lg-7(style="place-self:center;")
          p Realizar ejercicios prácticos.
      .row(titulo="")
        .col-lg-5.mb-4.mb-lg-0(style="place-self:center;")
          figure
            img(src='@/assets/curso/temas/tema2/20.svg')
        .col-lg-7(style="place-self:center;")
          p Recibir la retroaimentación por parte de los colaboradores.
      .row(titulo="")
        .col-lg-5.mb-4.mb-lg-0(style="place-self:center;")
          figure
            img(src='@/assets/curso/temas/tema2/21.svg')
        .col-lg-7(style="place-self:center;")
          p Iniciar con el proceso de diligenciamiento.
      .row(titulo="")
        .col-lg-5.mb-4.mb-lg-0(style="place-self:center;")
          figure
            img(src='@/assets/curso/temas/tema2/22.svg')
        .col-lg-7(style="place-self:center;")
          p No dejar tachones, ni enmendaduras.
      .row(titulo="")
        .col-lg-5.mb-4.mb-lg-0(style="place-self:center;")
          figure
            img(src='@/assets/curso/temas/tema2/23.svg')
        .col-lg-7(style="place-self:center;")
          p Leer cuidadosmanente toda la información, para ubicar la información correcta donde corresponda.




 




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
<style lang="sass">
.cont_2_1, .cont_2_1 *
  position: relative
.cont_2_1:before
  content: ''
  position: absolute
  height: 100%
  width: 125%
  left: -15%
  top: 0
  background: url(../assets/curso/temas/tema1/1.png)
  background-size: cover
  background-repeat: no-repeat
  background-position: center
.cont_2_2, .cont_2_2 *
  position: relative
.cont_2_2:before
  content: ''
  position: absolute
  width: 150%
  height: 100%
  top: 0
  left: -50%
  background-color: #F1EEFC
  border-radius: 20px
  border: 1px #707070 solid
.image_1,.image_1 *
  position: relative
.image_1:before
  content: ''
  position: absolute
  height: 2.5px
  left: 0
  width: 170%
  bottom: -2.5px
  background-color: #707070
.cont_flecha
  position: relative
.cont_flecha:before
  content: ''
  position: absolute
  width: 0
  height: 0
  border-left: 40px solid transparent
  border-right: 40px solid transparent
  border-bottom: 40px solid #f8edcf
  top: -39px
  left: 50%
.pasos-b.color-secundario .pasos-b__header__item--active .pasos-b__header__item__dot span
  color: #fff
</style>
