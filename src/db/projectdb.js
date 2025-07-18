import {
  c_programming,
  chakra,
  chartjs,
  css,
  java,
  express,
  html,
  javascript,
  mongodb,
  mySQL,
  nextjs,
  supabaseIcon,
  node,
  kalilinux,
  machinelearning,
  promptEngineering,
  react,
  redux,
  androidstudio,
  linux,
  flaskicon,
  tailwind,
  typescript,
  python,
} from "./techstack";

import PortfolioImg from '../images/portfolio.png';
import DaemonManagerImg from '../images/daemon-manager.png';
import NidpsImg from '../images/Network-Intrusion-Detection-System.png';
import SecureMultithreadedFileTransferSystemImg from '../images/Secure-Multithreaded-File-Transfer-System.png';
import talkingClockImg from '../images/talking clock.png';
import ExpenseTrackerImg from '../images/ExpenseTracker.png';

export const ProjectList = [

  {
    heading: "Talking Clock",
    title: "Accessibility-Focused Android App",
    img: talkingClockImg,
    description:
      "Contributed to the development of an Android app supporting individuals with special needs by announcing time and setting daily alarms. Implemented backend logic using Java and XML in Android Studio, with minor database integration for user preferences. Collaborated with co-designers to create a simple, accessible interface tailored to the cognitive abilities of the users.",
    techStack: [java, mySQL, androidstudio],
    gitLink: "https://github.com/Rahul9315/TalkingClock",
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
    heading: "NIDPS",
    img: NidpsImg,
    title: "Network Intrusion Detection and Prevention System",
    description:
      "A Python-based NIDPS that captures real-time network traffic using PyShark and provides a Flask-powered web dashboard for intrusion detection and response. Supports both automatic and manual IP blocking, live monitoring, and cross-platform deployment (Linux/Windows). Ideal for use on Linux VMs, it offers a lightweight yet effective solution for securing networks with real-time visibility and control.",
    techStack: [kalilinux,linux , python, html,javascript, css,machinelearning,mySQL , flaskicon],
    //liveLink: "https://marvelous-crack-5191.vercel.app/",
    gitLink: "https://github.com/Rahul9315/Network-Intrusion-Detection-and-Prevention-System-NIDPS-",
  },

  {
    heading: "Expense Tracker",
    img: ExpenseTrackerImg,
    title: "Expense Tracker Mobile App",
    description:
      "A cross-platform mobile app designed to help users track daily expenses, categorize spending, and visualize budget trends. Built using React Native with a backend powered by Express.js and Supabase for authentication and real-time database storage. Deployed via Render, the app offers a secure and intuitive interface, ensuring seamless financial management on the go using modern JavaScript technologies.",
    techStack: [javascript, react , supabaseIcon, express],
    //liveLink: "https://marvelous-crack-5191.vercel.app/",
    gitLink: "https://github.com/Rahul9315/ExpenseTrackerv1.0",
  },


  {
    heading: "Tenant Book",
    img: "https://github.com/Rahul9315/Rahul_portfolio/blob/main/src/images/TenantBook.png?raw=true",
    title: "App for Landlords",
    description:
      "Designed and developed a self-initiated Tenant Book Data App, a lightweight CRM-style web tool for landlords to manage tenant and payment records. Built the full stack using Python, Flask, SQL, JavaScript, HTML, and CSS. Implemented database structures, backend logic, and interactive UI with features like data filtering and summaries. The project streamlined rental data management and showcased my end-to-end development capabilities.",
    techStack: [python, css, flaskicon, javascript,html ],
    gitLink: "https://rahulbaghel.netlify.app/",
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
    heading: "Secure Multithreaded File Transfer System",
    img: SecureMultithreadedFileTransferSystemImg,
    title: "Efficient and Safe Client-Server File Transfers Using C and Linux Sockets",
    description:
      "A C-based client-server application for secure file transfers within a company’s internal network. Built for Linux using sockets and pthread, the system supports multithreaded client handling, user-based file ownership via UID, and department-specific routing (e.g., Manufacturing, Distribution). Thread-safe file writes use mutex locks, and metadata integrity is enforced before transfer. Designed for LAN use, it ensures secure, controlled, and race-condition–free file submissions to the server.",
    techStack: [c_programming , linux],
    gitLink: "https://github.com/Rahul9315/Secure-Multithreaded-File-Transfer-System-C---Linux-",
  },

  

];

