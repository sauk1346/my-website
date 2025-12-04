// Utilidades para manejar localStorage de flashcards

const STORAGE_KEY = 'flashcards_data';

// Obtener todos los datos
export const getAllData = () => {
  if (typeof window === 'undefined') return { decks: [], cards: [] };

  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : { decks: [], cards: [] };
};

// Guardar todos los datos
export const saveAllData = (data) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

// Generar ID único
export const generateId = () => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

// CRUD para Decks
export const getDecks = (category = null) => {
  const { decks } = getAllData();
  return category ? decks.filter(deck => deck.category === category) : decks;
};

export const getDeckById = (deckId) => {
  const { decks } = getAllData();
  return decks.find(deck => deck.id === deckId);
};

export const createDeck = (deckData) => {
  const data = getAllData();
  const newDeck = {
    id: generateId(),
    createdAt: new Date().toISOString(),
    totalCards: 0,
    ...deckData
  };
  data.decks.push(newDeck);
  saveAllData(data);
  return newDeck;
};

export const updateDeck = (deckId, updates) => {
  const data = getAllData();
  const deckIndex = data.decks.findIndex(deck => deck.id === deckId);
  if (deckIndex !== -1) {
    data.decks[deckIndex] = { ...data.decks[deckIndex], ...updates };
    saveAllData(data);
    return data.decks[deckIndex];
  }
  return null;
};

export const deleteDeck = (deckId) => {
  const data = getAllData();
  data.decks = data.decks.filter(deck => deck.id !== deckId);
  data.cards = data.cards.filter(card => card.deckId !== deckId);
  saveAllData(data);
};

// CRUD para Cards
export const getCardsByDeck = (deckId) => {
  const { cards } = getAllData();
  return cards.filter(card => card.deckId === deckId);
};

export const getCardById = (cardId) => {
  const { cards } = getAllData();
  return cards.find(card => card.id === cardId);
};

export const createCard = (cardData) => {
  const data = getAllData();
  const newCard = {
    id: generateId(),
    isMarked: false,
    lastStudied: null,
    timesStudied: 0,
    notes: '',
    ...cardData
  };
  data.cards.push(newCard);

  // Actualizar totalCards del deck
  const deckIndex = data.decks.findIndex(deck => deck.id === cardData.deckId);
  if (deckIndex !== -1) {
    data.decks[deckIndex].totalCards += 1;
  }

  saveAllData(data);
  return newCard;
};

export const updateCard = (cardId, updates) => {
  const data = getAllData();
  const cardIndex = data.cards.findIndex(card => card.id === cardId);
  if (cardIndex !== -1) {
    data.cards[cardIndex] = { ...data.cards[cardIndex], ...updates };
    saveAllData(data);
    return data.cards[cardIndex];
  }
  return null;
};

export const deleteCard = (cardId) => {
  const data = getAllData();
  const card = data.cards.find(c => c.id === cardId);

  if (card) {
    // Actualizar totalCards del deck
    const deckIndex = data.decks.findIndex(deck => deck.id === card.deckId);
    if (deckIndex !== -1) {
      data.decks[deckIndex].totalCards -= 1;
    }
  }

  data.cards = data.cards.filter(c => c.id !== cardId);
  saveAllData(data);
};

// Utilidades de estudio
export const markCardAsStudied = (cardId) => {
  return updateCard(cardId, {
    lastStudied: new Date().toISOString(),
    timesStudied: (getCardById(cardId)?.timesStudied || 0) + 1
  });
};

export const toggleCardMark = (cardId) => {
  const card = getCardById(cardId);
  if (card) {
    return updateCard(cardId, { isMarked: !card.isMarked });
  }
  return null;
};

// Obtener estadísticas
export const getDeckStats = (deckId) => {
  const cards = getCardsByDeck(deckId);
  return {
    total: cards.length,
    marked: cards.filter(c => c.isMarked).length,
    studied: cards.filter(c => c.timesStudied > 0).length,
    notStudied: cards.filter(c => c.timesStudied === 0).length
  };
};
