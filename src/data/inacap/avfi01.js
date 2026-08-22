const courseData = {
    courseCode: "AVFI01",
    courseTitle: "Finanzas",
    courseDescription: "Finanzas es una asignatura lectiva, perteneciente a la línea de administración del área de formación para la empleabilidad, dictada en modalidad semipresencial. Al finalizar la asignatura, el estudiante será capaz de aplicar técnicas básicas de costeo, presupuestos e indicadores de rentabilidad de proyectos de inversión, como apoyo a la gestión profesional, considerando las tendencias y dinámicas impulsadas por la inteligencia artificial (IA). Además, reconocerá los usos de tecnologías de IA para optimizar procesos financieros y tomar decisiones informadas, considerando la ética y ciudadanía, el trabajo colaborativo y la comunicación.",
    professorData: {
        name: "Patricia Mónica Cañas Lemesch",
        email: "patricia.canas@inacapmail.cl"
    },
    unitsData: [
        { 
            unit: '1',
            description: 'Contabilidad básica y fundamentos de costeo'
        },
        { 
            unit: '2',
            description: 'Formulación y control presupuestario'
        },
        { 
            unit: '3',
            description: 'Indicadores de rentabilidad y análisis de proyectos'
        },
    ],
    evaluationsData: [
        { 
            evaluationNumber: 1,
            date: 'Jue 27, Ago 2026',
            weighting: '15%', 
            description: {
                text: '',
                href: ''
            }
        },
        { 
            evaluationNumber: 2,
            date: 'Jue 03, Sep 2026',
            weighting: '15%', 
            description: {
                text: '',
                href: ''
            }
        },
        { 
            evaluationNumber: 3,
            date: 'Mar 22, Sep 2026',
            weighting: '40%', 
            description: {
                text: '',
                href: ''
            }
        },
        { 
            evaluationNumber: 4,
            date: 'Mar 06, Oct 2026',
            weighting: '30%', 
            description: {
                text: '',
                href: ''
            }
        },
        
    ],
    classData: [
        { 
            week: '01', 
            class: '01', 
            date: 'Mar 11, Ago 2026', 
            description: [
                {
                    text: 'Conceptos de finanzas',
                    href:'clase01a'
                },
                {
                    text: 'Interés Nominal e Interés Real',
                    href:'clase01b'
                },
                {
                    text: 'Interés de Captación e Interés de Colocación',
                    href:'clase01c'
                },
            ]
        },
        { 
            week: '01', 
            class: '02', 
            date: 'Jue 13, Ago 2026', 
            description: [
                {
                    text: 'Balance General',
                    href:'clase02a'
                },
                {
                    text: 'Estado de Resultado',
                    href:'clase02b'
                },
            ]
        },
        { 
            week: '02', 
            class: '03', 
            date: 'Mar 18, Ago 2026', 
            description: [
                {
                    text: 'no asistí',
                    strikethrough: true
                },
            ]
        },
        { 
            week: '02', 
            class: '04', 
            date: 'Jue 20, Ago 2026', 
            description: [
                {
                    text: 'Costo variable o costo de venta',
                    href:'clase04a'
                },
                {
                    text: 'Precio unitario y Costo de Venta unitario',
                    href:'clase04b'
                },
                {
                    text: 'Punto de Equilibrio',
                    href:'clase04c'
                },
                {
                    text: 'Técnicas de Contabilidad',
                    href:'docs/tecnicas-contabilidad.pdf'
                },
            ]
        },
        { 
            week: '03', 
            class: '05', 
            date: 'Lun 24, Ago 2026', 
            description: [
                {
                    text: 'Ejercicios',
                    href:''
                },
            ]
        },
        { 
            week: '03', 
            class: '06', 
            date: 'Jue 27, Ago 2026', 
            description: [
                {
                    text: 'Evaluación 01',
                    href:''
                },
            ]
        },

    ],
    lectureData: [
        { 
            week: '01', 
            lecture: '01', 
            date: 'Dom 16, Ago 2026', 
            description: {
                text: 'Contabilidad básica y fundamentos de costeo',
                href: 'docs/lectura01.pdf'
            }
        },
        { 
            week: '01', 
            lecture: '02', 
            date: 'Dom 16, Ago 2026', 
            description: {
                text: 'Descubre el lenguaje de las empresas',
                href: 'lectura02'
            }
        },
        { 
            week: '01', 
            lecture: '03', 
            date: 'Dom 16, Ago 2026', 
            description: {
                text: 'La contabilidad y la importancia de la información financiera',
                href: 'lectura03'
            }
        },
        { 
            week: '01', 
            lecture: '04', 
            date: 'Dom 16, Ago 2026', 
            description: {
                text: 'Interpretando estados financieros',
                href: 'lectura04'
            }
        },
        { 
            week: '02', 
            lecture: '05', 
            date: 'Dom 23, Ago 2026', 
            description: {
                text: 'Fundamentos de los costos: elementos, clasificación y diferencias con gasto y pérdidas',
                href: ''
            }
        },
        { 
            week: '02', 
            lecture: '06', 
            date: 'Dom 23, Ago 2026', 
            description: {
                text: 'Método de costeo y el uso de IA para simular escenarios de costo',
                href: ''
            }
        },
        { 
            week: '02', 
            lecture: '07', 
            date: 'Dom 23, Ago 2026', 
            description: {
                text: 'Punto de equilibrio',
                href: ''
            }
        },
        { 
            week: '02', 
            lecture: '08', 
            date: 'Dom 23, Ago 2026', 
            description: {
                text: 'La contabilidad y la importancia de la información financiera',
                href: ''
            }
        },
    ]
};

export default courseData;