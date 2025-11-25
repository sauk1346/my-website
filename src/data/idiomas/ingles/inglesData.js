import { generateLanguageCourses } from '@/utils/idiomasUtils';

export const inglesData = {
    title: "Inglés",
    // Los cursos se generan automáticamente desde los archivos individuales
    get courses() {
        return generateLanguageCourses('ingles');
    },
    topics: [
      {
        item: "01",
        description: "IPA"
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
        description: "Phrasal Verbs"
      },
      {
        item: "06",
        description: "Adjetivos"
      },
      {
        item: "07",
        description: "Vocabulario"
      },
      {
        item: "08",
        description: "Frases"
      },
      {
        item: "09",
        description: "Oraciones"
      }
    ]
  };