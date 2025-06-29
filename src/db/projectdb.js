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

export const ProjectList = [
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
    heading: "Talking Clock",
    title: "Accessibility-Focused Android App",
    img: talkingClockImg,
    description:
      "A Java-based Android app designed for individuals with disabilities to help them manage time independently. Features include an easy-to-navigate interface, customizable alarms, and text-to-speech functionality for time and reminders. Users or caregivers can add alarms with audio or visual cues. Built with accessibility in mind, the app was co-designed with end users to ensure it’s intuitive, inclusive, and helpful for daily time management and planning.",
    techStack: [java, mySQL, androidstudio],
    gitLink: "https://github.com/Rahul9315/TalkingClock",
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

