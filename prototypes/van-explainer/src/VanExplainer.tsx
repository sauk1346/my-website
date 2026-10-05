import React from 'react';
import { AbsoluteFill, Sequence } from 'remotion';
import { beats, sceneRange } from './timing';
import { BeatAudio } from './components/BeatAudio';
import { Subtitle } from './components/Subtitle';
import { theme } from './theme';
import { InteresNominalScene } from './scenes/InteresNominalScene';
import { ValorFuturoScene } from './scenes/ValorFuturoScene';
import { IntroScene } from './scenes/IntroScene';
import { DatosScene } from './scenes/DatosScene';
import { FormulaScene } from './scenes/FormulaScene';
import { TablaScene } from './scenes/TablaScene';
import { ResultadoScene } from './scenes/ResultadoScene';
import { ConclusionScene } from './scenes/ConclusionScene';

const sceneOrder = [
  'nominal',
  'valorfuturo',
  'intro',
  'datos',
  'formula',
  'tabla',
  'resultado',
  'conclusion',
] as const;

const sceneComponents: Record<(typeof sceneOrder)[number], React.FC> = {
  nominal: InteresNominalScene,
  valorfuturo: ValorFuturoScene,
  intro: IntroScene,
  datos: DatosScene,
  formula: FormulaScene,
  tabla: TablaScene,
  resultado: ResultadoScene,
  conclusion: ConclusionScene,
};

export const VanExplainer: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: theme.bg }}>
      {sceneOrder.map((scene) => {
        const { start, end } = sceneRange(scene);
        const Comp = sceneComponents[scene];
        return (
          <Sequence key={scene} from={start} durationInFrames={end - start}>
            <Comp />
          </Sequence>
        );
      })}

      {beats.map((beat) => (
        <Sequence key={beat.id} from={beat.startFrame} durationInFrames={beat.durationInFrames}>
          <BeatAudio beatId={beat.id} />
          <Subtitle text={beat.text} durationInFrames={beat.durationInFrames} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
