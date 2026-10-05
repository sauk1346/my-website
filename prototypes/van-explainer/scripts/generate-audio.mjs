// Generates one MP3 per narration beat via ElevenLabs TTS, then probes each
// file's duration with ffprobe and writes public/durations.json so the
// Remotion composition can size each Sequence to match the real audio length.
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

const API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID || '21m00Tcm4TlvDq8ikWAM'; // "Rachel", default public voice
const FORCE = process.env.FORCE === '1';

if (!API_KEY) {
  console.error('Falta ELEVENLABS_API_KEY en el entorno. Ejemplo:');
  console.error('  ELEVENLABS_API_KEY=tu_api_key npm run generate-audio');
  process.exit(1);
}

async function fileExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

const narration = JSON.parse(await readFile(new URL('../narration.json', import.meta.url), 'utf8'));
const outDir = new URL('../public/audio/', import.meta.url);
await mkdir(outDir, { recursive: true });

async function synthesize(beat) {
  const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`, {
    method: 'POST',
    headers: {
      'xi-api-key': API_KEY,
      'Content-Type': 'application/json',
      Accept: 'audio/mpeg',
    },
    body: JSON.stringify({
      text: beat.text,
      model_id: 'eleven_multilingual_v2',
      voice_settings: { stability: 0.5, similarity_boost: 0.75 },
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`ElevenLabs error (${res.status}) para "${beat.id}": ${errText}`);
  }

  const buffer = Buffer.from(await res.arrayBuffer());
  const filePath = new URL(`${beat.id}.mp3`, outDir);
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

const durationsUrl = new URL('../public/durations.json', import.meta.url);
const manifestUrl = new URL('../public/audio-manifest.json', import.meta.url);
const durations = await loadJsonIfExists(durationsUrl);
const manifest = await loadJsonIfExists(manifestUrl);

for (const beat of narration) {
  const filePath = new URL(`${beat.id}.mp3`, outDir);
  if (!FORCE && (await fileExists(filePath))) {
    console.log(`Omitiendo ${beat.id} (ya existe; usa FORCE=1 para regenerar)`);
    if (!durations[beat.id]) {
      durations[beat.id] = await probeDurationSeconds(filePath);
    }
    manifest[beat.id] = `audio/${beat.id}.mp3`;
    continue;
  }
  console.log(`Generando audio: ${beat.id}...`);
  const generatedPath = await synthesize(beat);
  const seconds = await probeDurationSeconds(generatedPath);
  durations[beat.id] = seconds;
  manifest[beat.id] = `audio/${beat.id}.mp3`;
  console.log(`  -> ${seconds.toFixed(2)}s`);
}

await writeFile(
  new URL('../public/durations.json', import.meta.url),
  JSON.stringify(durations, null, 2)
);
await writeFile(
  new URL('../public/audio-manifest.json', import.meta.url),
  JSON.stringify(manifest, null, 2)
);

console.log('\nListo. Audios en public/audio/, duraciones en public/durations.json, manifest en public/audio-manifest.json');
