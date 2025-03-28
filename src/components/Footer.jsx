import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer = () => {
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
              <Link href="/inacap" className={styles.link}>
                Inacap
              </Link>
            </li>
            <li>
              <Link href="/bootcamps" className={styles.link}>
                Bootcamps
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className={styles.link}>
                Portfolio
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
              <a href="https://github.com/sauk1346" target="_blank" rel="noopener noreferrer" className={styles.link}>
                <span className={styles.icon}>🐙</span> GitHub
              </a>
            </li>
            <li className={styles.contactItem}>
              <a href="https://www.linkedin.com/in/atmoralesc/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                <span className={styles.icon}>💼</span> LinkedIn
              </a>
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