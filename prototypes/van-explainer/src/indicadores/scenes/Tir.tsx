import React from 'react';
import { theme } from '../../theme';
import { Formula } from '../../components/Formula';
import { useIndicadores, useBeatWindow, beatWindow, splitWindow, Window } from '../context';
import { HandWrite, HandExpr } from '../HandWrite';
import { SceneShell, Card, FadeIn, Verdict } from '../ui';

export const TirConceptoScene: React.FC = () => {
  const { data, timing } = useIndicadores();
  if (!data.tir) return null;
  return (
    <SceneShell step="PASO 2" title="Tasa Interna de Retorno (TIR)">
      <Card style={{ minWidth: 1000, textAlign: 'center' }}>
        <FadeIn at={timing.relativeStart('tir_concepto') + 8}>
          <div style={{ color: theme.muted, fontSize: 26, marginBottom: 18 }}>
            La TIR es la tasa que hace que el VAN sea exactamente 0
          </div>
          <Formula
            tex={String.raw`0 = -I_0 + \sum_{t=1}^{n} \dfrac{FC_t}{(1+TIR)^t}`}
            fontSize={48}
            color={theme.text}
          />
        </FadeIn>
        <FadeIn at={timing.relativeStart('tir_criterio') + 8}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 30,
              marginTop: 40,
            }}
          >
            <div
              style={{
                border: `2px solid ${theme.positive}`,
                borderRadius: 14,
                padding: '16px 30px',
                fontSize: 30,
                color: theme.positive,
                fontWeight: 700,
              }}
            >
              TIR &gt; i ({data.tasaPct}%) ⇒ Acepta
            </div>
            <div
              style={{
                border: `2px solid #e05c5c`,
                borderRadius: 14,
                padding: '16px 30px',
                fontSize: 30,
                color: '#e05c5c',
                fontWeight: 700,
              }}
            >
              TIR &lt; i ({data.tasaPct}%) ⇒ Rechaza
            </div>
          </div>
        </FadeIn>
        <FadeIn at={timing.relativeStart('tir_metodo') + 8}>
          <div style={{ marginTop: 40, color: theme.text, fontSize: 30, lineHeight: 1.5 }}>
            No se despeja algebraicamente: se encuentra <b>probando tasas</b>.
            <br />
            <span style={{ color: theme.accent, fontWeight: 700 }}>
              ¿Qué pasa si descontamos al {data.tir?.pruebaPct}%?
            </span>
          </div>
        </FadeIn>
      </Card>
    </SceneShell>
  );
};

const TirRow: React.FC<{
  row: { year: number; fc: string; factorValue: string; vp: string };
  factor: string;
  win: Window;
  nextStart?: number;
  compactRow?: boolean;
}> = ({ row, factor, win, nextStart, compactRow }) => {
  const parts = splitWindow(win, [3, 2, 2]);
  if (nextStart != null) parts[2].holdUntil = nextStart;
  return (
    <FadeIn at={win.start - 8}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '90px 1.7fr 1.2fr 1.2fr',
          gap: 18,
          alignItems: 'center',
          borderBottom: `1px solid ${theme.border}`,
          padding: '10px 8px',
          minHeight: compactRow ? 86 : 112,
        }}
      >
        <div style={{ color: theme.accent, fontWeight: 700, fontSize: 32 }}>{row.year}</div>
        <div style={{ textAlign: 'center' }}>
          <HandExpr
            segments={[
              { t: 'frac', num: row.fc, den: `(${factor})`, denSup: String(row.year) },
            ]}
            window={parts[0]}
            fontSize={compactRow ? 25 : 30}
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <HandWrite text={row.factorValue} window={parts[1]} fontSize={32} color="#9fd4ff" />
        </div>
        <div style={{ textAlign: 'right' }}>
          <HandWrite text={`$${row.vp}`} window={parts[2]} fontSize={34} />
        </div>
      </div>
    </FadeIn>
  );
};

export const TirTablaScene: React.FC = () => {
  const { data, timing } = useIndicadores();
  const factorWin = useBeatWindow('tir_factor');
  const sumaWin = useBeatWindow('tir_suma');
  const sumaParts = splitWindow(sumaWin, [2, 3]);
  const tir = data.tir;
  const rowWins = (tir?.rows ?? []).map((row) => beatWindow(timing, `tir_anio${row.year}`));
  factorWin.holdUntil = rowWins[0]?.start;
  if (!tir) return null;
  const compact = tir.rows.length > 4;

  return (
    <SceneShell step="PASO 2" title={`Prueba: flujos descontados al ${tir.pruebaPct}%`}>
      <Card style={{ minWidth: 1500 }}>
        <div style={{ textAlign: 'center', minHeight: 86, marginBottom: 10 }}>
          <HandExpr
            segments={[
              {
                t: 'text',
                v: `${tir.pruebaPct}% = ${tir.pruebaDecimal}   →   1 + ${tir.pruebaDecimal} = ${tir.pruebaFactor}`,
              },
            ]}
            window={factorWin}
            fontSize={44}
          />
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '90px 1.7fr 1.2fr 1.2fr',
            gap: 18,
            color: theme.muted,
            fontSize: 24,
            borderBottom: `2px solid ${theme.border}`,
            paddingBottom: 10,
          }}
        >
          <div>Año</div>
          <div style={{ textAlign: 'center' }}>Cálculo</div>
          <div style={{ textAlign: 'center' }}>Factor</div>
          <div style={{ textAlign: 'right' }}>Flujo Descontado</div>
        </div>
        {tir.rows.map((row, i) => (
          <TirRow
            key={row.year}
            row={row}
            factor={tir.pruebaFactor}
            win={rowWins[i]}
            nextStart={rowWins[i + 1]?.start ?? sumaParts[0].start}
            compactRow={compact}
          />
        ))}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 16,
            minHeight: 90,
          }}
        >
          <HandExpr
            segments={[{ t: 'text', v: `Suma = $${tir.suma}` }]}
            window={sumaParts[0]}
            fontSize={38}
            color="#9fd4ff"
          />
          <HandExpr
            segments={[
              {
                t: 'text',
                v: `${tir.suma} − ${data.inversion} = $${tir.resultado}`,
              },
            ]}
            window={sumaParts[1]}
            fontSize={38}
            color="#7be0a1"
          />
        </div>
        <Verdict
          at={timing.relativeStart('tir_interpretacion') + 12}
          text={`VAN(${tir.pruebaPct}%) > 0  ⇒  TIR > ${tir.pruebaPct}% > ${data.tasaPct}%  ⇒  Se acepta`}
        />
      </Card>
    </SceneShell>
  );
};
