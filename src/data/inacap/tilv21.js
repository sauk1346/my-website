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
              href: 'tilv01/eval01'
          }
      },
      { 
          evaluationNumber: 2,
          date: 'Mié 30, Abr 2025', 
          weighting: '30% * 75%', 
          description: {
              text: 'Informe 01',
              href: '/inacap/tilv01/docs/informe01.pdf',
              external: true
          }
      },
      {
          evaluationNumber: 3, 
          date: 'Jue 08, May 2025',
          weighting: '35% * 75%',
          description: {
              text: 'Informe 02',
              href: '/inacap/tilv01/docs/informe02.pdf',
              external: true
          }
      },
      { 
          evaluationNumber: 4, 
          date: 'Jue 08, May 2025',
          weighting: '15% * 75%',
          description: {
              text: 'Promedio controles',
              href: 'tilv01/controles'
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
                  href: 'tilv01/controles'
              },
              {
                  text: 'Lecturas',
                  href: 'tilv01/lecturas'
              },
              {
                  text: 'Unidad01',
                  href: 'tilv01/unidad01'
              },
              {
                  text: 'Unidad02',
                  href: 'tilv01/unidad02'
              },
              {
                  text: 'Unidad03',
                  href: 'tilv01/unidad03'
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
                  href: 'tilv01/lectura01'
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
                  href: 'tilv01/lectura02'
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
                  href: 'tilv01/lectura03'
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
                  href: 'tilv01/lectura04'
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
                  href: 'tilv01/lectura05'
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
                  href: 'tilv01/lectura06'
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
                  href: 'tilv01/lectura07'
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
                  href: 'tilv01/lectura08'
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
                  href: 'tilv01/lectura09'
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
                  href: 'tilv01/lectura10'
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
                  href: 'tilv01/lectura11'
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
                  href: 'tilv01/lectura12'
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
                  href: 'tilv01/lectura13'
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
                  href: 'tilv01/lectura14'
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
                  href: 'tilv01/lectura15'
              }
          ]
      }
  ]
};

export default courseData;