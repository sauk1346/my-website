// Text components
export { H1, H2, H3 } from './text/Headings';
export { Paragraph } from './text/Paragraph';
export { UnorderedList, OrderedList, ListItem } from './text/Lists';

// Layout components
export { Container } from './layout/Container';
export { Table, TableHead, TableBody, TableRow, TableHeader, TableCell } from './layout/Tables';
export { Blockquote } from './layout/Blockquote';
export { default as Solution } from './layout/Solution';

// Code components
export { PreBlock, Code } from './code/CodeComponents';
export { TerminalOutput } from './code/TerminalOutput'; // Agregar esta línea

// Media components
export { CustomLink } from './media/Links';
export { CustomIframe } from './media/Iframe';

// Math components
export { MathBlock, InlineMathComponent } from './math/MathComponents';

// Utils
export { getSlug } from './utils/slugify';