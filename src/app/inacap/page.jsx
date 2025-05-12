import React from "react";
import styles from '@/styles/Inacap.module.css'
import Calendar from '@/components/Calendar'
import EventsData from '@/../public/data/calendar25.json'
import CustomLink from "@/components/CustomLink";

const Inacap = () => {
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Malla Curricular</h1>

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
                <td className={styles.code}>TI3V11</td>
                <td><CustomLink href="/inacap/ti3v11">Introducción a la Programación Segura</CustomLink></td>

              </tr>
              <tr>
                <td className={styles.code}>TI3V12</td>
                <td><CustomLink href="/inacap/ti3v12">Fundamentos de Base de Datos</CustomLink></td>
              </tr>
              <tr>
                <td className={styles.code}>TI3V13</td>
                <td><CustomLink href="/inacap/ti3v13">Fundamentos de Hardware y Software</CustomLink></td>
              </tr>
              <tr>
                <td className={styles.code}>MVAE02</td>
                <td>Resolución de Problemas en Álgebra</td>
              </tr>
              <tr>
                <td className={styles.code}>FVFC03</td>
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
                <td className={styles.code}>TI3V21</td>
                <td><CustomLink href="inacap/ti3v21">Programación Orientada a Objeto Seguro</CustomLink></td>
              </tr>
              <tr>
                <td className={styles.code}>TI3V22</td>
                <td><CustomLink href="inacap/ti3v22">Bases de Datos Estructuradas</CustomLink></td>
              </tr>
              <tr>
                <td className={styles.code}>TI3V23</td>
                <td><CustomLink href='inacap/ti3v23'>Metodología de Desarrollo Ágil</CustomLink> </td>
              </tr>
              <tr>
                <td className={styles.code}>TI3V25</td>
                <td><CustomLink href='inacap/ti3v25'>Modelamiento de Soluciones Informáticas</CustomLink></td>
              </tr>
              <tr>
                <td className={styles.code}>AVAN01</td>
                <td><CustomLink href='inacap/avan01'>Administración</CustomLink></td>
              </tr>
              <tr>
                <td className={styles.code}>MVFM01</td>
                <td><CustomLink href='inacap/mvfm01'>Funciones y Matrices</CustomLink></td>
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
                <td className={styles.code}>TI3V31</td>
                <td>Programación Frontend</td>
              </tr>
              <tr>
                <td className={styles.code}>TI3V32</td>
                <td>
                  <CustomLink href="/inacap/ti3v32">Bases de Datos No Estructuradas</CustomLink>
                </td>
              </tr>
              <tr>
                <td className={styles.code}>TI3V34</td>
                <td>
                  <CustomLink href='/inacap/ti3v34'>Fundamentos de Seguridad de la Información</CustomLink>
                </td>
              </tr>
              <tr>
                <td className={styles.code}>TI3V35</td>
                <td>Sistemas Operativos</td>
              </tr>
              <tr>
                <td className={styles.code}>FVE01</td>
                <td>Innovación y Emprendimiento I</td>
              </tr>
              <tr>
                <td className={styles.code}>TILV21</td>
                <td>
                  <CustomLink href='/inacap/tilv21'>(Electivo I) Plan de Pruebas de Software</CustomLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.container}>
        <h1 className={styles.title}>Calendario 2025</h1>
        <Calendar eventos={EventsData}/>
      </div>
    </div>
  );
};

export default Inacap;
