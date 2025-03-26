// mdx-components.jsx
import Link from 'next/link';
import styles from './styles/clases.module.css';
import { CodeBlock } from "./components/CodeBlock";
// Eliminamos la importación de NumberedHeadings
export function useMDXComponents(components) {
  return {
    // Contenedor principal sin numeración de encabezados
    wrapper: ({ children }) => (
      <div className={styles.container}>
        {children}
      </div>
    ),
    // Definir los encabezados normales (sin numeración)
    h1: ({ children, ...props }) => (
      <h1 className={styles.title} {...props}>{children}</h1>
    ),
    h2: ({ children, ...props }) => (
      <h2 className={styles.subtitle} {...props}>{children}</h2>
    ),
    h3: ({ children, ...props }) => (
      <h3 className={styles.subsubtitle || ''} {...props}>{children}</h3>
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
    // Componente personalizado para enlaces (a) que se verán como <Link>
    a: ({ href, children, ...props }) => {
      // Verifica si es un enlace externo
      const isExternal = href && (
        href.startsWith('http') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:')
      );
      // Verifica si es un enlace a un archivo
      const isFileLink = href && (
        href.endsWith('.csv') ||
        href.endsWith('.pdf') ||
        href.endsWith('.xlsx') ||
        href.endsWith('.docx')
      );
      // Clase personalizada para enlaces
      const linkClass = `${styles.link || ''}`;
      if (isExternal || isFileLink) {
        // Para enlaces externos o archivos, usa un enlace normal pero estilizado
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
      // Para enlaces internos, usa el componente Link de Next.js
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