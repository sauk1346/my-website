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
            date: 'Lun 03, Nov 2025',
            weighting: '20%',
            description: {
                text: 'Informe 1',
                href: 'docs/informe01.pdf'
            },
        },
                { 
            evaluationNumber: 2,
            date: 'Mié 26, Nov 2025',
            weighting: '35%',
            description: {
                text: 'Presentación prototipo videojuego',
                href: ''
            },
        },
                { 
            evaluationNumber: 3,
            date: 'Jue 11, Dic 2025',
            weighting: '35%',
            description: {
                text: '',
                href: ''
            },
        },
                { 
            evaluationNumber: 4,
            date: 'Mar 18, Dic 2025',
            weighting: '10%',
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
                    text: 'No asistí',
                    strikethrough: true,
                },
            ]
        },
        { 
            week: '02', 
            class: '04', 
            date: 'Jue 30, Oct 2025', 
            description: [
                {
                    text: 'No asistí',
                    strikethrough: true,
                },
            ]
        },
        { 
            week: '03', 
            class: '05', 
            date: 'Mié 05, Nov 2025', 
            description: [
                {
                    text: 'No asistí',
                    strikethrough: true,
                },
            ]
        },
        { 
            week: '03', 
            class: '06', 
            date: 'Jue 06, Oct 2025', 
            description: [
                {
                    text: 'No asistí',
                    strikethrough: true,
                },
            ]
        },
        { 
            week: '04', 
            class: '07', 
            date: 'Mié 12, Nov 2025', 
            description: [
                {
                    text: 'No asistí',
                    strikethrough: true,
                },
            ]
        },
        { 
            week: '04', 
            class: '08', 
            date: 'Jue 13, Nov 2025', 
            description: [
                {
                    text: 'Física y Colisiones en Motores de Videojuegos',
                    href: 'clase08',
                },
            ]
        },
        { 
            week: '05', 
            class: '09', 
            date: 'Mié 19, Nov 2025', 
            description: [
                {
                    text: 'No asistí',
                    strikethrough: true,
                },
            ]
        },
        { 
            week: '05', 
            class: '10', 
            date: 'Jue 20, Nov 2025', 
            description: [
                {
                    text: 'Auto-estudio: Introducción a Godot',
                    href: 'clase10',
                },
            ]
        },
        { 
            week: '06', 
            class: '11', 
            date: 'Mié 26, Nov 2025', 
            description: [
                {
                    text: '',
                    href: '',
                },
            ]
        },
        { 
            week: '06', 
            class: '12', 
            date: 'Jue 27, Nov 2025', 
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
                href: 'docs/lectura01.pdf',
            }
        },
        { 
            week: '01', 
            lecture: '02', 
            date: 'Sáb 25, Oct 2025', 
            description: {
                text: 'Los primeros pasos del gaming: la historia que forma la industria',
                href: 'lectura02',
            }
        },
        { 
            week: '02', 
            lecture: '03', 
            date: 'Sáb 01, Nov 2025', 
            description: {
                text: 'Desentrañando el ADN del videojuego: estructura, tecnología y diseño',
                href: 'lectura03',
            }
        },
        { 
            week: '03', 
            lecture: '04', 
            date: 'Sáb 08, Nov 2025', 
            description: {
                text: 'Arquitectura y Lógica de un Videojuego',
                href: 'docs/lectura04.pdf',
            }
        },
        { 
            week: '03', 
            lecture: '05', 
            date: 'Sáb 08, Nov 2025', 
            description: {
                text: 'Diseño de la Arquitectura del Videojuego',
                href: 'lectura05',
            }
        },
        { 
            week: '04', 
            lecture: '06', 
            date: 'Sáb 15, Nov 2025', 
            description: {
                text: 'Construyendo la Lógica del Videojuego',
                href: 'lectura06',
            }
        },
        { 
            week: '05', 
            lecture: '07', 
            date: 'Sáb 22, Nov 2025', 
            description: {
                text: 'Integrando Sonido y Pulido Final',
                href: 'lectura07',
            }
        },
        { 
            week: '06', 
            lecture: '07', 
            date: 'Sáb 29, Nov 2025', 
            description: {
                text: 'Fundamentos del desarrollo de videojuegos 2D y 3D',
                href: '',
            }
        },
    ]
};

export default courseData;