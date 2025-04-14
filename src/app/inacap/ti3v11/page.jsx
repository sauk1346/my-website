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

export default function Ti3v11() {
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
        name: "Luis Alejandro Yañez Carreño",
        email: "luyanez.profesor@gmail.com"
    };
    const unitsData = [
        { unit: '1', description: 'Problemas y Representación de Soluciones' },
        { unit: '2', description: 'Estructuras de Decisión. Bucles y funciones de lenguaje Python' },
        { unit: '3', description: 'Colecciones y librerías en Python' },
        { unit: '4', description: 'Metodologías de Desarrollo Seguro, considerando SAMM y SDL' }
    ];
    const evaluationsData = [
        { 
            evaluationNumber: 1,
            date: 'Jue 06, Jun 2024', 
            weighting: '20%', 
            description: <Link href='ti3v11/eval01' className={styles.link}>Evaluación 01</Link>, 
            quickGuide: '', 
        },
        { 
            evaluationNumber: 2, 
            date: 'Mié 10, Jul 2024', 
            weighting: '35%', 
            description: <Link href='ti3v11/eval02' className={styles.link}>Evaluación 02</Link>, 
            quickGuide: <><Link href='ti3v11/guia21' className={styles.link}>guía 01</Link>, <Link href='ti3v11/guia22' className={styles.link}>guía 02</Link></>
        },
        { 
            evaluationNumber: 3, 
            date: 'Mar 23, Jul 2024', 
            weighting: '35%', 
            description: <a href="/ti3v11/docs/eval03_sol.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>Informe SAMM y SDL</a>, 
            quickGuide: '' 
        },
        { 
            evaluationNumber: 4, 
            date: 'Jue 25, Jul 2024', 
            weighting: '10%', 
            description: <Link href='ti3v11/controles' className={styles.link}>Promedio Controles</Link>, 
            quickGuide: '' 
        },
    ];
    const classData = [
        { week: '01', class: '01', date: 'Mié 22, May 2024', description: <Link href='ti3v11/clase01' className={styles.link}>Pseudocódigo, Diagrama de Flujo</Link>  },
        { week: '', class: '02', date: 'Jue 23, May 2024', description: <Link href='ti3v11/clase02' className={styles.link}>Variables, Condiciones, Bucles</Link> },
        { week: '02', class: '03', date: 'Mar 28, May 2024', description: <Link href='ti3v11/clase03' className={styles.link}>Condicionales y Lógica Booleana</Link> },
        { week: '', class: '04', date: 'Mié 29, May 2024', description: <Link href='ti3v11/clase04' className={styles.link}>Introducción a PSeInt</Link> },
        { week: '', class: '05', date: 'Jue 30, May 2024', description: <Link href='ti3v11/clase05' className={styles.link}>Ejercicios con Bucles 01</Link> },
        { week: '03', class: '06', date: 'Mar 04, Jun 2024', description: <Link href='ti3v11/clase06' className={styles.link}>Ejercicios con Bucles 02</Link> },
        { week: '', class: '07', date: 'Mié 05, Jun 2024', description: <Link href='ti3v11/clase07' className={styles.link}>Ejercicios con Bucles 03</Link> },
        { week: '', class: '08', date: 'Jue 06, Jun 2024', description: <Link href='ti3v11/eval01' className={styles.link}>Evaluación 01</Link> },
        { week: '04', class: '09', date: 'Mar 11, Jun 2024', description: <Link href='ti3v11/clase09' className={styles.link}>Introducción a Python</Link> },
        { week: '', class: '10', date: 'Mié 12, Jun 2024', description: <Link href='ti3v11/clase10' className={styles.link}>Intrucciones if(), while()</Link> },
        { week: '', class: '11', date: 'Jue 13, Jun 2024', description: <span style={{textDecoration: 'line-through'}}>Suspensión clases: lluvia</span> },
        { week: '05', class: '12', date: 'Mar 18, Jun 2024', description: <Link href='ti3v11/clase12' className={styles.link}>Instrucción for(), Ejercicios, Tarea</Link> },
        { week: '06', class: '13', date: 'Mar 25, Jun 2024', description: <Link href='ti3v11/clase13' className={styles.link}>Revisión Tarea, Listas, Ejercicios</Link> },
        { week: '', class: '14', date: 'Mié 26, Jun 2024', description: <Link href='ti3v11/clase14' className={styles.link}>Ejercicios</Link> },
        { week: '', class: '15', date: 'Jue 27, Jun 2024', description: <Link href='ti3v11/clase15' className={styles.link}>Tuplas, Ejercicios</Link> },
        { week: '07', class: '16', date: 'Mar 02, Jul 2024', description: <Link href='ti3v11/clase16' className={styles.link}>Diccionarios, Ejercicios</Link> },
        { week: '', class: '17', date: 'Mié 03, Jul 2024', description: <Link href='ti3v11/clase17' className={styles.link}>Ejercicio Estudiantes</Link> },
        { week: '', class: '18', date: 'Jue 04, Jul 2024', description: <Link href='ti3v11/clase18' className={styles.link}>Funciones</Link> },
        { week: '08', class: '19', date: 'Mar 09, Jul 2024', description: <Link href='ti3v11/clase19' className={styles.link}>Ejercicios con funciones</Link> },
        { week: '', class: '20', date: 'Mié 10, Jul 2024', description: <Link href='ti3v11/eval02' className={styles.link}>Evaluación 02: Primera parte</Link> },
        { week: '', class: '21', date: 'Jue 11, Jul 2024', description: <Link href='ti3v11/eval02' className={styles.link}>Evaluación 02: Segunda parte</Link> },
        { week: '', class: '22', date: 'Vie 12, Jul 2024', description: <Link href='ti3v11/clase22' className={styles.link}>Clase Recuperativa</Link> },
        { week: '09', class: '23', date: 'Mié 17, Jul 2024', description: <Link href='ti3v11/clase23' className={styles.link}>Desarrollo Seguro</Link> },
        { week: '', class: '24', date: 'Jue 18, Jul 2024', description: <Link href='ti3v11/clase24' className={styles.link}>Encriptación</Link> },
        { week: '10', class: '25', date: 'Mar 23, Jul 2024', description: <a href="/ti3v11/docs/eval03_sol.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>Informe SAMM y SDL</a> },


    ];
    const lectureData = [
        { week: '01', lecture: '01', date: 'Sáb 25, May 2024', description: <Link href='ti3v11/lectura01' className={styles.link}>El alcance de una problemática</Link> },
        { week: '', lecture: '02', date: 'Sáb 25, May 2024', description: <Link href='ti3v11/lectura02' className={styles.link}>Métodos para la resolución de problemas</Link> },
        { week: '02', lecture: '03', date: 'Sáb 01, Jun 2024', description: <Link href='ti3v11/lectura03' className={styles.link}>Diagrama de flujo de datos</Link> },
        { week: '', lecture: '04', date: 'Sáb 01, Jun 2024', description: <Link href='ti3v11/lectura04' className={styles.link}>Validación de la solución</Link> },
        { week: '03', lecture: '05', date: 'Sáb 08, Jun 2024', description: <Link href='ti3v11/lectura05' className={styles.link}>Python: Estructura de desición y bucles</Link> },
        { week: '04', lecture: '06', date: 'Sáb 15, Jun 2024', description: <Link href='ti3v11/lectura06' className={styles.link}>Python: Tipos de datos y variables</Link> },
        { week: '', lecture: '07', date: 'Sáb 15, Jun 2024', description: <Link href='ti3v11/lectura07' className={styles.link}>Python: Sentencias básicas en la resolución de problemas</Link> },
        { week: '05', lecture: '08', date: 'Sáb 22, Jun 2024', description: <Link href='ti3v11/lectura08' className={styles.link}>La lógica en la Programación Python</Link> },
        { week: '06', lecture: '09', date: 'Sáb 29, Jun 2024', description: <Link href='ti3v11/lectura09' className={styles.link}>Listas, tuplas y diccionarios seguros</Link> },
        { week: '07', lecture: '10', date: 'Sáb 06, Jul 2024', description: <Link href='ti3v11/lectura10' className={styles.link}>Procedimientos para la manipulación de datos</Link> },
        { week: '', lecture: '11', date: 'Sáb 06, Jul 2024', description: <Link href='ti3v11/lectura11' className={styles.link}>Mitigación del riesgo y las vulnerabilidades</Link> },
        { week: '08', lecture: '12', date: 'Sáb 13, Jul 2024', description: <Link href='ti3v11/lectura12' className={styles.link}>Librerías externas y seguras</Link> },
        { week: '', lecture: '13', date: 'Sáb 13, Jul 2024', description: <Link href='ti3v11/lectura13' className={styles.link}>Script con jerarquía de excepciones</Link> },
        
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Introducción a la Programación Segura</h1>
            <p className={styles.subheading}>TI3V11</p>
            <br />
            <p className={styles.description}>
                Asignatura de tipo práctico. Al finalizar, el estudiante conoceŕa: Fundamentos de Python, Estructuras de Control y Decisión, Manejo de almacenamiento de datos y uso de librerías asociadas a seguridad informática.
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