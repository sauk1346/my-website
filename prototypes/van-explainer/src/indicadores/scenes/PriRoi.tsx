import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { theme } from '../../theme';
import { Formula } from '../../components/Formula';
import { useIndicadores, beatWindow, splitWindow } from '../context';
import { HandWrite, HandExpr } from '../HandWrite';
import { SceneShell, Card, FadeIn, Verdict } from '../ui';

export const PriScene: React.FC = () => {
  const { data, timing } = useIndicadores();
  const frame = useCurrentFrame();
  const pri = data.pri;

  const switchAt = timing.relativeStart('pri_formula') - 5;
  const opacityA = interpolate(frame, [switchAt - 12, switchAt], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const opacityB = interpolate(frame, [switchAt, switchAt + 12], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const valoresWin = beatWindow(timing, 'pri_valores');
  const valoresParts = splitWindow(valoresWin, 3);
  const calculoWin = beatWindow(timing, 'pri_calculo');
  const resultadoWin = beatWindow(timing, 'pri_resultado');
  const resultadoParts = splitWindow(resultadoWin, [3, 2]);
  // Mano continua en la fase B: valores -> numerador -> payback.
  valoresParts[2].holdUntil = calculoWin.start;
  calculoWin.holdUntil = resultadoParts[0].start;

  const acumWins = (pri?.acum ?? []).map((row) => beatWindow(timing, `pri_acum${row.year}`));
  if (!pri) return null;

  return (
    <SceneShell step="PASO 3" title="Período de Recuperación (PRI / Payback)">
      <div style={{ position: 'relative', width: 1400, height: 660 }}>
        {/* Fase A: flujo acumulado */}
        <AbsoluteFill style={{ opacity: opacityA, alignItems: 'center' }}>
          <Card style={{ minWidth: 1250 }}>
            <FadeIn at={timing.relativeStart('pri_concepto') + 8}>
              <div style={{ color: theme.muted, fontSize: 26, marginBottom: 20 }}>
                ¿En cuántos años se recupera la inversión de{' '}
                <b style={{ color: theme.text }}>${data.inversion}</b>? Usamos los flujos{' '}
                <b style={{ color: theme.accent }}>ya descontados</b> del Paso 1.
              </div>
            </FadeIn>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '90px 1.1fr 1.7fr 0.9fr',
                gap: 18,
                color: theme.muted,
                fontSize: 24,
                borderBottom: `2px solid ${theme.border}`,
                paddingBottom: 10,
              }}
            >
              <div>Año</div>
              <div>Flujo Descontado</div>
              <div style={{ textAlign: 'center' }}>Acumulado</div>
              <div style={{ textAlign: 'center' }}>¿Cubierta?</div>
            </div>
            {pri.acum.map((row, i) => {
              const win = acumWins[i];
              const sumText =
                i === 0
                  ? row.acumulado
                  : `${pri.acum[i - 1].acumulado} + ${row.vp} = ${row.acumulado}`;
              const parts = splitWindow(win, [5, 1]);
              if (acumWins[i + 1]) parts[1].holdUntil = acumWins[i + 1].start;
              return (
                <FadeIn key={row.year} at={win.start - 8}>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '90px 1.1fr 1.7fr 0.9fr',
                      gap: 18,
                      alignItems: 'center',
                      borderBottom: `1px solid ${theme.border}`,
                      padding: '12px 8px',
                      minHeight: 100,
                      background: row.cubre ? 'rgba(46,204,113,0.08)' : undefined,
                    }}
                  >
                    <div style={{ color: theme.accent, fontWeight: 700, fontSize: 32 }}>
                      {row.year}
                    </div>
                    <div style={{ fontSize: 30, color: theme.text }}>${row.vp}</div>
                    <div style={{ textAlign: 'center' }}>
                      <HandWrite text={sumText} window={parts[0]} fontSize={i === 0 ? 38 : 30} />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <HandWrite
                        text={row.cubre ? 'Sí' : 'No'}
                        window={parts[1]}
                        fontSize={34}
                        color={row.cubre ? '#7be0a1' : '#e0a05c'}
                      />
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </Card>
        </AbsoluteFill>

        {/* Fase B: fórmula y cálculo del payback */}
        <AbsoluteFill style={{ opacity: opacityB, alignItems: 'center' }}>
          <Card style={{ minWidth: 1250, textAlign: 'center' }}>
            <Formula
              tex={String.raw`PB = a + \dfrac{I_0 - b}{FC_n}`}
              fontSize={46}
              color={theme.text}
            />
            <div style={{ color: theme.muted, fontSize: 23, margin: '14px 0 24px' }}>
              a = año anterior a la recuperación · b = acumulado hasta el año a · FC
              <sub>n</sub> = flujo descontado del año en que se recupera
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 60,
                minHeight: 80,
                marginBottom: 16,
              }}
            >
              <HandWrite text={`a = ${pri.a}`} window={valoresParts[0]} fontSize={40} />
              <HandWrite text={`b = ${pri.b}`} window={valoresParts[1]} fontSize={40} />
              <HandWrite
                text={`FC año 3 = ${pri.fcn}`}
                window={valoresParts[2]}
                fontSize={40}
              />
            </div>

            <div style={{ minHeight: 76, marginBottom: 10 }}>
              <HandExpr
                segments={[
                  {
                    t: 'text',
                    v: `${data.inversion} − ${pri.b} = ${pri.faltante}`,
                  },
                ]}
                window={calculoWin}
                fontSize={40}
                color="#9fd4ff"
              />
            </div>

            <div style={{ minHeight: 130 }}>
              <HandExpr
                segments={[
                  { t: 'text', v: `PB = ${pri.a} + ` },
                  { t: 'frac', num: pri.faltante, den: pri.fcn },
                  { t: 'text', v: ` = ${pri.a} + ${pri.ratio}` },
                ]}
                window={resultadoParts[0]}
                fontSize={40}
              />
              <div style={{ marginTop: 14 }}>
                <HandExpr
                  segments={[{ t: 'text', v: `PB = ${pri.pb} años (${pri.pbTexto})` }]}
                  window={resultadoParts[1]}
                  fontSize={48}
                  color="#7be0a1"
                />
              </div>
            </div>
          </Card>
        </AbsoluteFill>
      </div>
    </SceneShell>
  );
};

