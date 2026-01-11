'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from "@/components/ui/Card";
import styles from './CardCarousel.module.css';

// Variantes para animación de slides
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  }),
};

export const CardCarousel = ({
  platforms,
  platformsData,
  selectedPlatform,
  onCardClick,
  defaultDescription = "Apuntes",
  imageField = "logo",
  // Nuevas props para configuración
  autoplay = false,
  autoplayInterval = 5000,
  loop = false,
  showProgressBar = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const carouselRef = useRef(null);
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const autoplayRef = useRef(null);
  const progressRef = useRef(null);

  // Touch/Swipe state
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const isSingleCard = platforms.length === 1;
  const shouldCenter = platforms.length <= visibleCards;
  const maxIndex = Math.max(0, platforms.length - visibleCards);

  // Calcular cards visibles basado en el ancho del contenedor
  const calculateVisibleCards = useCallback(() => {
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
  }, [platforms.length]);

  // Efecto para actualizar cards visibles en resize
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
  }, [currentIndex, platforms.length, calculateVisibleCards]);

  // Navegación
  const nextSlide = useCallback(() => {
    setDirection(1);
    if (loop) {
      setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    } else {
      setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
    }
    setProgress(0);
  }, [loop, maxIndex]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    if (loop) {
      setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
    } else {
      setCurrentIndex(prev => Math.max(prev - 1, 0));
    }
    setProgress(0);
  }, [loop, maxIndex]);

  const goToSlide = useCallback((index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(Math.min(index, maxIndex));
    setProgress(0);
  }, [currentIndex, maxIndex]);

  // Autoplay
  useEffect(() => {
    if (!autoplay || isPaused || shouldCenter) return;

    const startTime = Date.now();

    // Actualizar barra de progreso
    if (showProgressBar) {
      progressRef.current = setInterval(() => {
        const elapsed = Date.now() - startTime;
        setProgress(Math.min((elapsed / autoplayInterval) * 100, 100));
      }, 50);
    }

    autoplayRef.current = setTimeout(() => {
      nextSlide();
    }, autoplayInterval);

    return () => {
      if (autoplayRef.current) clearTimeout(autoplayRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [autoplay, autoplayInterval, isPaused, currentIndex, nextSlide, shouldCenter, showProgressBar]);

  // Navegación con teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!containerRef.current?.contains(document.activeElement)) return;

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          prevSlide();
          break;
        case 'ArrowRight':
          e.preventDefault();
          nextSlide();
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(maxIndex);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide, maxIndex]);

  // Touch handlers para swipe
  const onTouchStart = useCallback((e) => {
    if (shouldCenter) return; // No swipe si todas las cards son visibles
    setTouchEnd(null);
    setTouchStart(e.touches[0].clientX);
  }, [shouldCenter]);

  const onTouchMove = useCallback((e) => {
    if (shouldCenter) return;
    if (!touchStart) return;
    setTouchEnd(e.touches[0].clientX);
  }, [shouldCenter, touchStart]);

  const onTouchEnd = useCallback(() => {
    if (shouldCenter) return;
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // Swipe izquierda = siguiente
      if (loop || currentIndex < maxIndex) {
        nextSlide();
      }
    } else if (isRightSwipe) {
      // Swipe derecha = anterior
      if (loop || currentIndex > 0) {
        prevSlide();
      }
    }

    // Reset touch state
    setTouchStart(null);
    setTouchEnd(null);
  }, [shouldCenter, touchStart, touchEnd, currentIndex, maxIndex, loop, nextSlide, prevSlide]);

  // Calcular transform
  const calculateTransform = () => {
    if (shouldCenter) return 0;

    if (!trackRef.current) return 0;

    const slide = trackRef.current.querySelector(`.${styles.carouselSlide}`);
    if (slide) {
      const slideWidth = slide.offsetWidth;
      const trackStyle = window.getComputedStyle(trackRef.current);
      const gap = parseFloat(trackStyle.gap) || 0;
      return currentIndex * (slideWidth + gap);
    }

    return currentIndex * (100 / visibleCards);
  };

  // Determinar qué cards son visibles para lazy loading
  const isCardVisible = (index) => {
    const buffer = 1; // Cargar 1 card extra a cada lado
    return index >= currentIndex - buffer && index < currentIndex + visibleCards + buffer;
  };

  // Determinar si los botones deben estar deshabilitados
  const isPrevDisabled = !loop && currentIndex === 0;
  const isNextDisabled = !loop && currentIndex >= maxIndex;

  return (
    <div
      ref={containerRef}
      className={`${styles.carouselContainer} ${shouldCenter ? styles.centeredCards : ''}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Carrusel de tarjetas"
      aria-roledescription="carousel"
      tabIndex={0}
    >
      {/* Barra de progreso para autoplay */}
      {autoplay && showProgressBar && !shouldCenter && (
        <div className={styles.progressBarContainer}>
          <motion.div
            className={styles.progressBar}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.05 }}
          />
        </div>
      )}

      <div className={styles.carouselWrapper}>
        <button
          className={styles.carouselButton}
          onClick={prevSlide}
          disabled={isPrevDisabled}
          style={{ visibility: shouldCenter ? 'hidden' : 'visible' }}
          aria-label="Anterior"
          aria-controls="carousel-track"
        >
          ‹
        </button>

        <div
          className={styles.carouselContent}
          ref={carouselRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <motion.div
            id="carousel-track"
            className={styles.carouselTrack}
            ref={trackRef}
            animate={{
              x: -calculateTransform(),
            }}
            transition={{
              duration: 0.4,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{
              justifyContent: shouldCenter ? 'center' : 'flex-start'
            }}
            aria-live="polite"
          >
            <AnimatePresence initial={false} custom={direction}>
              {platforms.map((platformKey, index) => {
                const platform = platformsData[platformKey];
                const isSelected = selectedPlatform === platformKey;
                const visible = isCardVisible(index);

                // Lógica genérica para obtener imagen y descripción
                const image = platform[imageField] || platform.image || platform.logo;
                const description = platform.description || defaultDescription;

                return (
                  <motion.div
                    key={platformKey}
                    className={`${styles.carouselSlide} card-item`}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${index + 1} de ${platforms.length}: ${platform.name}`}
                    aria-hidden={!visible}
                  >
                    <Card
                      title={platform.name}
                      description={description}
                      image={image}
                      onClick={() => onCardClick(platformKey)}
                      className={`${styles.clickableCard} ${isSelected ? styles.selectedCard : ''}`}
                      disableEntryAnimation
                      loading={visible ? "eager" : "lazy"}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>

        <button
          className={styles.carouselButton}
          onClick={nextSlide}
          disabled={isNextDisabled}
          style={{ visibility: shouldCenter ? 'hidden' : 'visible' }}
          aria-label="Siguiente"
          aria-controls="carousel-track"
        >
          ›
        </button>
      </div>

      {/* Dots de navegación */}
      {maxIndex > 0 && !shouldCenter && (
        <div className={styles.carouselDots} role="tablist" aria-label="Slides">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              className={`${styles.carouselDot} ${index === currentIndex ? styles.activeDot : ''}`}
              onClick={() => goToSlide(index)}
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Ir a slide ${index + 1}`}
              tabIndex={index === currentIndex ? 0 : -1}
            />
          ))}
        </div>
      )}

      {/* Indicador de posición para screen readers */}
      <div className={styles.srOnly} aria-live="polite" aria-atomic="true">
        Mostrando slide {currentIndex + 1} de {maxIndex + 1}
      </div>
    </div>
  );
};
