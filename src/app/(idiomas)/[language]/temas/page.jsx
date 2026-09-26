import { redirect } from 'next/navigation';

/**
 * "temas" es solo un segmento de namespacing para las rutas de tópicos
 * ([language]/temas/[slug]) — no tiene contenido propio. Si se navega
 * directo aquí (ej. desde el breadcrumb), se redirige a la página del
 * idioma, donde vive la pestaña "Tópicos".
 */
export default async function TemasIndexPage({ params }) {
    const { language } = await params;
    redirect(`/${language}`);
}
