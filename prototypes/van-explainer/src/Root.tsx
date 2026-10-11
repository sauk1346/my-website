import React from 'react';
import { Composition } from 'remotion';
import { VanExplainer } from './VanExplainer';
import { totalDurationInFrames, FPS, createTiming, NarrationBeat, Timing } from './timing';
import { IndicadoresVideo } from './indicadores/IndicadoresVideo';
import { ExerciseData } from './indicadores/types';
import { ej1 } from './exercises/ej1';
import { ej2 } from './exercises/ej2';
import { ej3 } from './exercises/ej3';
import narrationEj1 from '../narrations/ej1.json';
import narrationEj2 from '../narrations/ej2.json';
import narrationEj3 from '../narrations/ej3.json';
import durationsEj1 from '../public/durations-ej1.json';
import durationsEj2 from '../public/durations-ej2.json';
import durationsEj3 from '../public/durations-ej3.json';
import manifestEj1 from '../public/audio-manifest-ej1.json';
import manifestEj2 from '../public/audio-manifest-ej2.json';
import manifestEj3 from '../public/audio-manifest-ej3.json';

const TIMING_OPTS = { gapFrames: 14, leadInFrames: 75, tailFrames: 90 };

function exercise(
  data: ExerciseData,
  narration: NarrationBeat[],
  durations: Record<string, number>,
  manifest: Record<string, string>
): { data: ExerciseData; timing: Timing; manifest: Record<string, string> } {
  return { data, timing: createTiming(narration, durations, TIMING_OPTS), manifest };
}

const ejercicios = {
  Ej1Van: exercise(
    ej1,
    narrationEj1 as NarrationBeat[],
    durationsEj1 as Record<string, number>,
    manifestEj1 as Record<string, string>
  ),
  Ej2Indicadores: exercise(
    ej2,
    narrationEj2 as NarrationBeat[],
    durationsEj2 as Record<string, number>,
    manifestEj2 as Record<string, string>
  ),
  Ej3Indicadores: exercise(
    ej3,
    narrationEj3 as NarrationBeat[],
    durationsEj3 as Record<string, number>,
    manifestEj3 as Record<string, string>
  ),
};

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="VanExplainer"
        component={VanExplainer}
        durationInFrames={totalDurationInFrames}
        fps={FPS}
        width={1920}
        height={1080}
      />
      {Object.entries(ejercicios).map(([id, ej]) => (
        <Composition
          key={id}
          id={id}
          component={() => (
            <IndicadoresVideo data={ej.data} timing={ej.timing} manifest={ej.manifest} />
          )}
          durationInFrames={ej.timing.totalDurationInFrames}
          fps={FPS}
          width={1920}
          height={1080}
        />
      ))}
    </>
  );
};
