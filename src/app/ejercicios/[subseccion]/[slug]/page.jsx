import React from 'react';
import { notFound } from 'next/navigation';
import { CustomMDXProvider } from '@/components/providers/CustomMDXProvider';
import { FigureProvider, TableProvider, TerminalProvider } from '@/components/mdx';
import { getAllExercisePaths, getExerciseData } from '@/utils/ejerciciosUtils';

/**
 * Pre-renderiza todas las páginas de ejercicios en build time
 */
export async function generateStaticParams() {
    return getAllExercisePaths();
}

/**
 * Configuración para retornar 404 en rutas no pre-generadas
 */
export const dynamicParams = false;

/**
 * Genera metadata dinámica para SEO
 */
export async function generateMetadata({ params }) {
    const { subseccion, slug } = await params;
    const exerciseData = getExerciseData(subseccion, slug);

    return {
        title: `${slug.toUpperCase()} - ${exerciseData?.title || 'Ejercicio'}`,
        description: `${exerciseData?.difficulty || ''} - ${exerciseData?.topics?.join(', ') || ''}`,
    };
}

export default async function Page({ params }) {
    const { subseccion, slug } = await params;

    try {
        // Importación directa sin dynamic() para mejor performance
        const { default: MDXContent } = await import(
            `@/content/ejercicios/${subseccion}/${slug}.mdx`
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
