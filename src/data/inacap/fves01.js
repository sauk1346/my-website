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
            date: 'Mar 23, Sep 2025',
            weighting: '30%',
            description: {
                text: 'Test',
                href: ''
            },
        },
        { 
            evaluationNumber: 3,
            date: 'Jue 09, Oct 2025',
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
                text: 'Online Quices',
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
                    text: 'Evaluation 01 rubric',
                    href: '/inacap/fves01/docs/eval01-rubric.pdf',
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
        { 
            week: '03', 
            class: '05', 
            date: 'Mar 26, Ago 2025', 
            description: [
                {
                    text: "Evaluation 01 example",
                    href: "/inacap/fves01/docs/eval01-example.pdf"
                },
                {
                    text: "Evaluation 01: Conversation",
                    href: "fves01/eval01"
                },
            ]
        },
        { 
            week: '03', 
            class: '06', 
            date: 'Jue 28, Ago 2025', 
            description: [
                {
                    text: "Extra points for Evaluation 01 (1)",
                }
            ]
        },
        { 
            week: '04', 
            class: '07', 
            date: 'Mar 02, Sep 2025', 
            description: [
                {
                    text: "Unit 2: Listening Comprehension",
                    href: "fves01/clase07"
                }
            ]
        },
        { 
            week: '04', 
            class: '08', 
            date: 'Jue 04, Sep 2025', 
            description: [
                {
                    text: "Evaluation 01: Role play",
                    href: "fves01/eval01"
                }
            ]
        },
        { 
            week: '05', 
            class: '09', 
            date: 'Mar 09, Sep 2025', 
            description: [
                {
                    text: "Didn't attend",
                    strikethrough: true
                }
            ]
        },
        { 
            week: '05', 
            class: '10', 
            date: 'Jue 11, Sep 2025', 
            description: [
                {
                    text: "Class suspended: 11 sept",
                    strikethrough: true
                }
            ]
        },
        { 
            week: '06', 
            class: '11', 
            date: 'Mar 16, Sep 2025', 
            description: [
                {
                    text: "Didn't attend",
                    strikethrough: true
                }
            ]
        },
        { 
            week: '06', 
            class: '12', 
            date: 'Jue 18, Sep 2025', 
            description: [
                {
                    text: "Class suspended: National holidays",
                    strikethrough: true
                }
            ]
        },
        { 
            week: '07', 
            class: '13', 
            date: 'Mar 23, Sep 2025', 
            description: [
                {
                    text: "Evaluation 02: simple past tense",
                    href: ""
                }
            ]
        },
        { 
            week: '07', 
            class: '14', 
            date: 'Jue 25, Sep 2025', 
            description: [
                {
                    text: "Future tense: will / going to",
                    href: ""
                }
            ]
        },
        { 
            week: '08', 
            class: '15', 
            date: 'Mar 30, Sep 2025', 
            description: [
                {
                    text: "",
                    href: ""
                }
            ]
        },
        { 
            week: '08', 
            class: '16', 
            date: 'Jue 02, Oct 2025', 
            description: [
                {
                    text: "",
                    href: ""
                }
            ]
        },
    ],
};

export default courseData;