# Explicadores AVFI01 — Remotion + ElevenLabs

Prototipo aislado (no integrado a saukcode.cl) que genera videos explicativos
de los ejercicios de Indicadores de Rentabilidad de AVFI01:

- **VanExplainer** (legacy): Ejercicio 1 de VAN (`clase16.mdx`).
- **Ej2Indicadores**: Ejercicio 2 (`clase17.mdx`) — VAN, TIR, PRI y ROI, con
  mano que "escribe" los cálculos (fuente Caveat + sprite SVG) y narración
  pausada que justifica de dónde sale cada valor (tasa en decimal,
  descomposición 1 + 0,2 = 1,2, potencias del factor, etc.).

## Cómo funciona el timing

- `narrations/<ej>.json` tiene el guion dividido en "beats" (una frase por paso).
- `public/durations-<ej>.json` tiene la duración real (en segundos) de cada
  beat, medida con `ffprobe` sobre el audio generado. Mientras no haya audio,
  `src/timing.ts` estima por conteo de palabras para poder previsualizar.
- `createTiming()` (src/timing.ts) convierte duraciones a frames (30fps),
  agrega una pausa entre beats (`gapFrames`), un colchón inicial antes de la
  primera frase (`leadInFrames`) y un cierre tras la última (`tailFrames`),
  para que el video no parta ni termine abruptamente. Las
  escenas leen esos offsets vía el contexto (`src/indicadores/context.tsx`)
  para que la mano termine de escribir justo cuando la voz termina la frase.
- El ejercicio 1 mantiene su layout legacy (`narration.json`,
  `public/durations.json`, `public/audio/*.mp3`).

## La mano que escribe

`src/indicadores/HandWrite.tsx`: revela carácter por carácter en fuente
manuscrita (Caveat, en `public/fonts/`), con un sprite SVG de mano+lápiz
anclado al carácter en curso. Soporta fracciones con exponente en el
denominador (`{ t: 'frac', num, den, denSup }`) y superíndices.

## Generar la narración con ElevenLabs

La API key y la voz viven en `.env` (el script lo lee automáticamente):

```bash
npm run generate-audio        # ej1 (legacy)
npm run generate-audio:ej2    # ej2
# FORCE=1 regenera audios ya existentes
```

Ajustes de voz para un ritmo pausado: `speed: 0.9`, `stability: 0.65`, y
`<break time="0.7s" />` insertados tras cada oración (`withPauses()`).

## Previsualizar / renderizar

```bash
npm run studio
npm run render        # -> out/van-explainer.mp4 (ej1)
npm run render:ej2    # -> out/ej2-indicadores.mp4
```

## Agregar un ejercicio nuevo (p. ej. ej3)

1. `src/exercises/ej3.ts` con los datos (mismo shape que `ej2.ts`).
2. `narrations/ej3.json` con el guion (mismos ids de beat: `anioN_*`,
   `tir_*`, `pri_*`, `roi_*`, etc.).
3. `public/durations-ej3.json` y `public/audio-manifest-ej3.json` con `{}`.
4. Registrar la `Composition` en `src/Root.tsx` y los scripts en package.json.
5. `node scripts/generate-audio.mjs ej3` y renderizar.

Las escenas (`src/indicadores/scenes/`) son data-driven y soportan N años.

## Masters finales

Los tres videos se generan con `scripts/render-master.mjs` (trozos alineados
a inicios de escena, cada uno con `--concurrency 1` para evitar el raster
no determinista del render paralelo, concatenados con ffmpeg + audio en una
pasada aparte):

```bash
npm run render:master:ej1   # out/ej1-van.mp4          (~8 min)
npm run render:master:ej2   # out/ej2-indicadores.mp4
npm run render:master:ej3   # out/ej3-indicadores.mp4  (~10 min)
```

`render:ej2` (concurrency 1 directo) queda como alternativa lenta de un
solo proceso. Los previews (`npm run studio`, `remotion still`) usan
concurrencia normal sin problema.

## Pendientes

- Publicación: subir los mp4 a YouTube (CC con el guion de `narrations/`)
  y/o enlazarlos desde `clase16/17/18.mdx`.
- El VanExplainer legacy (ej1 original) puede eliminarse cuando se valide
  la regrabación (`Ej1Van`).
