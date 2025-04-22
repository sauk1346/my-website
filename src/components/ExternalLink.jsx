// components/ExternalLink.jsx
import React from 'react';
import styles from '@/styles/ExternalLink.module.css'; // Opcional si prefieres CSS Modules

const ExternalLink = ({ href, children, newTab = true, ...props }) => {
  return (
    <a 
      href={href}
      className={styles.externalLink} // O directamente "external-link" si usas clases globales
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </a>
  );
};

export default ExternalLink;