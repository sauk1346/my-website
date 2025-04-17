
import React from 'react';
import ClassCard from '../../../components/ClassCard'; 
import LectureCard from '../../../components/LectureCard'; 
import EvaluationCard from '../../../components/EvaluationCard';
import ProfessorCard from '../../../components/ProfessorCard';
import UnitCard from '../../../components/UnitCard';
import styles from'../../../styles/Ti3v32.module.css';
import Link from 'next/link';
import EmphText from '../../../components/EmphText';

export default function Ti3V34() {


    const professorData = {
        name: "Sergio Andrés Muñoz Sasso",
        email: "sergio.munoz03@inacapmail.cl"
    };
    const unitsData = [
        { unit: '1', description: 'Seguridad de la Información' },
        { unit: '2', description: 'Ética y legislación' },
        { unit: '3', description: 'Evaluación de Vulnerabilidades y Matriz de Riesgo' },
    ];
    const evaluationsData = [
        { evaluationNumber: 1, date: 'Lun 24, Mar 2025', weighting: '15%', description: <Link href="ti3v34/eval01" className={styles.link}>Evaluación 01</Link>, quickGuide: '' },
        { evaluationNumber: 2, date: 'Mié 09, Abr 2025', weighting: '22.5%', description: <a href="/ti3v34/docs/informe01.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>Informe 01</a>, quickGuide: '' },
        { evaluationNumber: <EmphText>3</EmphText>, date: <EmphText>Lun 07, May 2025</EmphText>, weighting: <EmphText>26.25%</EmphText>, description: <EmphText>Informe 02</EmphText>, quickGuide: '' },
        { evaluationNumber: 4, date: 'Cada Semana', weighting: '11.25%', description: <Link href='ti3v34/controles' className={styles.link}>Promedio Controles</Link>, quickGuide: '' },
        { evaluationNumber: 5, date: 'Lun 12, May 2025', weighting: '25%', description: 'Examen', quickGuide: '' }
    ];
    const classData = [
        { week: '01', class: '01', date: 'Lun 10, Mar 2025', description: <Link href="ti3v34/clase01" className={styles.link}>Introducción Seguridad</Link> },
        { week: '', class: '02', date: 'Mar 11, Mar 2025', description: <Link href="ti3v34/clase02" className={styles.link}>Seguridad Información / Informática</Link> },
        { week: '', class: '03', date: 'Mié 12, Mar 2025', description: <Link href="ti3v34/clase03" className={styles.link}>Vulnerabilidad/Amenaza/Riesgo</Link> },
        { week: '02', class: '04', date: 'Lun 17, Mar 2025', description: <Link href="ti3v34/clase04" className={styles.link}>Eventos e Incidentes</Link> },
        { week: '', class: '05', date: 'Mar 18, Mar 2025', description: <Link href="ti3v34/clase05" className={styles.link}>SGSI y ISO27001</Link> },
        { week: '', class: '06', date: 'Mié 19, Mar 2025', description: "CIS Controls" },
        { week: '03', class: '07', date: 'Lun 24, Mar 2025', description: <Link href="ti3v34/eval01" className={styles.link}>Evaluación 01</Link> },
        { week: '', class: '08', date: 'Mar 25, Mar 2025', description: <Link href="ti3v34/clase08" className={styles.link}>Ética y Legislación</Link> },
        { week: '', class: '09', date: 'Mié 26, Mar 2025', description: <Link href="ti3v34/clase09" className={styles.link}>Política Nacional de Ciberseguridad</Link> },
        { week: '04', class: '10', date: 'Lun 31, Mar 2025', description: <Link href="ti3v34/clase10" className={styles.link}>PCI DSS</Link> },
        { week: '', class: '11', date: 'Mar 01, Abr 2025', description: <em>No asistí a clases</em> },
        { week: '', class: '12', date: 'Mié 02, Abr 2025', description: <Link href="ti3v34/clase12" className={styles.link}>Delitos Informáticos</Link> },
        { week: '05', class: '13', date: 'Lun 07, Abr 2025', description: "Avance informe en clases 01" },
        { week: '', class: '14', date: 'Mar 08, Abr 2025', description: "Avance informe en clases 02" },
        { week: '', class: '15', date: 'Mié 09, Abr 2025', description: <a href="/ti3v34/docs/informe01.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>Entrega Informe 01</a> },
        { week: '06', class: '16', date: 'Lun 14, Abr 2025', description: <Link href="ti3v34/clase16" className={styles.link}>Tipos de Vulnerabilidades (1)</Link> },
        { week: '', class: '17', date: 'Mar 15, Abr 2025', description: <Link href="ti3v34/clase17" className={styles.link}>Tipos de Vulnerabilidades (2)</Link> },
        { week: '', class: '18', date: 'Mié 16, Abr 2025', description: <Link href="ti3v34/clase18" className={styles.link}>Planificación de Recuperación ante Desastres (DRP)</Link> },
        { week: '07', class: '19', date: 'Lun 21, Abr 2025', description: '' },
        { week: '', class: '20', date: 'Mar 22, Abr 2025', description: '' },
        { week: '', class: '21', date: 'Mié 23, Abr 2025', description: '' },

    ];
    const lectureData = [
        { week: '01', lecture: '01', date: 'Sáb 15, Mar 2025', description: <a href="/ti3v34/docs/lectura01.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>Seguridad de la Información</a> },
        { week: '', lecture: '02', date: 'Sáb 15, Mar 2025', description: <Link href="ti3v34/lectura02" className={styles.link}>Fundamentos de la seguridad de la información y seguridad informática</Link> },
        { week: '02', lecture: '03', date: 'Sáb 22, Mar 2025', description: <Link href="ti3v34/lectura03" className={styles.link}>Framework de Seguridad ISO27001:2022 y CIS Controls</Link> },
        { week: '03', lecture: '04', date: 'Sáb 29, Mar 2025', description: <a href="/ti3v34/docs/lectura04.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>Ética y legislación</a> },
        { week: '', lecture: '05', date: 'Sáb 29, Mar 2025', description: <Link href="ti3v34/lectura05" className={styles.link}>Elementos normativos nacionales e internacionales y delitos informáticos</Link> },
        { week: '04', lecture: '06', date: 'Sáb 05, Abr 2025', description: <Link href="ti3v34/lectura06" className={styles.link}>Payment Card Industry Data Security Standard y Convenio de Budapest</Link> },
        { week: '05', lecture: '07', date: 'Sáb 12, Abr 2025', description: <Link href="ti3v34/lectura07" className={styles.link}>Ley 19.628 (propuesta Ley LPDP)</Link> },
        { week: '06', lecture: '08', date: 'Sáb 19, Abr 2025', description: 'Evaluación de vulnerabilidades y matriz de riesgo' },
        { week: '', lecture: '09', date: 'Sáb 19, Abr 2025', description: 'Tipos de vulnerabilidades según activos TI e identificación de riesgos' },
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Fundamentos de Seguridad de la Información</h1>
            <p className={styles.subheading}>TI3V34</p>
            <br />
            <p className={styles.description}>
                Fundamentos de Seguridad de la Información es una asignatura lectiva, del área formativa de Tecnologías de Información y Ciberseguridad, dictada en modalidad presencial con componente online. Al finalizar, el estudiante será capaz de evaluar y mitigar riesgos en base a detección de vulnerabilidades en el marco de la ley y normas vigentes, considerando la Ética y Ciudadanía. 
            </p>

            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <ProfessorCard professorData={professorData} />
                </div>

                <div className={styles.cardGroup}>
                    <div className={styles.card}>
                        <UnitCard unitsData={unitsData} />
                    </div>
                    <div className={styles.card}>
                        <EvaluationCard evaluationsData={evaluationsData} />
                    </div>
                </div>

                <div className={styles.cardGroup}>
                    <div className={styles.card}>
                        <ClassCard classData={classData} />
                    </div>
                    <div className={styles.card}>
                        <LectureCard lectureData={lectureData} />
                    </div>
                </div>
            </div>
        </div>
    );
}
