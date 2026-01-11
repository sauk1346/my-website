'use client';

import { motion } from 'framer-motion';
import styles from './BootcampTable.module.css';
import { SmartLink } from '@/components/mdx';
import { usePagination } from '@/hooks/usePagination';
import PaginationControls from '@/components/common/table/PaginationControls';
import { staggerContainer } from '@/utils/animations';

const ITEMS_PER_PAGE = 10;

// Variantes para las filas - solo entrada, sin exit
const rowVariants = {
  initial: { opacity: 0, x: -10 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
};

const BootcampTable = ({ courses, platformName }) => {
  const pagination = usePagination({
    data: courses,
    itemsPerPage: ITEMS_PER_PAGE,
    resetTriggers: [platformName]
  });

  return (
    <div className={styles.tableWrapper}>
      <table className={`${styles.table} ${styles.bootcamps}`}>
        <thead>
          <tr>
            <th>Sigla</th>
            <th>Nombre</th>
            <th>Certificado</th>
          </tr>
        </thead>
        <motion.tbody
          key={`tbody-${platformName}-${pagination.currentPage}`}
          initial="initial"
          animate="animate"
          variants={staggerContainer(0.03)}
        >
          {pagination.paginatedData.map((course, index) => (
            <motion.tr
              key={`${course.code}-${index}`}
              variants={rowVariants}
              whileHover={{
                backgroundColor: 'rgba(59, 130, 246, 0.05)',
                transition: { duration: 0.05 },
              }}
            >
              <td data-label="Sigla">
                <span className={styles.code}>{course.code}</span>
              </td>
              <td data-label="Nombre">
                {course.titleUrl ? (
                  <SmartLink href={course.titleUrl}>
                    {course.title}
                  </SmartLink>
                ) : (
                  <span>{course.title}</span>
                )}
              </td>
              <td data-label="Certificado">
                {course.certificateUrl ? (
                  <a
                    href={course.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.certificateLink}
                  >
                    Diploma
                  </a>
                ) : (
                  <span className={styles.noCertificate}>-</span>
                )}
              </td>
            </motion.tr>
          ))}
        </motion.tbody>
      </table>

      <PaginationControls pagination={pagination} />
    </div>
  );
};

export default BootcampTable;
