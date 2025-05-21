'use client'

import React from 'react';
import CourseDetails from '@/components/education/CourseDetails';
import courseData from '@/data/inacap/mvfm01';

export default function Mvfm01Page() {
  return <CourseDetails {...courseData} />;
}