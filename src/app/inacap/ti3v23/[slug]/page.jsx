import React from 'react';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';

export default async function Page({ params }) {
  // Usar async/await para obtener los parámetros
  const { slug } = await params;
  
  // Dynamically import the component based on the slug
  const Component = dynamic(
    () => import(`./${slug}.mdx`).catch(() => {
      // If import fails, return a component that triggers notFound
      notFound();
      return null;
    }),
    {
      loading: () => <p>Loading...</p>,
    }
  );

  return <Component />;
}