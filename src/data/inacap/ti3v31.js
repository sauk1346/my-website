import React from 'react';
import CustomLink from '@/components/ui/CustomLink';
import ExternalLink from '@/components/ui/ExternalLink';

const courseData = {
    courseCode: "TI3V31",
    courseTitle: "Programación Frontend",
    courseDescription: "Programación Front End es una asignatura práctica, del área formativa de Tecnologías de Información y Ciberseguridad, dictada en modalidad semipresencial. Al finalizar, el estudiante será capaz de desarrollar aplicaciones web utilizando tecnología de Front End, considerando la Resolución de Problemas, Innovación y Emprendimiento.",

    professorData: {
        name: "Claudio Danilo Cartejena Lira",
        email: "claudio.cartajena@inacapmail.cl"
    },
    unitsData: [
        { unit: '1', description: 'Desarrollo de sitio web estático utilizando HTML5 y CSS3' },
        { unit: '2', description: 'Interacción con documentos HTML usando JavaScript' },
        { unit: '3', description: 'Framework basado en JavaScript' },
    ],
    evaluationsData: [
        { 
            evaluationNumber: 1,
            date: 'Dom 28, Jun 2025',
            weighting: '20%',
            description: 'Evaluación 01: HTML y CSS',
            quickGuide: ''
        },
        { 
            evaluationNumber: 2,
            date: 'Mié 18, Jun 2025',
            weighting: '25%',
            description: 'Evaluación 02',
            quickGuide: ''
        },
        { 
            evaluationNumber: 3,
            date: 'Mié 23, Jul 2025',
            weighting: '40%',
            description: 'Evaluación 03',
            quickGuide: ''
        },
        { 
            evaluationNumber: 4,
            date: 'Lun 21, Jul 2025',
            weighting: '15%',
            description: 'Promedio Controles',
            quickGuide: ''
        }
    ],
    classData: [
        { week: '01', class: '01', date: 'Mié 28, May 2025', description: <del>- Suspensión clases</del> },
        { week: '02', class: '02', date: 'Mié 04, Jun 2025', description: <CustomLink href='ti3v31/clase02'>- HTML5 y atributos</CustomLink>},
        { week: '03', class: '03', date: 'Mié 11, Jun 2025', description: "- CSS y Formularios"},
        { week: '04', class: '04', date: 'Mié 18, Jun 2025', description: <>
            <ExternalLink href='/inacap/ti3v31/docs/proyecto01.pdf'>- Instrucciones Proyecto (Sprint 01)</ExternalLink><br/>
            - CSS(2): Uso de selectores
        </>},
        { week: '05', class: '05', date: 'Mié 25, Jun 2025', description: "- JavaScript (1)"},
        { week: '06', class: '06', date: 'Mié 02, Jul 2025', description: ""},

    ],
    lectureData: [
        { week: '01', lecture: '01', date: 'Sáb 31, May 2025', description: <ExternalLink href='/inacap/ti3v31/docs/lectura01.pdf'>Unidad 1: Desarrollo de sitio web estático utilizando HTML5 y CSS3</ExternalLink> },
        { week: '', lecture: '02', date: 'Sáb 31, May 2025', description: <CustomLink href='ti3v31/lectura02'>Principios de diseño responsivo de Programación Front End</CustomLink> },
        { week: '', lecture: '03', date: 'Sáb 31, May 2025', description: <CustomLink href='ti3v31/lectura03'>Tutorial Interactivo de HTML</CustomLink> },
        { week: '', lecture: '04', date: 'Sáb 31, May 2025', description: <CustomLink href='ti3v31/lectura04'>Tutorial Práctico: convertir un diseño en HTML</CustomLink> },
        { week: '02', lecture: '05', date: 'Sáb 07, Jun 2025', description: 'Guía práctica de CSS3: aplicación de estilos según un diseño' },
        { week: '03', lecture: '06', date: 'Sáb 14, Jun 2025', description: 'Guía de Git y GitHub para desarrolladores: implementación de políticas de respaldo' },
        { week: '04', lecture: '07', date: 'Sáb 21, Jun 2025', description: 'Unidad 2: Interacción con documentos HTML usando JavaScript' },
        { week: '', lecture: '08', date: 'Sáb 21, Jun 2025', description: 'Manipulación del DOM con JavaScript: guía paso a paso' },
        { week: '', lecture: '09', date: 'Sáb 21, Jun 2025', description: 'Validación y modularización de formularios y códigos en JavaScript: manual práctico' },
        { week: '05', lecture: '09', date: 'Sáb 28, Jun 2025', description: 'Manejo de arreglos y objetos en JavaScript: ejercicios y ejemplos prácticos' },
        { week: '06', lecture: '10', date: 'Sáb 05, Jul 2025', description: 'Unidad 3: Framework basado en JavaScript' },
        { week: '', lecture: '11', date: 'Sáb 05, Jul 2025', description: 'Evolución de los frameworks de JavaScript en el desarrollo web moderno' },
        { week: '', lecture: '12', date: 'Sáb 05, Jul 2025', description: 'Elementos esenciales de los frameworks de JavaScript' },


    ],
};
export default courseData;
    