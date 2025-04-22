import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/CardSystem.module.css';

export function Card({ title, description, image, link }) {
  return (
    <Link href={link}>
      <div className={styles.basicCard}>  {/* Mantiene todas las proporciones originales */}
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
    </Link>
  );
}