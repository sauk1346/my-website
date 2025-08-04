import styles from '@/shared/elearning.module.css'
import CustomLink from '@/components/ui/CustomLink';
import { codfacilitoData } from '@/data/bootcamps/codfacilito/codfacilito-data';

const CodFacilito = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>{codfacilitoData.title}</h1>
        <div className={styles.grid}>
          {codfacilitoData.sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h2 className={styles.platformTitle}>{section.sectionTitle}</h2>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Sigla</th>
                    <th>Nombre</th>
                    <th>Certificado</th>
                  </tr>
                </thead>
                <tbody>
                  {section.courses.map((course, courseIndex) => (
                    <tr key={courseIndex} className={styles.tableRow}>
                      <td className={styles.code}>{course.code}</td>
                      <td>
                        {course.link ? (
                          <CustomLink href={course.link}>{course.name}</CustomLink>
                        ) : (
                          course.name
                        )}
                      </td>
                      <td>{course.certificate}</td>
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
}

export default CodFacilito;