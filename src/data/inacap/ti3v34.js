import React from 'react';
import CustomLink from '@/components/CustomLink';
import ExternalLink from '@/components/ExternalLink';

export default {
    courseCode: "TI3V34",
    courseTitle: "Fundamentos de Seguridad de la Información",
    courseDescription: "Fundamentos de Seguridad de la Información es una asignatura lectiva, del área formativa de Tecnologías de Información y Ciberseguridad, dictada en modalidad presencial con componente online. Al finalizar, el estudiante será capaz de evaluar y mitigar riesgos en base a detección de vulnerabilidades en el marco de la ley y normas vigentes, considerando la Ética y Ciudadanía.",

    professorData: {
        name: "Sergio Andrés Muñoz Sasso",
        email: "sergio.munoz03@inacapmail.cl"
    },
    unitsData: [
        { unit: '1', description: 'Seguridad de la Información' },
        { unit: '2', description: 'Ética y legislación' },
        { unit: '3', description: 'Evaluación de Vulnerabilidades y Matriz de Riesgo' },
    ],
    evaluationsData: [
        { 
            evaluationNumber: 1,
            date: 'Lun 24, Mar 2025',
            weighting: '20%',
            description: <CustomLink href="ti3v34/eval01">Evaluación 01</CustomLink>,
            quickGuide: ''
        },
        { 
            evaluationNumber: 2,
            date: 'Mié 09, Abr 2025',
            weighting: '30%',
            description: <ExternalLink href="/inacap/ti3v34/docs/informe01.pdf">Informe 01</ExternalLink>,
            quickGuide: ''
        },
        { 
            evaluationNumber: 3,
            date: 'Mié 07, May 2025',
            weighting: '35%',
            description: <ExternalLink href='/inacap/ti3v34/docs/informe02.pdf'>Informe 02</ExternalLink>,
            quickGuide: ''
        },
        { 
            evaluationNumber: 4,
            date: 'Cada Semana',
            weighting: '15%',
            description: <CustomLink href='ti3v34/controles'>Promedio Controles</CustomLink>,
            quickGuide: ''
        }
    ],
    classData: [
        { week: '01', class: '01', date: 'Lun 10, Mar 2025', description: <CustomLink href="ti3v34/clase01">Introducción Seguridad</CustomLink> },
        { week: '', class: '02', date: 'Mar 11, Mar 2025', description: <CustomLink href="ti3v34/clase02">Seguridad Información / Informática</CustomLink> },
        { week: '', class: '03', date: 'Mié 12, Mar 2025', description: <CustomLink href="ti3v34/clase03">Vulnerabilidad/Amenaza/Riesgo</CustomLink> },
        { week: '02', class: '04', date: 'Lun 17, Mar 2025', description: <CustomLink href="ti3v34/clase04">Eventos e Incidentes</CustomLink> },
        { week: '', class: '05', date: 'Mar 18, Mar 2025', description: <CustomLink href="ti3v34/clase05">SGSI y ISO27001</CustomLink> },
        { week: '', class: '06', date: 'Mié 19, Mar 2025', description: "CIS Controls" },
        { week: '03', class: '07', date: 'Lun 24, Mar 2025', description: <CustomLink href="ti3v34/eval01">Evaluación 01</CustomLink> },
        { week: '', class: '08', date: 'Mar 25, Mar 2025', description: <CustomLink href="ti3v34/clase08">Ética y Legislación</CustomLink> },
        { week: '', class: '09', date: 'Mié 26, Mar 2025', description: <CustomLink href="ti3v34/clase09">Política Nacional de Ciberseguridad</CustomLink> },
        { week: '04', class: '10', date: 'Lun 31, Mar 2025', description: <CustomLink href="ti3v34/clase10">PCI DSS</CustomLink> },
        { week: '', class: '11', date: 'Mar 01, Abr 2025', description: <em>No asistí a clases</em> },
        { week: '', class: '12', date: 'Mié 02, Abr 2025', description: <CustomLink href="ti3v34/clase12">Delitos Informáticos</CustomLink> },
        { week: '05', class: '13', date: 'Lun 07, Abr 2025', description: "Avance Informe 01 (1)" },
        { week: '', class: '14', date: 'Mar 08, Abr 2025', description: "Avance Informe 01 (2)" },
        { week: '', class: '15', date: 'Mié 09, Abr 2025', description: <ExternalLink href="/inacap/ti3v34/docs/informe01.pdf">Entrega Informe 01</ExternalLink> },
        { week: '06', class: '16', date: 'Lun 14, Abr 2025', description: <CustomLink href="ti3v34/clase16">Tipos de Vulnerabilidades (1)</CustomLink> },
        { week: '', class: '17', date: 'Mar 15, Abr 2025', description: <CustomLink href="ti3v34/clase17">Tipos de Vulnerabilidades (2)</CustomLink> },
        { week: '', class: '18', date: 'Mié 16, Abr 2025', description: <CustomLink href="ti3v34/clase18">Planificación de Recuperación ante Desastres (DRP)</CustomLink> },
        { week: '07', class: '19', date: 'Lun 21, Abr 2025', description: <CustomLink href="ti3v34/clase19">Controles de Mitigación y Evaluación de Riesgo</CustomLink> },
        { week: '', class: '20', date: 'Mar 22, Abr 2025', description: <CustomLink href="ti3v34/clase20">Matriz de Riesgo</CustomLink>  },
        { week: '', class: '21', date: 'Mié 23, Abr 2025', description: <em>Libre para estudio [TI3V32]</em> },
        { week: '08', class: '22', date: 'Lun 28, Abr 2025', description: 'Avance Informe 02 (1)' },
        { week: '', class: '23', date: 'Mar 29, Abr 2025', description: 'Avance Informe 02 (2)' },
        { week: '', class: '24', date: 'Mié 30, Abr 2025', description: 'Avance Informe 02 (3)' },
        { week: '09', class: '25', date: 'Lun 05, May 2025', description: 'Avance Informe 02 (4)' },
        { week: '', class: '26', date: 'Mar 06, May 2025', description: 'Avance Informe 02 (5)' },
        { week: '', class: '27', date: 'Mié 07, May 2025', description: <ExternalLink href='/inacap/ti3v34/docs/informe02.pdf'>Entrega Informe 02</ExternalLink> },
    ],
    lectureData: [
        { week: '01', lecture: '01', date: 'Sáb 15, Mar 2025', description: <ExternalLink href="/inacap/ti3v34/docs/lectura01.pdf">Seguridad de la Información</ExternalLink> },
        { week: '', lecture: '02', date: 'Sáb 15, Mar 2025', description: <CustomLink href="ti3v34/lectura02">Fundamentos de la seguridad de la información y seguridad informática</CustomLink> },
        { week: '02', lecture: '03', date: 'Sáb 22, Mar 2025', description: <CustomLink href="ti3v34/lectura03">Framework de Seguridad ISO27001:2022 y CIS Controls</CustomLink> },
        { week: '03', lecture: '04', date: 'Sáb 29, Mar 2025', description: <ExternalLink href="/inacap/ti3v34/docs/lectura04.pdf">Ética y legislación</ExternalLink> },
        { week: '', lecture: '05', date: 'Sáb 29, Mar 2025', description: <CustomLink href="ti3v34/lectura05">Elementos normativos nacionales e internacionales y delitos informáticos</CustomLink> },
        { week: '04', lecture: '06', date: 'Sáb 05, Abr 2025', description: <CustomLink href="ti3v34/lectura06">Payment Card Industry Data Security Standard y Convenio de Budapest</CustomLink> },
        { week: '05', lecture: '07', date: 'Sáb 12, Abr 2025', description: <CustomLink href="ti3v34/lectura07">Ley 19.628 (propuesta Ley LPDP)</CustomLink> },
        { week: '06', lecture: '08', date: 'Sáb 19, Abr 2025', description: <ExternalLink href="/inacap/ti3v34/docs/lectura08.pdf">Evaluación de vulnerabilidades y matriz de riesgo</ExternalLink> },
        { week: '', lecture: '09', date: 'Sáb 19, Abr 2025', description: <CustomLink href="ti3v34/lectura09">Tipos de vulnerabilidades según activos TI e identificación de riesgos</CustomLink>  },
        { week: '07', lecture: '10', date: 'Sáb 26, Abr 2025', description: <CustomLink href="ti3v34/lectura10">Matriz de Riesgo y políticas de prevención de riesgos</CustomLink> },
        { week: '08', lecture: '11', date: 'Sáb 03, May 2025', description: <CustomLink href="ti3v34/lectura11">Controles de mitigación y de riesgos y mejoras tecnológicas ante desastres</CustomLink> },
    ],
}