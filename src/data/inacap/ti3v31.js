import React from 'react';
import CustomLink from '@/components/CustomLink';
import ExternalLink from '@/components/ExternalLink';

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
            date: 'Mié 04, Jun 2025',
            weighting: '20%',
            description: 'Evaluación 01',
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
        { week: '01', class: '01', date: 'Mar 20, May 2025', description: <del>Suspensión clases: pre-feriado</del> },
    ],
    lectureData: [
        { week: '01', lecture: '01', date: 'Sáb 24, May 2025', description: 'Unidad 1: Desarrollo de sitio web estático utilizando HTML5 y CSS3' },
        { week: '', lecture: '02', date: 'Sáb 24, May 2025', description: 'Principios de diseño responsivo de Programación Front End' },
        { week: '', lecture: '03', date: 'Sáb 24, May 2025', description: 'Tutorial Interactivo de HTML' },
        { week: '', lecture: '04', date: 'Sáb 24, May 2025', description: 'Tutorial Práctico: convertir un diseño en HTML' },
    ],
};
export default courseData;
    