import React from 'react';
import { Card } from "@/components/Card";
import homeStyles from '@/styles/Home.module.css';
import styles from '@/styles/elearning.module.css';

export default function Bootcamps() {
  return (
    <div className={homeStyles.mainContainer}>
      <h1 className={styles.title}>Bootcamps</h1>
      <div className={homeStyles.cardContainer}>
        <Card
          title="UDD"
          description="Apuntes"
          image="/logos/udd.png"
          link='bootcamps/udd'
        />
        <Card
          title="CódigoFacilito"
          description="Apuntes"
          image="/logos/codigofacilito.png"
          link='bootcamps/codfacilito'
        />
    
      </div>
    </div>
  );
}