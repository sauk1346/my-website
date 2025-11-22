import React from 'react';
import { notFound } from 'next/navigation';
import { getAllLanguageLessonPaths, getLanguageCourseData } from '@/utils/idiomasUtils';

/**
 * Pre-renderiza todas las páginas de lecciones en build time
 */
export async function generateStaticParams() {
    return getAllLanguageLessonPaths();
}

/**
 * Configuración para retornar 404 en rutas no pre-generadas
 */
export const dynamicParams = false;

/**
 * Genera metadata dinámica para SEO
 */
export async function generateMetadata({ params }) {
    const { language, courseId, slug } = await params;
    const courseData = getLanguageCourseData(language, courseId);

    return {
        title: `${slug} | ${courseData?.title || 'Idiomas'}`,
        description: `Lección de ${language} - ${courseData?.title || ''}`,
    };
}

export default async function LessonPage({ params }) {
    const { language, courseId, slug } = await params;

    try {
        // Importación directa sin dynamic() para mejor performance
        const { default: MDXContent } = await import(
            `@/content/idiomas/${language}/${courseId}/${slug}.mdx`
        );

        return <MDXContent />;
    } catch (error) {
        notFound();
    }
}
