'use client'

import React from 'react';
import CourseDetails from '@/components/education/CourseDetails';
import courseData from '@/data/inacap/ti3v32';

export default function Ti3v32Page() {
  return <CourseDetails {...courseData} />;
}