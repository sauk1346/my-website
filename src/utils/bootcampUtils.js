import { cft001Data } from '@/data/bootcamp/codfacilito/cft001';
import { cft002Data } from '@/data/bootcamp/codfacilito/cft002';
import { cft003Data } from '@/data/bootcamp/codfacilito/cft003';
import { cft004Data } from '@/data/bootcamp/codfacilito/cft004';
import { cft005Data } from '@/data/bootcamp/codfacilito/cft005';
import { cft006Data } from '@/data/bootcamp/codfacilito/cft006';
import { cft007Data } from '@/data/bootcamp/codfacilito/cft007';
import { cft008Data } from '@/data/bootcamp/codfacilito/cft008';
import { cft009Data } from '@/data/bootcamp/codfacilito/cft009';
import { cft999Data } from '@/data/bootcamp/codfacilito/cft999';
import { udd01Data } from '@/data/bootcamp/udd/udd01';
import { udd02Data } from '@/data/bootcamp/udd/udd02';

/**
 * Extrae todos los slugs de un objeto de datos de curso
 * Versión sin dependencias de fs para uso tanto en cliente como servidor
 */
function extractSlugsFromCourseData(courseData) {
    const slugs = new Set();

    const extractFromArray = (array) => {
        array?.forEach(item => {
            // Para arrays de description con href
            item.description?.forEach?.(desc => {
                if (desc.href) {
                    const slug = desc.href.split('/').pop();
                    if (slug) slugs.add(slug);
                }
            });

            // Para description directa con href (evaluaciones)
            if (item.description?.href) {
                const slug = item.description.href.split('/').pop();
                if (slug) slugs.add(slug);
            }

            // Para quick guides
            item.quickGuide?.forEach?.(guide => {
                if (guide.href) {
                    const slug = guide.href.split('/').pop();
                    if (slug) slugs.add(slug);
                }
            });

            // Para classes dentro de modules
            item.classes?.forEach?.(cls => {
                if (cls.link) {
                    const slug = cls.link.split('/').pop();
                    if (slug) slugs.add(slug);
                }
                if (cls.exercises?.link) {
                    const slug = cls.exercises.link.split('/').pop();
                    if (slug) slugs.add(slug);
                }
            });

            // Para secciones
            item.sections?.forEach?.(section => {
                if (section.link) {
                    const slug = section.link.split('/').pop();
                    if (slug) slugs.add(slug);
                }
            });
        });
    };

    // Extrae de diferentes estructuras de datos
    extractFromArray(courseData.classData);
    extractFromArray(courseData.lectureData);
    extractFromArray(courseData.evaluationsData);
    extractFromArray(courseData.modules);
    extractFromArray(courseData.units);

    return Array.from(slugs).filter(Boolean);
}

// Metadata de las plataformas
const platformMetadata = {
    udd: {
        name: "UDD",
        description: "Apuntes",
        image: "/logos/udd.png"
    },
    codfacilito: {
        name: "CódigoFacilito",
        description: "Apuntes",
        image: "/logos/codigofacilito.png"
    }
};

const bootcampDataMap = {
    codfacilito: {
        cft001: cft001Data,
        cft002: cft002Data,
        cft003: cft003Data,
        cft004: cft004Data,
        cft005: cft005Data,
        cft006: cft006Data,
        cft007: cft007Data,
        cft008: cft008Data,
        cft009: cft009Data,
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

/**
 * Genera bootcampsData automáticamente desde bootcampDataMap
 * Reemplaza el antiguo archivo bootcampData.js
 */
export function generateBootcampsData() {
    const platforms = {};

    for (const [platformKey, courses] of Object.entries(bootcampDataMap)) {
        const metadata = platformMetadata[platformKey];

        if (!metadata) {
            console.warn(`Missing metadata for platform: ${platformKey}`);
            continue;
        }

        platforms[platformKey] = {
            name: metadata.name,
            description: metadata.description,
            image: metadata.image,
            courses: Object.entries(courses).map(([courseId, courseData]) => ({
                code: courseData.code || courseId.toUpperCase(),
                title: courseData.title,
                titleUrl: `/bootcamp/${courseId}`,
                certificateUrl: courseData.certificateUrl || ""
            }))
        };
    }

    return platforms;
}

/**
 * Export para compatibilidad con código existente
 * Genera bootcampsData dinámicamente
 */
export const bootcampsData = generateBootcampsData();