export const RoiScene: React.FC = () => {
  const { data, timing } = useIndicadores();
  const valoresWin = beatWindow(timing, 'roi_valores');
  const calculoWin = beatWindow(timing, 'roi_calculo');
  const calcParts = splitWindow(calculoWin, [2, 2]);
  valoresWin.holdUntil = calcParts[0].start;
  const roi = data.roi;
  if (!roi) return null;

  return (
    <SceneShell step="PASO 4" title="Retorno sobre la Inversión (ROI)">
      <Card style={{ minWidth: 1100, textAlign: 'center' }}>
        <FadeIn at={timing.relativeStart('roi_concepto') + 8}>
          <Formula
            tex={String.raw`ROI = \left(\dfrac{\text{Beneficio Neto}}{\text{Inversión Total}}\right) \times 100`}
            fontSize={44}
            color={theme.text}
          />
        </FadeIn>

        <div style={{ minHeight: 150, marginTop: 36 }}>
          <HandExpr
            segments={[
              { t: 'text', v: 'ROI = ' },
              { t: 'frac', num: roi.beneficio, den: roi.inversion },
              { t: 'text', v: ' × 100' },
            ]}
            window={valoresWin}
            fontSize={44}
          />
        </div>
        <FadeIn at={valoresWin.end + 2}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 60, color: theme.muted, fontSize: 23, marginBottom: 26 }}>
            <span>
              <b style={{ color: theme.text }}>{roi.beneficio}</b> = el VAN del Paso 1
            </span>
            <span>
              <b style={{ color: theme.text }}>{roi.inversion}</b> = inversión inicial
            </span>
          </div>
        </FadeIn>

        <div style={{ minHeight: 90 }}>
          <HandExpr
            segments={[{ t: 'text', v: `ROI = ${roi.ratio} × 100` }]}
            window={calcParts[0]}
            fontSize={42}
            color="#9fd4ff"
          />
          <div style={{ marginTop: 14, minHeight: 80 }}>
            <HandExpr
              segments={[{ t: 'text', v: `ROI = ${roi.pct}%` }]}
              window={calcParts[1]}
              fontSize={56}
              color="#7be0a1"
            />
          </div>
        </div>
      </Card>
    </SceneShell>
  );
};

export const ConclusionScene: React.FC = () => {
  const { data, timing } = useIndicadores();
  const dur = timing.beatDuration('conclusion');
  const voiceAt = timing.relativeStart('conclusion');
  const rows = [
    { label: 'VAN', value: `$${data.van.van} > 0` },
    ...(data.tir
      ? [{ label: 'TIR', value: `> ${data.tir.pruebaPct}% (exigido: ${data.tasaPct}%)` }]
      : []),
    ...(data.pri ? [{ label: 'Payback', value: `${data.pri.pb} años` }] : []),
    ...(data.roi ? [{ label: 'ROI', value: `${data.roi.pct}%` }] : []),
  ];
  const verdictText =
    rows.length > 1
      ? `Los ${rows.length} indicadores coinciden ⇒ SE ACEPTA EL PROYECTO`
      : 'VAN > 0 ⇒ SE ACEPTA EL PROYECTO';
  return (
    <SceneShell title={rows.length > 1 ? 'Resumen de indicadores' : 'Conclusión'}>
      <Card style={{ minWidth: 950 }}>
        {rows.map((row, i) => (
          <FadeIn key={row.label} at={voiceAt + dur * 0.06 + i * (dur * 0.6) / rows.length}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: i < rows.length - 1 ? `1px solid ${theme.border}` : undefined,
                padding: '20px 10px',
                fontSize: 36,
              }}
            >
              <span style={{ color: theme.accent, fontWeight: 700 }}>{row.label}</span>
              <span style={{ color: theme.text }}>
                {row.value} <span style={{ color: theme.positive, marginLeft: 14 }}>✓</span>
              </span>
            </div>
          </FadeIn>
        ))}
        <Verdict at={voiceAt + dur * 0.75} text={verdictText} />
      </Card>
    </SceneShell>
  );
};
