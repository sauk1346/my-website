const courseData = {
    courseCode: "TI3V63",
    courseTitle: "Gestión de Servicios y Gobernabilidad TI",
    courseDescription: "Gestión de servicios y Gobernabilidad TI es una asignatura lectiva, del área formativa de Tecnologías de Información y Ciberseguridad, dictada en modalidad presencial. Al finalizar, el estudiante será capaz de gestionar los servicios de TI a través de su ciclo de vida a fin de mantener el control de los riesgos y asegurar la inversión en TI que genere valor para el negocio, considerando el Aprendizaje Continuo o Permanente.",
    professorData: {
        name: "Rafael Aderito Romero Sanabria",
        email: "rafael.romero03@inacapmail.cl"
    },
    unitsData: [
        { 
            unit: '1',
            description: 'Estableciendo un Gobierno TI'
        },
        { 
            unit: '2',
            description: 'Gestión de los Servicios TI'
        },
        { 
            unit: '3',
            description: 'Implantación de Gobierno TI'
        },
    ],
    evaluationsData: [
        { 
            evaluationNumber: 1,
            date: '',
            weighting: '15%', 
            description: {
                text: 'Informe 01',
                href: ''
            }
        },
        { 
            evaluationNumber: 2,
            date: '',
            weighting: '35%', 
            description: {
                text: 'Informe 02',
                href: ''
            }
        },
        { 
            evaluationNumber: 3,
            date: '',
            weighting: '35%', 
            description: {
                text: 'Informe 03',
                href: ''
            }
        },
        { 
            evaluationNumber: 4,
            date: '',
            weighting: '15%', 
            description: [
                {
                    text: 'Diagnóstico',
                    href: 'diagnostico'
                },
                {
                    text: 'Controles',
                    href: 'controles'
                },
            ]
        },
        
    ],
    classData: [
        { 
            week: '01', 
            class: '01', 
            date: 'Lun 10, Ago 2026', 
            description: [
                {
                    text: 'Introducción Asignatura',
                    href:'docs/clase01.pdf'
                },
            ]
        },
        { 
            week: '01', 
            class: '02', 
            date: 'Jue 13, Ago 2026', 
            description: [
                {
                    text: 'Gobierno de TI',
                    href:'docs/clase02.pdf'
                },
            ]
        },
        { 
            week: '02', 
            class: '03', 
            date: 'Lun 17, Ago 2026', 
            description: [
                {
                    text: 'COBIT y Estándares TI',
                    href:'docs/clase03.pdf'
                },
            ]
        },
        { 
            week: '02', 
            class: '04', 
            date: 'Jue 20, Ago 2026', 
            description: [
                {
                    text: 'Gestión de Servicios y Gobernabilidad',
                    href:'docs/clase04.pdf'
                },
            ]
        },
        { 
            week: '03', 
            class: '05', 
            date: 'Lun 24, Ago 2026', 
            description: [
                {
                    text: '',
                    href:''
                },
            ]
        },
        { 
            week: '03', 
            class: '06', 
            date: 'Lun 27, Ago 2026', 
            description: [
                {
                    text: '',
                    href:''
                },
            ]
        },

    ],
    lectureData: [
        { 
            week: '01', 
            lecture: '01', 
            date: 'Sáb 15, Ago 2026', 
            description: {
                text: 'Gobierno TI: decisiones estratégicas para organizaciones digitales',
                href: ''
            }
        },
        { 
            week: '02', 
            lecture: '02', 
            date: 'Sáb 22, Ago 2026', 
            description: {
                text: 'COBIT y estándares TI: control, estrategia y mejora organizacional',
                href: ''
            }
        },
    ]
};

export default courseData;