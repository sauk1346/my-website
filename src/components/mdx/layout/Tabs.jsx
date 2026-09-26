'use client'
import React, { useState } from 'react';
import styles from './Tabs.module.css';

export const Tabs = ({ children }) => {
  const tabs = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.props.label
  );

  const [active, setActive] = useState(0);

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabList} role="tablist">
        {tabs.map((tab, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={active === i}
            className={`${styles.tab} ${active === i ? styles.active : ''}`}
            onClick={() => setActive(i)}
          >
            {tab.props.label}
          </button>
        ))}
      </div>
      <div className={styles.panel}>
        {tabs[active]}
      </div>
    </div>
  );
};

export const Tab = ({ children }) => <>{children}</>;
