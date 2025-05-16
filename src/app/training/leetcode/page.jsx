import styles from '@/styles/elearning.module.css'
import CustomLink from '@/components/CustomLink';

const LeetCode = () => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.container}>
                <h1 className={styles.title}>LeetCode</h1>        
                <div className={styles.grid}>
                    
                    {/* Tabla de Tópicos */}
                    <div>
                        <h2 className={styles.platformTitle}>Problems</h2>
                        <table className={styles.table}>
                            <thead>
                            <tr>
                                <th>Code</th>
                                <th>Description</th>
                                <th>Topics</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className={styles.code}>LC0001</td>
                                <td><CustomLink href='leetcode/lc0001'>Two Sum</CustomLink></td>
                                <td>Array, Hash Table</td>
                            </tr>
                            <tr>
                                <td className={styles.code}>LC0002</td>
                                <td><CustomLink href='leetcode/lc0002'>Add Two Numbers</CustomLink></td>
                                <td>Linked List, Math, Recursion</td>
                            </tr>
                            <tr>
                                <td className={styles.code}>LC0009</td>
                                <td><CustomLink href='leetcode/lc0009'>Palindrome Number</CustomLink></td>
                                <td>Math</td>
                            </tr>
                            <tr>
                                <td className={styles.code}>LC2094</td>
                                <td><CustomLink href='leetcode/lc2094'>Finding 3-Digit Even Numbers</CustomLink></td>
                                <td>Array, Hash Table, Sorting, Enumeration</td>
                            </tr>
                            <tr>
                                <td className={styles.code}>LC2900</td>
                                <td><CustomLink href='leetcode/lc2900'>Longest Unequal Adjacent Groups Subsequence I</CustomLink></td>
                                <td>Array, String, Dynamic Programming, Greedy</td>
                            </tr>
                            <tr>
                                <td className={styles.code}>LC3335</td>
                                <td><CustomLink href='leetcode/lc3335'>Total Characters in String After Transformations I</CustomLink></td>
                                <td>Hash Table, Math, String, Dynamic Programming, Counting</td>
                            </tr>
                            <tr>
                                <td className={styles.code}>LC3337</td>
                                <td><CustomLink href='leetcode/lc3337'>Total Characters in String After Transformations II</CustomLink></td>
                                <td>Hash Table, Math, String, Dynamic Programming, Counting</td>
                            </tr>
                            
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        );
}
export default LeetCode;