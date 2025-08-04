import React from 'react';
import { Card } from "@/components/ui/Card";
import styles from './Bootcamp.module.css';

export default function Bootcamp() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>Bootcamps</h1>
        <div className={styles.cardGrid}>
          <Card
            title="UDD"
            description="Apuntes"
            image="/logos/udd.png"
            link='bootcamp/udd'
          />
          <Card
            title="CódigoFacilito"
            description="Apuntes"
            image="/logos/codigofacilito.png"
            link='bootcamp/codfacilito'
          />
        </div>
      </div>
    </div>
  );
}