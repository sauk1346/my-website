import styles from '@/styles/elearning.module.css'
import CustomLink from '@/components/ui/CustomLink';

const CftTable = ({ courseData }) => {
    const renderClass = (classItem, index) => (
        <li key={index}>
            {classItem.link ? (
                <CustomLink href={classItem.link}>- {classItem.name}</CustomLink>
            ) : (
                <>- {classItem.name}</>
            )}
            {classItem.exercises && (
                <>
                    , <CustomLink href={classItem.exercises.link}>{classItem.exercises.name}</CustomLink>
                </>
            )}
        </li>
    );

    // Validación de props
    if (!courseData) {
        return <div>No hay datos del curso disponibles</div>;
    }

    return (
        <div className={styles.pageContainer}>
            <div className={styles.container}>
                <h1 className={styles.title}>{courseData.title}</h1>
                <div className={styles.grid}>
                    <div>
                        <h2 className={styles.platformTitle}>{courseData.sectionTitle}</h2>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Módulos</th>
                                    <th>Clases</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courseData.modules.map((module, moduleIndex) => (
                                    <tr key={moduleIndex} className={styles.tableRow}>
                                        <td>{module.number} {module.name}</td>
                                        <td>
                                            <ul style={{listStyle:'none'}}>
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
    );
}

export default CftTable;