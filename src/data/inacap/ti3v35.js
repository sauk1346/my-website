import React from 'react';
import CustomLink from '@/components/ui/CustomLink';
import ExternalLink from '@/components/ui/ExternalLink';

const courseData = {
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
            date: 'Lun 02, Jun 2025',
            weighting: '15%',
            description: <>
                <CustomLink href="ti3v35/eval01-1">- 1ra parte (FLSM)</CustomLink><br />
                <CustomLink href="ti3v35/eval01-2">- 2da parte (VLSM)</CustomLink>
            </>,
            quickGuide: <>
                <CustomLink href='ti3v35/guia00'>- Guía 00: Conceptos</CustomLink><br/>
                <CustomLink href='ti3v35/guia01'>- Guía 01: Ejercicio Base (FLSM)</CustomLink><br/>
                <CustomLink href='ti3v35/guia02'>- Guía 02: PPT (FLSM)</CustomLink>
            </>
        },
        { 
            evaluationNumber: 2,
            date: 'Lun 30, Jun 2025',
            weighting: '30%',
            description: <CustomLink href='ti3v35/eval02'>Windows Server</CustomLink>,
            quickGuide: ''
        },
        { 
            evaluationNumber: 3,
            date: '',
            weighting: '30%',
            description: 'Linux Server',
            quickGuide: ''
        },
        { 
            evaluationNumber: 4,
            date: '',
            weighting: '25%',
            description: 'Promedio Controles',
            quickGuide: ''
        }
    ],
    classData: [
        { week: '01', class: '01', date: 'Lun 19, May 2025', description: <CustomLink href="ti3v35/clase01">- Introducción TCP/IP</CustomLink> },
        { week: '02', class: '02', date: 'Lun 26, May 2025', description: "- FLSM (1)" },
        { week: '', class: '03', date: 'Mié 28, May 2025', description: <ExternalLink href="/inacap/ti3v35/docs/subnetting.pdf">- FLSM (2)</ExternalLink> },
        { 
            week: '03', class: '04', date: 'Lun 02, Jun 2025', description: <>
                <CustomLink href="ti3v35/eval01-1">- Evaluación 01 parte 1: FLSM</CustomLink><br/>
                <CustomLink href="ti3v35/clase04">- VLSM (1)</CustomLink>
            </>
        },
        { week: '', class: '05', date: 'Mié 04, Jun 2025', description: <CustomLink href='ti3v35/guia03'>- Guía 03: VLSM</CustomLink> },
        { week: '04', class: '06', date: 'Lun 09, Jun 2025', description: <CustomLink href='ti3v35/eval01-2'>- Evaluación 01 parte 2: VLSM</CustomLink> },
        { week: '', class: '07', date: 'Mié 11, Jun 2025', description: <ExternalLink href='/inacap/ti3v35/docs/clase07.pdf'>- Windows Server (1)</ExternalLink> },
        { week: '05', class: '08', date: 'Lun 16, Jun 2025', description: "- Windows Server (2)" },
        { week: '', class: '09', date: 'Mié 18, Jun 2025', description: "- Windows Server (3)" },
        { week: '06', class: '10', date: 'Lun 23, Jun 2025', description: "- Windows Server (4)" },
        { week: '', class: '11', date: 'Mié 25, Jun 2025', description: "- Windows Server (5)" },
        { week: '07', class: '12', date: 'Lun 30, Jun 2025', description: <CustomLink href='ti3v35/eval02'>- Evaluación 02: Windows Server</CustomLink> },
        { week: '', class: '13', date: 'Mié 02, Jul 2025', description: "- Introducción Linux" },
        { week: '08', class: '14', date: 'Lun 07, Jul 2025', description: "- Linux Server (1)" },
        { week: '', class: '15', date: 'Mié 09, Jul 2025', description: "- Linux Server (2)" },
        { week: '09', class: '16', date: 'Lun 14, Jul 2025', description: "- Linux Server (3)" },
        { week: '', class: '17', date: 'Mié 16, Jul 2025', description: <del>- Suspensión Clases: Feriado</del> },
        
    ],
    lectureData: [
        { week: '01', lecture: '01', date: 'Sáb 24, May 2025', description: <ExternalLink href="/inacap/ti3v35/docs/lectura01.pdf" >Unidad 1: Direccionamiento de redes basada en protocolos TCP/IP</ExternalLink> },
        { week: '', lecture: '02', date: 'Sáb 24, May 2025', description: <CustomLink href="ti3v35/lectura02">Interconexión de dispositivos y redes</CustomLink> },
        { week: '02', lecture: '03', date: 'Sáb 31, May 2025', description: <CustomLink href="ti3v35/lectura03">Cálculo de clases de dirección</CustomLink> },
        { week: '03', lecture: '04', date: 'Sáb 07, Jun 2025', description: <CustomLink href="ti3v35/lectura04">Técnicas de cálculo VLSM</CustomLink> },
        { week: '04', lecture: '05', date: 'Sáb 14, Jun 2025', description: <ExternalLink href='/inacap/ti3v35/docs/lectura05.pdf'>Unidad 2: Sistema operativo Windows Server</ExternalLink> },
        { week: '', lecture: '06', date: 'Sáb 14, Jun 2025', description: <CustomLink href="ti3v35/lectura06">Configuración básica en la instalación de un sistema operativo Windows Server</CustomLink> },    
        { week: '05', lecture: '07', date: 'Sáb 21, Jun 2025', description: <CustomLink href="ti3v35/lectura07">Incorporación de la estación de trabajo en el dominio</CustomLink> },    
        { week: '06', lecture: '08', date: 'Sáb 28, Jun 2025', description: <CustomLink href="ti3v35/lectura08">Políticas GPO en los objetos de dominio</CustomLink> },    
        { week: '07', lecture: '09', date: 'Sáb 05, Jul 2025', description: <ExternalLink href="/inacap/ti3v35/docs/lectura09.pdf">Unidad 3: Sistema operativo Linux Server</ExternalLink> },
        { week: '07', lecture: '10', date: 'Sáb 05, Jul 2025', description: <CustomLink href="ti3v35/lectura10">Licenciamiento de software</CustomLink> },
        { week: '08', lecture: '11', date: 'Sáb 12, Jul 2025', description: <CustomLink href="ti3v35/lectura11">Gestión de archivos y directorios en Linux</CustomLink> },
        { week: '09', lecture: '12', date: 'Sáb 19, Jul 2025', description: <CustomLink href="ti3v35/lectura12">Recurso Integrativo de la Unidad</CustomLink> },

    ],
};
export default courseData;