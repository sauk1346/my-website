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

// Tópicos de idioma con contenido propio (independiente de los cursos por
// plataforma) — ej. el abecedario de un idioma. Para agregar uno nuevo:
// 1) registrar aquí { language: { slug: { title } } }
// 2) agregar `href: "{language}/temas/{slug}"` y `hasContent: true` al
//    topic correspondiente en src/data/idiomas/{language}/{language}Data.js
// 3) crear el MDX en src/content/idiomas/{language}/temas/{slug}.mdx
const topicsWithContent = {
    aleman: {
        alfabeto: { title: "Alfabeto Alemán" },
    },
    coreano: {
        hangul: { title: "Hangul" },
    },
    ruso: {
        "alfabeto-cirilico": { title: "Alfabeto Cirílico" },
    },
    japones: {
        hiragana: { title: "Hiragana" },
        katakana: { title: "Katakana" },
    },
    chino: {
        pinyin: { title: "Pinyin" },
    },
    ingles: {
        ipa: { title: "IPA" },
    },
};

/**
 * Obtiene todos los pares language/slug de tópicos para generateStaticParams
 */
export function getAllLanguageTopicPaths() {
    const paths = [];
    for (const [language, topics] of Object.entries(topicsWithContent)) {
        for (const slug of Object.keys(topics)) {
            paths.push({ language, slug });
        }
    }
    return paths;
}

/**
 * Metadata (título) de un tópico específico, para generateMetadata
 */
export function getLanguageTopicMeta(language, slug) {
    return topicsWithContent[language]?.[slug] || null;
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
