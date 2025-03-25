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
        { evaluationNumber: 4, date: 'Cada Semana', weighting: '11.25%', description: 'promedio controles', quickGuide: '' },
        { evaluationNumber: 5, date: 'Lun 12, May 2025', weighting: '25%', description: 'examen', quickGuide: '' }
    ];
    const classData = [
        { week: '01', class: '01', date: 'Lun 10, Mar \'25', description: "Introducción Seguridad" },
        { week: '', class: '02', date: 'Mar 11, Mar \'25', description: "Activos de Información", isSuspended: true },
        { week: '', class: '03', date: 'Mié 12, Mar \'25', description: "Mejoramiento Continuo (Ciclo Deming)" },
        { week: '02', class: '04', date: 'Lun 17, Mar \'25', description: "" },
    ];
    const lectureData = [
        { week: '01', lecture: '01', date: 'Sáb 22, Mar \'25', description: 'Seguridad de la Información' }
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
