import React from 'react';
import ProjectTable from '@/components/features/bootcamp/udd/ProjectTable';
import ModuleTable from '@/components/features/bootcamp/udd/ModuleTable';
import { udd01Data } from '@/data/bootcamp/udd/udd01';
import styles from './UddDetail.module.css';

const UddDetail = ({ bootcampData = udd01Data, courseId }) => {
  const { title, projects, modules } = bootcampData;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>

        {/* Sección de Proyectos - Centrada */}
        <div className={styles.projectsSection}>
          <ProjectTable projects={projects} courseId={courseId} />
        </div>
        
        {/* Sección de Módulos - Grid 2 columnas */}
        <div className={styles.modulesGrid}>
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