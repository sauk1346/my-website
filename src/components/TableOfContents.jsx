"use client"
import React, { useEffect, useState, useCallback } from 'react';
import styles from '../styles/TableOfContents.module.css';

const TableOfContents = () => {
  const [headings, setHeadings] = useState([]);
  const [activeKey, setActiveKey] = useState('');
  // Estado para controlar si debemos usar fixed positioning
  const [isFixed, setIsFixed] = useState(false);
  // Para guardar la posición inicial del TOC
  const [initialPosition, setInitialPosition] = useState({ top: 0, left: 0, width: 0 });

  // Obtener los encabezados
  useEffect(() => {
    const getHeadings = () => {
      // Obtener todos los elementos de encabezado en su orden natural en el DOM
      const headingElements = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
        .filter((element) => element.id)
        .map((element, index) => {
          // Guardar la posición vertical para usarla después en la detección de scroll
          const offsetTop = element.offsetTop;
          return {
            id: element.id,
            text: element.textContent,
            level: Number(element.tagName.substring(1)),
            uniqueKey: `${element.id}-${index}`,
            offsetTop // Guardar la posición vertical
          };
        });
      setHeadings(headingElements);
    };

    getHeadings();

    // Detectar cambios en el DOM
    const observer = new MutationObserver(getHeadings);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Configurar la posición inicial del TOC
  useEffect(() => {
    if (headings.length > 0) {
      const tocElement = document.getElementById('table-of-contents');
      if (tocElement) {
        const rect = tocElement.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        
        setInitialPosition({
          top: rect.top + scrollTop,
          left: rect.left,
          width: rect.width
        });
      }
    }
  }, [headings]);

  // Manejar el fixed positioning cuando hacemos scroll
  useEffect(() => {
    const handleScrollPosition = () => {
      const scrollPosition = window.scrollY;
      
      // Si hemos hecho scroll más allá de la posición inicial del TOC
      if (scrollPosition > initialPosition.top - 20) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScrollPosition);
    window.addEventListener('resize', handleScrollPosition);
    
    return () => {
      window.removeEventListener('scroll', handleScrollPosition);
      window.removeEventListener('resize', handleScrollPosition);
    };
  }, [initialPosition]);

  // Manejar el resaltado del encabezado activo
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + 100;
    
    // Recorremos los encabezados desde el primero hasta el último
    // para encontrar el que está actualmente visible
    let foundActive = false;
    
    for (let i = 0; i < headings.length; i++) {
      const heading = headings[i];
      const nextHeading = i < headings.length - 1 ? headings[i + 1] : null;
      
      // Si estamos entre este encabezado y el siguiente
      if (
        heading.offsetTop <= scrollPosition && 
        (!nextHeading || nextHeading.offsetTop > scrollPosition)
      ) {
        if (activeKey !== heading.uniqueKey) {
          setActiveKey(heading.uniqueKey);
        }
        foundActive = true;
        break;
      }
    }
    
    // Si no encontramos ningún encabezado activo y estamos al principio del documento
    if (!foundActive && scrollPosition < (headings[0]?.offsetTop || 0) && headings.length > 0) {
      setActiveKey(headings[0].uniqueKey);
    }
    
  }, [headings, activeKey]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const handleClick = (heading) => {
    const element = document.getElementById(heading.id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveKey(heading.uniqueKey);
    }
  };

  if (headings.length === 0) {
    return null;
  }

  // Determinar los estilos a aplicar
  const dynamicStyles = isFixed ? {
    position: 'fixed',
    top: '20px',
    left: `${initialPosition.left}px`,
    width: `${initialPosition.width}px`,
    maxHeight: 'calc(100vh - 40px)',
    overflowY: 'auto',
    zIndex: 100
  } : {};

  return (
    <div id="table-of-contents" className={styles.tocContainer} style={dynamicStyles}>
      <h3 className={styles.tocHeading}>Tabla de Contenidos</h3>
      <nav>
        <ul className={styles.tocList}>
          {headings.map((heading) => (
            <li
              key={heading.uniqueKey}
              className={`${styles.tocItem} ${heading.level === 1 ? styles.level1 : ''} ${
                heading.level === 2 ? styles.level2 : ''
              } ${heading.level === 3 ? styles.level3 : ''} ${
                heading.level === 4 ? styles.level4 : ''
              } ${heading.level >= 5 ? styles.level5 : ''}`}
            >
              <a
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(heading);
                }}
                className={`${styles.tocLink} ${activeKey === heading.uniqueKey ? styles.active : ''}`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* Elemento espaciador para evitar saltos en el layout cuando el TOC se vuelve fixed */}
      {isFixed && (
        <div style={{ height: '1px', width: '100%' }} />
      )}
    </div>
  );
};

export default TableOfContents;