import React from 'react';
import styles from './Tables.module.css';

export const Table = ({ children, ...props }) => (
  <table className={styles.table} {...props}>
    {children}
  </table>
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
  <tr className={styles.tr} {...props}>
    {children}
  </tr>
);

export const TableHeader = ({ children, ...props }) => (
  <th className={styles.th} {...props}>
    {children}
  </th>
);

export const TableCell = ({ children, ...props }) => (
  <td className={styles.td} {...props}>
    {children}
  </td>
);