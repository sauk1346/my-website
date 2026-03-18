'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { SmartLink } from '@/components/mdx';
import { buildLessonLink } from '@/utils/linkBuilder';
import { usePagination } from '@/hooks/usePagination';
import PaginationControls from '@/components/common/table/PaginationControls';
import styles from './ProjectTable.module.css';
import { staggerContainer, viewportConfig } from '@/utils/animations';

const ITEMS_PER_PAGE = 10;

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

const ProjectTable = ({ projects, courseId }) => {
  // Manejar tanto la estructura antigua (array directo) como la nueva (objeto con data)
  const projectsData = useMemo(() =>
    Array.isArray(projects) ? projects : projects.data,
    [projects]
  );
  const sectionTitle = Array.isArray(projects) ? "Proyectos" : projects.title;

  const pagination = usePagination({
    data: projectsData,
    itemsPerPage: ITEMS_PER_PAGE,
    resetTriggers: [sectionTitle]
  });

  // Función para detectar el tipo de enlace y retornar el texto apropiado
  const getDeliveryLinkText = (url) => {
    if (!url) return null;

    if (url.includes('github.com')) {
      return 'GitHub';
    } else if (url.includes('colab.research.google.com')) {
      return 'Colab';
    } else if (url.includes('drive.google.com')) {
      return 'Drive';
    } else if (url.includes('docs.google.com')) {
      return 'Docs';
    } else {
      return 'Ver';
    }
  };

  // Calcular el índice base para la numeración correcta
  const baseIndex = pagination.startIndex;

  return (
    <motion.div
      className={styles.tableSection}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportConfig}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.numberColumn}></th>
              <th className={styles.projectColumn}>Proyecto</th>
              <th className={styles.demoColumn}>Demo</th>
              <th className={styles.deliveryColumn}>Entrega</th>
              <th className={styles.badgeColumn}>Insignia</th>
            </tr>
          </thead>
          <motion.tbody
            key={`tbody-${sectionTitle}-${pagination.currentPage}`}
            initial="initial"
            animate="animate"
            variants={staggerContainer(0.03)}
          >
            {pagination.paginatedData.map((project, index) => (
              <motion.tr
                key={`${project.title}-${index}`}
                className={styles.tableRow}
                variants={rowVariants}
                whileHover={{
                  backgroundColor: 'rgba(59, 130, 246, 0.05)',
                  transition: { duration: 0.05 },
                }}
              >
                <td className={styles.numberCell}>
                  {String(baseIndex + index + 1).padStart(2, '0')}
                </td>
                <td className={styles.projectCell}>
                  {project.projectLink ? (
                    <SmartLink href={buildLessonLink('bootcamp', courseId, project.projectLink)}>
                      {project.title}
                    </SmartLink>
                  ) : (
                    project.title
                  )}
                </td>
                <td className={styles.demoCell}>
                  {project.demoLink ? (
                    <SmartLink href={buildLessonLink('bootcamp', courseId, project.demoLink)}>
                      Ver
                    </SmartLink>
                  ) : (
                    <span>-</span>
                  )}
                </td>
                <td className={styles.deliveryCell}>
                  {project.deliveryLink ? (
                    <SmartLink href={project.deliveryLink}>
                      {getDeliveryLinkText(project.deliveryLink)}
                    </SmartLink>
                  ) : (
                    <span>-</span>
                  )}
                </td>
                <td className={styles.badgeCell}>
                  {project.badgeLink ? (
                    <a
                      href={project.badgeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.badgeLink}
                    >
                      Insignia
                    </a>
                  ) : (
                    <span>-</span>
                  )}
                </td>
              </motion.tr>
            ))}
          </motion.tbody>
        </table>
      </div>

      <PaginationControls pagination={pagination} />
    </motion.div>
  );
};

export default ProjectTable;