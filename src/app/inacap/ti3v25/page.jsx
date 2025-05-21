'use client'

import React from 'react';
import CourseDetails from '@/components/education/CourseDetails';
import courseData from '@/data/inacap/ti3v25';

export default function Ti3v25Page() {
  return <CourseDetails {...courseData} />;
}