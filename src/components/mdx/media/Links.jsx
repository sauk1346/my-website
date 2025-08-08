import React from 'react';
import Link from 'next/link';
import styles from './Links.module.css';

export const CustomLink = ({ href, children, ...props }) => {
  const isExternal = href && (
    href.startsWith('http') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:')
  );
  
  const isFileLink = href && (
    href.endsWith('.csv') ||
    href.endsWith('.pdf') ||
    href.endsWith('.xlsx') ||
    href.endsWith('.docx')
  );
  
  if (isExternal || isFileLink) {
    return (
      <a
        href={href}
        className={styles.link}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }
  
  return (
    <Link
      href={href}
      className={styles.link}
      {...props}
    >
      {children}
    </Link>
  );
};