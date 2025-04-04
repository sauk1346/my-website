'use client'

import React, { useEffect, useState } from 'react';
import ClassCard from '../../../components/ClassCard'; 
import LectureCard from '../../../components/LectureCard'; 
import EvaluationCard from '../../../components/EvaluationCard';
import ProfessorCard from '../../../components/ProfessorCard';
import UnitCard from '../../../components/UnitCard';
import styles from'../../../styles/Ti3v32.module.css';
import Link from 'next/link';
import EmphText from '../../../components/EmphText';

export default function Ti3V32() {
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
        { unit: '1', description: 'Introducción a las bases de datos no estructuradas' },
        { unit: '2', description: 'Operaciones esenciales con MongoDB' },
        { unit: '3', description: 'Búsqueda avanzada con MongoDB' },
        { unit: '4', description: 'Unidad integradora para evaluar la competencia' }
    ];
    const evaluationsData = [
        { evaluationNumber: 1, date: 'Mié 26, Mar 2025', weighting: '20%', description: <>MongoDB CRUD: <Link href='ti3v32/eval01a' className={styles.link}>Eval01-A</Link>, <Link href='ti3v32/eval01b' className={styles.link}>Eval01-B</Link> </>  , quickGuide: <Link href="ti3v32/guia01" className={styles.link}>Guía 01</Link> },
        { evaluationNumber: <EmphText>2</EmphText>, date: <EmphText>Mié 23, Abr 2025</EmphText>, weighting: <EmphText>40%</EmphText>, description: <EmphText>MongoDB Shell</EmphText>, quickGuide: <Link href='ti3v32/clase11' className={styles.link}>Guía 02</Link>},
        { evaluationNumber: 3, date: 'Mar 06, May 2025', weighting: '30%', description: '', quickGuide: '' },
        { evaluationNumber: 4, date: 'Mié 07, May 2025', weighting: '10%', description: 'Promedio Evaluaciones', quickGuide: '' },
    ];
    const classData = [
        { week: '01', class: '01', date: 'Lun 10, Mar 2025', description: <Link href="ti3v32/clase01" className={styles.link}>Introducción BD NoSQL</Link> },
        { week: '', class: '02', date: 'Mar 11, Mar 2025', description: <span style={{textDecoration: 'line-through'}}>Suspensión Clases</span>},
        { week: '', class: '03', date: 'Mié 12, Mar 2025', description: "Ejercicios CRUD"},
        { week: '02', class: '04', date: 'Lun 17, Mar 2025', description: <Link href="ti3v32/clase04" className={styles.link}>Ejercicios CRUD 02</Link> },
        { week: '', class: '05', date: 'Mar 18, Mar 2025', description: "Ejercicios CRUD 03" },
        { week: '', class: '06', date: 'Mié 19, Mar 2025', description: "Ejercicios CRUD 04" },
        { week: '03', class: '07', date: 'Lun 24, Mar 2025', description: <Link href='ti3v32/clase07' className={styles.link}>MongoDB Shell</Link> },
        { week: '', class: '08', date: 'Mar 25, Mar 2025', description: <Link href='ti3v32/clase08' className={styles.link}>Ejercicio con puntaje</Link> },
        { week: '', class: '09', date: 'Mié 26, Mar 2025', description: <> <Link href='ti3v32/eval01a' className={styles.link}>Eval01-A</Link>, <Link href='ti3v32/eval01b' className={styles.link}>Eval01-B</Link> </>},
        { week: '04', class: '10', date: 'Lun 31, Mar 2025', description: <Link href='ti3v32/clase10' className={styles.link}>Ejercicios MongoSh 01</Link> },
        { week: '', class: '11', date: 'Mar 01, Abr 2025', description: <Link href='ti3v32/clase11' className={styles.link}>Guía Práctica MongoSh 01</Link> },
        { week: '', class: '12', date: 'Mié 02, Abr 2025', description: <Link href='ti3v32/clase12' className={styles.link}>Guía Práctica MongoSh 02</Link>},
        { week: '05', class: '13', date: 'Lun 07, Abr 2025', description: ""},
        { week: '', class: '14', date: 'Mar 08, Abr 2025', description: ""},
        { week: '', class: '15', date: 'Mié 09, Abr 2025', description: ""},



    ];
    const lectureData = [
        { week: '01', lecture: '01', date: 'Sáb 15, Mar 2025', description: <Link href="ti3v32/lectura01" className={styles.link}>Introducción a las bases de datos no estructuradas</Link> },
        { week: '', lecture: '02', date: 'Sáb 15, Mar 2025', description: <Link href="ti3v32/lectura02" className={styles.link}>Bases de datos no estructuradas: características y tipos</Link> },
        { week: '02', lecture: '03', date: 'Sáb 22, Mar 2025', description: <Link href="ti3v32/lectura03" className={styles.link}>Elementos de las bases de datos no estructuradas documentales y características de Mongo DB</Link> },
        { week: '03', lecture: '04', date: 'Sáb 29, Mar 2025', description: 'Operaciones esenciales con MongoDB' },
        { week: '', lecture: '05', date: 'Sáb 29, Mar 2025', description: 'Etapas del proceso de instalación de MongoDB y principales comandos de gestión' },
        { week: '04', lecture: '06', date: 'Sáb 05, Abr 2025', description: 'Operaciones CRUD en documentos y subdocumentos' },
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Bases de Datos No Estructuradas</h1>
            <p className={styles.subheading}>TI3V32</p>
            <br />
            <p className={styles.description}>
                Bases de Datos no Estructuradas es una asignatura práctica, del área formativa de Tecnologías de Información y Ciberseguridad, dictada en modalidad presencial con componente online. Al finalizar, el estudiante será capaz de gestionar, manipular y consultar una base de datos no estructurada (NoSQL), considerando la Ética y Ciudadanía. Esta es una asignatura evaluativa, por lo que contempla una unidad final que tiene el objetivo de realizar una evaluación intermedia del Perfil de Egreso. (NoSQL)
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