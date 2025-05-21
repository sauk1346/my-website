'use client'

import React, { useEffect, useState } from 'react';
import ProfessorCard from '@/components/education/ProfessorCard';
import styles from'@/styles/Asignature.module.css';
import ExternalLink from '@/components/ui/ExternalLink';
import CustomLink from '@/components/ui/CustomLink';

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
                <li><ExternalLink href="/inacap/ti3v12/docs/clase01.pdf">clase01.pdf</ExternalLink></li>
                <li><ExternalLink href="/inacap/ti3v12/docs/clase02.pdf">clase02.pdf</ExternalLink></li>
                <li><ExternalLink href="/inacap/ti3v12/docs/clase03.pdf">clase03.pdf</ExternalLink></li>
                <li><ExternalLink href="/inacap/ti3v12/docs/clase04.pdf">clase04.pdf</ExternalLink></li>
                <li><ExternalLink href="/inacap/ti3v12/docs/clase05.pdf">clase05.pdf</ExternalLink></li>
                <li><ExternalLink href="/inacap/ti3v12/docs/clase06.pdf">clase06.pdf</ExternalLink></li>
                <li><ExternalLink href="/inacap/ti3v12/docs/clase07.pdf">clase07.pdf</ExternalLink></li>
                <li><ExternalLink href="/inacap/ti3v12/docs/clase08.pdf">clase08.pdf</ExternalLink></li>
            </ul>
        
            <h2 style={{marginTop:'2em',marginBottom:'1em'}}>Resumen</h2>
            <ul style={{listStyle:'none'}}>
                <li><CustomLink href="ti3v12/guia">guia.pdf</CustomLink></li>
            </ul>


        </div>
    );
}