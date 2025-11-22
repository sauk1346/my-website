import { extractSlugsFromCourseData } from './contentUtils';
import { udm001Data } from '@/data/elearning/udm001';
import { udm002Data } from '@/data/elearning/udm002';
import { dvt010Data } from '@/data/elearning/dvt010';
import { cft002Data } from '@/data/elearning/codfacilito/cft002';

const elearningDataMap = {
    udemy: {
        udm001: udm001Data,
        udm002: udm002Data,
    },
    devtalles: {
        dtv010: dvt010Data,
    },
    codfacilito: {
        cft002: cft002Data,
    }
};

/**
 * Obtiene los datos de un curso de elearning específico
 */
export function getElearningCourseData(platform, courseId) {
    return elearningDataMap[platform]?.[courseId];
}

/**
 * Obtiene todos los IDs de cursos para una plataforma
 */
export function getElearningCourseIds(platform) {
    return Object.keys(elearningDataMap[platform] || {});
}

/**
 * Obtiene todas las plataformas disponibles
 */
export function getAllElearningPlatforms() {
    return Object.keys(elearningDataMap);
}

/**
 * Obtiene todos los pares platform/courseId/slug para generateStaticParams
 */
export function getAllElearningLessonPaths() {
    const platforms = getAllElearningPlatforms();
    const allParams = [];

    for (const platform of platforms) {
        const courseIds = getElearningCourseIds(platform);

        for (const courseId of courseIds) {
            const courseData = getElearningCourseData(platform, courseId);
            if (!courseData) continue;

            const slugs = extractSlugsFromCourseData(courseData);

            slugs.forEach(slug => {
                allParams.push({
                    platform,
                    courseId,
                    slug
                });
            });
        }
    }

    return allParams;
}

/**
 * Obtiene todos los pares platform/courseId para páginas de curso
 */
export function getAllElearningCoursePaths() {
    const platforms = getAllElearningPlatforms();
    const allParams = [];

    for (const platform of platforms) {
        const courseIds = getElearningCourseIds(platform);

        courseIds.forEach(courseId => {
            allParams.push({
                platform,
                courseId
            });
        });
    }

    return allParams;
}
