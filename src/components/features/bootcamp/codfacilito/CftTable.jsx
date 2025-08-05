import styles from './CftTable.module.css';
import CustomLink from '@/components/ui/CustomLink';

const CftTable = ({ courseData }) => {
  const renderClass = (classItem, index) => (
    <li key={index} className={styles.classItem}>
      {classItem.link ? (
        <CustomLink href={classItem.link} className={styles.sectionLink}>
          - {classItem.name}
        </CustomLink>
      ) : (
        <span className={styles.sectionTitle}>- {classItem.name}</span>
      )}
      {classItem.exercises && (
        <>
          , <CustomLink href={classItem.exercises.link} className={styles.sectionLink}>
            {classItem.exercises.name}
          </CustomLink>
        </>
      )}
    </li>
  );

  // Validación de props
  if (!courseData) {
    return <div className={styles.noSections}>No hay datos del curso disponibles</div>;
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          {courseData.title}
        </h1>
        <div className={styles.grid}>
          <div className={styles.tableContainer}>
            <h2 className={styles.platformTitle}>{courseData.sectionTitle}</h2>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Módulo</th>
                    <th>Clases</th>
                  </tr>
                </thead>
                <tbody>
                  {courseData.modules.map((module, moduleIndex) => (
                    <tr key={moduleIndex} className={styles.tableRow}>
                      <td data-label="#">
                        <span className={styles.sectionNumber}>
                          {module.number}
                        </span>
                      </td>
                      <td data-label="Módulo">
                        <span className={styles.moduleTitle}>
                          {module.name}
                        </span>
                      </td>
                      <td data-label="Clases">
                        <ul className={styles.classList}>
                          {module.classes.map((classItem, classIndex) =>
                            renderClass(classItem, classIndex)
                          )}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CftTable;