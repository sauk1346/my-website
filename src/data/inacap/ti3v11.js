import React from 'react';
import CustomLink from '@/components/CustomLink';
import ExternalLink from '@/components/ExternalLink';

export default {
    courseCode: "TI3V11",
    courseTitle: "Introducción a la Programación Segura",
    courseDescription: "Asignatura de tipo práctico. Al finalizar, el estudiante conocerá: Fundamentos de Python, Estructuras de Control y Decisión, Manejo de almacenamiento de datos y uso de librerías asociadas a seguridad informática.",

    professorData: {
        name: "Luis Alejandro Yañez Carreño",
        email: "luyanez.profesor@gmail.com"
    },
    unitsData: [
        { unit: '1', description: 'Problemas y Representación de Soluciones' },
        { unit: '2', description: 'Estructuras de Decisión. Bucles y funciones de lenguaje Python' },
        { unit: '3', description: 'Colecciones y librerías en Python' },
        { unit: '4', description: 'Metodologías de Desarrollo Seguro, considerando SAMM y SDL' }
    ],
    evaluationsData: [
        { 
            evaluationNumber: 1,
            date: 'Jue 06, Jun 2024', 
            weighting: '20%', 
            description: <CustomLink href='ti3v11/eval01'>Evaluación 01</CustomLink>, 
            quickGuide: '', 
        },
        { 
            evaluationNumber: 2, 
            date: 'Mié 10, Jul 2024', 
            weighting: '35%', 
            description: <CustomLink href='ti3v11/eval02'>Evaluación 02</CustomLink>, 
            quickGuide: <><CustomLink href='ti3v11/guia21'>guía 01</CustomLink>, <CustomLink href='ti3v11/guia22'>guía 02</CustomLink></>
        },
        { 
            evaluationNumber: 3, 
            date: 'Mar 23, Jul 2024', 
            weighting: '35%', 
            description: <ExternalLink href="/inacap/ti3v11/docs/eval03_sol.pdf">Informe SAMM y SDL</ExternalLink>, 
            quickGuide: '' 
        },
        { 
            evaluationNumber: 4, 
            date: 'Jue 25, Jul 2024', 
            weighting: '10%', 
            description: <CustomLink href='ti3v11/controles'>Promedio Controles</CustomLink>, 
            quickGuide: '' 
        },
    ],
    classData: [
        { week: '01', class: '01', date: 'Mié 22, May 2024', description: <CustomLink href='ti3v11/clase01'>Pseudocódigo, Diagrama de Flujo</CustomLink>  },
        { week: '', class: '02', date: 'Jue 23, May 2024', description: <CustomLink href='ti3v11/clase02'>Variables, Condiciones, Bucles</CustomLink> },
        { week: '02', class: '03', date: 'Mar 28, May 2024', description: <CustomLink href='ti3v11/clase03'>Condicionales y Lógica Booleana</CustomLink> },
        { week: '', class: '04', date: 'Mié 29, May 2024', description: <CustomLink href='ti3v11/clase04'>Introducción a PSeInt</CustomLink> },
        { week: '', class: '05', date: 'Jue 30, May 2024', description: <CustomLink href='ti3v11/clase05'>Ejercicios con Bucles (1)</CustomLink> },
        { week: '03', class: '06', date: 'Mar 04, Jun 2024', description: <CustomLink href='ti3v11/clase06'>Ejercicios con Bucles (2)</CustomLink> },
        { week: '', class: '07', date: 'Mié 05, Jun 2024', description: <CustomLink href='ti3v11/clase07'>Ejercicios con Bucles (3)</CustomLink> },
        { week: '', class: '08', date: 'Jue 06, Jun 2024', description: <CustomLink href='ti3v11/eval01'>Evaluación 01</CustomLink> },
        { week: '04', class: '09', date: 'Mar 11, Jun 2024', description: <CustomLink href='ti3v11/clase09'>Introducción a Python</CustomLink> },
        { week: '', class: '10', date: 'Mié 12, Jun 2024', description: <CustomLink href='ti3v11/clase10'>Intrucciones if(), while()</CustomLink> },
        { week: '', class: '11', date: 'Jue 13, Jun 2024', description: <span style={{textDecoration: 'line-through'}}>Suspensión clases: lluvia</span> },
        { week: '05', class: '12', date: 'Mar 18, Jun 2024', description: <CustomLink href='ti3v11/clase12'>Instrucción for(), Ejercicios, Tarea</CustomLink> },
        { week: '06', class: '13', date: 'Mar 25, Jun 2024', description: <CustomLink href='ti3v11/clase13'>Revisión Tarea, Listas, Ejercicios</CustomLink> },
        { week: '', class: '14', date: 'Mié 26, Jun 2024', description: <CustomLink href='ti3v11/clase14'>Ejercicios</CustomLink> },
        { week: '', class: '15', date: 'Jue 27, Jun 2024', description: <CustomLink href='ti3v11/clase15'>Tuplas, Ejercicios</CustomLink> },
        { week: '07', class: '16', date: 'Mar 02, Jul 2024', description: <CustomLink href='ti3v11/clase16'>Diccionarios, Ejercicios</CustomLink> },
        { week: '', class: '17', date: 'Mié 03, Jul 2024', description: <CustomLink href='ti3v11/clase17'>Ejercicio Estudiantes</CustomLink> },
        { week: '', class: '18', date: 'Jue 04, Jul 2024', description: <CustomLink href='ti3v11/clase18'>Funciones</CustomLink> },
        { week: '08', class: '19', date: 'Mar 09, Jul 2024', description: <CustomLink href='ti3v11/clase19'>Ejercicios con funciones</CustomLink> },
        { week: '', class: '20', date: 'Mié 10, Jul 2024', description: <CustomLink href='ti3v11/eval02'>Evaluación 02: Primera parte</CustomLink> },
        { week: '', class: '21', date: 'Jue 11, Jul 2024', description: <CustomLink href='ti3v11/eval02'>Evaluación 02: Segunda parte</CustomLink> },
        { week: '', class: '22', date: 'Vie 12, Jul 2024', description: <CustomLink href='ti3v11/clase22'>Clase Recuperativa</CustomLink> },
        { week: '09', class: '23', date: 'Mié 17, Jul 2024', description: <CustomLink href='ti3v11/clase23'>Desarrollo Seguro</CustomLink> },
        { week: '', class: '24', date: 'Jue 18, Jul 2024', description: <CustomLink href='ti3v11/clase24'>Encriptación</CustomLink> },
        { week: '10', class: '25', date: 'Mar 23, Jul 2024', description: <ExternalLink href="/inacap/ti3v11/docs/eval03_sol.pdf">Informe SAMM y SDL</ExternalLink> },
    ],
    lectureData: [
        { week: '01', lecture: '01', date: 'Sáb 25, May 2024', description: <CustomLink href='ti3v11/lectura01'>El alcance de una problemática</CustomLink> },
        { week: '', lecture: '02', date: 'Sáb 25, May 2024', description: <CustomLink href='ti3v11/lectura02'>Métodos para la resolución de problemas</CustomLink> },
        { week: '02', lecture: '03', date: 'Sáb 01, Jun 2024', description: <CustomLink href='ti3v11/lectura03'>Diagrama de flujo de datos</CustomLink> },
        { week: '', lecture: '04', date: 'Sáb 01, Jun 2024', description: <CustomLink href='ti3v11/lectura04'>Validación de la solución</CustomLink> },
        { week: '03', lecture: '05', date: 'Sáb 08, Jun 2024', description: <CustomLink href='ti3v11/lectura05'>Python: Estructura de desición y bucles</CustomLink> },
        { week: '04', lecture: '06', date: 'Sáb 15, Jun 2024', description: <CustomLink href='ti3v11/lectura06'>Python: Tipos de datos y variables</CustomLink> },
        { week: '', lecture: '07', date: 'Sáb 15, Jun 2024', description: <CustomLink href='ti3v11/lectura07'>Python: Sentencias básicas en la resolución de problemas</CustomLink> },
        { week: '05', lecture: '08', date: 'Sáb 22, Jun 2024', description: <CustomLink href='ti3v11/lectura08'>La lógica en la Programación Python</CustomLink> },
        { week: '06', lecture: '09', date: 'Sáb 29, Jun 2024', description: <CustomLink href='ti3v11/lectura09'>Listas, tuplas y diccionarios seguros</CustomLink> },
        { week: '07', lecture: '10', date: 'Sáb 06, Jul 2024', description: <CustomLink href='ti3v11/lectura10'>Procedimientos para la manipulación de datos</CustomLink> },
        { week: '', lecture: '11', date: 'Sáb 06, Jul 2024', description: <CustomLink href='ti3v11/lectura11'>Mitigación del riesgo y las vulnerabilidades</CustomLink> },
        { week: '08', lecture: '12', date: 'Sáb 13, Jul 2024', description: <CustomLink href='ti3v11/lectura12'>Librerías externas y seguras</CustomLink> },
        { week: '', lecture: '13', date: 'Sáb 13, Jul 2024', description: <CustomLink href='ti3v11/lectura13'>Script con jerarquía de excepciones</CustomLink> },       
    ],
}