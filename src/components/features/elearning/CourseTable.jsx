import React from 'react';
import Link from 'next/link';
import styles from './CourseTable.module.css';

export const CourseTable = ({ courses, platformName, type = 'elearning' }) => {
  return (
    <div className={styles.section}>
      <div className={`${styles.tableContainer} ${styles.courses}`}>
        <h2 className={styles.platformTitle}>{platformName}</h2>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Código</th>
                <th>Curso</th>
                {type === 'elearning' && <th>Instructor</th>}
                {type === 'bootcamp' && <th>Certificado</th>}
              </tr>
            </thead>
            <tbody>
              {courses.map(course => (
                <tr key={course.code}>
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
                    <td data-label="Instructor">
                      {course.instructor || '-'}
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};