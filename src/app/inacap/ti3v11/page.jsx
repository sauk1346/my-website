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
            description: 'Evaluación 01' , 
            quickGuide: '', 
        },
        { 
            evaluationNumber: 2, 
            date: 'Mié 10, Jul 2024', 
            weighting: '35%', 
            description: 'Evaluación 02', 
            quickGuide: 'guía 01'
        },
        { 
            evaluationNumber: 3, 
            date: 'Mar 23, Jul 2024', 
            weighting: '35%', 
            description: 'Informe SAMM y SDL', 
            quickGuide: '' 
        },
        { 
            evaluationNumber: 4, 
            date: 'Jue 25, Jul 2024', 
            weighting: '10%', 
            description: 'Promedio Controles', 
            quickGuide: '' 
        },
    ];
    const classData = [
        { week: '01', class: '01', date: 'Mié 22, May 2024', description: 'Pseudocódigo, Diagrama de Flujo' },
        { week: '', class: '02', date: 'Jue 23, May 2024', description: 'Variables, Condiciones, Bucles' },
        { week: '02', class: '03', date: 'Mar 28, May 2024', description: 'Condicionales y Lógica Booleana' },
        { week: '', class: '04', date: 'Mié 29, May 2024', description: 'Introducción a PSeInt' },
        { week: '', class: '05', date: 'Jue 30, May 2024', description: 'Ejercicios con Bucles 01' },
        { week: '03', class: '06', date: 'Mar 04, Jun 2024', description: 'Ejercicios con Bucles 02' },
        { week: '', class: '07', date: 'Mié 05, Jun 2024', description: 'Ejercicios con Bucles 03' },
        { week: '', class: '08', date: 'Jue 06, Jun 2024', description: 'Evaluación 01' },
        { week: '04', class: '09', date: 'Mar 11, Jun 2024', description: 'Introducción a Python' },
        { week: '', class: '10', date: 'Mié 12, Jun 2024', description: 'Ejercicios. Intrucciones if(), while()' },
        { week: '', class: '11', date: 'Jue 13, Jun 2024', description: <span style={{textDecoration: 'line-through'}}>Suspensión clases: lluvia</span> },
        { week: '05', class: '12', date: 'Mar 18, Jun 2024', description: 'Instrucción for(), Ejercicios, Tarea' },
        { week: '06', class: '13', date: 'Mar 25, Jun 2024', description: 'Revisión Tarea, Listas, Ejercicios' },
        { week: '', class: '14', date: 'Mié 26, Jun 2024', description: 'Ejercicios' },
        { week: '', class: '15', date: 'Jue 27, Jun 2024', description: 'Tuplas, Ejercicios' },
        { week: '07', class: '16', date: 'Mar 02, Jul 2024', description: 'Diccionarios, Ejercicios' },
        { week: '', class: '17', date: 'Mié 03, Jul 2024', description: 'Ejercicio Estudiantes' },
        { week: '', class: '18', date: 'Jue 04, Jul 2024', description: 'Funciones' },
        { week: '08', class: '19', date: 'Mar 09, Jul 2024', description: 'Ejercicios con funciones' },
        { week: '', class: '20', date: 'Mié 10, Jul 2024', description: 'Evaluación 02: Primera parte' },
        { week: '', class: '21', date: 'Jue 11, Jul 2024', description: 'Evaluación 02: Segunda parte' },
        { week: '', class: '22', date: 'Vie 12, Jul 2024', description: 'recuperativa: Instrucciones Eval03, Sol.Eval02-parte01' },
        { week: '09', class: '23', date: 'Mié 17, Jul 2024', description: 'Desarrollo Seguro' },
        { week: '', class: '24', date: 'Jue 18, Jul 2024', description: 'Encriptación' },
        { week: '10', class: '25', date: 'Mar 23, Jul 2024', description: 'Informe 01' },


    ];
    const lectureData = [
        { week: '01', lecture: '01', date: 'Sáb 25, May 2024', description: 'El alcance de una problemática' },
        { week: '', lecture: '02', date: 'Sáb 25, May 2024', description: 'Métodos para la resolución de problemas' },
        { week: '02', lecture: '03', date: 'Sáb 01, Jun 2024', description: 'Diagrama de flujo de datos' },
        { week: '', lecture: '04', date: 'Sáb 01, Jun 2024', description: 'Validación de la solución' },
        { week: '03', lecture: '05', date: 'Sáb 08, Jun 2024', description: 'Python: Estructura de desición y bucles' },
        { week: '04', lecture: '06', date: 'Sáb 15, Jun 2024', description: 'Python: Tipos de datos y variables' },
        { week: '', lecture: '07', date: 'Sáb 15, Jun 2024', description: 'Python: Sentencias básicas en la resolución de problemas' },
        { week: '05', lecture: '08', date: 'Sáb 22, Jun 2024', description: 'La lógica en la Programación Python' },
        { week: '06', lecture: '09', date: 'Sáb 29, Jun 2024', description: 'Listas, tuplas y diccionarios seguros' },
        { week: '07', lecture: '10', date: 'Sáb 06, Jul 2024', description: 'Procedimientos para la manipulación de datos' },
        { week: '', lecture: '11', date: 'Sáb 06, Jul 2024', description: 'Mitigación del riesgo y las vulnerabilidades' },
        { week: '08', lecture: '12', date: 'Sáb 13, Jul 2024', description: 'Librerías externas y seguras' },
        { week: '', lecture: '13', date: 'Sáb 13, Jul 2024', description: 'Script con jerarquía de excepciones' },
        
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