import React from 'react';
import Link from 'next/link';
import styles from '@/styles/CardSystem.module.css'
const ProfessorCard = ({ professorData }) => {
  return (
    <div className={`${styles.card} ${styles.mediumSmallWidth} ${styles.extraPadding} ${styles.centered}`}>
      <h2 className={`${styles.title} ${styles.largeTitle} ${styles.boldTitle} ${styles.centeredTitle}`}>
        Profesor
      </h2>
      <div className={styles.info}>
        <div className={styles.infoItem}>
          <p className={styles.label}>Nombre:</p>
          <p>{professorData.name}</p>
        </div>
        <div className={styles.infoItem}>
          <p className={styles.label}>Correo:</p>
          <p>
            <Link href={`mailto:${professorData.email}`} className="email-link">
              {professorData.email}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfessorCard;
