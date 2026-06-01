'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkDirective from 'remark-directive';
import rehypeRaw from 'rehype-raw';
import { visit } from 'unist-util-visit';
import { Code, PreBlock } from '@/components/mdx/code/CodeComponents';
import styles from './CardRenderer.module.css';

function remarkAudioDirective() {
  return (tree) => {
    visit(tree, 'leafDirective', (node) => {
      if (node.name !== 'audio') return;
      const src = node.attributes?.src ?? '';
      node.type = 'html';
      node.value = `<audio controls src="${src}"></audio>`;
    });
  };
}

export default function CardRenderer({ content, layout }) {
  return (
    <div className={`${styles.content} ${layout === 'language' ? styles.language : ''}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkDirective, remarkAudioDirective]}
        rehypePlugins={[rehypeRaw]}
        components={{
          pre: PreBlock,
          code: Code,
          audio: ({ src }) => (
            <audio controls src={src} className={styles.audio} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
