import React from 'react';
import CustomLink from '@/components/CustomLink';
import ExternalLink from '@/components/ExternalLink';

const courseData = {
    courseCode: "FVIE01",
    courseTitle: "Innovación y Emprendimiento I",
    courseDescription: "Innovación y emprendimiento I es una asignatura de carácter práctico del Área de Formación para la Empleabilidad, dictada en modalidad presencial. Al finalizar, los estudiantes podrán aplicar el ciclo de innovación para el desarrollo de una solución que responda a las oportunidades del entorno y a las necesidades reales de usuarios/clientes, identificando la propuesta de valor y los pasos para proyectar y concretar dicha idea en una empresa.",

    professorData: {
        name: "Paula Espinoza Miranda",
        email: "paula.espinoza19@inacapmail.cl"
    },
    unitsData: [
        { unit: '1', description: '' },
        { unit: '2', description: '' },
        { unit: '3', description: '' },
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
        { week: '01', class: '01', date: 'Jue 22, May 2025', description: '' },
    ],
    lectureData: [
        { week: '01', lecture: '01', date: 'Sáb 24, May 2025', description: 'Entrevista a usuario' },
        { week: '', lecture: '02', date: 'Sáb 24, May 2025', description: 'Elaboración de cuestionarios' },
        { week: '', lecture: '03', date: 'Sáb 24, May 2025', description: 'Observación no participante' },
    ],
};
export default courseData;