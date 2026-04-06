const courseData = {
    courseCode: "TI3V51",
    courseTitle: "Arquitectura y Almacenamiento de Datos",
    courseDescription: "Arquitectura y almacenamiento de datos es una asignatura práctica, del área formativa de especialidad de Tecnologías de Información y Ciberseguridad, dictada en modalidad semipresencial. Al finalizar, el estudiante será capaz de analizar y proponer soluciones para el almacenamiento de información a través de arquitecturas conocidas, considerando la Ética y Ciudadanía.",
    professorData: {
        name: "Sebastián Alejandro Pizarro Álvarez",
        email: "sebastian.pizarro02@inacapmail.cl"
    },
    unitsData: [
        { 
            unit: '1',
            description: 'Fundamentos de almacenamiento'
        },
        { 
            unit: '2',
            description: 'Herramientas de implementación'
        },
        { 
            unit: '3',
            description: 'Implementación de soluciones'
        },
    ],
    evaluationsData: [
        { 
            evaluationNumber: 1,
            date: 'Jue 02, Abr 2026',
            weighting: '15%', 
            description: {
                text: 'Informe 01',
                href: 'docs/informe01.pdf'
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
            description: {
                text: 'Promedio Controles',
                href: ''
            }
        }
    ],
    classData: [
        { 
            week: '01', 
            class: '01', 
            date: 'Lun 09, Mar 2026', 
            description: [
                {
                    text: 'Introducción al DataWarehouse',
                    href:'clase01'
                },
                {
                    text: 'Datawarehouse.pdf',
                    href: 'docs/Datawarehouse.pdf',
                }
            ]
        },
        { 
            week: '01', 
            class: '02', 
            date: 'Mié 11, Mar 2026', 
            description: [
                {
                    text: 'Integridad de Bases de Datos',
                    href:'clase02'
                    
                },
                {
                    text: 'Integridad.pdf',
                    href: 'docs/Integridad.pdf'
                }
            ]
        },
        { 
            week: '02', 
            class: '03', 
            date: 'Lun 16, Mar 2026', 
            description: [
                {
                    text: 'Restricciones de Integridad en SQL',
                    href: 'clase03'
                }
            ]
        },
        { 
            week: '02', 
            class: '04', 
            date: 'Mié 18, Mar 2026', 
            description: [
                {
                    text: 'Arquitectura de DW: Kimball, Inmon y ETL',
                    href: 'clase04'
                }
            ]
        },
                { 
            week: '03', 
            class: '05', 
            date: 'Lun 23, Mar 2026', 
            description: [
                {
                    text: 'OLAP: Cubos de Datos, Tipos y Diseño',
                    href: 'clase05'
                },
                {
                    text: 'PPTARQ.pdf',
                    href: 'docs/PPTARQ.pdf'
                }
            ]
        },
                { 
            week: '03', 
            class: '06', 
            date: 'Mié 25, Mar 2026', 
            description: [
                {
                    text: 'no asistí',
                    strikethrough: true
                }
            ]
        },
                { 
            week: '04', 
            class: '07', 
            date: 'Lun 30, Mar 2026', 
            description: [
                {
                    text: 'no asistí',
                    strikethrough: true
                }
            ]
        },
                { 
            week: '04', 
            class: '08', 
            date: 'Mié 01, Abr 2026', 
            description: [
                {
                    text: 'no asistí',
                    strikethrough: true
                }
            ]
        },
                { 
            week: '05', 
            class: '09', 
            date: 'Lun 06, Abr 2026', 
            description: [
                {
                    text: '',
                    href: ''
                }
            ]
        },
                { 
            week: '05', 
            class: '10', 
            date: 'Mié 08, Abr 2026', 
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
            date: 'Sáb 14, Mar 2026', 
            description: [
                {
                    text: 'Arquitecturas que transforman datos en valor',
                    href: ''
                }
            ]
        },
        { 
            week: '02', 
            lecture: '02', 
            date: 'Sáb 21, Mar 2026', 
            description: [
                {
                    text: 'Arquitecturas en acción: integración, nube y automatización',
                    href: ''
                }
            ]
        },
        { 
            week: '03', 
            lecture: '03', 
            date: 'Sáb 28, Mar 2026', 
            description: [
                {
                    text: 'Del dato crudo a la información útil: procesos ETL en acción',
                    href: ''
                }
            ]
        },
        { 
            week: '04', 
            lecture: '04', 
            date: 'Sáb 04, Abr 2026', 
            description: [
                {
                    text: 'Automatizando la integración de datos con Pentaho',
                    href: ''
                }
            ]
        },
        { 
            week: '05', 
            lecture: '05', 
            date: 'Sáb 11, Abr 2026', 
            description: [
                {
                    text: 'De la arquitectura a la acción: integración y despliegue final del almacén de dato',
                    href: ''
                }
            ]
        },
    ]
};

export default courseData;