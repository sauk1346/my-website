import { Strikethrough } from "lucide-react";

const courseData = {
    courseCode: "TI3V43",
    courseTitle: "Ingeniería de Software",
    courseDescription: "Ingeniería de software es una asignatura lectiva, del área formativa de especialidad de Tecnologías de Información y Ciberseguridad, dictada en modalidad semipresencial. Al finalizar, el estudiante será capaz de analizar procesos clave del desarrollo software, contemplando la planificación de proyectos, evaluando sistemas de software y proponiendo medidas de mitigación de riesgo, considerando el Trabajo Colaborativo y la Comunicación.",
    professorData: {
        name: "Eugenio Alberto Bravo García",
        email: "eugenio.bravo02@inacapmail.cl"
    },
    unitsData: [
        { 
            unit: '1',
            description: 'Introducción a la ingeniería de software'
        },
        { 
            unit: '2',
            description: 'Co-creación, patrones y requerimientos del software'
        },
        { 
            unit: '3',
            description: 'Implementación, pruebas y calidad de software'
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
            date: 'Lun 11, Ago 2025', 
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
            date: 'Sáb 16, Ago 2025', 
            description: [
                {
                    text: 'Introducción a la Ingeniería de software',
                    href: '',
                }
            ]
        },
        { 
            week: '01', 
            lecture: '02', 
            date: 'Sáb 16, Ago 2025', 
            description: [
                {
                    text: 'Fundamentos de la Ingeniería de software',
                    href: ''
                }
            ]
        },
        
    ]
};

export default courseData;