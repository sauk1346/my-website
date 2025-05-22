// components/FilterControls.jsx
import styles from '@/styles/leetcode.module.css';

const FilterControls = ({
  searchTerm,
  setSearchTerm,
  topicFilter,
  setTopicFilter,
  difficultyFilter,
  setDifficultyFilter,
  allTopics,
  hasActiveFilters,
  clearFilters,
  searchPlaceholder = "Buscar problemas por título, código o tema..."
}) => {
  return (
    <div className={styles.filterContainer}>
      <input
        type="text"
        placeholder={searchPlaceholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />
      
      <select 
        value={topicFilter}
        onChange={(e) => setTopicFilter(e.target.value)}
        className={styles.filterSelect}
      >
        <option value="">Todos los Temas</option>
        {allTopics.map(topic => (
          <option key={topic} value={topic}>{topic}</option>
        ))}
      </select>
      
      <select 
        value={difficultyFilter}
        onChange={(e) => setDifficultyFilter(e.target.value)}
        className={styles.filterSelect}
      >
        <option value="">Todas las Dificultades</option>
        <option value="Fácil">Fácil</option>
        <option value="Medio">Medio</option>
        <option value="Difícil">Difícil</option>
      </select>
      
      {hasActiveFilters && (
        <button 
          onClick={clearFilters}
          className={styles.resetButton}
        >
          Limpiar Filtros
        </button>
      )}
    </div>
  );
};

export default FilterControls;