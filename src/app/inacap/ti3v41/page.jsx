'use client'

import React from 'react';
import CourseDetails from '@/components/features/inacap/CourseDetails';
import courseData from '@/data/inacap/ti3v41';

export default function Ti3v41Page() {
  return <CourseDetails {...courseData} />;
}