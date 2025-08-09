import React from 'react';
import { SmartLink } from '@/components/ui/SmartLink';
import styles from './ProfessorCard.module.css';

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
            <SmartLink href={`mailto:${professorData.email}`}>
              {professorData.email}
            </SmartLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfessorCard;