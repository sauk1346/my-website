'use client'

import React from 'react';
import CourseDetails from '@/components/CourseDetails';
import courseData from '@/data/inacap/ti3v35';

export default function Ti3v35Page() {
  return <CourseDetails {...courseData} />;
}