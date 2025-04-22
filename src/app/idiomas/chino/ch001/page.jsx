import styles from '@/styles/elearning.module.css'
import Link from 'next/link';

const Ch001 = () => {
    return (
        <div className={styles.container}>
            <h1 style={{marginBottom:'30px'}}>Chinese for HSK 1</h1>
    
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
                                <Link href='ch001/lesson01' className={styles.link}>你好 Nǐ hǎo!</Link>    
                            </td>
                        </tr>
                        <tr className={styles.tableRow}>
                            <td>02</td>
                            <td>你是哪国人? Nǐ shì nǎ guó rén?</td>
                        </tr>
                        <tr className={styles.tableRow}>
                            <td>03</td>
                            <td>你多大了? Nǐ duō dà le? </td>
                        </tr>
                        <tr className={styles.tableRow}>
                            <td>04</td>
                            <td>我的电话号码是... Wǒ de diànhuà hàomǎ shì... </td>
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
                            <td>Hanzi</td>
                        </tr>
                        <tr>
                            <td>04</td>
                            <td>Pinyin</td>
                        </tr>
                        <tr>
                            <td>05</td>
                            <td>Partículas</td>
                        </tr>
                        <tr>
                            <td>06</td>
                            <td>Verbos</td>
                        </tr>
                        <tr>
                            <td>07</td>
                            <td>Adjetivos</td>
                        </tr>
                        <tr>
                            <td>08</td>
                            <td>Vocabulario</td>
                        </tr>
                        <tr>
                            <td>09</td>
                            <td>Frases</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Oraciones</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        );
}
export default Ch001;