# VAN Explainer — prototipo Remotion + ElevenLabs

Prototipo aislado (no integrado a saukcode.cl) que anima el Ejercicio 1 de
VAN de `clase16.mdx` como video explicativo: datos → fórmula → tabla
(año por año) → resultado → conclusión, con narración y subtítulos.

## Cómo funciona el timing

- `narration.json` tiene el guion dividido en "beats" (una frase por paso).
- `public/durations.json` tiene la duración real (en segundos) de cada beat,
  medida con `ffprobe` sobre el audio generado. Mientras no haya audio real,
  usa duraciones estimadas por conteo de palabras para poder previsualizar.
- `src/timing.ts` convierte esas duraciones a frames (30fps) y arma la
  línea de tiempo global. Las escenas (`src/scenes/*`) leen esos offsets
  para revelar cada fila de la tabla exactamente cuando el audio la narra.

## Generar la narración con ElevenLabs

```bash
ELEVENLABS_API_KEY=tu_api_key npm run generate-audio
# opcional: ELEVENLABS_VOICE_ID=<id de otra voz>
```

Esto crea `public/audio/<beat>.mp3` por cada beat, mide su duración real
con ffprobe, y sobrescribe `public/durations.json` y
`public/audio-manifest.json`. La composición usa esos valores automáticamente
la próxima vez que se abra el Studio o se renderice.

## Previsualizar

```bash
npm run studio
```

## Renderizar a mp4

```bash
npm run render
# -> out/van-explainer.mp4
```

## Estado del prototipo

- ✅ Animación sincronizada con timing real (probado sin audio, narración
  estimada por palabras).
- ⏳ Narración con ElevenLabs: pendiente de una API key para generarla y
  verificar el sync con audio real (la duración real puede diferir un poco
  de la estimación por palabras, pero el pipeline ya está listo para eso).
- No toca nada del sitio Next.js ni de `clase16.mdx`. Si se decide avanzar,
  el siguiente paso sería embeber `<Player>` de `@remotion/player` en una
  página o componente del sitio, o exportar el mp4 y mostrarlo como video
  normal.
