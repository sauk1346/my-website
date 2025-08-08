import React from 'react';
import styles from './Paragraph.module.css';

export const Paragraph = ({ children, ...props }) => (
  <p className={styles.paragraph} {...props}>
    {children}
  </p>
);