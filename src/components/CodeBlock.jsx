"use client";
import React, { useEffect, useRef, useState } from "react";
import Prism from "prismjs";
// Importamos los temas de Prism que queremos usar (solo necesitamos importar uno
// ya que ahora los colores los manejamos con CSS modules)
import "prismjs/themes/prism.css";
// Importamos los lenguajes necesarios
import "prismjs/components/prism-json";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-python";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-java";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import styles from "@/styles/CodeBlock.module.css";

export function CodeBlock({ children, language }) {
  const codeRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [highlighted, setHighlighted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detectar el modo oscuro
  useEffect(() => {
    // Función para verificar si está en modo oscuro
    const checkDarkMode = () => {
      const isDark = 
        document.documentElement.classList.contains('dark-mode') || 
        document.documentElement.classList.contains('dark-mode-override');
      setIsDarkMode(isDark);
    };
    
    // Verificar el modo actual
    checkDarkMode();
    
    // Configurar un observador para detectar cambios en las clases
    const observer = new MutationObserver(checkDarkMode);
    
    observer.observe(document.documentElement, { 
      attributes: true,
      attributeFilter: ['class'] 
    });
    
    return () => observer.disconnect();
  }, []);

  // Resaltado de sintaxis solo en el cliente después del primer renderizado
  useEffect(() => {
    if (codeRef.current && !highlighted) {
      Prism.highlightElement(codeRef.current);
      setHighlighted(true);
    }
  }, [highlighted]);

  // Re-aplicar resaltado cuando cambia el modo
  useEffect(() => {
    if (codeRef.current && highlighted) {
      Prism.highlightElement(codeRef.current);
    }
  }, [isDarkMode, highlighted]);

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

  const themeClass = isDarkMode ? styles.darkTheme : styles.lightTheme;
  const buttonClass = isDarkMode ? styles.buttonDark : styles.buttonLight;

  return (
    <div className={styles.codeBlockContainer}>
      {/* Añadimos las clases locales styles.pre y styles.code */}
      <pre className={`language-${language} ${styles.relative} ${styles.pre} ${themeClass}`}>
        <button
          onClick={copyToClipboard}
          className={`${styles.copyButton} ${buttonClass}`}
          aria-label="Copiar código"
        >
          {copied ? "✓ Copiado" : "Copiar"}
        </button>
        <code
          ref={codeRef}
          className={`language-${language} ${styles.code}`}
          suppressHydrationWarning
        >
          {children}
        </code>
      </pre>
    </div>
  );
}