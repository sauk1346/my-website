import React from 'react';
import CustomLink from '@/components/ui/CustomLink';
import ExternalLink from '@/components/ui/ExternalLink';

const courseData = {
    courseCode: "TI3V22",
    courseTitle: "Bases de Datos Estructuradas",
    courseDescription: "Asignatura enfocada en habilidades prácticas más que en teoría pura, lo cual es crucial para aplicaciones reales en tecnologías de información y ciberseguridad.",

    professorData: {
        name: "Eugenio Alberto Bravo García",
        email: "eugenio.bravo02@inacapmail.cl"
    },
    unitsData: [
        { unit: '1', description: 'Gestión de objetos de esquema' },
        { unit: '2', description: 'Consultas avanzadas sobre una o más tablas' },
        { unit: '3', description: 'Seguridad y programación con PL/SQL' },
    ],
    evaluationsData: [
        { 
            evaluationNumber: 1,
            date: 'Lun 26, Ago 2024',
            weighting: '20%',
            description: <><CustomLink href='ti3v22/eval01a'>Eval01-A</CustomLink>, <CustomLink href='ti3v22/eval01b'>Eval01-B</CustomLink></>,
            quickGuide: <CustomLink href='ti3v22/guia11'>Guía 01</CustomLink> },
        { 
            evaluationNumber: 2, 
            date: 'Lun 23, Sep 2024', 
            weighting: '30%', 
            description: <><CustomLink href='ti3v22/eval02a'>Eval02-A</CustomLink>, <CustomLink href='ti3v22/eval02b'>Eval02-B</CustomLink></>, 
            quickGuide: ''
        },
        { 
            evaluationNumber: 3, 
            date: 'Mar 08, Oct 2024', 
            weighting: '40%', 
            description: <><CustomLink href='ti3v22/eval03a'>Eval03-A</CustomLink>, <CustomLink href='ti3v22/eval03b'>Eval03-B</CustomLink></>, 
            quickGuide: <><CustomLink href='ti3v22/guia21'>Guía 01</CustomLink>, <CustomLink href='ti3v22/guia22'>Guía 02</CustomLink></>
        },
        { 
            evaluationNumber: 4, 
            date: 'Mar 14, Oct 2024', 
            weighting: '10%', 
            description: 'Promedio Evaluaciones', 
            quickGuide: ''
        },
    ],
    classData: [
        { week: '01', class: '01', date: 'Lun 12, Ago 2024', description: <CustomLink href='ti3v22/clase01'>Índices y Vistas</CustomLink>  },
        { week: '', class: '02', date: 'Mar 13, Ago 2024', description: <CustomLink href='ti3v22/clase02'>Funciones y Procedimientos</CustomLink> },
        { week: '02', class: '03', date: 'Lun 19, Ago 2024', description: 'Ejercicios (1)' },
        { week: '', class: '04', date: 'Mar 20, Ago 2024', description: 'Ejercicios (2)' },
        { week: '03', class: '05', date: 'Lun 26, Ago 2024', description: <><CustomLink href='ti3v22/eval01a'>Eval01-A</CustomLink>, <CustomLink href='ti3v22/eval01b'>Eval01-B</CustomLink></> },
        { week: '', class: '06', date: 'Mar 27, Ago 2024', description: 'Revisión Evaluaciones' },
        { week: '04', class: '07', date: 'Lun 02, Sep 2024', description: <CustomLink href='ti3v22/clase07'>Introducción a Oracle Database</CustomLink> },
        { week: '', class: '08', date: 'Mar 03, Sep 2024', description: <CustomLink href='ti3v22/clase08'>Puntaje Adicional</CustomLink> },
        { week: '05', class: '09', date: 'Lun 09, Sep 2024', description: <CustomLink href='ti3v22/clase09'>Consultas Complejas</CustomLink> },
        { week: '', class: '10', date: 'Mar 10, Sep 2024', description: <CustomLink href='ti3v22/clase10'>Triggers, Tipos de Funciones</CustomLink> },
        { week: '06', class: '11', date: 'Lun 16, Sep 2024', description: <CustomLink href='ti3v22/clase11'>Ejercicios</CustomLink> },
        { week: '07', class: '12', date: 'Lun 23, Sep 2024', description: <><CustomLink href='ti3v22/eval02a'>Eval02-A</CustomLink>, <CustomLink href='ti3v22/eval02b'>Eval02-B</CustomLink></> },
        { week: '', class: '13', date: 'Mar 24, Sep 2024', description: 'Revisión Evaluación 02' },
        { week: '08', class: '14', date: 'Lun 30, Sep 2024', description: <CustomLink href='ti3v22/clase14'>Ejercicios PL/SQL (1)</CustomLink> },
        { week: '', class: '15', date: 'Mar 01, Oct 2024', description: 'Ejercicios PL/SQL (2)' },
        { week: '09', class: '16', date: 'Lun 07, Oct 2024', description: 'Ejercicios PL/SQL (3)' },
        { week: '', class: '17', date: 'Mar 08, Oct 2024', description: <><CustomLink href='ti3v22/eval03a'>Eval03-A</CustomLink>, <CustomLink href='ti3v22/eval03b'>Eval03-B</CustomLink></> },
    ],
    lectureData: [
        { week: '01', lecture: '01', date: 'Sáb 17, Ago 2024', description: 'Introducción a Oracle Database' },
        { week: '', lecture: '02', date: 'Sáb 17, Ago 2024' , description: 'Consultas al diccionario de datos' },
        { week: '02', lecture: '03', date: 'Sáb 24, Ago 2024', description: 'Creación y utilización de vistas simples y complejas' },
        { week: '', lecture: '04', date: 'Sáb 24, Ago 2024', description: 'Creación y utilización de secuencias' },
        { week: '', lecture: '05', date: 'Sáb 24, Ago 2024', description: 'Creación y utilización de índices no únicos y sinónimos' },
        { week: '', lecture: '06', date: 'Sáb 24, Ago 2024', description: 'Creación de objetos de esquema' },
        { week: '03', lecture: '07', date: 'Sáb 31, Ago 2024', description: 'Funciones de una sola fila' },
        { week: '', lecture: '08', date: 'Sáb 31, Ago 2024', description: 'Funciones de conversión y expresiones condicionales' },
        { week: '04', lecture: '09', date: 'Sáb 09, Sep 2024', description: 'Funciones de grupo y agrupamiento de filas' },
        { week: '', lecture: '10', date: 'Sáb 09, Sep 2024', description: 'Consulta sobre múltiples tablas usando uniones y autouniones' },
        { week: '05', lecture: '11', date: 'Sáb 14, Sep 2024', description: 'Subconsultas de una sola fila y de varias filas' },
        { week: '', lecture: '12', date: 'Sáb 14, Sep 2024', description: 'Generación de consultas sobre tablas' },
        { week: '06', lecture: '13', date: 'Sáb 21, Sep 2024', description: 'Conceptos de seguridad aplicable a las bases de datos' },
        { week: '', lecture: '14', date: 'Sáb 21, Sep 2024', description: 'Creación de usuarios y roles' },
        { week: '07', lecture: '15', date: 'Sáb 28, Sep 2024', description: 'Privilegios de sistema y de objeto' },
        { week: '', lecture: '16', date: 'Sáb 28, Sep 2024', description: 'Creación de procedimientos PL/SQL' },
        { week: '08', lecture: '17', date: 'Sáb 05, Oct 2024', description: 'Creación de triggers' },
        { week: '', lecture: '18', date: 'Sáb 05, Oct 2024', description: 'Auditoría en la base de datos utilizando triggers' },
    ],
};
export default courseData;