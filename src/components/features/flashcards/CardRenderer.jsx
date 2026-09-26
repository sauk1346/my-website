'use client';

import styles from './CardRenderer.module.css';

export default function CardRenderer({ content, layout }) {
  return (
    <div className={`${styles.content} ${layout === 'language' ? styles.language : ''}`}>
      {content}
    </div>
  );
}
