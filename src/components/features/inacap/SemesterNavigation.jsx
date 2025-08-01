import React from 'react';
import styles from './SemesterNavigation.module.css';

const SemesterNavigation = ({ 
  semesters, 
  subjects,
  selectedSemester, 
  onSemesterChange,
  layout = 'default', // default, horizontal, vertical
  showProgress = true,
  className = '' 
}) => {
  // Construir clases CSS del contenedor
  const containerClasses = [
    styles.semesterNavigation,
    layout !== 'default' && styles[layout],
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses}>
      <h2 className={styles.navigationTitle}>Navegación por Semestres</h2>
      
      <div className={styles.semesterButtons}>
        {semesters.map(semester => {
          const isSelected = selectedSemester === semester.number;
          const semesterSubjects = subjects.filter(s => s.semester === semester.number);
          const completedCount = semesterSubjects.filter(s => s.status === 'completed').length;
          const totalCount = semesterSubjects.length;
          const semesterProgress = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

          // Construir clases del botón
          const buttonClasses = [
            styles.semesterButton,
            isSelected && styles.selected,
            styles[semester.status]
          ].filter(Boolean).join(' ');

          return (
            <button
              key={`${semester.number}-${semester.year}`}
              onClick={() => onSemesterChange(semester.number)}
              className={buttonClasses}
              aria-pressed={isSelected}
              aria-label={`Semestre ${semester.number}, ${semester.year}, ${semesterProgress}% completado`}
            >
              <div className={styles.semesterInfo}>
                <div className={styles.semesterNumber}>
                  {semester.number}° Semestre
                </div>
                <div className={styles.semesterYear}>
                  {semester.year}
                </div>
              </div>
              
              <div className={styles.semesterCount}>
                {totalCount} materias
              </div>
              
              {showProgress && (
                <>
                  <div className={styles.semesterProgressBar}>
                    <div 
                      className={styles.semesterProgressFill} 
                      style={{ width: `${semesterProgress}%` }}
                      role="progressbar"
                      aria-valuenow={semesterProgress}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-label={`Progreso del semestre: ${semesterProgress}%`}
                    />
                  </div>
                  <div className={styles.semesterPercent}>
                    {semesterProgress}% completado
                  </div>
                </>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SemesterNavigation;