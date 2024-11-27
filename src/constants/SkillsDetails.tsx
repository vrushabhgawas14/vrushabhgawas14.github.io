import {
  languageImages,
  frameworkLibrariesImages,
  databaseImages,
  backendImages,
  toolsImages,
} from "../assets";

export const TechStackData = [
  // Languages
  {
    catogory: "Languages",
    svgWidth: "w-20 sm:w-16",
    content: [
      {
        motionDuration: 5,
        title: "JavaScript",
        img: languageImages.javascript,
      },
      {
        motionDuration: 3,
        title: "TypeScript",
        img: languageImages.typescript,
      },
      {
        motionDuration: 4,
        title: "Java",
        img: languageImages.java,
      },
      {
        motionDuration: 5,
        title: "Python",
        img: languageImages.python,
      },
      {
        motionDuration: 3,
        title: "Golang",
        img: languageImages.golang,
      },
      {
        motionDuration: 6,
        title: "HTML",
        img: languageImages.html,
      },
      {
        motionDuration: 4,
        title: "CSS",
        img: languageImages.css,
      },
      {
        motionDuration: 4,
        title: "MarkDown",
        img: languageImages.markdown,
      },
    ],
  },
  // Frameworks & Lib
  {
    catogory: "Framework & Libraries",
    svgWidth: "w-20 sm:w-16",
    content: [
      {
        motionDuration: 5,
        title: "React",
        img: frameworkLibrariesImages.react,
      },
      {
        motionDuration: 3,
        title: "Next",
        img: frameworkLibrariesImages.next,
      },
      {
        motionDuration: 4,
        title: "Tailwindcss",
        img: frameworkLibrariesImages.tailwindcss,
      },
      {
        motionDuration: 2,
        title: "BootStrap",
        img: frameworkLibrariesImages.bootstrap,
      },
      {
        motionDuration: 4,
        title: ".Net",
        img: frameworkLibrariesImages.dotnet,
      },
    ],
  },
  // Database
  {
    catogory: "Database",
    svgWidth: "w-32 sm:w-24",
    content: [
      {
        motionDuration: 5,
        title: "MySQL",
        img: databaseImages.mysql,
      },
      {
        motionDuration: 4,
        title: "Firebase",
        img: databaseImages.firebase,
      },
      {
        motionDuration: 3,
        title: "MongoDB",
        img: databaseImages.mongodb,
      },
    ],
  },
  // Backend
  {
    catogory: "Backend",
    svgWidth: "w-28 sm:w-24",
    content: [
      {
        motionDuration: 4,
        title: "Nodejs",
        img: backendImages.nodejs,
      },
      {
        motionDuration: 3,
        title: "Nextjs",
        img: backendImages.next,
      },
      {
        motionDuration: 5,
        title: "Expressjs",
        img: backendImages.expressjs,
      },
    ],
  },
  // Tools & Platforms
  {
    catogory: "Tools & Platforms",
    svgWidth: "w-20 sm:w-16",
    content: [
      {
        motionDuration: 2,
        title: "Git",
        img: toolsImages.git,
      },
      {
        motionDuration: 4,
        title: "Docker",
        img: toolsImages.docker,
      },
      {
        motionDuration: 3,
        title: "Github",
        img: toolsImages.github,
      },
      {
        motionDuration: 4,
        title: "VsCode",
        img: toolsImages.vscode,
      },
      {
        motionDuration: 2,
        title: "Ubuntu",
        img: toolsImages.ubuntu,
      },
      {
        motionDuration: 5,
        title: "Npm",
        img: toolsImages.npm,
      },
      {
        motionDuration: 3,
        title: "Vercel",
        img: toolsImages.vercel,
      },
    ],
  },
];
