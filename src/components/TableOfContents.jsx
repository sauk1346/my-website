"use client"
import React, { useEffect, useState, useCallback } from 'react';
import styles from '../styles/TableOfContents.module.css';

const TableOfContents = () => {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState('');
  const [isFixed, setIsFixed] = useState(false);
  const [initialPosition, setInitialPosition] = useState({ top: 0, left: 0, width: 0 });
  
  // Obtener los encabezados con sus rangos de posición
  useEffect(() => {
    const getHeadings = () => {
      // Obtener todos los encabezados del documento
      const elements = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
        .filter(element => element.id);
      
      // Ordenar elementos por posición en la página
      elements.sort((a, b) => {
        const posA = a.getBoundingClientRect().top + window.scrollY;
        const posB = b.getBoundingClientRect().top + window.scrollY;
        return posA - posB;
      });
      
      // Crear la estructura de datos de encabezados con rangos
      const headingsList = elements.map((element, index) => {
        const id = element.id;
        const text = element.textContent;
        const level = Number(element.tagName.substring(1));
        const startPosition = element.getBoundingClientRect().top + window.scrollY;
        
        // Determinar la posición final (hasta el próximo encabezado o final de página)
        let endPosition;
        if (index < elements.length - 1) {
          endPosition = elements[index + 1].getBoundingClientRect().top + window.scrollY;
        } else {
          // Si es el último encabezado, usar el final del documento
          endPosition = document.body.scrollHeight;
        }
        
        return {
          id,
          text,
          level,
          startPosition,
          endPosition
        };
      });
      
      setHeadings(headingsList);
    };

    getHeadings();

    // Detectar cambios en el DOM y actualizar los encabezados
    const observer = new MutationObserver(() => {
      // Usar setTimeout para dar tiempo a que el DOM se actualice completamente
      setTimeout(getHeadings, 100);
    });
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

  // Nueva lógica para determinar el encabezado activo basada en rangos
  const handleScroll = useCallback(() => {
    // Posición actual del scroll más un pequeño offset para mejorar la experiencia
    const scrollPosition = window.scrollY + 100;
    let foundActive = false;
    
    // Buscar el encabezado activo comprobando si estamos dentro de su rango
    for (const heading of headings) {
      // Si el scroll está dentro del rango de este encabezado
      if (scrollPosition >= heading.startPosition && scrollPosition < heading.endPosition) {
        if (activeId !== heading.id) {
          setActiveId(heading.id);
        }
        foundActive = true;
        break; // Encontramos el encabezado activo, no necesitamos seguir buscando
      }
    }
    
    // Si no encontramos ninguno en rango, desactivar todos
    if (!foundActive && activeId !== '') {
      setActiveId('');
    }
  }, [headings, activeId]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Llamar inicialmente para establecer el estado correcto
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Scroll suave al elemento
      element.scrollIntoView({ behavior: 'smooth' });
      // Activar este encabezado (aunque handleScroll lo hará automáticamente también)
      setActiveId(id);
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
              key={heading.id}
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
                  handleClick(heading.id);
                }}
                className={`${styles.tocLink} ${activeId === heading.id ? styles.active : ''}`}
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