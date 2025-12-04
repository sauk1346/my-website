'use client';
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Shuffle } from 'lucide-react';
import { useFlashcards } from '@/contexts/FlashcardContext';
import { FlashCard } from '@/components/flashcards/FlashCard';
import styles from './page.module.css';

export default function StudySession() {
  const params = useParams();
  const router = useRouter();
  const { deckId } = params;
  const category = 'idiomas';

  const {
    getDeckById,
    getCards
  } = useFlashcards();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [studyCards, setStudyCards] = useState([]);
  const [isRandom, setIsRandom] = useState(false);

  const deck = getDeckById(deckId);

  // Cargar cartas solo cuando cambian filtros o al inicio
  useEffect(() => {
    const allCards = getCards(deckId);
    let cards = [...allCards];

    if (isRandom) {
      cards = shuffleArray(cards);
    }

    setStudyCards(cards);
    setCurrentIndex(0);
  }, [deckId, isRandom, getCards]);

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const handleNext = () => {
    if (currentIndex < studyCards.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleToggleRandom = () => {
    setIsRandom(!isRandom);
  };

  const handleFinish = () => {
    router.push(`/flashcards-${category}`);
  };

  if (!deck) {
    return (
      <div className={styles.container}>
        <p>Mazo no encontrado</p>
      </div>
    );
  }

  if (studyCards.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <button
            className={styles.backButton}
            onClick={() => router.push(`/flashcards-${category}`)}
          >
            <ArrowLeft size={20} />
            Volver
          </button>
        </div>
        <div className={styles.emptyState}>
          <p>No hay cartas en este mazo</p>
          <button
            className={styles.backButtonLarge}
            onClick={() => router.push(`/flashcards-${category}`)}
          >
            Volver al mazo
          </button>
        </div>
      </div>
    );
  }

  const currentCard = studyCards[currentIndex];
  const progress = ((currentIndex + 1) / studyCards.length) * 100;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button
          className={styles.backButton}
          onClick={() => router.push(`/flashcards-${category}`)}
        >
          <ArrowLeft size={20} />
          Salir
        </button>
        <h1 className={styles.deckName}>{deck.name}</h1>
        <div className={styles.spacer} />
      </div>

      <div className={styles.controls}>
        <button
          className={`${styles.controlButton} ${isRandom ? styles.active : ''}`}
          onClick={handleToggleRandom}
          title="Orden aleatorio"
        >
          <Shuffle size={18} />
          Aleatorio
        </button>
      </div>

      <div className={styles.progressContainer}>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className={styles.progressText}>
          Carta {currentIndex + 1} de {studyCards.length}
        </div>
      </div>

      <div className={styles.cardContainer}>
        <FlashCard key={currentCard.id} card={currentCard} />
      </div>

      <div className={styles.actions}>
        <button
          className={styles.navButton}
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          ← Anterior
        </button>

        {currentIndex === studyCards.length - 1 ? (
          <button className={styles.finishButton} onClick={handleFinish}>
            Finalizar
          </button>
        ) : (
          <button className={styles.navButton} onClick={handleNext}>
            Siguiente →
          </button>
        )}
      </div>
    </div>
  );
}
