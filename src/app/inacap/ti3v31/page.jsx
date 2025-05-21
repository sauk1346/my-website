'use client'

import React from 'react';
import CourseDetails from '@/components/education/CourseDetails';
import courseData from '@/data/inacap/ti3v31';

export default function Ti3v31Page() {
  return <CourseDetails {...courseData} />;
}