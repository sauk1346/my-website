import styles from '@/styles/elearning.module.css'
import CustomLink from '@/components/CustomLink';

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
                            <td><CustomLink href='ch001/lesson01'>你好 Nǐ hǎo!</CustomLink></td>
                        </tr>
                        <tr className={styles.tableRow}>
                            <td>02</td>
                            <td><CustomLink href='ch001/lesson02'>你是哪国人? Nǐ shì nǎ guó rén?</CustomLink></td>
                        </tr>
                        <tr className={styles.tableRow}>
                            <td>03</td>
                            <td><CustomLink href='ch001/lesson03'>你多大了? Nǐ duō dà le?</CustomLink></td>
                        </tr>
                        <tr className={styles.tableRow}>
                            <td>04</td>
                            <td>我的电话号码是... Wǒ de diànhuà hàomǎ shì... </td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            
            </div>
        </div>
        );
}
export default Ch001;