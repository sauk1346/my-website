import React from 'react';
import ExternalLink from '@/components/ui/ExternalLink';
import CustomLink from '@/components/ui/CustomLink';
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
                    <CustomLink href={project.projectLink} className={styles.projectLink}>
                      {project.title}
                    </CustomLink>
                  ) : (
                    project.title
                  )}
                </td>
                <td className={styles.demoCell}>
                  {project.demoLink ? (
                    <CustomLink href={project.demoLink} className={styles.projectLink}>
                      Ver
                    </CustomLink>
                  ) : (
                    <span>-</span>
                  )}
                </td>
                <td className={styles.deliveryCell}>
                  {project.deliveryLink ? (
                    <ExternalLink href={project.deliveryLink} className={styles.deliveryLink}>
                      GitHub
                    </ExternalLink>
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