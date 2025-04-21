import React from 'react';
import styles from '@/styles/elearning.module.css';
import ElearningTable from '@/components/BootcampTable';
import coursesData from '@/../public/data/bootcamps.json';

export default function Bootcamps() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bootcamps</h1>
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