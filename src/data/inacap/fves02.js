const courseData = {
    courseCode: "FVES02",
    courseTitle: "Inglés Habilitante",
    courseDescription: "Inglés Habilitante es una asignatura lectiva, del área formativa de formación para la empleabilidad dictada en modalidad presencial con componente online. Al finalizar este curso, el estudiante será capaz de comprender y usar expresiones comunes sobre temas cotidianos, comunicarse en situaciones rutinarias y describir aspectos básicos de su vida y entorno de acuerdo con el nivel A2 del Marco Común Europeo de Referencia para las Lenguas (MCER). En esta asignatura se aborda el clúster Trabajo Colaborativo y Comunicación Efectiva, con foco en el diálogo y el Ética y ciudadanía con foco en respeto a la diversidad.",
    professorData: {
        name: "Ignacio Fernando Salas Martínez",
        email: "ignacio.salas07@inacapmail.cl"
    },
    unitsData: [
        { 
            unit: '1',
            description: 'Stories and Anecdotes'
        },
        { 
            unit: '2',
            description: 'Goals, advice and changes'
        },
        { 
            unit: '3',
            description: 'Future plans'
        },
    ],
    evaluationsData: [
        { 
            evaluationNumber: 1,
            date: 'Lun 31, Ago 2026',
            weighting: '20%', 
            description: {
                text: 'Oral Presentation',
                href: ''
            }
        },
        { 
            evaluationNumber: 2,
            date: '',
            weighting: '30%', 
            description: {
                text: 'Written test',
                href: ''
            }
        },
        { 
            evaluationNumber: 3,
            date: '',
            weighting: '35%', 
            description: {
                text: 'Role play',
                href: ''
            }
        },
        { 
            evaluationNumber: 4,
            date: '',
            weighting: '15%', 
            description: {
                text: 'Online quizzes',
                href: ''
            }
        },
        
    ],
    classData: [
        { 
            week: '01', 
            class: '01', 
            date: 'Lun 10, Ago 2026', 
            description: [
                {
                    text: 'First Class',
                    href:'docs/first-class.pdf'
                },
                {
                    text: 'Past Simple',
                    href:'https://www.youtube.com/watch?v=oIVmBfUfOHs'
                },
                {
                    text: 'Past Continuous',
                    href:'https://www.youtube.com/watch?v=U9YK9XuPhrI'
                },
                {
                    text: 'Past Simple vs Past Continuous',
                    href:'docs/ps-vs-pc.pdf'
                },
            ]
        },
        { 
            week: '01', 
            class: '02', 
            date: 'Mar 11, Ago 2026', 
            description: [
                {
                    text: 'Assessment 01 - Instructions',
                    href:'docs/assessment01.pdf'
                },
                {
                    text: 'Past Simple with/without to-be',
                    href:'docs/pc-with-without-tobe.pdf'
                },
                {
                    text: 'Onion ring question: Past Simple',
                    href:'docs/orq-past-simple.pdf'
                },
                {
                    text: 'Onion rind question: Past Continuous',
                    href:'docs/orq-past-continuous.pdf'
                },
            ]
        },

    ],
};

export default courseData;