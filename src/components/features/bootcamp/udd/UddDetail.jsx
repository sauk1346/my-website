import React from 'react';
import ProjectTable from '@/components/features/bootcamp/udd/ProjectTable';
import ModuleTable from '@/components/features/bootcamp/udd/ModuleTable';
import { udd01Data } from '@/data/bootcamp/udd/udd01';
import styles from './UddDetail.module.css';

const UddDetail = ({ bootcampData = udd01Data }) => {
  const { title, projects, modules } = bootcampData;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        
        <div className={styles.grid}>
          {/* Tabla de Proyectos */}
          <ProjectTable projects={projects} />
          
          {/* Tablas de Módulos */}
          {modules.map((module, index) => (
            <ModuleTable 
              key={index}
              title={module.title}
              sessions={module.sessions}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UddDetail;