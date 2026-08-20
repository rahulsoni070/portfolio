import { about, personal } from "../data/portfolio";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle n="01" title="About Me" />
        <div className="mt-8 space-y-4 max-w-2xl text-slate-400 text-lg">
          {about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p className="text-slate-500">📍 {personal.location}</p>
        </div>
      </div>
    </section>
  );
}
