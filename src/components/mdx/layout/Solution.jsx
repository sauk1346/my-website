'use client'
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronRight, Lightbulb } from 'lucide-react';
import styles from './Solution.module.css';

const Solution = ({
  title = "Solución",
  children,
  defaultOpen = false,
  variant = "default" // "default", "hint", "warning", "info"
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  // Calcular altura del contenido para animación suave
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen, children]);

  // Recalcular altura cuando cambia el contenido
  useEffect(() => {
    if (isOpen && contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children, isOpen]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const getVariantClasses = () => {
    switch (variant) {
      case "hint":
        return styles.solutionHint;
      case "warning":
        return styles.solutionWarning;
      case "info":
        return styles.solutionInfo;
      default:
        return styles.solutionDefault;
    }
  };

  return (
    <div className={`${styles.solution} ${getVariantClasses()}`}>
      <button
        className={styles.solutionHeader}
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls="solution-content"
      >
        <div className={styles.headerContent}>
          <div className={styles.iconContainer}>
            <Lightbulb size={18} className={styles.ideaIcon} />
            {isOpen ? (
              <ChevronDown size={16} className={styles.chevron} />
            ) : (
              <ChevronRight size={16} className={styles.chevron} />
            )}
          </div>
          <span className={styles.title}>{title}</span>
        </div>
      </button>
      
      <div 
        className={styles.contentWrapper}
        style={{ height: contentHeight }}
        id="solution-content"
      >
        <div 
          ref={contentRef}
          className={styles.content}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Solution;