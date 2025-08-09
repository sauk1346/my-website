import React from 'react';
import Link from 'next/link';
import styles from './SmartLink.module.css';

export const SmartLink = ({ href, children, newTab, className, ...props }) => {
  // Detección más precisa de enlaces externos
  const isExternal = href && (
    href.startsWith('http://') || 
    href.startsWith('https://') || 
    href.startsWith('mailto:') || 
    href.startsWith('tel:')
  );
  
  // Detección ampliada de archivos (case insensitive)
  const isFileLink = href && /\.(csv|pdf|xlsx|docx|zip|rar|jpg|jpeg|png|gif|svg|webp|mp4|mp3|avi|mov)$/i.test(href);
  
  // Para enlaces externos o archivos, usar <a>
  if (isExternal || isFileLink) {
    return (
      <a
        href={href}
        className={`${styles.link} ${className || ''}`.trim()}
        target={newTab !== false ? "_blank" : undefined} // Por defecto nueva pestaña para externos
        rel={newTab !== false ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
        {/* Icono visual para enlaces externos (no archivos) */}
        {isExternal && !isFileLink && (
          <svg 
            className={styles.externalIcon} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
            />
          </svg>
        )}
      </a>
    );
  }
  
  // Para enlaces internos, usar Link de Next.js
  return (
    <Link 
      href={href} 
      className={`${styles.link} ${className || ''}`.trim()} 
      {...props}
    >
      {children}
    </Link>
  );
};