'use client'

import React, { useEffect, useState } from 'react';
import ClassCard from '@/components/ClassCard'; 
import EvaluationCard from '@/components/EvaluationCard';
import ProfessorCard from '@/components/ProfessorCard';
import UnitCard from '@/components/UnitCard';
import styles from'@/styles/Asignature.module.css';
import CustomLink from '@/components/CustomLink';
import ExternalLink from '@/components/ExternalLink';

export default function Mvfm01() {
    // Estado para controlar la vista responsiva
    const [isMobile, setIsMobile] = useState(false);

    // Efecto para detectar el tamaño de la pantalla
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        // Configurar tamaño inicial
        handleResize();
        
        // Agregar listener para cambios de tamaño
        window.addEventListener('resize', handleResize);
        
        // Limpiar listener al desmontar
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const professorData = {
        name: "Franciso Javier Gonzáles Villarroel",
        email: "francisco.gonzales143@inacapmail.cl"
    };
    const unitsData = [
        { unit: '1', description: 'Funciones Polinómicas, Exponencial y Logarítmica' },
        { unit: '2', description: 'Trigonometría' },
        { unit: '3', description: 'Sucesiones, Sumatorias, Vectores y Matrices' },
    ];
    const evaluationsData = [
        { 
            evaluationNumber: 1, 
            date: 'Lun 30, Sep 2024', 
            weighting: '25%', 
            description: 'Evaluación 01' , 
            quickGuide: ''
        },
        { 
            evaluationNumber: 2, 
            date: 'Mié 13, Nov 2024', 
            weighting: '25%', 
            description: 'Evaluación 02' , 
            quickGuide: ''
        },
        { 
            evaluationNumber: 3, 
            date: 'Lun 09, Dic 2024', 
            weighting: '40%', 
            description: 'Proyecto' , 
            quickGuide: ''
        },
        { 
            evaluationNumber: 4, 
            date: 'Mié 11, Dic 2024', 
            weighting: '10%', 
            description: 'Promedio Controles' , 
            quickGuide: ''
        }
        
    ];
    const classData = [
        { week: '01', class: '01', date: 'Lun 12, Ago 2024', description: <>
            <CustomLink href='mvfm01/arpa11'>- ARPA 1: Consumo de energía</CustomLink><br/>
            <CustomLink href='mvfm01/sm11'>- SM 1: Servicio Eléctrico</CustomLink>
            </> 
        },
        { week: '02', class: '02', date: 'Lun 19, Ago 2024', description: <CustomLink href='mvfm01/arpa12'>- ARPA 2: Lanzamiento de una piedra</CustomLink> },
        { week: '', class: '03', date: 'Mié 21, Ago 2024', description: <CustomLink href='mvfm01/sm12'>- SM 2: Sueño dorado</CustomLink> },
        { week: '03', class: '04', date: 'Lun 26, Ago 2024', description: <>
            <CustomLink href='mvfm01/arpa13'>- ARPA 3: Eliminación de fármacos</CustomLink><br/>
            <CustomLink href='mvfm01/sm13'>- SM 3: Desabastecimiento</CustomLink>
            </> 
        },
        { week: '', class: '05', date: 'Mié 28, Ago 2024', description: '- SM 4: Crecimiento de Bacterias' },
        { week: '04', class: '06', date: 'Lun 02, Sep 2024', description: '- ARPA 4: La escala Ritcher' },
        { week: '', class: '07', date: 'Mié 04, Sep 2024', description: <>
            - AFO 09<br/>
            - AFO 10
            </> },
        { week: '05', class: '08', date: 'Lun 09, Sep 2024', description: '- SM 5: Seguidores en Instagram' },
        { week: '', class: '09', date: 'Mié 11, Sep 2024', description: <del>- Suspensión Clases</del> },
        { week: '06', class: '10', date: 'Lun 16, Sep 2024', description: <>
            - Revisión Control 1 y 2<br/>
            - AFO 05<br/>
            - AFO 10
            </> },
        { week: '07', class: '11', date: 'Lun 23, Sep 2024', description: '- Repaso Logaritmo' },
        { week: '', class: '12', date: 'Mié 25, Sep 2024', description: '- Guía Resumen Unidad 1' },
        { week: '08', class: '13', date: 'Lun 30, Sep 2024', description: '- Evaluación 01' },
        { week: '', class: '14', date: 'Mié 02, Oct 2024', description: <>
            - Introducción a Trigonometría<br/>
            - ARPA 1: La plaza de skate
            </> },
        { week: '09', class: '15', date: 'Lun 07, Oct 2024', description: '- SM 1: La Rampa' },
        { week: '', class: '16', date: 'Mié 09, Oct 2024', description: <>
            - AFO 01<br/>
            - AFO 02<br/>
            - AFO 03
        </> },
        { week: '10', class: '17', date: 'Lun 14, Oct 2024', description: <>
            - ARPA 2: Un terreno peligroso<br/>
            - AFO 04<br/>
            - AFO 05<br/>
            - AFO 06<br/>
            - AFO 07
        </> },
        { week: '', class: '18', date: 'Mié 16, Oct 2024', description: '- Ley de los Cosenos' },
        { week: '11', class: '19', date: 'Lun 21, Oct 2024', description: '- SM 2: Viaje en globo aerostático' },
        { week: '', class: '20', date: 'Mié 23, Oct 2024', description: '- SM 3: Análisis de ondas sonoras' },
        { week: '12', class: '21', date: 'Lun 28, Oct 2024', description: <>
            - Temperatura de una tubería<br/>
            - Ejercicios Trigonometría
        </> },
        { week: '', class: '22', date: 'Mié 30, Oct 2024', description: <del>- Suspensión Clases</del> },
        { week: '13', class: '23', date: 'Lun 04, Nov 2024', description: <del>- Suspensión Clases</del> },
        { week: '', class: '24', date: 'Mié 06, Nov 2024', description: <del>- Suspensión Clases</del> },
        { week: '14', class: '25', date: 'Lun 11, Nov 2024', description: <del>- Suspensión Clases</del> },
        { week: '', class: '26', date: 'Mié 13, Nov 2024', description: '- Evaluación 02' },
        { week: '15', class: '27', date: 'Lun 18, Nov 2024', description: <>
            - Revisión Evaluación 02<br/>
            - Instrucciones Proyecto Etapa 02
        </> },
        { week: '', class: '28', date: 'Mié 20, Nov 2024', description: <>
            - Feedback Proyecto Etapa 01<br/>
            - Avance Proyecto Etapa 02
        </> },
        { week: '16', class: '29', date: 'Lun 25, Nov 2024', description: '- Avance Proyecto Etapa 02' },
        { week: '', class: '30', date: 'Mié 27, Nov 2024', description: '- Entrega Proyecto Etapa 01' },
        { week: '17', class: '31', date: 'Lun 02, Dic 2024', description: '- Feedback Proyecto Etapa 02' },
        { week: '', class: '32', date: 'Mié 04, Dic 2024', description: '- Feedback Informe' },
        { week: '18', class: '33', date: 'Lun 09, Dic 2024', description: '- Entrega Proyecto' },
        { week: '', class: '34', date: 'Mié 11, Dic 2024', description: '- Cierre de Notas' },

    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Funciones y Matrices</h1>
            <p className={styles.subheading}>MVFM01</p>
            <br />
            <p className={styles.description}>
                Asignatura lectiva. Al finalizar, el estudiantes será capaz de: Integrar habilidades fundamentales de mateméticas, Utilizar herramientas tecnológicas en contexto personal, ocupacional, social, científico.
            </p>

            <div className={styles.cardContainer}>
                <div className={`${styles.card} ${styles.fullWidth}`}>
                    <ProfessorCard professorData={professorData} />
                </div>

                <div className={styles.cardGroup}>
                    <div className={styles.card}>
                        <UnitCard unitsData={unitsData} />
                    </div>
                    <div className={styles.card}>
                        <EvaluationCard evaluationsData={evaluationsData} />
                    </div>
                </div>

                <div className={styles.cardGroup}>
                    <div className={styles.card}>
                        <ClassCard classData={classData} />
                    </div>
                </div>
            </div>
        </div>
    );
}