'use client';

import { motion } from 'framer-motion';
import styles from './CftTable.module.css';
import { SmartLink } from '@/components/mdx';
import { buildLessonLink } from '@/utils/linkBuilder';
import { usePagination } from '@/hooks/usePagination';
import PaginationControls from '@/components/common/table/PaginationControls';
import { staggerContainer, viewportConfig } from '@/utils/animations';

const ITEMS_PER_PAGE = 10;

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

// Variantes para las filas de la tabla
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

// Componente separado para cada módulo (permite usar hooks)
const ModuleSection = ({ module, courseId }) => {
  const pagination = usePagination({
    data: module.classes,
    itemsPerPage: ITEMS_PER_PAGE,
    resetTriggers: [courseId, module.name] // Resetear cuando cambia el curso o módulo
  });

  return (
    <motion.div variants={moduleVariants}>
      <h2 className={styles.platformTitle}>
        {module.name}
      </h2>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Clase</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <motion.tbody
          key={`tbody-${pagination.currentPage}`}
          initial="initial"
          animate="animate"
          variants={staggerContainer(0.03)}
        >
          {pagination.paginatedData.map((classItem, classIndex) => (
            <motion.tr
              key={`${classItem.classNumber}-${classIndex}`}
              className={styles.tableRow}
              variants={rowVariants}
              whileHover={{
                backgroundColor: 'rgba(59, 130, 246, 0.05)',
                transition: { duration: 0.05 },
              }}
            >
              <td className={styles.lessonNumber}>
                {classItem.classNumber}
              </td>
              <td>
                {classItem.link ? (
                  <SmartLink
                    href={buildLessonLink('bootcamp', courseId, classItem.link)}
                  >
                    {classItem.name}
                  </SmartLink>
                ) : (
                  <span>{classItem.name}</span>
                )}

                {classItem.exercises && (
                  <>
                    {' - '}
                    <SmartLink
                      href={buildLessonLink('bootcamp', courseId, classItem.exercises.link)}
                    >
                      {classItem.exercises.name}
                    </SmartLink>
                  </>
                )}
              </td>
            </motion.tr>
          ))}
        </motion.tbody>
      </table>

      <PaginationControls pagination={pagination} />
    </motion.div>
  );
};

const CftTable = ({ courseData, courseId }) => {
  if (!courseData) {
    return (
      <div className={styles.pageContainer}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            No hay datos del curso disponibles
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <motion.h1
          className={styles.title}
          variants={titleVariants}
          initial="initial"
          animate="animate"
        >
          {courseData.title}
        </motion.h1>

        <motion.div
          className={styles.grid}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          variants={staggerContainer(0.15, 0.2)}
        >
          {courseData.modules.map((module, moduleIndex) => (
            <ModuleSection
              key={`${courseId}-${module.name}-${moduleIndex}`}
              module={module}
              courseId={courseId}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CftTable;
