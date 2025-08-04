import React from 'react';
import { Card } from "@/components/ui/Card";
import styles from './SectionCards.module.css';

const SectionCards = ({ cards, sectionName }) => {
  return (
    <div className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>{sectionName}</h2>
      <div className={styles.cardsGrid}>
        {cards.map((card, index) => (
          <Card
            key={`${sectionName}-${index}`}
            title={card.title}
            description={card.description}
            image={card.image}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionCards;