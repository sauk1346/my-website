const courseData = {
  courseCode: "TILV21",
  courseTitle: "Plan de Pruebas de Software",
  courseDescription: "Plan de Pruebas de Software es una asignatura práctica del área formativa de especialidad de Tecnologías de Información y Ciberseguridad, dictada en modalidad online. Al finalizar, el estudiante será capaz de garantizar la funcionalidad, seguridad y eficiencia en el desarrollo de software, considerando la Resolución de problemas, Innovación y Emprendimiento.",
  professorData: {
      name: "Eduardo Andrés Barría Gallardo",
      email: "eduardo.barria03@inacapmail.cl"
  },  
  unitsData: [
      { 
          unit: '1',
          description: 'Introducción y Fundamentos de Testing de Software'
      },
      { 
          unit: '2',
          description: 'Técnicas de Testing'
      },
      { 
          unit: '3',
          description: 'Gestión de Defectos, Combinación de Valores de Prueba y Exploración'
      },
  ],  
  evaluationsData: [
      { 
          evaluationNumber: 1,
          date: 'Mié 09, Abr 2025',
          weighting: '20% * 75%', 
          description: {
              text: 'Evaluación 01',
              href: 'tilv21/eval01'
          }
      },
      { 
          evaluationNumber: 2,
          date: 'Mié 30, Abr 2025', 
          weighting: '30% * 75%', 
          description: {
              text: 'Informe 01',
              href: '/inacap/tilv21/docs/informe01.pdf',
              external: true
          }
      },
      {
          evaluationNumber: 3, 
          date: 'Jue 08, May 2025',
          weighting: '35% * 75%',
          description: {
              text: 'Informe 02',
              href: '/inacap/tilv21/docs/informe02.pdf',
              external: true
          }
      },
      { 
          evaluationNumber: 4, 
          date: 'Jue 08, May 2025',
          weighting: '15% * 75%',
          description: {
              text: 'Promedio controles',
              href: 'tilv21/controles'
          }
      },
      { 
          evaluationNumber: 5,
          date: 'Vie 16, May 2025',
          weighting: '25%',
          description: {
              text: 'Examen'
          },
          quickGuide: [
              {
                  text: 'Controles',
                  href: 'tilv21/controles'
              },
              {
                  text: 'Lecturas',
                  href: 'tilv21/lecturas'
              },
              {
                  text: 'Unidad01',
                  href: 'tilv21/unidad01'
              },
              {
                  text: 'Unidad02',
                  href: 'tilv21/unidad02'
              },
              {
                  text: 'Unidad03',
                  href: 'tilv21/unidad03'
              }
          ]
      }
  ],
  lectureData: [
      { 
          week: '01', 
          lecture: '01', 
          date: 'Sáb 15, Mar 2025', 
          description: [
              {
                  text: 'Conceptos básicos en el desarrollo de software',
                  href: 'tilv21/lectura01'
              }
          ]
      },
      { 
          week: '', 
          lecture: '02', 
          date: 'Sáb 15, Mar 2025', 
          description: [
              {
                  text: 'Requisitos y calidad de software según Estándar ISO/IEC 25000',
                  href: 'tilv21/lectura02'
              }
          ]
      },
      { 
          week: '02', 
          lecture: '03', 
          date: 'Sáb 22, Mar 2025', 
          description: [
              {
                  text: 'Estándares de testing, basados en normas y estándares de la industria del software',
                  href: 'tilv21/lectura03'
              }
          ]
      },
      { 
          week: '03', 
          lecture: '04', 
          date: 'Sáb 29, Mar 2025', 
          description: [
              {
                  text: 'Síntesis de la Unidad 01',
                  href: 'tilv21/lectura04'
              }
          ]
      },
      { 
          week: '04', 
          lecture: '05', 
          date: 'Sáb 05, Abr 2025', 
          description: [
              {
                  text: 'Técnicas y herramientas de testing',
                  href: 'tilv21/lectura05'
              }
          ]
      },
      { 
          week: '', 
          lecture: '06', 
          date: 'Sáb 05, Abr 2025', 
          description: [
              {
                  text: 'Alcances y definiciones de los tipos de testing en el desarrollo de sorftware',
                  href: 'tilv21/lectura06'
              }
          ]
      },
      { 
          week: '05', 
          lecture: '07', 
          date: 'Sáb 12, Abr 2025', 
          description: [
              {
                  text: 'Cómo detectar la complejidad del testing',
                  href: 'tilv21/lectura07'
              }
          ]
      },
      { 
          week: '', 
          lecture: '08', 
          date: 'Sáb 12, Abr 2025', 
          description: [
              {
                  text: 'Soluciones a problemas y criterios de factibilidad con técnicas de testing',
                  href: 'tilv21/lectura08'
              }
          ]
      },
      { 
          week: '06', 
          lecture: '09', 
          date: 'Sáb 19, Abr 2025', 
          description: [
              {
                  text: 'Síntesis de la Unidad 02',
                  href: 'tilv21/lectura09'
              }
          ]
      },
      { 
          week: '07', 
          lecture: '10', 
          date: 'Sáb 26, Abr 2025', 
          description: [
              {
                  text: 'Gestión de defectos, combinación de valores de prueba y exploración',
                  href: 'tilv21/lectura10'
              }
          ]
      },
      { 
          week: '', 
          lecture: '11', 
          date: 'Sáb 26, Abr 2025', 
          description: [
              {
                  text: 'Técnicas para pruebas exploratorias',
                  href: 'tilv21/lectura11'
              }
          ]
      },
      { 
          week: '', 
          lecture: '12', 
          date: 'Sáb 26, Abr 2025', 
          description: [
              {
                  text: 'Ciclo de vida de un defecto de software',
                  href: 'tilv21/lectura12'
              }
          ]
      },
      { 
          week: '08', 
          lecture: '13', 
          date: 'Sáb 03, May 2025', 
          description: [
              {
                  text: 'Defectos, errores y fallos según criterios de factibilidad de plan de pruebas',
                  href: 'tilv21/lectura13'
              }
          ]
      },
      { 
          week: '', 
          lecture: '14', 
          date: 'Sáb 03, May 2025', 
          description: [
              {
                  text: 'Procesos de seguimiento en el monitoreo',
                  href: 'tilv21/lectura14'
              }
          ]
      },
      { 
          week: '09', 
          lecture: '15', 
          date: 'Sáb 10, May 2025', 
          description: [
              {
                  text: 'Síntesis de la Unidad 03',
                  href: 'tilv21/lectura15'
              }
          ]
      }
  ]
};

export default courseData;