const courseData = {
    courseCode: "TIHV43",
    courseTitle: "Proyecto Integrado",
    courseDescription: "Proyecto integrado es una asignatura práctica, del área formativa de Tecnologías de Información y Ciberseguridad, dictada en modalidad presencial. Al finalizar, el estudiante será capaz de entregar una solución de software por medio del diseño y desarrollo de un proyecto informático, integrando nuevas tecnologías e infraestructuras emergentes, considerando las competencias transversales de INACAP.   Esta es una asignatura integradora, que tiene por objetivo evaluar el logro de las competencias del Perfil de Egreso de manera integrada, en entornos y situaciones semejantes a las del mundo laboral.",
    professorData: {
        name: "Sebastián Alejandro Cabezas Ríos",
        email: "sebastian.cabezas07@inacapmail.cl"
    },
    unitsData: [
        { 
            unit: '1',
            description: 'Diagnóstico del problema informático'
        },
        { 
            unit: '2',
            description: 'Diseño de la solución de software'
        },
        { 
            unit: '3',
            description: 'Implementación de la solución'
        },
    ],
    evaluationsData: [
        { 
            evaluationNumber: 1,
            date: 'Dom 02, Nov 2025',
            weighting: '15%',
            description: {
                text: 'Resumen Ejecutivo',
                href: 'docs/ResumenEjecutivo.pdf'
            },
        },
                { 
            evaluationNumber: 2,
            date: '',
            weighting: '20%',
            description: {
                text: '',
                href: ''
            },
        },
                { 
            evaluationNumber: 3,
            date: '',
            weighting: '30%',
            description: {
                text: '',
                href: ''
            },
        },
                { 
            evaluationNumber: 4,
            date: '',
            weighting: '35%',
            description: {
                text: '',
                href: ''
            },
        },
    ],
    classData: [
        { 
            week: '01', 
            class: '01', 
            date: 'Mar 21, Oct 2025', 
            description: [
                {
                    text: 'No asistí',
                    strikethrough: true,
                },
            ]
        },
        { 
            week: '01', 
            class: '02', 
            date: 'Jue 23, Oct 2025', 
            description: [
                {
                    text: 'No asistí',
                    strikethrough: true,
                },
            ]
        },
        { 
            week: '02', 
            class: '03', 
            date: 'Mar 28, Oct 2025', 
            description: [
                {
                    text: 'No asistí',
                    strikethrough: true,
                },
            ]
        },
        { 
            week: '02', 
            class: '04', 
            date: 'Jue 30, Oct 2025', 
            description: [
                {
                    text: 'No asistí',
                    strikethrough: true,
                },
            ]
        },
        { 
            week: '03', 
            class: '05', 
            date: 'Mar 04, Nov 2025', 
            description: [
                {
                    text: 'Revisión: Resumen Ejecutivo',
                    href: 'docs/ResumenEjecutivo.pdf'
                },
            ]
        },
        { 
            week: '03', 
            class: '06', 
            date: 'Jue 06, Nov 2025', 
            description: [
                {
                    text: 'Diagrama Ishikawa',
                    href: 'clase06'
                },
            ]
        },
        { 
            week: '04', 
            class: '07', 
            date: 'Mar 11, Nov 2025', 
            description: [
                {
                    text: 'No asistí',
                    strikethrough: true,
                },
            ]
        },
        { 
            week: '04', 
            class: '08', 
            date: 'Jue 13, Oct 2025', 
            description: [
                {
                    text: '',
                    href: ''
                },
            ]
        },
    ],
    lectureData: [
        { 
            week: '01', 
            lecture: '01', 
            date: 'Sáb 25, Oct 2025', 
            description: {
                text: '¿Qué es y cómo se levanta un diagnóstico?',
                href: 'lectura01',
            }
        },
        { 
            week: '01', 
            lecture: '02', 
            date: 'Sáb 25, Oct 2025', 
            description: {
                text: 'Resumen ejecutivo',
                href: 'docs/lectura02.pdf',
            }
        },
        { 
            week: '02', 
            lecture: '03', 
            date: 'Sáb 01, Nov 2025', 
            description: {
                text: 'Cómo levantar una propuesta de mejora',
                href: 'lectura03',
            }
        },
        { 
            week: '02', 
            lecture: '04', 
            date: 'Sáb 01, Nov 2025', 
            description: {
                text: 'Matriz de priorización',
                href: 'lectura04',
            }
        },
    ]
};

export default courseData;