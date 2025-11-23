import React from 'react';
import { notFound } from 'next/navigation';
import ModuleTable from '@/components/features/idioma/ModuleTable';
import { getAllLanguageCoursePaths, getLanguageCourseData } from '@/utils/idiomasUtils';

/**
 * Pre-genera todas las páginas de cursos en build time
 */
export async function generateStaticParams() {
    return getAllLanguageCoursePaths();
}

/**
 * Configuración para retornar 404 en rutas no pre-generadas
 */
export const dynamicParams = false;

/**
 * Genera metadata dinámica para SEO
 */
export async function generateMetadata({ params }) {
    const { language, courseId } = await params;
    const courseData = getLanguageCourseData(language, courseId);

    return {
        title: `${courseData?.title || courseId} | ${language}`,
        description: `Curso de ${language} - ${courseData?.title || ''}`,
    };
}

export default async function CoursePage({ params }) {
    const { language, courseId } = await params;
    const courseData = getLanguageCourseData(language, courseId);

    if (!courseData) {
        notFound();
    }

    return <ModuleTable data={courseData} language={language} />;
}
