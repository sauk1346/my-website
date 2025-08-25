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
            date: 'Dom 21, Sep 2025',
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
                    text: 'Introducción Ambiente',
                    href: '/inacap/ti3v41/docs/ppt01.pdf',
                    external: true
                },
                {
                    text: 'Ambiente Virtual',
                    href: '/inacap/ti3v41/docs/ppt02.pdf',
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
                    href: '/inacap/ti3v41/docs/ppt03.pdf',
                    external: true
                },
                {
                    text: 'Introducción a Templates',
                    href: '/inacap/ti3v41/docs/ppt04.pdf',
                    external: true
                },
            ]
        },
        { 
            week: '02', 
            class: '03', 
            date: 'Lun 18, Ago 2025', 
            description: [
                {
                    text: '',
                    href: ''
                }
            ]
        },
        { 
            week: '02', 
            class: '04', 
            date: 'Mar 19, Ago 2025', 
            description: [
                {
                    text: '',
                    href: ''
                }
            ]
        },
        { 
            week: '03', 
            class: '05', 
            date: 'Lun 25, Ago 2025', 
            description: [
                {
                    text: '',
                    href: ''
                }
            ]
        },
        { 
            week: '03', 
            class: '06', 
            date: 'Mar 26, Ago 2025', 
            description: [
                {
                    text: '',
                    href: ''
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
                href: ''
            }
        },
        
    ]
};

export default courseData;