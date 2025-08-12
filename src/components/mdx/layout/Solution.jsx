'use client'
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronDown, ChevronRight, Lightbulb } from 'lucide-react';
import styles from './Solution.module.css';

const Solution = ({
  title = "Solución",
  children,
  defaultOpen = false,
  variant = "default" // "default", "hint", "warning", "info"
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);
  const resizeObserverRef = useRef(null);

  // Función para recalcular altura
  const recalculateHeight = useCallback(() => {
    if (contentRef.current) {
      const newHeight = isOpen ? contentRef.current.scrollHeight : 0;
      setContentHeight(newHeight);
    }
  }, [isOpen]);

  // Configurar ResizeObserver para detectar cambios en el contenido
  useEffect(() => {
    if (!contentRef.current) return;

    // Crear ResizeObserver para detectar cambios de tamaño del contenido
    resizeObserverRef.current = new ResizeObserver((entries) => {
      if (isOpen) {
        for (let entry of entries) {
          const newHeight = entry.target.scrollHeight;
          setContentHeight(newHeight);
        }
      }
    });

    // Observar el contenedor del contenido
    resizeObserverRef.current.observe(contentRef.current);

    // Cleanup
    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
    };
  }, [isOpen]);

  // Recalcular altura cuando cambia isOpen o children
  useEffect(() => {
    recalculateHeight();
    
    // Múltiples recálculos para componentes que se renderizan de forma asíncrona
    const timeouts = [
      setTimeout(recalculateHeight, 50),
      setTimeout(recalculateHeight, 150),
      setTimeout(recalculateHeight, 300),
      setTimeout(recalculateHeight, 500)
    ];
    
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [isOpen, children, recalculateHeight]);

  // Detectar cuando las imágenes se cargan (importante para SmartFigure)
  useEffect(() => {
    if (!isOpen || !contentRef.current) return;

    const images = contentRef.current.querySelectorAll('img');
    let loadedImages = 0;
    const totalImages = images.length;

    if (totalImages === 0) return;

    const onImageLoad = () => {
      loadedImages++;
      recalculateHeight();
      
      // Recalcular una vez más después de que todas las imágenes se carguen
      if (loadedImages === totalImages) {
        setTimeout(recalculateHeight, 100);
      }
    };

    images.forEach(img => {
      if (img.complete) {
        onImageLoad();
      } else {
        img.addEventListener('load', onImageLoad);
        img.addEventListener('error', onImageLoad);
      }
    });

    // Cleanup
    return () => {
      images.forEach(img => {
        img.removeEventListener('load', onImageLoad);
        img.removeEventListener('error', onImageLoad);
      });
    };
  }, [isOpen, children, recalculateHeight]);

  // Detectar cambios en tablas (importante para SmartTable)
  useEffect(() => {
    if (!isOpen || !contentRef.current) return;

    const tables = contentRef.current.querySelectorAll('table');
    
    if (tables.length > 0) {
      // Recalcular altura después de que las tablas se rendericen
      const timeout = setTimeout(recalculateHeight, 200);
      return () => clearTimeout(timeout);
    }
  }, [isOpen, children, recalculateHeight]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const getVariantClasses = () => {
    switch (variant) {
      case "hint":
        return styles.solutionHint;
      case "warning":
        return styles.solutionWarning;
      case "info":
        return styles.solutionInfo;
      default:
        return styles.solutionDefault;
    }
  };

  return (
    <div className={`${styles.solution} ${getVariantClasses()}`}>
      <button
        className={styles.solutionHeader}
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls="solution-content"
      >
        <div className={styles.headerContent}>
          <div className={styles.iconContainer}>
            <Lightbulb size={18} className={styles.ideaIcon} />
            {isOpen ? (
              <ChevronDown size={16} className={styles.chevron} />
            ) : (
              <ChevronRight size={16} className={styles.chevron} />
            )}
          </div>
          <span className={styles.title}>{title}</span>
        </div>
      </button>
      <div
        className={styles.contentWrapper}
        style={{ height: contentHeight }}
        id="solution-content"
      >
        <div
          ref={contentRef}
          className={styles.content}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Solution;