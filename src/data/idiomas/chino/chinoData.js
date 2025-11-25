import { generateLanguageCourses } from '@/utils/idiomasUtils';

export const chinoData = {
    title: "Chino Mandarín",
    // Los cursos se generan automáticamente desde los archivos individuales
    get courses() {
        return generateLanguageCourses('chino');
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
        description: "Pinyin"
      },
      {
        item: "04",
        description: "Hanzi"
      },
      {
        item: "05",
        description: "Partículas"
      },
      {
        item: "06",
        description: "Verbos"
      },
      {
        item: "07",
        description: "Adjetivos"
      },
      {
        item: "08",
        description: "Vocabulario"
      },
      {
        item: "09",
        description: "Frases"
      },
      {
        item: "10",
        description: "Oraciones"
      }
    ]
  };