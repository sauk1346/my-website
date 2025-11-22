import React from 'react';
import { notFound } from 'next/navigation';
import { CustomMDXProvider } from '@/components/providers/CustomMDXProvider';
import { getAllElearningLessonPaths, getElearningCourseData } from '@/utils/elearningUtils';

/**
 * Pre-renderiza todas las páginas de lecciones en build time
 */
export async function generateStaticParams() {
    return getAllElearningLessonPaths();
}

/**
 * Configuración para retornar 404 en rutas no pre-generadas
 */
export const dynamicParams = false;

/**
 * Genera metadata dinámica para SEO
 */
export async function generateMetadata({ params }) {
    const { platform, courseId, slug } = await params;
    const courseData = getElearningCourseData(platform, courseId);

    return {
        title: `${slug} | ${courseData?.title || 'E-learning'}`,
        description: courseData?.description || 'Contenido educativo online',
    };
}

export default async function LessonPage({ params }) {
    const { platform, courseId, slug } = await params;

    try {
        // Importación directa sin dynamic() para mejor performance
        const { default: MDXContent } = await import(
            `@/content/elearning/${platform}/${courseId}/${slug}.mdx`
        );

        return (
            <CustomMDXProvider>
                <MDXContent />
            </CustomMDXProvider>
        );
    } catch (error) {
        notFound();
    }
}
