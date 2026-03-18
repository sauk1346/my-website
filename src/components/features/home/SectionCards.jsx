'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/Card";
import styles from './SectionCards.module.css';
import { fadeInUp, staggerContainer, viewportConfig } from '@/utils/animations';

// Variantes para el título de sección
const titleVariants = {
  initial: { opacity: 0, y: -10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const SectionCards = ({ cards, sectionName }) => {
  return (
    <motion.div
      className={styles.sectionContainer}
      initial="initial"
      whileInView="animate"
      viewport={viewportConfig}
      variants={staggerContainer(0.15, 0.1)}
    >
      <motion.h2
        className={styles.sectionTitle}
        variants={titleVariants}
      >
        {sectionName}
      </motion.h2>
      <motion.div
        className={styles.cardsGrid}
        variants={staggerContainer(0.1)}
      >
        {cards.map((card, index) => (
          <Card
            key={`${sectionName}-${index}`}
            title={card.title}
            description={card.description}
            image={card.image}
            link={card.link}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SectionCards;
