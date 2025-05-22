import { useState, useMemo } from 'react';

export const useFilters = (data, options = {}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [topicFilter, setTopicFilter] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('');

  // Difficulty mapping
  const difficultyMap = {
    'Easy': 'Fácil',
    'Medium': 'Medio', 
    'Hard': 'Difícil'
  };

  const reverseDifficultyMap = {
    'Fácil': 'Easy',
    'Medio': 'Medium',
    'Difícil': 'Hard'
  };

  // Function to normalize text for better searching
  const normalizeText = (text) => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  };

  // Extract all unique topics
  const allTopics = useMemo(() => {
    if (!data) return [];
    
    const topicsSet = new Set();
    Object.values(data).forEach(item => {
      if (item.topics) {
        item.topics.forEach(topic => {
          topicsSet.add(topic);
        });
      }
    });
    return Array.from(topicsSet).sort();
  }, [data]);

  // Filter function
  const filterData = useMemo(() => {
    if (!data) return [];

    return Object.entries(data).filter(([id, item]) => {
      // Filter by search term
      if (searchTerm) {
        const normalizedSearchTerm = normalizeText(searchTerm);
        const normalizedTitle = normalizeText(item.title || '');
        const normalizedId = normalizeText(id);
        
        const matchesAnyTopic = item.topics?.some(topic => {
          const normalizedTopic = normalizeText(topic);
          if (normalizedTopic.includes(normalizedSearchTerm)) {
            return true;
          }
          
          const searchWords = normalizedSearchTerm.split(/\s+/).filter(word => word.length > 0);
          if (searchWords.length > 1) {
            return searchWords.every(word => normalizedTopic.includes(word));
          }
          
          return false;
        }) || false;
        
        const matchesSearch = 
          normalizedTitle.includes(normalizedSearchTerm) ||
          normalizedId.includes(normalizedSearchTerm) ||
          matchesAnyTopic;
          
        if (!matchesSearch) {
          return false;
        }
      }
      
      // Filter by topic
      if (topicFilter && !item.topics?.includes(topicFilter)) {
        return false;
      }
      
      // Filter by difficulty
      if (difficultyFilter) {
        const targetDifficulty = reverseDifficultyMap[difficultyFilter] || difficultyFilter;
        if (item.difficulty !== targetDifficulty) {
          return false;
        }
      }
      
      return true;
    });
  }, [data, searchTerm, topicFilter, difficultyFilter]);

  const clearFilters = () => {
    setSearchTerm('');
    setTopicFilter('');
    setDifficultyFilter('');
  };

  const hasActiveFilters = searchTerm || topicFilter || difficultyFilter;

  return {
    // State
    searchTerm,
    topicFilter,
    difficultyFilter,
    
    // Setters
    setSearchTerm,
    setTopicFilter,
    setDifficultyFilter,
    
    // Computed values
    allTopics,
    filteredData: filterData,
    hasActiveFilters,
    
    // Actions
    clearFilters,
    
    // Utilities
    difficultyMap,
    reverseDifficultyMap,
    normalizeText
  };
};