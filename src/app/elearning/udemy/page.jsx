import styles from '@/styles/elearning.module.css'
import CustomLink from '@/components/CustomLink';

const Udemy = () => {
    return (
        <div className={styles.pageContainer}>    
            <div className={styles.container}>
                <h1 className={styles.title}>Udemy</h1>
        
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
                                <td className={styles.code}>UDM001</td>
                                <td>100 Days of Code - The complete Python Pro Bootcamp</td>
                                <td>Angela Yu</td>
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
export default Udemy;