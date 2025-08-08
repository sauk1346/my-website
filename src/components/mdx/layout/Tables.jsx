import React from 'react';
import styles from './Tables.module.css';

export const Table = ({ children, ...props }) => (
  <div className={styles.tableWrapper}>
    <table className={styles.table} {...props}>
      {children}
    </table>
  </div>
);

export const TableHead = ({ children, ...props }) => (
  <thead {...props}>
    {children}
  </thead>
);

export const TableBody = ({ children, ...props }) => (
  <tbody {...props}>
    {children}
  </tbody>
);

export const TableRow = ({ children, ...props }) => (
  <tr {...props}>
    {children}
  </tr>
);

export const TableHeader = ({ children, ...props }) => (
  <th {...props}>
    {children}
  </th>
);

export const TableCell = ({ children, dataLabel, className, ...props }) => (
  <td 
    className={className || ''} 
    data-label={dataLabel}
    {...props}
  >
    {children}
  </td>
);

// Componentes adicionales para casos específicos
export const CodeCell = ({ children, dataLabel, ...props }) => (
  <td 
    className={styles.code}
    data-label={dataLabel}
    {...props}
  >
    {children}
  </td>
);

export const LinkCell = ({ children, href, dataLabel, ...props }) => (
  <td 
    data-label={dataLabel}
    {...props}
  >
    {href ? (
      <a href={href} className={styles.courseLink}>
        {children}
      </a>
    ) : (
      children
    )}
  </td>
);