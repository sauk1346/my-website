'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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
  
  // Detectar el tema inicial y cambios + manejar el overflow del body
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Configuración del tema
      const initialDarkMode = checkTheme();
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
      
      // Manejar el overflow del body basado en mobileMenuOpen
      if (mobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
      
      return () => {
        observer.disconnect();
        document.body.style.overflow = '';
      };
    }
  }, [mobileMenuOpen]);
  
  // Función para cambiar el tema
  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    
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
  
  // Función para navegar a una sección
  const navigateToSection = (sectionId, e) => {
    if (e) e.preventDefault();
    
    // Si no estamos en la página principal, primero navegamos a home
    if (pathname !== '/') {
      // Almacenar el destino de la sección en sessionStorage
      sessionStorage.setItem('scrollToSection', sectionId);
      router.push('/');
    } else {
      // Si ya estamos en la página principal, scroll directo a la sección
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    // Cerrar el menú móvil si está abierto
    setMobileMenuOpen(false);
  };
  
  // Función para verificar si hay que hacer scroll al cargar la página
  useEffect(() => {
    if (pathname === '/' && typeof window !== 'undefined') {
      const sectionToScroll = sessionStorage.getItem('scrollToSection');
      if (sectionToScroll) {
        // Pequeño timeout para asegurar que la página esté completamente cargada
        setTimeout(() => {
          const section = document.getElementById(sectionToScroll);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
          // Limpiar el sessionStorage después de usar
          sessionStorage.removeItem('scrollToSection');
        }, 500);
      }
    }
  }, [pathname]);
  
  // Evitar problemas de hidratación
  if (!mounted) {
    return (
      <div className={styles.navbar}>
        <div className={styles.container}>
          {/* Logo */}
          <span className={styles.logo}>SaukCode</span>
          
          {/* Menú placeholder */}
          <ul className={styles.menu}>
            <li><span className={styles.link}>Programación</span></li>
            <li><span className={styles.link}>Idiomas</span></li>
            <li><span className={styles.link}>Sobre mí</span></li>
            <li><div className={styles.themeToggle}></div></li>
          </ul>
        </div>
      </div>
    );
  }

  // Componentes para los iconos
  const MenuIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
  
  const CloseIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
  
  // Componente del ThemeToggle para reutilizarlo
  const ThemeToggleComponent = () => (
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
  );

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        {/* Botón del menú para móvil */}
        <button 
          className={styles.menuButton} 
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Abrir menú de navegación"
        >
          <MenuIcon />
        </button>
        
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          SaukCode
        </Link>
        
        {/* Menú principal */}
        <ul className={styles.menu}>
          <li>
            <Link 
              href="/#programacion" 
              onClick={(e) => navigateToSection('programacion', e)} 
              className={styles.link}
            >
              Programación
            </Link>
          </li>
          <li>
            <Link 
              href="/#idiomas" 
              onClick={(e) => navigateToSection('idiomas', e)} 
              className={styles.link}
            >
              Idiomas
            </Link>
          </li>
          <li>
            <Link 
              href="/#sobre-mi" 
              onClick={(e) => navigateToSection('sobre-mi', e)} 
              className={styles.link}
            >
              Sobre mí
            </Link>
          </li>
          <li>
            <ThemeToggleComponent />
          </li>
        </ul>
        
        {/* Menú móvil */}
        <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <button 
            className={styles.closeButton} 
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Cerrar menú de navegación"
          >
            <CloseIcon />
          </button>
          
          <div className={styles.mobileMenuContent}>
            <Link 
              href="/#programacion" 
              onClick={(e) => navigateToSection('programacion', e)} 
              className={`${styles.link} ${styles.mobileMenuItem}`}
            >
              Programación
            </Link>
            <Link 
              href="/#idiomas" 
              onClick={(e) => navigateToSection('idiomas', e)} 
              className={`${styles.link} ${styles.mobileMenuItem}`}
            >
              Idiomas
            </Link>
            <Link 
              href="/#sobre-mi" 
              onClick={(e) => navigateToSection('sobre-mi', e)} 
              className={`${styles.link} ${styles.mobileMenuItem}`}
            >
              Sobre mí
            </Link>
            
            <div className={styles.mobileThemeToggle}>
              <ThemeToggleComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;