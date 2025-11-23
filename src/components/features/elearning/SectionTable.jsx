import { SmartLink } from '@/components/mdx';
import styles from './SectionTable.module.css';

const SectionTable = ({
  courseData, // Support passing the full course object
  courseId,
  courseName = null,
  sections = [],
  basePath = '',
  showDescription = true,
  className = ''
}) => {
  // If courseData is provided, extract values from it
  if (courseData) {
    courseId = courseId || courseData.code || courseData.title; // Fallback
    courseName = courseName || courseData.title;

    // If data has modules, we need to render multiple tables
    if (courseData.modules) {
      return (
        <div className={styles.pageContainer}>
          <div className={styles.container}>
            <h1 className={`${styles.title} ${className}`}>
              {courseName}
            </h1>

            <div className={styles.grid}>
              {courseData.modules.map((module, index) => (
                <div key={index} className={styles.tableContainer}>
                  <h2 className={styles.platformTitle}>
                    {module.name}
                  </h2>

                  <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Clase</th>
                          {showDescription && module.classes.some(c => c.description) && (
                            <th>Descripción</th>
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {module.classes.map((classItem, idx) => (
                          <tr key={idx} className={styles.tableRow}>
                            <td data-label="#">
                              <span className={styles.sectionNumber}>
                                {classItem.classNumber}
                              </span>
                            </td>
                            <td data-label="Clase">
                              {classItem.link ? (
                                <SmartLink
                                  href={classItem.link}
                                >
                                  {classItem.name}
                                </SmartLink>
                              ) : (
                                <span className={styles.sectionTitle}>
                                  {classItem.name}
                                </span>
                              )}
                            </td>
                            {showDescription && module.classes.some(c => c.description) && (
                              <td data-label="Descripción">
                                <span className={styles.sectionDescription}>
                                  {classItem.description || '-'}
                                </span>
                              </td>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // Fallback for flat structure if needed (though data seems to use modules)
    sections = sections.length > 0 ? sections : (courseData.sections || []);
  }

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