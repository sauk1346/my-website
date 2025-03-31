
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
        { evaluationNumber: 1, date: 'Lun 24, Mar 2025', weighting: '15%', description: 'prueba mixta', quickGuide: '' },
        { evaluationNumber: <EmphText>2</EmphText>, date: <EmphText>Mié 09, Abr 2025</EmphText>, weighting: <EmphText>22.5%</EmphText>, description: <EmphText>informe 01</EmphText>, quickGuide: '' },
        { evaluationNumber: 3, date: 'Lun 07, May 2025', weighting: '26.25%', description: 'informe 02', quickGuide: '' },
        { evaluationNumber: 4, date: 'Cada Semana', weighting: '11.25%', description: <Link href='ti3v34/controles' className={styles.link}>promedio controles</Link>, quickGuide: '' },
        { evaluationNumber: 5, date: 'Lun 12, May 2025', weighting: '25%', description: 'examen', quickGuide: '' }
    ];
    const classData = [
        { week: '01', class: '01', date: 'Lun 10, Mar 2025', description: <Link href="ti3v34/clase01" className={styles.link}>Introducción Seguridad</Link> },
        { week: '', class: '02', date: 'Mar 11, Mar 2025', description: <Link href="ti3v34/clase02" className={styles.link}>Seguridad Información / Informática</Link> },
        { week: '', class: '03', date: 'Mié 12, Mar 2025', description: <Link href="ti3v34/clase03" className={styles.link}>Vulnerabilidad/Amenaza/Riesgo</Link> },
        { week: '02', class: '04', date: 'Lun 17, Mar 2025', description: <Link href="ti3v34/clase04" className={styles.link}>Eventos e Incidentes</Link> },
        { week: '', class: '05', date: 'Mar 18, Mar 2025', description: <Link href="ti3v34/clase05" className={styles.link}>SGSI y ISO27001</Link> },
        { week: '', class: '06', date: 'Mié 19, Mar 2025', description: "CIS Controls" },
        { week: '03', class: '07', date: 'Lun 24, Mar 2025', description: "Evaluación 01" },
        { week: '', class: '08', date: 'Mar 25, Mar 2025', description: <Link href="ti3v34/clase08" className={styles.link}>Ética y Legislación</Link> },
        { week: '', class: '09', date: 'Mié 26, Mar 2025', description: <Link href="ti3v34/clase09" className={styles.link}>Política Nacional de Ciberseguridad</Link> },
        { week: '04', class: '10', date: 'Lun 31, Mar 2025', description: "" },

    ];
    const lectureData = [
        { week: '01', lecture: '01', date: 'Sáb 15, Mar 2025', description: 'Seguridad de la Información' },
        { week: '', lecture: '02', date: 'Sáb 15, Mar 2025', description: 'Fundamentos de la seguridad de la información y seguridad informática' },
        { week: '02', lecture: '03', date: 'Sáb 22, Mar 2025', description: 'Framework de Seguridad ISO27001:2022 y CIS Controls' },
        { week: '03', lecture: '04', date: 'Sáb 29, Mar 2025', description: 'Ética y legislación' },
        { week: '', lecture: '05', date: 'Sáb 29, Mar 2025', description: 'Elementos normativos nacionales e internacionales y delitos informáticos' },
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
