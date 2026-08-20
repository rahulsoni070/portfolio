export default function SectionTitle({ n, title }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-accent font-mono text-lg">{n}.</span>
      <h2 className="text-2xl sm:text-3xl font-bold text-white">{title}</h2>
      <span className="h-px bg-white/10 flex-1" />
    </div>
  );
}
