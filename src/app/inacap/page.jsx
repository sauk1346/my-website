import React from "react";
import Link from "next/link";
import styles from '@/styles/Inacap.module.css'
import Calendar from '@/components/Calendar'
import EventsData from '@/../public/data/calendar25.json'

const Inacap = () => {
  
  return (
    <div className={styles.container}>
      <h1 style={{marginBottom:'30px'}}>Malla Curricular</h1>

      <div className={styles.grid}>
        {/* Tabla del semestre 1 */}
        <div>
          <h2 className={styles.semesterTitle}>1er Semestre 2024</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Sigla</th>
                <th>Asignatura</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.tableRow}>
                <td>TI3V11</td>
                <td>
                  <Link href="/inacap/ti3v11" className={styles.link}>Introducción a la Programación Segura</Link>
                </td>

              </tr>
              <tr>
                <td>TI3V12</td>
                <td>
                  <Link href="/inacap/ti3v12" className={styles.link}>Fundamentos de Base de Datos</Link>
                </td>
              </tr>
              <tr>
                <td>TI3V13</td>
                <td>
                  <Link href="/inacap/ti3v13" className={styles.link}>Fundamentos de Hardware y Software</Link>
                </td>
              </tr>
              <tr>
                <td>MVAE02</td>
                <td>Resolución de Problemas en Álgebra</td>
              </tr>
              <tr>
                <td>FVFC03</td>
                <td>Formación Ciudadana</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tabla del semestre 2 */}
        <div>
          <h2 className={styles.semesterTitle}>2do Semestre 2024</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Sigla</th>
                <th>Asignatura</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>TI3V21</td>
                <td>
                  <Link href="/inacap/ti3v21" className={styles.link}>Programación Orientada a Objeto Seguro</Link>
                </td>
              </tr>
              <tr>
                <td>TI3V22</td>
                <td>Bases de Datos Estructuradas</td>
              </tr>
              <tr>
                <td>TI3V23</td>
                <td>Metodología de Desarrollo Ágil</td>
              </tr>
              <tr>
                <td>TI3V25</td>
                <td>Modelamiento de Soluciones Informáticas</td>
              </tr>
              <tr>
                <td>AVAN01</td>
                <td>Administración</td>
              </tr>
              <tr>
                <td>MVFM01</td>
                <td>Funciones y Matrices</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tabla del semestre 3 */}
        <div>
          <h2 className={styles.semesterTitle}>3er Semestre 2025</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Sigla</th>
                <th>Asignatura</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>TI3V31</td>
                <td>Programación Frontend</td>
              </tr>
              <tr>
                <td>TI3V32</td>
                <td>
                  <Link href="/inacap/ti3v32" className={styles.link}>
                    Bases de Datos No Estructuradas
                  </Link>
                </td>
              </tr>
              <tr>
                <td>TI3V34</td>
                <td>
                  <Link href='/inacap/ti3v34' className={styles.link}>
                  Fundamentos de Seguridad de la Información
                  </Link>
                </td>
              </tr>
              <tr>
                <td>TI3V35</td>
                <td>Sistemas Operativos</td>
              </tr>
              <tr>
                <td>FVE01</td>
                <td>Innovación y Emprendimiento I</td>
              </tr>
              <tr>
                <td>TILV21</td>
                <td>
                  <Link href='/inacap/tilv21' className={styles.link}>
                    (Electivo I) Plan de Pruebas de Software
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <h1 style={{marginTop:'60px'}}>Calendario 2025</h1>
      <Calendar eventos={EventsData}/>
    </div>
  );
};

export default Inacap;
