import styles from './CftTable.module.css';
import { SmartLink } from '@/components/mdx';
import { buildLessonLink } from '@/utils/linkBuilder';

const CftTable = ({ courseData, courseId }) => {
  // Validación de props
  if (!courseData) {
    return (
      <div className={styles.pageContainer}>
        <div className={styles.container}>
          <div>No hay datos del curso disponibles</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          {courseData.title}
        </h1>
        
        <div className={styles.grid}>
          {courseData.modules.map((module, moduleIndex) => (
            <div key={moduleIndex}>
              <h2 className={styles.platformTitle}>
                {module.name}
              </h2>
              
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Clase</th>
                    <th>Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  {module.classes.map((classItem, classIndex) => (
                    <tr key={classIndex} className={styles.tableRow}>
                      <td className={styles.lessonNumber}>
                        {classItem.classNumber}
                      </td>
                      <td>
                        {classItem.link ? (
                          <SmartLink
                            href={buildLessonLink('bootcamp', courseId, classItem.link)}
                          >
                            {classItem.name}
                          </SmartLink>
                        ) : (
                          <span>{classItem.name}</span>
                        )}

                        {classItem.exercises && (
                          <>
                            {' - '}
                            <SmartLink
                              href={buildLessonLink('bootcamp', courseId, classItem.exercises.link)}
                            >
                              {classItem.exercises.name}
                            </SmartLink>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CftTable;