'use client'

import React from 'react';
import CourseDetails from '@/components/features/inacap/CourseDetails';
import courseData from '@/data/inacap/ti3v42';

export default function Ti3v42Page() {
  return <CourseDetails {...courseData} />;
}