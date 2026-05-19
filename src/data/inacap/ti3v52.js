const courseData = {
    courseCode: "TI3V52",
    courseTitle: "Redes de Datos",
    courseDescription: "Redes de datos es una asignatura práctica, del área formativa de especialidad de Tecnologías de Información, dictada en modalidad presencial. Al finalizar, el estudiante será capaz de aplicar configuraciones en distintos dispositivos de redes, basado en los estándares de redes de datos, considerando la Resolución de Problemas, Innovación y Emprendimiento.",
    professorData: {
        name: "Jaime Alejandro Cuevas Monsalves",
        email: "jaime.cuevas@inacapmail.cl"
    },
    unitsData: [
        { 
            unit: '1',
            description: 'Conceptos básicos de modelo OSI, TCP/IP y dispositivos de redes'
        },
        { 
            unit: '2',
            description: 'Direccionamiento IPV4 e IPV6 con VLSM'
        },
        { 
            unit: '3',
            description: 'Configuraciones avanzadas de enrutamiento'
        },
    ],
    evaluationsData: [
        {
            evaluationNumber: 1,
            date: 'Jue 04, Jun 2026',
            weighting: '15%',
            description: {
                text: '',
                href: '',
            }
        },
        {
            evaluationNumber: 2,
            date: 'Jue 25, Jun 2026',
            weighting: '35%',
            description: {
                text: '',
                href: '',
            }
        },
        {
            evaluationNumber: 3,
            date: 'Lun 20, Jul 2026',
            weighting: '35%',
            description: {
                text: '',
                href: '',
            }
        },
        {
            evaluationNumber: 4,
            date: 'Jue 23, Jul 2026',
            weighting: '25%',
            description: {
                text: '',
                href: '',
            }
        },
    ],
    classData: [
        { 
            week: '01', 
            class: '01', 
            date: 'Lun 18, May 2026', 
            description: [
                {
                    text: 'no asistí',
                    strikethrough: true
                }
            ]
        },
        { 
            week: '01', 
            class: '02', 
            date: 'Jue 21, May 2026', 
            description: [
                {
                    text: 'Feriado: Glorias Navales',
                    strikethrough: true
                }
            ]
        },
        { 
            week: '02', 
            class: '03', 
            date: 'Lun 25, May 2026', 
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
            date: 'Jue 28, May 2026', 
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
            date: 'Sáb 23, May 2026', 
            description: [
                {
                    text: 'Estándares IEEE 802.3 y IEEE 802.11',
                    href: '',
                }
            ]
        },
    ]
};

export default courseData;