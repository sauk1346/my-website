"use client";
import React, { useEffect, useRef, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-json";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-python";

export function CodeBlock({ children, language }) {
  const codeRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [highlighted, setHighlighted] = useState(false);
  
  // Resaltado de sintaxis solo en el cliente después del primer renderizado
  useEffect(() => {
    if (codeRef.current && !highlighted) {
      Prism.highlightElement(codeRef.current);
      setHighlighted(true);
    }
  }, [highlighted]);
  
  const copyToClipboard = () => {
    if (codeRef.current) {
      const text = codeRef.current.textContent || "";
      navigator.clipboard.writeText(text).then(
        () => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        },
        () => {
          console.error("No se pudo copiar el texto");
        }
      );
    }
  };
  
  return (
    <div className="relative code-block-container">
      {/* Mantener el orden de las clases consistente */}
      <pre className={`language-${language} relative`}>
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white text-xs rounded px-2 py-1 opacity-60 hover:opacity-100 transition-opacity"
          aria-label="Copiar código"
        >
          {copied ? "✓ Copiado" : "Copiar"}
        </button>
        {/* Usar suppressHydrationWarning en el código para evitar errores de hidratación */}
        <code 
          ref={codeRef} 
          className={`language-${language}`}
          suppressHydrationWarning
        >
          {children}
        </code>
      </pre>
      <style jsx>{`
        .relative {
          position: relative;
        }
        .absolute {
          position: absolute;
        }
        .top-2 {
          top: 0.5rem;
        }
        .right-2 {
          right: 0.5rem;
        }
        .bg-gray-700 {
          background-color: #374151;
        }
        .hover\\:bg-gray-600:hover {
          background-color: #4B5563;
        }
        .text-white {
          color: white;
        }
        .text-xs {
          font-size: 0.75rem;
        }
        .rounded {
          border-radius: 0.25rem;
        }
        .px-2 {
          padding-left: 0.5rem;
          padding-right: 0.5rem;
        }
        .py-1 {
          padding-top: 0.25rem;
          padding-bottom: 0.25rem;
        }
        .opacity-60 {
          opacity: 0.6;
        }
        .hover\\:opacity-100:hover {
          opacity: 1;
        }
        .transition-opacity {
          transition-property: opacity;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
        }
        /* Ajustes para reducir márgenes */
        pre {
          padding: 0.75rem !important;
          margin: 0 !important;
        }
        code {
          padding: 0 !important;
        }
        .code-block-container {
          margin: 0;
          line-height: 1.4;
        }
      `}</style>
    </div>
  );
}