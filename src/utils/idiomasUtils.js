import { eng001Data } from '@/data/idiomas/ingles/eng001';
import { eng002Data } from '@/data/idiomas/ingles/eng002';
import { eng003Data } from '@/data/idiomas/ingles/eng003';
import { ch001Data } from '@/data/idiomas/chino/ch001';

/**
 * Extrae todos los slugs de un objeto de datos de curso
 * Versión sin dependencias de fs para uso tanto en cliente como servidor
 */
function extractSlugsFromCourseData(courseData) {
    const slugs = new Set();

    // Para estructura de idiomas (lessons dentro de modules)
    courseData.modules?.forEach(module => {
        module.lessons?.forEach(lesson => {
            if (lesson.href) {
                const slug = lesson.href.split('/').pop();
                if (slug) slugs.add(slug);
            }
        });
    });

    return Array.from(slugs).filter(Boolean);
}

const idiomasDataMap = {
    ingles: {
        en001: eng001Data,
        en002: eng002Data,
        en003: eng003Data,
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

/**
 * Genera la lista de cursos para un idioma automáticamente
 * desde los datos individuales de cada curso
 */
export function generateLanguageCourses(language) {
    const courses = idiomasDataMap[language];
    if (!courses || Object.keys(courses).length === 0) {
        return [];
    }

    return Object.entries(courses)
        .map(([courseId, courseData]) => ({
            code: courseData.code || courseId.toUpperCase(),
            name: courseData.title,
            href: `${language}/${courseId}`,
            platform: courseData.platform || "",
            professor: courseData.professor || "",
            certificate: courseData.certificate || "",
            certificateHref: courseData.certificateHref || "",
            hasContent: courseData.modules && courseData.modules.length > 0
        }));
}
