import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import SectorCard from "../components/SectorCard";
import StatusBadge from "../components/StatusBadge";
import { COMPANY_NAME, SECTORS } from "../data/content";

export default function Solutions() {
  return (
    <>
      <Seo
        title={`Industry Solutions — ${COMPANY_NAME}`}
        description="End-to-end software solutions built on Nabh Cloud for manufacturing, healthcare, education, and hospitality businesses across India."
      />

      <section className="bg-navy-950 py-16 text-white sm:py-20">
        <div className="section-shell">
          <StatusBadge tone="teal">Solutions — coming soon</StatusBadge>
          <h1 className="mt-5 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            End-to-end software solutions, built on our cloud, for the sectors we know best.
          </h1>
          <p className="mt-5 max-w-2xl text-navy-300">
            Each solution runs in a multi-tenant model (shared, cost-efficient) or a
            single-tenant model (dedicated, more control) depending on what your business
            needs — using cloud and AI to drive efficiency, cost savings, and analytics.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="section-shell grid gap-6 sm:grid-cols-2">
          {SECTORS.map((sector) => (
            <SectorCard
              key={sector.key}
              name={sector.name}
              positioning={sector.positioning}
              icon={sector.icon}
            />
          ))}
        </div>
      </section>

      <section className="border-t border-navy-900/10 bg-navy-50/60 py-16 text-center sm:py-20">
        <div className="section-shell">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
            Don't see your industry?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-navy-600">
            Our core infrastructure works across sectors — talk to us about what you need,
            even if it's outside these four.
          </p>
          <Link
            to="/#contact"
            className="mt-7 inline-block rounded-full bg-saffron-500 px-7 py-3.5 text-sm font-semibold text-navy-950 hover:bg-saffron-400"
          >
            Talk to Us
          </Link>
        </div>
      </section>
    </>
  );
}
