'use client';

import { motion } from 'framer-motion';
import styles from './ModuleTable.module.css';
import { usePagination } from '@/hooks/usePagination';
import PaginationControls from '@/components/common/table/PaginationControls';
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

const ModuleTable = ({ title, sessions }) => {
  const pagination = usePagination({
    data: sessions,
    itemsPerPage: ITEMS_PER_PAGE,
    resetTriggers: [title]
  });

  return (
    <motion.div
      className={styles.tableSection}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportConfig}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.numberColumn}>Clase</th>
              <th className={styles.contentColumn}>Contenido</th>
            </tr>
          </thead>
          <motion.tbody
            key={`tbody-${title}-${pagination.currentPage}`}
            initial="initial"
            animate="animate"
            variants={staggerContainer(0.03)}
          >
            {pagination.paginatedData.map((session, index) => (
              <motion.tr
                key={`${session.number}-${index}`}
                className={styles.tableRow}
                variants={rowVariants}
                whileHover={{
                  backgroundColor: 'rgba(59, 130, 246, 0.05)',
                  transition: { duration: 0.05 },
                }}
              >
                <td className={styles.numberCell}>
                  {String(session.number).padStart(2, '0')}
                </td>
                <td className={styles.contentCell}>{session.content}</td>
              </motion.tr>
            ))}
          </motion.tbody>
        </table>
      </div>

      <PaginationControls pagination={pagination} />
    </motion.div>
  );
};

export default ModuleTable;