import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkGfm, // Añadir remark-gfm para soporte de tablas
      remarkMath, // Añadir remark-math para detectar sintaxis LaTeX
    ], 
    rehypePlugins: [
      rehypeKatex, // Añadir rehype-katex para renderizar LaTeX
    ],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
};

export default withMDX(nextConfig);