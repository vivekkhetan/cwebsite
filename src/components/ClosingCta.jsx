import { Link } from "react-router-dom";

export default function ClosingCta({ title, body, cta = "Talk to Us" }) {
  return (
    <section className="border-t border-line/10 bg-surface py-16 text-center sm:py-20">
      <div className="section-shell">
        <h2 className="mx-auto max-w-xl text-2xl font-bold tracking-tight text-ink sm:text-3xl">{title}</h2>
        {body && <p className="mx-auto mt-3 max-w-lg text-muted">{body}</p>}
        <Link
          to="/#contact"
          className="mt-7 inline-block rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition hover:opacity-90"
        >
          {cta}
        </Link>
      </div>
    </section>
  );
}
