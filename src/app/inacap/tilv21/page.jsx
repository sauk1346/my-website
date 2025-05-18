'use client'

import React, { useState } from 'react';
import { Calendar, Book, CheckSquare, User, Grid3x3 } from 'lucide-react';
import CustomLink from '@/components/CustomLink';
import ExternalLink from '@/components/ExternalLink';
import styles from '@/styles/Asignature.module.css';

const Tilv21 = () => {
  const [activeTab, setActiveTab] = useState('general');
  
  const professorData = {
    name: "Eduardo Andrés Barría Gallardo",
    email: "eduardo.barria03@inacapmail.cl"
  };
  
  const unitsData = [
    { unit: '1', description: 'Introducción y Fundamentos de Testing de Software' },
    { unit: '2', description: 'Técnicas de Testing' },
    { unit: '3', description: 'Gestión de Defectos, Combinación de Valores de Prueba y Exploración' },
  ];
  
  const evaluationsData = [
    { 
      evaluationNumber: 1,
      date: 'Mié 09, Abr 2025',
      weighting: '20% * 75%', 
      description: <CustomLink href='tilv21/eval01'>Evaluación 01</CustomLink>, 
      quickGuide: ''
    },
    { 
      evaluationNumber: 2,
      date: 'Mié 30, Abr 2025', 
      weighting: '30% * 75%', 
      description: <ExternalLink href='/inacap/tilv21/docs/informe01.pdf'>Informe 01</ExternalLink>, 
      quickGuide: '' 
    },
    {
      evaluationNumber: 3, 
      date: 'Jue 08, May 2025',
      weighting: '35% * 75%',
      description: <ExternalLink href='/inacap/tilv21/docs/informe02.pdf'>Informe 02</ExternalLink>,
      quickGuide: '' 
    },
    { 
      evaluationNumber: 4, 
      date: 'Jue 08, May 2025',
      weighting: '15% * 75%',
      description: <CustomLink href='tilv21/controles'>Promedio controles</CustomLink>,
      quickGuide: ''
    },
    { 
      evaluationNumber: 5,
      date: 'Vie 16, May 2025',
      weighting: '25%',
      description: 'Examen',
      quickGuide: <>
        <CustomLink href='tilv21/controles'>- Controles</CustomLink><br/>
        <CustomLink href='tilv21/lecturas'>- Lecturas</CustomLink><br/>
        <CustomLink href='tilv21/unidad01'>- Unidad01</CustomLink><br/>
        <CustomLink href='tilv21/unidad02'>- Unidad02</CustomLink><br/>
        <CustomLink href='tilv21/unidad03'>- Unidad03</CustomLink>
      </>
    }
  ];
  
  const lectureData = [
    { week: '01', lecture: '01', date: 'Sáb 15, Mar 2025', description: <CustomLink href='tilv21/lectura01'>Conceptos básicos en el desarrollo de software</CustomLink> },
    { week: '', lecture: '02', date: 'Sáb 15, Mar 2025', description: <CustomLink href='tilv21/lectura02'>Requisitos y calidad de software según Estándar ISO/IEC 25000</CustomLink> },
    { week: '02', lecture: '03', date: 'Sáb 22, Mar 2025', description: <CustomLink href='tilv21/lectura03'>Estándares de testing, basados en normas y estándares de la industria del software</CustomLink> },
    { week: '03', lecture: '04', date: 'Sáb 29, Mar 2025', description: <CustomLink href='tilv21/lectura04'>Síntesis de la Unidad 01</CustomLink> },
    { week: '04', lecture: '05', date: 'Sáb 05, Abr 2025', description: <CustomLink href='tilv21/lectura05'>Técnicas y herramientas de testing</CustomLink> },
    { week: '', lecture: '06', date: 'Sáb 05, Abr 2025', description: <CustomLink href='tilv21/lectura06'>Alcances y definiciones de los tipos de testing en el desarrollo de sorftware</CustomLink> },
    { week: '05', lecture: '07', date: 'Sáb 12, Abr 2025', description: <CustomLink href='tilv21/lectura07'>Cómo detectar la complejidad del testing</CustomLink> },
    { week: '', lecture: '08', date: 'Sáb 12, Abr 2025', description: <CustomLink href='tilv21/lectura08'>Soluciones a problemas y criterios de factibilidad con técnicas de testing</CustomLink> },
    { week: '06', lecture: '09', date: 'Sáb 19, Abr 2025', description: <CustomLink href='tilv21/lectura09'>Síntesis de la Unidad 02</CustomLink> },
    { week: '07', lecture: '10', date: 'Sáb 26, Abr 2025', description: <CustomLink href='tilv21/lectura10'>Gestión de defectos, combinación de valores de prueba y exploración</CustomLink> },
    { week: '', lecture: '11', date: 'Sáb 26, Abr 2025', description: <CustomLink href='tilv21/lectura11'>Técnicas para pruebas exploratorias</CustomLink> },
    { week: '', lecture: '12', date: 'Sáb 26, Abr 2025', description: <CustomLink href='tilv21/lectura12'>Ciclo de vida de un defecto de software</CustomLink> },
    { week: '08', lecture: '13', date: 'Sáb 03, May 2025', description: <CustomLink href='tilv21/lectura13'>Defectos, errores y fallos según criterios de factibilidad de plan de pruebas</CustomLink> },
    { week: '', lecture: '14', date: 'Sáb 03, May 2025', description: <CustomLink href='tilv21/lectura14'>Procesos de seguimiento en el monitoreo</CustomLink> },
    { week: '09', lecture: '15', date: 'Sáb 10, May 2025', description: <CustomLink href='tilv21/lectura15'>Síntesis de la Unidad 03</CustomLink> },
  ];

  // Agrupar lecturas por semana para una mejor organización
  const lecturesByWeek = lectureData.reduce((acc, lecture) => {
    if (lecture.week) {
      if (!acc[lecture.week]) {
        acc[lecture.week] = [];
      }
      acc[lecture.week].push(lecture);
    } else {
      // Añadir a la última semana
      const lastWeek = Object.keys(acc).pop();
      if (lastWeek) {
        acc[lastWeek].push(lecture);
      }
    }
    return acc;
  }, {});

  return (
    <div className={styles.container}>
      {/* Encabezado con Hero Section */}
      <div className={styles.description}>
        <h1 className={styles.title}>Plan de Pruebas de Software</h1>
        <p className={styles.subheading}>TILV21</p>
        <p>
          Plan de Pruebas de Software es una asignatura práctica del área formativa de especialidad de 
          Tecnologías de Información y Ciberseguridad, dictada en modalidad online. Al finalizar, el estudiante 
          será capaz de garantizar la funcionalidad, seguridad y eficiencia en el desarrollo de software, 
          considerando la Resolución de problemas, Innovación y Emprendimiento.
        </p>
      </div>

      {/* Navegación por pestañas */}
      <div className={styles.tabNavigation}>
        <div className={styles.tabButtons}>
          <button 
            className={`${styles.tabButton} ${activeTab === 'general' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('general')}
          >
            <Grid3x3 size={18} />
            <span>General</span>
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'evaluaciones' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('evaluaciones')}
          >
            <CheckSquare size={18} />
            <span>Evaluaciones</span>
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'lecturas' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('lecturas')}
          >
            <Calendar size={18} />
            <span>Lecturas</span>
          </button>
        </div>
        
        {/* Pestaña General */}
        {activeTab === 'general' && (
          <div className={styles.tabContent}>
            <h2 className={styles.sectionTitle}>Información General</h2>
            <div className={styles.cardGroup}>
              {/* Profesor */}
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h2 className={styles.cardTitle}>
                    <User size={20} />
                    Profesor
                  </h2>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Nombre:</span>
                    <span>{professorData.name}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Email:</span>
                    <a href={`mailto:${professorData.email}`} className={styles.link}>
                      {professorData.email}
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Vista general de unidades */}
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h2 className={styles.cardTitle}>
                    <Book size={20} />
                    Unidades
                  </h2>
                </div>
                <div className={styles.cardBody}>
                  <ul className={styles.listNoStyle}>
                    {unitsData.map((unit, index) => (
                      <li key={index} className={styles.unitItem}>
                        <span className={styles.unitNumber}>{unit.unit}</span>
                        <span>{unit.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
                
        {/* Pestaña Evaluaciones */}
        {activeTab === 'evaluaciones' && (
          <div className={styles.tabContent}>
            <h2 className={styles.sectionTitle}>Evaluaciones</h2>
            <div className={styles.tableContainer}>
              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th>N°</th>
                    <th>Fecha</th>
                    <th>Ponderación</th>
                    <th>Descripción</th>
                    <th>Guía rápida</th>
                  </tr>
                </thead>
                <tbody>
                  {evaluationsData.map((evaluation, index) => (
                    <tr key={index}>
                      <td>{evaluation.evaluationNumber}</td>
                      <td>{evaluation.date}</td>
                      <td>{evaluation.weighting}</td>
                      <td>{evaluation.description}</td>
                      <td>{evaluation.quickGuide}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className={styles.alertBox}>
              <h3 className={styles.alertTitle}>
                <span className={styles.alertIcon}>!</span>
                Información importante
              </h3>
              <p>
                El examen es obligatorio y representa el 25% de la nota final del curso.
              </p>
            </div>
          </div>
        )}
        
        {/* Pestaña Lecturas */}
        {activeTab === 'lecturas' && (
          <div className={styles.tabContent}>
            <h2 className={styles.sectionTitle}>Calendario de lecturas</h2>
            <div className={styles.twoColumnContainer}>
              {Object.entries(lecturesByWeek).map(([week, lectures]) => (
                <div key={week} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.cardTitle}>
                      <Calendar size={20} />
                      <span>Semana {week}</span>
                    </h3>
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.lectureList}>
                      {lectures.map((lecture, idx) => (
                        <div key={idx} className={styles.lectureItem}>
                          <div className={styles.lectureHeader}>
                            <span className={styles.lectureNumber}>Lectura {lecture.lecture}:</span>
                            <span className={styles.lectureDate}>
                              {lecture.date}
                            </span>
                          </div>
                          <div className={styles.lectureDescription}>
                            {lecture.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default Tilv21;