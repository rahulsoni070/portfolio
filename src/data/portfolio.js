import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";

export const personal = {
  name: "Rahul Soni",
  role: "Backend-Focused Full-Stack Developer",
  tagline:
    "I build secure REST APIs with Node.js, Express and MongoDB, add AI features with LLM APIs, and ship the React frontend too.",
  location: "Jaipur, India · Open to relocation",
  resumeUrl: "/Rahul_Soni_Resume.pdf",
};


export const socials = [
  { name: "GitHub", url: "https://github.com/rahulsoni070", icon: FaGithub },
  { name: "LinkedIn", url: "https://linkedin.com/in/rahulsoni0707", icon: FaLinkedin },
  { name: "Twitter", url: "https://x.com/Rahulso43411291", icon: FaXTwitter },
  { name: "Email", url: "mailto:rahulsoni66676@gmail.com", icon: FaEnvelope },
];

export const about = [
  "I'm a final-year B.Tech CSE student at JECRC University (graduating June 2027) who enjoys the backend side of things: APIs, auth, data modelling and making systems reliable.",
  "I've built and deployed full-stack projects with Google OAuth, role-based access, MongoDB aggregation pipelines, Cloudinary uploads and real-time Socket.IO messaging.",
  "Currently expanding my backend expertise into PostgreSQL, Python/FastAPI, and production-grade AI integrations (LLM APIs, RAG pipelines, and autonomous agents), while regularly publishing technical insights and architectural deep-dives on Hashnode.",
];

export const projects = [
  {
    title: "KaviosPix",
    subtitle: "Photo Management REST API & Cloud Storage",
    period: "Sep 2026",
    description:
      "A Google Photos-style media platform featuring secure album creation, Cloudinary image uploads with rollback protection, tag-based search, and owner vs. shared-user permissions.",
    tech: ["Node.js", "Express", "MongoDB", "OAuth 2.0", "Cloudinary", "React"],
    liveUrl: "https://kaviospix-rahul.vercel.app/",
    codeUrl: "https://github.com/rahulsoni070/kaviospix",
  },
  {
    title: "Anvaya CRM",
    subtitle: "Lead Management REST API & Analytics Dashboard",
    period: "Aug 2026",
    description:
      "A full-featured sales CRM with 19 REST endpoints and JWT authentication, enabling sales teams to capture leads, assign agents, track status pipelines, and visualize conversion reports with Recharts.",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "React", "Recharts"],
    liveUrl: "https://anvaya-crm-frontend-bice.vercel.app/",
    codeUrl: "https://github.com/rahulsoni070/anvaya-crm",
  },
  {
    title: "Chatter",
    subtitle: "Real-Time One-to-One Messaging Platform",
    period: "Sep 2026",
    description:
      "A high-performance chat application powered by Socket.IO and MongoDB, supporting private 1-on-1 messaging rooms, live typing indicators, online presence, and sent-delivered-read receipts.",
    tech: ["Node.js", "Express", "Socket.IO", "MongoDB", "React"],
    liveUrl: "https://chat-app-frontend-psi-roan.vercel.app/",
    codeUrl: "https://github.com/rahulsoni070/Chat-app",
  },
  {
    title: "Workasana",
    subtitle: "Task & Project Management Platform",
    period: "Aug 2026",
    description:
      "An Asana-inspired project management platform with an 18-endpoint REST API and 5 relational Mongoose schemas, featuring multi-filter task workflows, team ownership, and sprint velocity charts.",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "React", "Chart.js"],
    liveUrl: "https://workasana-frontend-pearl.vercel.app/",
    codeUrl: "https://github.com/rahulsoni070/workasana",
  },
  {
    title: "ShopEasy",
    subtitle: "Modern E-Commerce Storefront & Dashboard",
    period: "Feb 2026 – Mar 2026",
    description:
      "A responsive e-commerce storefront with dynamic search, category and rating filters, multi-tier price sorting, size-aware carts, persistent wishlists, and checkout simulation.",
    tech: ["React", "Bootstrap", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://major-project-sigma-snowy.vercel.app/",
    codeUrl: "https://github.com/rahulsoni070/shopeasy",
  },
];


export const skills = {
  Backend: ["Node.js", "Express.js", "REST APIs", "JWT", "Google OAuth 2.0", "bcrypt", "Role-based access", "Socket.IO", "Multer", "Cloudinary"],
  Database: ["MongoDB", "Mongoose", "Indexes", "Aggregation pipelines", "MongoDB Atlas"],
  Frontend: ["React.js", "Redux", "React Router", "Axios", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  Languages: ["JavaScript (ES6+)", "TypeScript", "C++", "C"],
  Tools: ["Git", "GitHub", "Postman", "Vercel", "Render"],
};