// @/data/bootcamp/bootcampData.js

export const bootcampsData = {
  udd: {
    name: "UDD",
    description: "Apuntes",
    image: "/logos/udd.png",
    courses: [
      {
        code: "UDD001",
        title: "Desarrollo Web Fullstack",
        certificateUrl: "/bootcamp/udd001/docs/DWFS-Diploma.pdf"
      },
      {
        code: "UDD002", 
        title: "Ciencia de Datos e Inteligencia Artificial",
        certificateUrl: "/bootcamp/udd002/docs/DS-Diploma.pdf"
      },
    ]
  },
  codfacilito: {
    name: "CódigoFacilito",
    description: "Apuntes", 
    image: "/logos/codigofacilito.png",
    courses: [
      {
        code: "CFT001",
        title: "Ciencia de Datos",
        certificateUrl: null
      },
      {
        code: "CFT002",
        title: "DevOps", 
        certificateUrl: null
      },
      {
        code: "CFT003",
        title: "Python",
        certificateUrl: null
      },
    ]
  }
};