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
          link='idiomas/aleman'
        />
        <Card
          title="Coreano"
          description="Apuntes"
          image="/logos/korean_flag.png"
          link='idiomas/coreano'
        />
        <Card
          title="Chino Mandarín"
          description="Apuntes"
          image="/logos/china_flag.png"
          link='idiomas/chino'
        />
        <Card
          title="Inglés"
          description="Apuntes"
          image="/logos/english_flag.png"
          link='idiomas/ingles'
        />
        <Card
          title="Japonés"
          description="Apuntes"
          image="/logos/japan_flag.png"
          link='idiomas/japones'
        />
        <Card
          title="Ruso"
          description="Apuntes"
          image="/logos/russia_flag.png"
          link='idiomas/ruso'
        />
      </div>
    </div>
  );
}