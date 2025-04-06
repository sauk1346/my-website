import React from "react";
import Link from "next/link";
import styles from '../../styles/Inacap.module.css'
import Calendar from '../../components/Calendar'

const Inacap = () => {
  
  const misEventos = [
    {
      id: 1,
      fecha: '2025-3-26',
      titulo: '[TI3V32] Evaluación 01',
      description: 'Bases de Datos No Relacionales'
    },
    {
      id: 2,
      fecha: '2025-4-23',
      titulo: '[TI3V32] Evaluación 02',
      description: 'Bases de Datos No Relacionales'

    },
    {
      id: 3,
      fecha: '2025-5-6',
      titulo: '[TI3V32] Evaluación 03',
      description: 'Bases de Datos No Relacionales'

    },
    {
      id: 4,
      fecha: '2025-3-24',
      titulo: '[TI3V34] Evaluación 01',
      description: 'Fundamentos de Seguridad de la Información'

    },
    {
      id: 5,
      fecha: '2025-4-9',
      titulo: '[TI3V34] Informe 01',
      description: 'Fundamentos de Seguridad de la Información'
    },
    {
      id: 6,
      fecha: '2025-5-7',
      titulo: '[TI3V34] Informe 02',
      description: 'Fundamentos de Seguridad de la Información'
    },
    {
      id: 7,
      fecha: '2025-5-12',
      titulo: '[TI3V34] Examen',
      description: 'Fundamentos de Seguridad de la Información'
    },
    {
      id: 8,
      fecha: '2025-3-14',
      titulo: '[TI3V34] Control 01',
      description: 'Fundamentos de Seguridad de la Información'
    },
    {
      id: 9,
      fecha: '2025-3-21',
      titulo: '[TI3V34] Control 02',
      description: 'Fundamentos de Seguridad de la Información'
    },
    {
      id: 10,
      fecha: '2025-3-28',
      titulo: '[TI3V34] Control 03',
      description: 'Fundamentos de Seguridad de la Información'
    },
    {
      id: 11,
      fecha: '2025-4-4',
      titulo: '[TI3V34] Control 04',
      description: 'Fundamentos de Seguridad de la Información'
    },
    {
      id: 12,
      fecha: '2025-4-11',
      titulo: '[TI3V34] Control 05',
      description: 'Fundamentos de Seguridad de la Información'
    },
    {
      id: 13,
      fecha: '2025-4-18',
      titulo: '[TI3V34] Control 06',
      description: 'Fundamentos de Seguridad de la Información'
    },
    {
      id: 14,
      fecha: '2025-4-25',
      titulo: '[TI3V34] Control 07',
      description: 'Fundamentos de Seguridad de la Información'
    },
    {
      id: 15,
      fecha: '2025-5-2',
      titulo: '[TI3V34] Control 08',
      description: 'Fundamentos de Seguridad de la Información'
    },
    {
      id: 16,
      fecha: '2025-4-9',
      titulo: '[TILV21] Evaluación 01',
      description: 'Plan de Pruebas de Software'
    },
    {
      id: 17,
      fecha: '2025-4-21',
      titulo: '[TILV21] Informe 01',
      description: 'Plan de Pruebas de Software'
    },
    {
      id: 18,
      fecha: '2025-5-5',
      titulo: '[TILV21] Informe 02',
      description: 'Plan de Pruebas de Software'
    },
    {
      id: 19,
      fecha: '2025-3-21',
      titulo: '[TILV21] Control 01',
      description: 'Plan de Pruebas de Software'
    },
    {
      id: 20,
      fecha: '2025-3-28',
      titulo: '[TILV21] Control 02',
      description: 'Plan de Pruebas de Software'
    },
    {
      id: 21,
      fecha: '2025-4-4',
      titulo: '[TILV21] Control 03',
      description: 'Plan de Pruebas de Software'
    },
    {
      id: 22,
      fecha: '2025-4-11',
      titulo: '[TILV21] Control 04',
      description: 'Plan de Pruebas de Software'
    },
    {
      id: 23,
      fecha: '2025-4-18',
      titulo: '[TILV21] Control 05',
      description: 'Plan de Pruebas de Software'
    },
    {
      id: 24,
      fecha: '2025-4-25',
      titulo: '[TILV21] Control 06',
      description: 'Plan de Pruebas de Software'
    },
    {
      id: 25,
      fecha: '2025-5-2',
      titulo: '[TILV21] Control 07',
      description: 'Plan de Pruebas de Software'
    },
    {
      id: 26,
      fecha: '2025-5-9',
      titulo: '[TILV21] Control 08',
      description: 'Plan de Pruebas de Software'
    },

  ];

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
                <td>Introducción a la Programación Segura</td>
              </tr>
              <tr>
                <td>TI3V12</td>
                <td>Fundamentos de Base de Datos</td>
              </tr>
              <tr>
                <td>TI3V13</td>
                <td>Fundamentos de Hardware y Software</td>
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
                <td>Programación Orientada a Objeto Seguro</td>
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
      <Calendar eventos={misEventos}/>
    </div>
  );
};

export default Inacap;
