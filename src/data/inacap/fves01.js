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
            date: 'Mar 02, Sep 2025',
            weighting: '20%',
            description: {
                text: 'Role Play',
                href: ''
            },
        },
                { 
            evaluationNumber: 2,
            date: 'Mar 30, Sep 2025',
            weighting: '30%',
            description: {
                text: 'Test',
                href: ''
            },
        },
                { 
            evaluationNumber: 3,
            date: 'Mar 28, Oct 2025',
            weighting: '35%',
            description: {
                text: 'Role Play',
                href: ''
            },
        },
                { 
            evaluationNumber: 4,
            date: 'Mar 28, Oct 2025',
            weighting: '15%',
            description: {
                text: 'Units 1-3',
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
                    text: 'Personal Introduction',
                    href: '/inacap/fves01/docs/class01.pdf',
                    external: true
                }
            ]
        },
        { 
            week: '01', 
            class: '02', 
            date: 'Jue 14, Ago 2025', 
            description: [
                {
                    text: 'Class suspended: Pre-holiday',
                    strikethrough: true
                }
            ]
        },
        { 
            week: '02', 
            class: '03', 
            date: 'Mar 19, Ago 2025', 
            description: [
                {
                    text: 'Unit 01: Talking about life',
                    href: '/inacap/fves01/docs/unit01.pdf',
                    external: true
                },
                {
                    text: 'Evaluation 01 instructions',
                    href: '/inacap/fves01/docs/eval01-instructions.pdf',
                    external: true
                },
            ]
        },
        { 
            week: '02', 
            class: '04', 
            date: 'Jue 21, Ago 2025', 
            description: [
                {
                    text: "Didn't attend",
                    strikethrough: true
                }
            ]
        },
    ],
};

export default courseData;