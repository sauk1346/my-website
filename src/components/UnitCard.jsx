import React from 'react';
import styles from '@/styles/CardSystem.module.css'

const UnitCard = ({ unitsData }) => {
  return (
    <div className={`${styles.card} ${styles.wideWidth}`}>
      <h3 className={`${styles.title} ${styles.boldTitle}`}>Unidades</h3>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHeader}>
            <th className={styles.headerCell}>Unidad</th>
            <th className={styles.headerCell}>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {/* Generar dinámicamente las filas para cada unidad */}
          {unitsData.map(({ unit, description }) => (
            <tr key={unit} className={styles.tableRow}>
              <td className={styles.cell}>{unit}</td>
              <td className={styles.cell}>{description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UnitCard;
