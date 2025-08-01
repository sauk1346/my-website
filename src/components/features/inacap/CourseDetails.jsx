'use client'

import React, { useState, useEffect } from 'react';
import { Calendar, Book, CheckSquare, User, Grid3x3, Monitor, FileText, Clock, Percent } from 'lucide-react';
import styles from '@/shared/Asignature.module.css';

const CourseDetails = ({ 
  courseCode,
  courseTitle,
  courseDescription,
  professorData,
  unitsData,
  evaluationsData,
  classData = [], // Valor predeterminado de array vacío
  lectureData = [] // Valor predeterminado de array vacío
}) => {
  // Determinamos qué pestañas están disponibles
  const hasClasses = Array.isArray(classData) && classData.length > 0;
  const hasLectures = Array.isArray(lectureData) && lectureData.length > 0;
  
  // Configuramos la pestaña activa inicial
  const [activeTab, setActiveTab] = useState('general');
  
  // Aseguramos que la pestaña activa sea válida
  useEffect(() => {
    if (activeTab === 'clases' && !hasClasses) {
      setActiveTab('general');
    }
    if (activeTab === 'lecturas' && !hasLectures) {
      setActiveTab('general');
    }
  }, [activeTab, hasClasses, hasLectures]);

  // Agrupamos clases por semana (solo si hay clases)
  const classesByWeek = hasClasses 
  ? classData.reduce((acc, classItem, index) => {
      // Si tiene semana definida, se crea/utiliza esa semana
      if (classItem.week) {
        if (!acc[classItem.week]) {
          acc[classItem.week] = [];
        }
        acc[classItem.week].push(classItem);
      } else {
        // Para clases sin semana, buscamos la semana anterior en los datos
        // en lugar de usar la última añadida al objeto acc
        let weekToUse = '';
        // Retrocedemos en el array hasta encontrar una clase con semana definida
        for (let i = index - 1; i >= 0; i--) {
          if (classData[i].week) {
            weekToUse = classData[i].week;
            break;
          }
        }
        
        // Solo añadimos si encontramos una semana válida
        if (weekToUse && acc[weekToUse]) {
          acc[weekToUse].push(classItem);
        }
      }
      return acc;
    }, {})
  : {};

  // Agrupamos lecturas por semana (solo si hay lecturas)
  const lecturesByWeek = hasLectures
    ? lectureData.reduce((acc, lecture) => {
        if (lecture.week) {
          if (!acc[lecture.week]) {
            acc[lecture.week] = [];
          }
          acc[lecture.week].push(lecture);
        } else {
          const lastWeek = Object.keys(acc).pop();
          if (lastWeek) {
            acc[lastWeek].push(lecture);
          }
        }
        return acc;
      }, {})
    : {};

  return (
    <div className={styles.container}>
      {/* Encabezado con Hero Section */}
      <div className={styles.description}>
        <h1 className={styles.title}>{courseTitle}</h1>
        <p className={styles.subheading}>{courseCode}</p>
        <p>{courseDescription}</p>
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
          
          {/* Solo mostramos la pestaña de clases si hay datos de clases */}
          {hasClasses && (
            <button 
              className={`${styles.tabButton} ${activeTab === 'clases' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('clases')}
            >
              <Monitor size={18} />
              <span>Clases</span>
            </button>
          )}
          
          {/* Solo mostramos la pestaña de lecturas si hay datos de lecturas */}
          {hasLectures && (
            <button 
              className={`${styles.tabButton} ${activeTab === 'lecturas' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('lecturas')}
            >
              <Book size={18} />
              <span>Lecturas</span>
            </button>
          )}
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
            
            {/* Grid de tarjetas de evaluación */}
            <div className={styles.evaluationGrid}>
              {evaluationsData.map((evaluation, index) => {
                // Convertir el peso a número para la barra de progreso
                // Si el peso tiene formato "X% * Y%" tomamos sólo X
                let weightStr = evaluation.weighting.split('*')[0].trim();
                const weightValue = parseInt(weightStr.replace('%', ''));
                
                return (
                  <div key={index} className={styles.evaluationCard}>
                    <div className={styles.evaluationHeader}>
                      <div className={styles.evaluationBadge}>
                        <span>{evaluation.evaluationNumber}</span>
                      </div>
                      <div className={styles.evaluationMeta}>
                        <div className={styles.evaluationDateWrapper}>
                          <Clock size={14} />
                          <span className={styles.evaluationDate}>{evaluation.date}</span>
                        </div>
                        <h3 className={styles.evaluationTitle}>
                          Evaluación {evaluation.evaluationNumber}
                        </h3>
                      </div>
                    </div>
                    
                    <div className={styles.evaluationBody}>
                      <div className={styles.evaluationDescription}>
                        <FileText size={16} />
                        <div>{evaluation.description}</div>
                      </div>
                      
                      {evaluation.quickGuide && (
                        <div className={styles.evaluationGuides}>
                          <h4 className={styles.guidesTitle}>Guías de estudio:</h4>
                          <div className={styles.guidesList}>
                            {evaluation.quickGuide}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className={styles.evaluationFooter}>
                      <div className={styles.weightWrapper}>
                        <Percent size={14} />
                        <span className={styles.evaluationWeight}>{evaluation.weighting}</span>
                      </div>
                      <div className={styles.weightBarContainer}>
                        <div 
                          className={styles.weightBar} 
                          style={{width: `${weightValue}%`}}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        
        {/* Pestaña Clases */}
        {activeTab === 'clases' && hasClasses && (
          <div className={styles.tabContent}>
            <h2 className={styles.sectionTitle}>Calendario de clases</h2>
            <div className={styles.twoColumnContainer}>
              {Object.entries(classesByWeek)
                .sort(([weekA], [weekB]) => parseInt(weekA) - parseInt(weekB)) // Ordenar numéricamente
                .map(([week, classes]) => (
                  <div key={week} className={styles.card}>
                    <div className={styles.cardHeader}>
                      <h3 className={styles.cardTitle}>
                        <Monitor size={20} />
                        <span>Semana {week}</span>
                      </h3>
                    </div>
                    <div className={styles.cardBody}>
                      <div className={styles.classList}>
                        {classes.map((classItem, idx) => (
                          <div key={idx} className={styles.classItem}>
                            <div className={styles.classHeader}>
                              <span className={styles.classNumber}>Clase {classItem.class}:</span>
                              <div className={styles.dateContainer}>
                                <div className={styles.evaluationDateWrapper}>
                                  <Clock size={14} />
                                  <span className={styles.evaluationDate}>{classItem.date}</span>
                                </div>
                              </div>
                            </div>
                            <div className={styles.classDescription}>
                              {classItem.description}
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

        {/* Pestaña Lecturas */}
        {activeTab === 'lecturas' && hasLectures && (
          <div className={styles.tabContent}>
            <h2 className={styles.sectionTitle}>Calendario de lecturas</h2>
            <div className={styles.twoColumnContainer}>
              {Object.entries(lecturesByWeek)
                .sort(([weekA], [weekB]) => parseInt(weekA) - parseInt(weekB)) // Ordenar numéricamente
                .map(([week, lectures]) => (
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
                              <div className={styles.dateContainer}>
                                <div className={styles.evaluationDateWrapper}>
                                  <Clock size={14} />
                                  <span className={styles.evaluationDate}>{lecture.date}</span>
                                </div>
                              </div>
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

export default CourseDetails;