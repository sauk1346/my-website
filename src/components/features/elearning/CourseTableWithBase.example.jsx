/**
 * EJEMPLO: CourseTable usando BaseTable
 *
 * Demuestra cómo crear una tabla simple con columnas dinámicas
 */

import BaseTable from '@/components/common/table/BaseTable';

export const CourseTableWithBase = ({ courses, platformName, type = 'elearning' }) => {
  // Configurar columnas según el tipo
  const columns = [
    {
      key: 'code',
      label: 'Código',
      isCode: true
    },
    {
      key: 'title',
      label: 'Curso',
      isLink: true,
      linkKey: 'titleUrl',
      linkType: 'next' // 'next' | 'smart' | 'external'
    }
  ];

  // Agregar columna condicional
  if (type === 'elearning') {
    columns.push({
      key: 'instructor',
      label: 'Instructor',
      render: (value) => value || '-'
    });
  } else if (type === 'bootcamp') {
    columns.push({
      key: 'certificateUrl',
      label: 'Certificado',
      render: (value) => value ? (
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="certificateLink"
        >
          Ver Certificado
        </a>
      ) : '-'
    });
  }

  return (
    <BaseTable
      title={platformName}
      data={courses}
      columns={columns}
      variant="simple"
      showContainer={false} // Solo section, no pageContainer
    />
  );
};

export default CourseTableWithBase;
