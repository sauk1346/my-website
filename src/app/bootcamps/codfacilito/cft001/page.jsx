import styles from '@/styles/elearning.module.css'
import CustomLink from '@/components/ui/CustomLink';

const Cft001 = () => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.container}>
                <h1 className={styles.title}>Ciencia de Datos</h1>
        
                <div className={styles.grid}>
                    {/* Tabla de Cursos */}
                    <div>
                        <h2 className={styles.platformTitle}>Módulos</h2>
                        <table className={styles.table}>
                            <thead>
                            <tr>
                                <th>Módulo</th>
                                <th>Descripción</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className={styles.tableRow}>
                                <td>01</td>
                                <td>Inauguración y Bienvenida</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>02</td>
                                <td><CustomLink href='cft001/mod02'>Bases y Conceptos de la Ciencia de Datos</CustomLink> </td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>03</td>
                                <td>Asesoría 1 - Bases y conceptos</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>04</td>
                                <td>Estadística</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>05</td>
                                <td>Asesoría 2 - Estadística</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>06</td>
                                <td>Python para ciencia de datos</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>07</td>
                                <td>Asesoría 3 - Python para ciencia de datos</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>08</td>
                                <td>Análisis exploratorio de datos (EDA)</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>09</td>
                                <td>Asesoría 4 - Análisis exploratorio de datos (EDA)</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>10</td>
                                <td>Visualización efectiva de datos</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>11</td>
                                <td>Asesoría 5 - Visualización efectiva de datos</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>12</td>
                                <td>Generar Dashboards</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>13</td>
                                <td>Ética</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>14</td>
                                <td>Git</td>
                            </tr>
                            
                            </tbody>
                        </table>
                    </div>
                
                </div>
            </div>
        </div>
        );
}
export default Cft001;