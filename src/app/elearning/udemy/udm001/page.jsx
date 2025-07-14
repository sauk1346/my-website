import styles from '@/styles/elearning.module.css'
import CustomLink from '@/components/ui/CustomLink';

const Udm001 = () => {
    return (
        <div className={styles.pageContainer}>    
            <div className={styles.container}>
                <h1 className={styles.title}>UDM001</h1>
        
                <div className={styles.grid}>
                    {/* Tabla de Cursos */}
                    <div>
                        <h2 className={styles.platformTitle}>Secciones</h2>
                        <table className={styles.table}>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Descripción</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className={styles.tableRow}>
                                <td >01</td>
                                <td><CustomLink href="udm001/day001">Variables</CustomLink></td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>02</td>
                                <td>Data Types and String Manipulation</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>03</td>
                                <td>Control Flow and Logical Operators</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>04</td>
                                <td>Randomisation and Python Lists</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>05</td>
                                <td>Loops</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>06</td>
                                <td>Functions and Karel</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>07</td>
                                <td>Hangman</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>08</td>
                                <td>Function Parameters and Caesar Cipher</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>09</td>
                                <td>Dictionaries, Nesting and the Secret Auction</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>10</td>
                                <td>Functions with Outputs</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                
                </div>
            </div>
        </div>
        );
}
export default Udm001;