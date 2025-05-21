'use client'

import { useState, useMemo, useEffect } from 'react';
import CustomLink from '@/components/ui/CustomLink';
import styles from '@/styles/hackerrank.module.css';
import { getCategoryByCode } from '@/data/hackerrank/categories';

const HackerRankCategory = ({ categoryCode, problems, categories, difficulties, getStats }) => {
  // Verificación de props
  if (!problems || !categories || !difficulties || !getStats) {
    console.error("HackerRankCategory: Missing required props", { 
      hasProblems: !!problems, 
      hasCategories: !!categories, 
      hasDifficulties: !!difficulties,
      hasGetStats: !!getStats
    });
    return <div className={styles.container}>Error: Missing data for this category</div>;
  }

  // Obtener información de la categoría actual
  const categoryInfo = getCategoryByCode(categoryCode);
  
  if (!categoryInfo) {
    console.error(`Category not found: ${categoryCode}`);
    return <div className={styles.container}>Categoría no encontrada: {categoryCode}</div>;
  }
  
  // Estado para filtros
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('');
  
  // Estado para ordenación
  const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'asc' });
  
  // Estado para paginación
  const [currentPage, setCurrentPage] = useState(1);
  const problemsPerPage = 10;
  
  // Obtener estadísticas
  const stats = getStats();
  
  // Filtrar y ordenar problemas
  const filteredAndSortedProblems = useMemo(() => {
    // Filtrar primero
    let filtered = problems.filter(problem => {
      // Filtro de búsqueda
      const matchesSearch = 
        problem.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        problem.id.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Filtro de categoría
      const matchesCategory = 
        categoryFilter === '' || problem.category === categoryFilter;
      
      // Filtro de dificultad
      const matchesDifficulty = 
        difficultyFilter === '' || problem.difficulty === difficultyFilter;
      
      return matchesSearch && matchesCategory && matchesDifficulty;
    });
    
    // Ordenar después
    return filtered.sort((a, b) => {
      if (sortConfig.key === 'id') {
        // Ordenar por ID numéricamente
        const idA = parseInt(a.id.replace(/\D/g, ''));
        const idB = parseInt(b.id.replace(/\D/g, ''));
        return sortConfig.direction === 'asc' ? idA - idB : idB - idA;
      } else {
        // Ordenar por otros campos alfabéticamente
        const valueA = a[sortConfig.key].toString().toLowerCase();
        const valueB = b[sortConfig.key].toString().toLowerCase();
        return sortConfig.direction === 'asc' 
          ? valueA.localeCompare(valueB) 
          : valueB.localeCompare(valueA);
      }
    });
  }, [problems, searchTerm, categoryFilter, difficultyFilter, sortConfig]);
  
  // Calcular paginación
  const totalProblems = filteredAndSortedProblems.length;
  const totalPages = Math.max(1, Math.ceil(totalProblems / problemsPerPage));
  
  // Asegurarnos de que la página actual es válida
  useEffect(() => {
    const validCurrentPage = Math.max(1, Math.min(currentPage, totalPages));
    if (currentPage !== validCurrentPage) {
      setCurrentPage(validCurrentPage);
    }
  }, [currentPage, totalPages]);
  
  // Obtener solo los problemas para la página actual
  const startIndex = (currentPage - 1) * problemsPerPage;
  const paginatedProblems = filteredAndSortedProblems.slice(
    startIndex,
    startIndex + problemsPerPage
  );
  
  // Función para cambiar ordenación
  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
    setCurrentPage(1); // Resetear a primera página al ordenar
  };
  
  // Componente para encabezado ordenable
  const SortableHeader = ({ column, label }) => {
    const isSorted = sortConfig.key === column;
    const sortDirection = isSorted ? sortConfig.direction : null;
    
    return (
      <th 
        className={`${styles.sortableHeader} ${isSorted ? styles.sorted : ''}`}
        onClick={() => requestSort(column)}
      >
        {label}
        {isSorted && (
          <span className={styles.sortIndicator}>
            {sortDirection === 'asc' ? ' ▲' : ' ▼'}
          </span>
        )}
      </th>
    );
  };
  
  // Estilo para dificultad
  const getDifficultyClass = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return styles.easy;
      case 'medium': return styles.medium;
      case 'hard': return styles.hard;
      default: return '';
    }
  };
  
  // Componente de paginación
  const Pagination = () => {
    if (totalPages <= 1) return null;
    
    // Mostrar máximo 5 páginas centradas alrededor de la actual
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    // Ajustar startPage si endPage está al máximo
    if (endPage === totalPages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    
    return (
      <div className={styles.paginationControls}>
        <button
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
          className={styles.paginationButton}
        >
          «
        </button>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={styles.paginationButton}
        >
          ‹
        </button>
        
        {pageNumbers.map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`${styles.paginationButton} ${page === currentPage ? styles.currentPage : ''}`}
          >
            {page}
          </button>
        ))}
        
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={styles.paginationButton}
        >
          ›
        </button>
        <button
          onClick={() => setCurrentPage(totalPages)}
          disabled={currentPage === totalPages}
          className={styles.paginationButton}
        >
          »
        </button>
      </div>
    );
  };
  
  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <span className={styles.code}>[{categoryInfo.code}]</span> {categoryInfo.title}
        </h1>
        
        {/* Estadísticas */}
        <div className={styles.statsContainer}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{stats.total}</span>
            <span className={styles.statLabel}>Problems</span>
          </div>
          
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{stats.easy}</span>
            <span className={styles.statLabel}>Easy</span>
          </div>
          
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{stats.medium}</span>
            <span className={styles.statLabel}>Medium</span>
          </div>
          
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{stats.hard || 0}</span>
            <span className={styles.statLabel}>Hard</span>
          </div>
          
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{stats.categories}</span>
            <span className={styles.statLabel}>Categories</span>
          </div>
        </div>
        
        {/* Filtros */}
        <div className={styles.filterContainer}>
          <input
            type="text"
            placeholder="Search problems..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Resetear paginación
            }}
            className={styles.searchInput}
          />
          
          <select 
            value={categoryFilter}
            onChange={(e) => {
              setCategoryFilter(e.target.value);
              setCurrentPage(1);
            }}
            className={styles.filterSelect}
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          
          <select 
            value={difficultyFilter}
            onChange={(e) => {
              setDifficultyFilter(e.target.value);
              setCurrentPage(1);
            }}
            className={styles.filterSelect}
          >
            <option value="">All Difficulties</option>
            {difficulties.map(difficulty => (
              <option key={difficulty} value={difficulty}>{difficulty}</option>
            ))}
          </select>
          
          {(searchTerm || categoryFilter || difficultyFilter) && (
            <button 
              onClick={() => {
                setSearchTerm('');
                setCategoryFilter('');
                setDifficultyFilter('');
                setCurrentPage(1);
              }}
              className={styles.resetButton}
            >
              Reset Filters
            </button>
          )}
        </div>
        
        {/* Título de sección */}
        <h2 className={styles.platformTitle}>{categoryInfo.title} Problems</h2>
        
        {/* Tabla de problemas */}
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <SortableHeader column="id" label="Code" />
                <SortableHeader column="title" label="Title" />
                <SortableHeader column="category" label="Category" />
                <SortableHeader column="difficulty" label="Difficulty" />
              </tr>
            </thead>
            <tbody>
              {paginatedProblems.length === 0 ? (
                <tr>
                  <td colSpan="4" style={{ textAlign: 'center', padding: '2rem' }}>
                    No problems match your search criteria.
                  </td>
                </tr>
              ) : (
                paginatedProblems.map((problem) => (
                  <tr key={problem.id}>
                    <td className={styles.code}>{problem.id}</td>
                    <td>
                      {problem.slug ? (
                        <CustomLink href={`/hackerrank/${categoryCode.toLowerCase()}/${problem.slug}`}>
                          {problem.title}
                        </CustomLink>
                      ) : (
                        problem.title
                      )}
                    </td>
                    <td>{problem.category}</td>
                    <td className={getDifficultyClass(problem.difficulty)}>
                      {problem.difficulty}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        
        {/* Información de paginación */}
        <div className={styles.tableInfo}>
          Showing {totalProblems > 0 ? startIndex + 1 : 0}-
          {Math.min(startIndex + problemsPerPage, totalProblems)} of {totalProblems} problems
        </div>
        
        {/* Controles de paginación */}
        <Pagination />
        
      </div>
    </div>
  );
};

export default HackerRankCategory;