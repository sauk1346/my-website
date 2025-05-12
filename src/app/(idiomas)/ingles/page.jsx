import styles from '@/styles/elearning.module.css'
import Link from 'next/link';

const Ingles = () => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.container}>
                <h1 className={styles.title}>Inglés</h1>
        
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
                                <td className={styles.code}>EN001</td>
                                <td>
                                <Link href='ingles/en001' className={styles.link}>The Pronunciation of American English</Link>
                                </td>
                                <td>Coursera</td>
                                <td>University of California, Irvine</td>
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
                                <td>02</td>
                                <td>
                                    Gramática
                                </td>
                            </tr>
                            <tr>
                                <td>03</td>
                                <td>Partículas</td>
                            </tr>
                            <tr>
                                <td>04</td>
                                <td>Verbos</td>
                            </tr>
                            <tr>
                                <td>05</td>
                                <td>Phrasal Verbs</td>
                            </tr>
                            <tr>
                                <td>06</td>
                                <td>Adjetivos</td>
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
export default Ingles;