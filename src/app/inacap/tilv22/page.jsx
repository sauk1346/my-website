'use client'

import React from 'react';
import CourseDetails from '@/components/features/inacap/CourseDetails';
import courseData from '@/data/inacap/tilv22';

export default function Tilv22Page() {
  return <CourseDetails {...courseData} />;
}