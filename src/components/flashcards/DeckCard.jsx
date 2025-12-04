'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { BookOpen } from 'lucide-react';
import styles from './DeckCard.module.css';

export const DeckCard = ({ deck, stats }) => {
  const router = useRouter();

  const handleStudy = () => {
    router.push(`/flashcards-${deck.category}/study/${deck.id}`);
  };

  return (
    <div className={styles.deckCard}>
      <div className={styles.deckHeader}>
        <h3 className={styles.deckName}>
          {deck.name}
        </h3>
        {deck.subcategory && (
          <span className={styles.subcategory}>{deck.subcategory}</span>
        )}
      </div>

      {deck.description && (
        <p className={styles.description}>{deck.description}</p>
      )}

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statLabel}>Total cartas:</span>
          <span className={styles.statValue}>{stats.total}</span>
        </div>
      </div>

      <div className={styles.footer}>
        <button className={styles.studyButton} onClick={handleStudy}>
          <BookOpen size={18} />
          Estudiar
        </button>
      </div>
    </div>
  );
};
