'use client'
import React, { useState } from 'react';
import { CardCarousel } from '@/components/ui/CardCarousel';
import BootcampTable from '@/components/features/bootcamp/BootcampTable';
import { bootcampsData } from '@/data/bootcamp/bootcampData';
import styles from './Bootcamp.module.css';

export default function Bootcamp() {
  const [selectedBootcamp, setSelectedBootcamp] = useState(null);

  const handleCardClick = (bootcampKey) => {
    setSelectedBootcamp(bootcampKey === selectedBootcamp ? null : bootcampKey);
  };

  const bootcamps = Object.keys(bootcampsData);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>Bootcamps</h1>
        
        {/* Carrusel de bootcamps - igual que elearning */}
        <CardCarousel
          platforms={bootcamps}
          platformsData={bootcampsData}
          selectedPlatform={selectedBootcamp}
          onCardClick={handleCardClick}
        />

        {/* Vista de tabla de contenido - aparece debajo cuando hay selección */}
        {selectedBootcamp && (
          <div className={styles.tableSection}>
            <BootcampTable
              courses={bootcampsData[selectedBootcamp].courses}
            />
          </div>
        )}
      </div>
    </div>
  );
}