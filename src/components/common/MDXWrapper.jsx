"use client"
import React from 'react';
import TableOfContents from './TableOfContents';
import styles from '@/styles/MDXWrapper.module.css';

const MDXWrapper = ({ children }) => {
  return (
    <div className={styles.mdxLayout}>
      <main className={styles.mdxContent}>
        {children}
      </main>
      <aside className={styles.mdxSidebar}>
        <TableOfContents />
      </aside>
    </div>
  );
};

export default MDXWrapper;