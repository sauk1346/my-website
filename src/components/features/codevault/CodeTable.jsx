'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './CodeTable.module.css';
import { staggerContainer, viewportConfig } from '@/utils/animations';

// Variantes para las filas
const rowVariants = {
  initial: { opacity: 0, x: -10 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const CodeTable = ({
  title,
  headers = [],
  data = [],
  className = '',
  variant = 'default' // 'default', 'algorithms', 'courses', etc.
}) => {
  return (
    <motion.div
      className={`${styles.tableContainer} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportConfig}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {title && <h3 className={styles.tableTitle}>{title}</h3>}

      <table className={`${styles.table} ${styles[variant]}`}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <motion.tbody
          initial="initial"
          animate="animate"
          variants={staggerContainer(0.03)}
        >
          {data.map((row, rowIndex) => (
            <motion.tr
              key={rowIndex}
              variants={rowVariants}
              whileHover={{
                backgroundColor: 'rgba(59, 130, 246, 0.05)',
                transition: { duration: 0.05 },
              }}
            >
              {Array.isArray(row) ? (
                row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))
              ) : (
                Object.values(row).map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))
              )}
            </motion.tr>
          ))}
        </motion.tbody>
      </table>
    </motion.div>
  );
};

export default CodeTable;