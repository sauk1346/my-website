'use client'

import React, { useState } from 'react';
import { subjects, categories, statusConfig, semesters } from '@/data/inacap/inacapData';
import Calendar from '@/components/features/inacap/Calendar';
import InacapStats from '@/components/features/inacap/InacapStats';
import SemesterNavigation from '@/components/features/inacap/SemesterNavigation';
import SubjectsGrid from '@/components/features/inacap/SubjectsGrid';
import calendar25 from '@/data/inacap/calendar25.js';
import styles from './Inacap.module.css';

const Inacap = () => {
  const [selectedSemester, setSelectedSemester] = useState(4);

  // Filtrado de materias (solo por semestre)
  const filteredSubjects = subjects.filter(subject => {
    return subject.semester === selectedSemester;
  });

  // Handler para cambio de semestre
  const handleSemesterChange = (semesterNumber) => {
    setSelectedSemester(semesterNumber);
  };

  return (
    <div className={styles.container}>
      {/* Título principal */}
      <h1 className={styles.title}>Malla Curricular</h1>

      {/* Componente de estadísticas */}
      <section className={styles.section}>
        <InacapStats 
          subjects={subjects}
          showProgress={true}
          variant="default"
        />
      </section>

      {/* Componente de navegación por semestres */}
      <section className={styles.section}>
        <SemesterNavigation
          semesters={semesters}
          subjects={subjects}
          selectedSemester={selectedSemester}
          onSemesterChange={handleSemesterChange}
          showProgress={true}
          layout="default"
        />
      </section>

      {/* Componente de grid de materias */}
      <section className={styles.section}>
        <SubjectsGrid
          subjects={filteredSubjects}
          categories={categories}
          statusConfig={statusConfig}
          layout="default"
        />
      </section>

      {/* Sección del calendario */}
      <section className={styles.section}>
        <h2 className={styles.title}>Calendario 2025</h2>
        <div className={styles.calendarPlaceholder}>
          <Calendar eventos={calendar25} />
        </div>
      </section>
    </div>
  );
};

export default Inacap;