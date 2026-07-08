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
        description: "Pinyin",
        href: "chino/temas/pinyin",
        hasContent: true
      },
      {
        item: "02",
        description: "Hanzi"
      },
      {
        item: "03",
        description: "Gramática"
      },
      {
        item: "04",
        description: "Partículas"
      },
      {
        item: "05",
        description: "Verbos"
      },
      {
        item: "06",
        description: "Adjetivos"
      },
      {
        item: "07",
        description: "Oraciones"
      }
    ]
  };