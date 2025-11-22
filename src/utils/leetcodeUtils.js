import { problems } from '@/data/leetcode/problems';

/**
 * Obtiene todos los IDs de problemas de LeetCode
 * Extrae los slugs desde el objeto problems
 */
export function getAllProblemSlugs() {
    return Object.keys(problems).map(key => key.toLowerCase());
}

/**
 * Obtiene los datos de un problema específico
 */
export function getProblemData(slug) {
    const upperSlug = slug.toUpperCase();
    return problems[upperSlug];
}

/**
 * Obtiene todos los pares de slug para generateStaticParams
 */
export function getAllLeetCodePaths() {
    const slugs = getAllProblemSlugs();

    return slugs.map(slug => ({
        slug
    }));
}

/**
 * Verifica si un problema existe
 */
export function problemExists(slug) {
    const upperSlug = slug.toUpperCase();
    return upperSlug in problems;
}

/**
 * Obtiene problemas por dificultad
 */
export function getProblemsByDifficulty(difficulty) {
    return Object.entries(problems)
        .filter(([_, data]) => data.difficulty === difficulty)
        .map(([id, data]) => ({ id: id.toLowerCase(), ...data }));
}

/**
 * Obtiene problemas por categoría
 */
export function getProblemsByCategory(category) {
    return Object.entries(problems)
        .filter(([_, data]) => data.categories?.includes(category))
        .map(([id, data]) => ({ id: id.toLowerCase(), ...data }));
}

/**
 * Obtiene problemas por tema
 */
export function getProblemsByTopic(topic) {
    return Object.entries(problems)
        .filter(([_, data]) => data.topics?.includes(topic))
        .map(([id, data]) => ({ id: id.toLowerCase(), ...data }));
}
