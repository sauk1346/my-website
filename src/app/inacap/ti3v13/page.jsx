'use client'

import React from 'react';
import CourseDetails from '@/components/education/CourseDetails';
import courseData from '@/data/inacap/ti3v13';

export default function Ti3v13Page() {
  return <CourseDetails {...courseData} />;
}