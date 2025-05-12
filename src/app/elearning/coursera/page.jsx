import styles from '@/styles/elearning.module.css'
import CustomLink from '@/components/CustomLink';

const Coursera = () => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.container}>
                <h1 className={styles.title}>Coursera</h1>
        
                <div className={styles.grid}>
                    {/* Tabla de Cursos */}
                    <div>
                        <h2 className={styles.platformTitle}>Cursos</h2>
                        <table className={styles.table}>
                            <thead>
                            <tr>
                                <th>Sigla</th>
                                <th>Nombre</th>
                                <th>Profesor</th>
                                <th>Certificado</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className={styles.tableRow}>
                                <td className={styles.code}>CSR001</td>
                                <td>Introduction to Data Analytics</td>
                                <td>IBM</td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                
                </div>
            </div>
        </div>
        );
}
export default Coursera;