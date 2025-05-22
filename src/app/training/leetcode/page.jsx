'use client';

import styles from '@/styles/leetcode.module.css';
import FilterControls from '@/components/table/FilterControls';
import ProblemStats from '@/components/table/ProblemStats';
import ProblemTable from '@/components//table/ProblemTable';
import { useFilters } from '@/hooks/useFilters';
import { problems } from '@/data/leetcode/problems';
import { categories } from '@/data/leetcode/categories';

export default function LeetCode() {
  // Use custom filters hook
  const {
    searchTerm,
    topicFilter,
    difficultyFilter,
    setSearchTerm,
    setTopicFilter,
    setDifficultyFilter,
    allTopics,
    filteredData,
    hasActiveFilters,
    clearFilters
  } = useFilters(problems);

  const PROBLEMS_PER_PAGE = 10;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>LeetCode</h1>
        
        {/* Search bar and filters */}
        <FilterControls
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          topicFilter={topicFilter}
          setTopicFilter={setTopicFilter}
          difficultyFilter={difficultyFilter}
          setDifficultyFilter={setDifficultyFilter}
          allTopics={allTopics}
          hasActiveFilters={hasActiveFilters}
          clearFilters={clearFilters}
        />
        
        {/* Problem statistics */}
        <ProblemStats problems={problems} />
        
        {/* Tables */}
        <div className={styles.grid}>
          {/* General table with all problems */}
          <ProblemTable 
            title="Lista de Problemas" 
            data={filteredData}
            showAllProblems={true}
            problemsPerPage={PROBLEMS_PER_PAGE}
          />
          
          {/* Additional tables for each specific category */}
          {Object.keys(categories)
            .filter(categoryId => categoryId !== 'general')
            .map(categoryId => (
              <ProblemTable 
                key={categoryId} 
                title={categories[categoryId].title}
                data={filteredData}
                categoryId={categoryId}
                showAllProblems={false}
                problemsPerPage={PROBLEMS_PER_PAGE}
              />
            ))}
        </div>
      </div>
    </div>
  );
}