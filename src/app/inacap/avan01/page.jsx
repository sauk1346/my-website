import React from 'react';
import ClassCard from '@/components/ClassCard'; 
import LectureCard from '@/components/LectureCard'; 
import EvaluationCard from '@/components/EvaluationCard';
import ProfessorCard from '@/components/ProfessorCard';
import UnitCard from '@/components/UnitCard';
import styles from'@/styles/Asignature.module.css';
import CustomLink from '@/components/CustomLink';
import EmphText from '@/components/EmphText';
import ExternalLink from '@/components/ExternalLink';

export default function Tilv21() {
    
    const professorData = {
        name: "Carlos Guillermo Thomas Ramos",
        email: "carlos.thomas02@inacapmail.cl"
    };
    const unitsData = [
        { unit: '1', description: 'Industria 4.0 y sostenibilidad' },
        { unit: '2', description: 'Funcionamiento de las organizaciones actuales' },
        { unit: '3', description: 'Proceso administrativo de las organizaciones' },
    ];
    const evaluationsData = [
        { 
            evaluationNumber: 1,
            date: 'Sáb 31, Ago 2024',
            weighting: '20% * 75%', 
            description: 'Evaluación 01', 
            quickGuide: ''
        },
        { 
            evaluationNumber: 2,
            date: 'Dom 22, Sep 2024',
            weighting: '40% * 75%', 
            description: 'Informe 01', 
            quickGuide: ''
        },
        { 
            evaluationNumber: 3,
            date: 'Vie 11, Oct 2024',
            weighting: '30% * 75%', 
            description: 'Informe Pitch, PPT', 
            quickGuide: ''
        },
        { 
            evaluationNumber: 4,
            date: 'Vie 11, Oct 2024',
            weighting: '10% * 75%', 
            description: 'Promedio Controles', 
            quickGuide: ''
        },
        { 
            evaluationNumber: 5,
            date: 'Sáb 19, Oct 2024',
            weighting: '25%', 
            description: 'Examen (obligatorio)', 
            quickGuide: ''
        },
        

    ];
    const lectureData = [
        { week: '01', lecture: '01', date: 'Sáb 24, Ago 2024', description: 'La evolución de las organizaciones'  },
        { week: '', lecture: '02', date: 'Sáb 24, Ago 2024', description: 'Los padres de la administración'  },
        { week: '', lecture: '03', date: 'Sáb 24, Ago 2024', description: 'Administración: Conceptos, definiciones e historia'  },
        { week: '', lecture: '04', date: 'Sáb 24, Ago 2024', description: 'Dinámicas transformacionales y tendencias de las organizaciones'  },
        { week: '02', lecture: '05', date: 'Sáb 31, Ago 2024', description: 'Tendencias, Clusters, Hub y Núcleos de trabajo'  },
        { week: '', lecture: '06', date: 'Sáb 31, Ago 2024', description: 'Sostenibilidad y las ODS'  },
        { week: '03', lecture: '07', date: 'Sáb 07, Sep 2024', description: 'Personalidad jurídica de nuevos emprendimientos y organizaciones existentes'  },
        { week: '', lecture: '08', date: 'Sáb 07, Sep 2024', description: 'Ciclos de vida de los proyectos'  },
        { week: '04', lecture: '09', date: 'Sáb 14, Sep 2024', description: 'Áreas funcionales: gestión de personas y contabilidad y finanzas'  },
        { week: '05', lecture: '10', date: 'Sáb 21, Sep 2024', description: 'Funcionamiento de las organizaciones actuales'  },
        { week: '', lecture: '11', date: 'Sáb 21, Sep 2024', description: 'Evaluación de gestión a través de indicadores'  },
        { week: '06', lecture: '12', date: 'Sáb 28, Sep 2024', description: 'Planificación'  },
        { week: '', lecture: '13', date: 'Sáb 28, Sep 2024', description: 'Organización: tipos, autoridad y poder'  },
        { week: '07', lecture: '14', date: 'Sáb 05, Oct 2024', description: 'Dirección'  },
        { week: '', lecture: '15', date: 'Sáb 05, Oct 2024', description: 'Control'  },
        { week: '', lecture: '16', date: 'Sáb 05, Oct 2024', description: 'Herramientas básicas de análisis de gestión'  }       
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Administración</h1>
            <p className={styles.subheading}>AVAN01</p>
            <br />
            <p className={styles.description}>
                Asignatura lectiva, dictada en modalidad online. Al finalizar el estudiante será capaz de: Identificar las organizaciones o proyectos del sector productivo y servicios, según las tendencias y dinámicas transformacionales, Reconocer el funcionamiento operativo asociado a las áreas funcionales de una organización o proyecto.  
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
