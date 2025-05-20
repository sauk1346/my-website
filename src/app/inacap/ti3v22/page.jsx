'use client'

import React from 'react';
import CourseDetails from '@/components/CourseDetails';
import courseData from '@/data/inacap/ti3v22';

export default function Ti3v22Page() {
  return <CourseDetails {...courseData} />;
}