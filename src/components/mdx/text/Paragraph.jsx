import React from 'react';
import styles from './Paragraph.module.css';

export const Paragraph = ({ children, ...props }) => (
  <p className={styles.paragraph} {...props}>
    {children}
  </p>
);

export const P = ({ children, indent = 1 }) => (
  <div
    className={styles.pContainer}
    data-indent={Math.min(Math.max(indent, 1), 4)}
  >
    {children}
  </div>
);