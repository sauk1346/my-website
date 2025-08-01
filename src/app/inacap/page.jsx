'use client'

import React, { useState } from 'react';
import styles from '@/shared/Inacap.module.css';
import { subjects, categories, statusConfig, semesters } from '@/data/inacap/inacapData';
import Calendar from '@/components/features/inacap/Calendar';
import calendar25 from '@/data/inacap/calendar25.js';

const InacapImproved = () => {
  const [selectedSemester, setSelectedSemester] = useState(4);

  // Filtrado de materias (solo por semestre)
  const filteredSubjects = subjects.filter(subject => {
    return subject.semester === selectedSemester;
  });

  // Estadísticas
  const totalSubjects = subjects.length;
  const completedSubjects = subjects.filter(s => s.status === 'completed').length;
  const currentSemester = semesters.find(s => s.number === selectedSemester);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Malla Curricular</h1>

      {/* Estadísticas generales */}
      <div className={styles.statsCard}>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{totalSubjects}</div>
            <div className={styles.statLabel}>Materias Total</div>
          </div>
          <div className={styles.statItem}>
            <div className={`${styles.statNumber} ${styles.completed}`}>{completedSubjects}</div>
            <div className={styles.statLabel}>Completadas</div>
          </div>
          <div className={styles.statItem}>
            <div className={`${styles.statNumber} ${styles.current}`}>{subjects.filter(s => s.status === 'current').length}</div>
            <div className={styles.statLabel}>En Curso</div>
          </div>
          <div className={styles.statItem}>
            <div className={`${styles.statNumber} ${styles.progress}`}>{Math.round((completedSubjects / totalSubjects) * 100)}%</div>
            <div className={styles.statLabel}>Progreso</div>
          </div>
        </div>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{width: `${Math.round((completedSubjects / totalSubjects) * 100)}%`}}></div>
        </div>
        <div className={styles.progressText}>
          {completedSubjects} de {totalSubjects} materias completadas
        </div>
      </div>

      {/* Hero Bar de navegación por semestres */}
      <div className={styles.semesterNavigation}>
        <h2 className={styles.navigationTitle}>Navegación por Semestres</h2>
        <div className={styles.semesterButtons}>
          {semesters.map(semester => {
            const isSelected = selectedSemester === semester.number;
            const semesterSubjects = subjects.filter(s => s.semester === semester.number);
            const completedCount = semesterSubjects.filter(s => s.status === 'completed').length;
            const totalCount = semesterSubjects.length;
            const semesterProgress = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

            return (
              <button
                key={`${semester.number}-${semester.year}`}
                onClick={() => setSelectedSemester(semester.number)}
                className={`${styles.semesterButton} ${isSelected ? styles.selected : ''} ${styles[semester.status]}`}
              >
                <div className={styles.semesterInfo}>
                  <div className={styles.semesterNumber}>{semester.number}° Semestre</div>
                  <div className={styles.semesterYear}>{semester.year}</div>
                </div>
                <div className={styles.semesterCount}>{totalCount} materias</div>
                <div className={styles.semesterProgressBar}>
                  <div className={styles.semesterProgressFill} style={{width: `${semesterProgress}%`}}></div>
                </div>
                <div className={styles.semesterPercent}>{semesterProgress}% completado</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Contenido de materias */}
      {filteredSubjects.length === 0 ? (
        <div className={styles.noResults}>
          <div className={styles.noResultsIcon}>🔍</div>
          <h3 className={styles.noResultsTitle}>No hay materias disponibles</h3>
          <p className={styles.noResultsText}>Este semestre no tiene materias registradas</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {filteredSubjects.map(subject => {
            const category = categories[subject.category];
            const status = statusConfig[subject.status];

            return (
              <div key={subject.code} className={`${styles.subjectCard} ${styles[subject.status]}`}>
                <div className={`${styles.categoryBar} ${styles[subject.category]}`}></div>
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <div className={styles.cardLeft}>
                      <div className={`${styles.categoryIcon} ${styles[subject.category]}`}>
                        {category.icon}
                      </div>
                      <div className={styles.cardInfo}>
                        <div className={styles.code}>{subject.code}</div>
                        <div className={`${styles.statusBadge} ${styles[subject.status]}`}>
                          <span>{status.icon}</span>
                          {status.name}
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className={styles.cardTitle}>
                    {subject.href ? (
                      <a href={subject.href} className={styles.link}>
                        {subject.name}
                      </a>
                    ) : (
                      subject.name
                    )}
                  </h3>
                  <div className={styles.cardFooter}>
                    <span className={styles.categoryLabel}>
                      {category.icon} {category.name}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Calendario */}
      <div className={styles.container}>
        <h1 className={styles.title}>Calendario 2025</h1>
        <div className={styles.calendarPlaceholder}>
          <Calendar eventos={calendar25}/>
        </div>
      </div>
    </div>
  );
};

export default InacapImproved;