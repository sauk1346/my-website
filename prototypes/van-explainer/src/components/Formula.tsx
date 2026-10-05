import React, { useMemo } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

type FormulaProps = {
  tex: string;
  displayMode?: boolean;
  fontSize?: number;
  color?: string;
  style?: React.CSSProperties;
};

export const Formula: React.FC<FormulaProps> = ({
  tex,
  displayMode = true,
  fontSize = 48,
  color,
  style,
}) => {
  const html = useMemo(
    () =>
      katex.renderToString(tex, {
        displayMode,
        throwOnError: false,
        output: 'html',
      }),
    [tex, displayMode]
  );

  return (
    <span
      style={{ fontSize, color, ...style }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
