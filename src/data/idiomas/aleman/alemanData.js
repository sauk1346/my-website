// alemanData.js - Ejemplo de cómo se vería cuando esté completo
export const alemanData = {
    title: "Alemán",
    courses: [
      {
        code: null,
        name: null,
        href: "",
        platform: null,
        professor: null,
        certificate: null
      },
    ],
    topics: [
      {
        item: "01",
        description: "Alfabeto Alemán",
        href: "aleman/temas/alfabeto",
        hasContent: true
      },
      {
        item: "02",
        description: "Gramática"
      },
      {
        item: "03",
        description: "Partículas"
      },
      {
        item: "04",
        description: "Verbos"
      },
      {
        item: "05",
        description: "Adjectivos"
      },
      {
        item: "06",
        description: "Oraciones"
      }
    ]
  };
  
  // Cuando esté listo, solo cambiarías el import:
  // import { alemanDataFuturo as alemanData } from '@/data/idiomas/aleman/alemanData';