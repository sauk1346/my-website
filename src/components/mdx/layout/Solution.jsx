'use client'
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronDown, ChevronRight, Lightbulb } from 'lucide-react';
import styles from './Solution.module.css';

// Iconos SVG para diferentes lenguajes
const ProgrammingIcons = {
  Python: () => (
    <svg width="18" height="18" viewBox="0 0 128 128">
      <path fill="#FFD845" d="M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53C7.614 86.983 12.569 93 21.054 93H31V79.952C31 70.315 39.428 62 49.33 62zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zm74.789 25.921C120.183 40.363 116.178 34 107.682 34H97v12.981C97 57.031 88.206 65 78.489 65H49.33C41.342 65 35 72.326 35 80.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0C85.862 120.831 93 116.549 93 108.126V97H64v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z"/>
    </svg>
  ),
  
  JavaScript: () => (
    <svg width="18" height="18" viewBox="0 0 128 128" fill="none">
      <path fill="#F0DB4F" d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"></path>
    </svg>
  ),

  Java: () => (
    <svg width="24" height="24" viewBox="0 0 128 128" fill="none">
      <path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"></path><path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"></path><path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"></path><path fill="#EA2D2E" d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"></path><path fill="#0074BD" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"></path>
    </svg>
  ),

  C: () => (
    <svg width="18" height="18" viewBox="0 0 128 128">
      <path fill="#004482" d="M63.443 0c-1.782 0-3.564.39-4.916 1.172L11.594 28.27C8.89 29.828 6.68 33.66 6.68 36.78v54.197c0 1.562.55 3.298 1.441 4.841l-.002.002c.89 1.543 2.123 2.89 3.475 3.672l46.931 27.094c2.703 1.562 7.13 1.562 9.832 0h.002l46.934-27.094c1.352-.78 2.582-2.129 3.473-3.672.89-1.543 1.441-3.28 1.441-4.843V36.779c0-1.557-.55-3.295-1.441-4.838v-.002c-.891-1.545-2.121-2.893-3.473-3.67L68.359 1.173C67.008.39 65.226 0 63.443 0zm.002 26.033c13.465 0 26.02 7.246 32.77 18.91l-16.38 9.479c-3.372-5.836-9.66-9.467-16.39-9.467-10.432 0-18.922 8.49-18.922 18.924S53.013 82.8 63.445 82.8c6.735 0 13.015-3.625 16.395-9.465l16.375 9.477c-6.746 11.662-19.305 18.91-32.77 18.91-20.867 0-37.843-16.977-37.843-37.844s16.976-37.844 37.843-37.844v-.002zM92.881 57.57h4.201v4.207h4.203v4.203h-4.203v4.207h-4.201V65.98h-4.207v-4.203h4.207V57.57zm15.765 0h4.208v4.207h4.203v4.203h-4.203v4.207h-4.208V65.98h-4.205v-4.203h4.205V57.57z"></path>
    </svg>
  ),

  "C++": () => (
      <svg width="18" height="18" viewBox="0 0 128 128" fill="none">      
        <path fill="#00599c" d="M118.766 95.82c.89-1.543 1.441-3.28 1.441-4.843V36.78c0-1.558-.55-3.297-1.441-4.84l-55.32 31.94Zm0 0"></path>
        <path fill="#004482" d="m68.36 126.586 46.933-27.094c1.352-.781 2.582-2.129 3.473-3.672l-55.32-31.94L8.12 95.82c.89 1.543 2.121 2.89 3.473 3.672l46.933 27.094c2.703 1.562 7.13 1.562 9.832 0Zm0 0"></path>
        <path fill="#659ad2" d="M118.766 31.941c-.891-1.546-2.121-2.894-3.473-3.671L68.359 1.172c-2.703-1.563-7.129-1.563-9.832 0L11.594 28.27C8.89 29.828 6.68 33.66 6.68 36.78v54.196c0 1.562.55 3.3 1.441 4.843L63.445 63.88Zm0 0"></path>
        <path fill="#fff" d="M63.445 26.035c-20.867 0-37.843 16.977-37.843 37.844s16.976 37.844 37.843 37.844c13.465 0 26.024-7.247 32.77-18.91L79.84 73.335c-3.38 5.84-9.66 9.465-16.395 9.465-10.433 0-18.922-8.488-18.922-18.922 0-10.434 8.49-18.922 18.922-18.922 6.73 0 13.017 3.629 16.39 9.465l16.38-9.477c-6.75-11.664-19.305-18.91-32.77-18.91zM92.88 57.57v4.207h-4.207v4.203h4.207v4.207h4.203V65.98h4.203v-4.203h-4.203V57.57H92.88zm15.766 0v4.207h-4.204v4.203h4.204v4.207h4.207V65.98h4.203v-4.203h-4.203V57.57h-4.207z"></path>
      </svg>
  ),

  SQL: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" fill="#336791"/>
      <path d="M7 7v2h3V7H7zm0 3v2h3v-2H7zm0 3v2h3v-2H7zm4-6v2h6V7h-6zm0 3v2h6v-2h-6zm0 3v2h6v-2h-6z" fill="white"/>
    </svg>
  ),

  MongoDB: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M17.18 9.518c-1.263-5.56-4.242-7.387-4.562-8.086C12.266.939 11.885 0 11.885 0c-.035.525-.739 1.548-.722 3.772.019 2.542.945 3.578 1.124 4.428.169.806.816 6.115-2.335 8.654 1.543-.208 3.314-.842 4.335-2.08 1.02-1.238 1.512-2.656 1.512-4.175 0-.938-.279-1.981-.621-1.081z" fill="#4DB33D"/>
      <path d="M11.885 24c.07-.269.45-.889.888-2.235.42-1.295.888-3.24.888-3.24s-.592.291-1.011.622c-.42.331-.592.719-.592.719-.105.175-.21.4-.21.525 0 .105.035.21.037.609z" fill="#6CAC47"/>
      <path d="M11.885 21.17s2.4-1.274 3.36-6.441c.96-5.166-.96-7.986-.96-7.986s1.92 1.44 1.92 6.24c0 4.8-3.36 6.481-3.36 6.481z" fill="#4DB33D"/>
    </svg>
  )
};

const Solution = ({
  title = "Solución",
  children,
  defaultOpen = false,
  variant = "default", // "default", "hint", "warning", "info"
  icon = null // Nuevo prop para el icono
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

  // Función para renderizar el icono
  const renderIcon = () => {
    if (icon && ProgrammingIcons[icon]) {
      const IconComponent = ProgrammingIcons[icon];
      return <IconComponent />;
    }
    return <Lightbulb size={18} className={styles.ideaIcon} />;
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
            {renderIcon()}
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