import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';
import { theme } from '../theme';
import { relativeStart } from '../timing';
import { Formula } from '../components/Formula';

export const InteresNominalScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bancoAAt = relativeStart('nominal_bancoA');
  const bancoBAt = relativeStart('nominal_bancoB');
  const conclusionAt = relativeStart('nominal_conclusion');

  const bancoAOpacity = interpolate(frame, [bancoAAt, bancoAAt + 12], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const bancoBOpacity = interpolate(frame, [bancoBAt, bancoBAt + 12], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const winnerProgress = interpolate(frame, [conclusionAt, conclusionAt + 14], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const conclusionOpacity = interpolate(
    frame,
    [conclusionAt, conclusionAt + 12],
    [0, 1],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  return (
    <AbsoluteFill
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: theme.font,
        flexDirection: 'column',
        gap: 32,
      }}
    >
      <div style={{ color: theme.accent, fontSize: 28, letterSpacing: 3 }}>
        APUNTE · INTERÉS NOMINAL VS. INTERÉS REAL
      </div>

      <div
        style={{
          background: theme.card,
          border: `1px solid ${theme.border}`,
          borderRadius: 16,
          padding: '28px 48px',
        }}
      >
        <Formula tex={String.raw`I_N = I_R + \pi`} fontSize={48} color={theme.text} />
      </div>
      <div style={{ color: theme.muted, fontSize: 24 }}>
        I<sub>N</sub> = Interés Nominal &nbsp;·&nbsp; I<sub>R</sub> = Interés Real &nbsp;·&nbsp; π = Inflación (3%)
      </div>

      <div style={{ display: 'flex', gap: 32, marginTop: 16 }}>
        <div
          style={{
            opacity: bancoAOpacity * (1 - 0.35 * winnerProgress),
            background: theme.card,
            border: `1px solid ${theme.border}`,
            borderRadius: 14,
            padding: '24px 36px',
            minWidth: 360,
            textAlign: 'center',
          }}
        >
          <div style={{ color: theme.accent, fontSize: 26, fontWeight: 700, marginBottom: 12 }}>
            Banco A
          </div>
          <div style={{ color: theme.text, fontSize: 24 }}>Interés Nominal: 5%</div>
          <div style={{ color: theme.muted, fontSize: 22, marginTop: 6 }}>
            → Interés Real: <strong style={{ color: theme.positive }}>2%</strong>
          </div>
        </div>

        <div
          style={{
            opacity: bancoBOpacity,
            background: theme.card,
            border: `2px solid ${
              winnerProgress > 0 ? theme.positive : theme.border
            }`,
            boxShadow:
              winnerProgress > 0
                ? `0 0 ${24 * winnerProgress}px rgba(46, 204, 113, ${0.5 * winnerProgress})`
                : 'none',
            borderRadius: 14,
            padding: '24px 36px',
            minWidth: 360,
            textAlign: 'center',
            position: 'relative',
          }}
        >
          {winnerProgress > 0 && (
            <div
              style={{
                position: 'absolute',
                top: -18,
                left: '50%',
                transform: `translateX(-50%) scale(${winnerProgress})`,
                background: theme.positive,
                color: '#0f1115',
                fontSize: 18,
                fontWeight: 800,
                borderRadius: 999,
                padding: '6px 18px',
                whiteSpace: 'nowrap',
              }}
            >
              ✓ Mejor opción
            </div>
          )}
          <div style={{ color: theme.accent, fontSize: 26, fontWeight: 700, marginBottom: 12 }}>
            Banco B
          </div>
          <div style={{ color: theme.text, fontSize: 24 }}>Interés Real: 3%</div>
          <div style={{ color: theme.muted, fontSize: 22, marginTop: 6 }}>
            → Interés Nominal: <strong style={{ color: theme.positive }}>6%</strong>
          </div>
        </div>
      </div>

      <div
        style={{
          opacity: conclusionOpacity,
          color: theme.text,
          fontSize: 24,
          textAlign: 'center',
          maxWidth: 1100,
        }}
      >
        Lo que importa es el <strong style={{ color: theme.positive }}>interés real</strong> (la
        ganancia después de la inflación): Banco B gana con 3% real frente al 2% del Banco A.
      </div>
    </AbsoluteFill>
  );
};
