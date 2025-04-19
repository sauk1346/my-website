import React from 'react';
import styles from '../../styles/elearning.module.css';
import ElearningTable from '../../components/ElearningTable';
import coursesData from '../../../public/data/elearning.json';

export default function ELearning() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>E-Learning</h1>
      <div className={styles.grid}>
        {Object.entries(coursesData).map(([platform, courses]) => (
          <div key={platform} className={styles.section}>
            <h2 className={styles.platformTitle}>{platform}</h2>
            <ElearningTable courses={courses} />
          </div>
        ))}
      </div>
    </div>
  );
}