import CustomLink from '@/components/CustomLink';
import styles from '@/styles/elearning.module.css'
import Link from 'next/link';

const Hr11 = () => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.container}>
                <h1 className={styles.title}><span className={styles.code}>[HR11]</span>Python</h1>        
                <div className={styles.grid}>
                    
                    {/* Tabla de Tópicos */}
                    <div>
                        <h2 className={styles.platformTitle}>Problems</h2>
                        <table className={styles.table}>
                            <thead>
                            <tr>
                                <th>Code</th>
                                <th>Descripción</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className={styles.code}>PY001</td>
                                <td><CustomLink href='hr11/py001'>Say "Hello, World!" With Python</CustomLink> </td>
                            </tr>
                            <tr>
                                <td className={styles.code}>PY002</td>
                                <td><CustomLink href='hr11/py002'>Python If-Else</CustomLink></td>
                            </tr>
                            <tr>
                                <td className={styles.code}>PY003</td>
                                <td><CustomLink href='hr11/py003'>Arithmetic Operators</CustomLink></td>
                            </tr>
                            <tr>
                                <td className={styles.code}>PY004</td>
                                <td><CustomLink href='hr11/py004'>Python: Division</CustomLink></td>
                            </tr>
                            <tr>
                                <td className={styles.code}>PY005</td>
                                <td><CustomLink href='hr11/py005'>Loops</CustomLink></td>
                            </tr>
                            <tr>
                                <td className={styles.code}>PY006</td>
                                <td>Write a function</td>
                            </tr>
                            <tr>
                                <td className={styles.code}>PY007</td>
                                <td>Print Function</td>
                            </tr>
                            <tr>
                                <td className={styles.code}>PY008</td>
                                <td>List Comprehensions</td>
                            </tr>
                            <tr>
                                <td className={styles.code}>PY009</td>
                                <td>Find the Runner-Up Score!</td>
                            </tr>
                            <tr>
                                <td className={styles.code}>PY010</td>
                                <td>Nested Lists</td>
                            </tr>
                            
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        );
}
export default Hr11;