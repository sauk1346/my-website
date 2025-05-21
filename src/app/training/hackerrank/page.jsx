'use client'

import { useState } from 'react';
import CustomLink from '@/components/ui/CustomLink';
import styles from '@/styles/hackerrank.module.css';
import { getAllCategories } from '@/data/hackerrank/categories';

const HackerRank = () => {
  const [categoryFilter, setCategoryFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Obtenemos todas las categorías usando la función del módulo
  const topicData = getAllCategories();
  
  // Obtenemos categorías únicas
  const categories = ['All', ...new Set(topicData.map(topic => topic.category))];
  
  // Filtramos temas basados en categoría y término de búsqueda
  const filteredTopics = topicData.filter(topic => {
    const matchesCategory = categoryFilter === '' || categoryFilter === 'All' || topic.category === categoryFilter;
    const matchesSearch = topic.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         topic.code.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>HackerRank</h1>
        
        <div className={styles.statsContainer}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{topicData.length}</span>
            <span className={styles.statLabel}>Topics</span>
          </div>
          
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{categories.length - 1}</span>
            <span className={styles.statLabel}>Categories</span>
          </div>
        </div>
        
        <div className={styles.filterContainer}>
          <input
            type="text"
            placeholder="Search topics..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
          
          <select 
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className={styles.filterSelect}
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          
          {(searchTerm || categoryFilter !== '') && (
            <button 
              onClick={() => {
                setSearchTerm('');
                setCategoryFilter('');
              }}
              className={styles.resetButton}
            >
              Reset Filters
            </button>
          )}
        </div>
        
        <h2 className={styles.platformTitle}>Topics</h2>
        
        {filteredTopics.length === 0 ? (
          <p className={styles.noResults}>No topics match your search criteria.</p>
        ) : (
          <div className={styles.topicGrid}>
            {filteredTopics.map(topic => (
              <div key={topic.code} className={styles.topicCard}>
                <div className={styles.topicHeader}>
                  <div className={styles.topicIcon}>
                    <img src={topic.icon} alt={topic.title} />
                  </div>
                  <div className={styles.topicCode}>{topic.code}</div>
                </div>
                
                <h3 className={styles.topicName}>
                  {topic.hasContent ? (
                    <CustomLink href={`hackerrank/${topic.code.toLowerCase()}`}>
                      {topic.title}
                    </CustomLink>
                  ) : (
                    topic.title
                  )}
                </h3>
                
                <div className={styles.topicCategory}>{topic.category}</div>
                
                {topic.hasContent && (
                  <div className={styles.topicAction}>
                    <CustomLink href={`hackerrank/${topic.code.toLowerCase()}`} className={styles.viewButton}>
                      View Challenges
                    </CustomLink>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default HackerRank;