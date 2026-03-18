import React from 'react';
import { notFound } from 'next/navigation';
import { CustomMDXProvider } from '@/components/providers/CustomMDXProvider';
import { FigureProvider } from '@/components/mdx';
import { getAllLeetCodePaths, getProblemData } from '@/utils/leetcodeUtils';

/**
 * Pre-renderiza todas las páginas de problemas en build time
 */
export async function generateStaticParams() {
    return getAllLeetCodePaths();
}

/**
 * Configuración para retornar 404 en rutas no pre-generadas
 */
export const dynamicParams = false;

/**
 * Genera metadata dinámica para SEO
 */
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const problemData = getProblemData(slug);

    return {
        title: `${slug.toUpperCase()} - ${problemData?.title || 'LeetCode Problem'}`,
        description: `LeetCode ${problemData?.difficulty || ''} - ${problemData?.topics?.join(', ') || ''}`,
    };
}

export default async function Page({ params }) {
    const { slug } = await params;

    try {
        // Importación directa sin dynamic() para mejor performance
        const { default: MDXContent } = await import(
            `@/content/leetcode/${slug}.mdx`
        );

        return (
            <CustomMDXProvider>
                <FigureProvider>
                    <MDXContent />
                </FigureProvider>
            </CustomMDXProvider>
        );
    } catch (error) {
        notFound();
    }
}