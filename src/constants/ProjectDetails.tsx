import { projectImages } from "../assets";

export const Details = [
  {
    img: projectImages.athawdabazaar,
    name: "Athawda Bazaar",
    bio: "Its my college event where few students are allowed to setup stall and sell their products. I developed a offical website for this college event.",
    stack: ["Next.js", "MongoDB Atlas", "Ts", "React", "TailwindCss", "Vercel"],
    webLink: "https://athawda-bazaar.vercel.app",
    codeLink: "https://github.com/vrushabhgawas14/sathayebazaar",
    projectDate: "Dec 2024",
  },
  {
    img: projectImages.travelAgency,
    name: "Travel in a Blink",
    bio: "A modern travel agency project offering seamless and fast travel experiences. (Note : This Project is still in development.)",
    stack: ["Next.js", "React", "Ts", "Js", "TailwindCss", "Vercel"],
    webLink: "https://travel-in-a-blink.vercel.app",
    codeLink: "https://github.com/vrushabhgawas14/",
    projectDate: "Oct 2024",
  },
  {
    img: projectImages.portfolio,
    name: "Portfolio Website",
    bio: "Portfolio Website to showcase skills, projects and to provide personal information.",
    stack: ["React", "Ts", "TailwindCss", "Js", "Docker", "Web3Forms"],
    webLink: "https://vrushabhgawas14.github.io/",
    codeLink: "https://github.com/vrushabhgawas14/vrushabhgawas14.github.io",
    projectDate: "Apr 2024",
  },
  {
    img: projectImages.musicPlayer,
    name: "Music Player",
    bio: "Mini Music Player Project made with JavaScript, helps you navigate previous and next track and selecting song language.",
    stack: ["JavaScript", "Css", "HTML"],
    webLink: "https://vrushabhgawas14.github.io/mini-music-player/",
    codeLink: "https://github.com/vrushabhgawas14/mini-music-player",
    projectDate: "Feb 2024",
  },
  {
    img: projectImages.toDo,
    name: "To Do List",
    bio: "Simple To Do List to maintain your day to day To do's.",
    stack: ["JavaScript", "Css", "HTML", "Dockerfile"],
    webLink: "https://vrushabhgawas14.github.io/ToDoList/",
    codeLink: "https://github.com/vrushabhgawas14/ToDoList",
    projectDate: "Oct 2023",
  },
  {
    img: projectImages.ticTacToe,
    name: "Tic Tac Toe Game",
    bio: "Tic Tac Toe Game developed with React. Automatically resets on Tie.",
    stack: ["JavaScript", "React", "HTML", "TailwindCss"],
    webLink: "https://vrushabhgawas14.github.io/tic-tac-toe-react-app/",
    codeLink: "https://github.com/vrushabhgawas14/tic-tac-toe-react-app",
    projectDate: "Apr 2024",
  },
  {
    img: projectImages.qrGenerator,
    name: "QR Generator",
    bio: "Generates QR code with Text or URL provided. You can scan the QR to get the information.",
    stack: ["JavaScript", "Css", "API", "HTML"],
    webLink: "https://vrushabhgawas14.github.io/QR-Code-Generator/",
    codeLink: "https://github.com/vrushabhgawas14/QR-Code-Generator",
    projectDate: "Jan 2024",
  },
];

export const arrowSVG = {
  back: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      className="ml-10 w-12 h-18 cursor-pointer opacity-80 hover:opacity-100 sm:hidden fill-slate-700 dark:fill-zinc-400"
    >
      <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
    </svg>
  ),
  next: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      className="mr-10 w-12 h-18 cursor-pointer opacity-80 hover:opacity-100 sm:hidden fill-slate-700 dark:fill-zinc-400"
    >
      <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
    </svg>
  ),
};
