import fs from 'fs';
import path from 'path';
import { extractSlugsFromCourseData } from './contentUtils';

const DATA_DIR = path.join(process.cwd(), 'src', 'data', 'inacap');

// Cache a nivel de módulo: los datos no cambian durante un build/proceso
let courseDataMapPromise = null;

/**
 * Descubre y carga todos los cursos desde src/data/inacap/.
 * Un archivo cuenta como curso si su export default tiene courseCode;
 * eso excluye archivos auxiliares como inacapData.js o calendar25.js.
 */
async function loadCourseDataMap() {
    if (!courseDataMapPromise) {
        courseDataMapPromise = (async () => {
            const ids = fs.readdirSync(DATA_DIR)
                .filter((file) => file.endsWith('.js'))
                .map((file) => file.replace(/\.js$/, ''));

            const map = {};
            for (const id of ids) {
                const mod = await import(`@/data/inacap/${id}.js`);
                if (mod.default?.courseCode) {
                    map[id.toLowerCase()] = mod.default;
                }
            }
            return map;
        })();
    }
    return courseDataMapPromise;
}

export async function getCourseData(courseId) {
    const courseDataMap = await loadCourseDataMap();
    return courseDataMap[courseId.toLowerCase()];
}

export async function getAllCourseIds() {
    const courseDataMap = await loadCourseDataMap();
    return Object.keys(courseDataMap);
}

/**
 * Obtiene todos los pares courseId/slug para generateStaticParams
 */
export async function getAllInacapLessonPaths() {
    const courseDataMap = await loadCourseDataMap();
    const allParams = [];

    for (const [courseId, courseData] of Object.entries(courseDataMap)) {
        const slugs = extractSlugsFromCourseData(courseData);

        slugs.forEach(slug => {
            allParams.push({
                courseId,
                slug
            });
        });
    }

    return allParams;
}
