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
            date: 'Lun 17, Nov 2025',
            weighting: '20%',
            description: {
                text: 'Informe 2: Diseño de la Solución',
                href: 'docs/informe02.pdf'
            },
        },
                { 
            evaluationNumber: 3,
            date: 'Jue 11, Dic 2025',
            weighting: '30%',
            description: {
                text: 'Presentación Final del Proyecto',
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
                    text: 'Avance proyecto',
                    href: ''
                },
            ]
        },
        { 
            week: '05', 
            class: '09', 
            date: 'Mar 18, Oct 2025', 
            description: [
                {
                    text: 'Reglas para Unidad 3',
                    href: 'clase09'
                },
            ]
        },
        { 
            week: '05', 
            class: '10', 
            date: 'Jue 20, Oct 2025', 
            description: [
                {
                    text: 'Avance proyecto',
                    href: ''
                },
            ]
        },
        { 
            week: '06', 
            class: '11', 
            date: 'Mar 25, Oct 2025', 
            description: [
                {
                    text: '',
                    href: ''
                },
            ]
        },
        { 
            week: '06', 
            class: '12', 
            date: 'Jue 27, Oct 2025', 
            description: [
                {
                    text: '',
                    href: ''
                },
            ]
        },
    ],
};

export default courseData;