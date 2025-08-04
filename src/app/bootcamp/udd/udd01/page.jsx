import styles from '@/styles/elearning.module.css'
import ExternalLink from '@/components/ui/ExternalLink';
import CustomLink from '@/components/ui/CustomLink';

const Udd01 = () => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.container}>
                <h1 className={styles.title}>Desarrollo Web Fullstack</h1>
        
                <div className={styles.grid}>
                    {/* Tabla de Cursos */}
                    <div>
                        <h2 className={styles.platformTitle}>Proyectos</h2>
                        <table className={styles.table}>
                            <thead>
                            <tr>
                                <th></th>
                                <th>Fecha</th>
                                <th>Proyecto</th>
                                <th>Demo</th>
                                <th>Entrega</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className={styles.tableRow}>
                                <td>01</td>
                                <td>Lun 04, Mar 2024</td>
                                <td><CustomLink href='udd01/proj01'>Algoritmo de Sistema de Costos</CustomLink></td>
                                <td><CustomLink href='udd01/demo01'>Demo 01</CustomLink> </td>
                                <td><ExternalLink href='https://github.com/sauk1346/UDD_C13_Proyecto01'>Entrega 01</ExternalLink></td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>02</td>
                                <td>Lun 15, Abr 2024</td>
                                <td><CustomLink href='udd01/proj02'>Sistema de Votación en JS</CustomLink></td>
                                <td><CustomLink href='udd01/demo02'>Demo 02</CustomLink></td>
                                <td><ExternalLink href='https://github.com/sauk1346/UDD_C13_Proyecto02'>Entrega 02</ExternalLink></td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>03</td>
                                <td>Lun 13, May 2024</td>
                                <td>Landing de Negocio</td>
                                <td><CustomLink href='udd01/demo03'>Demo 03</CustomLink></td>
                                <td><ExternalLink href='https://github.com/sauk1346/UDD_C13_Proyecto03'>Entrega 03</ExternalLink></td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>04</td>
                                <td>Lun 17, Jun 2024</td>
                                <td>Reservas Hoteleras</td>
                                <td><CustomLink href='udd01/demo04'>Demo 04</CustomLink></td>
                                <td><ExternalLink href='https://github.com/sauk1346/UDD_C13_Proyecto04'>Entrega 04</ExternalLink></td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>05</td>
                                <td>Lun 15, Jul 2024</td>
                                <td>Aplicación Web con React</td>
                                <td><CustomLink href='udd01/demo05'>Demo 05</CustomLink></td>
                                <td><ExternalLink href='https://github.com/sauk1346/UDD_C13_Proyecto05'>Entrega 05</ExternalLink></td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>06</td>
                                <td>Mié 14, Ago 2024</td>
                                <td>Aplicación Backend con Autenticación</td>
                                <td><CustomLink href='udd01/demo06'>Demo 06</CustomLink></td>
                                <td><ExternalLink href='https://github.com/sauk1346/UDD_C13_Proyecto06'>Entrega 06</ExternalLink></td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>07</td>
                                <td>Don 09, Sep 2024</td>
                                <td>Aplicación Fullstack de Comercio Electrónico</td>
                                <td></td>
                                <td><ExternalLink href='https://github.com/sauk1346/UDD_C13_Proyecto07'>Entrega 07</ExternalLink></td>
                            </tr>

                            </tbody>
                        </table>
                    </div>

                    <div>
                        <h2 className={styles.platformTitle}>Modulo 01: Fundamentos de Programación</h2>
                        <table className={styles.table}>
                            <thead>
                            <tr>
                                <th></th>
                                <th>Fecha</th>
                                <th>Prework</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className={styles.tableRow}>
                                <td>01</td>
                                <td>Sáb 20, Ene 2024</td>
                                <td>Programación y Paradigmas</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>02</td>
                                <td>Sáb 27, Ene 2024</td>
                                <td>Algoritmia</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>03</td>
                                <td>Sáb 03, Feb 2024</td>
                                <td>Estructuras de Control Repetitivas</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>04</td>
                                <td>Sáb 24, Feb 2024</td>
                                <td>Windows Terminal, Github</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <h2 className={styles.platformTitle}>Modulo 02: Funciones de Javascript</h2>
                        <table className={styles.table}>
                            <thead>
                            <tr>
                                <th></th>
                                <th>Fecha</th>
                                <th>Prework</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className={styles.tableRow}>
                                <td>05</td>
                                <td>Sáb 09, Mar 2024</td>
                                <td>Introducción a Javascript</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>06</td>
                                <td>Sáb 16, Mar 2024</td>
                                <td>Tipo y Uso de Funciones</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>07</td>
                                <td>Sáb 23, Mar 2024</td>
                                <td>Programación Orientada a Objetos</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>08</td>
                                <td>Sáb 06, Abr 2024</td>
                                <td>Programación Funcional</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <h2 className={styles.platformTitle}>Modulo 03: HTML y CSS</h2>
                        <table className={styles.table}>
                            <thead>
                            <tr>
                                <th></th>
                                <th>Fecha</th>
                                <th>Prework</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className={styles.tableRow}>
                                <td>09</td>
                                <td>Sáb 13, Abr 2024</td>
                                <td>Introducción a HTML</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>10</td>
                                <td>Sáb 20, Abr 2024</td>
                                <td>Introducción a CSS</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>11</td>
                                <td>Sáb 27, Abr 2024</td>
                                <td>Diseño Responsivo, Flexbox, Grid, Bootstrap</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>12</td>
                                <td>Sáb 04, May 2024</td>
                                <td>Document Object Model (DOM)</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <h2 className={styles.platformTitle}>Modulo 04: NodeJs </h2>
                        <table className={styles.table}>
                            <thead>
                            <tr>
                                <th></th>
                                <th>Fecha</th>
                                <th>Prework</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className={styles.tableRow}>
                                <td>13</td>
                                <td>Sáb 11, May 2024</td>
                                <td>NodeJs</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>14</td>
                                <td>Sáb 18, May 2024</td>
                                <td>Asincronismo</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>15</td>
                                <td>Sáb 25, May 2024</td>
                                <td>Patrones de Diseño</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>16</td>
                                <td>Sáb 01, Jun 2024</td>
                                <td>Consumo de APIs usando Postman e Insomnia</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <h2 className={styles.platformTitle}>Modulo 05: React </h2>
                        <table className={styles.table}>
                            <thead>
                            <tr>
                                <th></th>
                                <th>Fecha</th>
                                <th>Prework</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className={styles.tableRow}>
                                <td>17</td>
                                <td>Sáb 08, Jun 2024</td>
                                <td>Introducción a React</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>18</td>
                                <td>Sáb 15, Jun 2024</td>
                                <td>Librería React Router</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>19</td>
                                <td>Sáb 22, Jun 2024</td>
                                <td>Hooks - 1ra parte</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>20</td>
                                <td>Sáb 06, Jul 2024</td>
                                <td>Hooks - 2da parte</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <h2 className={styles.platformTitle}>Modulo 06: MongoDB </h2>
                        <table className={styles.table}>
                            <thead>
                            <tr>
                                <th></th>
                                <th>Fecha</th>
                                <th>Prework</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className={styles.tableRow}>
                                <td>21</td>
                                <td>Sáb 20, Jul 2024</td>
                                <td>Bases de Datos</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>22</td>
                                <td>Mié 24, Jul 2024</td>
                                <td>MongoDB a NodeJs</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>23</td>
                                <td>Sáb 27, Jul 2024</td>
                                <td>Autenticación</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>24</td>
                                <td>Mié 07, Ago 2024</td>
                                <td>Mundo laboral en el ámbito de desarrollo de software</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <h2 className={styles.platformTitle}>Modulo 07: Front-End y Back-End</h2>
                        <table className={styles.table}>
                            <thead>
                            <tr>
                                <th></th>
                                <th>Fecha</th>
                                <th>Prework</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className={styles.tableRow}>
                                <td>25</td>
                                <td>Sáb 10, Ago 2024</td>
                                <td>React: Context API</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>26</td>
                                <td>Sáb 17, Ago 2024</td>
                                <td>React: Integración con Backend (CRUD)</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>27</td>
                                <td>Sáb 24, Ago 2024</td>
                                <td>React: Autenticación y autorización</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>28</td>
                                <td>Sáb 31, Ago 2024</td>
                                <td>Mercado Laboral</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
        );
}
export default Udd01;