'use client';
import { useState } from 'react';
import Table from '@/components/features/codevault/CodeTable';
import { sectionsOrder } from '@/data/codevault/codeVaultData';
import styles from './CodeVault.module.css';

const CodeVault = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSection = sectionsOrder[activeIndex];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>CodeVault</h1>

        <div className={styles.tabNavigation}>
          <div className={styles.tabButtons}>
            {sectionsOrder.map((section, index) => (
              <button
                key={index}
                className={`${styles.tabButton} ${activeIndex === index ? styles.activeTab : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                {section.shortTitle}
              </button>
            ))}
          </div>

          <div className={styles.tabContent}>
            <Table
              key={activeIndex}
              title={activeSection.title}
              headers={activeSection.headers}
              data={activeSection.data}
              variant="algorithms"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeVault;
