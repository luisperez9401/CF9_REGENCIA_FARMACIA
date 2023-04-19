export default {
  global: {
    componenteFormativo: 'Evaluación de proveedores',
    descripcionCurso:
      'En este componente formativo se adquirirán los conocimientos relacionados con la evaluación de los proveedores de los establecimientos y servicios farmacéuticos, los tipos de indicadores y su metodología de manejo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Concepto evaluación de proveedores',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipo de proveedores',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Beneficios de hacer una evaluación del proveedor',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Métodos de calificación de proveedores',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Ficha técnica de los productos farmacéuticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Características de la ficha técnica',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Aplicaciones de la ficha técnica',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Técnicas de elaboración y diligenciamiento de formatos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Indicadores de evaluación de proveedores',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Concepto de indicador',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Tipos de indicadores',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Características de los indicadores',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Medición y valoración de los indicadores',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      /*{
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },*/
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Concepto evaluación de proveedores',
      referencia:
        'ICONTEC. (2015). Sistemas de Gestión de la Calidad. Requisitos (ISO 9001).',
      tipo: 'Norma Técnica Colombiana',
      descarga: '/downloads/Anexo_CF9_NTC-ISO-9001-2015.pdf',
    },
    {
      tema: 'Concepto evaluación de proveedores',
      referencia:
        'Moreno Moreno, E (2019). Generalidades del proceso de adquisición de medicamentos y dispositivos médicos.',
      tipo: 'PDF',
      descarga: '/downloads/Anexo_CF9_Proceso_Adquisicion.pdf',
    },
    {
      tema: 'Método de calificación de proveedores',
      referencia:
        'Farmacia Homeopática Santa Rita. (s.f.). Procedimiento, evaluación, reevaluación, seguimiento y compras de proveedores.',
      tipo: 'PDF',
      descarga: '/downloads/Anexo_CF9_Procedimiento_Seleccion.pdf',
    },
    {
      tema: 'Características de la ficha técnica',
      referencia:
        'Ministerio de Sanidad, Política Social e Igualdad. (s.f). Ficha técnica.',
      tipo: 'PDF',
      link:
        'https://botplusweb.portalfarma.com/documentos/2017/3/16/113878.pdf',
    },
    {
      tema: 'Características de la ficha técnica',
      referencia:
        'Well Medicine s.a.s. (2014). Ficha técnica de producto terminado.',
      tipo: 'PDF',
      link:
        'https://www.catalogodelasalud.com/documenta/contenido/118887/12-FC-02-GUANTE-ESTERIL-Guantes-quirurgicos-16000504.pdf',
    },
    {
      tema: 'Indicadores de evaluación de proveedores',
      referencia:
        'Departamento Nacional de Planeación. (2018). Guía para elaborar indicadores.',
      tipo: 'PDF',
      descarga: '/downloads/Anexo_CF9Guia_para_elaborar_Indicadores.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Criterio:',
      significado:
        'los criterios nos permitirán la obtención de información (índices), dirigida hacia aquello que se quiere evaluar.',
    },
    {
      termino: 'Depósito medicamentos',
      significado:
        'establecimiento farmacéutico que realiza labores de compra, almacenamiento y venta al por mayor de productos farmacéuticos a las farmacias-droguerías, droguerías y servicios farmacéuticos.',
    },
    {
      termino: 'Eficacia',
      significado:
        'es la capacidad de disponer de alguien o algo para conseguir el cumplimiento adecuado de una función.',
    },
    {
      termino: 'Eficiencia',
      significado:
        'se refiere a la utilización correcta y con la menor cantidad de recursos, para conseguir un objetivo o, cuando se alcanzan más objetivos con los mismos o menos recursos.',
    },
    {
      termino: 'Efectividad',
      significado:
        'la efectividad es el equilibrio entre eficacia y eficiencia, es decir, se es efectivo si se es eficaz y eficiente.',
    },
    {
      termino: 'Evaluación de proveedores',
      significado:
        'actividad en la que se busca determinar el grado de cumplimiento de los proveedores con las condiciones previamente definidas.',
    },
    {
      termino: 'Indicador',
      significado:
        'expresión cuantitativa observable y verificable que permite describir características, comportamientos o fenómenos de la realidad. Esto se logra a través de la medición de una variable o una relación entre variables.',
    },
    {
      termino: 'Proveedor',
      significado:
        'empresa que se dedica a proveer o abastecer de productos necesarios a una persona o empresa.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arbeláez Montoya, M., Canas Marín, B., Contreras Montañez, C., Diaz Serna, P., González González, C., & Restrepo Garay, M. et al. (2005). Gerencia y administración de sistemas de suministro de medicamentos esenciales. Cooperativa de Hospitales de Antioquia COHAN.',
      link: '',
    },
    {
      referencia:
        'Decreto 0780 de 2016. [Presidencia de la República de Colombia] Por medio del cual se expide el Decreto Único Reglamentario del Sector Salud y Protección Social. Mayo 6 de 2016.',
      link: '',
    },
    {
      referencia:
        'Resolución 2003 de 2014. [Ministerio de la protección social]. 2014). Por la cual se definen los procedimientos y condiciones de inscripción de los Prestadores de Servicios de Salud y de habilitación de servicios de salud. 28 de mayo de 2014.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%202003%20de%202014.pdf',
    },
    {
      referencia:
        'Resolución 1403 de 2007. [Ministerio de la Protección Social] Por la cual se determina el Modelo de Gestión del Servicio Farmacéutico, se adopta el Manual de Condiciones Esenciales y Procedimientos y se dictan otras Disposiciones. Mayo 14 de 2007.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: '',
          cargo: 'Diseñador web',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador Fullstack',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: '',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: '',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
