'use client'

import React, { useEffect, useState } from 'react';
import ProfessorCard from '../../../components/ProfessorCard';
import styles from'../../../styles/Ti3v32.module.css';
import Link from 'next/link';

export default function Ti3v12() {
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

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Fundamentos de Bases de Datos</h1>
            <p className={styles.subheading}>TI3V12</p>
            <br />
            <div className={styles.cardContainer}>
                <div className={`${styles.card} ${styles.fullWidth}`}>
                    <ProfessorCard professorData={professorData} />
                </div>
            </div>
            
            <h2 style={{marginTop:'2em',marginBottom:'1em'}}>Material Clases</h2>
            <ul style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', paddingLeft: '0px', listStyle:'none'}}>
                <li><a href="/ti3v12/docs/clase01.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>clase01.pdf</a></li>
                <li><a href="/ti3v12/docs/clase02.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>clase02.pdf</a></li>
                <li><a href="/ti3v12/docs/clase03.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>clase03.pdf</a></li>
                <li><a href="/ti3v12/docs/clase04.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>clase04.pdf</a></li>
                <li><a href="/ti3v12/docs/clase05.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>clase05.pdf</a></li>
                <li><a href="/ti3v12/docs/clase06.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>clase06.pdf</a></li>
                <li><a href="/ti3v12/docs/clase07.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>clase07.pdf</a></li>
                <li><a href="/ti3v12/docs/clase08.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>clase08.pdf</a></li>
            </ul>
        
            <h2 style={{marginTop:'2em',marginBottom:'1em'}}>Resumen</h2>
            <ul style={{listStyle:'none'}}>
                <li><Link href="ti3v12/guia" className={styles.link}>guia.pdf</Link></li>
            </ul>


        </div>
    );
}