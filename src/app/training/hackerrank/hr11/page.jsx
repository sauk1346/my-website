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
                                <td><CustomLink href='hr11/py006'>Write a function</CustomLink></td>
                            </tr>
                            <tr>
                                <td className={styles.code}>PY007</td>
                                <td><CustomLink href='hr11/py007'>Print Function</CustomLink></td>
                            </tr>
                            <tr>
                                <td className={styles.code}>PY008</td>
                                <td><CustomLink href='hr11/py008'>List Comprehensions</CustomLink></td>
                            </tr>
                            <tr>
                                <td className={styles.code}>PY009</td>
                                <td><CustomLink href='hr11/py009'>Find the Runner-Up Score!</CustomLink></td>
                            </tr>
                            <tr>
                                <td className={styles.code}>PY010</td>
                                <td><CustomLink href='hr11/py010'>Nested Lists</CustomLink></td>
                            </tr>
                            <tr>
                                <td className={styles.code}>PY011</td>
                                <td><CustomLink href='hr11/py011'>Finding the percentage</CustomLink></td>
                            </tr>
                            <tr>
                                <td className={styles.code}>PY012</td>
                                <td><CustomLink href='hr11/py012'>Lists</CustomLink></td>
                            </tr>
                            <tr>
                                <td className={styles.code}>PY013</td>
                                <td><CustomLink href='hr11/py013'>Tuples</CustomLink></td>
                            </tr>
                            <tr>
                                <td className={styles.code}>PY014</td>
                                <td><CustomLink href='hr11/py014'>sWAP cASE</CustomLink></td>
                            </tr>
                            <tr>
                                <td className={styles.code}>PY015</td>
                                <td><CustomLink href='hr11/py015'>String Split and Join</CustomLink></td>
                            </tr>
                            <tr>
                                <td className={styles.code}>PY016</td>
                                <td><CustomLink href='hr11/py016'>What's Your Name?</CustomLink></td>
                            </tr>
                            <tr>
                                <td className={styles.code}>PY017</td>
                                <td><CustomLink href='hr11/py017'>Mutations</CustomLink></td>
                            </tr>
                            <tr>
                                <td className={styles.code}>PY018</td>
                                <td><CustomLink href='hr11/py018'>Find a String</CustomLink></td>
                            </tr>
                            <tr>
                                <td className={styles.code}>PY019</td>
                                <td><CustomLink href='hr11/py019'>String Validators</CustomLink></td>
                            </tr>
                            <tr>
                                <td className={styles.code}>PY020</td>
                                <td><CustomLink href='hr11/py020'>Text Alignment</CustomLink></td>
                            </tr>
                            <tr>
                                <td className={styles.code}>PY021</td>
                                <td>Text Wrap</td>
                            </tr>
                            <tr>
                                <td className={styles.code}>PY022</td>
                                <td>Designer Door Mat</td>
                            </tr>
                            <tr>
                                <td className={styles.code}>PY023</td>
                                <td>String Formatting</td>
                            </tr>
                            <tr>
                                <td className={styles.code}>PY024</td>
                                <td>Alphabet Rangoli</td>
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