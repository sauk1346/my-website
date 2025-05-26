'use client';

import { useMemo } from 'react';
import styles from '@/styles/hackerrank.module.css';
import FilterControls from '@/components/table/FilterControls';
import ProblemTable from '@/components/table/ProblemTable';
import { useFilters } from '@/hooks/useFilters';
import { problems } from '@/data/hackerrank/problems';
import { categories } from '@/data/hackerrank/categories';

// Componente de estadísticas mejorado para HackerRank
const HackerRankStats = ({ problems, filteredData }) => {
  const stats = useMemo(() => {
    const problemList = Object.values(problems);
    const filteredList = filteredData.map(([id, problem]) => problem);
    
    // Estadísticas generales
    const generalStats = {
      total: problemList.length,
      filtered: filteredList.length,
      easy: problemList.filter(p => p.difficulty === "Easy").length,
      medium: problemList.filter(p => p.difficulty === "Medium").length,
      hard: problemList.filter(p => p.difficulty === "Hard").length
    };

    // Estadísticas por categoría
    const categoryStats = {};
    Object.keys(categories).forEach(categoryId => {
      categoryStats[categoryId] = {
        total: problemList.filter(p => p.categories?.includes(categoryId)).length,
        filtered: filteredList.filter(p => p.categories?.includes(categoryId)).length
      };
    });

    return { generalStats, categoryStats };
  }, [problems, filteredData]);

  return (
    <div className={styles.statsContainer}>
      {/* Estadísticas generales */}
      <div className={styles.generalStats}>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>
            {stats.generalStats.filtered}
            {stats.generalStats.filtered !== stats.generalStats.total && 
             ` / ${stats.generalStats.total}`}
          </span>
          <span className={styles.statLabel}>Problemas</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>{stats.generalStats.easy}</span>
          <span className={styles.statLabel}>Fácil</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>{stats.generalStats.medium}</span>
          <span className={styles.statLabel}>Medio</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>{stats.generalStats.hard}</span>
          <span className={styles.statLabel}>Difícil</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>{Object.keys(categories).length}</span>
          <span className={styles.statLabel}>Categorías</span>
        </div>
      </div>

      {/* Estadísticas por categoría */}
      <div className={styles.categoryStats}>
        <h3 className={styles.categoryStatsTitle}>Problemas por Categoría</h3>
        <div className={styles.categoryGrid}>
          {Object.entries(categories).map(([categoryId, category]) => (
            <div key={categoryId} className={styles.categoryStatItem}>
              <div className={styles.categoryIcon}>
                <img src={category.icon} alt={category.title} />
              </div>
              <div className={styles.categoryName}>{category.title}</div>
              <div className={styles.categoryCount}>
                {stats.categoryStats[categoryId]?.filtered || 0}
                {stats.categoryStats[categoryId]?.filtered !== stats.categoryStats[categoryId]?.total &&
                 ` / ${stats.categoryStats[categoryId]?.total || 0}`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Componente principal de la página
export default function HackerRank() {
  // Use custom filters hook (ahora con soporte de categorías)
  const {
    searchTerm,
    topicFilter,
    difficultyFilter,
    categoryFilter,
    setSearchTerm,
    setTopicFilter,
    setDifficultyFilter,
    setCategoryFilter,
    allTopics,
    allCategories,
    filteredData,
    hasActiveFilters,
    clearFilters
  } = useFilters(problems);

  const PROBLEMS_PER_PAGE = 10;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>HackerRank</h1>
        
        {/* Controles de filtrado */}
        <FilterControls
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          topicFilter={topicFilter}
          setTopicFilter={setTopicFilter}
          difficultyFilter={difficultyFilter}
          setDifficultyFilter={setDifficultyFilter}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          allTopics={allTopics}
          allCategories={allCategories}
          hasActiveFilters={hasActiveFilters}
          clearFilters={clearFilters}
          searchPlaceholder="Buscar problemas por título, código o tema..."
          showCategories={true}
          categories={categories}
        />

        {/* Estadísticas mejoradas */}
        <HackerRankStats 
          problems={problems} 
          filteredData={filteredData}
        />

        {/* Tabla principal con todos los problemas */}
        <div className={styles.grid}>
          <ProblemTable
            title="Lista de Problemas"
            data={filteredData}
            showAllProblems={true}
            problemsPerPage={PROBLEMS_PER_PAGE}
            platform="hackerrank"
          />

        </div>
      </div>
    </div>
  );
}