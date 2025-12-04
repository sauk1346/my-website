'use client';
import React, { useState } from 'react';
import styles from './FlashCard.module.css';

export const FlashCard = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  // Función para renderizar el contenido
  const renderContent = (content) => {
    // Si es un array de arrays, renderizar como lista
    if (Array.isArray(content)) {
      return (
        <ul>
          {content.map((item, index) => (
            <li key={index}>
              {Array.isArray(item) ? item[0] : item}
            </li>
          ))}
        </ul>
      );
    }

    // Si es un string, usar dangerouslySetInnerHTML para soportar HTML
    if (typeof content === 'string') {
      return <div dangerouslySetInnerHTML={{ __html: content }} />;
    }

    // Por defecto, renderizar como texto
    return <div>{content}</div>;
  };

  return (
    <div className={styles.cardContainer} onClick={handleClick}>
      <div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`}>
        <div className={styles.cardFront}>
          <div className={styles.cardContent}>
            <div className={styles.cardText}>
              {renderContent(card.front)}
            </div>
          </div>
          <div className={styles.clickHint}>Click para ver respuesta</div>
        </div>
        <div className={styles.cardBack}>
          <div className={styles.cardContent}>
            <div className={styles.cardText}>
              {renderContent(card.back)}
            </div>
            {card.notes && (
              <div className={styles.notes}>
                <small>
                  {typeof card.notes === 'string' ? (
                    <span dangerouslySetInnerHTML={{ __html: card.notes }} />
                  ) : (
                    card.notes
                  )}
                </small>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
