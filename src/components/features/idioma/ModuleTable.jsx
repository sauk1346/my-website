'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { buildLanguageLessonLink } from '@/utils/linkBuilder';
import styles from './ModuleTable.module.css';
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

const ModuleTable = ({ data, language }) => {
  const { title, modules } = data;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <motion.h1
          className={styles.title}
          variants={titleVariants}
          initial="initial"
          animate="animate"
        >
          {title}
        </motion.h1>
        <motion.div
          className={styles.grid}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          variants={staggerContainer(0.15, 0.2)}
        >
          {modules.map((module, moduleIndex) => (
            <motion.div key={moduleIndex} variants={moduleVariants}>
              <h2 className={styles.platformTitle}>{module.title}</h2>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Clase</th>
                    <th>Descripción</th>
                  </tr>
                </thead>
                <motion.tbody
                  initial="initial"
                  animate="animate"
                  variants={staggerContainer(0.03)}
                >
                  {module.lessons.map((lesson, lessonIndex) => (
                    <motion.tr
                      key={lessonIndex}
                      className={styles.tableRow}
                      variants={rowVariants}
                      whileHover={{
                        backgroundColor: 'rgba(59, 130, 246, 0.05)',
                        transition: { duration: 0.05 },
                      }}
                    >
                      <td className={styles.lessonNumber}>{lesson.lesson}</td>
                      <td>
                        {lesson.href ? (
                          <Link
                            href={buildLanguageLessonLink(language, lesson.href)}
                            className={styles.courseLink}
                          >
                            {lesson.description}
                          </Link>
                        ) : (
                          lesson.description
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </motion.tbody>
              </table>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ModuleTable;