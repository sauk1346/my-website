const courseData = {
    courseCode: "TI3V34",
    courseTitle: "Fundamentos de Seguridad de la Información",
    courseDescription: "Fundamentos de Seguridad de la Información es una asignatura lectiva, del área formativa de Tecnologías de Información y Ciberseguridad, dictada en modalidad presencial con componente online. Al finalizar, el estudiante será capaz de evaluar y mitigar riesgos en base a detección de vulnerabilidades en el marco de la ley y normas vigentes, considerando la Ética y Ciudadanía.",
    professorData: {
        name: "Sergio Andrés Muñoz Sasso",
        email: "sergio.munoz03@inacapmail.cl"
    },
    unitsData: [
        { 
            unit: '1',
            description: 'Seguridad de la Información'
        },
        { 
            unit: '2',
            description: 'Ética y legislación'
        },
        { 
            unit: '3',
            description: 'Evaluación de Vulnerabilidades y Matriz de Riesgo'
        },
    ],
    evaluationsData: [
        { 
            evaluationNumber: 1,
            date: 'Lun 24, Mar 2025',
            weighting: '20%',
            description: {
                text: 'Evaluación 01',
                href: 'ti3v34/eval01'
            }
        },
        { 
            evaluationNumber: 2,
            date: 'Mié 09, Abr 2025',
            weighting: '30%',
            description: {
                text: 'Informe 01',
                href: '/inacap/ti3v34/docs/informe01.pdf',
                external: true
            }
        },
        { 
            evaluationNumber: 3,
            date: 'Mié 07, May 2025',
            weighting: '35%',
            description: {
                text: 'Informe 02',
                href: '/inacap/ti3v34/docs/informe02.pdf',
                external: true
            }
        },
        { 
            evaluationNumber: 4,
            date: 'Cada Semana',
            weighting: '15%',
            description: {
                text: 'Promedio Controles',
                href: 'ti3v34/controles'
            }
        }
    ],
    classData: [
        { 
            week: '01', 
            class: '01', 
            date: 'Lun 10, Mar 2025', 
            description: [
                {
                    text: 'Introducción Seguridad',
                    href: 'ti3v34/clase01'
                }
            ]
        },
        { 
            week: '01', 
            class: '02', 
            date: 'Mar 11, Mar 2025', 
            description: [
                {
                    text: 'Seguridad Información / Informática',
                    href: 'ti3v34/clase02'
                }
            ]
        },
        { 
            week: '01', 
            class: '03', 
            date: 'Mié 12, Mar 2025', 
            description: [
                {
                    text: 'Vulnerabilidad/Amenaza/Riesgo',
                    href: 'ti3v34/clase03'
                }
            ]
        },
        { 
            week: '02', 
            class: '04', 
            date: 'Lun 17, Mar 2025', 
            description: [
                {
                    text: 'Eventos e Incidentes',
                    href: 'ti3v34/clase04'
                }
            ]
        },
        { 
            week: '02', 
            class: '05', 
            date: 'Mar 18, Mar 2025', 
            description: [
                {
                    text: 'SGSI y ISO27001',
                    href: 'ti3v34/clase05'
                }
            ]
        },
        { 
            week: '02', 
            class: '06', 
            date: 'Mié 19, Mar 2025', 
            description: [
                {
                    text: 'CIS Controls'
                }
            ]
        },
        { 
            week: '03', 
            class: '07', 
            date: 'Lun 24, Mar 2025', 
            description: [
                {
                    text: 'Evaluación 01',
                    href: 'ti3v34/eval01'
                }
            ]
        },
        { 
            week: '03', 
            class: '08', 
            date: 'Mar 25, Mar 2025', 
            description: [
                {
                    text: 'Ética y Legislación',
                    href: 'ti3v34/clase08'
                }
            ]
        },
        { 
            week: '03', 
            class: '09', 
            date: 'Mié 26, Mar 2025', 
            description: [
                {
                    text: 'Política Nacional de Ciberseguridad',
                    href: 'ti3v34/clase09'
                }
            ]
        },
        { 
            week: '04', 
            class: '10', 
            date: 'Lun 31, Mar 2025', 
            description: [
                {
                    text: 'PCI DSS',
                    href: 'ti3v34/clase10'
                }
            ]
        },
        { 
            week: '04', 
            class: '11', 
            date: 'Mar 01, Abr 2025', 
            description: [
                {
                    text: 'No asistí a clases',
                    strikethrough: true
                }
            ]
        },
        { 
            week: '04', 
            class: '12', 
            date: 'Mié 02, Abr 2025', 
            description: [
                {
                    text: 'Delitos Informáticos',
                    href: 'ti3v34/clase12'
                }
            ]
        },
        { 
            week: '05', 
            class: '13', 
            date: 'Lun 07, Abr 2025', 
            description: [
                {
                    text: 'Avance Informe 01 (1)'
                }
            ]
        },
        { 
            week: '05', 
            class: '14', 
            date: 'Mar 08, Abr 2025', 
            description: [
                {
                    text: 'Avance Informe 01 (2)'
                }
            ]
        },
        { 
            week: '05', 
            class: '15', 
            date: 'Mié 09, Abr 2025', 
            description: [
                {
                    text: 'Entrega Informe 01',
                    href: '/inacap/ti3v34/docs/informe01.pdf',
                    external: true
                }
            ]
        },
        { 
            week: '06', 
            class: '16', 
            date: 'Lun 14, Abr 2025', 
            description: [
                {
                    text: 'Tipos de Vulnerabilidades (1)',
                    href: 'ti3v34/clase16'
                }
            ]
        },
        { 
            week: '06', 
            class: '17', 
            date: 'Mar 15, Abr 2025', 
            description: [
                {
                    text: 'Tipos de Vulnerabilidades (2)',
                    href: 'ti3v34/clase17'
                }
            ]
        },
        { 
            week: '06', 
            class: '18', 
            date: 'Mié 16, Abr 2025', 
            description: [
                {
                    text: 'Planificación de Recuperación ante Desastres (DRP)',
                    href: 'ti3v34/clase18'
                }
            ]
        },
        { 
            week: '07', 
            class: '19', 
            date: 'Lun 21, Abr 2025', 
            description: [
                {
                    text: 'Controles de Mitigación y Evaluación de Riesgo',
                    href: 'ti3v34/clase19'
                }
            ]
        },
        { 
            week: '07', 
            class: '20', 
            date: 'Mar 22, Abr 2025', 
            description: [
                {
                    text: 'Matriz de Riesgo',
                    href: 'ti3v34/clase20'
                }
            ]
        },
        { 
            week: '07', 
            class: '21', 
            date: 'Mié 23, Abr 2025', 
            description: [
                {
                    text: 'Libre para estudio [TI3V32]'
                }
            ]
        },
        { 
            week: '08', 
            class: '22', 
            date: 'Lun 28, Abr 2025', 
            description: [
                {
                    text: 'Avance Informe 02 (1)'
                }
            ]
        },
        { 
            week: '08', 
            class: '23', 
            date: 'Mar 29, Abr 2025', 
            description: [
                {
                    text: 'Avance Informe 02 (2)'
                }
            ]
        },
        { 
            week: '08', 
            class: '24', 
            date: 'Mié 30, Abr 2025', 
            description: [
                {
                    text: 'Avance Informe 02 (3)'
                }
            ]
        },
        { 
            week: '09', 
            class: '25', 
            date: 'Lun 05, May 2025', 
            description: [
                {
                    text: 'Avance Informe 02 (4)'
                }
            ]
        },
        { 
            week: '09', 
            class: '26', 
            date: 'Mar 06, May 2025', 
            description: [
                {
                    text: 'Avance Informe 02 (5)'
                }
            ]
        },
        { 
            week: '09', 
            class: '27', 
            date: 'Mié 07, May 2025', 
            description: [
                {
                    text: 'Entrega Informe 02',
                    href: '/inacap/ti3v34/docs/informe02.pdf',
                    external: true
                }
            ]
        }
    ],
    lectureData: [
        { 
            week: '01', 
            lecture: '01', 
            date: 'Sáb 15, Mar 2025', 
            description: [
                {
                    text: 'Seguridad de la Información',
                    href: '/inacap/ti3v34/docs/lectura01.pdf',
                    external: true
                }
            ]
        },
        { 
            week: '01', 
            lecture: '02', 
            date: 'Sáb 15, Mar 2025', 
            description: [
                {
                    text: 'Fundamentos de la seguridad de la información y seguridad informática',
                    href: 'ti3v34/lectura02'
                }
            ]
        },
        { 
            week: '02', 
            lecture: '03', 
            date: 'Sáb 22, Mar 2025', 
            description: [
                {
                    text: 'Framework de Seguridad ISO27001:2022 y CIS Controls',
                    href: 'ti3v34/lectura03'
                }
            ]
        },
        { 
            week: '03', 
            lecture: '04', 
            date: 'Sáb 29, Mar 2025', 
            description: [
                {
                    text: 'Ética y legislación',
                    href: '/inacap/ti3v34/docs/lectura04.pdf',
                    external: true
                }
            ]
        },
        { 
            week: '03', 
            lecture: '05', 
            date: 'Sáb 29, Mar 2025', 
            description: [
                {
                    text: 'Elementos normativos nacionales e internacionales y delitos informáticos',
                    href: 'ti3v34/lectura05'
                }
            ]
        },
        { 
            week: '04', 
            lecture: '06', 
            date: 'Sáb 05, Abr 2025', 
            description: [
                {
                    text: 'Payment Card Industry Data Security Standard y Convenio de Budapest',
                    href: 'ti3v34/lectura06'
                }
            ]
        },
        { 
            week: '05', 
            lecture: '07', 
            date: 'Sáb 12, Abr 2025', 
            description: [
                {
                    text: 'Ley 19.628 (propuesta Ley LPDP)',
                    href: 'ti3v34/lectura07'
                }
            ]
        },
        { 
            week: '06', 
            lecture: '08', 
            date: 'Sáb 19, Abr 2025', 
            description: [
                {
                    text: 'Evaluación de vulnerabilidades y matriz de riesgo',
                    href: '/inacap/ti3v34/docs/lectura08.pdf',
                    external: true
                }
            ]
        },
        { 
            week: '06', 
            lecture: '09', 
            date: 'Sáb 19, Abr 2025', 
            description: [
                {
                    text: 'Tipos de vulnerabilidades según activos TI e identificación de riesgos',
                    href: 'ti3v34/lectura09'
                }
            ]
        },
        { 
            week: '07', 
            lecture: '10', 
            date: 'Sáb 26, Abr 2025', 
            description: [
                {
                    text: 'Matriz de Riesgo y políticas de prevención de riesgos',
                    href: 'ti3v34/lectura10'
                }
            ]
        },
        { 
            week: '08', 
            lecture: '11', 
            date: 'Sáb 03, May 2025', 
            description: [
                {
                    text: 'Controles de mitigación y de riesgos y mejoras tecnológicas ante desastres',
                    href: 'ti3v34/lectura11'
                }
            ]
        }
    ]
};

export default courseData;