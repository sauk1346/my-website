# SaukCode - Learning Resources Platform

A web platform built with Next.js for sharing programming notes, coding exercises, and educational content.

🌐 **Live Site:** [saukcode.cl](https://saukcode.cl/)

## 📚 About

SaukCode is an educational platform that compiles and organizes learning resources:

- **Programming & Computer Science**: Semester notes (INACAP), coding exercises, algorithm collections
- **Flashcards**: Study decks generated from YAML sources
- **Professional Development**: Projects and developments showcase

## 🛠️ Built With

- Next.js (App Router) / React
- MDX for lesson content, with KaTeX (math) and Prism (code highlighting)
- SQLite (better-sqlite3 + Drizzle) for the flashcards database, generated at build time

## 📁 Project Structure
```
├── public/            # Static assets (not included in repository)
├── src/
│   ├── app/           # Next.js App Router pages
│   ├── components/    # React components (mdx, features, layout, ui, common)
│   ├── content/       # Lesson content in MDX, organized by section/course
│   ├── data/          # Course metadata and flashcards YAML sources
│   ├── lib/           # Flashcards DB access, setup and seed scripts
│   ├── hooks/         # Shared React hooks
│   ├── shared/        # Shared CSS modules
│   └── utils/         # Route/content helpers
└── ...
```

## ⚠️ Important Note

The `public/` folder containing multimedia resources (PDFs, videos, audio files, archives) is **not included** in this repository due to file size constraints.

To view the complete site with all resources: [saukcode.cl](https://saukcode.cl/)

## 🚀 Getting Started

### Prerequisites

- Node.js (version 20.18.1 or higher)
- npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/sauk1346/my-website.git
cd my-website
```

2. Install dependencies
```bash
npm install
```

3. Generate the flashcards database (SQLite, built from the YAML files in `src/data/flashcards/`)
```bash
npm run db:setup
npm run db:seed
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Flashcards database

`flashcards.db` is a **derived artifact**: it is generated from the YAML sources in
`src/data/flashcards/` and is not committed to the repository. The `prebuild` script
regenerates it automatically before every `npm run build`, so a fresh clone builds
without manual steps. To add or edit flashcards, edit the YAML files and re-run
`npm run db:seed` (never write to the SQLite file directly).

## 📝 Features

- **Organized Content**: Structured by semesters, topics, and categories
- **Interactive Study Tools**: Quizzes and flashcard decks
- **Algorithm Collection**: Curated collection of programming algorithms
- **Responsive Design**: Optimized for desktop and mobile devices

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

If you find any errors or have suggestions for improvement:
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the [MIT License](LICENSE) - feel free to use this code for your own learning projects.

## 🌟 Acknowledgments

- Thanks to all the open-source resources that made this project possible
- Inspired by the spirit of sharing knowledge and collaborative learning

---

⭐ If you find this project useful, consider giving it a star!
