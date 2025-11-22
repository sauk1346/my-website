import { extractSlugsFromCourseData } from './contentUtils';
import avan01 from '@/data/inacap/avan01';
import fves01 from '@/data/inacap/fves01';
import fvie01 from '@/data/inacap/fvie01';
import mvfm01 from '@/data/inacap/mvfm01';
import ti3v11 from '@/data/inacap/ti3v11';
import ti3v13 from '@/data/inacap/ti3v13';
import ti3v21 from '@/data/inacap/ti3v21';
import ti3v22 from '@/data/inacap/ti3v22';
import ti3v23 from '@/data/inacap/ti3v23';
import ti3v25 from '@/data/inacap/ti3v25';
import ti3v31 from '@/data/inacap/ti3v31';
import ti3v32 from '@/data/inacap/ti3v32';
import ti3v34 from '@/data/inacap/ti3v34';
import ti3v35 from '@/data/inacap/ti3v35';
import ti3v41 from '@/data/inacap/ti3v41';
import ti3v42 from '@/data/inacap/ti3v42';
import ti3v43 from '@/data/inacap/ti3v43';
import tihv43 from '@/data/inacap/tihv43';
import tilv21 from '@/data/inacap/tilv21';
import tilv22 from '@/data/inacap/tilv22';

const courseDataMap = {
    avan01,
    fves01,
    fvie01,
    mvfm01,
    ti3v11,
    ti3v13,
    ti3v21,
    ti3v22,
    ti3v23,
    ti3v25,
    ti3v31,
    ti3v32,
    ti3v34,
    ti3v35,
    ti3v41,
    ti3v42,
    ti3v43,
    tihv43,
    tilv21,
    tilv22,
};

export function getCourseData(courseId) {
    return courseDataMap[courseId.toLowerCase()];
}

export function getAllCourseIds() {
    return Object.keys(courseDataMap);
}

/**
 * Obtiene todos los pares courseId/slug para generateStaticParams
 */
export function getAllInacapLessonPaths() {
    const courseIds = getAllCourseIds();
    const allParams = [];

    for (const courseId of courseIds) {
        const courseData = getCourseData(courseId);
        if (!courseData) continue;

        const slugs = extractSlugsFromCourseData(courseData);

        slugs.forEach(slug => {
            allParams.push({
                courseId: courseId.toLowerCase(),
                slug
            });
        });
    }

    return allParams;
}
