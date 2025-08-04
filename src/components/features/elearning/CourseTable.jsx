import React from 'react';
import styles from './CourseTable.module.css';

export const CourseTable = ({ courses, platformName }) => {
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
                <th>Instructor</th>
              </tr>
            </thead>
            <tbody>
              {courses.map(course => (
                <tr key={course.id}>
                  <td 
                    className={styles.code}
                    data-label="Código"
                  >
                    {course.code}
                  </td>
                  <td data-label="Curso">
                    {course.link ? (
                      <a 
                        href={course.link} 
                        className={styles.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {course.title}
                      </a>
                    ) : (
                      course.title
                    )}
                  </td>
                  <td data-label="Instructor">
                    {course.instructor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};