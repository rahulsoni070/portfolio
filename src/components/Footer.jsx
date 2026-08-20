import { personal } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5 text-center text-sm text-slate-500">
      <p>Built with React, Vite & Tailwind CSS by {personal.name}.</p>
      <p className="mt-1">© {new Date().getFullYear()} — All rights reserved.</p>
    </footer>
  );
}
