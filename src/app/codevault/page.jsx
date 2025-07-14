import styles from '@/styles/elearning.module.css'
import CustomLink from '@/components/ui/CustomLink';

const CodFacilito = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>CodeVault</h1>

        <div className={styles.grid}>
          {/* Tabla de Cursos */}
          <div>
            <h2 className={styles.platformTitle}>Estructuras de Datos</h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Material</th>
                  <th>Descripción</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Arrays</td>
                  <td>estáticos y dinámicos</td>
                </tr>
                <tr>
                  <td>Listas Enlazadas</td>
                  <td>simples, dobles, circulares</td>
                </tr>
                <tr>
                  <td>Pilas (Stacks)</td>
                  <td>LIFO, operaciones push/pop</td>
                </tr>
                <tr>
                  <td>Colas (Queues)</td>
                  <td>FIFO, colas de prioridad, deques</td>
                </tr>
                <tr>
                  <td>Árboles</td>
                  <td>AVL, Red-Black, B-trees, tries</td>
                </tr>
                <tr>
                  <td>Grafos</td>
                  <td>dirigidos, no dirigidos, ponderados, representaciones (matriz/lista de adyacencia)</td>
                </tr>
                <tr>
                  <td>Heaps</td>
                  <td>min-heap, max-heap, binary heap</td>
                </tr>
                <tr>
                  <td>Tablas Hash</td>
                  <td>manejo de colisiones, funciones hash</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div>
            <h2 className={styles.platformTitle}>Técnicas de Diseño de Algoritmos</h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Material</th>
                  <th>Descripción</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Programación Dinámica</td>
                  <td>memoización, bottom-up</td>
                </tr>
                <tr>
                  <td>Divide y Vencerás</td>
                  <td>recursión, casos base</td>
                </tr>
                <tr>
                  <td>Algoritmos Greedy</td>
                  <td>selección local óptima</td>
                </tr>
                <tr>
                  <td>Backtracking</td>
                  <td>exploración exhaustiva con retroceso</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h2 className={styles.platformTitle}>Algoritmos</h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Material</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bubble Sort</td>
                </tr>
                <tr>
                  <td>Selection Sort</td>
                </tr>
                <tr>
                  <td>Insertion Sort</td>
                </tr>
                <tr>
                  <td>Merge Sort</td>
                </tr>
                <tr>
                  <td>Quick Sort</td>
                </tr>
                <tr>
                  <td>Heap Sort</td>
                </tr>
                <tr>  
                  <td>Counting Sort</td>
                </tr>
                <tr>
                  <td>Radix Sort</td>
                </tr>
                <tr>
                  <td>Bucket Sort</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}
export default CodFacilito;