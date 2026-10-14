import { Link } from "react-router-dom";
import { COMPANY_NAME, TAGLINE, CONTACT, NAV_LINKS } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line/10 bg-paper text-ink">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5 font-semibold text-ink">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-light text-white">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 18a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 16.2 8.1 4.5 4.5 0 0 1 15.5 18H6Z" />
              </svg>
            </span>
            <span className="text-sm">{COMPANY_NAME}</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted">{TAGLINE}.</p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-muted">Quick links</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-muted hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/#contact" className="text-muted hover:text-ink">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-muted">Contact</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            <li>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-ink">
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a href={`tel:${CONTACT.phone.replace(/\s+/g, "")}`} className="hover:text-ink">
                {CONTACT.phone}
              </a>
            </li>
            <li>{CONTACT.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line/10">
        <div className="section-shell flex flex-col gap-3 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <span className="cursor-default">Privacy Policy (coming soon)</span>
            <span className="cursor-default">Terms of Use (coming soon)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
