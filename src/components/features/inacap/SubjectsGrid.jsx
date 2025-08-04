import React from 'react';
import styles from './SubjectsGrid.module.css';

const SubjectsGrid = ({ 
  subjects,
  categories,
  statusConfig,
  layout = 'default', // default, compact, wide, list
  className = '' 
}) => {
  // Construir clases CSS del contenedor
  const containerClasses = [
    layout !== 'default' && styles[layout],
    className
  ].filter(Boolean).join(' ');

  // Componente para estado sin resultados
  const NoResults = () => (
    <div className={styles.noResults}>
      <div className={styles.noResultsIcon}>🔍</div>
      <h3 className={styles.noResultsTitle}>No hay materias disponibles</h3>
      <p className={styles.noResultsText}>Este semestre no tiene materias registradas</p>
    </div>
  );

  // Componente para tarjeta individual de materia
  const SubjectCard = ({ subject }) => {
    const category = categories[subject.category];
    const status = statusConfig[subject.status];

    const cardClasses = [
      styles.subjectCard,
      styles[subject.status]
    ].filter(Boolean).join(' ');

    return (
      <div className={cardClasses}>
        <div className={`${styles.categoryBar} ${styles[subject.category]}`} />
        
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
              <a 
                href={subject.href} 
                className={styles.link}
              >
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
  };

  // Renderizado principal
  if (!subjects || subjects.length === 0) {
    return <NoResults />;
  }

  return (
    <div className={containerClasses}>
      <div className={styles.grid}>
        {subjects.map(subject => (
          <SubjectCard 
            key={subject.code} 
            subject={subject} 
          />
        ))}
      </div>
    </div>
  );
};

export default SubjectsGrid;