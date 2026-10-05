import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';
import { theme } from '../theme';
import { relativeStart } from '../timing';

export const ResultadoScene: React.FC = () => {
  const frame = useCurrentFrame();

  const sumaAt = relativeStart('suma');
  const vanAt = relativeStart('van');

  const sumaOpacity = interpolate(frame, [sumaAt, sumaAt + 12], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const vanOpacity = interpolate(frame, [vanAt, vanAt + 12], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const vanScale = interpolate(frame, [vanAt, vanAt + 16], [0.9, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: theme.font,
        flexDirection: 'column',
        gap: 28,
      }}
    >
      <div
        style={{
          opacity: sumaOpacity,
          color: theme.text,
          fontSize: 34,
          background: theme.card,
          border: `1px solid ${theme.border}`,
          borderRadius: 14,
          padding: '20px 36px',
        }}
      >
        Σ Valor Presente = <strong>$66.496.824</strong>
      </div>

      <div
        style={{
          opacity: vanOpacity,
          transform: `scale(${vanScale})`,
          textAlign: 'center',
        }}
      >
        <div style={{ color: theme.muted, fontSize: 26 }}>
          $66.496.824 − $60.000.000 (Inversión Inicial)
        </div>
        <div
          style={{
            marginTop: 12,
            color: theme.positive,
            fontSize: 72,
            fontWeight: 800,
            background: theme.accentSoft,
            borderRadius: 18,
            padding: '20px 50px',
          }}
        >
          VAN = $6.496.824
        </div>
      </div>
    </AbsoluteFill>
  );
};
