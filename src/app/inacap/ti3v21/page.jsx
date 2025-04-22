'use client'

import React, { useEffect, useState } from 'react';
import ClassCard from '@/components/ClassCard'; 
import LectureCard from '@/components/LectureCard'; 
import EvaluationCard from '@/components/EvaluationCard';
import ProfessorCard from '@/components/ProfessorCard';
import UnitCard from '@/components/UnitCard';
import styles from'@/styles/Asignature.module.css';
import CustomLink from '@/components/CustomLink';

export default function Ti3v21() {
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
        name: "Pedro Ernesto Ulloa Morales",
        email: "pedro.ulloa04@inacapmail.cl"
    };
    const unitsData = [
        { unit: '1', description: 'Programación Orientada a Objeto' },
        { unit: '2', description: 'Herencia, Encapsulamiento, Polimorfismom y Métodos en Python' },
        { unit: '3', description: 'Librerías de Seguridad y Consumo de Servicios Externos' },
    ];
    const evaluationsData = [
        { 
            evaluationNumber: 1, 
            date: 'Mar 05, Nov 2024', 
            weighting: '20%', 
            description: <CustomLink href="ti3v21/eval01">Evaluación 01</CustomLink>, 
            quickGuide: <CustomLink href="ti3v21/guia01">Guía 01</CustomLink> 
        },
        { 
            evaluationNumber: 2, 
            date: 'Mié 27, Nov 2024', 
            weighting: '35%', 
            description: <CustomLink href="ti3v21/eval02">Evaluación 02</CustomLink>, 
            quickGuide: '' 
        },
        { 
            evaluationNumber: 3, 
            date: 'Mar 17, Dic 2024', 
            weighting: '35%', 
            description: <CustomLink href="ti3v21/eval03">Proyecto</CustomLink>, 
            quickGuide: '' 
        },
        { 
            evaluationNumber: 4, 
            date: 'Mar 17, Dic 2024', 
            weighting: '10%', 
            description: 'Promedio Evaluaciones', 
            quickGuide: '' 
        },
    ];
    const classData = [
        { week: '01', class: '01', date: 'Mar 22, Oct 2024', description: <CustomLink href="ti3v21/clase01">Ejercicios Python 01</CustomLink> },
        { week: '', class: '02', date: 'Mié 23, Oct 2024', description: <CustomLink href="ti3v21/clase02">Ejercicios Python 02</CustomLink> },
        { week: '02', class: '03', date: 'Mar 29, Oct 2024', description: <CustomLink href="ti3v21/clase03">Ejercicios Python 03</CustomLink> },
        { week: '', class: '04', date: 'Mié 30, Oct 2024', description: <CustomLink href="ti3v21/clase04">Ejercicios Python 04</CustomLink> },
        { week: '03', class: '05', date: 'Mar 05, Nov 2024', description: <CustomLink href="ti3v21/eval01">Evaluación 01</CustomLink> },
        { week: '', class: '06', date: 'Mié 06, Nov 2024', description: <CustomLink href="ti3v21/clase06">Listas</CustomLink> },
        { week: '04', class: '07', date: 'Mar 12, Nov 2024', description: <CustomLink href="ti3v21/clase07">Ejercicios Listas</CustomLink> },
        { week: '', class: '08', date: 'Mié 13, Nov 2024', description: <CustomLink href="ti3v21/clase08">Paradigma POO</CustomLink> },
        { week: '05', class: '09', date: 'Mar 19, Nov 2024', description: <CustomLink href="ti3v21/clase09">Ejercicios POO 01</CustomLink> },
        { week: '', class: '10', date: 'Mié 20, Nov 2024', description: 'Ejercicios POO 02' },
        { week: '06', class: '11', date: 'Mar 26, Nov 2024', description: 'Avance Evaluación 02' },
        { week: '', class: '12', date: 'Mié 27, Nov 2024', description: <CustomLink href="ti3v21/eval02">Entrega Evaluación 02</CustomLink> },
        { week: '07', class: '13', date: 'Mar 03, Dic 2024', description: <CustomLink href="ti3v21/clase13">Ejercicios para Evaluación 03</CustomLink> },
        { week: '', class: '14', date: 'Mié 04, Dic 2024', description: <CustomLink href="ti3v21/clase14">Bases de datos con Python</CustomLink> },
        { week: '08', class: '15', date: 'Mar 10, Dic 2024', description: 'Repaso BD con Python' },
        { week: '', class: '16', date: 'Mié 11, Dic 2024', description: <CustomLink href="ti3v21/clase16">Instrucciones Proyecto</CustomLink> },
        { week: '09', class: '17', date: 'Mar 17, Dic 2024', description: <CustomLink href="ti3v21/eval03">Presentación Proyecto</CustomLink> },

    ];
    const lectureData = [
        { week: '01', lecture: '01', date: 'Sáb 26, Oct 2024', description: <CustomLink href="ti3v21/lectura01">Conceptos básicos de POO</CustomLink> },
        { week: '', lecture: '02', date: 'Sab 26, Oct 2024', description: <CustomLink href="ti3v21/lectura02">Símbolos diagramas de Clase según estándar UML</CustomLink> },
        { week: '02', lecture: '03', date: 'Sáb 02, Nov 2024', description: <CustomLink href="ti3v21/lectura03">Las relaciones entre Clases</CustomLink> },
        { week: '', lecture: '04', date: 'Sáb 02, Nov 2024', description: <CustomLink href="ti3v21/lectura04">Solucionando un problema con Diagramas de clases en UML</CustomLink> },
        { week: '03', lecture: '05', date: 'Sáb 09, Nov 2024', description: <CustomLink href="ti3v21/lectura05">Diagrama de Clases una propuesta de solución</CustomLink> },
        { week: '', lecture: '06', date: 'Sáb 09, Nov 2024', description: <CustomLink href="ti3v21/lectura06">Códigos con herencia, encapsulamiento y polimorfismo</CustomLink> },
        { week: '04', lecture: '07', date: 'Sáb 16, Nov 2024', description: <CustomLink href="ti3v21/lectura07">Librerías Python con conexión a base de datos</CustomLink> },
        { week: '', lecture: '08', date: 'Sáb 16, Nov 2024', description: <CustomLink href="ti3v21/lectura08">Manipulación de registros</CustomLink> },
        { week: '', lecture: '09', date: 'Sáb 16, Nov 2024', description: <CustomLink href="ti3v21/lectura09">Manejo de excepciones y jerarquías</CustomLink> },
        { week: '05', lecture: '-', date: 'Sáb 23, Nov 2024', description: 'Repaso contenidos de la Unidad' },
        { week: '06', lecture: '10', date: 'Sáb 30, Nov 2024', description: <CustomLink href="ti3v21/lectura10">Scripts seguros de Python</CustomLink> },
        { week: '', lecture: '11', date: 'Sáb 30, Nov 2024', description: <CustomLink href="ti3v21/lectura11">Librerías para consumo de datos externos</CustomLink> },
        { week: '07', lecture: '12', date: 'Sáb 07, Dic 2024', description: <CustomLink href="ti3v21/lectura12">Clase de Python con deserialización de información</CustomLink> },
        { week: '', lecture: '13', date: 'Sáb 07, Dic 2024', description: <CustomLink href="ti3v21/lectura13">Registra data obtenida en Base de datos</CustomLink> },
        { week: '08', lecture: '14', date: 'Sáb 14, Dic 2024', description: <CustomLink href="ti3v21/lectura14">Requerimientos de la solución</CustomLink> },
        { week: '', lecture: '15', date: 'Sáb 14, Dic 2024', description: <CustomLink href="ti3v21/lectura15">Diseño de diagrama de clases y casos de uso'</CustomLink> },
        { week: '09', lecture: '16', date: 'Sáb 21, Dic 2024', description: <CustomLink href="ti3v21/lectura16">Aplicando metodologías ágiles de desarrollo</CustomLink> },
        { week: '', lecture: '17', date: 'Sáb 21, Dic 2024', description: <CustomLink href="ti3v21/lectura17">Solución con hash y conectada a base de datos</CustomLink> },
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Programación Orientada a Objeto Seguro</h1>
            <p className={styles.subheading}>TI3V21</p>
            <br />
            <p className={styles.description}>
                Asignatura Práctica, dictada en modalidad presencial con componentes online. Al finalizar, el estudiante será capaz de crear una solución de software con estándares de seguridad que responda a los paradigmas de programación orientada a objetos y conectarse a una Base de datos, considerando el aprendizaje continuo.
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