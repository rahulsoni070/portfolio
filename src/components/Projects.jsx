import { projects } from "../data/portfolio";
import SectionTitle from "./SectionTitle";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle n="02" title="Projects" />

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-accent/50 hover:bg-white/[0.05] transition"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-white">{p.title}</h3>
                  <p className="text-sm text-accent">{p.subtitle}</p>
                </div>
                <span className="text-xs text-slate-500 whitespace-nowrap">{p.period}</span>
              </div>

              <p className="mt-4 text-slate-400">{p.description}</p>

              <ul className="mt-4 space-y-1.5">
                {p.highlights.map((h, i) => (
                  <li key={i} className="text-sm text-slate-400 flex gap-2">
                    <span className="text-accent">▸</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-5 pt-2">
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-accent transition"
                >
                  <FaArrowUpRightFromSquare /> Live Demo
                </a>
                <a
                  href={p.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-accent transition"
                >
                  <FaGithub /> Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
