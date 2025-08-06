const courseData = {
    courseCode: "AVAN01",
    courseTitle: "Administración",
    courseDescription: "Asignatura lectiva, dictada en modalidad online. Al finalizar el estudiante será capaz de: Identificar las organizaciones o proyectos del sector productivo y servicios, según las tendencias y dinámicas transformacionales, Reconocer el funcionamiento operativo asociado a las áreas funcionales de una organización o proyecto.",
    professorData: {
        name: "Carlos Guillermo Thomas Ramos",
        email: "carlos.thomas02@inacapmail.cl"
    },
    unitsData: [
        { 
            unit: '1',
            description: 'Industria 4.0 y sostenibilidad'
        },
        { 
            unit: '2',
            description: 'Funcionamiento de las organizaciones actuales'
        },
        { 
            unit: '3',
            description: 'Proceso administrativo de las organizaciones'
        },
    ],
    evaluationsData: [
        { 
            evaluationNumber: 1,
            date: 'Sáb 31, Ago 2024',
            weighting: '20% * 75%', 
            description: {
                text: 'Evaluación 01',
                href: 'avan01/eval01'
            }
        },
        { 
            evaluationNumber: 2,
            date: 'Dom 22, Sep 2024',
            weighting: '40% * 75%', 
            description: {
                text: 'Informe 01',
                href: '/inacap/avan01/docs/informe01.pdf',
                external: true
            }
        },
        { 
            evaluationNumber: 3,
            date: 'Vie 11, Oct 2024',
            weighting: '30% * 75%', 
            description: {
                text: 'Informe Pitch',
                href: '/inacap/avan01/docs/informe02.pdf',
                external: true
            }
        },
        { 
            evaluationNumber: 4,
            date: 'Vie 11, Oct 2024',
            weighting: '10% * 75%', 
            description: {
                text: 'Promedio Controles',
                href: 'avan01/controles'
            }
        },
        { 
            evaluationNumber: 5,
            date: 'Sáb 19, Oct 2024',
            weighting: '25%', 
            description: {
                text: 'Examen (obligatorio)'
            }
        }
    ],
    lectureData: [
        { 
            week: '01', 
            lecture: '01', 
            date: 'Sáb 24, Ago 2024', 
            description: [
                {
                    text: 'La evolución de las organizaciones',
                    href: 'avan01/lectura01'
                }
            ]
        },
        { 
            week: '01', 
            lecture: '02', 
            date: 'Sáb 24, Ago 2024', 
            description: [
                {
                    text: 'Los padres de la administración',
                    href: 'avan01/lectura02'
                }
            ]
        },
        { 
            week: '01', 
            lecture: '03', 
            date: 'Sáb 24, Ago 2024', 
            description: [
                {
                    text: 'Administración: Conceptos, definiciones e historia',
                    href: 'avan01/lectura03'
                }
            ]
        },
        { 
            week: '01', 
            lecture: '04', 
            date: 'Sáb 24, Ago 2024', 
            description: [
                {
                    text: 'Dinámicas transformacionales y tendencias de las organizaciones',
                    href: 'avan01/lectura04'
                }
            ]
        },
        { 
            week: '02', 
            lecture: '05', 
            date: 'Sáb 31, Ago 2024', 
            description: [
                {
                    text: 'Tendencias, Clusters, Hub y Núcleos de trabajo',
                    href: 'avan01/lectura05'
                }
            ]
        },
        { 
            week: '02', 
            lecture: '06', 
            date: 'Sáb 31, Ago 2024', 
            description: [
                {
                    text: 'Sostenibilidad y las ODS',
                    href: 'avan01/lectura06'
                }
            ]
        },
        { 
            week: '03', 
            lecture: '07', 
            date: 'Sáb 07, Sep 2024', 
            description: [
                {
                    text: 'Personalidad jurídica de nuevos emprendimientos y organizaciones existentes',
                    href: 'avan01/lectura07'
                }
            ]
        },
        { 
            week: '03', 
            lecture: '08', 
            date: 'Sáb 07, Sep 2024', 
            description: [
                {
                    text: 'Ciclos de vida de los proyectos'
                }
            ]
        },
        { 
            week: '04', 
            lecture: '09', 
            date: 'Sáb 14, Sep 2024', 
            description: [
                {
                    text: 'Áreas funcionales: gestión de personas y contabilidad y finanzas',
                    href: 'avan01/lectura09'
                }
            ]
        },
        { 
            week: '05', 
            lecture: '10', 
            date: 'Sáb 21, Sep 2024', 
            description: [
                {
                    text: 'Funcionamiento de las organizaciones actuales'
                }
            ]
        },
        { 
            week: '05', 
            lecture: '11', 
            date: 'Sáb 21, Sep 2024', 
            description: [
                {
                    text: 'Evaluación de gestión a través de indicadores'
                }
            ]
        },
        { 
            week: '06', 
            lecture: '12', 
            date: 'Sáb 28, Sep 2024', 
            description: [
                {
                    text: 'Planificación'
                }
            ]
        },
        { 
            week: '06', 
            lecture: '13', 
            date: 'Sáb 28, Sep 2024', 
            description: [
                {
                    text: 'Organización: tipos, autoridad y poder'
                }
            ]
        },
        { 
            week: '07', 
            lecture: '14', 
            date: 'Sáb 05, Oct 2024', 
            description: [
                {
                    text: 'Dirección'
                }
            ]
        },
        { 
            week: '07', 
            lecture: '15', 
            date: 'Sáb 05, Oct 2024', 
            description: [
                {
                    text: 'Control'
                }
            ]
        },
        { 
            week: '07', 
            lecture: '16', 
            date: 'Sáb 05, Oct 2024', 
            description: [
                {
                    text: 'Herramientas básicas de análisis de gestión'
                }
            ]
        }
    ]
};

export default courseData;