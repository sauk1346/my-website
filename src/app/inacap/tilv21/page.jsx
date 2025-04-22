import React from 'react';
import ClassCard from '@/components/ClassCard'; 
import LectureCard from '@/components/LectureCard'; 
import EvaluationCard from '@/components/EvaluationCard';
import ProfessorCard from '@/components/ProfessorCard';
import UnitCard from '@/components/UnitCard';
import styles from'@/styles/Asignature.module.css';
import CustomLink from '@/components/CustomLink';
import EmphText from '@/components/EmphText';

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
        { 
            evaluationNumber: 1,
            date: 'Mié 09, Abr 2025',
            weighting: '20%', 
            description: <CustomLink href='tilv21/eval01'>Evaluación 01</CustomLink>, 
            quickGuide: ''
        },
        { 
            evaluationNumber: <EmphText>2</EmphText>,
            date: <EmphText>Mié 30, Abr 2025</EmphText>, 
            weighting: <EmphText>30%</EmphText>, 
            description: <EmphText>informe 01</EmphText>, 
            quickGuide: '' 
        },
        { evaluationNumber: 3, date: 'Lun 05, May 2025', weighting: '35%', description: 'informe 02', quickGuide: '' },
        { evaluationNumber: 4, date: 'Mié 07, May 2025', weighting: '15%', description: <CustomLink href='tilv21/controles'>promedio controles</CustomLink>, quickGuide: '' },

    ];
    const lectureData = [
        { week: '01', lecture: '01', date: 'Sáb 15, Mar 2025', description: <CustomLink href='tilv21/lectura01'>Conceptos básicos en el desarrollo de software</CustomLink>  },
        { week: '', lecture: '02', date: 'Sáb 15, Mar 2025', description: <CustomLink href='tilv21/lectura02'>Requisitos y calidad de software según Estándar ISO/IEC 25000</CustomLink> },
        { week: '02', lecture: '03', date: 'Sáb 22, Mar 2025', description: <CustomLink href='tilv21/lectura03'>Estándares de testing, basados en normas y estándares de la industria del software</CustomLink> },
        { week: '03', lecture: '04', date: 'Sáb 29, Mar 2025', description: <CustomLink href='tilv21/lectura04'>Síntesis de la Unidad</CustomLink> },
        { week: '04', lecture: '05', date: 'Sáb 05, Abr 2025', description: <CustomLink href='tilv21/lectura05'>Técnicas y herramientas de testing</CustomLink> },
        { week: '', lecture: '06', date: 'Sáb 05, Abr 2025', description: <CustomLink href='tilv21/lectura06'>Alcances y definiciones de los tipos de testing en el desarrollo de sorftware</CustomLink> },
        { week: '05', lecture: '07', date: 'Sáb 12, Abr 2025', description: <CustomLink href='tilv21/lectura07'>Cómo detectar la complejidad del testing</CustomLink> },
        { week: '', lecture: '08', date: 'Sáb 12, Abr 2025', description: <CustomLink href='tilv21/lectura08'>Soluciones a problemas y criterios de factibilidad con técnicas de testing</CustomLink> },
        { week: '06', lecture: '09', date: 'Sáb 19, Abr 2025', description: 'Síntesis de la Unidad' },

        
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
