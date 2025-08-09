import React from 'react';
import 'katex/dist/katex.min.css';
import {
  // Text components
  H1, H2, H3,
  Paragraph,
  UnorderedList, OrderedList, ListItem,
  // Layout components
  Container,
  Table, TableHead, TableBody, TableRow, TableHeader, TableCell,
  SmartTable, // ← AGREGAR AQUÍ
  Blockquote,
  Solution,
  Quiz, QuizQuestion,
  // Code components
  PreBlock, Code,
  TerminalOutput,
  // Media components
  SmartLink,
  CustomIframe,
} from './components/mdx';

export function useMDXComponents(components) {
  return {
    // Layout
    wrapper: Container,
    
    // Text elements
    h1: H1,
    h2: H2,
    h3: H3,
    p: Paragraph,
    ul: UnorderedList,
    ol: OrderedList,
    li: ListItem,
    blockquote: Blockquote,
    
    // Table elements
    table: Table,
    thead: TableHead,
    tbody: TableBody,
    tr: TableRow,
    th: TableHeader,
    td: TableCell,
    
    // Code elements
    pre: PreBlock,
    code: Code,
    
    // Terminal component
    TerminalOutput,
    
    // Media elements
    a: SmartLink,
    iframe: CustomIframe,
    
    // COMPONENTES PERSONALIZADOS
    Solution,
    Quiz,
    QuizQuestion,
    SmartTable, 
    SmartLink,
    
    // Permitir componentes personalizados adicionales
    ...components,
  };
}