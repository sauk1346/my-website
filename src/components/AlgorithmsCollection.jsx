'use client'

import React, { useState, useMemo } from 'react';
import { Search, BookOpen, Code2, TrendingUp, Star, Database, Brain, Zap, GitBranch, Hash, Target, BarChart3, ArrowUpDown, ExternalLink, X } from 'lucide-react';
import styles from '@/styles/algorithms.module.css';

// Hook personalizado para filtros
const useAlgorithmFilters = (algorithms, categories) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('');

  const filteredData = useMemo(() => {
    if (!algorithms || typeof algorithms !== 'object') {
      return [];
    }
    
    return Object.entries(algorithms).filter(([id, algorithm]) => {
      const matchesSearch = !searchTerm || 
        algorithm.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        algorithm.description?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = !categoryFilter || algorithm.category === categoryFilter;
      const matchesDifficulty = !difficultyFilter || algorithm.difficulty === difficultyFilter;

      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [algorithms, searchTerm, categoryFilter, difficultyFilter]);

  const hasActiveFilters = searchTerm || categoryFilter || difficultyFilter;

  const clearFilters = () => {
    setSearchTerm('');
    setCategoryFilter('');
    setDifficultyFilter('');
  };

  return {
    searchTerm,
    setSearchTerm,
    categoryFilter,
    setCategoryFilter,
    difficultyFilter,
    setDifficultyFilter,
    filteredData,
    hasActiveFilters,
    clearFilters
  };
};

// Componente de estadísticas
const AlgorithmStats = ({ algorithms, filteredData, categories }) => {
  const stats = useMemo(() => {
    if (!algorithms || typeof algorithms !== 'object') {
      return {
        generalStats: { total: 0, filtered: 0, easy: 0, medium: 0, hard: 0 },
        categoryStats: {}
      };
    }
    
    const algorithmList = Object.values(algorithms);
    const filteredList = filteredData.map(([id, algorithm]) => algorithm);
    
    const generalStats = {
      total: algorithmList.length,
      filtered: filteredList.length,
      easy: algorithmList.filter(a => a.difficulty === "Fácil").length,
      medium: algorithmList.filter(a => a.difficulty === "Medio").length,
      hard: algorithmList.filter(a => a.difficulty === "Difícil").length
    };

    const categoryStats = {};
    if (categories && typeof categories === 'object') {
      Object.keys(categories).forEach(categoryId => {
        categoryStats[categoryId] = {
          total: algorithmList.filter(a => a.category === categoryId).length,
          filtered: filteredList.filter(a => a.category === categoryId).length
        };
      });
    }

    return { generalStats, categoryStats };
  }, [algorithms, filteredData, categories]);

  const categoryIcons = {
    'sorting': BarChart3,
    'searching': Search,
    'graph': GitBranch,
    'dynamic-programming': Brain,
    'greedy': Target,
    'divide-conquer': Hash
  };

  return (
    <div className={styles.statsContainer}>
      <div className={styles.statsSummary}>
        <div className={styles.statItem}>
          <Code2 size={20} />
          <span className={styles.statNumber}>{stats.generalStats.filtered}</span>
          <span className={styles.statLabel}>de {stats.generalStats.total} algoritmos</span>
        </div>
        <div className={styles.difficultyStats}>
          <span className={`${styles.difficultyItem} ${styles.easy}`}>{stats.generalStats.easy} Fácil</span>
          <span className={`${styles.difficultyItem} ${styles.medium}`}>{stats.generalStats.medium} Medio</span>
          <span className={`${styles.difficultyItem} ${styles.hard}`}>{stats.generalStats.hard} Difícil</span>
        </div>
        <div className={styles.categorySummary}>
          {categories && Object.entries(categories).map(([categoryId, category]) => {
            const IconComponent = categoryIcons[categoryId] || Code2;
            const count = stats.categoryStats[categoryId]?.filtered || 0;
            return count > 0 ? (
              <span 
                key={categoryId} 
                className={styles.categoryTag} 
                style={{ backgroundColor: category.color + '20', color: category.color }}
              >
                <IconComponent size={14} />
                {count}
              </span>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

// Componente de controles de filtro
const FilterControls = ({ 
  searchTerm, 
  setSearchTerm, 
  categoryFilter, 
  setCategoryFilter, 
  difficultyFilter, 
  setDifficultyFilter,
  hasActiveFilters,
  clearFilters,
  categories 
}) => {
  return (
    <div className={styles.filterControls}>
      <div className={styles.searchContainer}>
        <Search className={styles.searchIcon} size={18} />
        <input
          type="text"
          placeholder="Buscar por nombre o descripción..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      <div className={styles.filters}>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className={styles.filterSelect}
        >
          <option value="">Todas las categorías</option>
          {categories && Object.entries(categories).map(([id, category]) => (
            <option key={id} value={id}>{category.title}</option>
          ))}
        </select>

        <select
          value={difficultyFilter}
          onChange={(e) => setDifficultyFilter(e.target.value)}
          className={styles.filterSelect}
        >
          <option value="">Todas las dificultades</option>
          <option value="Fácil">Fácil</option>
          <option value="Medio">Medio</option>
          <option value="Difícil">Difícil</option>
        </select>

        {hasActiveFilters && (
          <button onClick={clearFilters} className={styles.clearFilters}>
            <X size={14} />
            Limpiar
          </button>
        )}
      </div>
    </div>
  );
};

// Componente de tabla de algoritmos
const AlgorithmsTable = ({ data, categories }) => {
  const [sortField, setSortField] = useState('title');
  const [sortDirection, setSortDirection] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;

  const categoryIcons = {
    'sorting': BarChart3,
    'searching': Search,
    'graph': GitBranch,
    'dynamic-programming': Brain,
    'greedy': Target,
    'divide-conquer': Hash
  };

  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => {
      const aVal = a[1][sortField];
      const bVal = b[1][sortField];
      
      if (sortField === 'complexity') {
        const aTime = a[1].complexity.time;
        const bTime = b[1].complexity.time;
        return sortDirection === 'asc' 
          ? aTime.localeCompare(bTime)
          : bTime.localeCompare(aTime);
      }
      
      if (typeof aVal === 'string') {
        return sortDirection === 'asc' 
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }
      
      return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
    });
  }, [data, sortField, sortDirection]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedData.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedData, currentPage]);

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
    setCurrentPage(1);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Fácil': return '#10b981';
      case 'Medio': return '#f59e0b';
      case 'Difícil': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const getCategoryColor = (categoryId) => {
    return categories[categoryId]?.color || '#6b7280';
  };

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableWrapper}>
        <table className={styles.algorithmsTable}>
          <thead>
            <tr>
              <th onClick={() => handleSort('title')} className={styles.sortable}>
                <div className={styles.sortableHeader}>
                  Algoritmo
                  <ArrowUpDown size={14} />
                </div>
              </th>
              <th>Descripción</th>
              <th onClick={() => handleSort('difficulty')} className={styles.sortable}>
                <div className={styles.sortableHeader}>
                  Dificultad
                  <ArrowUpDown size={14} />
                </div>
              </th>
              <th onClick={() => handleSort('category')} className={styles.sortable}>
                <div className={styles.sortableHeader}>
                  Categoría
                  <ArrowUpDown size={14} />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map(([id, algorithm]) => {
              const category = categories[algorithm.category];
              const IconComponent = categoryIcons[algorithm.category] || Code2;
              
              return (
                <tr key={id} className={styles.algorithmRow}>
                  <td className={styles.titleCell}>
                    <div className={styles.titleContent}>
                      <a href={algorithm.slug} className={styles.algorithmLink}>
                        <strong>{algorithm.title}</strong>
                      </a>
                    </div>
                  </td>
                  <td className={styles.descriptionCell}>
                    {algorithm.description}
                  </td>
                  <td className={styles.difficultyCell}>
                    <span 
                      className={styles.difficultyBadge}
                      style={{ backgroundColor: getDifficultyColor(algorithm.difficulty) }}
                    >
                      {algorithm.difficulty}
                    </span>
                  </td>
                  <td className={styles.categoryCell}>
                    <div className={styles.categoryInfo} style={{ color: getCategoryColor(algorithm.category) }}>
                      <IconComponent size={16} />
                      <span>{category?.title || algorithm.category}</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button 
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={styles.pageBtn}
          >
            Anterior
          </button>
          
          <div className={styles.pageInfo}>
            Página {currentPage} de {totalPages} 
            <span className={styles.totalItems}>({sortedData.length} algoritmos)</span>
          </div>
          
          <button 
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className={styles.pageBtn}
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
};

// Componente principal
const AlgorithmsCollection = ({ algorithms, categories }) => {
  const {
    searchTerm,
    setSearchTerm,
    categoryFilter,
    setCategoryFilter,
    difficultyFilter,
    setDifficultyFilter,
    filteredData,
    hasActiveFilters,
    clearFilters
  } = useAlgorithmFilters(algorithms, categories);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            <BookOpen size={24} style={{ display: 'inline', marginRight: '0.75rem' }} />
            Biblioteca de Algoritmos
          </h1>
        </div>
        
        <FilterControls
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          difficultyFilter={difficultyFilter}
          setDifficultyFilter={setDifficultyFilter}
          hasActiveFilters={hasActiveFilters}
          clearFilters={clearFilters}
          categories={categories}
        />

        <AlgorithmStats 
          algorithms={algorithms} 
          filteredData={filteredData}
          categories={categories}
        />

        <AlgorithmsTable 
          data={filteredData} 
          categories={categories}
        />

        {filteredData.length === 0 && (
          <div className={styles.noResults}>
            <Search size={48} />
            <h3>No se encontraron algoritmos</h3>
            <p>Intenta ajustar tus filtros de búsqueda</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AlgorithmsCollection;