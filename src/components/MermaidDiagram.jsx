'use client';

import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

const MermaidDiagram = ({ chart }) => {
  const mermaidRef = useRef(null);
  const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;

  useEffect(() => {
    console.log("Renderizando diagrama Mermaid:", chart); // Para depuración
    
    // Intenta inicializar y renderizar
    try {
      mermaid.initialize({
        startOnLoad: false, // Cambiado a false para evitar inicialización automática
        theme: 'default',
        securityLevel: 'loose',
      });
      
      if (mermaidRef.current) {
        mermaidRef.current.innerHTML = ''; // Limpia contenido previo
        
        mermaid.render(id, chart, (svgCode) => {
          if (mermaidRef.current) {
            mermaidRef.current.innerHTML = svgCode;
          }
        });
      }
    } catch (error) {
      console.error("Error rendering mermaid diagram:", error);
      if (mermaidRef.current) {
        mermaidRef.current.innerHTML = `
          <div style="border: 1px solid red; padding: 10px;">
            <p>Error rendering diagram: ${error.message}</p>
            <pre style="background: #f5f5f5; padding: 10px; overflow: auto;">${chart}</pre>
          </div>
        `;
      }
    }
  }, [chart, id]);

  return <div className="mermaid-wrapper" ref={mermaidRef} />;
};

export default MermaidDiagram;