import React from 'react';
import { AbsoluteFill, useCurrentFrame, spring, useVideoConfig } from 'remotion';
import { theme } from '../theme';

export const IntroScene: React.FC = () => {
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
        <div style={{ color: theme.accent, fontSize: 32, letterSpacing: 4, marginBottom: 16 }}>
          UNIDAD III · INDICADORES DE RENTABILIDAD
        </div>
        <div style={{ color: theme.text, fontSize: 64, fontWeight: 700 }}>
          Ejercicio 1: Valor Actual Neto (VAN)
        </div>
      </div>
    </AbsoluteFill>
  );
};
