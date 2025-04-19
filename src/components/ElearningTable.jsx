import React from 'react';
import styles from '../styles/elearning.module.css';

const ElearningTable = ({ courses }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Sigla</th>
          <th>Curso</th>
          <th>Profesor</th>
          <th>Certificado</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course, index) => (
          <tr key={index}>
            <td className={styles.code}>{course.code}</td>
            <td>{course.title}</td>
            <td>{course.teacher}</td>
            <td className={styles.noCertificate}>{course.certificate || '-'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default ElearningTable;