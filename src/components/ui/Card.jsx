'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Card.module.css';

// Variantes para la animación de la card
const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export function Card({ title, description, image, link, onClick, className, disableEntryAnimation = false, loading = "eager" }) {
  const cardClasses = `${styles.basicCard} ${styles.withGradientLine} ${className || ''}`;

  const innerContent = (
    <div className={styles.cardContent}>
      <div className={styles.cardImage}>
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          loading={loading}
          className={styles.cardImageImg}
        />
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );

  // Contenido de la card - con o sin animación
  const CardContent = () => (
    disableEntryAnimation ? (
      <div className={cardClasses}>
        {innerContent}
      </div>
    ) : (
      <motion.div
        className={cardClasses}
        variants={cardVariants}
      >
        {innerContent}
      </motion.div>
    )
  );

  // Si hay onClick, renderizar un div clickeable
  if (onClick) {
    return (
      <div
        onClick={onClick}
        style={{ cursor: 'pointer' }}
      >
        <CardContent />
      </div>
    );
  }

  // Si hay link, renderizar con Link de Next.js (comportamiento original)
  if (link) {
    return (
      <Link href={link}>
        <CardContent />
      </Link>
    );
  }

  // Caso por defecto sin navegación ni onClick
  return <CardContent />;
}
