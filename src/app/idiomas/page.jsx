import React from 'react';
import { Card } from "@/components/Card";
import styles from '@/styles/Home.module.css';

export default function Idiomas() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Idiomas</h1>
      <div className={styles.cardContainer}>
        <Card
          title="Alemán"
          description="Apuntes"
          image="/logos/germany_flag.png"
          link='/inacap'
        />
        <Card
          title="Coreano"
          description="Apuntes"
          image="/logos/korean_flag.png"
          link='/elearning'
        />
        <Card
          title="Chino Mandarín"
          description="Apuntes"
          image="/logos/china_flag.png"
          link='/bootcamps'
        />
        <Card
          title="Inglés"
          description="Apuntes"
          image="/logos/english_flag.png"
          link='/languages'
        />
        <Card
          title="Japonés"
          description="Apuntes"
          image="/logos/japan_flag.png"
          link='/portfolio'
        />
        <Card
          title="Ruso"
          description="Apuntes"
          image="/logos/russia_flag.png"
          link='/portfolio'
        />
      </div>
    </div>
  );
}