'use client'

import React from 'react';
import CourseDetails from '@/components/features/inacap/CourseDetails';
import courseData from '@/data/inacap/fves01';

export default function Fves01Page() {
  return <CourseDetails {...courseData} />;
}