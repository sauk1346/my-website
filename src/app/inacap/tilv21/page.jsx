import React from 'react';
import ClassCard from '../../../components/ClassCard'; 
import LectureCard from '../../../components/LectureCard'; 
import EvaluationCard from '../../../components/EvaluationCard';
import ProfessorCard from '../../../components/ProfessorCard';
import UnitCard from '../../../components/UnitCard';
import styles from'../../../styles/Ti3v32.module.css';

export default function Tilv21() {
    const professorData = {
        name: "Eduardo Andrés Barría Gallardo",
        email: "eduardo.barria03@inacapmail.cl"
    };
    const unitsData = [
        { unit: '1', description: 'Introducción y Fundamentos de Testing de Software' },
        { unit: '2', description: 'Técnicas de Testing' },
        { unit: '3', description: 'Gestión de Defectos, Combinación de Valores de Prueba y Exploración' },
    ];
    const evaluationsData = [
        { evaluationNumber: 1, date: 'Mié 02, Abr \'25', weighting: '20%', description: 'prueba mixta', quickGuide: '' },
        { evaluationNumber: 2, date: 'Lun 21, Abr \'25', weighting: '30%', description: 'informe 01', quickGuide: '' },
        { evaluationNumber: 3, date: 'Jue 07, May \'25', weighting: '35%', description: 'informe 02', quickGuide: '' },
        { evaluationNumber: 4, date: 'Cada Semana', weighting: '15%', description: 'promedio controles', quickGuide: '' },

    ];
    const lectureData = [
        { week: '01', lecture: '01', date: 'Sáb 22, Mar \'25', description: 'Conceptos básicos en el desarrollo de software' },
        { week: '', lecture: '02', date: 'Sáb 22, Mar \'25', description: 'Requisitos y calidad de software según Estándar ISO/IEC 25000' }
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Plan de Pruebas de Software</h1>
            <p className={styles.subheading}>TILV21</p>
            <br />
            <p className={styles.description}>
                Plan de Pruebas de Software es una asignatura práctica del área formativa de especialidad de Tecnologías de Información y Ciberseguridad, dictada en modalidad online. Al finalizar, el estudiante será capaz de garantizar la funcionalidad, seguridad y eficiencia en el desarrollo de software, considerando la Resolución de problemas, Innovación y Emprendimiento.  
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

                <div className={styles.cardGroup} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className={styles.card}>
                        <LectureCard lectureData={lectureData} />
                    </div>
                </div>
            </div>
        </div>
    );
}
