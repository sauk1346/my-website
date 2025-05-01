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

export default function Ti3v23() {
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
        name: "José Luis Alberto Ramírez Ruiz",
        email: "jose.ramirez26@inacapmail.cl"
    };
    const unitsData = [
        { unit: '1', description: 'Fundamentos de Metodologías Ágiles' },
        { unit: '2', description: 'Metodología Ágil SCRUM' },
        { unit: '3', description: 'Desarrollo de Proyectos de TI aplicando SCRUM' },
    ];
    const evaluationsData = [
        { 
            evaluationNumber: 1, 
            date: 'Lun 04, Nov 2024', 
            weighting: '20\% * 75\%', 
            description: 'Evaluación 01', 
            quickGuide: ''
        },
        { 
            evaluationNumber: 2, 
            date: 'Vie 29, Nov 2024', 
            weighting: '35\% * 75\%', 
            description: <ExternalLink href='/inacap/ti3v23/docs/informe01.pdf'>Informe 01</ExternalLink>, 
            quickGuide: ''
        },
        { 
            evaluationNumber: 3, 
            date: 'Lun 09, Dic 2024', 
            weighting: '35\% * 75\%', 
            description: 'Evaluación 03', 
            quickGuide: ''
        },
        { 
            evaluationNumber: 4, 
            date: 'Lun 16, Dic 2024', 
            weighting: '10\% * 75\%', 
            description: 'Promedio Evaluaciones', 
            quickGuide: ''
        },
        { 
            evaluationNumber: 5, 
            date: 'Lun 16, Dic 2024', 
            weighting: '25\%', 
            description: 'Examen (obligatorio)', 
            quickGuide: ''
        },
    ];
    const classData = [
        { week: '01', class: '01', date: 'Lun 21, Oct 2024', description: <CustomLink href='ti3v23/clase01'>Introducción al Desarrollo Ágil</CustomLink> },
        { week: '02', class: '02', date: 'Lun 28, Oct 2024', description: <CustomLink href='ti3v23/clase02'>Pilares y Principios del Desarrollo Ágil</CustomLink> },
        { week: '03', class: '03', date: 'Lun 04, Nov 2024', description: <><CustomLink href='ti3v23/clase03'>Roles en Metodología SCRUM</CustomLink>, Evaluación 01</> },
        { week: '04', class: '04', date: 'Lun 11, Nov 2024', description: <CustomLink href='ti3v23/clase04'>Historias de Usuario</CustomLink> },
        { week: '05', class: '05', date: 'Lun 18, Nov 2024', description: <CustomLink href='ti3v23/clase05'>Proyecto Etapa 1</CustomLink> },
        { week: '06', class: '06', date: 'Lun 25, Nov 2024', description: <CustomLink href='ti3v23/clase06'>Tablero Kanban</CustomLink> },
        { week: '07', class: '07', date: 'Lun 02, Dic 2024', description: <CustomLink href='ti3v23/clase07'>Historias Perfectas</CustomLink> },
        { week: '08', class: '08', date: 'Lun 09, Dic 2024', description: 'Evaluación 03' },
        { week: '09', class: '09', date: 'Lun 16, Dic 2024', description: 'Examen' },

    ];
    const lectureData = [
        { week: '01', lecture: '01', date: 'Sáb 26, Oct 2024', description: <CustomLink href='ti3v23/lectura01'>Características de las Metodologías Ágiles</CustomLink> },
        { week: '', lecture: '02', date: 'Sáb 26, Oct 2024', description: <CustomLink href='ti3v23/lectura02'>Aplicaciones de las Metologías Ágiles</CustomLink> },
        { week: '02', lecture: '03', date: 'Sáb 02, Nov 2024', description: <CustomLink href='ti3v23/lectura03'>Selección Metodologías Ágiles</CustomLink> },
        { week: '', lecture: '04', date: 'Sáb 02, Nov 2024', description: <CustomLink href='ti3v23/lectura04'>Optimización de recursos</CustomLink> },
        { week: '03', lecture: '05', date: 'Sáb 09, Nov 2024', description: <CustomLink href='ti3v23/lectura05'>Levantamiento de requerimientos</CustomLink> },
        { week: '', lecture: '06', date: 'Sáb 09, Nov 2024', description: <CustomLink href='ti3v23/lectura06'>Roles y funciones en SCRUM</CustomLink> },
        { week: '04', lecture: '07', date: 'Sáb 16, Nov 2024', description: <CustomLink href='ti3v23/lectura07'>Planificación de sprint en SCRUM</CustomLink> },
        { week: '', lecture: '08', date: 'Sáb 16, Nov 2024', description: <CustomLink href='ti3v23/lectura08'>Metología Kanban</CustomLink> },
        { week: '05', lecture: '-', date: 'Sáb 23, Nov 2024', description: 'Repaso de los contenidos de la Unidad' },
        { week: '06', lecture: '09', date: 'Sáb 30, Nov 2024', description: <CustomLink href='ti3v23/lectura09'>Definición de entregables iniciales</CustomLink> },
        { week: '', lecture: '10', date: 'Sáb 30, Nov 2024', description: <CustomLink href='ti3v23/lectura10'>Reuniones de trabajo</CustomLink> },
        { week: '07', lecture: '11', date: 'Sáb 07, Dic 2024', description: <CustomLink href='ti3v23/lectura11'>Diagrama de Casos de Uso</CustomLink> },
        { week: '08', lecture: '12', date: 'Sáb 14, Dic 2024', description: <CustomLink href='ti3v23/lectura12'>Mockups</CustomLink> },
        { week: '', lecture: '13', date: 'Sáb 14, Dic 2024', description: <CustomLink href='ti3v23/lectura13'>Etapa de Cierre</CustomLink> },
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Metodología de Desarrollo Ágil</h1>
            <p className={styles.subheading}>TI3V23</p>
            <br />
            <p className={styles.description}>
                Asignatura lectiva, dictada en modalidad semipresencial. Al finalizar, el estudiante será capaz de implementar metodologías ágiles en proyectos de gran escala a través del uso de framework SCRUM, considerando el Trabajo Colaborativo y Comunicación.
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