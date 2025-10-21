'use client'

import React from 'react';
import CourseDetails from '@/components/features/inacap/CourseDetails';
import courseData from '@/data/inacap/tihv43';

export default function Tihv43Page() {
  return <CourseDetails {...courseData} />;
}