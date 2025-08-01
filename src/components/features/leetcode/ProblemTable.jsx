import { useMemo } from 'react';
import { usePagination } from '@/hooks/usePagination';
import { useTableSort } from '@/hooks/useTableSort';
import CustomLink from '@/components/ui/CustomLink';
import PaginationControls from '@/components/common/table/PaginationControls';
import SortableHeader from '@/components/common/table/SortableHeader';
import styles from './ProblemTable.module.css';

const ProblemTable = ({
  title,
  data,
  categoryId = null,
  showAllProblems = false,
  problemsPerPage = 10,
  platform = 'leetcode' // Nueva prop con valor por defecto
}) => {
  // Difficulty mapping
  const difficultyMap = {
    'Easy': 'Fácil',
    'Medium': 'Medio',
    'Hard': 'Difícil'
  };

  const getDifficultyLabel = (difficulty) => {
    return difficultyMap[difficulty] || difficulty;
  };

  const getDifficultyClass = (difficulty) => {
    if (!difficulty) return '';
    const lowerDifficulty = difficulty.toLowerCase();
    return styles[lowerDifficulty] || '';
  };

  // Filter data by category if needed
  const categoryFilteredData = useMemo(() => {
    if (showAllProblems || !categoryId) {
      return data;
    }
    return data.filter(([id, problem]) => {
      return problem.categories?.includes(categoryId);
    });
  }, [data, categoryId, showAllProblems]);

  // Use sorting hook
  const { sortConfig, sortedData, requestSort } = useTableSort(categoryFilteredData);

  // Use pagination hook
  const pagination = usePagination({
    data: sortedData,
    itemsPerPage: problemsPerPage,
    resetTriggers: [
      categoryId,
      `${sortConfig.key}-${sortConfig.direction}`,
      data.length
    ]
  });

  if (sortedData.length === 0) {
    return (
      <div className={styles.tableContainer}>
        <h2 className={styles.platformTitle}>{title}</h2>
        <p>No se encontraron problemas con esos filtros.</p>
      </div>
    );
  }

  return (
    <div className={styles.tableContainer}>
      <h2 className={styles.platformTitle}>{title}</h2>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <SortableHeader
                column="id"
                label="Código"
                sortConfig={sortConfig}
                onSort={requestSort}
              />
              <SortableHeader
                column="title"
                label="Descripción"
                sortConfig={sortConfig}
                onSort={requestSort}
              />
              <SortableHeader
                column="topics"
                label="Temas"
                sortConfig={sortConfig}
                onSort={requestSort}
              />
              <SortableHeader
                column="difficulty"
                label="Dificultad"
                sortConfig={sortConfig}
                onSort={requestSort}
              />
            </tr>
          </thead>
          <tbody>
            {pagination.paginatedData.map(([id, problem]) => (
              <tr key={id}>
                <td className={styles.code}>{id}</td>
                <td>
                  <CustomLink href={`${platform}/${id.toLowerCase()}`}>
                    {problem.title}
                  </CustomLink>
                </td>
                <td>{problem.topics?.join(", ") || ''}</td>
                <td className={getDifficultyClass(problem.difficulty)}>
                  {getDifficultyLabel(problem.difficulty) || 'Desconocido'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <PaginationControls pagination={pagination} />
    </div>
  );
};

export default ProblemTable;