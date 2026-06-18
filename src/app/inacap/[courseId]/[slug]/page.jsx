import React from 'react';
import { notFound } from 'next/navigation';
import { CustomMDXProvider } from '@/components/providers/CustomMDXProvider';
import { FigureProvider, TableProvider, TerminalProvider } from '@/components/mdx';
import { getAllInacapLessonPaths, getCourseData } from '@/utils/courseUtils';

/**
 * Pre-renderiza todas las páginas de lecciones en build time
 * Mejora significativamente la performance y SEO
 */
export async function generateStaticParams() {
    return getAllInacapLessonPaths();
}

/**
 * Configuración para retornar 404 en rutas no pre-generadas
 */
export const dynamicParams = false;

/**
 * Genera metadata dinámica para SEO
 */
export async function generateMetadata({ params }) {
    const { courseId, slug } = await params;
    const courseData = getCourseData(courseId);

    return {
        title: `${slug} | ${courseData?.courseCode || 'INACAP'}`,
        description: courseData?.courseDescription || 'Contenido educativo de INACAP',
    };
}

export default async function LessonPage({ params }) {
    const { courseId, slug } = await params;

    try {
        // Importación directa sin dynamic() para mejor performance
        const { default: MDXContent } = await import(
            `@/content/inacap/${courseId}/${slug}.mdx`
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
