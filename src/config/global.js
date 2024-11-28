export default {
  global: {
    componenteFormativo: 'Diagnóstico turístico del territorio',
    descripcionCurso:
      'El conocimiento del entorno en el que se vive es esencial para interpretar los diversos factores que lo conforman, como el medio ambiente, los aspectos socioculturales y económicos. Estos elementos sirven como punto de partida en los procesos de planificación, lo que permite aprovechar las potencialidades del desarrollo turístico de la región, aplicando metodologías relacionadas con la implementación de políticas, planes y proyectos de orden turístico.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'El territorio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Sistemas que lo integran',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Entidades y niveles territoriales',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Planes por nivel territorial',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Gobernanza y gobernabilidad',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Diagnóstico territorial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Generalidades del diagnóstico territorial',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Investigación diagnóstica territorial',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Métodos diagnósticos territoriales',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Diagnóstico turístico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Metodología del diseño turístico',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Etapas del diseño turístico',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Normativa del diseño turístico en Colombia',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Técnicas e instrumentos de recolección de información turística en Colombia',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Plan de acción en turismo',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Marco normativo del turismo en Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Políticas nacionales del turismo en Colombia',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Trazabilidad entre planes de desarrollo turístico en Colombia',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Informe diagnóstico turístico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo:
              'Procedimientos en la recolección de la información turística',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Trabajo de campo en la recolección de información turística',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo:
              'Participación de los actores del turismo en el diagnóstico del territorio',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo:
              'Diagnóstico de la demanda y la oferta turística en el territorio',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo:
              'Sistematización de los resultados del diagnóstico turístico en el territorio',
            hash: 't_5_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_04_122154_DU.pdf',
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
      tema: '1.  Territorio ',
      referencia:
        'Departamento Nacional de Planeación. (2021). Diagnóstico Territorial. Documento Técnico.',
      tipo: 'PDF web',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Desarrollo%20Territorial/Anexo%201%20-%20Diagn%C3%B3stico%20Territorial%20y%20Priorizaci%C3%B3n%20PGOT.pdf',
    },
    {
      tema: '1.  Territorio',
      referencia:
        'García, J. L., Rodríguez, M. E., Pérez, S. A., & Muñoz, F. J. (2018). Gobernabilidad y gobernanza en Colombia: Perspectivas actuales.',
      tipo: 'PDF web',
      link: 'https://www.redalyc.org/pdf/945/94522288003.pdf',
    },
    {
      tema: '2. Diagnóstico turístico',
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2022). Plan Sectorial de Turismo 2022-2026.',
      tipo: 'PDF web',
      link:
        'https://fontur.com.co/sites/default/files/2024-02/PLAN%20SECTORIAL%20DE%20TURISMO%202022-2026.pdf',
    },
    {
      tema: '2. Diagnóstico turístico',
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (s.f.). Política de turismo sostenible: Unidos por la naturaleza.',
      tipo: 'PDF web',
      link:
        'https://www.mincit.gov.co/minturismo/calidad-y-desarrollo-sostenible/politicas-del-sector-turismo/politica-de-turismo-sostenible/politica-de-turismo-sostenible-9.aspx',
    },
    {
      tema: '2. Diagnóstico turístico',
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2009). Competitividad: El desafío para alcanzar un turismo de clase mundial. Documento de política.',
      tipo: 'PDF web',
      link:
        'https://www.mincit.gov.co/getattachment/minturismo/calidad-y-desarrollo-sostenible/politicas-del-sector-turismo/competitividad-el-desafio-para-alcanzar-un-turismo/el-desafio-para-alcanzar-un-turismo-de-clase-mundi/competitvidad-el-desafio-para-alcanzar-un-turismo-de-clase-mundial.pdf.aspx',
    },
    {
      tema: '2. Diagnóstico turístico',
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2024). Metodología para la definición del nivel de desarrollo turístico territorial.',
      tipo: 'PDF web',
      link:
        'https://www.mincit.gov.co/getattachment/minturismo/calidad-y-desarrollo-sostenible/metodologia-de-nivel-de-desarrollo-turistico/documento-metodologico-para-la-definicion-del-nive/documento-metodologico-ndtt-2024.pdf.aspx',
    },
  ],
  glosario: [
    {
      termino: 'Actores del turismo',
      significado:
        'las personas, organizaciones y entidades que desempeñan un papel en la industria del turismo, interactuando y colaborando para ofrecer experiencias turísticas, Cada uno de estos actores juega un papel crucial en la dinámica del turismo, y su interacción determina el éxito y la sostenibilidad de la industria.',
    },
    {
      termino: 'Diagnóstico turístico',
      significado:
        'proceso de evaluación que busca analizar y comprender las características, recursos y condiciones de un destino turístico. Su objetivo es identificar tanto las fortalezas como las debilidades del lugar, así como las oportunidades y amenazas que pueden influir en su desarrollo turístico.',
    },
    {
      termino: 'Entidades territoriales',
      significado:
        'son divisiones administrativas que conforman un país y que tienen cierto grado de autonomía para gestionar sus propios asuntos. Estas entidades pueden variar según el sistema político y administrativo de cada país, suelen tener la capacidad de establecer normas, administrar recursos y llevar a cabo funciones administrativas en sus respectivos territorios, siempre dentro del marco de la legislación nacional.',
    },
    {
      termino: 'Esquema de ordenamiento',
      significado:
        'documento técnico y normativo que establece directrices y estrategias para la planificación y organización del uso del suelo y los recursos en un territorio específico. Su objetivo principal es promover un desarrollo sostenible, equilibrado y ordenado, considerando aspectos económicos, sociales, ambientales y culturales.',
    },
    {
      termino: 'Gobernabilidad',
      significado:
        'la capacidad de un gobierno para ejercer su autoridad y administrar eficazmente un país o una región, asegurando la estabilidad política, social y económica. Implica la habilidad de las instituciones gubernamentales para tomar decisiones e implementar políticas que respondan a las necesidades y expectativas de la ciudadanía.',
    },
    {
      termino: 'Gobernanza',
      significado:
        'refiere al proceso y el conjunto de mecanismos, políticas y normas mediante los cuales se gestionan y administran los recursos y las instituciones de una sociedad, un país o una organización. Implica la interacción entre diferentes actores, incluyendo gobiernos, empresas, organizaciones no gubernamentales y la sociedad civil, en la toma de decisiones y en la implementación de políticas.',
    },
    {
      termino: 'Metodologías',
      significado:
        'conjunto de procedimientos, técnicas y herramientas que se utilizan en un proceso de investigación o desarrollo para alcanzar un objetivo específico. Es una guía sistemática que define cómo se llevará a cabo un estudio, un proyecto o una tarea, y puede incluir etapas como la planificación, la recolección de datos, el análisis y la interpretación de resultados. Existen diferentes tipos de metodologías, que pueden clasificarse en cualitativas y cuantitativas, dependiendo de la naturaleza de la investigación. La elección de una metodología adecuada es fundamental para garantizar la validez y la fiabilidad de los resultados obtenidos.',
    },
    {
      termino: 'Plan de desarrollo',
      significado:
        'documento estratégico que establece un conjunto de acciones y objetivos diseñados para mejorar un área específica, ya sea a nivel personal, empresarial, comunitario o nacional, son utilizados en diversos contextos, como el desarrollo de comunidades, el crecimiento empresarial o el desarrollo personal, y su objetivo es facilitar un enfoque sistemático y estructurado hacia la mejora y el progreso.',
    },
    {
      termino: 'Sistema territorial',
      significado:
        'hace referencia a la organización y estructura de un territorio en relación con sus componentes y dinámicas internas. Implica la interacción entre factores físicos, sociales, económicos, políticos y ambientales que configuran un espacio geográfico.',
    },
    {
      termino: 'Territorio',
      significado:
        'divisiones internas de un país o región que sirven para la gestión o administración de los recursos administrativos y la población.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arias, J. A. (2016). Metodología de la investigación en turismo. Universidad de La Sabana.',
      link: '',
    },
    {
      referencia:
        'De la Torre, R. (2015). Gobernanza y políticas públicas en Colombia. Ediciones Uniandes.',
      link: '',
    },
    {
      referencia: 'Función Pública. (1991). Decreto 2067 de 1991.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=30150',
    },
    {
      referencia: 'Función Pública. (1996). Ley 300 de 1996.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=8634',
    },
    {
      referencia: 'Función Pública. (2006). Ley 1101 de 2006.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22241',
    },
    {
      referencia: 'Función Pública. (2011a). Ley 1448 de 2011.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=43043',
    },
    {
      referencia: 'Función Pública. (2011b). Ley 1450 de 2011.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=43101',
    },
    {
      referencia: 'Función Pública. (2012). Ley 1558 de 2012.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=48321',
    },
    {
      referencia: 'Función Pública. (2013a). Decreto 1335 de 2015.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=74005',
    },
    {
      referencia: 'Función Pública. (2013b). Ley 1618 de 2013.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=52081',
    },
    {
      referencia: 'Función Pública. (2013c). Ley 1672 de 2013.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=53825',
    },
    {
      referencia: 'Gobierno de Colombia. (s.f.). Los POT del país.',
      link: 'https://www.colombiaot.gov.co/pot/',
    },
    {
      referencia:
        'Gómez, L. (2019). Planes de desarrollo turístico en Colombia: retos y oportunidades. Universidad del Norte.',
      link: '',
    },
    {
      referencia:
        'Gutiérrez, M. (2018). Políticas turísticas en Colombia: una mirada a la sostenibilidad. Universidad Externado de Colombia.',
      link: '',
    },
    {
      referencia: 'ICONTEC. (2024). Certificación Sello de calidad ICONTEC.',
      link:
        'https://www.icontec.org/eval_conformidad/certificacion-sello-de-calidad-icontec/',
    },
    {
      referencia:
        'Instituto Geográfico Agustín Codazzi (IGAC). (1998). Ley 1320 de 1998.',
      link: 'https://antiguo.igac.gov.co/es/contenido/decreto-1320-de-1998',
    },
    {
      referencia:
        'Instituto Geográfico Agustín Codazzi. (2020). Atlas de la distribución territorial de Colombia. IGAC.',
      link: 'https://geoportal.igac.gov.co/',
    },
    {
      referencia:
        'Martínez, C. (2018). Metodologías de investigación en turismo: enfoques y técnicas. Universidad del Rosario.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (s.f.). ¿Qué es la Evaluación Ambiental Estratégica?',
      link:
        'https://www.minambiente.gov.co/asuntos-ambientales-sectorial-y-urbana/evaluaciones-ambientales-estrategicas/',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo (MinCIT). (s.f.).',
      link: 'https://www.mincit.gov.co/inicio',
    },
    {
      referencia: 'Ministerio de Educación. (s.f.). ¿Qué es un SIG?',
      link:
        'https://www.mineducacion.gov.co/1621/article-190610.html#:~:text=Un%20Sistema%20de%20Informaci%C3%B3n%20Geogr%C3%A1fico,regiones%20o%20todo%20un%20pa%C3%ADs',
    },
    {
      referencia:
        'Ocampo, J. A. (2017). Colombia: democracia, gobernanza y desarrollo. Banco de la República.',
      link: '',
    },
    {
      referencia:
        'ProColombia. (s.f.). Exportaciones turismo inversión marca país.',
      link: 'https://procolombia.co/ ',
    },
    {
      referencia:
        'Ramírez, J. (2021). Desarrollo turístico en Colombia: un enfoque estratégico. Editorial Pontificia Universidad Javeriana.',
      link: '',
    },
    {
      referencia:
        'Rojas, C. (2017). Territorio y desarrollo sostenible en Colombia. Editorial Pontificia Universidad Javeriana.',
      link: '',
    },
    {
      referencia:
        'Salazar, M. (2019). Los territorios de la construcción de la paz en Colombia. Universidad del Valle.',
      link: '',
    },
    {
      referencia:
        'Secretaría del Senado. (2024). Título X. De los organismos de control, artículo 286.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/constitucion_politica_1991_pr009.html#:~:text=ARTICULO%20286.,Constituci%C3%B3n%20y%20de%20la%20ley',
    },
    {
      referencia:
        'Vargas, A. (2020). La política turística en Colombia: contexto, retos y perspectivas. Editorial Pontificia Universidad Javeriana.',
      link: '',
    },
    {
      referencia: 'Wikipedia. (2024). Análisis de redes sociales (ARS).',
      link: 'https://es.wikipedia.org/wiki/An%C3%A1lisis_de_redes_sociales',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Juan Carlos Camargo Solano',
          cargo: 'Experto temático',
          centro:
            'Centro Nacional de Hotelería, Turismo y Alimentos - Regional Distrito Capital',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
