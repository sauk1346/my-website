import React from 'react';
import { theme } from '../../theme';
import { Formula } from '../../components/Formula';
import { useIndicadores, useBeatWindow, splitWindow } from '../context';
import { HandWrite, HandExpr } from '../HandWrite';
import { SceneShell, Card, FadeIn } from '../ui';

export const IntroScene: React.FC = () => {
  const { data, timing } = useIndicadores();
  const dur = timing.beatDuration('intro');
  const voiceAt = timing.relativeStart('intro');
  const items = [
    'Valor Actual Neto (VAN)',
    ...(data.tir ? ['Tasa Interna de Retorno (TIR)'] : []),
    ...(data.pri ? ['Período de Recuperación (PRI / Payback)'] : []),
    ...(data.roi ? ['Retorno sobre la Inversión (ROI)'] : []),
  ];
  return (
    <SceneShell>
      <div style={{ textAlign: 'center' }}>
        <div style={{ color: theme.accent, fontSize: 34, fontWeight: 700, letterSpacing: 2 }}>
          UNIDAD 3 · INDICADORES DE RENTABILIDAD
        </div>
        <div style={{ color: theme.text, fontSize: 84, fontWeight: 800, margin: '18px 0 48px' }}>
          Ejercicio {data.numero}
        </div>
        <div style={{ display: 'inline-flex', flexDirection: 'column', gap: 18 }}>
          {items.map((item, i) => (
            <FadeIn key={item} at={voiceAt + dur * 0.35 + i * dur * 0.14}>
              <div
                style={{
                  background: theme.card,
                  border: `1px solid ${theme.border}`,
                  borderRadius: 14,
                  padding: '16px 34px',
                  fontSize: 32,
                  color: theme.text,
                  textAlign: 'left',
                }}
              >
                <span style={{ color: theme.accent, fontWeight: 700, marginRight: 16 }}>
                  {i + 1}
                </span>
                {item}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </SceneShell>
  );
};

export const DatosScene: React.FC = () => {
  const { data, timing } = useIndicadores();
  const flujosWin = useBeatWindow('datos_flujos');
  const invWin = useBeatWindow('datos_inversion');
  const tasaWin = useBeatWindow('datos_tasa');
  const flujoWins = splitWindow(flujosWin, data.van.rows.length);
  // La mano se mantiene en pantalla entre una escritura y la siguiente.
  flujoWins[flujoWins.length - 1].holdUntil = invWin.start;
  invWin.holdUntil = tasaWin.start;

  return (
    <SceneShell title="Datos del proyecto">
      <Card style={{ minWidth: 1000 }}>
        <div style={{ color: theme.muted, fontSize: 24, marginBottom: 16 }}>
          Flujos de caja estimados
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${data.van.rows.length}, 1fr)`,
            gap: 16,
            marginBottom: 36,
          }}
        >
          {data.van.rows.map((row, i) => (
            <div
              key={row.year}
              style={{
                border: `1px solid ${theme.border}`,
                borderRadius: 14,
                padding: '18px 10px',
                textAlign: 'center',
                minHeight: 120,
              }}
            >
              <div style={{ color: theme.accent, fontWeight: 700, fontSize: 24, marginBottom: 10 }}>
                Año {row.year}
              </div>
              <HandWrite text={`$${row.fc}`} window={flujoWins[i]} fontSize={40} />
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <FadeIn at={timing.relativeStart('datos_inversion')}>
            <div
              style={{
                border: `1px solid ${theme.border}`,
                borderRadius: 14,
                padding: '18px 24px',
                minHeight: 110,
              }}
            >
              <div style={{ color: theme.muted, fontSize: 24, marginBottom: 8 }}>
                Inversión inicial (año 0)
              </div>
              <HandWrite text={`$${data.inversion}`} window={invWin} fontSize={44} />
            </div>
          </FadeIn>
          <FadeIn at={timing.relativeStart('datos_tasa')}>
            <div
              style={{
                border: `1px solid ${theme.border}`,
                borderRadius: 14,
                padding: '18px 24px',
                minHeight: 110,
              }}
            >
              <div style={{ color: theme.muted, fontSize: 24, marginBottom: 8 }}>
                Tasa de descuento exigida
              </div>
              <HandWrite text={`${data.tasaPct}%`} window={tasaWin} fontSize={44} />
            </div>
          </FadeIn>
        </div>
      </Card>
    </SceneShell>
  );
};

export const VanFormulaScene: React.FC = () => {
  const { timing } = useIndicadores();
  return (
    <SceneShell step="PASO 1" title="Valor Actual Neto (VAN)">
      <Card style={{ textAlign: 'center', minWidth: 900 }}>
        <FadeIn at={timing.relativeStart('van_formula') + 8}>
          <Formula
            tex={String.raw`VAN = \sum_{t=1}^{n} \dfrac{FC_t}{(1+i)^t} - I_0`}
            fontSize={54}
            color={theme.text}
          />
        </FadeIn>
        <FadeIn at={timing.relativeStart('van_porque') + 8}>
          <div
            style={{
              marginTop: 40,
              color: theme.muted,
              fontSize: 28,
              lineHeight: 1.5,
              maxWidth: 900,
            }}
          >
            Un peso recibido en el futuro vale <b style={{ color: theme.text }}>menos</b> que un
            peso de hoy. Al dividir cada flujo por <b style={{ color: theme.accent }}>(1 + i)</b>
            <sup>t</sup>, lo convertimos en su equivalente en pesos de hoy.
          </div>
        </FadeIn>
      </Card>
    </SceneShell>
  );
};

export const TasaScene: React.FC = () => {
  const { data, timing } = useIndicadores();
  const decWin = useBeatWindow('tasa_decimal');
  const sumaWin = useBeatWindow('tasa_suma');
  const sumaParts = splitWindow(sumaWin, [3, 2]);
  decWin.holdUntil = sumaParts[0].start;

  return (
    <SceneShell step="ANTES DE CALCULAR" title="Preparemos el divisor (1 + i)">
      <Card style={{ minWidth: 950, textAlign: 'center' }}>
        <div style={{ color: theme.muted, fontSize: 26, marginBottom: 10 }}>
          La tasa debe expresarse en decimal
        </div>
        <div style={{ minHeight: 120 }}>
          <HandExpr
            segments={[
              { t: 'text', v: `${data.tasaPct}%  =  ` },
              { t: 'frac', num: data.tasaPct, den: '100' },
              { t: 'text', v: `  =  ${data.tasaDecimal}` },
            ]}
            window={decWin}
            fontSize={56}
          />
        </div>

        <div
          style={{
            borderTop: `1px solid ${theme.border}`,
            margin: '26px 0',
          }}
        />

        <div style={{ minHeight: 120 }}>
          <HandExpr
            segments={[{ t: 'text', v: `1 + ${data.tasaDecimal}  =  ${data.factor}` }]}
            window={sumaParts[0]}
            fontSize={62}
          />
        </div>
        <FadeIn at={sumaParts[0].end + 4}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 60,
              color: theme.muted,
              fontSize: 25,
            }}
          >
            <span>
              <b style={{ color: theme.text }}>1</b> = el capital
            </span>
            <span>
              <b style={{ color: theme.text }}>{data.tasaDecimal}</b> = la tasa ({data.tasaPct}%)
              en decimal
            </span>
            <span>
              <b style={{ color: theme.accent }}>{data.factor}</b> = factor de descuento
            </span>
          </div>
        </FadeIn>
      </Card>
    </SceneShell>
  );
};
