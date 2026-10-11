import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { theme } from '../theme';

/** Centered scene container with an optional step header. */
export const SceneShell: React.FC<{
  step?: string;
  title?: string;
  children: React.ReactNode;
}> = ({ step, title, children }) => {
  return (
    <AbsoluteFill
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: theme.font,
        padding: '60px 80px 140px',
      }}
    >
      {step || title ? (
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          {step ? (
            <div
              style={{
                display: 'inline-block',
                background: theme.accentSoft,
                color: theme.accent,
                fontWeight: 700,
                fontSize: 26,
                padding: '8px 22px',
                borderRadius: 999,
                marginBottom: 14,
                letterSpacing: 1,
              }}
            >
              {step}
            </div>
          ) : null}
          {title ? (
            <div style={{ fontSize: 44, fontWeight: 700, color: theme.text }}>{title}</div>
          ) : null}
        </div>
      ) : null}
      {children}
    </AbsoluteFill>
  );
};

export const Card: React.FC<{ children: React.ReactNode; style?: React.CSSProperties }> = ({
  children,
  style,
}) => {
  return (
    <div
      style={{
        background: theme.card,
        border: `1px solid ${theme.border}`,
        borderRadius: 20,
        padding: '36px 48px',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

/** Fades its children in at a given frame (relative to the scene). */
export const FadeIn: React.FC<{
  at: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ at, children, style }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [at, at + 10], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const translate = interpolate(frame, [at, at + 10], [12, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return (
    <div style={{ opacity, transform: `translateY(${translate}px)`, ...style }}>{children}</div>
  );
};

/** Verdict pill, e.g. "✔ Se acepta el proyecto". */
export const Verdict: React.FC<{ at: number; text: string }> = ({ at, text }) => {
  return (
    <FadeIn at={at}>
      <div
        style={{
          marginTop: 28,
          background: 'rgba(46, 204, 113, 0.15)',
          border: `2px solid ${theme.positive}`,
          color: theme.positive,
          fontSize: 34,
          fontWeight: 700,
          padding: '14px 36px',
          borderRadius: 14,
          textAlign: 'center',
        }}
      >
        {text}
      </div>
    </FadeIn>
  );
};
