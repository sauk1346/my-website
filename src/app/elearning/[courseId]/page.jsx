import React from 'react';
import { notFound } from 'next/navigation';
import SectionTable from '@/components/features/elearning/SectionTable';
import { getAllElearningCoursePaths, getElearningCourseData, getPlatformByCourseId } from '@/utils/elearningUtils';

/**
 * Pre-genera todas las páginas de cursos en build time
 */
export async function generateStaticParams() {
    return getAllElearningCoursePaths();
}

/**
 * Configuración para retornar 404 en rutas no pre-generadas
 */
export const dynamicParams = false;

/**
 * Genera metadata dinámica para SEO
 */
export async function generateMetadata({ params }) {
    const { courseId } = await params;
    const platform = getPlatformByCourseId(courseId);
    const courseData = getElearningCourseData(platform, courseId);

    return {
        title: `${courseData?.title || courseId} | E-learning`,
        description: courseData?.description || 'Contenido educativo online',
    };
}

export default async function CoursePage({ params }) {
    const { courseId } = await params;
    const platform = getPlatformByCourseId(courseId);
    const courseData = getElearningCourseData(platform, courseId);

    if (!courseData) {
        notFound();
    }

    return <SectionTable courseData={courseData} courseId={courseId} />;
}
