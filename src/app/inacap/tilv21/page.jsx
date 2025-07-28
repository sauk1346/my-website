'use client'

import React from 'react';
import CourseDetails from '@/components/features/inacap/CourseDetails';
import courseData from '@/data/inacap/tilv21';

export default function Tilv21Page() {
  return <CourseDetails {...courseData} />;
}