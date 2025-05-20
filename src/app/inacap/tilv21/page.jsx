'use client'

import React from 'react';
import CourseDetails from '@/components/CourseDetails';
import courseData from '@/data/inacap/tilv21';

export default function Tilv21Page() {
  return <CourseDetails {...courseData} />;
}