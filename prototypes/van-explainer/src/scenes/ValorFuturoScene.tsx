import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';
import { theme } from '../theme';
import { relativeStart } from '../timing';
import { Formula } from '../components/Formula';

export const ValorFuturoScene: React.FC = () => {
  const frame = useCurrentFrame();

  const ejemploAt = relativeStart('vf_ejemplo');
  const gananciaAt = relativeStart('vf_ganancia');

  const ejemploOpacity = interpolate(frame, [ejemploAt, ejemploAt + 12], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const gananciaOpacity = interpolate(frame, [gananciaAt, gananciaAt + 12], [0, 1], {
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
      <div style={{ color: theme.accent, fontSize: 28, letterSpacing: 3 }}>
        APUNTE · VALOR FUTURO
      </div>

      <div
        style={{
          background: theme.card,
          border: `1px solid ${theme.border}`,
          borderRadius: 16,
          padding: '28px 48px',
        }}
      >
        <Formula tex={String.raw`VF = VA \cdot (1+i)^{t}`} fontSize={48} color={theme.text} />
      </div>

      <div
        style={{
          opacity: ejemploOpacity,
          color: theme.text,
          fontSize: 28,
          background: theme.card,
          border: `1px solid ${theme.border}`,
          borderRadius: 14,
          padding: '20px 40px',
          textAlign: 'center',
        }}
      >
        VA = $60.000.000 &nbsp;·&nbsp; i = 4% &nbsp;·&nbsp; t = 4 años
        <div style={{ marginTop: 10 }}>
          VF = <strong>$70.191.514</strong>
        </div>
      </div>

      <div
        style={{
          opacity: gananciaOpacity,
          color: theme.positive,
          fontSize: 36,
          fontWeight: 800,
          background: theme.accentSoft,
          borderRadius: 14,
          padding: '16px 36px',
        }}
      >
        Ganancia = $10.191.514
      </div>
    </AbsoluteFill>
  );
};
