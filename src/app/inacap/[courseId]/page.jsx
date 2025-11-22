import React from 'react';
import { notFound } from 'next/navigation';
import CourseDetails from '@/components/features/inacap/CourseDetails';
import { getCourseData, getAllCourseIds } from '@/utils/courseUtils';

export async function generateStaticParams() {
    const courseIds = getAllCourseIds();
    return courseIds.map((courseId) => ({
        courseId: courseId,
    }));
}

export default async function CoursePage({ params }) {
    const { courseId } = await params;
    const courseData = getCourseData(courseId);

    if (!courseData) {
        notFound();
    }

    return <CourseDetails {...courseData} />;
}
