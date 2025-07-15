import styles from '@/styles/elearning.module.css'
import CustomLink from '@/components/ui/CustomLink';

const Udm002 = () => {
    return (
        <div className={styles.pageContainer}>    
            <div className={styles.container}>
                <h1 className={styles.title}>UDM002</h1>
        
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
                            <tr className={styles.tableRow}>
                                <td >01</td>
                                <td>Introducción</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>02</td>
                                <td>Conseguir más Entrevistas</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>03</td>
                                <td><CustomLink href='udm002/section03'>Big O</CustomLink></td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>04</td>
                                <td>Cómo Resolver Problemas de Programación</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>05</td>
                                <td>Estructuras de Datos: Introducción</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>06</td>
                                <td>Estructuras de Datos: Arreglos</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>07</td>
                                <td>Estructuras de Datos: Tablas Hash</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                
                </div>
            </div>
        </div>
        );
}
export default Udm002;