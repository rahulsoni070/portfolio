import { skills } from "../data/portfolio";
import SectionTitle from "./SectionTitle";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle n="03" title="Skills" />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([group, items]) => (
            <div
              key={group}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="font-semibold text-white mb-4">{group}</h3>
              <ul className="space-y-2">
                {items.map((s) => (
                  <li key={s} className="text-slate-400 text-sm flex gap-2">
                    <span className="text-accent">▹</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
