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
  
  // ✨ NUEVO: Detectar si es un archivo de audio
  const isAudioFile = href && /\.(mp3|wav|ogg|m4a|aac|flac)$/i.test(href);
  
  // Detectar si es un archivo PDF
  const isPdfFile = href && href.toLowerCase().includes('.pdf');
  
  // Para enlaces externos o archivos, usar <a>
  if (isExternal || isFileLink) {
    return (
      <a
        href={href}
        className={`${styles.link} ${className || ''}`.trim()}
        target={newTab !== false ? "_blank" : undefined}
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
        
        {/* Icono visual para archivos PDF */}
        {isPdfFile && (
          <svg
            className={styles.pdfIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 12v5M12 12v5M8 12v5M12 3v6a1 1 0 001 1h6"
            />
          </svg>
        )}
        
        {/* ✨ NUEVO: Icono visual para archivos de audio */}
        {isAudioFile && (
          <svg
            className={styles.musicIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
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

// Export default para mayor flexibilidad de import
export default SmartLink;