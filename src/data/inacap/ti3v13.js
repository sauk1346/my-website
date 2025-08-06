const courseData = {
    courseCode: "TI3V13",
    courseTitle: "Fundamentos de Hardware y Software",
    courseDescription: "Asignatura práctica. Se desarrollan habilidades para: Configurar e instalar Sistemas Operativos en PCs, portátiles y dispositivos móviles, configuración básica de redes LAN y WLAN utilizando software simulador de redes.",
    professorData: {
        name: "Sergio Andrés Muñoz Sasso",
        email: "sergio.munoz03@inacapmail.cl"
    },
    unitsData: [
        { 
            unit: '1',
            description: 'Computadores personales, portátiles y otros dispositivos móviles'
        },
        { 
            unit: '2',
            description: 'Sistemas Operativos de escritorio'
        },
        { 
            unit: '3',
            description: 'Introducción a Redes de Datos'
        },
    ],
    evaluationsData: [
        { 
            evaluationNumber: 1,
            date: 'Mar 11, Jun 2024',
            weighting: '20%', 
            description: {
                text: 'Instalación/configuración Hardware'
            }
        },
        { 
            evaluationNumber: 2,
            date: 'Mar 09, Jul 2024', 
            weighting: '35%', 
            description: {
                text: 'Instalación/configuración Windows 10'
            }
        },
        { 
            evaluationNumber: 3,
            date: 'Mié 24, Jul 2024', 
            weighting: '35%', 
            description: {
                text: 'Configuración router inalámbrico'
            }
        },
        { 
            evaluationNumber: 4,
            date: 'Mié 07, May 2025',
            weighting: '15%',
            description: {
                text: 'Promedio Controles',
                href: 'ti3v13/controles'
            }
        }
    ],
    classData: [
        { 
            week: '01', 
            class: '01', 
            date: 'Mié 22, May 2024', 
            description: [
                {
                    text: 'Componentes Básicos de Computadores',
                    href: 'ti3v13/clase01'
                }
            ]
        },
        { 
            week: '02', 
            class: '02', 
            date: 'Mar 28, May 2024', 
            description: [
                {
                    text: 'Seguridad Física en Manipulación de Hardware',
                    href: 'ti3v13/clase02'
                }
            ]
        },
        { 
            week: '03', 
            class: '03', 
            date: 'Mar 04, Jun 2024', 
            description: [
                {
                    text: 'Taller 01-A'
                }
            ]
        },
        { 
            week: '03', 
            class: '04', 
            date: 'Mié 05, Jun 2024', 
            description: [
                {
                    text: 'Taller 01-B',
                    href: 'ti3v13/taller01'
                }
            ]
        },
        { 
            week: '04', 
            class: '05', 
            date: 'Mar 11, Jun 2024', 
            description: [
                {
                    text: 'Evaluación 01-A'
                }
            ]
        },
        { 
            week: '04', 
            class: '06', 
            date: 'Mié 12, Jun 2024', 
            description: [
                {
                    text: 'Evaluación 01-B'
                }
            ]
        },
        { 
            week: '05', 
            class: '07', 
            date: 'Mar 18, Jun 2024', 
            description: [
                {
                    text: 'Sistemas Operativos',
                    href: 'ti3v13/clase07'
                }
            ]
        },
        { 
            week: '05', 
            class: '08', 
            date: 'Mié 19, Jun 2024', 
            description: [
                {
                    text: 'Higiene digital, Tipos de licencia, versiones de Windows 10',
                    href: 'ti3v13/clase08'
                }
            ]
        },
        { 
            week: '06', 
            class: '09', 
            date: 'Mar 25, Jun 2024', 
            description: [
                {
                    text: 'Máquina Virtual: Pasos',
                    href: 'ti3v13/clase09'
                }
            ]
        },
        { 
            week: '06', 
            class: '10', 
            date: 'Mié 26, Jun 2024', 
            description: [
                {
                    text: 'Virtualbox, Instalación Windows 10',
                    href: 'ti3v13/clase10'
                }
            ]
        },
        { 
            week: '07', 
            class: '11', 
            date: 'Mar 02, Jul 2024', 
            description: [
                {
                    text: 'Taller 02-A'
                }
            ]
        },
        { 
            week: '07', 
            class: '12', 
            date: 'Mié 03, Jul 2024', 
            description: [
                {
                    text: 'Taller 02-B',
                    href: 'ti3v13/taller02'
                }
            ]
        },
        { 
            week: '08', 
            class: '13', 
            date: 'Mar 09, Jul 2024', 
            description: [
                {
                    text: 'Evaluación 02-A'
                }
            ]
        },
        { 
            week: '08', 
            class: '14', 
            date: 'Mié 10, Jul 2024', 
            description: [
                {
                    text: 'Evaluación 02-B'
                }
            ]
        },
        { 
            week: '09', 
            class: '15', 
            date: 'Mié 17, Jul 2024', 
            description: [
                {
                    text: 'Fundamentos Networking',
                    href: 'ti3v13/clase15'
                }
            ]
        },
        { 
            week: '10', 
            class: '16', 
            date: 'Mar 23, Jul 2024', 
            description: [
                {
                    text: 'Taller 03 A/B',
                    href: 'ti3v13/taller03'
                }
            ]
        },
        { 
            week: '10', 
            class: '17', 
            date: 'Mié 24, Jul 2024', 
            description: [
                {
                    text: 'Evaluación 03'
                }
            ]
        }
    ],
    lectureData: [
        { 
            week: '01', 
            lecture: '01', 
            date: 'Sáb 25, May 2024', 
            description: [
                {
                    text: 'Selección de hardware y herramientas',
                    href: 'ti3v13/lectura01'
                }
            ]
        },
        { 
            week: '01', 
            lecture: '02', 
            date: 'Sáb 25, Jun 2024', 
            description: [
                {
                    text: 'Medidas de seguridad física',
                    href: 'ti3v13/lectura02'
                }
            ]
        },
        { 
            week: '02', 
            lecture: '03', 
            date: 'Sáb 01, Jun 2024', 
            description: [
                {
                    text: 'Procedimientos de instalación',
                    href: 'ti3v13/lectura03'
                }
            ]
        },
        { 
            week: '02', 
            lecture: '04', 
            date: 'Sáb 01, Jun 2024', 
            description: [
                {
                    text: 'Mantenimiento preventivo',
                    href: 'ti3v13/lectura04'
                }
            ]
        },
        { 
            week: '03', 
            lecture: '05', 
            date: 'Sáb 08, Jun 2024', 
            description: [
                {
                    text: 'Soluciones a problemas de hardware',
                    href: 'ti3v13/lectura05'
                }
            ]
        },
        { 
            week: '03', 
            lecture: '06', 
            date: 'Sáb 08, Jun 2024', 
            description: [
                {
                    text: 'Optimización de hardware',
                    href: 'ti3v13/lectura06'
                }
            ]
        },
        { 
            week: '04', 
            lecture: '07', 
            date: 'Sáb 15, Jun 2024', 
            description: [
                {
                    text: 'Software y hardware',
                    href: 'ti3v13/lectura07'
                }
            ]
        },
        { 
            week: '04', 
            lecture: '08', 
            date: 'Sáb 15, Jun 2024', 
            description: [
                {
                    text: 'Particiones y formateo',
                    href: 'ti3v13/lectura08'
                }
            ]
        },
        { 
            week: '05', 
            lecture: '09', 
            date: 'Sáb 22, Jun 2024', 
            description: [
                {
                    text: 'Cuentas de usuario y grupos locales',
                    href: 'ti3v13/lectura09'
                }
            ]
        },
        { 
            week: '05', 
            lecture: '10', 
            date: 'Sáb 22, Jun 2024', 
            description: [
                {
                    text: 'Estructuras de directorios y archivos',
                    href: 'ti3v13/lectura10'
                }
            ]
        },
        { 
            week: '06', 
            lecture: '11', 
            date: 'Sáb 29, Jun 2024', 
            description: [
                {
                    text: 'Copias de seguridad',
                    href: 'ti3v13/lectura11'
                }
            ]
        },
        { 
            week: '06', 
            lecture: '12', 
            date: 'Sáb 29, Jun 2024', 
            description: [
                {
                    text: 'Verificación y configuración OS',
                    href: 'ti3v13/lectura12'
                }
            ]
        },
        { 
            week: '07', 
            lecture: '13', 
            date: 'Sáb 06, Jul 2024', 
            description: [
                {
                    text: 'Tipos de redes',
                    href: 'ti3v13/lectura13'
                }
            ]
        },
        { 
            week: '07', 
            lecture: '14', 
            date: 'Sáb 06, Jul 2024', 
            description: [
                {
                    text: 'Elementos y modelos de redes',
                    href: 'ti3v13/lectura14'
                }
            ]
        },
        { 
            week: '08', 
            lecture: '15', 
            date: 'Sáb 13, Jul 2024', 
            description: [
                {
                    text: 'Direcciones IP',
                    href: 'ti3v13/lectura15'
                }
            ]
        },
        { 
            week: '08', 
            lecture: '16', 
            date: 'Sáb 13, Jul 2024', 
            description: [
                {
                    text: 'Seguridad de router inalámbrico',
                    href: 'ti3v13/lectura16'
                }
            ]
        },
        { 
            week: '09', 
            lecture: '17', 
            date: 'Sáb 20, Jul 2024', 
            description: [
                {
                    text: 'Redes LAN y WLAN'
                }
            ]
        },
        { 
            week: '09', 
            lecture: '18', 
            date: 'Sáb 20, Jul 2024', 
            description: [
                {
                    text: 'Normativa para configuración de Redes'
                }
            ]
        }
    ]
};

export default courseData;