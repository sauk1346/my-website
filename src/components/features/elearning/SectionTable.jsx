'use client';

import { motion } from 'framer-motion';
import { SmartLink } from '@/components/mdx';
import { buildLessonLink } from '@/utils/linkBuilder';
import styles from './SectionTable.module.css';
import { staggerContainer, viewportConfig } from '@/utils/animations';

// Variantes para el título
const titleVariants = {
  initial: { opacity: 0, y: -10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Variantes para cada módulo
const moduleVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Variantes para las filas
const rowVariants = {
  initial: { opacity: 0, x: -10 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const SectionTable = ({
  courseData, // Support passing the full course object
  courseId,
  courseName = null,
  sections = [],
  basePath = '',
  showDescription = true,
  className = ''
}) => {
  // If courseData is provided, extract values from it
  if (courseData) {
    courseId = courseId || courseData.code || courseData.title; // Fallback
    courseName = courseName || courseData.title;

    // If data has modules, we need to render multiple tables
    if (courseData.modules) {
      return (
        <div className={styles.pageContainer}>
          <div className={styles.container}>
            <motion.h1
              className={`${styles.title} ${className}`}
              variants={titleVariants}
              initial="initial"
              animate="animate"
            >
              {courseName}
            </motion.h1>

            <motion.div
              className={styles.grid}
              initial="initial"
              whileInView="animate"
              viewport={viewportConfig}
              variants={staggerContainer(0.15, 0.2)}
            >
              {courseData.modules.map((module, index) => (
                <motion.div key={index} className={styles.tableContainer} variants={moduleVariants}>
                  <h2 className={styles.platformTitle}>
                    {module.name}
                  </h2>

                  <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Clase</th>
                          {showDescription && module.classes.some(c => c.description) && (
                            <th>Descripción</th>
                          )}
                        </tr>
                      </thead>
                      <motion.tbody
                        initial="initial"
                        animate="animate"
                        variants={staggerContainer(0.03)}
                      >
                        {module.classes.map((classItem, idx) => (
                          <motion.tr
                            key={idx}
                            className={styles.tableRow}
                            variants={rowVariants}
                            whileHover={{
                              backgroundColor: 'rgba(59, 130, 246, 0.05)',
                              transition: { duration: 0.05 },
                            }}
                          >
                            <td data-label="#">
                              <span className={styles.sectionNumber}>
                                {classItem.classNumber}
                              </span>
                            </td>
                            <td data-label="Clase">
                              {classItem.link ? (
                                <SmartLink
                                  href={buildLessonLink('elearning', courseId, classItem.link)}
                                >
                                  {classItem.name}
                                </SmartLink>
                              ) : (
                                <span className={styles.sectionTitle}>
                                  {classItem.name}
                                </span>
                              )}
                            </td>
                            {showDescription && module.classes.some(c => c.description) && (
                              <td data-label="Descripción">
                                <span className={styles.sectionDescription}>
                                  {classItem.description || '-'}
                                </span>
                              </td>
                            )}
                          </motion.tr>
                        ))}
                      </motion.tbody>
                    </table>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      );
    }

    // Fallback for flat structure if needed (though data seems to use modules)
    sections = sections.length > 0 ? sections : (courseData.sections || []);
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <motion.h1
          className={`${styles.title} ${className}`}
          variants={titleVariants}
          initial="initial"
          animate="animate"
        >
          {courseId}
          {courseName && <span className={styles.courseName}>{courseName}</span>}
        </motion.h1>

        <motion.div
          className={styles.grid}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className={styles.tableContainer}>
            <h2 className={styles.platformTitle}>Secciones</h2>

            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Descripción</th>
                    {showDescription && sections.some(s => s.description) && (
                      <th>Detalles</th>
                    )}
                  </tr>
                </thead>
                <motion.tbody
                  initial="initial"
                  animate="animate"
                  variants={staggerContainer(0.03)}
                >
                  {sections.map((section) => (
                    <motion.tr
                      key={section.id}
                      className={styles.tableRow}
                      variants={rowVariants}
                      whileHover={{
                        backgroundColor: 'rgba(59, 130, 246, 0.05)',
                        transition: { duration: 0.05 },
                      }}
                    >
                      <td data-label="#">
                        <span className={styles.sectionNumber}>
                          {section.id}
                        </span>
                      </td>
                      <td data-label="Descripción">
                        {section.link ? (
                          <SmartLink
                            href={basePath ? `${basePath}/${section.link}` : section.link}
                          >
                            {section.title}
                          </SmartLink>
                        ) : (
                          <span className={styles.sectionTitle}>
                            {section.title}
                          </span>
                        )}
                      </td>
                      {showDescription && sections.some(s => s.description) && (
                        <td data-label="Detalles">
                          <span className={styles.sectionDescription}>
                            {section.description || '-'}
                          </span>
                        </td>
                      )}
                    </motion.tr>
                  ))}
                </motion.tbody>
              </table>
            </div>

            {sections.length === 0 && (
              <div className={styles.noSections}>
                <p>No hay secciones disponibles para este curso.</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionTable;