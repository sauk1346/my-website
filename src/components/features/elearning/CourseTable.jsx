'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './CourseTable.module.css';
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

export const CourseTable = ({ courses, platformName, type = 'elearning' }) => {
  return (
    <motion.div
      className={styles.section}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportConfig}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className={`${styles.tableContainer} ${styles.courses}`}>
        <h2 className={styles.platformTitle}>{platformName}</h2>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Código</th>
                <th>Curso</th>
                {type === 'elearning' && <th>Diploma</th>}
                {type === 'bootcamp' && <th>Certificado</th>}
              </tr>
            </thead>
            <motion.tbody
              key={`tbody-${platformName}`}
              initial="initial"
              animate="animate"
              variants={staggerContainer(0.03)}
            >
              {courses.map(course => (
                <motion.tr
                  key={`${platformName}-${course.code}`}
                  variants={rowVariants}
                  whileHover={{
                    backgroundColor: 'rgba(59, 130, 246, 0.05)',
                    transition: { duration: 0.05 },
                  }}
                >
                  <td
                    className={styles.code}
                    data-label="Código"
                  >
                    {course.code}
                  </td>
                  <td data-label="Curso">
                    {course.titleUrl ? (
                      <Link
                        href={course.titleUrl}
                        className={styles.courseLink}
                      >
                        {course.title}
                      </Link>
                    ) : (
                      course.title
                    )}
                  </td>
                  {type === 'elearning' && (
                    <td data-label="Diploma">
                      {course.certificateUrl ? (
                        <a
                          href={course.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.certificateLink}
                        >
                          Diploma
                        </a>
                      ) : (
                        '-'
                      )}
                    </td>
                  )}
                  {type === 'bootcamp' && (
                    <td data-label="Certificado">
                      {course.certificateUrl ? (
                        <a
                          href={course.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.certificateLink}
                        >
                          Ver Certificado
                        </a>
                      ) : (
                        '-'
                      )}
                    </td>
                  )}
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};