'use client';
import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import style from './Breadcrumb.module.css';

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathnames = pathname?.split('/').filter((x) => x);
  
  // Estado para controlar la visualización comprimida en móviles
  const [isCompressed, setIsCompressed] = useState(false);
  // Estado para detectar si el breadcrumb es demasiado largo
  const [isOverflowing, setIsOverflowing] = useState(false);
  // Referencia al contenedor del breadcrumb
  const breadcrumbRef = useRef(null);
  
  // Comprobar si el breadcrumb es demasiado ancho para el contenedor
  useEffect(() => {
    const checkOverflow = () => {
      if (breadcrumbRef.current) {
        const { scrollWidth, clientWidth } = breadcrumbRef.current;
        const isActuallyOverflowing = scrollWidth > clientWidth;
        setIsOverflowing(isActuallyOverflowing);
        
        // Solo comprimir automáticamente si realmente no hay espacio suficiente
        if (isActuallyOverflowing && window.innerWidth <= 768) {
          setIsCompressed(true);
        } else {
          setIsCompressed(false);
        }
      }
    };
    
    // Comprobar al cargar y al cambiar el tamaño de la ventana
    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    
    return () => {
      window.removeEventListener('resize', checkOverflow);
    };
  }, [pathname, pathnames]);
  
  // Determinar qué elementos mostrar en modo comprimido
  const renderBreadcrumbItems = () => {
    if (!pathnames || pathnames.length === 0) {
      return null;
    }
    
    if (!isCompressed || pathnames.length <= 3) {
      // Mostrar todos los elementos
      return pathnames.map((part, index) => {
        const path = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        
        return (
          <React.Fragment key={index}>
            <li className={style.breadcrumbSeparator}>/</li>
            <li>
              {isLast ? (
                <span className={style.breadcrumbText}>{part}</span>
              ) : (
                <Link href={path} className={style.breadcrumbItem}>{part}</Link>
              )}
            </li>
          </React.Fragment>
        );
      });
    } else {
      // Mostrar solo el primer elemento, una elipsis y el último elemento
      const firstItem = (
        <React.Fragment key="first">
          <li className={style.breadcrumbSeparator}>/</li>
          <li>
            <Link
              href={`/${pathnames[0]}`}
              className={style.breadcrumbItem}
            >
              {pathnames[0]}
            </Link>
          </li>
        </React.Fragment>
      );
      
      const ellipsis = (
        <li key="ellipsis" className={style.ellipsis}>...</li>
      );
      
      const lastItem = (
        <React.Fragment key="last">
          <li className={style.breadcrumbSeparator}>/</li>
          <li>
            <span className={style.breadcrumbText}>
              {pathnames[pathnames.length - 1]}
            </span>
          </li>
        </React.Fragment>
      );
      
      // Si hay un nivel intermedio importante (penúltimo), mostrarlo también
      if (pathnames.length > 3) {
        const secondLastIndex = pathnames.length - 2;
        const secondLastPath = `/${pathnames.slice(0, secondLastIndex + 1).join('/')}`;
        
        const secondLastItem = (
          <React.Fragment key="secondLast">
            <li className={style.breadcrumbSeparator}>/</li>
            <li>
              <Link
                href={secondLastPath}
                className={style.breadcrumbItem}
              >
                {pathnames[secondLastIndex]}
              </Link>
            </li>
          </React.Fragment>
        );
        
        return [firstItem, ellipsis, secondLastItem, lastItem];
      }
      
      return [firstItem, ellipsis, lastItem];
    }
  };
  
  // Función para desplazarse al final del breadcrumb
  const scrollToEnd = () => {
    if (breadcrumbRef.current) {
      breadcrumbRef.current.scrollLeft = breadcrumbRef.current.scrollWidth;
    }
  };
  
  // Desplazarse al final cuando cambia la ruta
  useEffect(() => {
    scrollToEnd();
  }, [pathname]);
  
  return (
    <div 
      aria-label="Breadcrumb" 
      className={`${style.breadcrumb} ${isCompressed ? style.compressed : ''} ${isOverflowing ? style.hasOverflow : ''}`}
      ref={breadcrumbRef}
    >
      <ol className={style.breadcrumbList}>
        <li>
          <Link href="/" className={style.breadcrumbItem}>Home</Link>
        </li>
        {renderBreadcrumbItems()}
      </ol>
      
      {isOverflowing && (
        <button 
          className={style.breadcrumbToggle}
          onClick={() => setIsCompressed(!isCompressed)}
          aria-label={isCompressed ? "Expandir navegación" : "Comprimir navegación"}
          title={isCompressed ? "Mostrar ruta completa" : "Mostrar ruta simplificada"}
        >
          {isCompressed ? "+" : "-"}
        </button>
      )}
    </div>
  );
};

export default Breadcrumb;