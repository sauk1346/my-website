// Generates one MP3 per narration beat via ElevenLabs TTS, then probes each
// file's duration with ffprobe and writes the durations JSON so the Remotion
// composition can size each Sequence to match the real audio length.
//
// Usage:
//   node scripts/generate-audio.mjs          -> ej1 (legacy layout)
//   node scripts/generate-audio.mjs ej2      -> narrations/ej2.json
//   FORCE=1 node scripts/generate-audio.mjs ej2   (regenerate existing files)
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import { existsSync, readFileSync } from 'node:fs';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

// Load .env (if present) without external deps.
const envUrl = new URL('../.env', import.meta.url);
if (existsSync(envUrl)) {
  for (const line of readFileSync(envUrl, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !(m[1] in process.env)) process.env[m[1]] = m[2];
  }
}

// 'legacy' = el ej1 original (narration.json / public/audio/). La
// regrabación del ej1 usa el esquema genérico (narrations/ej1.json).
const EXERCISE = process.argv[2] || 'legacy';
const API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID || '21m00Tcm4TlvDq8ikWAM';
const FORCE = process.env.FORCE === '1';

if (!API_KEY) {
  console.error('Falta ELEVENLABS_API_KEY (en .env o en el entorno).');
  process.exit(1);
}

// Per-exercise file layout. ej1 keeps the original paths.
const paths =
  EXERCISE === 'legacy'
    ? {
        narration: new URL('../narration.json', import.meta.url),
        outDir: new URL('../public/audio/', import.meta.url),
        durations: new URL('../public/durations.json', import.meta.url),
        manifest: new URL('../public/audio-manifest.json', import.meta.url),
        audioPrefix: 'audio/',
      }
    : {
        narration: new URL(`../narrations/${EXERCISE}.json`, import.meta.url),
        outDir: new URL(`../public/audio/${EXERCISE}/`, import.meta.url),
        durations: new URL(`../public/durations-${EXERCISE}.json`, import.meta.url),
        manifest: new URL(`../public/audio-manifest-${EXERCISE}.json`, import.meta.url),
        audioPrefix: `audio/${EXERCISE}/`,
      };

async function fileExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

/**
 * Inserts <break> tags so the narration breathes. Only after sentence
 * boundaries and with moderate duration: too many/long breaks make
 * eleven_multilingual_v2 unstable (artifacts, mumbled words).
 */
function withPauses(text) {
  return text
    .replace(/\. /g, '. <break time="0.5s" /> ')
    .replace(/\? /g, '? <break time="0.5s" /> ');
}

const narration = JSON.parse(await readFile(paths.narration, 'utf8'));
await mkdir(paths.outDir, { recursive: true });

async function synthesize(beat) {
  const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`, {
    method: 'POST',
    headers: {
      'xi-api-key': API_KEY,
      'Content-Type': 'application/json',
      Accept: 'audio/mpeg',
    },
    body: JSON.stringify({
      text: withPauses(beat.text),
      model_id: 'eleven_multilingual_v2',
      voice_settings: {
        stability: 0.65,
        similarity_boost: 0.75,
        speed: 0.9,
      },
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`ElevenLabs error (${res.status}) para "${beat.id}": ${errText}`);
  }

  const buffer = Buffer.from(await res.arrayBuffer());
  const filePath = new URL(`${beat.id}.mp3`, paths.outDir);
  await writeFile(filePath, buffer);
  return filePath;
}

async function probeDurationSeconds(filePath) {
  const { stdout } = await execFileAsync('ffprobe', [
    '-v', 'error',
    '-show_entries', 'format=duration',
    '-of', 'default=noprint_wrappers=1:nokey=1',
    filePath.pathname,
  ]);
  return parseFloat(stdout.trim());
}

async function loadJsonIfExists(url) {
  try {
    return JSON.parse(await readFile(url, 'utf8'));
  } catch {
    return {};
  }
}

const durations = await loadJsonIfExists(paths.durations);
const manifest = await loadJsonIfExists(paths.manifest);

for (const beat of narration) {
  const filePath = new URL(`${beat.id}.mp3`, paths.outDir);
  if (!FORCE && (await fileExists(filePath))) {
    console.log(`Omitiendo ${beat.id} (ya existe; usa FORCE=1 para regenerar)`);
    if (!durations[beat.id]) {
      durations[beat.id] = await probeDurationSeconds(filePath);
    }
    manifest[beat.id] = `${paths.audioPrefix}${beat.id}.mp3`;
    continue;
  }
  console.log(`Generando audio: ${beat.id}...`);
  const generatedPath = await synthesize(beat);
  const seconds = await probeDurationSeconds(generatedPath);
  durations[beat.id] = seconds;
  manifest[beat.id] = `${paths.audioPrefix}${beat.id}.mp3`;
  console.log(`  -> ${seconds.toFixed(2)}s`);
}

await writeFile(paths.durations, JSON.stringify(durations, null, 2));
await writeFile(paths.manifest, JSON.stringify(manifest, null, 2));

console.log(
  `\nListo (${EXERCISE}). Audios en ${paths.outDir.pathname}, duraciones y manifest actualizados.`
);
