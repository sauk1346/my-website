/**
 * EJEMPLO: CftTable usando BaseTable
 *
 * Este archivo demuestra cómo migrar CftTable para usar BaseTable genérico
 *
 * Beneficios:
 * - Menos código: ~30 líneas vs ~75 líneas
 * - Más declarativo: configuración en vez de JSX repetitivo
 * - Reutiliza lógica común: renderizado, estilos, validación
 */

import BaseTable from '@/components/common/table/BaseTable';
import { SmartLink } from '@/components/mdx';

const CftTableWithBase = ({ courseData }) => {
  // Validación simple - BaseTable maneja el caso vacío
  if (!courseData || !courseData.modules) {
    return null;
  }

  // Configurar columnas
  const columns = [
    {
      key: 'classNumber',
      label: 'Clase',
      isCode: true,
      cellClassName: 'lessonNumber'
    },
    {
      key: 'name',
      label: 'Descripción',
      render: (value, row) => (
        <>
          {row.link ? (
            <SmartLink href={row.link}>
              {value}
            </SmartLink>
          ) : (
            <span>{value}</span>
          )}

          {row.exercises && (
            <>
              {' - '}
              <SmartLink href={row.exercises.link}>
                {row.exercises.name}
              </SmartLink>
            </>
          )}
        </>
      )
    }
  ];

  // Transformar datos a formato grid
  const gridData = courseData.modules.map(module => ({
    sectionTitle: module.name,
    rows: module.classes
  }));

  return (
    <BaseTable
      title={courseData.title}
      data={gridData}
      columns={columns}
      variant="grid"
    />
  );
};

export default CftTableWithBase;
