import { personal, socials } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="min-h-screen flex items-center px-6 pt-16">
      <div className="max-w-5xl mx-auto w-full">
        <p className="text-accent font-medium mb-3">Hi, my name is</p>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight">
          {personal.name}
        </h1>
        <h2 className="text-2xl sm:text-4xl font-bold text-slate-500 mt-2">
          {personal.role}
        </h2>

        <p className="mt-6 max-w-xl text-slate-400 text-lg">{personal.tagline}</p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-accent text-white font-medium hover:opacity-90 transition"
          >
            View My Work
          </a>
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-lg border border-white/15 text-slate-200 font-medium hover:border-accent hover:text-accent transition"
          >
            Resume
          </a>
        </div>

        <div className="mt-10 flex gap-5">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                className="text-slate-400 hover:text-accent transition text-2xl"
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
