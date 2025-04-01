'use client'; // Si estás usando Next.js 13+ con app router

import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

const MermaidDiagram = ({ children }) => {
  const mermaidRef = useRef(null);

  useEffect(() => {
    if (mermaidRef.current) {
      mermaid.initialize({
        startOnLoad: true,
        theme: 'default',
        securityLevel: 'loose',
      });
      mermaid.contentLoaded();
    }
  }, [children]);

  return (
    <div className="mermaid" ref={mermaidRef}>
      {children}
    </div>
  );
};

export default MermaidDiagram;