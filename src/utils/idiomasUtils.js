import { extractSlugsFromCourseData } from './contentUtils';
import { eng001Data } from '@/data/idiomas/ingles/eng001';
import { eng002Data } from '@/data/idiomas/ingles/eng002';
import { ch001Data } from '@/data/idiomas/chino/ch001';

const idiomasDataMap = {
    ingles: {
        en001: eng001Data,
        en002: eng002Data,
    },
    chino: {
        ch001: ch001Data,
    },
    // Idiomas sin contenido aún (preparados para el futuro)
    aleman: {},
    japones: {},
    coreano: {},
    ruso: {},
};

/**
 * Obtiene los datos de un curso de idioma específico
 */
export function getLanguageCourseData(language, courseId) {
    return idiomasDataMap[language]?.[courseId];
}

/**
 * Obtiene todos los IDs de cursos para un idioma
 */
export function getLanguageCourseIds(language) {
    return Object.keys(idiomasDataMap[language] || {});
}

/**
 * Obtiene todos los idiomas disponibles con contenido
 */
export function getAllLanguagesWithContent() {
    return Object.keys(idiomasDataMap).filter(
        lang => Object.keys(idiomasDataMap[lang]).length > 0
    );
}

/**
 * Obtiene todos los idiomas (con y sin contenido)
 */
export function getAllLanguages() {
    return Object.keys(idiomasDataMap);
}

/**
 * Obtiene todos los pares language/courseId/slug para generateStaticParams
 */
export function getAllLanguageLessonPaths() {
    const languages = getAllLanguagesWithContent();
    const allParams = [];

    for (const language of languages) {
        const courseIds = getLanguageCourseIds(language);

        for (const courseId of courseIds) {
            const courseData = getLanguageCourseData(language, courseId);
            if (!courseData) continue;

            const slugs = extractSlugsFromCourseData(courseData);

            slugs.forEach(slug => {
                allParams.push({
                    language,
                    courseId,
                    slug
                });
            });
        }
    }

    return allParams;
}

/**
 * Obtiene todos los pares language/courseId para páginas de curso
 */
export function getAllLanguageCoursePaths() {
    const languages = getAllLanguagesWithContent();
    const allParams = [];

    for (const language of languages) {
        const courseIds = getLanguageCourseIds(language);

        courseIds.forEach(courseId => {
            allParams.push({
                language,
                courseId
            });
        });
    }

    return allParams;
}
