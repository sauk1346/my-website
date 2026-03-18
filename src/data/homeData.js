export const homeData = {
  programacion: {
    id: "programacion",
    title: "Programación",
    description: "Apuntes y recursos de aprendizaje",
    cardsData: {
      inacap: {
        name: "Ingeniería Informática",
        description: "Semestres",
        image: "/logos/inacap_logo.png",
        link: "/inacap"
      },
      leetcode: {
        name: "LeetCode",
        description: "Ejercicios Programación",
        image: "/logos/codeTraining.png",
        link: "/leetcode"
      },
      codevault: {
        name: "CodeVault",
        description: "Colección Algoritmos",
        image: "/logos/algorithms.jpg",
        link: "/codevault"
      },
      elearning: {
        name: "E-Learning",
        description: "Plataformas",
        image: "/logos/learnlogo.png",
        link: "/elearning"
      },
      bootcamp: {
        name: "Bootcamp",
        description: "Academias",
        image: "/logos/bootcamp.png",
        link: "/bootcamp"
      }
    }
  },

  idiomas: {
    id: "idiomas",
    title: "Idiomas",
    description: "Apuntes Idiomas de interés",
    cardsData: {
      aleman: {
        name: "Alemán",
        description: "Lerne Deutsch",
        image: "https://kapowaz.github.io/square-flags/flags/de.svg",
        link: "/aleman"
      },
      coreano: {
        name: "Coreano",
        description: "한국어를 배우세요",
        image: "https://kapowaz.github.io/square-flags/flags/kr.svg",
        link: "/coreano"
      },
      chino: {
        name: "Chino Mandarín",
        description: "学习普通话",
        image: "https://kapowaz.github.io/square-flags/flags/cn.svg",
        link: "/chino"
      },
      ingles: {
        name: "Inglés",
        description: "Learn English",
        image: "https://kapowaz.github.io/square-flags/flags/us.svg",
        link: "/ingles"
      },
      japones: {
        name: "Japonés",
        description: "日本語を勉強して",
        image: "https://kapowaz.github.io/square-flags/flags/jp.svg",
        link: "/japones"
      },
      ruso: {
        name: "Ruso",
        description: "Учи русский",
        image: "https://kapowaz.github.io/square-flags/flags/ru.svg",
        link: "/ruso"
      }
    }
  },

  sobreMi: {
    id: "sobre-mi",
    title: "Sobre mí",
    description: "Información profesional y proyectos",
    cardsData: {
      portfolio: {
        name: "Portfolio",
        description: "Desarrollos",
        image: "/logos/portfolio.png",
        link: "https://www.antoniomorales.cl"
      }
    }
  }
};

// Array con todas las secciones en orden
export const sectionsOrder = [
  homeData.programacion,
  homeData.idiomas,
  homeData.sobreMi
];