import { evaluate } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import {
  PreBlock, Code,
  TerminalOutput,
  SmartFigure, FigureProvider,
  SmartTable, TableProvider,
} from '@/components/mdx';

const components = {
  pre: PreBlock,
  code: Code,
  TerminalOutput,
  SmartFigure,
  SmartTable,
};

const evaluateOptions = {
  ...runtime,
  remarkPlugins: [remarkGfm, remarkMath],
  rehypePlugins: [rehypeKatex],
};

async function renderContent(source) {
  const { default: Content } = await evaluate(source, evaluateOptions);
  return (
    <FigureProvider>
      <TableProvider>
        <Content components={components} />
      </TableProvider>
    </FigureProvider>
  );
}

export async function renderMdxCards(cards) {
  return Promise.all(
    cards.map(async (card) => ({
      ...card,
      front: await renderContent(card.front),
      back: await renderContent(card.back),
    }))
  );
}
