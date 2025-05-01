import React from 'react';
import { Card } from "../components/Card";
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <p className={styles.description}>
        Choose your Destiny:
      </p>
      <div className={styles.cardContainer}>
        <Card
          title="Ingeniería Informática"
          description="Apuntes"
          image="/logos/inacap_logo.png"
          link='/inacap'
        />
        <Card
          title="E-Learning"
          description="Apuntes"
          image="/logos/elearning.png"
          link='/elearning'
        />
        <Card
          title="Bootcamps"
          description="Apuntes"
          image="/logos/code.jpg"
          link='/bootcamps'
        />
        <Card
          title="Idiomas"
          description="Apuntes"
          image="/logos/language.png"
          link='/idiomas'
        />
        <Card
          title="Portfolio"
          description="Mis proyectos"
          image="/logos/portfolio.png"
          link='/portfolio'
        />
      </div>
    </div>
  );
}