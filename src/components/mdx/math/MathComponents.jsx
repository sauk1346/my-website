import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';

export const MathBlock = ({ children, ...props }) => {
  return <BlockMath math={children.toString()} {...props} />;
};

export const InlineMathComponent = ({ children, ...props }) => {
  return <InlineMath math={children.toString()} {...props} />;
};