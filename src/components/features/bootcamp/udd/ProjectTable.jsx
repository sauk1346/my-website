import React from 'react';
import { SmartLink } from '@/components/mdx';
import styles from './ProjectTable.module.css';

const ProjectTable = ({ projects }) => {
  // Manejar tanto la estructura antigua (array directo) como la nueva (objeto con data)
  const projectsData = Array.isArray(projects) ? projects : projects.data;
  const sectionTitle = Array.isArray(projects) ? "Proyectos" : projects.title;

  return (
    <div className={styles.tableSection}>
      <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.numberColumn}></th>
              <th className={styles.dateColumn}>Fecha</th>
              <th className={styles.projectColumn}>Proyecto</th>
              <th className={styles.demoColumn}>Demo</th>
              <th className={styles.deliveryColumn}>Entrega</th>
            </tr>
          </thead>
          <tbody>
            {projectsData.map((project, index) => (
              <tr key={index} className={styles.tableRow}>
                <td className={styles.numberCell}>
                  {String(index + 1).padStart(2, '0')}
                </td>
                <td className={styles.dateCell}>{project.date}</td>
                <td className={styles.projectCell}>
                  {project.projectLink ? (
                    <SmartLink href={project.projectLink}>
                      {project.title}
                    </SmartLink>
                  ) : (
                    project.title
                  )}
                </td>
                <td className={styles.demoCell}>
                  {project.demoLink ? (
                    <SmartLink href={project.demoLink}>
                      Ver
                    </SmartLink>
                  ) : (
                    <span>-</span>
                  )}
                </td>
                <td className={styles.deliveryCell}>
                  {project.deliveryLink ? (
                    <SmartLink href={project.deliveryLink}>
                      GitHub
                    </SmartLink>
                  ) : (
                    <span>-</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectTable;