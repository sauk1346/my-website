import styles from '@/styles/elearning.module.css'
import CustomLink from '@/components/CustomLink';

const Ch001 = () => {
    return (
        <div className={styles.container}>
            <h1 style={{marginBottom:'30px'}}>Chinese for HSK 1</h1>
    
            <div className={styles.grid}>
                {/* Tabla de Cursos */}
                <div>
                    <h2 className={styles.platformTitle}>Module 01: Greetings and Numbers</h2>
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
                        <tr className={styles.tableRow}>
                            <td>05</td>
                            <td>谢谢 Xièxie! </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div>
                    <h2 className={styles.platformTitle}>Module 02: Family and school/university</h2>
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
                            <td>她是谁 Tā shì shéi?</td>
                        </tr>
                        <tr className={styles.tableRow}>
                            <td>02</td>
                            <td>我有一只大狗 Wǒ yǒu yī zhī dà gǒu</td>
                        </tr>
                        <tr className={styles.tableRow}>
                            <td>03</td>
                            <td>我的汉语老师 Wǒ de hànyǔ lǎoshī</td>
                        </tr>
                        <tr className={styles.tableRow}>
                            <td>04</td>
                            <td>会说汉语很酷 Huì shuō Hànyǔ hěn kù</td>
                        </tr>
                        <tr className={styles.tableRow}>
                            <td>05</td>
                            <td>他是你的同学吗 Tā shì nǐ de tóngxué ma?</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            
            </div>
        </div>
        );
}
export default Ch001;