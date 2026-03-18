/**
 * Link Builder - Utilidades centralizadas para construir rutas
 *
 * Este módulo proporciona funciones helper para construir rutas de manera consistente
 * en toda la aplicación, evitando duplicación y errores de tipeo.
 */

/**
 * Construye un link a una lección/clase de un curso
 *
 * @param {string} section - Sección del sitio (elearning, bootcamp, etc.)
 * @param {string} courseId - ID del curso
 * @param {string} slug - Slug de la lección
 * @returns {string} Ruta completa
 *
 * @example
 * buildLessonLink('elearning', 'cft002', 'clase01')
 * // Returns: '/elearning/cft002/clase01'
 *
 * buildLessonLink('bootcamp', 'udd001', 'proj01')
 * // Returns: '/bootcamp/udd001/proj01'
 */
export const buildLessonLink = (section, courseId, slug) => {
  if (!section || !courseId || !slug) {
    console.warn('buildLessonLink: Missing required parameters', { section, courseId, slug });
    return '#';
  }
  return `/${section}/${courseId}/${slug}`;
};

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
 * Construye un link a un curso
 *
 * @param {string} section - Sección del sitio (elearning, bootcamp, inacap, etc.)
 * @param {string} courseId - ID del curso
 * @returns {string} Ruta completa
 *
 * @example
 * buildCourseLink('elearning', 'cft002')
 * // Returns: '/elearning/cft002'
 */
export const buildCourseLink = (section, courseId) => {
  if (!section || !courseId) {
    console.warn('buildCourseLink: Missing required parameters', { section, courseId });
    return '#';
  }
  return `/${section}/${courseId}`;
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
