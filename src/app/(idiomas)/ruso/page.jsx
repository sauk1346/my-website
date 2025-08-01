import styles from '@/shared/elearning.module.css'

const Ruso = () => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.container}>
                <h1 className={styles.title}>Ruso</h1>
                <p>En construcción...</p>
        
                <div className={styles.grid}>
                    {/* Tabla de Cursos */}
                    <div>
                        <h2 className={styles.platformTitle}>Cursos</h2>
                        <table className={styles.table}>
                            <thead>
                            <tr>
                                <th>Sigla</th>
                                <th>Nombre</th>
                                <th>Plataforma</th>
                                <th>Profesor</th>
                                <th>Certificado</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className={styles.tableRow}>
                                <td className={styles.code}>RU001</td>
                                <td>
                                
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                
                    {/* Tabla de Tópicos */}
                    <div>
                        <h2 className={styles.platformTitle}>Tópicos</h2>
                        <table className={styles.table}>
                            <thead>
                            <tr>
                                <th>Item</th>
                                <th>Descripción</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td >01</td>
                                <td>
                                IPA
                                </td>
                            </tr>
                            <tr>
                                <td >02</td>
                                <td>
                                Alfabeto Cirílico
                                </td>
                            </tr>
                            <tr>
                                <td>03</td>
                                <td>
                                    Gramática
                                </td>
                            </tr>
                            <tr>
                                <td>04</td>
                                <td>Partículas</td>
                            </tr>
                            <tr>
                                <td>05</td>
                                <td>Verbos</td>
                            </tr>
                            <tr>
                                <td>06</td>
                                <td>Adjectivos</td>
                            </tr>
                            <tr>
                                <td>07</td>
                                <td>Vocabulario</td>
                            </tr>
                            <tr>
                                <td>08</td>
                                <td>Frases</td>
                            </tr>
                            <tr>
                                <td>09</td>
                                <td>Oraciones</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        );
}
export default Ruso;