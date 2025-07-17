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
            date: 'Jue 10, Jul 2025',
            weighting: '30%',
            description: <ExternalLink href='/inacap/fvie01/docs/informe01.pdf'>Informe 01</ExternalLink>,
            quickGuide: ''
        },
        { 
            evaluationNumber: 2,
            date: 'Lun 21, Jul 2025',
            weighting: '35%',
            description: 'Informe 02',
            quickGuide: ''
        },
        { 
            evaluationNumber: 3,
            date: 'Jue 24, Jul 2025',
            weighting: '35%',
            description: 'Informe 03',
            quickGuide: ''
        },
    ],
    classData: [
        { week: '01', class: '01', date: 'Jue 22, May 2025', description: <CustomLink href='fvie01/clase01'>Introducción a I+E</CustomLink> },
        { week: '02', class: '02', date: 'Mar 27, May 2025', description: <CustomLink href='fvie01/clase02'>Tema de Proyecto</CustomLink> },
        { week: '', class: '03', date: 'Jue 29, May 2025', description: <CustomLink href='fvie01/clase03'>Objetivos General y Específicos</CustomLink> },
        { week: '03', class: '04', date: 'Mar 03, Jun 2025', description: <CustomLink href='fvie01/clase04'>Planificación y Pauta (1)</CustomLink> },
        { week: '', class: '05', date: 'Jue 05, Jun 2025', description: "Planificación y Pauta (2)" },
        { week: '04', class: '06', date: 'Mar 10, Jun 2025', description: "Observación no Participante" },
        { week: '', class: '07', date: 'Jue 12, Jun 2025', description: <del>No asistí</del> },
        { week: '05', class: '08', date: 'Mar 17, Jun 2025', description: "Feedback Cuestionario" },
        { week: '', class: '09', date: 'Jue 19, Jun 2025', description: <del>No asistí</del> },
        { week: '06', class: '10', date: 'Mar 24, Jun 2025', description: <CustomLink href='fvie01/clase10'>Matriz de Vaciado</CustomLink> },
        { week: '', class: '11', date: 'Jue 26, Jun 2025', description: "Matriz de Antecedentes (1)" },
        { week: '07', class: '12', date: 'Mar 01, Jul 2025', description: "Matriz de Antecedentes (2)" },
        { week: '', class: '13', date: 'Jue 03, Jul 2025', description: <del>No asistí</del> },
        { week: '08', class: '14', date: 'Mar 08, Jul 2025', description: "Consultas Informe 01" },
        { week: '', class: '15', date: 'Jue 10, Jul 2025', description: "Consultas Informe 01" },
        { week: '09', class: '16', date: 'Mar 15, Jul 2025', description: <del>Suspensión Clases: pre-feriado</del> },
        { week: '', class: '17', date: 'Jue 17, Jul 2025', description: "" },
    ],
    lectureData: [
        { week: '01', lecture: '01', date: 'Sáb 24, May 2025', description: <ExternalLink href="/inacap/fvie01/docs/manual01.pdf">Manual Estudiante Unidad 01</ExternalLink> },
        { week: '01', lecture: '02', date: 'Sáb 24, May 2025', description: <CustomLink href='fvie01/lectura02'>Entrevista a usuario</CustomLink> },
        { week: '', lecture: '03', date: 'Sáb 24, May 2025', description: <CustomLink href='fvie01/lectura03'>Elaboración de cuestionarios</CustomLink> },
        { week: '', lecture: '04', date: 'Sáb 24, May 2025', description: <CustomLink href='fvie01/lectura04'>Observación no participante</CustomLink> },
        { week: '02', lecture: '05', date: 'Sáb 31, May 2025', description: <CustomLink href='fvie01/lectura05'>Procesamiento de Hallazgos</CustomLink> },
        { week: '', lecture: '06', date: 'Sáb 31, May 2025', description: <CustomLink href='fvie01/lectura06'>Redefinición del desafío</CustomLink> },
        { week: '03', lecture: '07', date: 'Sáb 07, Jun 2025', description: <CustomLink href='fvie01/lectura07'>Estudio Comparativo Antecedentes</CustomLink> },
        { week: '', lecture: '08', date: 'Sáb 07, Jun 2025', description: <CustomLink href='fvie01/lectura08'>Formulario Requerimientos</CustomLink> },
        { week: '', lecture: '09', date: 'Sáb 07, Jun 2025', description: <CustomLink href='fvie01/lectura09'>Brainstorming</CustomLink> },
        { week: '04', lecture: '', date: '', description: '' },
        { week: '05', lecture: '10', date: 'Sáb 21, Jun 2025', description: <ExternalLink href="/inacap/fvie01/docs/manual02.pdf">Manual Estudiante Unidad 02</ExternalLink> },
        { week: '05', lecture: '11', date: 'Sáb 21, Jun 2025', description: <CustomLink href='fvie01/lectura11'>Modelo de negocio Business Canvas Model</CustomLink> },
        { week: '', lecture: '12', date: 'Sáb 21, Jun 2025', description: 'Métodos de experimentación cliente/usuario' },
        { week: '06', lecture: '13', date: 'Sáb 28, Jun 2025', description: 'Desarrollo de la experimentación y ajuste del modelo de negocio' },
        { week: '07', lecture: '', date: '', description: '' },
        { week: '08', lecture: '14', date: 'Sáb 12, Jul 2025', description: <ExternalLink href="/inacap/fvie01/docs/manual03.pdf">Manual Estudiante Unidad 3</ExternalLink> },
        { week: '', lecture: '15', date: 'Sáb 12, Jul 2025', description: 'Procesos de formalización empresarial y creación de emprendimientos' },
        { week: '', lecture: '16', date: 'Sáb 12, Jul 2025', description: 'Fase de Propuesta de Valor INACAP' },
        { week: '', lecture: '17', date: 'Sáb 12, Jul 2025', description: 'Crear una Empresa en Chile' },
        { week: '09', lecture: '18', date: 'Sáb 19, Jul 2025', description: 'Pitch de Negocio' },

    ],
};
export default courseData;