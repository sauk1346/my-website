"use client";
import { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

export default function MathDisplay({ 
  formula, 
  inline = false, 
  steps = false, 
  spacing = 5 
}) {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (containerRef.current) {
      let processedFormula = formula;
      
      // Procesar automáticamente fórmulas multi-línea si steps=true
      if (steps) {
        // Dividir por saltos de línea y filtrar líneas vacías
        const lines = formula.split('\n').filter(line => line.trim());
        
        // Envolver el contenido con un entorno align*
        processedFormula = `\\begin{align*}\n${
          lines.join(`\\\\[${spacing}pt]\n`)
        }\n\\end{align*}`;
      }
      
      katex.render(processedFormula, containerRef.current, {
        throwOnError: false,
        displayMode: !inline
      });
    }
  }, [formula, inline, steps, spacing]);
  
  return (
    <div
      ref={containerRef}
      className={`math-display ${inline ? 'math-inline' : ''}`}
      style={{ display: inline ? 'inline-block' : 'block' }}
    />
  );
}