import React from 'react';
import { notFound } from 'next/navigation';
import { getAllLanguageTopicPaths, getLanguageTopicMeta } from '@/utils/idiomasUtils';
import { FigureProvider, TableProvider, TerminalProvider } from '@/components/mdx';
import { CustomMDXProvider } from '@/components/providers/CustomMDXProvider';

/**
 * Pre-renderiza todas las páginas de tópicos en build time
 */
export async function generateStaticParams() {
    return getAllLanguageTopicPaths();
}

/**
 * Configuración para retornar 404 en rutas no pre-generadas
 */
export const dynamicParams = false;

/**
 * Genera metadata dinámica para SEO
 */
export async function generateMetadata({ params }) {
    const { language, slug } = await params;
    const meta = getLanguageTopicMeta(language, slug);

    return {
        title: meta?.title || slug,
        description: `Tópico de ${language}`,
    };
}

export default async function TopicPage({ params }) {
    const { language, slug } = await params;

    try {
        // Importación directa sin dynamic() para mejor performance
        const { default: MDXContent } = await import(
            `@/content/idiomas/${language}/temas/${slug}.mdx`
        );

        return (
            <CustomMDXProvider>
                <FigureProvider>
                    <TableProvider>
                        <TerminalProvider>
                            <MDXContent />
                        </TerminalProvider>
                    </TableProvider>
                </FigureProvider>
            </CustomMDXProvider>
        );
    } catch (error) {
        notFound();
    }
}
