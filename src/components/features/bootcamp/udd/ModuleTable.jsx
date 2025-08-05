import React from 'react';
import styles from './ModuleTable.module.css';

const ModuleTable = ({ title, sessions }) => {
  return (
    <div className={styles.tableSection}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.numberColumn}></th>
              <th className={styles.dateColumn}>Fecha</th>
              <th className={styles.contentColumn}>Prework</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session, index) => (
              <tr key={index} className={styles.tableRow}>
                <td className={styles.numberCell}>
                  {String(session.number).padStart(2, '0')}
                </td>
                <td className={styles.dateCell}>{session.date}</td>
                <td className={styles.contentCell}>{session.content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ModuleTable;