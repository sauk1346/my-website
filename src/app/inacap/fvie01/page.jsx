'use client'

import React from 'react';
import CourseDetails from '@/components/CourseDetails';
import courseData from '@/data/inacap/fvie01';

export default function Fvie01Page() {
  return <CourseDetails {...courseData} />;
}