import React from 'react';
import { AbsoluteFill, useCurrentFrame, spring, useVideoConfig } from 'remotion';
import { theme } from '../theme';
import { Formula } from '../components/Formula';

export const FormulaScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = spring({ frame, fps, config: { damping: 16 } });

  return (
    <AbsoluteFill
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: theme.font,
        flexDirection: 'column',
      }}
    >
      <div style={{ transform: `scale(${scale})`, textAlign: 'center' }}>
        <div
          style={{
            background: theme.card,
            border: `1px solid ${theme.border}`,
            borderRadius: 16,
            padding: '36px 60px',
          }}
        >
          <Formula
            tex={String.raw`VAN = \sum_{t=1}^{n} \frac{FC_t}{(1+i)^{t}} - I_0`}
            fontSize={56}
            color={theme.text}
          />
        </div>
        <div style={{ color: theme.muted, fontSize: 26, marginTop: 24 }}>
          FC = Flujo de Caja &nbsp;·&nbsp; i = Tasa de descuento &nbsp;·&nbsp; I₀ = Inversión Inicial
        </div>
      </div>
    </AbsoluteFill>
  );
};
