'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import styles from './Footer.module.css';

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();
  
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
  };
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3 className={styles.title}>About this site</h3>
          <p className={styles.description}>
            Website dedicated to organizing and sharing class notes, programming code, and personal hobbies.
          </p>
        </div>
        
        <div className={styles.section}>
          <h3 className={styles.title}>Quick Links</h3>
          <ul className={styles.linkList}>
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
          </ul>
        </div>
        
        <div className={styles.section}>
          <h3 className={styles.title}>Contact</h3>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <a href="mailto:atmoralesc@gmail.com" className={styles.link}>
                <span className={styles.icon}>✉️</span> Email
              </a>
            </li>
            <li className={styles.contactItem}>
              <Link 
                href="https://github.com/sauk1346" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.link}
              >
                <span className={styles.icon}>🐙</span> GitHub
              </Link>
            </li>
            <li className={styles.contactItem}>
              <Link 
                href="https://www.linkedin.com/in/atmoralesc/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.link}
              >
                <span className={styles.icon}>💼</span> LinkedIn
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className={styles.copyright}>
        <p>© {new Date().getFullYear()} SaukCode. This content is free to share and reuse. If you find it useful, consider giving credit</p>
      </div>
    </footer>
  );
};

export default Footer;