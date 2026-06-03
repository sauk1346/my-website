import React from 'react';
import 'katex/dist/katex.min.css';
import {
// Text components
H1, H2, H3,
Paragraph, P,
UnorderedList, OrderedList, ListItem, List,
// Layout components
Container,
SmartTable,
Blockquote,
Solution,
Quiz, QuizQuestion,
MultiColumn,
Callout,
Tabs, Tab,
// Code components
PreBlock, Code,
TerminalOutput,
// Media components
SmartLink,
CustomIframe,
SmartFigure, FigureProvider, FigureRef,
TableProvider, TableRef,
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
// Table elements - Mapeo simple para compatibilidad con SmartTable
table: (props) => <SmartTable {...props} />,
thead: (props) => <thead {...props} />,
tbody: (props) => <tbody {...props} />,
tr: (props) => <tr {...props} />,
th: (props) => <th {...props} />,
td: (props) => <td {...props} />,
// Code elements
pre: PreBlock,
code: Code,
// Terminal component
TerminalOutput,
// Media elements
a: SmartLink,
iframe: CustomIframe,
// Mapear img a SmartFigure para sintaxis markdown automática
img: (props) => <SmartFigure lightbox={true} center={true} {...props} />,
// COMPONENTES PERSONALIZADOS
Solution,
Quiz,
QuizQuestion,
SmartTable,
SmartLink,
SmartFigure,
FigureProvider,
FigureRef,
TableProvider,
TableRef,
MultiColumn,
Callout,
Tabs,
Tab,
List,
P,
// Permitir componentes personalizados adicionales
 ...components,
 };
}