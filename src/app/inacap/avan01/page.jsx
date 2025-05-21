'use client'

import React from 'react';
import CourseDetails from '@/components/education/CourseDetails';
import courseData from '@/data/inacap/avan01';

export default function Avan01Page() {
  return <CourseDetails {...courseData} />;
}