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
  "Right now I'm adding PostgreSQL, Python/FastAPI and AI features (LLM APIs, RAG, agents) to my stack, and I write about what I learn on Hashnode.",
];

export const projects = [
  {
    title: "KaviosPix",
    subtitle: "Photo Management REST API",
    period: "Sep 2026",
    description:
      "A Google Photos-style app: albums, image uploads, tags, comments, favorites and sharing, with Google sign-in and owner vs. shared-user permissions.",
    highlights: [
      "16-endpoint REST API with reusable access middleware that prevents IDOR",
      "Google OAuth 2.0 (Passport.js) + JWT; Multer → Cloudinary uploads with rollback",
      "Paginated tag search on compound indexes; Helmet, CORS allowlist, rate limiting",
    ],
    tech: ["Node.js", "Express", "MongoDB", "OAuth 2.0", "Cloudinary", "React"],
    liveUrl: "https://kaviospix-rahul.vercel.app/",
    codeUrl: "https://github.com/rahulsoni070/kaviospix-backend",
  },
  {
    title: "Anvaya CRM",
    subtitle: "Lead Management REST API & Dashboard",
    period: "Aug 2026",
    description:
      "A CRM where sales teams add leads, assign agents, track pipeline status and view reports.",
    highlights: [
      "19 REST endpoints; 17 behind JWT middleware, 6 admin-only (bcrypt + 7-day JWTs)",
      "Server-side filtering, 8 whitelisted sort orders and pagination",
      "Reports built with MongoDB aggregation ($group, $lookup), charted with Recharts",
    ],
    tech: ["Node.js", "Express", "MongoDB", "JWT", "React", "Recharts"],
    liveUrl: "https://anvaya-crm-frontend-bice.vercel.app/",
    codeUrl: "https://github.com/rahulsoni070/anvaya-crm-backend",
  },
  {
    title: "Real-Time Chat App",
    subtitle: "One-to-One Messaging",
    period: "Sep 2026",
    description:
      "A real-time chat app with private messages, typing indicators and read receipts.",
    highlights: [
      "Socket.IO server with per-user rooms and acknowledgement callbacks",
      "Sent → delivered → read receipts saved in MongoDB",
      "Live typing indicators over 6 client and 5 server socket events",
    ],
    tech: ["Node.js", "Express", "Socket.IO", "MongoDB", "React"],
    liveUrl: "https://chat-app-frontend-psi-roan.vercel.app/",
    codeUrl: "https://github.com/rahulsoni070/Chat-app-backend",
  },
  {
    title: "Workasana",
    subtitle: "Task & Project Management App",
    period: "Aug 2026",
    description:
      "An Asana-style app for projects, teams, tasks and tags, with a reports page.",
    highlights: [
      "18-endpoint REST API (16 behind JWT) over 5 related Mongoose models",
      "Task filters by team, owner, status, project and tags",
      "Reports: work done last week, pending workload, tasks closed by team (Chart.js)",
    ],
    tech: ["Node.js", "Express", "MongoDB", "JWT", "React", "Chart.js"],
    liveUrl: "https://workasana-frontend-pearl.vercel.app/",
    codeUrl: "https://github.com/rahulsoni070/workasana-backend",
  },
  {
    title: "ShopEasy",
    subtitle: "React E-Commerce Store",
    period: "Feb 2026 – Mar 2026",
    description:
      "An e-commerce storefront with product search, filters, cart, wishlist, address book and checkout.",
    highlights: [
      "Search, category and rating filters, price sorting",
      "Size-aware cart, wishlist and checkout that survive page reloads",
      "Product catalog served by an Express + MongoDB API",
    ],
    tech: ["React", "Bootstrap", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://major-project-sigma-snowy.vercel.app/",
    codeUrl: "https://github.com/rahulsoni070/shopeasy-frontend",
  },
];


export const skills = {
  Backend: ["Node.js", "Express.js", "REST APIs", "JWT", "Google OAuth 2.0", "bcrypt", "Role-based access", "Socket.IO", "Multer", "Cloudinary"],
  Database: ["MongoDB", "Mongoose", "Indexes", "Aggregation pipelines", "MongoDB Atlas"],
  Frontend: ["React.js", "Redux", "React Router", "Axios", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  Languages: ["JavaScript (ES6+)", "TypeScript", "C++", "C"],
  Tools: ["Git", "GitHub", "Postman", "Vercel", "Render"],
};