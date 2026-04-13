const courseData = {
    courseCode: "AVGP01",
    courseTitle: "Gestión de Personas",
    courseDescription: "Gestión de Personas es una asignatura lectiva, presencial, de la línea de administración del área Formación para la Empleabilidad. Al finalizar la asignatura el estudiante será capaz de aplicar los lineamientos sobre la dirección estratégica de personas, modelos de gestión estratégica del desempeño y aspectos relevantes de la legislación laboral en Chile, para su implementación en el área de gestión de personas, considerando el trabajo colaborativo y la comunicación y las competencias digitales.",
    professorData: {
        name: "Rodrigo Ignacio Terzán Gómez",
        email: "rodrigo.terzan@inacapmail.cl"
    },
    unitsData: [
        { 
            unit: '1',
            description: 'Gestión estratégica y modelo por competencia'
        },
        { 
            unit: '2',
            description: 'Gestión del desempeño por competencia'
        },
        { 
            unit: '3',
            description: 'Relaciones laborales y legislación chilena'
        },
    ],
    evaluationsData: [
        { 
            evaluationNumber: 1,
            date: 'Dom 29, Mar 2026',
            weighting: '20%', 
            description: {
                text: 'Informe: Caso Nestlé Chile',
                href: 'docs/informe01.pdf'
            }
        },
        { 
            evaluationNumber: 2,
            date: 'Lun 13, Abr 2026',
            weighting: '40%', 
            description: {
                text: '',
                href: ''
            }
        },
        { 
            evaluationNumber: 3,
            date: 'Lun 04, May 2026',
            weighting: '30%', 
            description: {
                text: '',
                href: ''
            }
        },
        { 
            evaluationNumber: 4,
            date: 'Jue 07, May 2026',
            weighting: '10%', 
            description: {
                text: '',
                href: ''
            }
        }
    ],
    classData: [
        { 
            week: '01', 
            class: '01', 
            date: 'Lun 09, Mar 2026', 
            description: [
                {
                    text: 'Unidad 1: Principios de la Gestión Estratégica de Personas',
                    href: 'docs/Introduccion01.pdf'
                }
            ]
        },
        { 
            week: '01', 
            class: '02', 
            date: 'Jue 12, Mar 2026', 
            description: [
                {
                    text: 'Material didáctico: Caso TransAlim Ltda',
                    href: 'docs/Caso-TransAlimLtda.pdf'
                },
                {
                    text: 'Resolución Preguntas',
                    href: 'clase02'
                }

            ]
        },
        { 
            week: '02', 
            class: '03', 
            date: 'Lun 16, Mar 2026', 
            description: [
                {
                    text: 'Material didáctico: Caso Nestlé Chile.pdf',
                    href: 'docs/Caso-NestléChile.pdf'
                },
                {
                    text: 'Resolución Preguntas',
                    href: 'clase03'
                }
            ]
        },
        { 
            week: '02', 
            class: '04', 
            date: 'Jue 19, Mar 2026', 
            description: [
                {
                    text: 'plan-estrategico-RRHH.pdf',
                    href: 'docs/plan-estrategico-RRHH.pdf'
                }
            ]
        },
        { 
            week: '03', 
            class: '05', 
            date: 'Lun 23, Mar 2026', 
            description: [
                {
                    text: 'Instrucciones Actividad 05',
                    href: 'docs/Instrucciones-Actividad05.pdf'
                    
                }
            ]
        },
        { 
            week: '03', 
            class: '06', 
            date: 'Jue 26, Mar 2026', 
            description: [
                {
                    text: 'Consultas Actividades Aula Virtual',
                }
            ]
        },
        { 
            week: '04', 
            class: '07', 
            date: 'Lun 30, Mar 2026', 
            description: [
                {
                    text: 'Unidad 2: Principios de la Gestión de Desempeño',
                    href: 'docs/Introduccion02.pdf'
                },
                {
                    text: 'Instrucciones Actividad 07',
                    href: 'docs/Instrucciones-Actividad07.pdf'
                }
            ]
        },
        { 
            week: '04', 
            class: '08', 
            date: 'Jue 02, Abr 2026', 
            description: [
                {
                    text: 'Suspensión clases: Semana Santa',
                    strikethrough: true
                }
            ]
        },
        { 
            week: '05', 
            class: '09', 
            date: 'Lun 06, Abr 2026', 
            description: [
                {
                    text: 'Material didáctico: Caso Servilog SA',
                    href: 'docs/Caso-ServilogSA.pdf'
                }
            ]
        },
        { 
            week: '05', 
            class: '10', 
            date: 'Jue 09, Abr 2026', 
            description: [
                {
                    text: 'Instrucciones Actividad 10',
                    href: 'docs/Instrucciones-Actividad10.pdf'
                },
                {
                    text: 'Datos-Caso-Logisur.xlsx',
                    href: 'docs/Datos-Caso-Logisur.xlsx'
                },
            ]
        },
        { 
            week: '06', 
            class: '11', 
            date: 'Lun 13, Abr 2026', 
            description: [
                {
                    text: '',
                }
            ]
        },
        { 
            week: '06', 
            class: '12', 
            date: 'Jue 16, Abr 2026', 
            description: [
                {
                    text: '',
                }
            ]
        },


    ],
    lectureData: [
        { 
            week: '01', 
            lecture: '01', 
            date: 'Sáb 14, Mar 2026', 
            description: [
                {
                    text: 'Fundamentos de la gestión del talento en las organizaciones',
                    href: ''
                }
            ]
        },
        { 
            week: '02', 
            lecture: '02', 
            date: 'Sáb 21, Mar 2026', 
            description: [
                {
                    text: 'Elementos clave en la definición de roles y la cultura organizacional',
                    href: ''
                }
            ]
        },
        { 
            week: '03', 
            lecture: '03', 
            date: 'Sáb 28, Mar 2026', 
            description: [
                {
                    text: 'Análisis de una problemática o dilema sobre los fundamentos de la gestión estratégica de personas',
                    href: ''
                }
            ]
        },
        { 
            week: '04', 
            lecture: '04', 
            date: 'Sáb 04, Abr 2026', 
            description: [
                {
                    text: 'Gestión del desempeño, estrategia y contribución a la mejora continua',
                    href: ''
                }
            ]
        },

    ]
};

export default courseData;