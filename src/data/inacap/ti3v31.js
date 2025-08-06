const courseData = {
    courseCode: "TI3V31",
    courseTitle: "Programación Frontend",
    courseDescription: "Programación Front End es una asignatura práctica, del área formativa de Tecnologías de Información y Ciberseguridad, dictada en modalidad semipresencial. Al finalizar, el estudiante será capaz de desarrollar aplicaciones web utilizando tecnología de Front End, considerando la Resolución de Problemas, Innovación y Emprendimiento.",
    professorData: {
        name: "Claudio Danilo Cartejena Lira",
        email: "claudio.cartajena@inacapmail.cl"
    },
    unitsData: [
        { 
            unit: '1', 
            description: 'Desarrollo de sitio web estático utilizando HTML5 y CSS3'
        },
        { 
            unit: '2',
            description: 'Interacción con documentos HTML usando JavaScript'
        },
        { 
            unit: '3',
            description: 'Framework basado en JavaScript'
        },
    ],
    evaluationsData: [
        { 
            evaluationNumber: 1,
            date: 'Dom 29, Jun 2025',
            weighting: '20%',
            description: {
                text: 'HTML y CSS',
                href: 'ti3v31/eval01'
            }
        },
        { 
            evaluationNumber: 2,
            date: 'Dom 13, Jul 2025',
            weighting: '25%',
            description: {
                text: 'JavaScript',
                href: 'ti3v31/eval02'
            }
        },
        { 
            evaluationNumber: 3,
            date: 'Dom 27, Jul 2025',
            weighting: '40%',
            description: {
                text: 'React',
                href: 'ti3v31/eval03'
            }
        },
        { 
            evaluationNumber: 4,
            date: 'Lun 21, Jul 2025',
            weighting: '15%',
            description: {
                text: 'Promedio Controles',
                href: 'ti3v31/controles'
            }
        }
    ],
    classData: [
        { 
            week: '01', 
            class: '01', 
            date: 'Mié 28, May 2025', 
            description: [
                {
                    text: 'HTML (01): Conceptos Básicos',
                    href: '/inacap/ti3v31/docs/html01.pdf',
                    external: true
                },
                {
                    text: 'CSS (01): Introducción',
                    href: '/inacap/ti3v31/docs/css01.pdf',
                    external: true
                },
                {
                    text: 'CSS (02): Selectores',
                    href: '/inacap/ti3v31/docs/css02.pdf',
                    external: true
                }
            ]
        },
        { 
            week: '02', 
            class: '02', 
            date: 'Mié 04, Jun 2025', 
            description: [
                {
                    text: 'HTML (02): Elementos Avanzados',
                    href: '/inacap/ti3v31/docs/html02.pdf',
                    external: true
                },
                {
                    text: 'CSS (03): Unidades y Notaciones',
                    href: '/inacap/ti3v31/docs/css03.pdf',
                    external: true
                },
                {
                    text: 'CSS (04): Modelo de Cajas',
                    href: '/inacap/ti3v31/docs/css04.pdf',
                    external: true
                }
            ]
        },
        { 
            week: '03', 
            class: '03', 
            date: 'Mié 11, Jun 2025', 
            description: [
                {
                    text: 'HTML (03): Diseño Formulario',
                    href: '/inacap/ti3v31/docs/html03.pdf',
                    external: true
                },
                {
                    text: 'HTML (04): Formularios en HTML5',
                    href: '/inacap/ti3v31/docs/html04.pdf',
                    external: true
                },
                {
                    text: 'CSS (05): Atributos y Valores',
                    href: '/inacap/ti3v31/docs/css05.pdf',
                    external: true
                },
                {
                    text: 'CSS (06): Fuentes y Fondos',
                    href: '/inacap/ti3v31/docs/css06.pdf',
                    external: true
                }
            ]
        },
        { 
            week: '04', 
            class: '04', 
            date: 'Mié 18, Jun 2025', 
            description: [
                {
                    text: 'HTML (05): Semántica en HTML5',
                    href: '/inacap/ti3v31/docs/html05.pdf',
                    external: true
                },
                {
                    text: 'CSS (07): Layout',
                    href: '/inacap/ti3v31/docs/css07.pdf',
                    external: true
                },
                {
                    text: 'CSS (08): Posicionamiento',
                    href: '/inacap/ti3v31/docs/css08.pdf',
                    external: true
                }
            ]
        },
        { 
            week: '05', 
            class: '05', 
            date: 'Mié 25, Jun 2025', 
            description: [
                {
                    text: 'JS (01): Introducción',
                    href: '/inacap/ti3v31/docs/js01.pdf',
                    external: true
                },
                {
                    text: 'JS (02): Variables y Operadores',
                    href: '/inacap/ti3v31/docs/js02.pdf',
                    external: true
                },
                {
                    text: 'JS (03): Estructuras de Control',
                    href: '/inacap/ti3v31/docs/js03.pdf',
                    external: true
                }
            ]
        },
        { 
            week: '06', 
            class: '06', 
            date: 'Mié 02, Jul 2025', 
            description: [
                {
                    text: 'JS (04): Funciones y Propiedades',
                    href: '/inacap/ti3v31/docs/js04.pdf',
                    external: true
                },
                {
                    text: 'JS (05): Funciones definidas por usuario',
                    href: '/inacap/ti3v31/docs/js05.pdf',
                    external: true
                },
                {
                    text: 'JS (06): DOM',
                    href: '/inacap/ti3v31/docs/js06.pdf',
                    external: true
                }
            ]
        },
        { 
            week: '07', 
            class: '07', 
            date: 'Mié 09, Jul 2025', 
            description: [
                {
                    text: 'JS (07): Eventos',
                    href: '/inacap/ti3v31/docs/js07.pdf',
                    external: true
                },
                {
                    text: 'JS (08): Framework JQuery',
                    href: '/inacap/ti3v31/docs/js08.pdf',
                    external: true
                }
            ]
        },
        { 
            week: '08', 
            class: '08', 
            date: 'Mié 16, Jul 2025', 
            description: [
                {
                    text: 'Suspensión Clases: Feriado',
                    strikethrough: true
                }
            ]
        },
        { 
            week: '09', 
            class: '09', 
            date: 'Mar 22, Jul 2025', 
            description: [
                {
                    text: 'React (01): Ambiente',
                    href: '/inacap/ti3v31/docs/react01.pdf',
                    external: true
                },
                {
                    text: 'React (02): Componentes',
                    href: '/inacap/ti3v31/docs/react02.pdf',
                    external: true
                }
            ]
        },
        { 
            week: '09', 
            class: '10', 
            date: 'Mié 23, Jul 2025', 
            description: [
                {
                    text: 'React (03): Hooks, Props',
                    href: '/inacap/ti3v31/docs/react03.pdf',
                    external: true
                },
                {
                    text: 'React (04): Creación proyectos Vite',
                    href: '/inacap/ti3v31/docs/react04.pdf',
                    external: true
                }
            ]
        }
    ],
    lectureData: [
        { 
            week: '01', 
            lecture: '01', 
            date: 'Sáb 31, May 2025', 
            description: [
                {
                    text: 'Unidad 1: Desarrollo de sitio web estático utilizando HTML5 y CSS3',
                    href: '/inacap/ti3v31/docs/lectura01.pdf',
                    external: true
                }
            ]
        },
        { 
            week: '01', 
            lecture: '02', 
            date: 'Sáb 31, May 2025', 
            description: [
                {
                    text: 'Principios de diseño responsivo de Programación Front End',
                    href: 'ti3v31/lectura02'
                }
            ]
        },
        { 
            week: '01', 
            lecture: '03', 
            date: 'Sáb 31, May 2025', 
            description: [
                {
                    text: 'Tutorial Interactivo de HTML',
                    href: 'ti3v31/lectura03'
                }
            ]
        },
        { 
            week: '01', 
            lecture: '04', 
            date: 'Sáb 31, May 2025', 
            description: [
                {
                    text: 'Tutorial Práctico: convertir un diseño en HTML',
                    href: 'ti3v31/lectura04'
                }
            ]
        },
        { 
            week: '02', 
            lecture: '05', 
            date: 'Sáb 07, Jun 2025', 
            description: [
                {
                    text: 'CSS3: aplicación de estilos según un diseño',
                    href: 'ti3v31/lectura05'
                }
            ]
        },
        { 
            week: '03', 
            lecture: '06', 
            date: 'Sáb 14, Jun 2025', 
            description: [
                {
                    text: 'Git y GitHub: implementación de políticas de respaldo',
                    href: 'ti3v31/lectura06'
                }
            ]
        },
        { 
            week: '04', 
            lecture: '07', 
            date: 'Sáb 21, Jun 2025', 
            description: [
                {
                    text: 'Unidad 2: Interacción con documentos HTML usando JavaScript',
                    href: '/inacap/ti3v31/docs/lectura07.pdf',
                    external: true
                }
            ]
        },
        { 
            week: '04', 
            lecture: '08', 
            date: 'Sáb 21, Jun 2025', 
            description: [
                {
                    text: 'Manipulación del DOM con JavaScript',
                    href: 'ti3v31/lectura08'
                }
            ]
        },
        { 
            week: '04', 
            lecture: '09', 
            date: 'Sáb 21, Jun 2025', 
            description: [
                {
                    text: 'Validación y modularización de formularios y códigos en JS',
                    href: 'ti3v31/lectura09'
                }
            ]
        },
        { 
            week: '05', 
            lecture: '10', 
            date: 'Sáb 28, Jun 2025', 
            description: [
                {
                    text: 'Manejo de arreglos y objetos en JS',
                    href: 'ti3v31/lectura10'
                }
            ]
        },
        { 
            week: '06', 
            lecture: '11', 
            date: 'Sáb 05, Jul 2025', 
            description: [
                {
                    text: 'Unidad 3: Framework basado en JS',
                    href: '/inacap/ti3v31/docs/lectura11.pdf',
                    external: true
                }
            ]
        },
        { 
            week: '06', 
            lecture: '12', 
            date: 'Sáb 05, Jul 2025', 
            description: [
                {
                    text: 'Evolución de los frameworks de JS en el desarrollo web moderno',
                    href: 'ti3v31/lectura12'
                }
            ]
        },
        { 
            week: '06', 
            lecture: '13', 
            date: 'Sáb 05, Jul 2025', 
            description: [
                {
                    text: 'Elementos esenciales de los frameworks de JS',
                    href: 'ti3v31/lectura13'
                }
            ]
        },
        { 
            week: '07', 
            lecture: '14', 
            date: 'Sáb 12, Jul 2025', 
            description: [
                {
                    text: 'Codificación de componentes en JS con componentes en React',
                    href: 'ti3v31/lectura14'
                }
            ]
        },
        { 
            week: '08', 
            lecture: '15', 
            date: 'Sáb 19, Jul 2025', 
            description: [
                {
                    text: 'Implementación de CRUD con local storage en JS',
                    href: 'ti3v31/lectura15'
                }
            ]
        },
        { 
            week: '08', 
            lecture: '16', 
            date: 'Sáb 19, Jul 2025', 
            description: [
                {
                    text: 'Acceso a datos externos con Fetch y Axios en JS',
                    href: 'ti3v31/lectura16'
                }
            ]
        }
    ]
};

export default courseData;