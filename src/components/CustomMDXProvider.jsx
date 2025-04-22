'use client';

import React, { useState, useEffect } from 'react';
import { MDXProvider } from '@mdx-js/react';

// Componente del lado del cliente para el proveedor MDX
export function CustomMDXProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = 
        document.documentElement.classList.contains('dark-mode') || 
        document.documentElement.classList.contains('dark-mode-override');
      setIsDarkMode(isDark);
    };
    
    checkDarkMode();
    
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { 
      attributes: true,
      attributeFilter: ['class'] 
    });
    
    return () => observer.disconnect();
  }, []);

  const components = {
    details: props => <details {...props} />,
    summary: props => (
      <summary 
        {...props} 
        style={{ 
          color: isDarkMode ? '#ff6b6b' : 'red',
          fontWeight: 'bold',
          cursor: 'pointer',
          ...props.style
        }} 
      />
    )
  };

  return <MDXProvider components={components}>{children}</MDXProvider>;
}