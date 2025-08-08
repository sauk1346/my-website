'use client'
import React, { useState } from 'react';
import { CompactPlatformGrid } from '@/components/ui/CompactPlatformGrid';
import BootcampTable from '@/components/features/bootcamp/BootcampTable';
import { bootcampsData } from '@/data/bootcamp/bootcampData';
import styles from './Bootcamp.module.css';

export default function Bootcamp() {
  const [selectedBootcamp, setSelectedBootcamp] = useState(null);
  
  const handleBootcampClick = (bootcampKey) => {
    setSelectedBootcamp(bootcampKey === selectedBootcamp ? null : bootcampKey);
  };
  
  const bootcamps = Object.keys(bootcampsData);
  
  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>Bootcamps</h1>
        
        {/* Subtitle opcional para explicar la interacción */}
        <p className={styles.subtitle}>
          Selecciona una plataforma para ver los bootcamps disponibles
        </p>
        
        {/* Grid de bootcamps compactos */}
        <CompactPlatformGrid
          platforms={bootcamps}
          platformsData={bootcampsData}
          selectedPlatform={selectedBootcamp}
          onPlatformClick={handleBootcampClick}
        />
        
        {/* Vista de tabla de contenido - aparece debajo cuando hay selección */}
        {selectedBootcamp && (
          <div className={styles.tableSection}>
            <BootcampTable
              courses={bootcampsData[selectedBootcamp].courses}
              platformName={bootcampsData[selectedBootcamp].name}
            />
          </div>
        )}
      </div>
    </div>
  );
}