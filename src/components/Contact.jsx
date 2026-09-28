import { useState } from "react";
import { socials } from "../data/portfolio";
import { FaCheck, FaCopy } from "react-icons/fa6";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "rahulsoni66676@gmail.com";

  const handleSayHello = (e) => {
    // Attempt to copy email to clipboard
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(email).catch(() => {});
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);

    // Also trigger mailto
    window.location.href = `mailto:${email}`;
  };

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-accent font-mono">04. What's Next?</p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">Get In Touch</h2>
        <p className="mt-5 text-slate-400 text-lg">
          I'm currently looking for developer roles and open to freelance work.
          Whether you have a question or just want to say hi, my inbox is always open!
        </p>

        <div className="mt-8 flex flex-col items-center gap-3">
          <button
            type="button"
            onClick={handleSayHello}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-accent text-white font-medium hover:opacity-90 active:scale-95 transition cursor-pointer shadow-lg shadow-accent/20"
          >
            {copied ? (
              <>
                <FaCheck className="text-emerald-300" />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <span>Say Hello 👋</span>
              </>
            )}
          </button>
          
          <p className="text-xs text-slate-500 flex items-center gap-1.5">
            <span>Direct email:</span>
            <a
              href={`mailto:${email}`}
              className="text-slate-400 hover:text-accent underline transition"
            >
              {email}
            </a>
          </p>
        </div>

        <div className="mt-10 flex justify-center gap-6">
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
