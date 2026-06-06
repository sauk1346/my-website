'use client';
import React from 'react';
import { Card } from '@/components/ui/Card';
import { sectionsOrder } from '@/data/homeData';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      {sectionsOrder.map((section) => (
        <section key={section.id} id={section.id} className={styles.section}>
          <div className={styles.sectionContent}>
            <h1 className={styles.sectionTitle}>{section.title}</h1>
            <p className={styles.description}>{section.description}</p>
            <div className={styles.cardGrid}>
              {Object.entries(section.cardsData).map(([key, card]) => (
                <Card
                  key={key}
                  title={card.name}
                  description={card.description}
                  image={card.image}
                  link={card.link}
                  disableEntryAnimation
                />
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
