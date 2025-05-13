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
                                <td className={styles.code}>LC0003</td>
                                <td>Longest Substring Without Repeating Characters</td>
                                <td>Hash Table, String, Sliding Window</td>
                            </tr>
                            <tr>
                                <td className={styles.code}>LC0004</td>
                                <td>Median of Two Sorted Arrays</td>
                                <td>Array, Binary Search, Divide and Conquer</td>
                            </tr>
                            <tr>
                                <td className={styles.code}>LC0005</td>
                                <td>Longest Palindromic Substring</td>
                                <td>Two Pointers, String, Dynamic Programming</td>
                            </tr>
                            <tr>
                                <td className={styles.code}>LC0006</td>
                                <td>Zigzag Conversion</td>
                                <td>String</td>
                            </tr>
                            <tr>
                                <td className={styles.code}>LC0007</td>
                                <td>Reverse Integer</td>
                                <td>Math</td>
                            </tr>
                            <tr>
                                <td className={styles.code}>LC0008</td>
                                <td>String to Integer (atoi)</td>
                                <td>String</td>
                            </tr>
                            <tr>
                                <td className={styles.code}>LC0009</td>
                                <td>Palindrome Number</td>
                                <td>Math</td>
                            </tr>
                            <tr>
                                <td className={styles.code}>LC0010</td>
                                <td>Regular Expression Matching</td>
                                <td>String, Dynamic Programming, Recursion</td>
                            </tr>
                            <tr>
                                <td className={styles.code}>LC2094</td>
                                <td><CustomLink href='leetcode/lc2094'>Finding 3-Digit Even Numbers</CustomLink></td>
                                <td>Array, Hash Table, Sorting, Enumeration</td>
                            </tr>
                            <tr>
                                <td className={styles.code}>LC3335</td>
                                <td><CustomLink href='leetcode/lc3335'>Total Characters in String After Transformations I</CustomLink></td>
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