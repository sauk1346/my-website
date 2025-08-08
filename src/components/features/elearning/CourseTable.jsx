import React from 'react';
import Link from 'next/link';
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
                      <Link
                        href={course.link} 
                        className={styles.courseLink} 
                      >
                        {course.title}
                      </Link>
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