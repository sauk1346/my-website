// mdx-components.jsx
import Link from 'next/link';
import styles from './styles/clases.module.css';
import { CodeBlock } from "./components/CodeBlock";
import MDXWrapper from './components/MDXWrapper';

// Función para generar IDs de encabezados
function getSlug(text) {
  if (typeof text !== 'string' && typeof text !== 'object') {
    return '';
  }
  
  let textContent = '';
  
  if (typeof text === 'string') {
    textContent = text;
  } else if (Array.isArray(text)) {
    textContent = text.map(item => {
      if (typeof item === 'string') return item;
      if (item && item.props && item.props.children) {
        return typeof item.props.children === 'string' 
          ? item.props.children 
          : '';
      }
      return '';
    }).join('');
  } else if (text && text.props && text.props.children) {
    textContent = typeof text.props.children === 'string' 
      ? text.props.children 
      : '';
  }

  return textContent
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function useMDXComponents(components) {
  return {
    // Contenedor principal - con envoltura en MDXWrapper
    wrapper: ({ children }) => (
      <MDXWrapper>
        <div className={styles.container}>
          {children}
        </div>
      </MDXWrapper>
    ),
    // Definir los encabezados con IDs para la tabla de contenidos
    h1: ({ children, ...props }) => (
      <h1 id={props.id || getSlug(children)} className={styles.title} {...props}>{children}</h1>
    ),
    h2: ({ children, ...props }) => (
      <h2 id={props.id || getSlug(children)} className={styles.subtitle} {...props}>{children}</h2>
    ),
    h3: ({ children, ...props }) => (
      <h3 id={props.id || getSlug(children)} className={styles.subsubtitle || ''} {...props}>{children}</h3>
    ),
    // Resto de componentes igual que antes
    p: ({ children, ...props }) => (
      <p className={styles.paragraph} {...props}>{children}</p>
    ),
    ul: ({ children, ...props }) => (
      <ul className={styles.list} {...props}>{children}</ul>
    ),
    li: ({ children, ...props }) => (
      <li className={styles.listItem} {...props}>{children}</li>
    ),
    // Componente personalizado para enlaces
    a: ({ href, children, ...props }) => {
      const isExternal = href && (
        href.startsWith('http') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:')
      );
      const isFileLink = href && (
        href.endsWith('.csv') ||
        href.endsWith('.pdf') ||
        href.endsWith('.xlsx') ||
        href.endsWith('.docx')
      );
      const linkClass = `${styles.link || ''}`;
      if (isExternal || isFileLink) {
        return (
          <a
            href={href}
            className={linkClass}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            {...props}
          >
            {children}
          </a>
        );
      }
      return (
        <Link
          href={href}
          className={linkClass}
          {...props}
        >
          {children}
        </Link>
      );
    },
    // Manejo del código
    pre: ({ children }) => children,
    code: ({ children, className, ...props }) => {
      const match = /language-(\w+)/.exec(className || '');
      const lang = match ? match[1] : '';
      if (lang) {
        return (
          <pre className={`language-${lang}`}>
            <CodeBlock language={lang} {...props}>
              {children}
            </CodeBlock>
          </pre>
        );
      }
      return <code className={styles.inlineCode} {...props}>{children}</code>;
    },
    // Componente personalizado para iframe
    iframe: (props) => (
      <iframe
        width="100%"
        height="440px"
        style={{ border: "none" }}
        {...props}
      />
    ),
    ...components,
  };
}