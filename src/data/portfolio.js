// ============================================================
//  👇 THIS IS THE ONLY FILE YOU NEED TO EDIT REGULARLY
//  Add projects, skills, or change your info right here.
//  You almost never need to touch the component files.
// ============================================================

import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";

// ---- Your basic info (shows in the Hero + Navbar) ----
export const personal = {
  name: "Rahul Soni",
  role: "Full Stack Developer",
  tagline:
    "I build full-stack web apps with the MERN stack — React on the front, Node.js & MongoDB on the back.",
  location: "Jaipur, India",
  resumeUrl: "/RahulSoni_Resume.pdf", // this file lives in the public/ folder
};

// ---- Social / contact links (Hero + Contact + Footer) ----
export const socials = [
  { name: "GitHub", url: "https://github.com/rahulsoni070", icon: FaGithub },
  { name: "LinkedIn", url: "https://linkedin.com/in/rahulsoni0707", icon: FaLinkedin },
  { name: "Twitter", url: "https://x.com/Rahulso43411291", icon: FaXTwitter },
  { name: "Email", url: "mailto:rahulsoni66676@gmail.com", icon: FaEnvelope },
];

// ---- A few lines about you (About section) ----
export const about = [
  "I'm a final-year Computer Science student who loves turning ideas into working web apps.",
  "Over the last several months I've built and deployed full-stack projects, focusing on clean REST APIs, secure authentication, and responsive UIs.",
  "I write about what I learn, and I'm actively looking for developer opportunities.",
];

// ---- Projects (newest first). Copy a block to add a new one. ----
export const projects = [
  {
    title: "Anvaya CRM",
    subtitle: "Full-Stack Lead Management App",
    period: "Jun 2026 – Aug 2026",
    description:
      "A CRM where sales teams add leads, assign agents, track pipeline status, and view reports. Built end-to-end on the MERN stack with secure login.",
    highlights: [
      "9 modules: leads, agents, comments, dashboard & reports",
      "JWT auth + bcrypt hashing with admin/user roles",
      "Dashboard with live status counts, filters & charts",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    liveUrl: "https://anvaya-crm-frontend-bice.vercel.app/",
    codeUrl: "https://github.com/rahulsoni070/anvaya-crm-frontend",
  },
  {
    title: "ShopEasy",
    subtitle: "Full-Stack E-Commerce App",
    period: "Jan 2026 – Mar 2026",
    description:
      "An e-commerce store with product search, filters, cart, wishlist, and checkout. Fully deployed and live on Vercel.",
    highlights: [
      "Search, category & rating filters, price sorting",
      "Cart, wishlist & checkout with state persistence",
      "REST API for products, categories, cart & orders",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://major-project-sigma-snowy.vercel.app/",
    codeUrl: "https://github.com/rahulsoni070/shopeasy-frontend",
  },
];

// ---- Skills grouped by category ----
export const skills = {
  Frontend: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Responsive UI"],
  Backend: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "MVC"],
  Database: ["MongoDB", "Mongoose"],
  Tools: ["Git", "GitHub", "Vercel", "Postman"],
};
