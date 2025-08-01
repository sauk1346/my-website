// elearningData.js - Datos originales simples
export const platformsData = {
    coursera: {
      name: "Coursera",
      logo: "/logos/coursera.png",
      courses: [
        { 
          id: 1, 
          title: "Machine Learning", 
          code: "ML-001", 
          instructor: "Andrew Ng",
          link: "https://www.coursera.org/learn/machine-learning"
        },
        { 
          id: 2, 
          title: "Deep Learning", 
          code: "DL-002", 
          instructor: "Andrew Ng",
          link: "https://www.coursera.org/specializations/deep-learning"
        },
        { 
          id: 3, 
          title: "Python for Data Science", 
          code: "PY-003", 
          instructor: "IBM",
          link: "https://www.coursera.org/learn/python-for-applied-data-science-ai"
        }
      ]
    },
    codigofacilito: {
      name: "CódigoFacilito",
      logo: "/logos/codigofacilito.png",
      courses: [
        { 
          id: 4, 
          title: "JavaScript Moderno", 
          code: "JS-004", 
          instructor: "Eduardo Fierro",
          link: "https://codigofacilito.com/cursos/javascript-profesional"
        },
        { 
          id: 5, 
          title: "React desde cero", 
          code: "RC-005", 
          instructor: "Carlos Azaustre",
          link: "https://codigofacilito.com/cursos/react"
        }
      ]
    },
    devtalles: {
      name: "DevTalles",
      logo: "/logos/devtalles.png",
      courses: [
        { 
          id: 6, 
          title: "Flutter: Tu guía completa", 
          code: "FL-006", 
          instructor: "Fernando Herrera",
          link: "https://cursos.devtalles.com/courses/flutter-ios-android-fernando-herrera"
        },
        { 
          id: 7, 
          title: "Node.js de cero a experto", 
          code: "ND-007", 
          instructor: "Fernando Herrera",
          link: "https://cursos.devtalles.com/courses/node-de-cero-a-experto"
        }
      ]
    },
    platzi: {
      name: "Platzi",
      logo: "/logos/platzi.png",
      courses: [
        { 
          id: 8, 
          title: "Curso de Frontend Developer", 
          code: "FE-008", 
          instructor: "Platzi Team",
          link: "https://platzi.com/cursos/frontend-developer/"
        },
        { 
          id: 9, 
          title: "Curso de Backend con Node.js", 
          code: "BE-009", 
          instructor: "Platzi Team",
          link: "https://platzi.com/cursos/backend-nodejs/"
        }
      ]
    },
    udemy: {
      name: "Udemy",
      logo: "/logos/udemy.png",
      courses: [
        { 
          id: 10, 
          title: "The Complete JavaScript Course", 
          code: "JS-010", 
          instructor: "Jonas Schmedtmann",
          link: "https://www.udemy.com/course/the-complete-javascript-course/"
        },
        { 
          id: 11, 
          title: "React - The Complete Guide", 
          code: "RC-011", 
          instructor: "Maximilian Schwarzmüller",
          link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
        }
      ]
    }
  };