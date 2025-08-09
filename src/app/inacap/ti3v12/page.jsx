'use client'
import React, { useEffect, useState } from 'react';
import ProfessorCard from '@/components/features/inacap/ProfessorCard';
import { SmartLink } from '@/components/ui/SmartLink';
import styles from './Ti3v12.module.css';

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
      
      <div className={styles.cardContainer}>
        <ProfessorCard professorData={professorData} />
      </div>

      <h2 className={styles.sectionTitle}>Material Clases</h2>
      <ul className={styles.fileGrid}>
        {/* ✨ CAMBIADO: SmartLink detecta automáticamente que son PDFs y agrega icono rojo */}
        <li><SmartLink href="/inacap/ti3v12/docs/clase01.pdf">clase01.pdf</SmartLink></li>
        <li><SmartLink href="/inacap/ti3v12/docs/clase02.pdf">clase02.pdf</SmartLink></li>
        <li><SmartLink href="/inacap/ti3v12/docs/clase03.pdf">clase03.pdf</SmartLink></li>
        <li><SmartLink href="/inacap/ti3v12/docs/clase04.pdf">clase04.pdf</SmartLink></li>
        <li><SmartLink href="/inacap/ti3v12/docs/clase05.pdf">clase05.pdf</SmartLink></li>
        <li><SmartLink href="/inacap/ti3v12/docs/clase06.pdf">clase06.pdf</SmartLink></li>
        <li><SmartLink href="/inacap/ti3v12/docs/clase07.pdf">clase07.pdf</SmartLink></li>
        <li><SmartLink href="/inacap/ti3v12/docs/clase08.pdf">clase08.pdf</SmartLink></li>
      </ul>

      <h2 className={styles.sectionTitle}>Resumen</h2>
      <ul className={styles.simpleList}>
        {/* ✨ CAMBIADO: SmartLink detecta automáticamente que es PDF */}
        <li><SmartLink href="ti3v12/guia">guia.pdf</SmartLink></li>
      </ul>
    </div>
  );
}