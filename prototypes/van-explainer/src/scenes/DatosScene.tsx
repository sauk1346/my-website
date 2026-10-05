import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';
import { theme } from '../theme';

const rows = [
  { label: 'Inversión Inicial', value: '$60.000.000' },
  { label: 'Flujo Año 1', value: '$18.000.000' },
  { label: 'Flujo Año 2', value: '$20.000.000' },
  { label: 'Flujo Año 3', value: '$22.000.000' },
  { label: 'Flujo Año 4', value: '$25.000.000' },
  { label: 'Tasa de Descuento', value: '10%' },
];

export const DatosScene: React.FC = () => {
  const frame = useCurrentFrame();
  const stepFrames = 12;

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
          padding: '40px 60px',
          minWidth: 700,
        }}
      >
        <div style={{ color: theme.accent, fontSize: 28, marginBottom: 24, fontWeight: 700 }}>
          Datos del Proyecto
        </div>
        {rows.map((row, i) => {
          const appearAt = i * stepFrames;
          const opacity = interpolate(frame, [appearAt, appearAt + 10], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          });
          const translateX = interpolate(frame, [appearAt, appearAt + 10], [-20, 0], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          });
          return (
            <div
              key={row.label}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '12px 0',
                borderBottom: i < rows.length - 1 ? `1px solid ${theme.border}` : 'none',
                opacity,
                transform: `translateX(${translateX}px)`,
                fontSize: 30,
              }}
            >
              <span style={{ color: theme.muted }}>{row.label}</span>
              <span style={{ color: theme.text, fontWeight: 700 }}>{row.value}</span>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
