import Link from 'next/link';
import styles from './ModuleTable.module.css';

const ModuleTable = ({ data }) => {
  const { title, modules } = data;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.grid}>
          {modules.map((module, moduleIndex) => (
            <div key={moduleIndex}>
              <h2 className={styles.platformTitle}>{module.title}</h2>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Lección</th>
                    <th>Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  {module.lessons.map((lesson, lessonIndex) => (
                    <tr key={lessonIndex} className={styles.tableRow}>
                      <td className={styles.lessonNumber}>{lesson.lesson}</td>
                      <td>
                        {lesson.href ? (
                          <Link href={lesson.href} className={styles.courseLink}>
                            {lesson.description}
                          </Link>
                        ) : (
                          lesson.description
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

export default ModuleTable;