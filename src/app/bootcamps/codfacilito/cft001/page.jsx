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
                                <th>Módulos</th>
                                <th>Clases</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className={styles.tableRow}>
                                <td>01 Bases y Conceptos de la Ciencia de Datos</td>
                                <td>
                                    <ul style={{listStyle:'none'}}>
                                        <li><CustomLink href='cft001/clase01'>- Clase 01: ¿Qué hace un científico de datos?</CustomLink></li>
                                        <li><CustomLink href='cft001/clase02'>- Clase 02: Conoce tus herramientas de ciencia de datos</CustomLink></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>02 Estadística</td>
                                <td>
                                    <ul style={{listStyle:'none'}}>
                                        <li><CustomLink href='cft001/clase03'>- Clase 03: Estadística (1)</CustomLink></li>
                                        <li><CustomLink href='cft001/clase04'>- Clase 04: Estadística (2)</CustomLink></li>
                                    </ul>
                                </td>

                            </tr>
                            <tr className={styles.tableRow}>
                                <td>03 Python para ciencia de datos</td>
                                <td>
                                    <ul style={{listStyle:'none'}}>
                                        <li><CustomLink href='cft001/clase05a'>- Clase 05: Numpy</CustomLink>, <CustomLink href='cft001/clase05b'>Ejercicios Numpy</CustomLink></li>
                                        <li><CustomLink href='cft001/clase06a'>- Clase 06: Pandas</CustomLink>, <CustomLink href='cft001/clase06b'>Ejercicios Pandas</CustomLink></li>
                                        <li>- Clase 07: Polars</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>04 Análisis exploratorio de datos (EDA)</td>
                                <td>
                                    <ul style={{listStyle:'none'}}>
                                        <li><CustomLink href='cft001/clase08'>- Clase 08: EDA (1)</CustomLink></li>
                                        <li><CustomLink href='cft001/clase09'>- Clase 09: EDA (2)</CustomLink></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>05 Visualización efectiva de datos</td>
                                <td>
                                    <ul style={{listStyle:'none'}}>
                                        <li><CustomLink href='cft001/clase10'>- Clase 10: ¿Qué es la visualización?</CustomLink></li>
                                        <li><CustomLink href='cft001/clase11'>- Clase 11: Gráficos Básicos</CustomLink></li>
                                        <li>- Clase 12: Gráficos Avanzados</li>
                                    </ul>
                                </td>

                            </tr>
                            <tr className={styles.tableRow}>
                                <td>06 Generar Dashboards</td>
                                <td>
                                    <ul style={{listStyle:'none'}}>
                                        <li>- Clase 13: Generar Dashboards</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>07 Ética</td>
                                <td>
                                    <ul style={{listStyle:'none'}}>
                                        <li>- Clase 14: Uso ético de datos</li>
                                    </ul>
                                </td>

                            </tr>
                            <tr className={styles.tableRow}>
                                <td>08 Git</td>
                                <td>
                                    <ul style={{listStyle:'none'}}>
                                        <li>- Clase 15: Git para Ciencia de Datos</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>09 Machine Learning</td>
                                <td>
                                    <ul style={{listStyle:'none'}}>
                                        <li>- Clase 16: Introducción a Machine Learning</li>
                                        <li>- Clase 17: Resolviendo problemas prácticos (1)</li>
                                        <li>- Clase 18: Resolviendo problemas prácticos (2)</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>10 Deep Learning</td>
                                <td>
                                    <ul style={{listStyle:'none'}}>
                                        <li>- Clase 19: Introducción a la Redes Neuronales</li>
                                        <li>- Clase 20: Redes Neuronales Convolucionales</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>11 Portafolio</td>
                                <td>
                                    <ul style={{listStyle:'none'}}>
                                        <li>- Clase 21: Crear un portafolio para un Científico de Datos</li>
                                    </ul>
                                </td>
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