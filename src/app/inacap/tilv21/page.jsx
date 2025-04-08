import React from 'react';
import ClassCard from '../../../components/ClassCard'; 
import LectureCard from '../../../components/LectureCard'; 
import EvaluationCard from '../../../components/EvaluationCard';
import ProfessorCard from '../../../components/ProfessorCard';
import UnitCard from '../../../components/UnitCard';
import styles from'../../../styles/Ti3v32.module.css';
import Link from 'next/link';
import EmphText from '../../../components/EmphText';

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
        { evaluationNumber: <EmphText>1</EmphText> , date: <EmphText>Mié 09, Abr 2025</EmphText>, weighting: <EmphText>20%</EmphText>, description: <EmphText>Prueba</EmphText>, quickGuide: '' },
        { evaluationNumber: 2, date: 'Lun 21, Abr 2025', weighting: '30%', description: 'informe 01', quickGuide: '' },
        { evaluationNumber: 3, date: 'Lun 05, May 2025', weighting: '35%', description: 'informe 02', quickGuide: '' },
        { evaluationNumber: 4, date: 'Mié 07, May 2025', weighting: '15%', description: <Link href='tilv21/controles' className={styles.link}>promedio controles</Link>, quickGuide: '' },

    ];
    const lectureData = [
        { week: '01', lecture: '01', date: 'Sáb 15, Mar 2025', description: <Link href='tilv21/lectura01' className={styles.link}>Conceptos básicos en el desarrollo de software</Link>  },
        { week: '', lecture: '02', date: 'Sáb 15, Mar 2025', description: <Link href='tilv21/lectura02' className={styles.link}>Requisitos y calidad de software según Estándar ISO/IEC 25000</Link> },
        { week: '02', lecture: '03', date: 'Sáb 22, Mar 2025', description: <Link href='tilv21/lectura03' className={styles.link}>Estándares de testing, basados en normas y estándares de la industria del software</Link> },
        { week: '03', lecture: '04', date: 'Sáb 29, Mar 2025', description: <Link href='tilv21/lectura04' className={styles.link}>Síntesis de la Unidad</Link> },
        { week: '04', lecture: '05', date: 'Sáb 05, Abr 2025', description: 'Técnicas y herramientas de testing' },
        { week: '', lecture: '06', date: 'Sáb 05, Abr 2025', description: 'Alcances y definiciones de los tipos de testing en el desarrollo de sorftware' },
        { week: '05', lecture: '07', date: 'Sáb 12, Abr 2025', description: 'Cómo detectar la complejidad del testing' },
        { week: '', lecture: '08', date: 'Sáb 12, Abr 2025', description: 'Soluciones a problemas y criterios de factibilidad con técnicas de testing' },

        
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
