import { socials } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-accent font-mono">04. What's Next?</p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">Get In Touch</h2>
        <p className="mt-5 text-slate-400 text-lg">
          I'm currently looking for developer roles and open to freelance work.
          Whether you have a question or just want to say hi, my inbox is always open!
        </p>

        <a
  href="mailto:rahulsoni66676@gmail.com"
  className="inline-block mt-8 px-8 py-3 rounded-lg bg-accent text-white font-medium hover:opacity-90 transition"
>
  Say Hello 👋
</a>

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
