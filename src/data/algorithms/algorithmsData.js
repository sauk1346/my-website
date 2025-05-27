// data/algorithms.js
export const algorithmsData = {
    'bubble-sort': {
      id: 'bubble-sort',
      title: 'Bubble Sort',
      description: 'Compara elementos adyacentes e intercambia si están en orden incorrecto',
      difficulty: 'Fácil',
      category: 'sorting',
      slug: '/algorithms/bubble-sort'
    },
    'binary-search': {
      id: 'binary-search',
      title: 'Binary Search',
      description: 'Búsqueda eficiente en array ordenado dividiendo por la mitad',
      difficulty: 'Medio',
      category: 'searching',
      slug: '/algorithms/binary-search'
    },
    'dijkstra': {
      id: 'dijkstra',
      title: 'Dijkstra',
      description: 'Encuentra camino más corto desde un nodo origen a todos los demás',
      difficulty: 'Difícil',
      category: 'graph',
      slug: '/algorithms/dijkstra'
    },
    'merge-sort': {
      id: 'merge-sort',
      title: 'Merge Sort',
      description: 'Algoritmo de ordenamiento estable usando divide y vencerás',
      difficulty: 'Medio',
      category: 'sorting',
      slug: '/algorithms/merge-sort'
    },
    'dfs': {
      id: 'dfs',
      title: 'Depth-First Search',
      description: 'Recorrido de grafos explorando lo más profundo posible',
      difficulty: 'Medio',
      category: 'graph',
      slug: '/algorithms/dfs'
    },
    'fibonacci-dp': {
      id: 'fibonacci-dp',
      title: 'Fibonacci DP',
      description: 'Secuencia de Fibonacci optimizada con programación dinámica',
      difficulty: 'Medio',
      category: 'dynamic-programming',
      slug: '/algorithms/fibonacci-dp'
    },
    'quick-sort': {
      id: 'quick-sort',
      title: 'Quick Sort',
      description: 'Ordenamiento rápido usando partición alrededor de un pivote',
      difficulty: 'Medio',
      category: 'sorting',
      slug: '/algorithms/quick-sort'
    },
    'bfs': {
      id: 'bfs',
      title: 'Breadth-First Search',
      description: 'Recorrido de grafos explorando por niveles',
      difficulty: 'Medio',
      category: 'graph',
      slug: '/algorithms/bfs'
    },
    'insertion-sort': {
      id: 'insertion-sort',
      title: 'Insertion Sort',
      description: 'Ordena insertando cada elemento en su posición correcta',
      difficulty: 'Fácil',
      category: 'sorting',
      slug: '/algorithms/insertion-sort'
    },
    'linear-search': {
      id: 'linear-search',
      title: 'Linear Search',
      description: 'Búsqueda secuencial elemento por elemento',
      difficulty: 'Fácil',
      category: 'searching',
      slug: '/algorithms/linear-search'
    },
    'heap-sort': {
      id: 'heap-sort',
      title: 'Heap Sort',
      description: 'Ordenamiento usando estructura de heap binario',
      difficulty: 'Difícil',
      category: 'sorting',
      slug: '/algorithms/heap-sort'
    }
  };
  
  // data/categories.js
  export const categories = {
    'sorting': {
      title: 'Ordenamiento',
      color: '#3b82f6',
      description: 'Algoritmos para ordenar elementos'
    },
    'searching': {
      title: 'Búsqueda',
      color: '#10b981',
      description: 'Algoritmos para encontrar elementos'
    },
    'graph': {
      title: 'Grafos',
      color: '#f59e0b',
      description: 'Algoritmos para estructuras de grafos'
    },
    'dynamic-programming': {
      title: 'Prog. Dinámica',
      color: '#8b5cf6',
      description: 'Algoritmos de programación dinámica'
    },
    'greedy': {
      title: 'Greedy',
      color: '#ef4444',
      description: 'Algoritmos codiciosos'
    },
    'divide-conquer': {
      title: 'Divide y Vencerás',
      color: '#06b6d4',
      description: 'Algoritmos divide y vencerás'
    }
  };