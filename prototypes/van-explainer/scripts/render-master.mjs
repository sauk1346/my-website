// Master render estable y rápido.
//
// Problema: el render paralelo normal de Remotion produce frames con
// rasterización de texto ligeramente distinta intercalada (el texto
// manuscrito "tirita"). Con --concurrency 1 los frames son bit-idénticos,
// pero tarda ~5x más.
//
// Solución: dividir el video en trozos ALINEADOS A INICIOS DE ESCENA y
// renderizar cada trozo en un proceso remotion propio con --concurrency 1,
// todos en paralelo. Dentro de cada trozo la rasterización es consistente,
// y si cambia entre trozos, el cambio coincide con un cambio de pantalla
// completo (imperceptible). Luego se concatenan con ffmpeg sin re-codificar
// y se les agrega el audio renderizado en una pasada aparte.
//
// Uso: node scripts/render-master.mjs ej2
import { readFile, mkdir, writeFile, rm } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import os from 'node:os';

const EXERCISE = process.argv[2] || 'ej2';
const COMPOSITIONS = { ej1: 'Ej1Van', ej2: 'Ej2Indicadores', ej3: 'Ej3Indicadores' };
const COMP = COMPOSITIONS[EXERCISE];
if (!COMP) {
  console.error(`Ejercicio desconocido: ${EXERCISE}. Conocidos: ${Object.keys(COMPOSITIONS).join(', ')}`);
  process.exit(1);
}

// Debe coincidir con createTiming() en src/timing.ts y Root.tsx.
const FPS = 30;
const GAP = 14;
const LEAD_IN = 75;
const TAIL = 90;
const ENCODE_ARGS = ['--crf', '13', '--x264-preset', 'slow', '--pixel-format', 'yuv444p'];
const PARALLEL = Math.max(2, Math.min(6, Math.floor(os.cpus().length / 2)));

function estimateSeconds(text) {
  const words = text.trim().split(/\s+/).length;
  return Math.max(2.5, words / 2.1 + 0.9);
}

const narration = JSON.parse(await readFile(new URL(`../narrations/${EXERCISE}.json`, import.meta.url), 'utf8'));
const durations = JSON.parse(await readFile(new URL(`../public/durations-${EXERCISE}.json`, import.meta.url), 'utf8'));

// Frame de inicio de cada escena + total de frames.
let cursor = LEAD_IN;
const sceneStarts = [];
const seen = new Set();
for (const beat of narration) {
  if (!seen.has(beat.scene)) {
    seen.add(beat.scene);
    sceneStarts.push(seen.size === 1 ? 0 : cursor);
  }
  cursor += Math.round((durations[beat.id] ?? estimateSeconds(beat.text)) * FPS) + GAP;
}
const totalFrames = cursor + TAIL;

// Agrupa escenas consecutivas en PARALLEL trozos de tamaño similar.
const targetLen = totalFrames / PARALLEL;
const cuts = [0];
for (const start of sceneStarts.slice(1)) {
  if (start - cuts[cuts.length - 1] >= targetLen && cuts.length < PARALLEL) {
    cuts.push(start);
  }
}
const ranges = cuts.map((start, i) => [start, (cuts[i + 1] ?? totalFrames) - 1]);

console.log(`${EXERCISE}: ${totalFrames} frames, ${ranges.length} trozos en paralelo:`);
ranges.forEach(([a, b], i) => console.log(`  parte ${i}: frames ${a}-${b} (${(((b - a) / FPS) | 0)}s)`));

const partsDir = new URL('../out/.masterparts/', import.meta.url);
await rm(partsDir, { recursive: true, force: true });
await mkdir(partsDir, { recursive: true });

function run(cmd, args, label) {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, args, { stdio: ['ignore', 'ignore', 'pipe'] });
    let err = '';
    p.stderr.on('data', (d) => (err += d));
    p.on('close', (code) =>
      code === 0 ? resolve() : reject(new Error(`${label} falló (exit ${code}):\n${err.slice(-2000)}`))
    );
  });
}

const t0 = Date.now();

// Audio completo en una pasada (no sufre el problema de raster).
const audioPath = new URL('audio.wav', partsDir).pathname;
const audioJob = run(
  'npx',
  ['remotion', 'render', 'src/index.ts', COMP, audioPath, '--codec', 'wav'],
  'render de audio'
).then(() => console.log('  audio listo'));

// Trozos de video (sin audio), cada uno con un solo worker.
const videoJobs = ranges.map(([a, b], i) => {
  const out = new URL(`part-${String(i).padStart(2, '0')}.mp4`, partsDir).pathname;
  return run(
    'npx',
    ['remotion', 'render', 'src/index.ts', COMP, out, `--frames=${a}-${b}`, '--concurrency', '1', '--muted', ...ENCODE_ARGS],
    `parte ${i}`
  ).then(() => console.log(`  parte ${i} lista (frames ${a}-${b})`));
});

await Promise.all([audioJob, ...videoJobs]);

// Concatena los trozos sin re-codificar y agrega el audio.
const listPath = new URL('list.txt', partsDir).pathname;
await writeFile(
  listPath,
  ranges.map((_, i) => `file 'part-${String(i).padStart(2, '0')}.mp4'`).join('\n')
);
const OUTPUT_NAMES = { ej1: 'ej1-van.mp4', ej2: 'ej2-indicadores.mp4', ej3: 'ej3-indicadores.mp4' };
const finalPath = new URL(`../out/${OUTPUT_NAMES[EXERCISE]}`, import.meta.url).pathname;
await run(
  'ffmpeg',
  ['-y', '-v', 'error', '-f', 'concat', '-safe', '0', '-i', listPath, '-i', audioPath,
   '-map', '0:v', '-map', '1:a', '-c:v', 'copy', '-c:a', 'aac', '-b:a', '192k', finalPath],
  'concat/mux'
);
await rm(partsDir, { recursive: true, force: true });

console.log(`\nListo: ${finalPath} en ${((Date.now() - t0) / 60000).toFixed(1)} min`);
