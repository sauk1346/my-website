'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Función para verificar el tema actual
  const checkTheme = () => {
    if (typeof window === 'undefined') return false;
    
    // Verificar clases de modo oscuro
    const hasDarkMode = document.documentElement.classList.contains('dark-mode');
    const hasDarkOverride = document.documentElement.classList.contains('dark-mode-override');
    
    // Verificar clase de modo claro forzado
    const hasLightOverride = document.documentElement.classList.contains('light-mode-override');
    
    // Verificar preferencia del sistema si no hay override
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Lógica de decisión
    if (hasLightOverride) return false;
    if (hasDarkOverride) return true;
    if (hasDarkMode) return true;
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') return true;
    if (savedTheme === 'light') return false;
    
    return prefersDark;
  };
  
  // Detectar el tema inicial y cambios
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const initialDarkMode = checkTheme();
      console.log('Estado inicial del tema:', initialDarkMode ? 'oscuro' : 'claro');
      setDarkMode(initialDarkMode);
      setMounted(true);
      
      // Observar cambios en las clases
      const observer = new MutationObserver(() => {
        const newDarkMode = checkTheme();
        setDarkMode(newDarkMode);
      });
      
      observer.observe(document.documentElement, { 
        attributes: true,
        attributeFilter: ['class'] 
      });
      
      return () => observer.disconnect();
    }
  }, []);
  
  // Función para cambiar el tema
  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    console.log('Cambiando tema a:', newDarkMode ? 'oscuro' : 'claro');
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
      
      // Limpiar todas las clases relacionadas con temas
      document.documentElement.classList.remove('dark-mode');
      document.documentElement.classList.remove('dark-mode-override');
      document.documentElement.classList.remove('light-mode-override');
      
      // Aplicar la nueva clase según el tema seleccionado
      if (newDarkMode) {
        document.documentElement.classList.add('dark-mode-override');
      } else {
        document.documentElement.classList.add('light-mode-override');
      }
    }
  };
  
  // Evitar problemas de hidratación
  if (!mounted) {
    return (
      <div className={styles.navbar}>
        <div className={styles.container}>
          {/* Contenido del navbar sin botón de tema */}
          <ul className={styles.menu}>
            <li><Link href="/inacap" className={styles.link}>Inacap</Link></li>
            <li><Link href="/bootcamps" className={styles.link}>Bootcamp</Link></li>
            <li><Link href="/portfolio" className={styles.link}>Portfolio</Link></li>
          </ul>
          
          <Link href="/" className={styles.logo}>SaukCode</Link>
          
          <ul className={styles.menu}>
            <li><Link href="/" className={styles.link}>Home</Link></li>
            <li><Link href="/about" className={styles.link}>About</Link></li>
            <li><Link href="/contact" className={styles.link}>Contact</Link></li>
            <li><div className={styles.themeToggle}></div></li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        {/* Left navbar-side */}
        <ul className={styles.menu}>
          <li>
            <Link href="/inacap" className={styles.link}>
              Inacap
            </Link>
          </li>
          <li>
            <Link href="/bootcamps" className={styles.link}>
              Bootcamp
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className={styles.link}>
              Portfolio
            </Link>
          </li>
        </ul>
        
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          SaukCode
        </Link>
        
        {/* Right navbar-side */}
        <ul className={styles.menu}>
          <li>
            <Link href="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.link}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.link}>
              Contact
            </Link>
          </li>
          <li>
            <label className={styles.themeToggle}>
              <svg
                className={darkMode ? styles.iconInactive : styles.iconActive}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <path
                  d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input 
                type="checkbox" 
                checked={darkMode}
                onChange={toggleTheme}
                className={styles.toggleInput} 
              />
              <span className={styles.toggleSlider}></span>
              <svg
                className={darkMode ? styles.iconActive : styles.iconInactive}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;