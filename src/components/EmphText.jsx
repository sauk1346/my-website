'use client'

import React, { useEffect, useState } from 'react';
import styles from '@/styles/EmphText.module.css';

const EmphText = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    // Función para verificar el modo oscuro
    const checkDarkMode = () => {
      const htmlElement = document.documentElement;
      const isDark = 
        htmlElement.classList.contains('dark-mode-override') || 
        (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && 
         !htmlElement.classList.contains('light-mode-override'));
      
      setIsDarkMode(isDark);
    };

    // Verificar al cargar
    checkDarkMode();
    
    // Configurar listener para cambios de tema del sistema
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => checkDarkMode();
    mediaQuery.addEventListener('change', handleChange);
    
    // Establecer un MutationObserver para detectar cambios en las clases de tema
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    // Limpieza al desmontar
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      observer.disconnect();
    };
  }, []);

  // Usamos las clases exactas del EmphText.module.css proporcionado
  return (
    <span className={`${styles['emph-text']} ${isDarkMode ? styles.dark : styles.light}`}>
      {children}
    </span>
  );
};

export default EmphText;