"use client";
import { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

export default function MathDisplay({ formula, inline = false }) {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (containerRef.current) {
      katex.render(formula, containerRef.current, {
        throwOnError: false,
        displayMode: !inline
      });
    }
  }, [formula, inline]);
  
  return <div 
    ref={containerRef} 
    className={`math-display ${inline ? 'math-inline' : ''}`}
    style={{ display: inline ? 'inline-block' : 'block' }}
  />;
}