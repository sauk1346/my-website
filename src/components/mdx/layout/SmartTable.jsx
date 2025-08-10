import React from 'react';
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
    // KATEX: Detectar fórmulas matemáticas $formula$
    // ========================================
    const katexMatch = text.match(/^\$([^$]+)\$/);
    if (katexMatch) {
      const formula = katexMatch[1];
      return (
        <span 
          className={styles.katexFormula}
          dangerouslySetInnerHTML={{
            __html: typeof window !== 'undefined' && window.katex ? 
              window.katex.renderToString(formula, { throwOnError: false }) : 
              `<em>${formula}$</em>`
          }}
        />
      );
    }
    
    // ========================================
    // MARKDOWN CODE: Detectar código inline `code`
    // ========================================
    const codeMatch = text.match(/^`([^`]+)`$/);
    if (codeMatch) {
      const code = codeMatch[1];
      return (
        <code className={styles.inlineCode}>
          {code}
        </code>
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
                <div className={styles.smartListContent}>{item}</div>
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
    
    // Lista no ordenada con corchetes: [item1,item2,item3]
    const unorderedArrayMatch = text.match(/^\[(.*)\]$/);
    if (unorderedArrayMatch) {
      const items = unorderedArrayMatch[1].split(',').map(item => item.trim()).filter(item => item);
      if (items.length > 0) {
        return (
          <ul className={styles.simpleList}>
            {items.map((item, index) => (
              <li key={index} className={styles.simpleListItem}>
                {item}
              </li>
            ))}
          </ul>
        );
      }
    }
    
    // Lista ordenada con paréntesis: (item1,item2,item3)
    const orderedArrayMatch = text.match(/^\((.*)\)$/);
    if (orderedArrayMatch) {
      const items = orderedArrayMatch[1].split(',').map(item => item.trim()).filter(item => item);
      if (items.length > 0) {
        return (
          <ol className={styles.simpleList}>
            {items.map((item, index) => (
              <li key={index} className={styles.simpleListItem}>
                {item}
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
                {item}
              </li>
            ))}
          </ul>
        );
      }
    }
    
    // Texto normal
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