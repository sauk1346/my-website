import styles from '@/styles/elearning.module.css'
import CustomLink from '@/components/CustomLink';

const Devtalles = () => {
    return (
        <div className={styles.container}>
            <h1 style={{marginBottom:'30px'}}>DevTalles</h1>
    
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
                            <td className={styles.code}>DVT001</td>
                            <td>Programación para Principiantes - Primeros Pasos</td>
                            <td>Fernando Herrera</td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            
            </div>
        </div>
        );
}
export default Devtalles;