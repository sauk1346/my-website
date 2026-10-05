import narration from '../narration.json';
import durations from '../public/durations.json';

export const FPS = 30;

export type Beat = {
  id: string;
  scene: string;
  text: string;
  startFrame: number;
  durationInFrames: number;
};

function buildBeats(): Beat[] {
  let cursor = 0;
  return (narration as { id: string; scene: string; text: string }[]).map((beat) => {
    const seconds = (durations as Record<string, number>)[beat.id] ?? 6;
    const durationInFrames = Math.round(seconds * FPS);
    const b: Beat = { ...beat, startFrame: cursor, durationInFrames };
    cursor += durationInFrames;
    return b;
  });
}

export const beats = buildBeats();

export const totalDurationInFrames = beats.reduce((acc, b) => acc + b.durationInFrames, 0);

export function beatsForScene(scene: string): Beat[] {
  return beats.filter((b) => b.scene === scene);
}

export function sceneRange(scene: string): { start: number; end: number } {
  const sceneBeats = beatsForScene(scene);
  const start = sceneBeats[0].startFrame;
  const last = sceneBeats[sceneBeats.length - 1];
  const end = last.startFrame + last.durationInFrames;
  return { start, end };
}

/** Frame at which `beatId` starts, relative to the start of its own scene. */
export function relativeStart(beatId: string): number {
  const beat = beats.find((b) => b.id === beatId);
  if (!beat) return 0;
  const { start } = sceneRange(beat.scene);
  return beat.startFrame - start;
}
