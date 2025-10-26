const courseData = {
    courseCode: "TILV22",
    courseTitle: "Desarrollo de Videojuegos",
    courseDescription: "Desarrollo de Videojuegos es una asignatura práctica, del área formativa de especialidad de Tecnologías de Información y Ciberseguridad, dictada en modalidad presencial.  Al finalizar, el estudiante será capaz de desarrollar videojuegos en 2D y 3D, considerando la Resolución de Problemas, Innovación y Emprendimiento.",
    professorData: {
        name: "Sebastián Alejandro Pizarro Álvarez",
        email: "sebastian.pizarro02@inacapmail.cl"
    },
    unitsData: [
        { 
            unit: '1',
            description: 'Introducción a los Videojuegos'
        },
        { 
            unit: '2',
            description: 'Arquitectura y Lógica de un Videojuego'
        },
        { 
            unit: '3',
            description: 'Desarrollo videojuegos 2D y 3D'
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
            date: 'Mié 22, Oct 2025', 
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
            date: 'Mié 29, Oct 2025', 
            description: [
                {
                    text: '',
                    href: '',
                },
            ]
        },
        { 
            week: '02', 
            class: '03', 
            date: 'Jue 30, Oct 2025', 
            description: [
                {
                    text: '',
                    href: '',
                },
            ]
        },
    ],
    lectureData: [
        { 
            week: '01', 
            lecture: '01', 
            date: 'Sáb 25, Oct 2025', 
            description: {
                text: 'Introducción a los Videojuegos',
                href: '/inacap/tilv22/docs/lectura01.pdf',
            }
        },
        { 
            week: '01', 
            lecture: '02', 
            date: 'Sáb 25, Oct 2025', 
            description: {
                text: 'Los primeros pasos del gaming: la historia que forma la industria',
                href: 'tilv22/lectura02',
            }
        },
        { 
            week: '02', 
            lecture: '03', 
            date: 'Sáb 01, Nov 2025', 
            description: {
                text: 'Desentrañando el ADN del videojuego: estructura, tecnología y diseño',
                href: '',
            }
        },
    ]
};

export default courseData;