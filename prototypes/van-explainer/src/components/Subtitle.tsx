import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { theme } from '../theme';

export const Subtitle: React.FC<{ text: string; durationInFrames: number }> = ({
  text,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(
    frame,
    [0, 8, durationInFrames - 8, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 60,
        left: 80,
        right: 80,
        textAlign: 'center',
        opacity,
      }}
    >
      <span
        style={{
          background: 'rgba(0,0,0,0.55)',
          padding: '14px 28px',
          borderRadius: 12,
          fontSize: 30,
          lineHeight: 1.4,
          color: theme.text,
          fontFamily: theme.font,
        }}
      >
        {text}
      </span>
    </div>
  );
};
