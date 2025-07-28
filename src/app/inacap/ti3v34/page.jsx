'use client'

import React from 'react';
import CourseDetails from '@/components/features/inacap/CourseDetails';
import courseData from '@/data/inacap/ti3v34';

export default function Ti3v34Page() {
  return <CourseDetails {...courseData} />;
}