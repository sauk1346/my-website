'use client'
import React, { useState } from 'react';
import { CardCarousel } from '@/components/ui/CardCarousel';
import { CourseTable } from '@/components/features/elearning/CourseTable';
import { platformsData } from '@/data/elearning/platforms-data';
import styles from '@/shared/elearning.module.css';

export default function ELearning() {
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  const handleCardClick = (platformKey) => {
    setSelectedPlatform(platformKey === selectedPlatform ? null : platformKey);
  };

  const platforms = Object.keys(platformsData);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>E-Learning</h1>
        
        {/* Carrusel de plataformas - ahora con estilos separados */}
        <CardCarousel
          platforms={platforms}
          platformsData={platformsData}
          selectedPlatform={selectedPlatform}
          onCardClick={handleCardClick}
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