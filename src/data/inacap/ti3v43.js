const courseData = {
    courseCode: "TI3V43",
    courseTitle: "Ingeniería de Software",
    courseDescription: "Ingeniería de software es una asignatura lectiva, del área formativa de especialidad de Tecnologías de Información y Ciberseguridad, dictada en modalidad semipresencial. Al finalizar, el estudiante será capaz de analizar procesos clave del desarrollo software, contemplando la planificación de proyectos, evaluando sistemas de software y proponiendo medidas de mitigación de riesgo, considerando el Trabajo Colaborativo y la Comunicación.",
    professorData: {
        name: "Eugenio Alberto Bravo García",
        email: "eugenio.bravo02@inacapmail.cl"
    },
    unitsData: [
        { 
            unit: '1',
            description: 'Introducción a la ingeniería de software'
        },
        { 
            unit: '2',
            description: 'Co-creación, patrones y requerimientos del software'
        },
        { 
            unit: '3',
            description: 'Implementación, pruebas y calidad de software'
        },
    ],
    evaluationsData: [
        { 
            evaluationNumber: 1,
            date: 'Lun 01, Sep 2025',
            weighting: '20%',
            description: {
                text: '',
                href: ''
            },
        },
                { 
            evaluationNumber: 2,
            date: 'Sáb 13, Sep 2025',
            weighting: '25%',
            description: {
                text: '',
                href: ''
            },
        },
                { 
            evaluationNumber: 3,
            date: 'Sáb 11, Oct 2025 ',
            weighting: '40%',
            description: {
                text: '',
                href: ''
            },
        },
                { 
            evaluationNumber: 4,
            date: 'Sáb 18, Oct 2025',
            weighting: '15%',
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
            date: 'Lun 11, Ago 2025', 
            description: [
                {
                    text: 'No asistí',
                    strikethrough: true
                }
            ]
        },
        { 
            week: '01', 
            class: '02', 
            date: 'Jue 14, Ago 2025', 
            description: [
                {
                    text: 'Modelos de Ciclos de Vida',
                    href: 'ti3v43/clase02'
                }
            ]
        },
        { 
            week: '02', 
            class: '03', 
            date: 'Lun 18, Ago 2025', 
            description: [
                {
                    text: 'Suspensión clases',
                    strikethrough: true
                }
            ]
        },
        { 
            week: '02', 
            class: '04', 
            date: 'Jue 21, Ago 2025', 
            description: [
                {
                    text: 'No asistí',
                    strikethrough: true
                }
            ]
        },
    ],
    lectureData: [
        { 
            week: '01', 
            lecture: '01', 
            date: 'Sáb 16, Ago 2025', 
            description: [
                {
                    text: 'Introducción a la Ingeniería de software',
                    href: '/inacap/ti3v43/docs/lectura01.pdf',
                }
            ]
        },
        { 
            week: '01', 
            lecture: '02', 
            date: 'Sáb 16, Ago 2025', 
            description: [
                {
                    text: 'Fundamentos de la Ingeniería de software',
                    href: 'ti3v43/lectura02'
                }
            ]
        },
        { 
            week: '01', 
            lecture: '03', 
            date: 'Sáb 16, Ago 2025', 
            description: [
                {
                    text: 'Teoría general de sistemas en la ingeniería de software',
                    href: 'ti3v43/lectura03',
                }
            ]
        },
        { 
            week: '02', 
            lecture: '04', 
            date: 'Sáb 23, Ago 2025', 
            description: [
                {
                    text: 'Modelos y metodologías de desarrollo de software',
                    href: '',
                }
            ]
        },
        { 
            week: '02', 
            lecture: '05', 
            date: 'Sáb 23, Ago 2025', 
            description: [
                {
                    text: 'Estándares de calidad en la ingeniería de software y repaso general',
                    href: '',
                }
            ]
        },
        
    ]
};

export default courseData;