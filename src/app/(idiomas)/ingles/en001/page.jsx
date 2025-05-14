import CustomLink from '@/components/CustomLink';
import styles from '@/styles/elearning.module.css'
import Link from 'next/link';

const En001 = () => {
    return (
        <div className={styles.container}>
            <h1 style={{marginBottom:'30px'}}>The Pronunciation of American English</h1>
    
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
                            <td><CustomLink href='en001/module01'>Consonant Directions, Voiced and Voiceless, Shadowing a Conversation</CustomLink></td>
                        </tr>
                        <tr className={styles.tableRow}>
                            <td>02</td>
                            <td><CustomLink href='en001/module02'>Consonants Sounds that Pop, Consonants Sounds that Hiss, Confusing Consonants Pairs</CustomLink></td>
                        </tr>
                        <tr className={styles.tableRow}>
                            <td>03</td>
                            <td><CustomLink href='en001/module03'>Consonant Sounds that Hum, Consonant Sounds that Flow, Confusing Consonant Pairs 2</CustomLink></td>
                        </tr>
                        <tr className={styles.tableRow}>
                            <td>04</td>
                            <td>Module 04</td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            
            </div>
        </div>
        );
}
export default En001;