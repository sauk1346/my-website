'use client';
import React, { createContext, useContext, useCallback } from 'react';
import { allDecks, getDecksByCategory, getDeckById } from '@/data/flashcards';

const FlashcardContext = createContext();

export const useFlashcards = () => {
  const context = useContext(FlashcardContext);
  if (!context) {
    throw new Error('useFlashcards must be used within FlashcardProvider');
  }
  return context;
};

export const FlashcardProvider = ({ children }) => {
  // Obtener todos los mazos
  const getDecks = () => allDecks;

  // Obtener mazos por categoría
  const getDecksByCat = (category) => getDecksByCategory(category);

  // Obtener un mazo por ID
  const getDeck = (deckId) => getDeckById(deckId);

  // Obtener cartas de un mazo
  const getCards = useCallback((deckId) => {
    const deck = getDeckById(deckId);
    if (!deck) return [];
    return deck.cards;
  }, []);

  // Obtener estadísticas de un mazo
  const getDeckStats = (deckId) => {
    const cards = getCards(deckId);
    return {
      total: cards.length
    };
  };

  const value = {
    getDecks,
    getDecksByCategory: getDecksByCat,
    getDeckById: getDeck,
    getCards,
    getDeckStats
  };

  return (
    <FlashcardContext.Provider value={value}>
      {children}
    </FlashcardContext.Provider>
  );
};
