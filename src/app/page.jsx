'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { CardCarousel } from '@/components/ui/CardCarousel';
import { sectionsOrder } from '@/data/homeData';
import styles from './Home.module.css';

export default function Home() {
  const router = useRouter();

  const handleCardClick = (sectionId, cardKey) => {
    const section = sectionsOrder.find(s => s.id === sectionId);
    const card = section?.cardsData[cardKey];

    if (card?.link) {
      if (card.link.startsWith('http')) {
        window.open(card.link, '_blank', 'noopener,noreferrer');
      } else {
        router.push(card.link);
      }
    }
  };

  return (
    <div className={styles.mainContainer}>
      {sectionsOrder.map((section) => (
        <section key={section.id} id={section.id} className={styles.section}>
          <div className={styles.sectionContent}>
            <h1 className={styles.sectionTitle}>{section.title}</h1>
            <p className={styles.description}>{section.description}</p>

            <div className={styles.carouselWrapper}>
              <CardCarousel
                platforms={Object.keys(section.cardsData)}
                platformsData={section.cardsData}
                selectedPlatform={null}
                onCardClick={(cardKey) => handleCardClick(section.id, cardKey)}
                autoplay
                autoplayInterval={4000}
                loop
              />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}