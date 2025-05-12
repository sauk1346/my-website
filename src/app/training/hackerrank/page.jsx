import CustomLink from '@/components/CustomLink';
import styles from '@/styles/elearning.module.css'
import Link from 'next/link';

const HackerRank = () => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.container}>
                <h1 className={styles.title}>HackerRank</h1>        
                <div className={styles.grid}>
                    
                    {/* Tabla de Tópicos */}
                    <div>
                        <h2 className={styles.platformTitle}>Topics</h2>
                        <table className={styles.table}>
                            <thead>
                            <tr>
                                <th>Sigla</th>
                                <th>Descripción</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className={styles.code}>HR01</td>
                                <td style={{display:'flex', alignItems:'center'}}>
                                    <img src='/logos/hackerrank/hr01.svg' style={{marginRight:'8px'}}/> Algorithms
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.code}>HR02</td>
                                <td style={{display:'flex', alignItems:'center'}}>
                                    <img src='/logos/hackerrank/hr02.svg' style={{marginRight:'8px'}}/> Artificial Intelligence
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.code}>HR03</td>
                                <td style={{display:'flex', alignItems:'center'}}>
                                    <img src='/logos/hackerrank/hr03.svg' style={{marginRight:'8px'}}/> C
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.code}>HR04</td>
                                <td style={{display:'flex', alignItems:'center'}}>
                                    <img src='/logos/hackerrank/hr04.svg' style={{marginRight:'8px'}}/> C++
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.code}>HR05</td>
                                <td style={{display:'flex', alignItems:'center'}}>
                                    <img src='/logos/hackerrank/hr05.svg' style={{marginRight:'8px'}}/> Data Structures
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.code}>HR06</td>
                                <td style={{display:'flex', alignItems:'center'}}>
                                    <img src='/logos/hackerrank/hr06.svg' style={{marginRight:'8px'}}/> Databases
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.code}>HR07</td>
                                <td style={{display:'flex', alignItems:'center'}}>
                                    <img src='/logos/hackerrank/hr07.svg' style={{marginRight:'8px'}}/> Functional Programming
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.code}>HR08</td>
                                <td style={{display:'flex', alignItems:'center'}}>
                                    <img src='/logos/hackerrank/hr08.svg' style={{marginRight:'8px'}}/> Java
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.code}>HR09</td>
                                <td style={{display:'flex', alignItems:'center'}}>
                                    <img src='/logos/hackerrank/hr09.svg' style={{marginRight:'8px'}}/> Linux Shell
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.code}>HR10</td>
                                <td style={{display:'flex', alignItems:'center'}}>
                                    <img src='/logos/hackerrank/hr10.svg' style={{marginRight:'8px'}}/> Mathematics
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.code}>HR11</td>
                                <td style={{display:'flex', alignItems:'center'}}>
                                    <CustomLink href='hackerrank/hr11'><img src='/logos/hackerrank/hr11.svg' style={{marginRight:'8px',verticalAlign:'middle'}}/> Python</CustomLink>
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.code}>HR12</td>
                                <td style={{display:'flex', alignItems:'center'}}>
                                    <img src='/logos/hackerrank/hr12.svg' style={{marginRight:'8px'}}/> React
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.code}>HR13</td>
                                <td style={{display:'flex', alignItems:'center'}}>
                                    <img src='/logos/hackerrank/hr13.svg' style={{marginRight:'8px'}}/> Regex
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.code}>HR14</td>
                                <td style={{display:'flex', alignItems:'center'}}>
                                    <img src='/logos/hackerrank/hr14.svg' style={{marginRight:'8px'}}/> Ruby
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.code}>HR15</td>
                                <td style={{display:'flex', alignItems:'center'}}>
                                    <img src='/logos/hackerrank/hr15.svg' style={{marginRight:'8px'}}/> SQL
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        );
}
export default HackerRank;