import { useState } from "react";
import { personal } from "../data/portfolio";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-slate-950/70 border-b border-white/5">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-bold text-lg text-white">
          {personal.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex gap-8 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-slate-300 hover:text-accent transition">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={personal.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-block text-sm font-medium px-4 py-2 rounded-lg bg-accent text-white hover:opacity-90 transition"
        >
          Resume
        </a>

        <button
          className="md:hidden text-slate-200 text-xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden px-6 pb-4 space-y-3 bg-slate-950/95 border-b border-white/5">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-slate-300 hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="block text-accent font-medium"
            >
              Resume →
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
