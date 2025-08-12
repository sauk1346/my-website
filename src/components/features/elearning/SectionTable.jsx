import { SmartLink } from '@/components/mdx';
import styles from './SectionTable.module.css';

const SectionTable = ({
  courseId,
  courseName = null,
  sections = [],
  basePath = '',
  showDescription = true,
  className = ''
}) => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h1 className={`${styles.title} ${className}`}>
          {courseId}
          {courseName && <span className={styles.courseName}>{courseName}</span>}
        </h1>
        
        <div className={styles.grid}>
          <div className={styles.tableContainer}>
            <h2 className={styles.platformTitle}>Secciones</h2>
            
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Descripción</th>
                    {showDescription && sections.some(s => s.description) && (
                      <th>Detalles</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {sections.map((section) => (
                    <tr key={section.id} className={styles.tableRow}>
                      <td data-label="#">
                        <span className={styles.sectionNumber}>
                          {section.id}
                        </span>
                      </td>
                      <td data-label="Descripción">
                        {section.link ? (
                          <SmartLink
                            href={basePath ? `${basePath}/${section.link}` : section.link}
                          >
                            {section.title}
                          </SmartLink>
                        ) : (
                          <span className={styles.sectionTitle}>
                            {section.title}
                          </span>
                        )}
                      </td>
                      {showDescription && sections.some(s => s.description) && (
                        <td data-label="Detalles">
                          <span className={styles.sectionDescription}>
                            {section.description || '-'}
                          </span>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {sections.length === 0 && (
              <div className={styles.noSections}>
                <p>No hay secciones disponibles para este curso.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTable;