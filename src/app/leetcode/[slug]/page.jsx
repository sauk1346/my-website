import React from 'react';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { CustomMDXProvider } from '@/components/providers/CustomMDXProvider';

export default async function Page({ params }) {
  // Usar async/await para obtener los parámetros
  const { slug } = await params;
  
  // Dynamically import the component based on the slug
  const MDXComponent = dynamic(
    () => import(`./${slug}.mdx`).catch(() => {
      notFound();
      return null;
    }),
    {
      loading: () => <p>Loading...</p>,
    }
  );
  
  // Envolver el componente MDX con el proveedor personalizado
  return (
    <CustomMDXProvider>
      <MDXComponent />
    </CustomMDXProvider>
  );
}