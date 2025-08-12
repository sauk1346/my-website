const courseData = {
    courseCode: "FVES01",
    courseTitle: "Inglés Inicial",
    courseDescription: "Inglés Inicial es una asignatura lectiva, del área formativa de Formación para la Empleabilidad, dictada en modalidad presencial. Al finalizar, el estudiante será capaz de comunicarse efectiva y espontáneamente en situaciones cotidianas, profesionales y académicas básicas en inglés correspondientes al nivel A1 del Marco Común Europeo de referencias para las Lenguas (MCER), utilizando oraciones básicas para referirse a rutinas, preferencias, situaciones y experiencias pasadas y futuras, considerando el Trabajo Colaborativo y Comunicación, y la Ética y Ciudadanía.",
    professorData: {
        name: "Ignacio Fernando Salas Martínez",
        email: "ignacio.salas07@inacapmail.cl"
    },
    unitsData: [
        { 
            unit: '1',
            description: 'Talking about Life'
        },
        { 
            unit: '2',
            description: 'A look at the past'
        },
        { 
            unit: '3',
            description: 'Any plans for the future?'
        },
    ],
    evaluationsData: [
        { 
            evaluationNumber: 1,
            date: '',
            weighting: '',
            description: {
                text: '',
                href: ''
            },
        },
                { 
            evaluationNumber: 2,
            date: '',
            weighting: '',
            description: {
                text: '',
                href: ''
            },
        },
                { 
            evaluationNumber: 3,
            date: '',
            weighting: '',
            description: {
                text: '',
                href: ''
            },
        },
                { 
            evaluationNumber: 4,
            date: '',
            weighting: '',
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
            date: 'Mar 12, Ago 2025', 
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
                    text: 'Suspensión Clases: Pre-feriado',
                    strikethrough: true
                }
            ]
        },
    ],
};

export default courseData;