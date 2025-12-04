// Importar todos los mazos de flashcards
import { javascriptBasics } from './programacion/javascript-basics';
import { chinoHSK1 } from './idiomas/chino-hsk1';

// Agregar nuevos mazos aquí
export const allDecks = [
  // Programación
  javascriptBasics,

  // Idiomas
  chinoHSK1,
];

// Obtener mazos por categoría
export const getDecksByCategory = (category) => {
  return allDecks.filter(deck => deck.category === category);
};

// Obtener un mazo por ID
export const getDeckById = (deckId) => {
  return allDecks.find(deck => deck.id === deckId);
};

// Obtener todas las categorías únicas
export const getCategories = () => {
  return [...new Set(allDecks.map(deck => deck.category))];
};

// Obtener todas las subcategorías por categoría
export const getSubcategories = (category) => {
  return [...new Set(
    allDecks
      .filter(deck => deck.category === category)
      .map(deck => deck.subcategory)
  )];
};
