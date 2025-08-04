import React from 'react';
import styles from './CodeTable.module.css';

const CodeTable = ({ 
  title, 
  headers = [], 
  data = [], 
  className = '',
  variant = 'default' // 'default', 'algorithms', 'courses', etc.
}) => {
  return (
    <div className={`${styles.tableContainer} ${className}`}>
      {title && <h3 className={styles.tableTitle}>{title}</h3>}
      
      <table className={`${styles.table} ${styles[variant]}`}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Array.isArray(row) ? (
                row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))
              ) : (
                Object.values(row).map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CodeTable;