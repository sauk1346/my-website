import React from 'react';
import styles from '../styles/LectureCard.module.css'; // Asegúrate de crear el archivo CSS

const LectureCard = ({ lectureData }) => {
  return (
    <div className={styles.lectureCard}>
      <h3 className={styles.title}>Lecturas</h3>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHeader}>
            <th className={styles.tableCell}>Semana</th>
            <th className={styles.tableCell}>Lectura</th>
            <th className={styles.tableCell}>Fecha</th>
            <th className={styles.tableCell}>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {/* Generar dinámicamente las filas para cada lectura */}
          {lectureData.map(({ week, lecture, date, description }) => (
            <tr key={lecture} className={styles.tableRow}>
              <td className={styles.tableCell}>{week}</td>
              <td className={styles.tableCell}>{lecture}</td>
              <td className={styles.tableCell}>{date}</td>
              <td className={styles.tableCell}>{description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LectureCard;
