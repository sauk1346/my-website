'use client'
import { useState } from 'react';
import { BookOpen, List } from 'lucide-react';
import Link from 'next/link';
import styles from './LanguagePage.module.css';

const LanguagePage = ({ data }) => {
  const { title, courses, topics } = data;
  const [activeTab, setActiveTab] = useState('topicos');

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>

        <div className={styles.tabNavigation}>
          <div className={styles.tabButtons}>
            <button
              className={`${styles.tabButton} ${activeTab === 'topicos' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('topicos')}
            >
              <List size={18} />
              <span>Tópicos</span>
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === 'cursos' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('cursos')}
            >
              <BookOpen size={18} />
              <span>Cursos</span>
            </button>
          </div>

          {activeTab === 'topicos' && (
            <div className={styles.tabContent}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  {topics.map((topic, index) => (
                    <tr key={topic.item || index}>
                      <td className={styles.code}>{topic.item}</td>
                      <td>
                        {topic.hasContent ? (
                          <Link href={topic.href} className={styles.courseLink}>{topic.description}</Link>
                        ) : (
                          topic.description
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'cursos' && (
            <div className={styles.tabContent}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Sigla</th>
                    <th>Nombre</th>
                    <th>Plataforma</th>
                    <th>Profesor</th>
                    <th>Certificado</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course, index) => (
                    <tr key={course.code || index} className={styles.tableRow}>
                      <td className={styles.code}>{course.code}</td>
                      <td>
                        {course.hasContent ? (
                          <Link href={course.href} className={styles.courseLink}>{course.name}</Link>
                        ) : (
                          <span className={styles.courseNameNoLink}>{course.name}</span>
                        )}
                      </td>
                      <td>{course.platform}</td>
                      <td>{course.professor}</td>
                      <td>
                        {course.certificateHref ? (
                          <Link
                            href={course.certificateHref}
                            className={styles.certificateLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {course.certificate}
                          </Link>
                        ) : (
                          course.certificate || ''
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LanguagePage;
