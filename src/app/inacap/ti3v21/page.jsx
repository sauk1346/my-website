'use client'

import React from 'react';
import CourseDetails from '@/components/features/inacap/CourseDetails';
import courseData from '@/data/inacap/ti3v21';

export default function Ti3v21Page() {
  return <CourseDetails {...courseData} />;
}