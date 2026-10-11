import React from 'react';
import { theme } from '../../theme';
import { Formula } from '../../components/Formula';
import { useIndicadores, useBeatWindow, splitWindow } from '../context';
import { HandWrite, HandExpr } from '../HandWrite';
import { SceneShell, Card, FadeIn, Verdict } from '../ui';

/** Concepto 1 (ej1): interés nominal = interés real + inflación. */
export const NominalScene: React.FC = () => {
  const { timing } = useIndicadores();
  const conceptoWin = useBeatWindow('nominal_concepto');
  const bancoAWin = useBeatWindow('nominal_bancoA');
  const bancoBWin = useBeatWindow('nominal_bancoB');
  conceptoWin.holdUntil = bancoAWin.start;
  bancoAWin.holdUntil = bancoBWin.start;

  return (
    <SceneShell step="CONCEPTO 1" title="Interés Nominal vs. Interés Real">
      <Card style={{ minWidth: 1100, textAlign: 'center' }}>
        <div style={{ minHeight: 100 }}>
          <HandWrite
            text="interés nominal = interés real + inflación"
            window={conceptoWin}
            fontSize={48}
          />
        </div>
        <div style={{ display: 'flex', gap: 40, justifyContent: 'center', marginTop: 30 }}>
          <FadeIn at={bancoAWin.start - 8}>
            <div
              style={{
                border: `1px solid ${theme.border}`,
                borderRadius: 14,
                padding: '20px 36px',
                minWidth: 420,
                minHeight: 170,
              }}
            >
              <div style={{ color: theme.muted, fontSize: 26, marginBottom: 12 }}>
                Banco A (ofrece 5% nominal)
              </div>
              <HandExpr
                segments={[{ t: 'text', v: '5% = 2% + 3%' }]}
                window={bancoAWin}
                fontSize={46}
              />
              <div style={{ color: theme.muted, fontSize: 21, marginTop: 10 }}>
                nominal&nbsp;&nbsp;·&nbsp;&nbsp;<b style={{ color: theme.text }}>real</b>
                &nbsp;&nbsp;·&nbsp;&nbsp;inflación
              </div>
            </div>
          </FadeIn>
          <FadeIn at={bancoBWin.start - 8}>
            <div
              style={{
                border: `1px solid ${theme.border}`,
                borderRadius: 14,
                padding: '20px 36px',
                minWidth: 420,
                minHeight: 170,
              }}
            >
              <div style={{ color: theme.muted, fontSize: 26, marginBottom: 12 }}>
                Banco B (exige 3% real)
              </div>
              <HandExpr
                segments={[{ t: 'text', v: '6% = 3% + 3%' }]}
                window={bancoBWin}
                fontSize={46}
              />
              <div style={{ color: theme.muted, fontSize: 21, marginTop: 10 }}>
                nominal&nbsp;&nbsp;·&nbsp;&nbsp;<b style={{ color: theme.text }}>real</b>
                &nbsp;&nbsp;·&nbsp;&nbsp;inflación
              </div>
            </div>
          </FadeIn>
        </div>
        <Verdict
          at={timing.relativeStart('nominal_conclusion') + 10}
          text="Importa el interés REAL ⇒ Banco B (3% real) > Banco A (2% real)"
        />
      </Card>
    </SceneShell>
  );
};

/** Concepto 2 (ej1): valor futuro VF = VA(1+i)^t, con ejemplo 60M al 4%. */
export const ValorFuturoScene: React.FC = () => {
  const { timing } = useIndicadores();
  const factorWin = useBeatWindow('vf_factor');
  const ejemploWin = useBeatWindow('vf_ejemplo');
  const gananciaWin = useBeatWindow('vf_ganancia');
  const ejemploParts = splitWindow(ejemploWin, [3, 2]);
  factorWin.holdUntil = ejemploParts[0].start;
  ejemploParts[1].holdUntil = gananciaWin.start;

  return (
    <SceneShell step="CONCEPTO 2" title="Valor Futuro (VF)">
      <Card style={{ minWidth: 1150, textAlign: 'center' }}>
        <FadeIn at={timing.relativeStart('vf_formula') + 8}>
          <Formula
            tex={String.raw`VF = VA \times (1+i)^t`}
            fontSize={48}
            color={theme.text}
          />
        </FadeIn>

        <div style={{ minHeight: 86, marginTop: 26 }}>
          <HandExpr
            segments={[{ t: 'text', v: '4% = 0,04   →   1 + 0,04 = 1,04' }]}
            window={factorWin}
            fontSize={42}
          />
        </div>

        <div style={{ minHeight: 86 }}>
          <HandExpr
            segments={[
              { t: 'text', v: 'VF = 60.000.000 × (1,04)' },
              { t: 'sup', v: '4' },
              { t: 'text', v: ' = 60.000.000 × 1,16985856' },
            ]}
            window={ejemploParts[0]}
            fontSize={36}
          />
        </div>
        <div style={{ minHeight: 86 }}>
          <HandExpr
            segments={[{ t: 'text', v: 'VF = $70.191.514' }]}
            window={ejemploParts[1]}
            fontSize={48}
            color="#9fd4ff"
          />
        </div>
        <div style={{ minHeight: 90 }}>
          <HandExpr
            segments={[
              { t: 'text', v: '70.191.514 − 60.000.000 = $10.191.514 de ganancia' },
            ]}
            window={gananciaWin}
            fontSize={40}
            color="#7be0a1"
          />
        </div>
      </Card>
    </SceneShell>
  );
};
