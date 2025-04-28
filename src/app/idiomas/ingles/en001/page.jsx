import styles from '@/styles/elearning.module.css'
import Link from 'next/link';

const En001 = () => {
    return (
        <div className={styles.container}>
            <h1 style={{marginBottom:'30px'}}>The Pronunciation of American English</h1>
    
            <div className={styles.grid}>
                {/* Tabla de Cursos */}
                <div>
                    <h2 className={styles.platformTitle}>Module 01</h2>
                    <table className={styles.table}>
                        <thead>
                        <tr>
                            <th>Lesson</th>
                            <th>Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className={styles.tableRow}>
                            <td>01</td>
                            <td>
                                <Link href='en001/lesson01' className={styles.link}>Consonant Pretest</Link>    
                            </td>
                        </tr>
                        <tr className={styles.tableRow}>
                            <td>02</td>
                            <td>Consonant Overview</td>
                        </tr>
                        <tr className={styles.tableRow}>
                            <td>03</td>
                            <td>Voiced and Voiceless Sounds</td>
                        </tr>
                        <tr className={styles.tableRow}>
                            <td>04</td>
                            <td>Shadowing a Conversation</td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            
            </div>
        </div>
        );
}
export default En001;