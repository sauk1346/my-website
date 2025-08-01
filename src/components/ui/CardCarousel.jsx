import React, { useState, useEffect, useRef } from 'react';
import { Card } from "@/components/ui/Card";
import styles from '@/styles/CardCarousel.module.css';

export const CardCarousel = ({ platforms, platformsData, selectedPlatform, onCardClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const carouselRef = useRef(null);
  const trackRef = useRef(null);

  const calculateVisibleCards = () => {
    if (!carouselRef.current || !trackRef.current) return 3;
    
    const containerWidth = carouselRef.current.offsetWidth;
    const firstCard = trackRef.current.querySelector('.card-item');
    
    if (firstCard) {
      const cardWidth = firstCard.offsetWidth;
      const gap = 16;
      const cardsPerView = Math.floor(containerWidth / (cardWidth + gap));
      return Math.max(1, Math.min(cardsPerView, platforms.length));
    }
    
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3;
  };

  useEffect(() => {
    const updateVisibleCards = () => {
      const newVisibleCards = calculateVisibleCards();
      setVisibleCards(newVisibleCards);
      
      const newMaxIndex = Math.max(0, platforms.length - newVisibleCards);
      if (currentIndex > newMaxIndex) {
        setCurrentIndex(newMaxIndex);
      }
    };

    const timer = setTimeout(updateVisibleCards, 100);
    
    window.addEventListener('resize', updateVisibleCards);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateVisibleCards);
    };
  }, [currentIndex, platforms.length]);

  const maxIndex = Math.max(0, platforms.length - visibleCards);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  const calculateTransform = () => {
    if (!trackRef.current) return 0;
    
    const firstCard = trackRef.current.querySelector('.card-item');
    if (firstCard) {
      const cardWidth = firstCard.offsetWidth;
      const gap = 16;
      return currentIndex * (cardWidth + gap);
    }
    
    return currentIndex * (100 / visibleCards);
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselWrapper}>
        <button
          className={styles.carouselButton}
          onClick={prevSlide}
          disabled={currentIndex === 0}
        >
          ‹
        </button>

        <div className={styles.carouselContent} ref={carouselRef}>
          <div
            className={styles.carouselTrack}
            ref={trackRef}
            style={{
              transform: `translateX(-${calculateTransform()}px)`,
            }}
          >
            {platforms.map((platformKey, index) => {
              const platform = platformsData[platformKey];
              const isSelected = selectedPlatform === platformKey;
              
              return (
                <div
                  key={platformKey}
                  className={`${styles.carouselSlide} card-item`}
                >
                  <Card
                    title={platform.name}
                    description="Apuntes"
                    image={platform.logo}
                    onClick={() => onCardClick(platformKey)}
                    className={`${styles.clickableCard} ${isSelected ? styles.selectedCard : ''}`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <button
          className={styles.carouselButton}
          onClick={nextSlide}
          disabled={currentIndex >= maxIndex}
        >
          ›
        </button>
      </div>

      {maxIndex > 0 && (
        <div className={styles.carouselDots}>
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              className={`${styles.carouselDot} ${index === currentIndex ? styles.activeDot : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};