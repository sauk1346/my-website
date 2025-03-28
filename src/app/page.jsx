import React from 'react';
import { Card } from "../components/Card";
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <p className={styles.description}>
        Choose your Destiny:
      </p>
      
      <div className={styles.cardContainer}>
        <Card
          title="Ingeniería Informática"
          description="Apuntes"
          image="/inacap_logo.png"
          link='/inacap'
        />
        <Card
          title="Bootcamps"
          description="Notes"
          image="/code.jpg"
          link='/bootcamps'
        />
        <Card
          title="Portfolio"
          description="My projects"
          image="/portfolio.png"
          link='/portfolio'
        />

      </div>
    </div>
  );
}
