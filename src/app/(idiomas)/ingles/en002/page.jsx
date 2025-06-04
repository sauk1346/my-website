import CustomLink from '@/components/ui/CustomLink';
import styles from '@/styles/elearning.module.css'
import Link from 'next/link';

const En002 = () => {
    return (
        <div className={styles.container}>
            <h1 style={{marginBottom:'30px'}}>Vowels of American English Pronunciation</h1>
    
            <div className={styles.grid}>
                {/* Tabla de Cursos */}
                <div>
                    <h2 className={styles.platformTitle}>Modules</h2>
                    <table className={styles.table}>
                        <thead>
                        <tr>
                            <th>Modules</th>
                            <th>Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className={styles.tableRow}>
                            <td>01</td>
                            <td></td>
                        </tr>
                        <tr className={styles.tableRow}>
                            <td>02</td>
                            <td></td>
                        </tr>
                        <tr className={styles.tableRow}>
                            <td>03</td>
                            <td></td>
                        </tr>
                        <tr className={styles.tableRow}>
                            <td>04</td>
                            <td></td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            
            </div>
        </div>
        );
}
export default En002;