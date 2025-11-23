import { extractSlugsFromCourseData } from './contentUtils';
import { cft001Data } from '@/data/bootcamp/codfacilito/cft001';
import { cft002Data } from '@/data/bootcamp/codfacilito/cft002';
import { cft003Data } from '@/data/bootcamp/codfacilito/cft003';
import { cft004Data } from '@/data/bootcamp/codfacilito/cft004';
import { cft005Data } from '@/data/bootcamp/codfacilito/cft005';
import { cft006Data } from '@/data/bootcamp/codfacilito/cft006';
import { cft999Data } from '@/data/bootcamp/codfacilito/cft999';
import { udd01Data } from '@/data/bootcamp/udd/udd01';
import { udd02Data } from '@/data/bootcamp/udd/udd02';

const bootcampDataMap = {
    codfacilito: {
        cft001: cft001Data,
        cft002: cft002Data,
        cft003: cft003Data,
        cft004: cft004Data,
        cft005: cft005Data,
        cft006: cft006Data,
        cft999: cft999Data,
    },
    udd: {
        udd001: udd01Data,
        udd002: udd02Data,
    }
};

/**
 * Obtiene los datos de un curso de bootcamp específico
 */
export function getBootcampCourseData(platform, courseId) {
    return bootcampDataMap[platform]?.[courseId];
}

/**
 * Obtiene todos los IDs de cursos para una plataforma
 */
export function getBootcampCourseIds(platform) {
    return Object.keys(bootcampDataMap[platform] || {});
}

/**
 * Obtiene todas las plataformas disponibles
 */
export function getAllBootcampPlatforms() {
    return Object.keys(bootcampDataMap);
}

/**
 * Obtiene la plataforma dado un courseId
 */
export function getPlatformByCourseId(courseId) {
    for (const [platform, courses] of Object.entries(bootcampDataMap)) {
        if (courses[courseId]) {
            return platform;
        }
    }
    return null;
}

/**
 * Obtiene todos los pares courseId/slug para generateStaticParams
 */
export function getAllBootcampLessonPaths() {
    const platforms = getAllBootcampPlatforms();
    const allParams = [];

    for (const platform of platforms) {
        const courseIds = getBootcampCourseIds(platform);

        for (const courseId of courseIds) {
            const courseData = getBootcampCourseData(platform, courseId);
            if (!courseData) continue;

            const slugs = extractSlugsFromCourseData(courseData);

            slugs.forEach(slug => {
                allParams.push({
                    courseId,
                    slug
                });
            });
        }
    }

    return allParams;
}

/**
 * Obtiene todos los pares courseId para páginas de curso
 */
export function getAllBootcampCoursePaths() {
    const platforms = getAllBootcampPlatforms();
    const allParams = [];

    for (const platform of platforms) {
        const courseIds = getBootcampCourseIds(platform);

        courseIds.forEach(courseId => {
            allParams.push({
                courseId
            });
        });
    }

    return allParams;
}
