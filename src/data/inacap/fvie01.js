import React from 'react';
import CustomLink from '@/components/ui/CustomLink';
import ExternalLink from '@/components/ui/ExternalLink';

const courseData = {
    courseCode: "FVIE01",
    courseTitle: "Innovación y Emprendimiento I",
    courseDescription: "Innovación y emprendimiento I es una asignatura de carácter práctico del Área de Formación para la Empleabilidad, dictada en modalidad presencial. Al finalizar, los estudiantes podrán aplicar el ciclo de innovación para el desarrollo de una solución que responda a las oportunidades del entorno y a las necesidades reales de usuarios/clientes, identificando la propuesta de valor y los pasos para proyectar y concretar dicha idea en una empresa.",

    professorData: {
        name: "Rafael Ernesto Contreras Valdebenito",
        email: "rafael.contr@gmail.com"
    },
    unitsData: [
        { unit: '1', description: 'Dirección de Oportunidades e Ideación de Propuestas' },
        { unit: '2', description: 'Modelo de Negocio y Experimentación' },
        { unit: '3', description: 'Difusión y Formalización' },
    ],
    evaluationsData: [
        { 
            evaluationNumber: 1,
            date: 'Vie 30, May 2025',
            weighting: '20%',
            description: 'Evaluación 01',
            quickGuide: ''
        },
        { 
            evaluationNumber: 2,
            date: 'Mar 17, Jun 2025',
            weighting: '35%',
            description: 'Evaluación 02',
            quickGuide: ''
        },
        { 
            evaluationNumber: 3,
            date: 'Jue 17, Jul 2025',
            weighting: '35%',
            description: 'Evaluación 03',
            quickGuide: ''
        },
        { 
            evaluationNumber: 4,
            date: 'Jue 24, Jul 2025',
            weighting: '10%',
            description: 'Examen',
            quickGuide: ''
        }
    ],
    classData: [
        { week: '01', class: '01', date: 'Jue 22, May 2025', description: <CustomLink href='fvie01/clase01'>Introducción a I+E</CustomLink> },
        { week: '02', class: '02', date: 'Mar 27, May 2025', description: <CustomLink href='fvie01/clase02'>Tema de Proyecto</CustomLink> },
        { week: '', class: '03', date: 'Jue 29, May 2025', description: "" },
    ],
    lectureData: [
        { week: '01', lecture: '01', date: 'Sáb 24, May 2025', description: <CustomLink href='fvie01/lectura01'>Entrevista a usuario</CustomLink> },
        { week: '', lecture: '02', date: 'Sáb 24, May 2025', description: 'Elaboración de cuestionarios' },
        { week: '', lecture: '03', date: 'Sáb 24, May 2025', description: 'Observación no participante' },
        { week: '02', lecture: '04', date: 'Sáb 31, May 2025', description: 'Procesamiento de Hallazgos' },
        { week: '', lecture: '05', date: 'Sáb 31, May 2025', description: 'Redefinición del desafío' },
    ],
};
export default courseData;