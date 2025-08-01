import React from 'react';
import styles from './InacapStats.module.css';

const InacapStats = ({ 
  subjects, 
  variant = 'default', // default, compact, large
  showProgress = true,
  className = '' 
}) => {
  // Cálculos de estadísticas
  const totalSubjects = subjects.length;
  const completedSubjects = subjects.filter(s => s.status === 'completed').length;
  const currentSubjects = subjects.filter(s => s.status === 'current').length;
  const progressPercentage = totalSubjects > 0 ? Math.round((completedSubjects / totalSubjects) * 100) : 0;

  // Construir clases CSS
  const containerClasses = [
    styles.statsCard,
    variant !== 'default' && styles[variant],
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses}>
      <div className={styles.statsGrid}>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>{totalSubjects}</div>
          <div className={styles.statLabel}>Materias Total</div>
        </div>
        
        <div className={styles.statItem}>
          <div className={`${styles.statNumber} ${styles.completed}`}>
            {completedSubjects}
          </div>
          <div className={styles.statLabel}>Completadas</div>
        </div>
        
        <div className={styles.statItem}>
          <div className={`${styles.statNumber} ${styles.current}`}>
            {currentSubjects}
          </div>
          <div className={styles.statLabel}>En Curso</div>
        </div>
        
        <div className={styles.statItem}>
          <div className={`${styles.statNumber} ${styles.progress}`}>
            {progressPercentage}%
          </div>
          <div className={styles.statLabel}>Progreso</div>
        </div>
      </div>

      {showProgress && (
        <>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill} 
              style={{ width: `${progressPercentage}%` }}
              role="progressbar"
              aria-valuenow={progressPercentage}
              aria-valuemin="0"
              aria-valuemax="100"
              aria-label={`Progreso del ${progressPercentage}%`}
            />
          </div>
          <div className={styles.progressText}>
            {completedSubjects} de {totalSubjects} materias completadas
          </div>
        </>
      )}
    </div>
  );
};

export default InacapStats;