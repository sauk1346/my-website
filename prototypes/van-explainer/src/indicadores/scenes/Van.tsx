import React from 'react';
import { theme } from '../../theme';
import { useIndicadores, useBeatWindow, splitWindow, Window } from '../context';
import { HandWrite, HandExpr } from '../HandWrite';
import { SceneShell, Card, FadeIn, Verdict } from '../ui';

const RowCalc: React.FC<{
  year: number;
  fc: string;
  factor: string;
  factorValue: string;
  vp: string;
  planteaWin: Window;
  resultadoWin: Window;
  /** Frame en que empieza a escribir la fila siguiente (encadena la mano). */
  nextStart?: number;
  /** Filas más bajas cuando hay 5+ años, para que la tabla quepa en 1080p. */
  compact?: boolean;
}> = ({ year, fc, factor, factorValue, vp, planteaWin, resultadoWin, nextStart, compact }) => {
  const plantea = splitWindow(planteaWin, [2, 3]);
  const resultado = splitWindow(resultadoWin, [2, 2]);
  plantea[1].holdUntil = resultado[0].start;
  if (nextStart != null) resultado[1].holdUntil = nextStart;
  return (
    <FadeIn at={planteaWin.start - 8}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '90px 1.1fr 1.6fr 1.1fr',
          gap: 18,
          alignItems: 'center',
          borderBottom: `1px solid ${theme.border}`,
          padding: compact ? '8px 8px' : '14px 8px',
          minHeight: compact ? 116 : 150,
        }}
      >
        <div style={{ color: theme.accent, fontWeight: 700, fontSize: 34 }}>{year}</div>
        <div>
          <HandWrite text={`$${fc}`} window={plantea[0]} fontSize={compact ? 32 : 38} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <HandExpr
            segments={[
              { t: 'frac', num: fc, den: `(${factor})`, denSup: String(year) },
            ]}
            window={plantea[1]}
            fontSize={compact ? 27 : 34}
          />
          <div style={{ marginTop: 4 }}>
            <HandExpr
              segments={[
                { t: 'text', v: `(${factor})` },
                { t: 'sup', v: String(year) },
                { t: 'text', v: ` = ${factorValue}` },
              ]}
              window={resultado[0]}
              fontSize={compact ? 22 : 27}
              color="#9fd4ff"
            />
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <HandWrite text={`$${vp}`} window={resultado[1]} fontSize={compact ? 34 : 40} />
        </div>
      </div>
    </FadeIn>
  );
};

export const VanTablaScene: React.FC = () => {
  const { data, timing } = useIndicadores();
  return (
    <SceneShell step="PASO 1" title={`Flujos descontados al ${data.tasaPct}%`}>
      <Card style={{ minWidth: 1500 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '90px 1.1fr 1.6fr 1.1fr',
            gap: 18,
            color: theme.muted,
            fontSize: 24,
            borderBottom: `2px solid ${theme.border}`,
            paddingBottom: 10,
          }}
        >
          <div>Año</div>
          <div>Flujo de Caja</div>
          <div style={{ textAlign: 'center' }}>Cálculo</div>
          <div style={{ textAlign: 'right' }}>Flujo Descontado</div>
        </div>
        {data.van.rows.map((row, i) => {
          const win = (beatId: string): Window => ({
            start: timing.relativeStart(beatId) + 10,
            end: timing.relativeStart(beatId) + timing.beatDuration(beatId) - 14,
          });
          const next = data.van.rows[i + 1];
          return (
            <RowCalc
              key={row.year}
              year={row.year}
              fc={row.fc}
              factor={data.factor}
              factorValue={row.factorValue}
              vp={row.vp}
              planteaWin={win(`anio${row.year}_plantea`)}
              resultadoWin={win(`anio${row.year}_resultado`)}
              nextStart={next ? win(`anio${next.year}_plantea`).start : undefined}
              compact={data.van.rows.length > 4}
            />
          );
        })}
      </Card>
    </SceneShell>
  );
};

export const VanResultadoScene: React.FC = () => {
  const { data, timing } = useIndicadores();
  const sumaWin = useBeatWindow('suma_plantea');
  const sumaResWin = useBeatWindow('suma_resultado');
  const restaWin = useBeatWindow('van_resta');
  const addendWins = splitWindow(sumaWin, data.van.rows.length);
  const restaParts = splitWindow(restaWin, [3, 2]);
  addendWins[addendWins.length - 1].holdUntil = sumaResWin.start;
  sumaResWin.holdUntil = restaParts[0].start;

  return (
    <SceneShell step="PASO 1" title="Sumamos y restamos la inversión">
      <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start' }}>
        <Card style={{ minWidth: 560 }}>
          <div style={{ color: theme.muted, fontSize: 24, marginBottom: 14 }}>
            Suma de los flujos descontados
          </div>
          {data.van.rows.map((row, i) => (
            <div
              key={row.year}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                minHeight: 66,
              }}
            >
              <span style={{ color: theme.muted, fontSize: 22 }}>Año {row.year}</span>
              <HandWrite
                text={`${i === data.van.rows.length - 1 ? '+ ' : ''}$${row.vp}`}
                window={addendWins[i]}
                fontSize={40}
              />
            </div>
          ))}
          <div
            style={{
              borderTop: `3px solid ${theme.text}`,
              marginTop: 8,
              paddingTop: 12,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              minHeight: 70,
            }}
          >
            <span style={{ color: theme.muted, fontSize: 22 }}>Suma</span>
            <HandWrite text={`$${data.van.suma}`} window={sumaResWin} fontSize={46} color="#9fd4ff" />
          </div>
        </Card>

        <Card style={{ minWidth: 680 }}>
          <div style={{ color: theme.muted, fontSize: 24, marginBottom: 14 }}>
            VAN = Suma de flujos descontados − Inversión inicial
          </div>
          <div style={{ minHeight: 200, textAlign: 'center', paddingTop: 20 }}>
            <HandExpr
              segments={[
                { t: 'text', v: `VAN = ${data.van.suma} − ${data.inversion}` },
              ]}
              window={restaParts[0]}
              fontSize={46}
            />
            <div style={{ marginTop: 24 }}>
              <HandExpr
                segments={[{ t: 'text', v: `VAN = $${data.van.van}` }]}
                window={restaParts[1]}
                fontSize={58}
                color="#7be0a1"
              />
            </div>
          </div>
          <Verdict
            at={timing.relativeStart('van_decision') + 10}
            text={`VAN > 0  ⇒  Se acepta el proyecto`}
          />
        </Card>
      </div>
    </SceneShell>
  );
};
