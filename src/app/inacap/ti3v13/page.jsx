import React from 'react';
import ClassCard from '@/components/ClassCard'; 
import LectureCard from '@/components/LectureCard'; 
import EvaluationCard from '@/components/EvaluationCard';
import ProfessorCard from '@/components/ProfessorCard';
import UnitCard from '@/components/UnitCard';
import styles from'@/styles/Asignature.module.css';
import Link from 'next/link';

export default function Ti3v13() {
    const professorData = {
        name: "Sergio Andrés Muñoz Sasso",
        email: "sergio.munoz03@inacapmail.cl"
    };
    const unitsData = [
        { unit: '1', description: 'Computadores personales, portátiles y otros dispositivos móviles' },
        { unit: '2', description: 'Sistemas Operativos de escritorio' },
        { unit: '3', description: 'Introducción a Redes de Datos' },
    ];
    const evaluationsData = [
        { 
            evaluationNumber: 1,
            date: 'Mar 11, Jun 2024',
            weighting: '20%', 
            description: 'Instalación/configuración Hardware', 
            quickGuide: ''
        },
        { 
            evaluationNumber: 2,
            date: 'Mar 09, Jul 2024', 
            weighting: '35%', 
            description:'Instalación/configuración Windows 10', 
            quickGuide: '' 
        },
        { 
            evaluationNumber: 3,
            date: 'Mié 24, Jul 2024', 
            weighting: '35%', 
            description: 'Configuración router inalámbrico', 
            quickGuide: '' 
        },
        { 
            evaluationNumber: 4,
            date: 'Mié 07, May 2025',
            weighting: '15%',
            description: <Link href="ti3v13/controles" className={styles.link}>Promedio Controles</Link>,
            quickGuide: '' },

    ];
    const classData = [
        { week: '01', class: '01', date: 'Mié 22, May 2024', description: <Link href="ti3v13/clase01" className={styles.link}>Componentes Básicos de Computadores</Link> },
        { week: '02', class: '02', date: 'Mar 28, May 2024', description: <Link href="ti3v13/clase02" className={styles.link}>Seguridad Física en Manipulación de Hardware</Link> },
        { week: '03', class: '03', date: 'Mar 04, Jun 2024', description: 'Taller 01-A' },
        { week: '', class: '04', date: 'Mié 05, Jun 2024', description: <Link href="ti3v13/taller01" className={styles.link}>Taller 01-B</Link> },
        { week: '04', class: '05', date: 'Mar 11, Jun 2024', description: 'Evaluación 01-A' },
        { week: '', class: '06', date: 'Mié 12, Jun 2024', description: 'Evaluación 01-B' },
        { week: '05', class: '07', date: 'Mar 18, Jun 2024', description: <Link href="ti3v13/clase07" className={styles.link}>Sistemas Operativos</Link> },
        { week: '', class: '08', date: 'Mié 19, Jun 2024', description: <Link href="ti3v13/clase08" className={styles.link}>Higiene digital, Tipos de licencia, versiones de Windows 10</Link> },
        { week: '06', class: '09', date: 'Mar 25, Jun 2024', description: <Link href="ti3v13/clase09" className={styles.link}>Máquina Virtual: Pasos</Link> },
        { week: '', class: '10', date: 'Mié 26, Jun 2024', description: <Link href="ti3v13/clase10" className={styles.link}>Virtualbox, Instalación Windows 10</Link> },
        { week: '07', class: '11', date: 'Mar 02, Jul 2024', description: 'Taller 02-A' },
        { week: '', class: '12', date: 'Mié 03, Jul 2024', description: <Link href="ti3v13/taller02" className={styles.link}>Taller 02-B</Link> },
        { week: '08', class: '13', date: 'Mar 09, Jul 2024', description: 'Evaluación 02-A' },
        { week: '', class: '14', date: 'Mié 10, Jul 2024', description: 'Evaluación 02-B' },
        { week: '09', class: '15', date: 'Mié 17, Jul 2024', description: <Link href="ti3v13/clase15" className={styles.link}>Fundamentos Networking</Link> },
        { week: '10', class: '16', date: 'Mar 23, Jul 2024', description: <Link href="ti3v13/taller03" className={styles.link}>Taller 03 A/B</Link> },
        { week: '', class: '17', date: 'Mié 24, Jul 2024', description: 'Evaluación 03' },
    ];
    const lectureData = [
        { week: '01', lecture: '01', date: 'Sáb 25, May 2024', description: <Link href="ti3v13/lectura01" className={styles.link}>Selección de hardware y herramientas</Link> },
        { week: '', lecture: '02', date: 'Sáb 25, Jun 2024', description: <Link href="ti3v13/lectura02" className={styles.link}>Medidas de seguridad física</Link> },
        { week: '02', lecture: '03', date: 'Sáb 01, Jun 2024', description: <Link href="ti3v13/lectura03" className={styles.link}>Procedimientos de instalación</Link> },
        { week: '', lecture: '04', date: 'Sáb 01, Jun 2024', description: <Link href="ti3v13/lectura04" className={styles.link}>Mantenimiento preventivo</Link> },
        { week: '03', lecture: '05', date: 'Sáb 08, Jun 2024', description: <Link href="ti3v13/lectura05" className={styles.link}>Soluciones a problemas de hardware</Link> },
        { week: '', lecture: '06', date: 'Sáb 08, Jun 2024', description: <Link href="ti3v13/lectura06" className={styles.link}>Optimización de hardware</Link> },
        { week: '04', lecture: '07', date: 'Sáb 15, Jun 2024', description: <Link href="ti3v13/lectura07" className={styles.link}>Software y hardware</Link> },
        { week: '', lecture: '08', date: 'Sáb 15, Jun 2024', description: <Link href="ti3v13/lectura08" className={styles.link}>Particiones y formateo</Link> },
        { week: '05', lecture: '09', date: 'Sáb 22, Jun 2024', description: <Link href="ti3v13/lectura09" className={styles.link}>Cuentas de usuario y grupos locales</Link> },
        { week: '', lecture: '10', date: 'Sáb 22, Jun 2024', description: <Link href="ti3v13/lectura10" className={styles.link}>Estructuras de directorios y archivos</Link> },
        { week: '06', lecture: '11', date: 'Sáb 29, Jun 2024', description: <Link href="ti3v13/lectura11" className={styles.link}>Copias de seguridad</Link> },
        { week: '', lecture: '12', date: 'Sáb 29, Jun 2024', description: <Link href="ti3v13/lectura12" className={styles.link}>Verificación y configuración OS</Link> },
        { week: '07', lecture: '13', date: 'Sáb 06, Jul 2024', description: <Link href="ti3v13/lectura13" className={styles.link}>Tipos de redes</Link> },
        { week: '', lecture: '14', date: 'Sáb 06, Jul 2024', description: <Link href="ti3v13/lectura14" className={styles.link}>Elementos y modelos de redes</Link> },
        { week: '08', lecture: '15', date: 'Sáb 13, Jul 2024', description: <Link href="ti3v13/lectura15" className={styles.link}>Direcciones IP</Link> },
        { week: '', lecture: '16', date: 'Sáb 13, Jul 2024', description: <Link href="ti3v13/lectura16" className={styles.link}>Seguridad de router inalámbrico</Link> },
        { week: '09', lecture: '17', date: 'Sáb 20, Jul 2024', description: 'Redes LAN y WLAN' },
        { week: '', lecture: '18', date: 'Sáb 20, Jul 2024', description: 'Normativa para configuración de Redes' },
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Fundamentos de Hardware y Software</h1>
            <p className={styles.subheading}>TI3V13</p>
            <br />
            <p className={styles.description}>
                Asignatura práctica. Se desarrollan habilidades para: Configurar e instalas Sistemas Operativos en PCs, portátiles y dispositivos móviles, configuración básica de redes LAN y WLAN utilizando software simulador de redes. 
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
