/**
 * Link Builder - Utilidades centralizadas para construir rutas
 *
 * Este módulo proporciona funciones helper para construir rutas de manera consistente
 * en toda la aplicación, evitando duplicación y errores de tipeo.
 */

/**
 * Construye un link a una lección de idiomas
 *
 * @param {string} language - Idioma (chino, japones, ruso, etc.)
 * @param {string} href - Ruta relativa (courseId/slug)
 * @returns {string} Ruta completa
 *
 * @example
 * buildLanguageLessonLink('chino', 'ch001/lesson11')
 * // Returns: '/chino/ch001/lesson11'
 */
export const buildLanguageLessonLink = (language, href) => {
  if (!language || !href) {
    console.warn('buildLanguageLessonLink: Missing required parameters', { language, href });
    return '#';
  }
  // Remover slash inicial si existe para evitar duplicación
  const cleanHref = href.startsWith('/') ? href.slice(1) : href;
  return `/${language}/${cleanHref}`;
};

/**
 * Construye un link a un recurso estático dentro de un curso (PDFs, documentos, etc.)
 *
 * @param {string} section - Sección del sitio
 * @param {string} courseId - ID del curso
 * @param {string} resourcePath - Ruta del recurso (ej: 'docs/archivo.pdf')
 * @returns {string} Ruta completa
 *
 * @example
 * buildCourseResourceLink('inacap', 'tihv43', 'docs/ResumenEjecutivo.pdf')
 * // Returns: '/inacap/tihv43/docs/ResumenEjecutivo.pdf'
 */
export const buildCourseResourceLink = (section, courseId, resourcePath) => {
  if (!section || !courseId || !resourcePath) {
    console.warn('buildCourseResourceLink: Missing required parameters', { section, courseId, resourcePath });
    return '#';
  }
  // Remover slash inicial del resourcePath si existe
  const cleanPath = resourcePath.startsWith('/') ? resourcePath.slice(1) : resourcePath;
  return `/${section}/${courseId}/${cleanPath}`;
};
