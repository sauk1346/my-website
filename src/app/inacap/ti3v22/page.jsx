'use client'

import React, { useEffect, useState } from 'react';
import ClassCard from '@/components/ClassCard'; 
import LectureCard from '@/components/LectureCard'; 
import EvaluationCard from '@/components/EvaluationCard';
import ProfessorCard from '@/components/ProfessorCard';
import UnitCard from '@/components/UnitCard';
import styles from'@/styles/Asignature.module.css';
import CustomLink from '@/components/CustomLink';

export default function Ti3v22() {
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
        name: "Eugenio Alberto Bravo García",
        email: "eugenio.bravo02@inacapmail.cl"
    };
    const unitsData = [
        { unit: '1', description: 'Gestión de objetos de esquema' },
        { unit: '2', description: 'Consultas avanzadas sobre una o más tablas' },
        { unit: '3', description: 'Seguridad y programación con PL/SQL' },
    ];
    const evaluationsData = [
        { 
            evaluationNumber: 1,
            date: 'Lun 26, Ago 2024',
            weighting: '20%',
            description: 'Evaluación 01',
            quickGuide: 'Guía 01' },
        { 
            evaluationNumber: 2, 
            date: 'Lun 23, Sep 2024', 
            weighting: '30%', 
            description: 'Evaluación 02', 
            quickGuide: ''
        },
        { 
            evaluationNumber: 3, 
            date: 'Mar 08, Oct 2024', 
            weighting: '40%', 
            description: 'Evaluación 03', 
            quickGuide: 'Guía 1, Guía 2'
        },
        { 
            evaluationNumber: 4, 
            date: 'Mar 14, Oct 2024', 
            weighting: '10%', 
            description: 'Promedio Evaluaciones', 
            quickGuide: ''
        },
    ];
    const classData = [
        { week: '01', class: '01', date: 'Lun 12, Ago 2024', description: 'Índices y Vistas' },
        { week: '', class: '02', date: 'Mar 13, Ago 2024', description: 'Funciones y Procedimientos' },
        { week: '02', class: '03', date: 'Lun 19, Ago 2024', description: 'Ejercicios (1)' },
        { week: '', class: '04', date: 'Mar 20, Ago 2024', description: 'Ejercicios (2)' },
        { week: '03', class: '05', date: 'Lun 26, Ago 2024', description: 'Evaluación 01' },
        { week: '', class: '06', date: 'Mar 27, Ago 2024', description: 'Revisión Evaluación 01' },
        { week: '04', class: '07', date: 'Lun 02, Sep 2024', description: 'Introducción a Oracle Database' },
        { week: '', class: '08', date: 'Mar 03, Sep 2024', description: 'Puntaje Adicional' },
        { week: '05', class: '09', date: 'Lun 09, Sep 2024', description: 'Consultas Complejas' },
        { week: '', class: '10', date: 'Mar 10, Sep 2024', description: 'Triggers, Tipos de Funciones' },
        { week: '06', class: '11', date: 'Lun 16, Sep 2024', description: 'Ejercicios' },
        { week: '07', class: '12', date: 'Lun 23, Sep 2024', description: 'Evaluación 02' },
        { week: '', class: '13', date: 'Mar 24, Sep 2024', description: 'Revisión Evaluación 02' },
        { week: '08', class: '14', date: 'Lun 30, Sep 2024', description: 'Ejercicios PL/SQL (1)' },
        { week: '', class: '15', date: 'Mar 01, Oct 2024', description: 'Ejercicios PL/SQL (2)' },
        { week: '09', class: '16', date: 'Lun 07, Oct 2024', description: 'Ejercicios PL/SQL (3)' },
        { week: '', class: '17', date: 'Mar 08, Oct 2024', description: 'Evaluación 03' },
    ];
    const lectureData = [
        { week: '01', lecture: '01', date: 'Sáb 17, Ago 2024', description: 'Introducción a Oracle Database' },
        { week: '', lecture: '02', date: 'Sáb 17, Ago 2024' , description: 'Consultas al diccionario de datos' },
        { week: '02', lecture: '03', date: 'Sáb 24, Ago 2024', description: 'Creación y utilización de vistas simples y complejas' },
        { week: '', lecture: '04', date: 'Sáb 24, Ago 2024', description: 'Creación y utilización de secuencias' },
        { week: '', lecture: '05', date: 'Sáb 24, Ago 2024', description: 'Creación y utilización de índices no únicos y sinónimos' },
        { week: '', lecture: '06', date: 'Sáb 24, Ago 2024', description: 'Creación de objetos de esquema' },
        { week: '03', lecture: '07', date: 'Sáb 31, Ago 2024', description: 'Funciones de una sola fila' },
        { week: '', lecture: '08', date: 'Sáb 31, Ago 2024', description: 'Funciones de conversión y expresiones condicionales' },
        { week: '04', lecture: '09', date: 'Sáb 09, Sep 2024', description: 'Funciones de grupo y agrupamiento de filas' },
        { week: '', lecture: '10', date: 'Sáb 09, Sep 2024', description: 'Consulta sobre múltiples tablas usando uniones y autouniones' },
        { week: '05', lecture: '11', date: 'Sáb 14, Sep 2024', description: 'Subconsultas de una sola fila y de varias filas' },
        { week: '', lecture: '12', date: 'Sáb 14, Sep 2024', description: 'Generación de consultas sobre tablas' },
        { week: '06', lecture: '13', date: 'Sáb 21, Sep 2024', description: 'Conceptos de seguridad aplicable a las bases de datos' },
        { week: '', lecture: '14', date: 'Sáb 21, Sep 2024', description: 'Creación de usuarios y roles' },
        { week: '07', lecture: '15', date: 'Sáb 28, Sep 2024', description: 'Privilegios de sistema y de objeto' },
        { week: '', lecture: '16', date: 'Sáb 28, Sep 2024', description: 'Creación de procedimientos PL/SQL' },
        { week: '08', lecture: '17', date: 'Sáb 05, Oct 2024', description: 'Creación de triggers' },
        { week: '', lecture: '18', date: 'Sáb 05, Oct 2024', description: 'Auditoría en la base de datos utilizando triggers' },
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Bases de Datos Estructuradas</h1>
            <p className={styles.subheading}>TI3V22</p>
            <br />
            <p className={styles.description}>
                Asignatura enfocada en habilidades prácticas más que en teoría pura, lo cual es crucial para aplicaciones reales en tecnologías de información y ciberseguridad.
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