import CustomLink from '@/components/ui/CustomLink';
import styles from './LanguagePage.module.css';

const LanguagePage = ({ data }) => {
  const { title, courses, topics } = data;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.grid}>
          {/* Tabla de Cursos */}
          <div>
            <h2 className={styles.platformTitle}>Cursos</h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Sigla</th>
                  <th>Nombre</th>
                  <th>Plataforma</th>
                  <th>Profesor</th>
                  <th>Certificado</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, index) => (
                  <tr key={course.code || index} className={styles.tableRow}>
                    <td className={styles.code}>{course.code}</td>
                    <td>
                      <CustomLink href={course.href}>{course.name}</CustomLink>
                    </td>
                    <td>{course.platform}</td>
                    <td>{course.professor}</td>
                    <td>{course.certificate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Tabla de Tópicos */}
          <div>
            <h2 className={styles.platformTitle}>Tópicos</h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Descripción</th>
                </tr>
              </thead>
              <tbody>
                {topics.map((topic, index) => (
                  <tr key={topic.item || index}>
                    <td>{topic.item}</td>
                    <td>{topic.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguagePage;