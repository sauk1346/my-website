import React from 'react';
import CustomLink from '@/components/ui/CustomLink';
import ExternalLink from '@/components/ui/ExternalLink';

const courseData = {
    courseCode: "TI3V13",
    courseTitle: "Fundamentos de Hardware y Software",
    courseDescription: "Asignatura práctica. Se desarrollan habilidades para: Configurar e instalar Sistemas Operativos en PCs, portátiles y dispositivos móviles, configuración básica de redes LAN y WLAN utilizando software simulador de redes.",

    professorData: {
        name: "Sergio Andrés Muñoz Sasso",
        email: "sergio.munoz03@inacapmail.cl"
    },
    unitsData: [
        { unit: '1', description: 'Computadores personales, portátiles y otros dispositivos móviles' },
        { unit: '2', description: 'Sistemas Operativos de escritorio' },
        { unit: '3', description: 'Introducción a Redes de Datos' },
    ],
    evaluationsData: [
        { 
            evaluationNumber: 1,
            date: 'Mar 11, Jun 2024',
            weighting: '20%', 
            description: 'Instalación/configuración Hardware', 
            quickGuide: ''
        },
        { 
            evaluationNumber: 2,
            date: 'Mar 09, Jul 2024', 
            weighting: '35%', 
            description:'Instalación/configuración Windows 10', 
            quickGuide: '' 
        },
        { 
            evaluationNumber: 3,
            date: 'Mié 24, Jul 2024', 
            weighting: '35%', 
            description: 'Configuración router inalámbrico', 
            quickGuide: '' 
        },
        { 
            evaluationNumber: 4,
            date: 'Mié 07, May 2025',
            weighting: '15%',
            description: <CustomLink href="ti3v13/controles">Promedio Controles</CustomLink>,
            quickGuide: '' },

    ],
    classData: [
        { week: '01', class: '01', date: 'Mié 22, May 2024', description: <CustomLink href="ti3v13/clase01">Componentes Básicos de Computadores</CustomLink> },
        { week: '02', class: '02', date: 'Mar 28, May 2024', description: <CustomLink href="ti3v13/clase02">Seguridad Física en Manipulación de Hardware</CustomLink> },
        { week: '03', class: '03', date: 'Mar 04, Jun 2024', description: 'Taller 01-A' },
        { week: '', class: '04', date: 'Mié 05, Jun 2024', description: <CustomLink href="ti3v13/taller01">Taller 01-B</CustomLink> },
        { week: '04', class: '05', date: 'Mar 11, Jun 2024', description: 'Evaluación 01-A' },
        { week: '', class: '06', date: 'Mié 12, Jun 2024', description: 'Evaluación 01-B' },
        { week: '05', class: '07', date: 'Mar 18, Jun 2024', description: <CustomLink href="ti3v13/clase07">Sistemas Operativos</CustomLink> },
        { week: '', class: '08', date: 'Mié 19, Jun 2024', description: <CustomLink href="ti3v13/clase08">Higiene digital, Tipos de licencia, versiones de Windows 10</CustomLink> },
        { week: '06', class: '09', date: 'Mar 25, Jun 2024', description: <CustomLink href="ti3v13/clase09">Máquina Virtual: Pasos</CustomLink> },
        { week: '', class: '10', date: 'Mié 26, Jun 2024', description: <CustomLink href="ti3v13/clase10">Virtualbox, Instalación Windows 10</CustomLink> },
        { week: '07', class: '11', date: 'Mar 02, Jul 2024', description: 'Taller 02-A' },
        { week: '', class: '12', date: 'Mié 03, Jul 2024', description: <CustomLink href="ti3v13/taller02">Taller 02-B</CustomLink> },
        { week: '08', class: '13', date: 'Mar 09, Jul 2024', description: 'Evaluación 02-A' },
        { week: '', class: '14', date: 'Mié 10, Jul 2024', description: 'Evaluación 02-B' },
        { week: '09', class: '15', date: 'Mié 17, Jul 2024', description: <CustomLink href="ti3v13/clase15">Fundamentos Networking</CustomLink> },
        { week: '10', class: '16', date: 'Mar 23, Jul 2024', description: <CustomLink href="ti3v13/taller03">Taller 03 A/B</CustomLink> },
        { week: '', class: '17', date: 'Mié 24, Jul 2024', description: 'Evaluación 03' },
    ],
    lectureData: [
        { week: '01', lecture: '01', date: 'Sáb 25, May 2024', description: <CustomLink href="ti3v13/lectura01">Selección de hardware y herramientas</CustomLink> },
        { week: '', lecture: '02', date: 'Sáb 25, Jun 2024', description: <CustomLink href="ti3v13/lectura02">Medidas de seguridad física</CustomLink> },
        { week: '02', lecture: '03', date: 'Sáb 01, Jun 2024', description: <CustomLink href="ti3v13/lectura03">Procedimientos de instalación</CustomLink> },
        { week: '', lecture: '04', date: 'Sáb 01, Jun 2024', description: <CustomLink href="ti3v13/lectura04">Mantenimiento preventivo</CustomLink> },
        { week: '03', lecture: '05', date: 'Sáb 08, Jun 2024', description: <CustomLink href="ti3v13/lectura05">Soluciones a problemas de hardware</CustomLink> },
        { week: '', lecture: '06', date: 'Sáb 08, Jun 2024', description: <CustomLink href="ti3v13/lectura06">Optimización de hardware</CustomLink> },
        { week: '04', lecture: '07', date: 'Sáb 15, Jun 2024', description: <CustomLink href="ti3v13/lectura07">Software y hardware</CustomLink> },
        { week: '', lecture: '08', date: 'Sáb 15, Jun 2024', description: <CustomLink href="ti3v13/lectura08">Particiones y formateo</CustomLink> },
        { week: '05', lecture: '09', date: 'Sáb 22, Jun 2024', description: <CustomLink href="ti3v13/lectura09">Cuentas de usuario y grupos locales</CustomLink> },
        { week: '', lecture: '10', date: 'Sáb 22, Jun 2024', description: <CustomLink href="ti3v13/lectura10">Estructuras de directorios y archivos</CustomLink> },
        { week: '06', lecture: '11', date: 'Sáb 29, Jun 2024', description: <CustomLink href="ti3v13/lectura11">Copias de seguridad</CustomLink> },
        { week: '', lecture: '12', date: 'Sáb 29, Jun 2024', description: <CustomLink href="ti3v13/lectura12">Verificación y configuración OS</CustomLink> },
        { week: '07', lecture: '13', date: 'Sáb 06, Jul 2024', description: <CustomLink href="ti3v13/lectura13">Tipos de redes</CustomLink> },
        { week: '', lecture: '14', date: 'Sáb 06, Jul 2024', description: <CustomLink href="ti3v13/lectura14">Elementos y modelos de redes</CustomLink> },
        { week: '08', lecture: '15', date: 'Sáb 13, Jul 2024', description: <CustomLink href="ti3v13/lectura15">Direcciones IP</CustomLink> },
        { week: '', lecture: '16', date: 'Sáb 13, Jul 2024', description: <CustomLink href="ti3v13/lectura16">Seguridad de router inalámbrico</CustomLink> },
        { week: '09', lecture: '17', date: 'Sáb 20, Jul 2024', description: 'Redes LAN y WLAN' },
        { week: '', lecture: '18', date: 'Sáb 20, Jul 2024', description: 'Normativa para configuración de Redes' },
    ],
};
export default courseData;