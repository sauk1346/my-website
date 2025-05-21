export const hackerRankCategories = {
  "hr01": {
    code: "HR01",
    title: "Algorithms",
    description: "Algorithm challenges for problem solving skills",
    icon: "/logos/hackerrank/hr01.svg",
    category: "Programming",
    hasContent: false 
  },
  "hr02": {
    code: "HR02",
    title: "Artificial Intelligence",
    description: "Challenges related to AI and machine learning concepts",
    icon: "/logos/hackerrank/hr02.svg",
    category: "Specialized",
    hasContent: false
  },
  "hr03": {
    code: "HR03",
    title: "C",
    description: "Challenges for the C programming language",
    icon: "/logos/hackerrank/hr03.svg",
    category: "Languages",
    hasContent: false
  },
  "hr04": {
    code: "HR04",
    title: "C++",
    description: "Challenges for C++ programming language",
    icon: "/logos/hackerrank/hr04.svg",
    category: "Languages",
    hasContent: false
  },
  "hr05": {
    code: "HR05",
    title: "Data Structures",
    description: "Challenges focused on data structures implementation",
    icon: "/logos/hackerrank/hr05.svg",
    category: "Programming",
    hasContent: false
  },
  "hr06": {
    code: "HR06",
    title: "Databases",
    description: "SQL and database management challenges",
    icon: "/logos/hackerrank/hr06.svg",
    category: "Specialized",
    hasContent: false
  },
  "hr07": {
    code: "HR07",
    title: "Functional Programming",
    description: "Functional programming paradigm challenges",
    icon: "/logos/hackerrank/hr07.svg",
    category: "Programming",
    hasContent: false
  },
  "hr08": {
    code: "HR08",
    title: "Java",
    description: "Challenges for Java programming language",
    icon: "/logos/hackerrank/hr08.svg",
    category: "Languages",
    hasContent: false
  },
  "hr09": {
    code: "HR09",
    title: "Linux Shell",
    description: "Shell scripting and Unix commands challenges",
    icon: "/logos/hackerrank/hr09.svg",
    category: "Specialized",
    hasContent: false
  },
  "hr10": {
    code: "HR10",
    title: "Mathematics",
    description: "Math problems and numerical computation challenges",
    icon: "/logos/hackerrank/hr10.svg",
    category: "Specialized",
    hasContent: false
  },
  "hr11": {
    code: "HR11",
    title: "Python",
    description: "Challenges for Python programming language",
    icon: "/logos/hackerrank/hr11.svg",
    category: "Languages",
    hasContent: true
  },
  "hr12": {
    code: "HR12",
    title: "React",
    description: "Frontend development challenges with React",
    icon: "/logos/hackerrank/hr12.svg",
    category: "Web",
    hasContent: false
  },
  "hr13": {
    code: "HR13",
    title: "Regex",
    description: "Regular expressions challenges",
    icon: "/logos/hackerrank/hr13.svg",
    category: "Programming",
    hasContent: false
  },
  "hr14": {
    code: "HR14",
    title: "Ruby",
    description: "Challenges for Ruby programming language",
    icon: "/logos/hackerrank/hr14.svg",
    category: "Languages",
    hasContent: false
  },
  "hr15": {
    code: "HR15",
    title: "SQL",
    description: "SQL query challenges and database problems",
    icon: "/logos/hackerrank/hr15.svg",
    category: "Databases",
    hasContent: false
  }
};

// Helper functions
export const getCategoryByCode = (code) => {
  const lowerCode = code.toLowerCase();
  return hackerRankCategories[lowerCode] || null;
};

export const getAllCategories = () => {
  return Object.values(hackerRankCategories);
};

export const getCategoriesByType = (categoryType) => {
  return Object.values(hackerRankCategories)
    .filter(category => category.category === categoryType);
};

export const getCategoryTypes = () => {
  const types = new Set(getAllCategories().map(cat => cat.category));
  return Array.from(types);
};