import React from 'react';
import { Card } from "@/components/Card";
import styles from '@/styles/Home.module.css';

export default function ELearning() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>E-Learning</h1>
      <div className={styles.cardContainer}>
        <Card
          title="Coursera"
          description="Apuntes"
          image="/logos/coursera.png"
          link='elearning/coursera'
        />
        <Card
          title="CódigoFacilito"
          description="Apuntes"
          image="/logos/codigofacilito.png"
          link='elearning/codfacilito'
        />
        <Card
          title="DevTalles"
          description="Apuntes"
          image="/logos/devtalles.png"
          link='elearning/devtalles'
        />
        <Card
          title="Platzi"
          description="Apuntes"
          image="/logos/platzi.png"
          link='elearning/platzi'
        />
        <Card
          title="Udemy"
          description="Apuntes"
          image="/logos/udemy.png"
          link='elearning/udemy'
        />
      </div>
    </div>  
  );
}