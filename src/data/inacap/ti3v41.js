const courseData = {
    courseCode: "TI3V41",
    courseTitle: "Programación Backend",
    courseDescription: "Programación Back-End es una asignatura práctica, del área formativa de Tecnologías de Información y Ciberseguridad, dictada en modalidad presencial. Al finalizar, el estudiante será capaz de construir una aplicación WEB y una API restful, considerando la Resolución de Problemas, Innovación y Emprendimiento.",
    professorData: {
        name: "Claudio Danilo Cartajena Lira",
        email: "claudio.cartajena@inacapmail.cl"
    },
    unitsData: [
        { 
            unit: '1',
            description: 'Tecnologías del lado del servidor'
        },
        { 
            unit: '2',
            description: 'Framework back end'
        },
        { 
            unit: '3',
            description: 'API restful con integración a base de datos'
        },
    ],
    evaluationsData: [
        { 
            evaluationNumber: 1,
            date: 'Dom 31, Ago 2025',
            weighting: '25%',
            description: {
                text: 'Django: Vistas y Templates',
                href: 'ti3v41/eval01'
            },
        },
                { 
            evaluationNumber: 2,
            date: 'Dom 28, Sep 2025',
            weighting: '30%',
            description: {
                text: '',
                href: ''
            },
        },
                { 
            evaluationNumber: 3,
            date: 'Dom 12, Oct 2025',
            weighting: '30%',
            description: {
                text: '',
                href: ''
            },
        },
                { 
            evaluationNumber: 4,
            date: 'Vie 10, Oct 2025',
            weighting: '15%',
            description: {
                text: 'Promedio Controles',
                href: 'ti3v41/controles'
            },
        },
    ],
    classData: [
        { 
            week: '01', 
            class: '01', 
            date: 'Lun 11, Ago 2025', 
            description: [
                {
                    text: 'Introducción Django',
                    href: 'ti3v41/clase01',
                    external: true
                },
            ]
        },
        { 
            week: '01', 
            class: '02', 
            date: 'Mar 12, Ago 2025', 
            description: [
                {
                    text: 'Páginas Dinámicas',
                    href: 'ti3v41/clase02',
                },
            ]
        },
        { 
            week: '02', 
            class: '03', 
            date: 'Lun 18, Ago 2025', 
            description: [
                {
                    text: 'Templates',
                    href: 'ti3v41/clase03'
                }
            ]
        },
        { 
            week: '02', 
            class: '04', 
            date: 'Mar 19, Ago 2025', 
            description: [
                {
                    text: 'Recursos Estáticos',
                    href: 'ti3v41/clase04'
                }
            ]
        },
        { 
            week: '03', 
            class: '05', 
            date: 'Lun 25, Ago 2025', 
            description: [
                {
                    text: 'Modelos',
                    href: 'ti3v41/clase05'
                }
            ]
        },
        { 
            week: '03', 
            class: '06', 
            date: 'Mar 26, Ago 2025', 
            description: [
                {
                    text: 'Proyecto Tienda: Inicio',
                    href: 'ti3v41/clase06'
                }
            ]
        },
        { 
            week: '04', 
            class: '07', 
            date: 'Lun 01, Sep 2025', 
            description: [
                {
                    text: 'Proyecto Tienda: Template Base',
                    href: 'ti3v41/clase07'
                }
            ]
        },
        { 
            week: '04', 
            class: '08', 
            date: 'Mar 02, Sep 2025', 
            description: [
                {
                    text: 'Proyecto Tienda: Vista basada en clases',
                    href: ''
                }
            ]
        },
        { 
            week: '05', 
            class: '09', 
            date: 'Lun 08, Sep 2025', 
            description: [
                {
                    text: 'Proyecto Tienda: Imágenes',
                    href: ''
                }
            ]
        },
        { 
            week: '05', 
            class: '10', 
            date: 'Mar 09, Sep 2025', 
            description: [
                {
                    text: 'Proyecto Tienda: Vistas Edición Genéricas',
                    href: ''
                }
            ]
        },
        { 
            week: '06', 
            class: '11', 
            date: 'Lun 15, Sep 2025', 
            description: [
                {
                    text: 'Proyecto Tienda: Formularios',
                    href: ''
                }
            ]
        },
        { 
            week: '06', 
            class: '12', 
            date: 'Mar 16, Sep 2025', 
            description: [
                {
                    text: 'Proyecto Tienda: Correo Contacto',
                    href: ''
                }
            ]
        },
        { 
            week: '07', 
            class: '13', 
            date: 'Lun 22, Sep 2025', 
            description: [
                {
                    text: 'Suspensión clases: post-18',
                    strikethrough: true
                }
            ]
        },
        { 
            week: '07', 
            class: '14', 
            date: 'Mar 23, Sep 2025', 
            description: [
                {
                    text: 'Proyecto Tienda: Búsquedas',
                    href: ''
                }
            ]
        },
        { 
            week: '08', 
            class: '15', 
            date: 'Lun 29, Sep 2025', 
            description: [
                {
                    text: 'DRF: Introducción APIs',
                    href: '',
                }
            ]
        },
        { 
            week: '08', 
            class: '16', 
            date: 'Mar 30, Sep 2025', 
            description: [
                {
                    text: 'DRF: Creación de APIs',
                    href: '',
                }
            ]
        },
        { 
            week: '09', 
            class: '17', 
            date: 'Lun 06, Oct 2025', 
            description: [
                {
                    text: 'DRF: Autenticación',
                    href: '',
                }
            ]
        },
        { 
            week: '09', 
            class: '18', 
            date: 'Mar 07, Oct 2025', 
            description: [
                {
                    text: 'DRF: Autenticación - Registro',
                    href: '',
                }
            ]
        },
        
    ],
    lectureData: [
        { 
            week: '01', 
            lecture: '01', 
            date: 'Sáb 16, Ago 2025', 
            description: {
                text: 'Tecnologías del lado del servidor',
                href: '/inacap/ti3v41/docs/lectura01.pdf',
            }
        },
        { 
            week: '01', 
            lecture: '02', 
            date: 'Sáb 16, Ago 2025', 
            description: {
                text: 'Descubriendo el lenguaje del servidor',
                href: 'ti3v41/lectura02'
            }
        },
        { 
            week: '02', 
            lecture: '03', 
            date: 'Sáb 23, Ago 2025', 
            description: {
                text: 'Ampliando tu código con Django',
                href: 'ti3v41/lectura03'
            }
        },
        { 
            week: '03', 
            lecture: '04', 
            date: 'Sáb 30, Ago 2025', 
            description: {
                text: 'Tu primera aplicación Django: Templates en acción',
                href: 'ti3v41/lectura04'
            }
        },
        { 
            week: '04', 
            lecture: '05', 
            date: 'Sáb 06, Sep 2025', 
            description: {
                text: 'Framework Back End',
                href: '/inacap/ti3v41/docs/lectura05.pdf'
            }
        },
        { 
            week: '04', 
            lecture: '06', 
            date: 'Sáb 06, Sep 2025', 
            description: {
                text: 'Integrando Django: Bases de datos y administración web',
                href: 'ti3v41/lectura06'
            }
        },
        { 
            week: '05', 
            lecture: '07', 
            date: 'Sáb 13, Sep 2025', 
            description: {
                text: 'Construyendo soluciones CRUD con Django ORM',
                href: 'ti3v41/lectura07'
            }
        },
        { 
            week: '06', 
            lecture: '08', 
            date: 'Sáb 20, Sep 2025', 
            description: {
                text: 'API RESTful con integración a base de datos',
                href: '/inacap/ti3v41/docs/lectura08.pdf'
            }
        },
        { 
            week: '06', 
            lecture: '09', 
            date: 'Sáb 20, Sep 2025', 
            description: {
                text: 'Iniciando tu camino RESTful con Django',
                href: 'ti3v41/lectura09'
            }
        },
        { 
            week: '07', 
            lecture: '10', 
            date: 'Sáb 27, Sep 2025', 
            description: {
                text: 'Seguridad ante todo: Autenticación JWT',
                href: 'ti3v41/lectura10'
            }
        },
        { 
            week: '08', 
            lecture: '11', 
            date: 'Sáb 04, Oct 2025', 
            description: {
                text: 'Hablando el idioma REST: JSON y DjangoREST',
                href: 'ti3v41/lectura11'
            }
        },
        { 
            week: '09', 
            lecture: '12', 
            date: 'Sáb 11, Oct 2025', 
            description: {
                text: 'API RESTful en acción: Seguridad y ejecución',
                href: 'ti3v41/lectura12'
            }
        },
    ]
};

export default courseData;