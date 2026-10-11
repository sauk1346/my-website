import narration from '../narration.json';
import durations from '../public/durations.json';

export const FPS = 30;

export type NarrationBeat = { id: string; scene: string; text: string };

export type Beat = NarrationBeat & {
  startFrame: number;
  durationInFrames: number;
};

export type Timing = {
  beats: Beat[];
  totalDurationInFrames: number;
  beatsForScene(scene: string): Beat[];
  sceneRange(scene: string): { start: number; end: number };
  /** Frame at which `beatId` starts, relative to the start of its own scene. */
  relativeStart(beatId: string): number;
  beatDuration(beatId: string): number;
};

/** Rough duration for beats whose audio hasn't been generated yet. */
function estimateSeconds(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(2.5, words / 2.1 + 0.9);
}

export function createTiming(
  beatsInput: NarrationBeat[],
  durationsInput: Record<string, number>,
  opts: { gapFrames?: number; leadInFrames?: number; tailFrames?: number } = {}
): Timing {
  const gap = opts.gapFrames ?? 0;
  const leadIn = opts.leadInFrames ?? 0;
  const tail = opts.tailFrames ?? 0;
  let cursor = leadIn;
  const beats: Beat[] = beatsInput.map((beat) => {
    const seconds = durationsInput[beat.id] ?? estimateSeconds(beat.text);
    const durationInFrames = Math.round(seconds * FPS) + gap;
    const b: Beat = { ...beat, startFrame: cursor, durationInFrames };
    cursor += durationInFrames;
    return b;
  });

  const totalDurationInFrames = cursor + tail;

  function beatsForScene(scene: string): Beat[] {
    return beats.filter((b) => b.scene === scene);
  }

  function sceneRange(scene: string): { start: number; end: number } {
    const sceneBeats = beatsForScene(scene);
    if (sceneBeats.length === 0) return { start: 0, end: 1 };
    const last = sceneBeats[sceneBeats.length - 1];
    // The first scene covers the lead-in and the last scene stays on screen
    // through the tail, so the video neither starts nor ends abruptly.
    const isFirst = beats.length > 0 && sceneBeats[0].id === beats[0].id;
    const isLast = beats.length > 0 && last.id === beats[beats.length - 1].id;
    return {
      start: isFirst ? 0 : sceneBeats[0].startFrame,
      end: isLast ? totalDurationInFrames : last.startFrame + last.durationInFrames,
    };
  }

  function relativeStart(beatId: string): number {
    const beat = beats.find((b) => b.id === beatId);
    if (!beat) return 0;
    return beat.startFrame - sceneRange(beat.scene).start;
  }

  function beatDuration(beatId: string): number {
    const beat = beats.find((b) => b.id === beatId);
    return beat ? beat.durationInFrames : 0;
  }

  return { beats, totalDurationInFrames, beatsForScene, sceneRange, relativeStart, beatDuration };
}

// ---- Legacy exports for the original ej1 VAN composition ----
const ej1 = createTiming(narration as NarrationBeat[], durations as Record<string, number>);

export const beats = ej1.beats;
export const totalDurationInFrames = ej1.totalDurationInFrames;
export const beatsForScene = ej1.beatsForScene;
export const sceneRange = ej1.sceneRange;
export const relativeStart = ej1.relativeStart;
