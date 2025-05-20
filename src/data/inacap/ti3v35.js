import React from 'react';
import CustomLink from '@/components/CustomLink';
import ExternalLink from '@/components/ExternalLink';

export default {
    courseCode: "TI3V35",
    courseTitle: "Sistemas Operativos",
    courseDescription: "Sistemas operativos es una asignatura práctica, del área formativa de Tecnologías de Información y Ciberseguridad, dictada en modalidad presencial con componente online. Al finalizar, el estudiante será capaz de gestionar y administrar distintos sistemas operativos con el objetivo de configurar servicios de infraestructura, considerando el aprendizaje continuo y la resolución de problemas.",

    professorData: {
        name: "Cesar Salinas Zepeda",
        email: "cesar.salinas04@inacapmail.cl"
    },
    unitsData: [
        { unit: '1', description: 'Direccionamiento de redes basada en protocolos TCP/IP' },
        { unit: '2', description: 'Sistema operativo Windows Server' },
        { unit: '3', description: 'Sistema operativo Linux Server' },
    ],
    evaluationsData: [
        { 
            evaluationNumber: 1,
            date: 'Mié 28, May 2025',
            weighting: '15%',
            description: 'TCP/IP',
            quickGuide: ''
        },
        { 
            evaluationNumber: 2,
            date: 'Lun 09, Jun 2025',
            weighting: '30%',
            description: 'Windows Server',
            quickGuide: ''
        },
        { 
            evaluationNumber: 3,
            date: 'Sáb 12, Jul 2025',
            weighting: '30%',
            description: 'Linux Server',
            quickGuide: ''
        },
        { 
            evaluationNumber: 4,
            date: 'Lun 21, Jul 2025',
            weighting: '25%',
            description: 'Promedio Controles',
            quickGuide: ''
        }
    ],
    classData: [
        { week: '01', class: '01', date: 'Lun 19, May 2025', description: <CustomLink href="ti3v35/clase01">Introducción TCP/IP</CustomLink> },
        { week: '', class: '02', date: 'Mar 20, May 2025', description: <del>Suspesión clases: pre-feriado</del> },
    ],
    lectureData: [
        { week: '01', lecture: '01', date: 'Sáb 24, May 2025', description: 'Direccionamiento de redes basada en protocolos TCP/IP' },
        { week: '', lecture: '02', date: 'Sáb 24, May 2025', description: 'Interconexión de dispositivos y redes' },
    ],

}