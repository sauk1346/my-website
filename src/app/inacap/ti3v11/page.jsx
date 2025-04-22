'use client'

import React, { useEffect, useState } from 'react';
import ClassCard from '@/components/ClassCard';
import LectureCard from '@/components/LectureCard'; 
import EvaluationCard from '@/components/EvaluationCard';
import ProfessorCard from '@/components/ProfessorCard';
import UnitCard from '@/components/UnitCard';
import styles from'@/styles/Asignature.module.css';
import CustomLink from '@/components/CustomLink';

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
            description: <CustomLink href='ti3v11/eval01'>Evaluación 01</CustomLink>, 
            quickGuide: '', 
        },
        { 
            evaluationNumber: 2, 
            date: 'Mié 10, Jul 2024', 
            weighting: '35%', 
            description: <CustomLink href='ti3v11/eval02'>Evaluación 02</CustomLink>, 
            quickGuide: <><CustomLink href='ti3v11/guia21'>guía 01</CustomLink>, <CustomLink href='ti3v11/guia22'>guía 02</CustomLink></>
        },
        { 
            evaluationNumber: 3, 
            date: 'Mar 23, Jul 2024', 
            weighting: '35%', 
            description: <a href="/ti3v11/docs/eval03_sol.pdf" target="_blank" rel="noopener noreferrer">Informe SAMM y SDL</a>, 
            quickGuide: '' 
        },
        { 
            evaluationNumber: 4, 
            date: 'Jue 25, Jul 2024', 
            weighting: '10%', 
            description: <CustomLink href='ti3v11/controles'>Promedio Controles</CustomLink>, 
            quickGuide: '' 
        },
    ];
    const classData = [
        { week: '01', class: '01', date: 'Mié 22, May 2024', description: <CustomLink href='ti3v11/clase01'>Pseudocódigo, Diagrama de Flujo</CustomLink>  },
        { week: '', class: '02', date: 'Jue 23, May 2024', description: <CustomLink href='ti3v11/clase02'>Variables, Condiciones, Bucles</CustomLink> },
        { week: '02', class: '03', date: 'Mar 28, May 2024', description: <CustomLink href='ti3v11/clase03'>Condicionales y Lógica Booleana</CustomLink> },
        { week: '', class: '04', date: 'Mié 29, May 2024', description: <CustomLink href='ti3v11/clase04'>Introducción a PSeInt</CustomLink> },
        { week: '', class: '05', date: 'Jue 30, May 2024', description: <CustomLink href='ti3v11/clase05'>Ejercicios con Bucles 01</CustomLink> },
        { week: '03', class: '06', date: 'Mar 04, Jun 2024', description: <CustomLink href='ti3v11/clase06'>Ejercicios con Bucles 02</CustomLink> },
        { week: '', class: '07', date: 'Mié 05, Jun 2024', description: <CustomLink href='ti3v11/clase07'>Ejercicios con Bucles 03</CustomLink> },
        { week: '', class: '08', date: 'Jue 06, Jun 2024', description: <CustomLink href='ti3v11/eval01'>Evaluación 01</CustomLink> },
        { week: '04', class: '09', date: 'Mar 11, Jun 2024', description: <CustomLink href='ti3v11/clase09'>Introducción a Python</CustomLink> },
        { week: '', class: '10', date: 'Mié 12, Jun 2024', description: <CustomLink href='ti3v11/clase10'>Intrucciones if(), while()</CustomLink> },
        { week: '', class: '11', date: 'Jue 13, Jun 2024', description: <span style={{textDecoration: 'line-through'}}>Suspensión clases: lluvia</span> },
        { week: '05', class: '12', date: 'Mar 18, Jun 2024', description: <CustomLink href='ti3v11/clase12'>Instrucción for(), Ejercicios, Tarea</CustomLink> },
        { week: '06', class: '13', date: 'Mar 25, Jun 2024', description: <CustomLink href='ti3v11/clase13'>Revisión Tarea, Listas, Ejercicios</CustomLink> },
        { week: '', class: '14', date: 'Mié 26, Jun 2024', description: <CustomLink href='ti3v11/clase14'>Ejercicios</CustomLink> },
        { week: '', class: '15', date: 'Jue 27, Jun 2024', description: <CustomLink href='ti3v11/clase15'>Tuplas, Ejercicios</CustomLink> },
        { week: '07', class: '16', date: 'Mar 02, Jul 2024', description: <CustomLink href='ti3v11/clase16'>Diccionarios, Ejercicios</CustomLink> },
        { week: '', class: '17', date: 'Mié 03, Jul 2024', description: <CustomLink href='ti3v11/clase17'>Ejercicio Estudiantes</CustomLink> },
        { week: '', class: '18', date: 'Jue 04, Jul 2024', description: <CustomLink href='ti3v11/clase18'>Funciones</CustomLink> },
        { week: '08', class: '19', date: 'Mar 09, Jul 2024', description: <CustomLink href='ti3v11/clase19'>Ejercicios con funciones</CustomLink> },
        { week: '', class: '20', date: 'Mié 10, Jul 2024', description: <CustomLink href='ti3v11/eval02'>Evaluación 02: Primera parte</CustomLink> },
        { week: '', class: '21', date: 'Jue 11, Jul 2024', description: <CustomLink href='ti3v11/eval02'>Evaluación 02: Segunda parte</CustomLink> },
        { week: '', class: '22', date: 'Vie 12, Jul 2024', description: <CustomLink href='ti3v11/clase22'>Clase Recuperativa</CustomLink> },
        { week: '09', class: '23', date: 'Mié 17, Jul 2024', description: <CustomLink href='ti3v11/clase23'>Desarrollo Seguro</CustomLink> },
        { week: '', class: '24', date: 'Jue 18, Jul 2024', description: <CustomLink href='ti3v11/clase24'>Encriptación</CustomLink> },
        { week: '10', class: '25', date: 'Mar 23, Jul 2024', description: <a href="/ti3v11/docs/eval03_sol.pdf" target="_blank" rel="noopener noreferrer">Informe SAMM y SDL</a> },


    ];
    const lectureData = [
        { week: '01', lecture: '01', date: 'Sáb 25, May 2024', description: <CustomLink href='ti3v11/lectura01'>El alcance de una problemática</CustomLink> },
        { week: '', lecture: '02', date: 'Sáb 25, May 2024', description: <CustomLink href='ti3v11/lectura02'>Métodos para la resolución de problemas</CustomLink> },
        { week: '02', lecture: '03', date: 'Sáb 01, Jun 2024', description: <CustomLink href='ti3v11/lectura03'>Diagrama de flujo de datos</CustomLink> },
        { week: '', lecture: '04', date: 'Sáb 01, Jun 2024', description: <CustomLink href='ti3v11/lectura04'>Validación de la solución</CustomLink> },
        { week: '03', lecture: '05', date: 'Sáb 08, Jun 2024', description: <CustomLink href='ti3v11/lectura05'>Python: Estructura de desición y bucles</CustomLink> },
        { week: '04', lecture: '06', date: 'Sáb 15, Jun 2024', description: <CustomLink href='ti3v11/lectura06'>Python: Tipos de datos y variables</CustomLink> },
        { week: '', lecture: '07', date: 'Sáb 15, Jun 2024', description: <CustomLink href='ti3v11/lectura07'>Python: Sentencias básicas en la resolución de problemas</CustomLink> },
        { week: '05', lecture: '08', date: 'Sáb 22, Jun 2024', description: <CustomLink href='ti3v11/lectura08'>La lógica en la Programación Python</CustomLink> },
        { week: '06', lecture: '09', date: 'Sáb 29, Jun 2024', description: <CustomLink href='ti3v11/lectura09'>Listas, tuplas y diccionarios seguros</CustomLink> },
        { week: '07', lecture: '10', date: 'Sáb 06, Jul 2024', description: <CustomLink href='ti3v11/lectura10'>Procedimientos para la manipulación de datos</CustomLink> },
        { week: '', lecture: '11', date: 'Sáb 06, Jul 2024', description: <CustomLink href='ti3v11/lectura11'>Mitigación del riesgo y las vulnerabilidades</CustomLink> },
        { week: '08', lecture: '12', date: 'Sáb 13, Jul 2024', description: <CustomLink href='ti3v11/lectura12'>Librerías externas y seguras</CustomLink> },
        { week: '', lecture: '13', date: 'Sáb 13, Jul 2024', description: <CustomLink href='ti3v11/lectura13'>Script con jerarquía de excepciones</CustomLink> },
        
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