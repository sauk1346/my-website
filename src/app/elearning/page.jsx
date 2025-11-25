'use client'
import React, { useState } from 'react';
import { CompactPlatformGrid } from '@/components/ui/CompactPlatformGrid';
import { platformsData } from '@/utils/elearningUtils';
import styles from './Elearning.module.css';
import { CourseTable } from '@/components/features/elearning/CourseTable';

export default function ELearning() {
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  
  const handlePlatformClick = (platformKey) => {
    setSelectedPlatform(platformKey === selectedPlatform ? null : platformKey);
  };
  
  const platforms = Object.keys(platformsData);
  
  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>E-Learning</h1>
        
        {/* Subtitle opcional para explicar la interacción */}
        <p className={styles.subtitle}>
          Selecciona una plataforma para ver los cursos disponibles
        </p>
        
        {/* Grid de plataformas compactas */}
        <CompactPlatformGrid
          platforms={platforms}
          platformsData={platformsData}
          selectedPlatform={selectedPlatform}
          onPlatformClick={handlePlatformClick}
        />
        
        {/* Vista de tabla de cursos - aparece debajo cuando hay selección */}
        {selectedPlatform && (
          <div className={styles.tableSection}>
            <CourseTable
              courses={platformsData[selectedPlatform].courses}
              platformName={platformsData[selectedPlatform].name}
            />
          </div>
        )}
      </div>
    </div>
  );
}