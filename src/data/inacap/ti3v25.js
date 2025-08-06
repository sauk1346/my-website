const courseData = {
    courseCode: "TI3V25",
    courseTitle: "Modelamiento de Soluciones Informáticas",
    courseDescription: "Asignatura práctica. Al finalizar, el estudiante será capaz de Elaborar diagramas UML, Evaluar y analizar requerimientos, Crear diseños de interfaz, Aplicar modelos de procesos de negocio (BPMN).",
    professorData: {
        name: "Rafael Aderito Romero Sanabria",
        email: "rafael.romero03@inacapmail.cl"
    },
    unitsData: [
        { 
            unit: '1',
            description: 'Introducción a UML'
        },
        { 
            unit: '2',
            description: 'Paradigma 4+1'
        },
        { 
            unit: '3',
            description: 'Diagramando procesos de negocios'
        },
    ],
    evaluationsData: [
        { 
            evaluationNumber: 1, 
            date: 'Dom 01, Sep 2024', 
            weighting: '20%', 
            description: {
                text: 'Informe 01',
                href: '/inacap/ti3v25/docs/informe01.pdf',
                external: true
            }
        },
        { 
            evaluationNumber: 2, 
            date: 'Sáb 05, Oct 2024', 
            weighting: '35%', 
            description: {
                text: 'Informe 02',
                href: '/inacap/ti3v25/docs/informe02.pdf',
                external: true
            }
        },
        { 
            evaluationNumber: 3, 
            date: 'Mié 16, Oct 2024', 
            weighting: '35%', 
            description: {
                text: 'Informe 03',
                href: '/inacap/ti3v25/docs/informe03.pdf',
                external: true
            }
        },
        { 
            evaluationNumber: 4, 
            date: 'Mié 16, Oct 2024', 
            weighting: '10%', 
            description: {
                text: 'Promedio Controles',
                href: 'ti3v25/controles'
            }
        }
    ],
    classData: [
        { 
            week: '01', 
            class: '01', 
            date: 'Mié 14, Ago 2024', 
            description: [
                {
                    text: 'Requerimientos del Software',
                    href: '/inacap/ti3v25/docs/clase01.pdf',
                    external: true
                }
            ]
        },
        { 
            week: '02', 
            class: '02', 
            date: 'Mié 21, Ago 2024', 
            description: [
                {
                    text: 'Casos de Uso',
                    href: '/inacap/ti3v25/docs/clase02.pdf',
                    external: true
                }
            ]
        },
        { 
            week: '03', 
            class: '03', 
            date: 'Mié 28, Ago 2024', 
            description: [
                {
                    text: 'Diagrama de Clases',
                    href: '/inacap/ti3v25/docs/clase03a.pdf',
                    external: true
                },
                {
                    text: 'Diagrama de Flujo',
                    href: '/inacap/ti3v25/docs/clase03b.pdf',
                    external: true
                },
                {
                    text: 'Tablero Kanban',
                    href: '/inacap/ti3v25/docs/clase03c.pdf',
                    external: true
                },
                {
                    text: 'Prototipos',
                    href: '/inacap/ti3v25/docs/clase03d.pdf',
                    external: true
                }
            ]
        },
        { 
            week: '04', 
            class: '04', 
            date: 'Mié 04, Sep 2024', 
            description: [
                {
                    text: 'Paradigma 4+1',
                    href: '/inacap/ti3v25/docs/clase04a.pdf',
                    external: true
                },
                {
                    text: '4+1: Vista Lógica',
                    href: '/inacap/ti3v25/docs/clase04b.pdf',
                    external: true
                }
            ]
        },
        { 
            week: '05', 
            class: '05', 
            date: 'Mié 11, Sep 2024', 
            description: [
                {
                    text: 'Suspensión Actividades',
                    strikethrough: true
                }
            ]
        },
        { 
            week: '06', 
            class: '06', 
            date: 'Mié 25, Sep 2024', 
            description: [
                {
                    text: '4+1: Vista Desarrollo',
                    href: '/inacap/ti3v25/docs/clase06a.pdf',
                    external: true
                },
                {
                    text: '4+1: Vista Procesos',
                    href: '/inacap/ti3v25/docs/clase06b.pdf',
                    external: true
                }
            ]
        },
        { 
            week: '07', 
            class: '07', 
            date: 'Mié 02, Oct 2024', 
            description: [
                {
                    text: '4+1: Vista Física',
                    href: '/inacap/ti3v25/docs/clase07a.pdf',
                    external: true
                },
                {
                    text: '4+1: Vista Escenario',
                    href: '/inacap/ti3v25/docs/clase07b.pdf',
                    external: true
                }
            ]
        },
        { 
            week: '08', 
            class: '08', 
            date: 'Mié 09, Oct 2024', 
            description: [
                {
                    text: 'BPMN y Modelo Canvas',
                    href: '/inacap/ti3v25/docs/clase08.pdf',
                    external: true
                }
            ]
        },
        { 
            week: '09', 
            class: '09', 
            date: 'Mié 16, Oct 2024', 
            description: [
                {
                    text: 'Consultas Informe 03'
                }
            ]
        }
    ],
    lectureData: [
        { 
            week: '01', 
            lecture: '01', 
            date: 'Sáb 17, Ago 2024', 
            description: [
                {
                    text: 'Toma de requerimientos',
                    href: 'ti3v25/lectura01'
                }
            ]
        },
        { 
            week: '01', 
            lecture: '02', 
            date: 'Sáb 17, Ago 2024', 
            description: [
                {
                    text: 'Análisis de requerimientos'
                }
            ]
        },
        { 
            week: '02', 
            lecture: '03', 
            date: 'Sáb 24, Ago 2024', 
            description: [
                {
                    text: 'Casos de Uso',
                    href: 'ti3v25/lectura03'
                }
            ]
        },
        { 
            week: '02', 
            lecture: '04', 
            date: 'Sáb 24, Ago 2024', 
            description: [
                {
                    text: 'Diagramas de base de datos',
                    href: 'ti3v25/lectura04'
                }
            ]
        },
        { 
            week: '03', 
            lecture: '05', 
            date: 'Sáb 31, Ago 2024', 
            description: [
                {
                    text: 'Diagramas de flujo',
                    href: 'ti3v25/lectura05'
                }
            ]
        },
        { 
            week: '03', 
            lecture: '06', 
            date: 'Sáb 31, Ago 2024', 
            description: [
                {
                    text: 'Kanban',
                    href: 'ti3v25/lectura06'
                }
            ]
        },
        { 
            week: '04', 
            lecture: '07', 
            date: 'Sáb 07, Sep 2024', 
            description: [
                {
                    text: 'Paradigma 4+1'
                }
            ]
        },
        { 
            week: '04', 
            lecture: '08', 
            date: 'Sáb 07, Sep 2024', 
            description: [
                {
                    text: 'Paradigma 4+1: Vista Lógica'
                }
            ]
        },
        { 
            week: '05', 
            lecture: '09', 
            date: 'Sáb 14, Sep 2024', 
            description: [
                {
                    text: 'Paradigma 4+1: Vista de Desarrollo'
                }
            ]
        },
        { 
            week: '05', 
            lecture: '10', 
            date: 'Sáb 14, Sep 2024', 
            description: [
                {
                    text: 'Paradigma 4+1: Vista de Procesos'
                }
            ]
        },
        { 
            week: '06', 
            lecture: '11', 
            date: 'Sáb 28, Sep 2024', 
            description: [
                {
                    text: 'Paradigma 4+1: Vista Física'
                }
            ]
        },
        { 
            week: '06', 
            lecture: '12', 
            date: 'Sáb 28, Sep 2024', 
            description: [
                {
                    text: 'Paradigma 4+1: Vista de Escenarios'
                }
            ]
        },
        { 
            week: '07', 
            lecture: '13', 
            date: 'Sáb 05, Oct 2024', 
            description: [
                {
                    text: 'Procesos de negocios para el modelamiento de soluciones informáticas'
                }
            ]
        },
        { 
            week: '07', 
            lecture: '14', 
            date: 'Sáb 05, Oct 2024', 
            description: [
                {
                    text: 'Modelo CANVAS'
                }
            ]
        },
        { 
            week: '08', 
            lecture: '15', 
            date: 'Sáb 12, Oct 2024', 
            description: [
                {
                    text: 'Modelamiento de procesos de negocio y notación'
                }
            ]
        },
        { 
            week: '08', 
            lecture: '16', 
            date: 'Sáb 12, Oct 2024', 
            description: [
                {
                    text: 'Análisis de factibilidad'
                }
            ]
        },
        { 
            week: '09', 
            lecture: '17', 
            date: 'Sáb 19, Oct 2024', 
            description: [
                {
                    text: 'Ciclo de vida de la gestión de procesos'
                }
            ]
        }
    ]
};

export default courseData;