'use client';

import React from 'react';
import { Card } from "@/components/ui/Card";
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      {/* Sección: Programación */}
      <section id="programacion" className={styles.section}>
        <div className={styles.sectionContent}>
          <h1 className={styles.sectionTitle}>Programación</h1>
          <p className={styles.description}>
            Apuntes y recursos de aprendizaje
          </p>
          <div className={styles.cardContainer}>
            <Card
              title="Ingeniería Informática"
              description="Semestres"
              image="/logos/inacap_logo.png"
              link='/inacap'
            />
            <Card
              title="E-Learning"
              description="Plataformas"
              image="/logos/learnlogo.png"
              link='/elearning'
            />
            <Card
              title="Bootcamps"
              description="Academias"
              image="/logos/bootcamp.png"
              link='/bootcamps'
            />
            <Card
              title="CodeTraining"
              description="Ejercicios"
              image="/logos/codeTraining.png"
              link='/training'
            />
          </div>
        </div>
      </section>
      
      {/* Sección: Idiomas */}
      <section id="idiomas" className={styles.section}>
        <div className={styles.sectionContent}>
          <h1 className={styles.sectionTitle}>Idiomas</h1>
          <p className={styles.description}>
            Apuntes Idiomas de interés
          </p>
          <div className={styles.cardContainer}>
            <Card
              title="Alemán"
              description="Lerne Deutsch"
              image="https://kapowaz.github.io/square-flags/flags/de.svg"
              link='aleman'
            />
            <Card
              title="Coreano"
              description="한국어를 배우세요"
              image="https://kapowaz.github.io/square-flags/flags/kr.svg"
              link='coreano'
            />
            <Card
              title="Chino Mandarín"
              description="学习普通话"
              image="https://kapowaz.github.io/square-flags/flags/cn.svg"
              link='chino'
            />
            <Card
              title="Inglés"
              description="Learn English"
              image="https://kapowaz.github.io/square-flags/flags/us.svg"
              link='ingles'
            />
            <Card
              title="Japonés"
              description="日本語を勉強して "
              image="https://kapowaz.github.io/square-flags/flags/jp.svg"
              link='japones'
            />
            <Card
              title="Ruso"
              description="Учи русский"
              image="https://kapowaz.github.io/square-flags/flags/ru.svg"
              link='ruso'
            />
          </div>
        </div>
      </section>
      
      {/* Sección: Sobre mí */}
      <section id="sobre-mi" className={styles.section}>
        <div className={styles.sectionContent}>
          <h1 className={styles.sectionTitle}>Sobre mí</h1>
          <p className={styles.description}>
            Información profesional y proyectos
          </p>
          <div className={styles.cardContainer}>
            <Card
              title="Portfolio"
              description="Desarrollos"
              image="/logos/portfolio.png"
              link='/portfolio'
            />
          </div>
        </div>
      </section>
    </div>
  );
}