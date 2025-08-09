import React from 'react';
import styles from './SmartTable.module.css';

const SmartTable = ({ children, lists = {}, className = '' }) => {
  const processContent = (content) => {
    if (typeof content !== 'string') {
      return content;
    }
    
    const text = content.trim();
    
    // ========================================
    // AUDIO: Detectar archivos de audio
    // ========================================
    if (text.endsWith('.mp3') || text.endsWith('.wav') || text.endsWith('.ogg') || text.endsWith('.m4a')) {
      // Si es solo el nombre del archivo
      if (!text.includes('/')) {
        const fullPath = `/idiomas/chino/audio/${text}`;
        return (
          <audio controls className={styles.audioPlayer}>
            <source src={fullPath} type="audio/mpeg" />
            Audio
          </audio>
        );
      }
      // Si ya es una ruta completa
      return (
        <audio controls className={styles.audioPlayer}>
          <source src={text} type="audio/mpeg" />
          Audio
        </audio>
      );
    }
    
    // Detectar audio con formato markdown: [texto](archivo.mp3)
    const audioMatch = text.match(/\[([^\]]+)\]\(([^)]+\.(mp3|wav|ogg|m4a))\)/i);
    if (audioMatch) {
      const [, label, url] = audioMatch;
      return (
        <audio controls className={styles.audioPlayer}>
          <source src={url} type="audio/mpeg" />
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
    
    // Lista no ordenada con guiones: - item1 - item2 - item3
    if (text.includes('- ')) {
      const items = text.split(/\s*-\s+/).filter(item => item.trim() !== '');
      if (items.length > 1) {
        return (
          <ul className={styles.simpleList}>
            {items.map((item, index) => (
              <li key={index} className={styles.simpleListItem}>
                {item.trim()}
              </li>
            ))}
          </ul>
        );
      }
    }
    
    // Texto normal
    return content;
  };

  const processElement = (element, index = 0) => {
    if (!React.isValidElement(element)) {
      return processContent(element);
    }
    
    if (element.type === 'td') {
      const content = React.Children.toArray(element.props.children).join('');
      const processedContent = processContent(content);
      
      return React.cloneElement(element, {
        key: element.key || index,
        children: processedContent,
        className: `${styles.smartTableCell} ${element.props.className || ''}`,
        'data-label': element.props['data-label'] || element.props.dataLabel,
      });
    }
    
    if (element.props?.children) {
      const processedChildren = React.Children.map(
        element.props.children, 
        (child, childIndex) => processElement(child, childIndex)
      );
      return React.cloneElement(element, { key: element.key || index }, processedChildren);
    }
    
    return element;
  };

  return (
    <div className={`${styles.tableWrapper} ${className}`}>
      <table className={`${styles.table} ${styles.smartTable}`}>
        {React.Children.map(children, (child, index) => processElement(child, index))}
      </table>
    </div>
  );
};

export default SmartTable;