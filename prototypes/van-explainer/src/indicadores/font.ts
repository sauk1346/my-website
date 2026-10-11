import { cancelRender, continueRender, delayRender, staticFile } from 'remotion';
import { loadFont } from '@remotion/fonts';

export const HAND_FONT = 'Caveat';

// Bloquea el render hasta que la fuente esté realmente disponible en ESTA
// pestaña. Sin esto, algunos workers paralelos renderizaban sus frames con
// la fuente fallback (bold sintético) y el texto manuscrito "tiritaba" al
// intercalarse frames de distintos workers. Un fallo de carga debe abortar
// el render, nunca continuar en silencio con otra fuente.
const handle = delayRender('Cargando fuente manuscrita Caveat');

loadFont({
  family: HAND_FONT,
  url: staticFile('fonts/Caveat.ttf'),
  weight: '400 700',
})
  .then(() => {
    if (!document.fonts.check(`600 32px '${HAND_FONT}'`)) {
      throw new Error(`La fuente ${HAND_FONT} no quedó disponible tras loadFont`);
    }
    continueRender(handle);
  })
  .catch((err) => cancelRender(err));
