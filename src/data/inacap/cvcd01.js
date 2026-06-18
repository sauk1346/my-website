const courseData = {
    courseCode: "CVCD01",
    courseTitle: "Cálculo Diferencial",
    courseDescription: "Cálculo Diferencial es una asignatura de carácter lectiva, dictada en modalidad presencial con componente online, del área de formación de Ciencias Básicas. El propósito de esta asignatura es contribuir al desarrollo de la competencia matemática integrando las habilidades fundamentales matemáticas, las habilidades del Siglo XXI y el uso de herramientas tecnológicas, en contexto personal, ocupacional, social, científico, todo esto desde una mirada colaborativa.",
    professorData: {
        name: "Carolina Valeria Gómez Bravo",
        email: "carolina.gomez27@inacapmail.cl"
    },
    unitsData: [
        { 
            unit: '1',
            description: 'Límites y Continuidad'
        },
        { 
            unit: '2',
            description: 'Derivadas'
        },
        { 
            unit: '3',
            description: 'Aplicaciones de las derivadas'
        },
    ],
    evaluationsData: [
        {
            evaluationNumber: 1,
            date: 'Mié 10, Jun 2026',
            weighting: '20%',
            description: {
                text: '',
                href: '',
            }
        },
        {
            evaluationNumber: 2,
            date: 'Jue 02, Jul 2026',
            weighting: '25%',
            description: {
                text: '',
                href: '',
            }
        },
        {
            evaluationNumber: 3,
            date: 'Jue 09, Jul 2026',
            weighting: '40%',
            description: {
                text: '',
                href: '',
            }
        },
        {
            evaluationNumber: 4,
            date: 'Mié 22, Jul 2026',
            weighting: '15%',
            description: [
                {
                    text: 'Control 01',
                    href: 'control01',
                },
                {
                    text: 'Control 02',
                    href: 'control02',
                },
            ]
                
        },
    ],
    classData: [
        { 
            week: '01', 
            class: '01', 
            date: 'Mié 20, May 2026', 
            description: [
                {
                    text: 'Suspensión clases: Vísperas feriado',
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
            date: 'Mié 27, May 2026', 
            description: [
                {
                    text: 'Taller Repaso Funciones',
                    href: 'clase03a'
                }
            ]
        },
        { 
            week: '02', 
            class: '04', 
            date: 'Jue 28, May 2026', 
            description: [
                {
                    text: 'AT01: Primeros Cálculos de Límites',
                    href: 'docs/at01.pdf'
                },
                {
                    text: 'SM01: Costos de Producción',
                    href: 'unit01-sm01'
                },
            ]
        },
        { 
            week: '03', 
            class: '05', 
            date: 'Mié 03, Jun 2026', 
            description: [
                {
                    text: 'AT02: Otros cálculos de límites y asíntotas',
                    href: 'docs/at02.pdf'
                },
                {
                    text: 'ARPA 1: Ahorro para el departamento',
                    href: 'unit01-arpa01'
                },
                {
                    text: 'SM02: Ley de enfriamiento y asíntotas',
                    href: 'unit01-sm02'
                },
            ]
        },
        { 
            week: '03', 
            class: '06', 
            date: 'Jue 04, Jun 2026', 
            description: [
                {
                    text: 'AT03: Continuidad',
                    href: 'docs/at03.pdf'
                },
                {
                    text: 'ARPA 2: Ferrocarriles del Estado',
                    href: 'unit01-arpa02'
                },
                {
                    text: 'SM03: Manteniendo la continuidad en la producción',
                    href: 'unit01-sm03'
                },  
            ]
        },
        { 
            week: '04', 
            class: '07', 
            date: 'Mié 10, Jun 2026', 
            description: [
                {
                    text: 'Evaluación 01',
                    href: ''
                }, 
            ]
        },
        { 
            week: '04', 
            class: '08', 
            date: 'Jue 11, Jun 2026', 
            description: [
                {
                    text: 'AT01: Noción de derivada',
                    href: 'docs/unit02-at01.pdf'
                },
                {
                    text: 'ARPA 1: De rectas secantes a recta tangente',
                    href: 'unit02-arpa01'
                },
                {
                    text: 'SM01: Velocidad instantánea',
                    href: 'unit02-sm01'
                }, 
            ]
        },
        { 
            week: '05', 
            class: '09', 
            date: 'Mié 17, Jun 2026', 
            description: [
                {
                    text: 'Suspensión clases: Comunicado profesora',
                    strikethrough: true
                }, 
            ]
        },
        { 
            week: '05', 
            class: '10', 
            date: 'Jue 18, Jun 2026', 
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