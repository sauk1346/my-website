'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { useFlashcards } from '@/contexts/FlashcardContext';
import { DeckCard } from '@/components/flashcards/DeckCard';
import styles from './page.module.css';

export default function FlashcardsProgramacion() {
  const router = useRouter();
  const category = 'programacion';

  const {
    getDecksByCategory,
    getDeckStats
  } = useFlashcards();

  const decks = getDecksByCategory(category);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.backButton} onClick={() => router.push('/')}>
          <ArrowLeft size={20} />
          Volver
        </button>
        <h1 className={styles.title}>Flashcards - Programación</h1>
        <div className={styles.spacer} />
      </div>

      {decks.length === 0 ? (
        <div className={styles.emptyState}>
          <p>No hay mazos disponibles en esta categoría</p>
          <p className={styles.hint}>
            Los mazos se agregan editando los archivos en <code>src/data/flashcards/programacion/</code>
          </p>
        </div>
      ) : (
        <div className={styles.decksGrid}>
          {decks.map(deck => (
            <DeckCard
              key={deck.id}
              deck={deck}
              stats={getDeckStats(deck.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
