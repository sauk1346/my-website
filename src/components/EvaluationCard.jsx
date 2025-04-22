import React from 'react';
import styles from '@/styles/CardSystem.module.css'

const EvaluationCard = ({ evaluationsData }) => {
  return (
    <div className={`${styles.card} ${styles.mediumWidth}`}>
      <h3 className={styles.title}>Evaluaciones</h3>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHeader}>
            <th className={styles.tableCell}></th>
            <th className={styles.tableCell}>Fecha</th>
            <th className={styles.tableCell}>Pond.</th>
            <th className={styles.tableCell}>Descripción</th>
            <th className={styles.tableCell}>Guía Rápida</th>
          </tr>
        </thead>
        <tbody>
          {/* Generar dinámicamente las filas para cada evaluación */}
          {evaluationsData.map(({ evaluationNumber, date, weighting, description, quickGuide }) => (
            <tr key={evaluationNumber} className={styles.tableRow}>
              <td className={styles.tableCell}>{evaluationNumber}</td>
              <td className={styles.tableCell}>{date}</td>
              <td className={styles.tableCell}>{weighting}</td>
              <td className={styles.tableCell}>{description}</td>
              <td className={styles.tableCell}>{quickGuide}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EvaluationCard;
