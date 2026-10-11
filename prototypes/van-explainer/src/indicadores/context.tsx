import React, { createContext, useContext } from 'react';
import { ExerciseData } from './types';
import { Timing } from '../timing';

type IndicadoresCtx = {
  data: ExerciseData;
  timing: Timing;
};

const Ctx = createContext<IndicadoresCtx | null>(null);

export const IndicadoresProvider: React.FC<
  IndicadoresCtx & { children: React.ReactNode }
> = ({ data, timing, children }) => {
  return <Ctx.Provider value={{ data, timing }}>{children}</Ctx.Provider>;
};

export function useIndicadores(): IndicadoresCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useIndicadores debe usarse dentro de IndicadoresProvider');
  return ctx;
}

/**
 * Writing window for a beat, in frames relative to the beat's own scene.
 * The hand starts writing a moment after the voice starts and finishes
 * slightly before the beat ends.
 */
export function useBeatWindow(
  beatId: string,
  opts: { lead?: number; tail?: number } = {}
): Window {
  const { timing } = useIndicadores();
  const lead = opts.lead ?? 10;
  const tail = opts.tail ?? 18;
  const start = timing.relativeStart(beatId) + lead;
  const duration = timing.beatDuration(beatId);
  const end = Math.max(start + 12, timing.relativeStart(beatId) + duration - tail);
  return { start, end };
}

export type Window = {
  start: number;
  end: number;
  /**
   * Frame until which the hand stays resting on the last written character
   * after finishing (so it doesn't blink out between consecutive writes).
   * Defaults to `end`.
   */
  holdUntil?: number;
};

/** Non-hook version of useBeatWindow, usable inside loops. */
export function beatWindow(
  timing: Timing,
  beatId: string,
  opts: { lead?: number; tail?: number } = {}
): Window {
  const lead = opts.lead ?? 10;
  const tail = opts.tail ?? 18;
  const start = timing.relativeStart(beatId) + lead;
  const duration = timing.beatDuration(beatId);
  const end = Math.max(start + 12, timing.relativeStart(beatId) + duration - tail);
  return { start, end };
}

/**
 * Splits a writing window into sequential sub-windows (one per element to
 * write). `weights` controls the share of time of each part.
 */
export function splitWindow(win: Window, weights: number[] | number, gap = 5): Window[] {
  const w = typeof weights === 'number' ? Array(weights).fill(1) : weights;
  const n = w.length;
  const totalWeight = w.reduce((a, b) => a + b, 0);
  const usable = Math.max(n * 8, win.end - win.start - gap * (n - 1));
  const result: Window[] = [];
  let cursor = win.start;
  for (let i = 0; i < n; i++) {
    const len = Math.max(8, Math.round((usable * w[i]) / totalWeight));
    result.push({ start: cursor, end: cursor + len });
    cursor += len + gap;
  }
  // Chain the hand: each part keeps the hand resting until the next starts.
  for (let i = 0; i < n - 1; i++) {
    result[i].holdUntil = result[i + 1].start;
  }
  result[n - 1].holdUntil = win.holdUntil ?? win.end;
  return result;
}
