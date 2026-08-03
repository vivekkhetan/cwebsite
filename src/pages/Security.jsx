import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Icon from "../components/Icon";
import StatusBadge from "../components/StatusBadge";
import { COMPANY_NAME, SECURITY_PILLARS } from "../data/content";

const ICONS = ["lock", "shield-check", "shield", "check", "shield-check"];

export default function Security() {
  return (
    <>
      <Seo
        title={`Security & Compliance — ${COMPANY_NAME}`}
        description="Data residency in India, encryption, access controls, and an honest compliance roadmap — how Cachemere Cloud approaches security for Indian SMBs."
      />

      <section className="bg-blue-900 py-16 text-white sm:py-20">
        <div className="section-shell">
          <StatusBadge tone="teal">Security &amp; compliance</StatusBadge>
          <h1 className="mt-5 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            The highest standards of security — because it's your data, and it should
            stay that way.
          </h1>
          <p className="mt-5 max-w-xl text-navy-300">
            Enterprise-grade security and compliance, without you needing to hire an
            in-house security team.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="section-shell grid gap-5 sm:grid-cols-2">
          {SECURITY_PILLARS.map((pillar, i) => (
            <div key={pillar.title} className="rounded-2xl border border-navy-900/10 bg-white p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600">
                <Icon name={ICONS[i % ICONS.length]} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-semibold text-navy-900">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{pillar.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-navy-900/10 bg-navy-50/60 py-16 sm:py-20">
        <div className="section-shell">
          <div className="rounded-2xl border border-saffron-500/30 bg-saffron-500/5 p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-navy-900">A note on certifications</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-navy-700">
              We won't claim a certification we haven't earned. Where compliance work is
              still underway, we say so plainly — "working toward" or "in progress," not a
              badge we haven't been awarded. Once ISO 27001 certification, MeitY
              empanelment, or other credentials are formally achieved, we'll update this
              page with verifiable details.
            </p>
          </div>

          <div className="mt-10 text-center">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
              Questions about how we handle your data?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-navy-600">
              Talk to us directly — we're happy to walk through our approach in detail.
            </p>
            <Link
              to="/#contact"
              className="mt-7 inline-block rounded-full bg-saffron-500 px-7 py-3.5 text-sm font-semibold text-navy-950 hover:bg-saffron-400"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
