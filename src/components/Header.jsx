import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { COMPANY_NAME, NAV_LINKS } from "../data/content";

function goToContact(navigate) {
  return (e) => {
    e.preventDefault();
    const scroll = () => {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    if (window.location.pathname === "/") {
      scroll();
    } else {
      navigate("/");
      setTimeout(scroll, 50);
    }
  };
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleContact = goToContact(navigate);

  return (
    <header className="sticky top-0 z-50 border-b border-line/10 bg-paper/80 backdrop-blur-xl">
      <div className="section-shell flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 font-semibold text-ink" onClick={() => setOpen(false)}>
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-light text-white">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 18a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 16.2 8.1 4.5 4.5 0 0 1 15.5 18H6Z" />
            </svg>
          </span>
          <span className="text-sm tracking-tight">{COMPANY_NAME}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm transition-colors ${isActive ? "text-ink font-medium" : "text-muted hover:text-ink"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/#contact"
            onClick={handleContact}
            className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition hover:opacity-80 sm:inline-block"
          >
            Talk to Us
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line/15 md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M6 18 18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line/10 bg-paper md:hidden">
          <nav className="section-shell flex flex-col gap-1 py-3">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 text-sm font-medium ${isActive ? "bg-ink/5 text-ink" : "text-muted"}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="/#contact"
              onClick={(e) => {
                setOpen(false);
                handleContact(e);
              }}
              className="mt-2 rounded-full bg-ink px-4 py-2.5 text-center text-sm font-semibold text-paper"
            >
              Talk to Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
