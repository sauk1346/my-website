"use client";

import { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

export default function MathDisplay({ formula }) {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (containerRef.current) {
      katex.render(formula, containerRef.current, {
        throwOnError: false,
        displayMode: true
      });
    }
  }, [formula]);

  return <div ref={containerRef} className="math-display" />;
}