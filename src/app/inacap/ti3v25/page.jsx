'use client'

import React, { useEffect, useState } from 'react';
import ClassCard from '@/components/ClassCard'; 
import LectureCard from '@/components/LectureCard'; 
import EvaluationCard from '@/components/EvaluationCard';
import ProfessorCard from '@/components/ProfessorCard';
import UnitCard from '@/components/UnitCard';
import styles from'@/styles/Asignature.module.css';
import CustomLink from '@/components/CustomLink';
import ExternalLink from '@/components/ExternalLink';
import EmphText from '@/components/EmphText';

export default function Ti3v25() {
    // Estado para controlar la vista responsiva
    const [isMobile, setIsMobile] = useState(false);

    // Efecto para detectar el tamaño de la pantalla
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        // Configurar tamaño inicial
        handleResize();
        
        // Agregar listener para cambios de tamaño
        window.addEventListener('resize', handleResize);
        
        // Limpiar listener al desmontar
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const professorData = {
        name: "Rafael Aderito Romero Sanabria",
        email: "rafael.romero03@inacapmail.cl"
    };
    const unitsData = [
        { unit: '1', description: 'Introducción a UML' },
        { unit: '2', description: 'Paradigma 4+1' },
        { unit: '3', description: 'Diagramando procesos de negocios' },
    ];
    const evaluationsData = [
        { 
            evaluationNumber: 1, 
            date: 'Dom 01, Sep 2024', 
            weighting: '20%', 
            description: <ExternalLink href='/inacap/ti3v25/docs/informe01.pdf'>Informe 01</ExternalLink> , 
            quickGuide: ''
        },
        { 
            evaluationNumber: 2, 
            date: 'Sáb 05, Oct 2024', 
            weighting: '35%', 
            description: <ExternalLink href='/inacap/ti3v25/docs/informe02.pdf'>Informe 02</ExternalLink>, 
            quickGuide: ''
        },
        { 
            evaluationNumber: 3, 
            date: 'Mié 16, Oct 2024', 
            weighting: '35%', 
            description: <ExternalLink href='/inacap/ti3v25/docs/informe03.pdf'>Informe 03</ExternalLink>, 
            quickGuide: ''
        },
        { 
            evaluationNumber: 4, 
            date: 'Mié 16, Oct 2024', 
            weighting: '10%', 
            description: <CustomLink href='ti3v25/controles'>Promedio Controles</CustomLink>, 
            quickGuide: ''
        },
        
    ];
    const classData = [
        { week: '01', class: '01', date: 'Mié 14, Ago 2024', description: <ExternalLink href='/inacap/ti3v25/docs/clase01.pdf'>Requerimientos del Software</ExternalLink> },
        { week: '02', class: '02', date: 'Mié 21, Ago 2024', description: <ExternalLink href='/inacap/ti3v25/docs/clase02.pdf'>Casos de Uso</ExternalLink> },
        { week: '03', class: '03', date: 'Mié 28, Ago 2024', description: <>
            <ExternalLink href='/inacap/ti3v25/docs/clase03a.pdf'>- Diagrama de Clases</ExternalLink><br/> 
            <ExternalLink href='/inacap/ti3v25/docs/clase03b.pdf'>- Diagrama de Flujo</ExternalLink><br/>
            <ExternalLink href='/inacap/ti3v25/docs/clase03c.pdf'>- Tablero Kanban</ExternalLink><br/>
            <ExternalLink href='/inacap/ti3v25/docs/clase03d.pdf'>- Prototipos</ExternalLink>
            </>
        },
        { week: '04', class: '04', date: 'Mié 04, Sep 2024', description: <>
            <ExternalLink href='/inacap/ti3v25/docs/clase04a.pdf'>- Paradigma 4+1</ExternalLink><br/>
            <ExternalLink href='/inacap/ti3v25/docs/clase04b.pdf'>- 4+1: Vista Lógica</ExternalLink>
            </>
        },
        { week: '05', class: '05', date: 'Mié 11, Sep 2024', description: <del>Suspensión Actividades</del> },
        { week: '06', class: '06', date: 'Mié 25, Sep 2024', description: <>
            <ExternalLink href='/inacap/ti3v25/docs/clase06a.pdf'>- 4+1: Vista Desarrollo</ExternalLink><br/>
            <ExternalLink href='/inacap/ti3v25/docs/clase06b.pdf'>- 4+1: Vista Procesos</ExternalLink>
            </>
        },
        { week: '07', class: '07', date: 'Mié 02, Oct 2024', description: <>
            <ExternalLink href='/inacap/ti3v25/docs/clase07a.pdf'>- 4+1: Vista Física</ExternalLink><br/>
            <ExternalLink href='/inacap/ti3v25/docs/clase07b.pdf'>- 4+1: Vista Escenario</ExternalLink>
            </>
        },
        { week: '08', class: '08', date: 'Mié 09, Oct 2024', description: <ExternalLink href='/inacap/ti3v25/docs/clase08.pdf'>BPMN y Modelo Canvas</ExternalLink> },
        { week: '09', class: '09', date: 'Mié 16, Oct 2024', description: 'Consultas Informe 03' },

    ];
    const lectureData = [
        { week: '01', lecture: '01', date: 'Sáb 17, Ago 2024', description: <CustomLink href='ti3v25/lectura01'>Toma de requerimientos</CustomLink> },
        { week: '', lecture: '02', date: 'Sáb 17, Ago 2024', description: 'Análisis de requerimientos' },
        { week: '02', lecture: '03', date: 'Sáb 24, Ago 2024', description: <CustomLink href='ti3v25/lectura03'>Casos de Uso</CustomLink> },
        { week: '', lecture: '04', date: 'Sáb 24, Ago 2024', description: <CustomLink href='ti3v25/lectura04'>Diagramas de base de datos</CustomLink> },
        { week: '03', lecture: '05', date: 'Sáb 31, Ago 2024', description: <CustomLink href='ti3v25/lectura05'>Diagramas de flujo</CustomLink> },
        { week: '', lecture: '06', date: 'Sáb 31, Ago 2024', description: <CustomLink href='ti3v25/lectura06'>Kanban</CustomLink> },
        { week: '04', lecture: '07', date: 'Sáb 07, Sep 2024', description: 'Paradigma 4+1' },
        { week: '', lecture: '08', date: 'Sáb 07, Sep 2024', description: 'Paradigma 4+1: Vista Lógica' },
        { week: '05', lecture: '09', date: 'Sáb 14, Sep 2024', description: 'Paradigma 4+1: Vista de Desarrollo' },
        { week: '', lecture: '10', date: 'Sáb 14, Sep 2024', description: 'Paradigma 4+1: Vista de Procesos' },
        { week: '06', lecture: '11', date: 'Sáb 28, Sep 2024', description: 'Paradigma 4+1: Vista Física' },
        { week: '', lecture: '12', date: 'Sáb 28, Sep 2024', description: 'Paradigma 4+1: Vista de Escenarios' },
        { week: '07', lecture: '13', date: 'Sáb 05, Oct 2024', description: 'Procesos de negocios para el modelamiento de soluciones informáticas' },
        { week: '', lecture: '14', date: 'Sáb 05, Oct 2024', description: 'Modelo CANVAS' },
        { week: '08', lecture: '15', date: 'Sáb 12, Oct 2024', description: 'Modelamiento de procesos de negocio y notación' },
        { week: '', lecture: '16', date: 'Sáb 12, Oct 2024', description: 'Análisis de factibilidad' },
        { week: '09', lecture: '17', date: 'Sáb 19, Oct 2024', description: 'Ciclo de vida de la gestión de procesos' },
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Modelamiento de Soluciones Informáticas</h1>
            <p className={styles.subheading}>TI3V25</p>
            <br />
            <p className={styles.description}>
                Asignatura práctica. Al finalizar, el estudiante será capaz de Elaborar diagramas UML, Evaluar y analizar requerimientos, Crear diseños de interfaz, Aplicar modelos de procesos de negocio (BPMN).
            </p>

            <div className={styles.cardContainer}>
                <div className={`${styles.card} ${styles.fullWidth}`}>
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