import React from 'react';
import styles from './BootcampTable.module.css';
import CustomLink from '@/components/ui/CustomLink';

const BootcampTable = ({ courses }) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={`${styles.table} ${styles.bootcamps}`}>
        <thead>
          <tr>
            <th>Sigla</th>
            <th>Nombre</th>
            <th>Certificado</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td data-label="Sigla">
                <span className={styles.code}>{course.code}</span>
              </td>
              <td data-label="Nombre">
                {course.titleUrl ? (
                  <CustomLink href={course.titleUrl} className={styles.titleLink}>
                    {course.title}
                  </CustomLink>
                ) : (
                  <span>{course.title}</span>
                )}
              </td>
              <td data-label="Certificado">
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
                  <span className={styles.noCertificate}>-</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BootcampTable;