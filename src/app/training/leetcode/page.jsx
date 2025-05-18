'use client';

import { useState, useMemo } from 'react';
import styles from '@/styles/leetcode.module.css';
import CustomLink from '@/components/CustomLink';
import { problems } from '@/data/leetcode/problems';
import { categories } from '@/data/leetcode/categories';

export default function LeetCode() {
  // State for filters (global)
  const [searchTerm, setSearchTerm] = useState('');
  const [topicFilter, setTopicFilter] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('');
  
  // State for sorting by category (separate for each table)
  const [sortConfigs, setSortConfigs] = useState({});

  // Extract all unique topics for the filter
  const allTopics = useMemo(() => {
    const topicsSet = new Set();
    Object.values(problems).forEach(problem => {
      problem.topics.forEach(topic => topicsSet.add(topic));
    });
    return Array.from(topicsSet).sort();
  }, []);

  // Function to change the sorting of a specific table
  const requestSort = (categoryId, key) => {
    setSortConfigs(prevConfigs => {
      // Get the current config for this category, or default if it doesn't exist
      const currentConfig = prevConfigs[categoryId] || { key: 'id', direction: 'asc' };
      
      // Determine the new direction
      let direction = 'asc';
      if (currentConfig.key === key && currentConfig.direction === 'asc') {
        direction = 'desc';
      }
      
      // Update only the configuration for this category
      return {
        ...prevConfigs,
        [categoryId]: { key, direction }
      };
    });
  };

  // Component to render a problem table by category
  const ProblemTable = ({ categoryId, title, showAllProblems = false }) => {
    // Get the sort configuration for this category or use the default
    const sortConfig = sortConfigs[categoryId] || { key: 'id', direction: 'asc' };

    // Component for sortable column header (local to this table)
    const SortableHeader = ({ column, label }) => {
      const isSorted = sortConfig.key === column;
      const sortDirection = isSorted ? sortConfig.direction : null;
      
      return (
        <th 
          className={`${styles.sortableHeader} ${isSorted ? styles.sorted : ''}`}
          onClick={() => requestSort(categoryId, column)}
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

    // Filter and sort problems for this category
    const filteredAndSortedProblems = useMemo(() => {
      // First we filter
      const filtered = Object.entries(problems)
        .filter(([id, problem]) => {
          // If it's the general table, show all problems
          if (showAllProblems) {
            // Only apply search and topic filters
          } 
          // For other tables, filter by specific category
          else if (!problem.categories.includes(categoryId)) {
            return false;
          }
          
          // Filter by search term
          if (searchTerm && !problem.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
              !id.toLowerCase().includes(searchTerm.toLowerCase())) {
            return false;
          }
          
          // Filter by topic
          if (topicFilter && !problem.topics.includes(topicFilter)) {
            return false;
          }
          
          // Filter by difficulty
          if (difficultyFilter && problem.difficulty !== difficultyFilter) {
            return false;
          }
          
          return true;
        });
      
      // Then we sort according to this table's specific configuration
      return filtered.sort((a, b) => {
        const [idA, problemA] = a;
        const [idB, problemB] = b;
        
        // Sort by selected column
        if (sortConfig.key === 'id') {
          // Extract ID numbers for numerical sorting
          const numA = parseInt(idA.replace(/\D/g, ''));
          const numB = parseInt(idB.replace(/\D/g, ''));
          return sortConfig.direction === 'asc' ? numA - numB : numB - numA;
        } 
        else if (sortConfig.key === 'title') {
          return sortConfig.direction === 'asc'
            ? problemA.title.localeCompare(problemB.title)
            : problemB.title.localeCompare(problemA.title);
        }
        else if (sortConfig.key === 'topics') {
          // Sort alphabetically by first topic
          const firstTopicA = problemA.topics[0] || '';
          const firstTopicB = problemB.topics[0] || '';
          return sortConfig.direction === 'asc'
            ? firstTopicA.localeCompare(firstTopicB)
            : firstTopicB.localeCompare(firstTopicA);
        }
        else if (sortConfig.key === 'difficulty') {
          // Define difficulty order: Easy < Medium < Hard
          const difficultyOrder = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
          const orderA = difficultyOrder[problemA.difficulty] || 0;
          const orderB = difficultyOrder[problemB.difficulty] || 0;
          return sortConfig.direction === 'asc' ? orderA - orderB : orderB - orderA;
        }
        return 0;
      });
    }, [categoryId, searchTerm, topicFilter, difficultyFilter, sortConfig, showAllProblems]);

    if (filteredAndSortedProblems.length === 0) {
      return (
        <div>
          <h2 className={styles.platformTitle}>{title}</h2>
          <p>No problems match your filters.</p>
        </div>
      );
    }

    // Function to get CSS class for difficulty
    const getDifficultyClass = (difficulty) => {
      if (!difficulty) return '';
      const lowerDifficulty = difficulty.toLowerCase();
      return styles[lowerDifficulty] || '';
    };

    return (
      <div>
        <h2 className={styles.platformTitle}>{title}</h2>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <SortableHeader column="id" label="Code" />
                <SortableHeader column="title" label="Description" />
                <SortableHeader column="topics" label="Topics" />
                <SortableHeader column="difficulty" label="Difficulty" />
              </tr>
            </thead>
            <tbody>
              {filteredAndSortedProblems.map(([id, problem]) => (
                <tr key={id}>
                  <td className={styles.code}>{id}</td>
                  <td>
                    <CustomLink href={`leetcode/${id.toLowerCase()}`}>
                      {problem.title}
                    </CustomLink>
                  </td>
                  <td>{problem.topics.join(", ")}</td>
                  <td className={getDifficultyClass(problem.difficulty)}>
                    {problem.difficulty || 'Unknown'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.tableInfo}>
          Showing {filteredAndSortedProblems.length} problems
        </div>
      </div>
    );
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>LeetCode</h1>
        
        {/* Search bar and filters (global) */}
        <div className={styles.filterContainer}>
          <input
            type="text"
            placeholder="Search problems..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
          
          <select 
            value={topicFilter}
            onChange={(e) => setTopicFilter(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="">All Topics</option>
            {allTopics.map(topic => (
              <option key={topic} value={topic}>{topic}</option>
            ))}
          </select>
          
          <select 
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          
          {(searchTerm || topicFilter || difficultyFilter) && (
            <button 
              onClick={() => {
                setSearchTerm('');
                setTopicFilter('');
                setDifficultyFilter('');
              }}
              className={styles.resetButton}
            >
              Reset Filters
            </button>
          )}
        </div>
        
        {/* Problem summary */}
        <div className={styles.statsContainer}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{Object.keys(problems).length}</span>
            <span className={styles.statLabel}>Total Problems</span>
          </div>
          
          <div className={styles.statItem}>
            <span className={styles.statNumber}>
              {Object.values(problems).filter(p => p.difficulty === "Easy").length}
            </span>
            <span className={styles.statLabel}>Easy</span>
          </div>
          
          <div className={styles.statItem}>
            <span className={styles.statNumber}>
              {Object.values(problems).filter(p => p.difficulty === "Medium").length}
            </span>
            <span className={styles.statLabel}>Medium</span>
          </div>
          
          <div className={styles.statItem}>
            <span className={styles.statNumber}>
              {Object.values(problems).filter(p => p.difficulty === "Hard").length}
            </span>
            <span className={styles.statLabel}>Hard</span>
          </div>
        </div>
        
        {/* General table with all problems */}
        <div className={styles.grid}>
          <ProblemTable 
            categoryId="general" 
            title="Problem List" 
            showAllProblems={true} 
          />
          
          {/* Additional tables for each specific category */}
          {Object.keys(categories)
            .filter(categoryId => categoryId !== 'general') // Skip 'general' if it exists as a category
            .map(categoryId => (
              <ProblemTable 
                key={categoryId} 
                categoryId={categoryId} 
                title={categories[categoryId].title} 
                showAllProblems={false}
              />
            ))}
        </div>
      </div>
    </div>
  );
}