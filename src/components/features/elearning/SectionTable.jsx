import CustomLink from '@/components/ui/CustomLink';
import styles from './SectionTable.module.css';

const SectionTable = ({ title, sections }) => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.grid}>
          {/* Tabla de Cursos */}
          <div>
            <h2 className={styles.platformTitle}>Secciones</h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Descripción</th>
                </tr>
              </thead>
              <tbody>
                {sections.map((section) => (
                  <tr key={section.id} className={styles.tableRow}>
                    <td>{section.id}</td>
                    <td>
                      {section.href ? (
                        <CustomLink href={section.href}>
                          {section.description}
                        </CustomLink>
                      ) : (
                        section.description
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTable;