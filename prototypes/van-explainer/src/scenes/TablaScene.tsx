import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';
import { theme } from '../theme';
import { relativeStart } from '../timing';
import { Formula } from '../components/Formula';

const rows = [
  {
    beatId: 'anio1',
    year: '1',
    fc: '$18.000.000',
    calc: String.raw`\dfrac{18.000.000}{(1{,}10)^{1}}`,
    vp: '$16.363.636',
  },
  {
    beatId: 'anio2',
    year: '2',
    fc: '$20.000.000',
    calc: String.raw`\dfrac{20.000.000}{(1{,}10)^{2}}`,
    vp: '$16.528.926',
  },
  {
    beatId: 'anio3',
    year: '3',
    fc: '$22.000.000',
    calc: String.raw`\dfrac{22.000.000}{(1{,}10)^{3}}`,
    vp: '$16.528.926',
  },
  {
    beatId: 'anio4',
    year: '4',
    fc: '$25.000.000',
    calc: String.raw`\dfrac{25.000.000}{(1{,}10)^{4}}`,
    vp: '$17.075.336',
  },
];

export const TablaScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: theme.font,
      }}
    >
      <div
        style={{
          background: theme.card,
          border: `1px solid ${theme.border}`,
          borderRadius: 20,
          padding: '36px 48px',
          minWidth: 900,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '80px 1fr 1fr 1fr',
            gap: 12,
            color: theme.muted,
            fontSize: 22,
            borderBottom: `2px solid ${theme.border}`,
            paddingBottom: 12,
            marginBottom: 8,
          }}
        >
          <div>Año</div>
          <div>Flujo de Caja</div>
          <div>Cálculo</div>
          <div>Valor Presente</div>
        </div>
        {rows.map((row) => {
          const appearAt = relativeStart(row.beatId);
          const opacity = interpolate(frame, [appearAt, appearAt + 12], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          });
          const highlight = interpolate(
            frame,
            [appearAt, appearAt + 12, appearAt + 40],
            [1, 1, 0],
            { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
          );
          return (
            <div
              key={row.beatId}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr 1.2fr 1fr',
                gap: 12,
                fontSize: 26,
                color: theme.text,
                padding: '14px 8px',
                minHeight: 64,
                borderRadius: 8,
                opacity,
                backgroundColor: `rgba(232, 84, 44, ${0.18 * highlight})`,
              }}
            >
              <div style={{ color: theme.accent, fontWeight: 700, alignSelf: 'center' }}>
                {row.year}
              </div>
              <div style={{ alignSelf: 'center' }}>{row.fc}</div>
              <div style={{ alignSelf: 'center' }}>
                <Formula tex={row.calc} fontSize={22} color={theme.muted} />
              </div>
              <div style={{ fontWeight: 700, alignSelf: 'center' }}>{row.vp}</div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
