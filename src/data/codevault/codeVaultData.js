export const codeVaultData = {
    dataStructures: {
      title: "Estructuras de Datos",
      headers: ['Material', 'Descripción'],
      data: [
        ['Arrays', 'estáticos y dinámicos'],
        ['Listas Enlazadas', 'simples, dobles, circulares'],
        ['Pilas (Stacks)', 'LIFO, operaciones push/pop'],
        ['Colas (Queues)', 'FIFO, colas de prioridad, deques'],
        ['Árboles', 'AVL, Red-Black, B-trees, tries'],
        ['Grafos', 'dirigidos, no dirigidos, ponderados, representaciones (matriz/lista de adyacencia)'],
        ['Heaps', 'min-heap, max-heap, binary heap'],
        ['Tablas Hash', 'manejo de colisiones, funciones hash']
      ]
    },
  
    designTechniques: {
      title: "Técnicas de Diseño de Algoritmos",
      headers: ['Técnica', 'Descripción'],
      data: [
        ['Programación Dinámica', 'memoización, bottom-up, optimización de subproblemas'],
        ['Divide y Vencerás', 'recursión, casos base, combinación de soluciones'],
        ['Algoritmos Greedy', 'selección local óptima, decisiones irrevocables'],
        ['Backtracking', 'exploración exhaustiva con retroceso'],
        ['Branch and Bound', 'poda de ramas no prometedoras'],
        ['Programación Lineal', 'optimización con restricciones lineales']
      ]
    },
  
    sortingAlgorithms: {
      title: "Algoritmos de Ordenamiento",
      headers: ['Algoritmo', 'Complejidad', 'Estabilidad'],
      data: [
        ['Bubble Sort', 'O(n²)', 'Estable'],
        ['Selection Sort', 'O(n²)', 'Inestable'],
        ['Insertion Sort', 'O(n²)', 'Estable'],
        ['Merge Sort', 'O(n log n)', 'Estable'],
        ['Quick Sort', 'O(n log n)', 'Inestable'],
        ['Heap Sort', 'O(n log n)', 'Inestable'],
        ['Counting Sort', 'O(n + k)', 'Estable'],
        ['Radix Sort', 'O(d × n)', 'Estable'],
        ['Bucket Sort', 'O(n + k)', 'Estable'],
        ['Tim Sort', 'O(n log n)', 'Estable']
      ]
    },
  
    searchAlgorithms: {
      title: "Algoritmos de Búsqueda",
      headers: ['Algoritmo', 'Complejidad', 'Tipo'],
      data: [
        ['Búsqueda Lineal', 'O(n)', 'Secuencial'],
        ['Búsqueda Binaria', 'O(log n)', 'Divide y vencerás'],
        ['Búsqueda en Profundidad (DFS)', 'O(V + E)', 'Grafos'],
        ['Búsqueda en Anchura (BFS)', 'O(V + E)', 'Grafos'],
        ['Búsqueda A*', 'O(b^d)', 'Heurística'],
        ['Dijkstra', 'O((V + E) log V)', 'Camino más corto']
      ]
    },
  
    complexityAnalysis: {
      title: "Análisis de Complejidad",
      headers: ['Notación', 'Significado', 'Ejemplo'],
      data: [
        ['O(1)', 'Tiempo constante', 'Acceso a array por índice'],
        ['O(log n)', 'Tiempo logarítmico', 'Búsqueda binaria'],
        ['O(n)', 'Tiempo lineal', 'Búsqueda secuencial'],
        ['O(n log n)', 'Tiempo log-lineal', 'Merge sort, Quick sort'],
        ['O(n²)', 'Tiempo cuadrático', 'Bubble sort, Selection sort'],
        ['O(2^n)', 'Tiempo exponencial', 'Problema de la mochila (fuerza bruta)'],
        ['O(n!)', 'Tiempo factorial', 'Problema del viajante (fuerza bruta)']
      ]
    }
  };
  
  // Array con todas las secciones en orden de aparición
  export const sectionsOrder = [
    codeVaultData.dataStructures,
    codeVaultData.designTechniques,
    codeVaultData.sortingAlgorithms,
    codeVaultData.searchAlgorithms,
    codeVaultData.complexityAnalysis
  ];
  
  // Función helper para obtener secciones por categoría
  export const getSectionsByCategory = (category) => {
    switch (category) {
      case 'structures':
        return [codeVaultData.dataStructures];
      case 'algorithms':
        return [codeVaultData.sortingAlgorithms, codeVaultData.searchAlgorithms];
      case 'techniques':
        return [codeVaultData.designTechniques];
      case 'analysis':
        return [codeVaultData.complexityAnalysis];
      default:
        return sectionsOrder;
    }
  };