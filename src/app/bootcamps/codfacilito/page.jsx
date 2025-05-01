import styles from '@/styles/elearning.module.css'
import CustomLink from '@/components/CustomLink';

const CodFacilito = () => {
    return (
        <div className={styles.container}>
            <h1 style={{marginBottom:'30px'}}>Código Facilito</h1>
    
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
                            <td className={styles.code}>CFT001</td>
                            <td>Ciencia de Datos</td>
                            <td></td>
                        </tr>
                        <tr className={styles.tableRow}>
                            <td className={styles.code}>CFT002</td>
                            <td>Azure AI Engineer Associate</td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            
            </div>
        </div>
        );
}
export default CodFacilito;