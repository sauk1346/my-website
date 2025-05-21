'use client';

import { createContext, useContext, useEffect, useState } from 'react';

// Crear contexto para el tema
export const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {}
});

// Hook personalizado para usar el contexto del tema
export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Esta función se llama cuando se hace clic en el botón
  const toggleDarkMode = () => {
    console.log("Toggle dark mode clicked");
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
      
      if (newDarkMode) {
        document.documentElement.classList.add('dark-mode');
      } else {
        document.documentElement.classList.remove('dark-mode');
      }
      
      console.log("Dark mode set to:", newDarkMode);
      console.log("HTML classes:", document.documentElement.className);
    }
  };

  // Este efecto se ejecuta solo en el cliente después del primer renderizado
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Verificar si hay una preferencia guardada
    const savedMode = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedMode === 'dark' || (!savedMode && prefersDark);
    
    console.log("Initial dark mode check:", { savedMode, prefersDark, isDark });
    
    setDarkMode(isDark);
    
    if (isDark) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
    
    setMounted(true);
  }, []);

  // Evitar problemas de hidratación
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}