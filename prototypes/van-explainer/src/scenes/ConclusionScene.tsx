import React from 'react';
import { AbsoluteFill, useCurrentFrame, spring, useVideoConfig } from 'remotion';
import { theme } from '../theme';

export const ConclusionScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = spring({ frame, fps, config: { damping: 14 } });

  return (
    <AbsoluteFill
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: theme.font,
      }}
    >
      <div style={{ transform: `scale(${scale})`, textAlign: 'center' }}>
        <div style={{ fontSize: 90, marginBottom: 8 }}>✅</div>
        <div style={{ color: theme.positive, fontSize: 52, fontWeight: 800, marginBottom: 16 }}>
          VAN &gt; 0 → Se acepta el proyecto
        </div>
        <div style={{ color: theme.muted, fontSize: 28, maxWidth: 900 }}>
          Genera más valor que el exigido por la tasa de rentabilidad del 10%.
        </div>
      </div>
    </AbsoluteFill>
  );
};
