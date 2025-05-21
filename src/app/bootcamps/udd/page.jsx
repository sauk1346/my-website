import styles from '@/styles/elearning.module.css'
import ExternalLink from '@/components/ui/ExternalLink';

const Udd = () => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.container}>
                <h1 className={styles.title}>Universidad del Desarrollo</h1>
        
                <div className={styles.grid}>
                    {/* Tabla de Cursos */}
                    <div>
                        <h2 className={styles.platformTitle}>Bootcamps</h2>
                        <table className={styles.table}>
                            <thead>
                            <tr>
                                <th>Sigla</th>
                                <th>Nombre</th>
                                <th>Certificado</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className={styles.tableRow}>
                                <td className={styles.code}>UDD001</td>
                                <td>Desarrollo Web Fullstack</td>
                                <td><ExternalLink href='/bootcamps/udd/docs/DWFS-Diploma.pdf'>Diploma</ExternalLink></td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td className={styles.code}>UDD002</td>
                                <td>Ciencia de Datos e Inteligencia Artificial</td>
                                <td><ExternalLink href='/bootcamps/udd/docs/DS-Diploma.pdf'>Diploma</ExternalLink></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                
                </div>
            </div>
        </div>
        );
}
export default Udd;