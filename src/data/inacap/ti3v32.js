import React from 'react';
import CustomLink from '@/components/ui/CustomLink';
import ExternalLink from '@/components/ui/ExternalLink';

const courseData = {
    courseCode: "TI3V32",
    courseTitle: "Bases de Datos No Estructuradas",
    courseDescription: "Bases de Datos no Estructuradas es una asignatura práctica, del área formativa de Tecnologías de Información y Ciberseguridad, dictada en modalidad presencial con componente online. Al finalizar, el estudiante será capaz de gestionar, manipular y consultar una base de datos no estructurada (NoSQL), considerando la Ética y Ciudadanía. Esta es una asignatura evaluativa, por lo que contempla una unidad final que tiene el objetivo de realizar una evaluación intermedia del Perfil de Egreso.",
    
    professorData: {
      name: "Eugenio Alberto Bravo García",
      email: "eugenio.bravo02@inacapmail.cl"
    },
    
    unitsData: [
      { unit: "1", description: "Introducción a las bases de datos no estructuradas" },
      { unit: "2", description: "Operaciones esenciales con MongoDB" },
      { unit: "3", description: "Búsqueda avanzada con MongoDB" },
      { unit: "4", description: "Unidad integradora para evaluar la competencia" }
    ],
    
    evaluationsData: [
      { 
        evaluationNumber: 1, 
        date: "Mié 26, Mar 2025", 
        weighting: "20%", 
        description: (
          <>
            <CustomLink href="ti3v32/eval01a">Eval01-A</CustomLink>, <CustomLink href="ti3v32/eval01b">Eval01-B</CustomLink>
          </>
        ),
        quickGuide: <CustomLink href="ti3v32/guia11">Guía 01</CustomLink>
      },
      { 
        evaluationNumber: 2, 
        date: "Mié 23, Abr 2025", 
        weighting: "40%", 
        description: (
          <>
            <CustomLink href="ti3v32/eval02a">Eval02-A</CustomLink>, <CustomLink href="ti3v32/eval02b">Eval02-B</CustomLink>
          </>
        ),
        quickGuide: (
          <>
            <CustomLink href="ti3v32/guia2a">- Operators</CustomLink><br/>
            <CustomLink href="ti3v32/guia2b">- Regex</CustomLink><br/>
            <CustomLink href="ti3v32/guia21">- Guía 01</CustomLink><br/>
            <CustomLink href="ti3v32/guia22">- Guía 02</CustomLink><br/>
            <CustomLink href="ti3v32/guia23">- Guía 03</CustomLink><br/>
            <CustomLink href="ti3v32/guia24">- Guía 04</CustomLink><br/>
            <CustomLink href="ti3v32/guia25">- Guía 05</CustomLink><br/>
            <CustomLink href="ti3v32/guia26">- Guía 06</CustomLink><br/>
            <CustomLink href="ti3v32/guia27">- Guía 07</CustomLink><br/>
            <CustomLink href="ti3v32/guia28">- Guía 08</CustomLink><br/>
            <CustomLink href="ti3v32/guia29">- Guía 09</CustomLink>
          </>
        )
      },
      {
        evaluationNumber: 3,
        date: "Mar 06, May 2025",
        weighting: "30%",
        description: (
          <>
            <CustomLink href="ti3v32/eval03c">Eval03-C</CustomLink>, <CustomLink href="ti3v32/eval03d">Eval03-D</CustomLink>
          </>
        ),
        quickGuide: ""
      },
      {
        evaluationNumber: 4,
        date: "Mié 07, May 2025",
        weighting: "10%",
        description: "Promedio Evaluaciones",
        quickGuide: ""
      }
    ],
      
    classData: [
      { week: '01', class: '01', date: 'Lun 10, Mar 2025', description: <CustomLink href="ti3v32/clase01">Introducción BD NoSQL</CustomLink> },
      { week: '', class: '02', date: 'Mar 11, Mar 2025', description: <span style={{textDecoration: 'line-through'}}>Suspensión Clases</span>},
      { week: '', class: '03', date: 'Mié 12, Mar 2025', description: "Ejercicios CRUD (1)"},
      { week: '02', class: '04', date: 'Lun 17, Mar 2025', description: <CustomLink href="ti3v32/clase04">Ejercicios CRUD (2)</CustomLink> },
      { week: '', class: '05', date: 'Mar 18, Mar 2025', description: "Ejercicios CRUD (3)" },
      { week: '', class: '06', date: 'Mié 19, Mar 2025', description: "Ejercicios CRUD (4)" },
      { week: '03', class: '07', date: 'Lun 24, Mar 2025', description: <CustomLink href='ti3v32/clase07'>MongoDB Shell</CustomLink> },
      { week: '', class: '08', date: 'Mar 25, Mar 2025', description: <CustomLink href='ti3v32/clase08'>Ejercicio con puntaje</CustomLink> },
      { week: '', class: '09', date: 'Mié 26, Mar 2025', description: <> <CustomLink href='ti3v32/eval01a'>Eval01-A</CustomLink>, <CustomLink href='ti3v32/eval01b'>Eval01-B</CustomLink> </>},
      { week: '04', class: '10', date: 'Lun 31, Mar 2025', description: <CustomLink href='ti3v32/clase10'>Ejercicios MongoSh 01</CustomLink> },
      { week: '', class: '11', date: 'Mar 01, Abr 2025', description: <CustomLink href='ti3v32/guia21'>Guía 01</CustomLink> },
      { week: '', class: '12', date: 'Mié 02, Abr 2025', description: <CustomLink href='ti3v32/guia22'>Guía 02</CustomLink> },
      { week: '05', class: '13', date: 'Lun 07, Abr 2025', description: <CustomLink href='ti3v32/guia23'>Guía 03</CustomLink> },
      { week: '', class: '14', date: 'Mar 08, Abr 2025', description: <em>Visita a Data Center Didáctico</em>},
      { week: '', class: '15', date: 'Mié 09, Abr 2025', description: <CustomLink href='ti3v32/guia24'>Guía 04</CustomLink> },
      { week: '06', class: '16', date: 'Lun 14, Abr 2025', description: <CustomLink href='ti3v32/guia25'>Guía 05</CustomLink> },
      { week: '', class: '17', date: 'Mar 15, Abr 2025', description: <CustomLink href='ti3v32/guia26'>Guía 06</CustomLink> },
      { week: '', class: '18', date: 'Mié 16, Abr 2025', description: <CustomLink href='ti3v32/guia27'>Guía 07</CustomLink> },
      { week: '07', class: '19', date: 'Lun 21, Abr 2025', description: <CustomLink href='ti3v32/guia28'>Guía 08</CustomLink> },
      { week: '', class: '20', date: 'Mar 22, Abr 2025', description: <CustomLink href='ti3v32/guia29'>Guía 09</CustomLink> },
      { week: '', class: '21', date: 'Mié 23, Abr 2025', description: <><CustomLink href='ti3v32/eval02a'>Eval02-A</CustomLink>, <CustomLink href='ti3v32/eval02b'>Eval02-B</CustomLink></> },
      { week: '08', class: '22', date: 'Lun 28, Abr 2025', description: <CustomLink href='ti3v32/clase22'>Python, MongoDB y APIs</CustomLink> },
      { week: '', class: '23', date: 'Mar 29, Abr 2025', description: <CustomLink href='ti3v32/guia31'>Guía 10</CustomLink> },
      { week: '', class: '24', date: 'Mié 30, Abr 2025', description: <span style={{textDecoration: 'line-through'}}>Suspensión Clases</span> },
      { week: '09', class: '25', date: 'Lun 05, May 2025', description: <CustomLink href='ti3v32/guia32'>Guía 11</CustomLink> },
      { week: '', class: '26', date: 'Mar 06, May 2025', description: <><CustomLink href='ti3v32/eval03c'>Eval03-C</CustomLink>, <CustomLink href='ti3v32/eval03d'>Eval03-D</CustomLink></> },
      { week: '', class: '27', date: 'Mié 07, May 2025', description: 'Consultas y Cierre de Notas' },
    ],

    lectureData: [
      { week: '01', lecture: '01', date: 'Sáb 15, Mar 2025', description: <ExternalLink href="/inacap/ti3v32/docs/lectura01.pdf">Introducción a las bases de datos no estructuradas</ExternalLink> },
      { week: '', lecture: '02', date: 'Sáb 15, Mar 2025', description: <CustomLink href="ti3v32/lectura02">Bases de datos no estructuradas: características y tipos</CustomLink> },
      { week: '02', lecture: '03', date: 'Sáb 22, Mar 2025', description: <CustomLink href="ti3v32/lectura03">Elementos de las bases de datos no estructuradas documentales y características de Mongo DB</CustomLink> },
      { week: '03', lecture: '04', date: 'Sáb 29, Mar 2025', description: <ExternalLink href="/inacap/ti3v32/docs/lectura04.pdf">Operdores esenciales con MongoDB</ExternalLink> },
      { week: '', lecture: '05', date: 'Sáb 29, Mar 2025', description: <CustomLink href="ti3v32/lectura05">Etapas del proceso de instalación de MongoDB y principales comandos de gestión</CustomLink> },
      { week: '04', lecture: '06', date: 'Sáb 05, Abr 2025', description: <CustomLink href="ti3v32/lectura06">Operaciones CRUD en documentos y subdocumentos</CustomLink> },
      { week: '05', lecture: '07', date: 'Sáb 12, Abr 2025', description: <ExternalLink href="/inacap/ti3v32/docs/lectura07.pdf">Búsqueda avanzada con MongoDB</ExternalLink> },
      { week: '', lecture: '08', date: 'Sáb 12, Abr 2025', description: <CustomLink href="ti3v32/lectura08">Selección de filtros y condiciones según requerimientos de búsqueda</CustomLink> },
      { week: '06', lecture: '09', date: 'Sáb 19, Abr 2025', description: <CustomLink href="ti3v32/lectura09">Busqueda avanzada usando expresiones regulares</CustomLink> },
      { week: '07', lecture: '10', date: 'Sáb 26, Abr 2025', description: <CustomLink href="ti3v32/lectura10">Comandos de búsqueda en subdocumentos con iteración y asociaciones lógicas</CustomLink> },
    ],
};
export default courseData;