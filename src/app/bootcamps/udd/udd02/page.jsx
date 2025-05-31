import styles from '@/styles/elearning.module.css'
import ExternalLink from '@/components/ui/ExternalLink';

const Udd02 = () => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.container}>
                <h1 className={styles.title}>Ciencia de Datos e Inteligencia Artificial</h1>
        
                <div className={styles.grid}>
                    {/* Tabla de Cursos */}
                    <div>
                        <h2 className={styles.platformTitle}>Proyectos</h2>
                        <table className={styles.table}>
                            <thead>
                            <tr>
                                <th></th>
                                <th>Fecha</th>
                                <th>Proyecto</th>
                                <th>Entrega</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className={styles.tableRow}>
                                <td>01</td>
                                <td>Lun 15, Abr 2024</td>
                                <td>Python para Ciencia de Datos</td>
                                <td>Entrega 01</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>02</td>
                                <td>Lun 13, May 2024</td>
                                <td>Limpieza y Procesado de Datos</td>
                                <td>Entrega 02</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>03</td>
                                <td>Lun 10, Jun 204</td>
                                <td>Modelamiento supervisado en Machine Learning</td>
                                <td>Entrega 03</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>04</td>
                                <td>Lun 08, Jul 2024</td>
                                <td>Modelado no supervisado en Machine Learning</td>
                                <td>Entrega 04</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>05</td>
                                <td>Lun 05, Ago 2024</td>
                                <td>Aprendizaje profundo con redes neuronales</td>
                                <td>Entrega 05</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>06</td>
                                <td>Lun 02, Sep 2024</td>
                                <td>Procesamiento de Lenguaje Natural</td>
                                <td>Entrega 06</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>07</td>
                                <td>Lun 14, Oct 2024</td>
                                <td>Técnicas avanzadas para Ciencia de Datos y empleabilidad</td>
                                <td>Entrega 07</td>
                            </tr>

                            </tbody>
                        </table>
                    </div>

                    <div>
                        <h2 className={styles.platformTitle}>Modulo 01: Fundamentos de Ciencia de Datos </h2>
                        <table className={styles.table}>
                            <thead>
                            <tr>
                                <th></th>
                                <th>Fecha</th>
                                <th>Prework</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className={styles.tableRow}>
                                <td>01</td>
                                <td>Sáb 09, Mar 2024</td>
                                <td>Programación en Python</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>02</td>
                                <td>Sáb 16, Mar 2024</td>
                                <td>Librerías Numpy y Pandas</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>03</td>
                                <td>Sáb 23, Mar 2024</td>
                                <td>Base de datos Relacionales y No Relacionales</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>04</td>
                                <td>Sáb 06, Abr 2024</td>
                                <td>Visualización de Datos</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <h2 className={styles.platformTitle}>Modulo 02: Análisis de Datos</h2>
                        <table className={styles.table}>
                            <thead>
                            <tr>
                                <th></th>
                                <th>Fecha</th>
                                <th>Prework</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className={styles.tableRow}>
                                <td>05</td>
                                <td>Sáb 13, Abr 2024</td>
                                <td>Análisis Exploratorio de Datos</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>06</td>
                                <td>Vie 26, Abr 2024</td>
                                <td>Limpieza de Datos</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>07</td>
                                <td>Sáb 27, Abr 2024</td>
                                <td>Preprocesado de Datos</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>08</td>
                                <td>Sáb 04, May 2024</td>
                                <td>Reducción de Dimensiones</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <h2 className={styles.platformTitle}>Modulo 03: Modelado Supervisado</h2>
                        <table className={styles.table}>
                            <thead>
                            <tr>
                                <th></th>
                                <th>Fecha</th>
                                <th>Prework</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className={styles.tableRow}>
                                <td>09</td>
                                <td>Jue 16, May 2024</td>
                                <td>Fundamentos de Modelos de Regresión</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>10</td>
                                <td>Sáb 18, May 2024</td>
                                <td>Aplicación de Modelos de Regresión</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>11</td>
                                <td>Sáb 25, May 2024</td>
                                <td>Fundamentos de Modelos de Clasificación</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>12</td>
                                <td>Sáb 01, Jun 2024</td>
                                <td>Aplicación de Modelos de Clasificación</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <h2 className={styles.platformTitle}>Modulo 04: Modelado No Supervisado</h2>
                        <table className={styles.table}>
                            <thead>
                            <tr>
                                <th></th>
                                <th>Fecha</th>
                                <th>Prework</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className={styles.tableRow}>
                                <td>13</td>
                                <td>Sáb 08, Jun 2024</td>
                                <td>Fundamentos de Clustering</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>14</td>
                                <td>Sáb 15, Jun 2024</td>
                                <td>Técnicas de Clustering</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>15</td>
                                <td>Sáb 22, Jun 2024</td>
                                <td>Optimización de Modelos de Clustering</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>16</td>
                                <td>Jue 25, Jun 2024</td>
                                <td>Perfilamiento</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <h2 className={styles.platformTitle}>Modulo 05: Aprendizaje Profundo</h2>
                        <table className={styles.table}>
                            <thead>
                            <tr>
                                <th></th>
                                <th>Fecha</th>
                                <th>Prework</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className={styles.tableRow}>
                                <td>17</td>
                                <td>Sáb 06, Jul 2024</td>
                                <td>Fundamentos de Redes Neuronales</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>18</td>
                                <td>Sáb 13, Jul 2024</td>
                                <td>Redes Neuronales alimentadas hacia adelante</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>19</td>
                                <td>Sáb 20, Jul 2024</td>
                                <td>Redes Neuronales Convolucionales</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>20</td>
                                <td>Sáb 27, Jul 2024</td>
                                <td>Redes Neuronales Recurrentes</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <h2 className={styles.platformTitle}>Modulo 06: Procesamiento de Lenguaje Natural</h2>
                        <table className={styles.table}>
                            <thead>
                            <tr>
                                <th></th>
                                <th>Fecha</th>
                                <th>Prework</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className={styles.tableRow}>
                                <td>21</td>
                                <td>Sáb 03, Ago 2024</td>
                                <td>Procesado de texto</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>22</td>
                                <td>Sáb 10, Ago 2024</td>
                                <td>Word Embeddings</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>23</td>
                                <td>Sáb 17, Ago 2024</td>
                                <td>Análisis de Sentimiento</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>24</td>
                                <td>Sáb 24, Ago 2024</td>
                                <td>Vectorización</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <h2 className={styles.platformTitle}>Modulo 07: Técnicas Avanzadas y Empleabilidad</h2>
                        <table className={styles.table}>
                            <thead>
                            <tr>
                                <th></th>
                                <th>Fecha</th>
                                <th>Prework</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className={styles.tableRow}>
                                <td>25</td>
                                <td>Sáb 31, Ago 2024</td>
                                <td>Tuning</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>26</td>
                                <td>Sáb 07, Sep 2024</td>
                                <td>Ensambles</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>27</td>
                                <td>Sáb 14, Sep 2024</td>
                                <td>Implementación de modelo en la industria</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>28</td>
                                <td>Sáb 28, Sep 2024</td>
                                <td>Story telling y presentación a equipos de trabajo</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
        );
}
export default Udd02;