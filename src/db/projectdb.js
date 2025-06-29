import {
  c_programming,
  chakra,
  chartjs,
  css,
  express,
  html,
  javascript,
  mongodb,
  nextjs,
  node,
  promptEngineering,
  react,
  redux,
  linux,
  tailwind,
  typescript,
} from "./techstack";

import PortfolioImg from '../images/portfolio.png';
import DaemonManagerImg from '../images/daemon-manager.png';


export const ProjectList = [
  {
    heading: "SPARTAN",
    img: "https://raw.githubusercontent.com/SumatM/Spartan/main/readmeImages/Screenshot%20(504).png",
    title: "Charles Tyrwhitt Clone",
    description:
      "Spartan is a website dedicated to men's fashion, with a focus on formal wear. The website provides a platform for customers to create their own customized clothing, allowing them to tailor their clothing to fit their unique style and preferences.",
    techStack: [react, chakra, javascript, css],
    //liveLink: "https://marvelous-crack-5191.vercel.app/",
    gitLink: "#",
  },
  {
    heading: "DAEMON MANAGER",
    img: DaemonManagerImg,
    title: "Automated Daemon Manager (C/Linux)",
    description:
      "A Linux-based background daemon system built in C for automated file transfers, backups, and monitoring. It supports scheduled and manual triggers using fork(), message queues, and FIFO pipes. Secure directory locking, detailed logging (daemon_log.txt), and error handling ensure reliability. The system follows modular design principles and includes a Makefile for easy compilation, execution, and control.",
    techStack: [c_programming, linux ],
    gitLink: "https://github.com/Rahul9315/Daemon-Manager",
  },
  {
    heading: "  PORTFOLIO WEBPAGE ",
    img: PortfolioImg,
    title: " My Portfolio ",
    description:
      "This is my personal portfolio website built to showcase my skills, projects, and a little bit about myself. The website is created using React, Chakra UI, and Framer Motion to provide an interactive and visually appealing user experience. The project includes a glass-style navigation bar, an input form, and animations to enhance the overall design.",
    techStack: [html, javascript, css , chakra, react ],
    gitLink: "https://github.com/Rahul9315/Rahul_portfolio",
  },
  {
    heading: "TODO APP",
    title: "",
    img: "https://raw.githubusercontent.com/SumatM/react_reudx_todo_app/main/public/Screenshot%20(750).png",
    title: "Advance Todo Web App",
    description:
      "Todo App is a simple todo application that allows you to track your tasks and monitor the time taken to complete them.",
    techStack: [javascript, react, redux, chakra],
    liveLink: "https://sumat-todo-app.vercel.app/",
    gitLink: "https://github.com/SumatM/react_reudx_todo_app",
  },
  {
    heading: "WEB RESUME",
    img: "https://raw.githubusercontent.com/SumatM/web_resume/main/public/Screenshot%20(747).png",
    title: "Non PDF Resume",
    description:
      "Web Resume a professionally designed interactive platform that presents my skills and illustrious professional journey. With multi-theme support and captivating animations, it offers a compelling showcase of my expertise.",
    techStack: [nextjs, tailwind, redux],
    liveLink: "https://web-resume-six.vercel.app/resume",
    gitLink: "https://github.com/SumatM/web_resume",
  },
  {
    heading: "JOKE GENERATOR",
    img: "https://raw.githubusercontent.com/SumatM/joke_genrator/main/frontend/public/Screenshot%20(787).png",
    title: "Genrative AI Joke Generator App",
    description:
      "Created a fun Joke Generator app using OpenAI API, delivering a delightful experience with witty and entertaining jokes. Let the app bring laughter to your day with clever humor!",
    techStack: [react,typescript,node,promptEngineering,express],
    liveLink: "https://joke-indol.vercel.app/",
    gitLink: "https://github.com/SumatM/joke_genrator",
  },

];

