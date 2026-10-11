import React from 'react';
import { AbsoluteFill, Audio, Sequence, staticFile } from 'remotion';
import './font';
import { theme } from '../theme';
import { Timing } from '../timing';
import { ExerciseData } from './types';
import { IndicadoresProvider } from './context';
import { IntroScene, DatosScene, VanFormulaScene, TasaScene } from './scenes/IntroDatos';
import { VanTablaScene, VanResultadoScene } from './scenes/Van';
import { TirConceptoScene, TirTablaScene } from './scenes/Tir';
import { PriScene, RoiScene, ConclusionScene } from './scenes/PriRoi';
import { NominalScene, ValorFuturoScene } from './scenes/Conceptos';

const sceneComponents: Record<string, React.FC> = {
  intro: IntroScene,
  nominal: NominalScene,
  valorfuturo: ValorFuturoScene,
  datos: DatosScene,
  vanformula: VanFormulaScene,
  tasa: TasaScene,
  vantabla: VanTablaScene,
  vanresultado: VanResultadoScene,
  tirconcepto: TirConceptoScene,
  tirtabla: TirTablaScene,
  pri: PriScene,
  roi: RoiScene,
  conclusion: ConclusionScene,
};

export const IndicadoresVideo: React.FC<{
  data: ExerciseData;
  timing: Timing;
  manifest: Record<string, string>;
}> = ({ data, timing, manifest }) => {
  // Escenas en el orden en que aparecen en el guion (cada ejercicio puede
  // tener un subconjunto distinto: el ej1 no tiene TIR/PRI/ROI pero sí
  // escenas de conceptos).
  const sceneOrder = timing.beats
    .map((b) => b.scene)
    .filter((scene, i, all) => all.indexOf(scene) === i);

  return (
    <IndicadoresProvider data={data} timing={timing}>
      <AbsoluteFill style={{ backgroundColor: theme.bg }}>
        {sceneOrder.map((scene) => {
          const { start, end } = timing.sceneRange(scene);
          const Comp = sceneComponents[scene];
          if (!Comp) return null;
          return (
            <Sequence key={scene} from={start} durationInFrames={end - start}>
              <Comp />
            </Sequence>
          );
        })}

        {timing.beats.map((beat) =>
          manifest[beat.id] ? (
            <Sequence
              key={beat.id}
              from={beat.startFrame}
              durationInFrames={beat.durationInFrames}
            >
              <Audio src={staticFile(manifest[beat.id])} />
            </Sequence>
          ) : null
        )}
      </AbsoluteFill>
    </IndicadoresProvider>
  );
};
