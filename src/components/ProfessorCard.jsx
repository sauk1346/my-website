import React from 'react';
import Link from 'next/link';
import styles from '../styles/ProfessorCard.module.css'
const ProfessorCard = ({ professorData }) => {
  return (
    <div className={styles.professorCard}>
      <h2 className={styles.title}>Profesor</h2>
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
