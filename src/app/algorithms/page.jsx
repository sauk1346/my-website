'use client'
import AlgorithmsCollection from '@/components/AlgorithmsCollection';
import { algorithmsData, categories } from '@/data/algorithms/algorithmsData';

export default function AlgorithmsPage() {
  if (!algorithmsData || !categories) {
    return (
      <div style={{
        padding: '2rem',
        textAlign: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h2>Error al cargar datos</h2>
        <p>No se pudieron importar los algoritmos.</p>
      </div>
    );
  }

  return (
    <AlgorithmsCollection
      algorithms={algorithmsData}
      categories={categories}
    />
  );
}