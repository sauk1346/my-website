import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/shared/CardSystem.module.css';

export function Card({ title, description, image, link, onClick, className }) {
  // Contenido común de la card
  const cardContent = (
    <div className={`${styles.basicCard} ${styles.withGradientLine} ${className || ''}`}>
      <div className={styles.cardContent}>
        <div className={styles.cardImage}>
          <Image
            src={image}
            alt={title}
            width={200}
            height={200}
          />
        </div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );

  // Si hay onClick, renderizar un div clickeable
  if (onClick) {
    return (
      <div 
        onClick={onClick}
        style={{ cursor: 'pointer' }}
      >
        {cardContent}
      </div>
    );
  }

  // Si hay link, renderizar con Link de Next.js (comportamiento original)
  if (link) {
    return (
      <Link href={link}>
        {cardContent}
      </Link>
    );
  }

  // Caso por defecto sin navegación ni onClick
  return cardContent;
}