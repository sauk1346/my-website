import { udm001Data } from '@/data/elearning/udemy/udm001';
import { udm002Data } from '@/data/elearning/udemy/udm002';
import { udm003Data } from '@/data/elearning/udemy/udm003';
import { dvt001Data } from '@/data/elearning/devtalles/dvt001';
import { dvt010Data } from '@/data/elearning/devtalles/dvt010';
import { cft002Data } from '@/data/elearning/codfacilito/cft002';
import { ptz001Data } from '@/data/elearning/platzi/ptz001';
import { cor001Data } from '@/data/elearning/coursera/cor001';

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

            // Para classes dentro de modules (estructura CftTable)
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

            // Para secciones de elearning
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
    extractFromArray(courseData.modules); // Para CftTable
    extractFromArray(courseData.units); // Para algunas estructuras

    return Array.from(slugs).filter(Boolean);
}

// Metadata de las plataformas
const platformMetadata = {
    udemy: {
        name: "Udemy",
        description: "Apuntes",
        image: "/logos/udemy.png"
    },
    devtalles: {
        name: "DevTalles",
        description: "Apuntes",
        image: "/logos/devtalles.png"
    },
    codfacilito: {
        name: "CódigoFacilito",
        description: "Apuntes",
        image: "/logos/codigofacilito.png"
    },
    platzi: {
        name: "Platzi",
        description: "Apuntes",
        image: "/logos/platzi.png"
    },
    coursera: {
        name: "Coursera",
        description: "Apuntes",
        image: "/logos/coursera.png"
    }
};

const elearningDataMap = {
    udemy: {
        udm001: udm001Data,
        udm002: udm002Data,
        udm003: udm003Data,
    },
    devtalles: {
        dvt001: dvt001Data,
        dvt010: dvt010Data,
    },
    codfacilito: {
        cft002: cft002Data,
    },
    platzi: {
        ptz001: ptz001Data,
    },
    coursera: {
        cor001: cor001Data,
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
 * Obtiene la plataforma dado un courseId
 */
export function getPlatformByCourseId(courseId) {
    for (const [platform, courses] of Object.entries(elearningDataMap)) {
        if (courses[courseId]) {
            return platform;
        }
    }
    return null;
}

/**
 * Obtiene todos los pares courseId/slug para generateStaticParams
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
export function getAllElearningCoursePaths() {
    const platforms = getAllElearningPlatforms();
    const allParams = [];

    for (const platform of platforms) {
        const courseIds = getElearningCourseIds(platform);

        courseIds.forEach(courseId => {
            allParams.push({
                courseId
            });
        });
    }

    return allParams;
}

/**
 * Genera platformsData automáticamente desde elearningDataMap
 * Reemplaza el antiguo archivo elearningData.js
 */
export function generatePlatformsData() {
    const platforms = {};

    for (const [platformKey, courses] of Object.entries(elearningDataMap)) {
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
                titleUrl: `elearning/${courseId}`,
                certificateUrl: courseData.certificateUrl || null
            }))
        };
    }

    return platforms;
}

/**
 * Export para compatibilidad con código existente
 * Genera platformsData dinámicamente
 */
export const platformsData = generatePlatformsData();
