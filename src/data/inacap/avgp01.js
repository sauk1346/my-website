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
            date: 'Lun 23, Mar 2026',
            weighting: '20%', 
            description: {
                text: '',
                href: ''
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
                    text: 'no asistí',
                    strikethrough: true
                }
            ]
        },
        { 
            week: '01', 
            class: '02', 
            date: 'Jue 12, Mar 2026', 
            description: [
                {
                    text: 'no asistí',
                    strikethrough: true
                }
            ]
        },
        { 
            week: '02', 
            class: '03', 
            date: 'Lun 16, Mar 2026', 
            description: [
                {
                    text: 'no asistí',
                    strikethrough: true
                }
            ]
        },
        { 
            week: '02', 
            class: '04', 
            date: 'Jue 19, Mar 2026', 
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

    ]
};

export default courseData;