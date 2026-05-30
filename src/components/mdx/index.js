// Text components
export { H1, H2, H3 } from './text/Headings';
export { Paragraph, P } from './text/Paragraph';
export { UnorderedList, OrderedList, ListItem, List } from './text/Lists';
// Layout components
export { Container } from './layout/Container';
export { default as SmartTable } from './layout/SmartTable';
export { Blockquote } from './layout/Blockquote';
export { default as Solution } from './layout/Solution';
export { Quiz, QuizQuestion } from './layout/QuizComponent';
export { default as MultiColumn } from './layout/MultiColumn';
export { default as Callout } from './layout/Callout';
export { Tabs, Tab } from './layout/Tabs';
// Code components
export { PreBlock, Code } from './code/CodeComponents';
export { TerminalOutput } from './code/TerminalOutput';
// Media components
export { SmartLink } from '../ui/SmartLink';
export { CustomIframe } from './media/Iframe';
export { default as SmartFigure, FigureProvider, FigureRef } from './media/SmartFigure';
// Utils
export { getSlug } from './utils/slugify';