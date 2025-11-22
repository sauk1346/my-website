import React from 'react';
import { notFound } from 'next/navigation';
import { CustomMDXProvider } from '@/components/providers/CustomMDXProvider';
import { getAllBootcampLessonPaths, getBootcampCourseData } from '@/utils/bootcampUtils';

/**
 * Pre-renderiza todas las páginas de lecciones en build time
 */
export async function generateStaticParams() {
    return getAllBootcampLessonPaths();
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
    const courseData = getBootcampCourseData(platform, courseId);

    return {
        title: `${slug} | ${courseData?.title || 'Bootcamp'}`,
        description: courseData?.sectionTitle || 'Contenido de bootcamp',
    };
}

export default async function LessonPage({ params }) {
    const { platform, courseId, slug } = await params;

    try {
        // Importación directa sin dynamic() para mejor performance
        const { default: MDXContent } = await import(
            `@/content/bootcamp/${platform}/${courseId}/${slug}.mdx`
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
