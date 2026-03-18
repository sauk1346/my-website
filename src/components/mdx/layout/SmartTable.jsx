import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import styles from './SmartTable.module.css';

const SmartTable = ({ 
  tableLayout = 'fixed', // 'fixed', 'auto', 'mixed'
  columnWidths = [], // Solo para tableLayout='mixed'
  lists = {},
  headers = [],
  rows = [],
  className = '',
  ...props 
}) => {
  
  const processContent = (content) => {
    if (typeof content !== 'string') {
      return content;
    }
    
    const text = content.trim();
    
    // ========================================
    // CORCHETES ESCAPADOS: Detectar \[texto\] (solo si es todo el contenido)
    // ========================================
    const escapedBracketsMatch = text.match(/^\\\[([^\]]*)\\\]$/);
    if (escapedBracketsMatch) {
      const bracketContent = escapedBracketsMatch[1];
      return `[${bracketContent}]`; // Devolver texto literal con corchetes
    }
    
    // ========================================
    // PARÉNTESIS ESCAPADOS: Detectar \(texto\) (solo si es todo el contenido)
    // ========================================
    const escapedParenthesesMatch = text.match(/^\\\(([^)]*)\\\)$/);
    if (escapedParenthesesMatch) {
      const parenthesesContent = escapedParenthesesMatch[1];
      return `(${parenthesesContent})`; // Devolver texto literal con paréntesis
    }
    
    // ========================================
    // KATEX: Detectar fórmulas matemáticas $formula$ (solo si es todo el contenido)
    // ========================================
    const katexMatch = text.match(/^\$([^$]+)\$/);
    if (katexMatch) {
      const formula = katexMatch[1];
      try {
        const renderedFormula = katex.renderToString(formula, { 
          throwOnError: false,
          displayMode: false,
          output: 'htmlAndMathml',
          trust: true,
          strict: false
        });
        
        return (
          <span 
            className="katex-wrapper"
            style={{
              fontSize: '1.2em',
              lineHeight: '1.2',
              verticalAlign: 'baseline',
              display: 'inline-block'
            }}
            dangerouslySetInnerHTML={{ __html: renderedFormula }}
          />
        );
      } catch (error) {
        console.error('Error rendering KaTeX formula:', error);
        return (
          <span style={{ color: '#dc2626', fontStyle: 'italic' }}>
            [Error rendering: {formula}]
          </span>
        );
      }
    }
    
    // ========================================
    // MARKDOWN CODE: Detectar código inline `code` (solo si es todo el contenido)
    // ========================================
    const fullCodeMatch = text.match(/^`([^`]+)`$/);
    if (fullCodeMatch) {
      const code = fullCodeMatch[1];
      return (
        <code className={styles.inlineCode}>
          {code}
        </code>
      );
    }
    
    // ========================================
    // MARKDOWN BOLD: Detectar texto bold **texto** (solo si es todo el contenido)
    // ========================================
    const fullBoldMatch = text.match(/^\*\*([^*]+)\*\*$/);
    if (fullBoldMatch) {
      const boldText = fullBoldMatch[1];
      return (
        <strong className={styles.boldText}>
          {boldText}
        </strong>
      );
    }
    
    // ========================================
    // MARKDOWN ITALIC: Detectar texto cursiva *texto* (solo si es todo el contenido)
    // ========================================
    const fullItalicMatch = text.match(/^\*([^*]+)\*$/);
    if (fullItalicMatch) {
      const italicText = fullItalicMatch[1];
      return (
        <em className={styles.italicText}>
          {italicText}
        </em>
      );
    }
    
    // ========================================
    // AUDIO: Detectar archivos de audio con formato [texto](archivo.mp3)
    // ========================================
    const audioMatch = text.match(/\[([^\]]+)\]\(([^)]+\.(mp3|wav|ogg|m4a))\)/i);
    if (audioMatch) {
      const [, label, url] = audioMatch;
      const fullPath = url.includes('/') ? url : `/idiomas/chino/audio/${url}`;
      return (
        <audio controls className={styles.audioPlayer}>
          <source src={fullPath} type="audio/mpeg" />
          {label}
        </audio>
      );
    }
    
    // ========================================
    // LISTAS: Referencias externas @listId
    // ========================================
    const listRefMatch = text.match(/^@(\w+)$/);
    if (listRefMatch) {
      const listId = listRefMatch[1];
      if (lists[listId]) {
        return (
          <ul className={styles.smartList}>
            {lists[listId].map((item, index) => (
              <li key={index} className={styles.smartListItem}>
                <div className={styles.smartListContent}>
                  {processContent(item)} {/* ← CAMBIO: Procesar cada item recursivamente */}
                </div>
              </li>
            ))}
          </ul>
        );
      } else {
        return (
          <div className={styles.errorMessage}>
            ⚠️ Lista "@{listId}" no encontrada
          </div>
        );
      }
    }
    
    // ========================================
    // LISTAS: Formato simple inline
    // ========================================
    
    // Lista no ordenada con corchetes: [item1,item2,item3] (solo si NO están escapados)
    const unorderedArrayMatch = text.match(/^(?<!\\)\[(.*)\]$/);
    if (unorderedArrayMatch) {
      const items = unorderedArrayMatch[1].split(',').map(item => item.trim()).filter(item => item);
      if (items.length > 0) {
        return (
          <ul className={styles.simpleList}>
            {items.map((item, index) => (
              <li key={index} className={styles.simpleListItem}>
                {processContent(item)} {/* ← CAMBIO: Procesar cada item recursivamente */}
              </li>
            ))}
          </ul>
        );
      }
    }
    
    // Lista ordenada con paréntesis: (item1,item2,item3) (solo si NO están escapados)
    const orderedArrayMatch = text.match(/^(?<!\\)\((.*)\)$/);
    if (orderedArrayMatch) {
      const items = orderedArrayMatch[1].split(',').map(item => item.trim()).filter(item => item);
      if (items.length > 0) {
        return (
          <ol className={styles.simpleList}>
            {items.map((item, index) => (
              <li key={index} className={styles.simpleListItem}>
                {processContent(item)} {/* ← CAMBIO: Procesar cada item recursivamente */}
              </li>
            ))}
          </ol>
        );
      }
    }
    
    // Lista no ordenada con punto y coma: item1;item2;item3
    if (text.includes(';')) {
      const items = text.split(';').map(item => item.trim()).filter(item => item);
      if (items.length > 1) {
        return (
          <ul className={styles.simpleList}>
            {items.map((item, index) => (
              <li key={index} className={styles.simpleListItem}>
                {processContent(item)} {/* ← CAMBIO: Procesar cada item recursivamente */}
              </li>
            ))}
          </ul>
        );
      }
    }
    
    // ========================================
    // CONTENIDO MIXTO: Detectar código inline `code`, fórmulas KaTeX $formula$, texto bold **texto**, cursiva *texto*, corchetes escapados \[texto\] y paréntesis escapados \(texto\) dentro de texto largo
    // ========================================
    if (text.includes('`') || text.includes('$') || text.includes('*') || text.includes('\\[') || text.includes('\\(')) {
      const parts = [];
      let lastIndex = 0;
      
      // Regex combinado para detectar código, fórmulas KaTeX, texto bold, cursiva, corchetes escapados y paréntesis escapados
      // IMPORTANTE: Bold (**) debe ir antes que italic (*) para evitar conflictos
      // IMPORTANTE: Corchetes y paréntesis escapados deben procesarse para contenido mixto también
      const mixedRegex = /(`([^`]+)`)|(\$([^$]+)\$)|(\*\*([^*]+)\*\*)|(\*([^*]+)\*)|(\\\[([^\]]*)\\\])|(\\\(([^)]*)\\\))/g;
      let match;
      
      while ((match = mixedRegex.exec(text)) !== null) {
        // Agregar texto antes del elemento encontrado
        if (match.index > lastIndex) {
          const beforeText = text.slice(lastIndex, match.index);
          if (beforeText) {
            parts.push(
              <span key={`text-${lastIndex}`}>
                {beforeText}
              </span>
            );
          }
        }
        
        // Determinar si es código, fórmula KaTeX, texto bold, cursiva, corchetes escapados o paréntesis escapados
        if (match[1]) {
          // Es código inline: `code`
          parts.push(
            <code key={`code-${match.index}`} className={styles.inlineCode}>
              {match[2]}
            </code>
          );
        } else if (match[3]) {
          // Es fórmula KaTeX: $formula$
          const formula = match[4];
          try {
            const renderedFormula = katex.renderToString(formula, { 
              throwOnError: false,
              displayMode: false,
              output: 'htmlAndMathml',
              trust: true,
              strict: false
            });
            
            parts.push(
              <span 
                key={`katex-${match.index}`}
                className="katex-wrapper"
                style={{
                  fontSize: '1.2em',
                  lineHeight: '1.2',
                  verticalAlign: 'baseline',
                  display: 'inline-block'
                }}
                dangerouslySetInnerHTML={{ __html: renderedFormula }}
              />
            );
          } catch (error) {
            console.error('Error rendering KaTeX formula:', error);
            parts.push(
              <span key={`katex-error-${match.index}`} style={{ color: '#dc2626', fontStyle: 'italic' }}>
                [Error: {formula}]
              </span>
            );
          }
        } else if (match[5]) {
          // Es texto bold: **texto**
          const boldText = match[6];
          parts.push(
            <strong key={`bold-${match.index}`} className={styles.boldText}>
              {boldText}
            </strong>
          );
        } else if (match[7]) {
          // Es texto cursiva: *texto*
          const italicText = match[8];
          parts.push(
            <em key={`italic-${match.index}`} className={styles.italicText}>
              {italicText}
            </em>
          );
        } else if (match[9]) {
          // Son corchetes escapados: \[texto\]
          const bracketContent = match[10];
          parts.push(
            <span key={`bracket-${match.index}`}>
              [{bracketContent}]
            </span>
          );
        } else if (match[11]) {
          // Son paréntesis escapados: \(texto\)
          const parenthesesContent = match[12];
          parts.push(
            <span key={`parentheses-${match.index}`}>
              ({parenthesesContent})
            </span>
          );
        }
        
        lastIndex = match.index + match[0].length;
      }
      
      // Agregar texto después del último elemento
      if (lastIndex < text.length) {
        const afterText = text.slice(lastIndex);
        if (afterText) {
          parts.push(
            <span key={`text-${lastIndex}`}>
              {afterText}
            </span>
          );
        }
      }
      
      // Si encontramos partes mixtas, devolver el resultado combinado
      if (parts.length > 0) {
        return <span>{parts}</span>;
      }
    }
    
    // Texto normal sin código inline, fórmulas, bold, cursiva, corchetes escapados o paréntesis escapados
    return content;
  };

  const getTableClasses = () => {
    let classes = styles.table;
    
    if (tableLayout === 'auto') {
      classes += ` ${styles.tableLayoutAuto}`;
    } else if (tableLayout === 'mixed') {
      classes += ` ${styles.tableLayoutMixed}`;
    }
    
    if (className) {
      classes += ` ${className}`;
    }
    
    return classes;
  };

  const getColumnStyle = (columnIndex) => {
    if (tableLayout === 'mixed' && columnWidths[columnIndex]) {
      return { width: columnWidths[columnIndex] };
    }
    return {};
  };

  return (
    <div className={styles.tableWrapper}>
      <table 
        className={getTableClasses()}
        {...props}
      >
        {/* HEADERS */}
        {headers.length > 0 && (
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th 
                  key={index}
                  style={getColumnStyle(index)}
                  data-column={index}
                >
                  {processContent(header)}
                </th>
              ))}
            </tr>
          </thead>
        )}
        
        {/* ROWS */}
        {rows.length > 0 && (
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td 
                    key={cellIndex}
                    data-label={headers[cellIndex] || `Column ${cellIndex + 1}`}
                  >
                    {processContent(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default SmartTable;