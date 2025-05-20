'use client'

import React from 'react';
import CourseDetails from '@/components/CourseDetails';
import courseData from '@/data/inacap/ti3v11';

export default function Ti3v11Page() {
  return <CourseDetails {...courseData} />;
}