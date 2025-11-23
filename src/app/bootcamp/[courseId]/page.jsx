import React from 'react';
import { notFound } from 'next/navigation';
import CftTable from '@/components/features/bootcamp/codfacilito/CftTable';
import UddDetail from '@/components/features/bootcamp/udd/UddDetail';
import { getAllBootcampCoursePaths, getBootcampCourseData, getPlatformByCourseId } from '@/utils/bootcampUtils';

/**
 * Pre-genera todas las páginas de cursos en build time
 */
export async function generateStaticParams() {
    return getAllBootcampCoursePaths();
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
    const courseData = getBootcampCourseData(platform, courseId);

    return {
        title: `${courseData?.title || courseId} | Bootcamp`,
        description: courseData?.sectionTitle || 'Contenido de bootcamp',
    };
}

export default async function CoursePage({ params }) {
    const { courseId } = await params;
    const platform = getPlatformByCourseId(courseId);
    const courseData = getBootcampCourseData(platform, courseId);

    if (!courseData) {
        notFound();
    }

    // Renderiza el componente apropiado según la plataforma
    if (platform === 'codfacilito') {
        return <CftTable courseData={courseData} />;
    } else if (platform === 'udd') {
        return <UddDetail bootcampData={courseData} />;
    }

    notFound();
}
