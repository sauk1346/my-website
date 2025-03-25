import React from 'react';
import styles from '../styles/ClassCard.module.css'

const ClassCard = ({ classData }) => {
  return (
    <div className={styles.classCard}>
      <h3 className={styles.title}>Clases</h3>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHeader}>
            <th className={styles.tableCell}>Semana</th>
            <th className={styles.tableCell}>Clase</th>
            <th className={styles.tableCell}>Fecha</th>
            <th className={styles.tableCell}>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {/* Generar dinámicamente las filas para cada clase */}
          {classData.map(({ week, class: classNumber, date, description, isSuspended }) => (
            <tr key={classNumber} className={styles.tableRow}>
              <td className={styles.tableCell}>{week}</td>
              <td className={styles.tableCell}>{classNumber}</td>
              <td className={styles.tableCell}>{date}</td>
              <td className={styles.tableCell}>
                <span className={isSuspended ? 'suspended' : ''}>
                    {description}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassCard;
