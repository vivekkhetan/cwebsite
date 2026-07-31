import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import StatusBadge from "../components/StatusBadge";
import Icon from "../components/Icon";
import ContactSection from "../components/ContactSection";
import {
  COMPANY_NAME,
  WHY_POINTS,
  PRODUCT_CATEGORIES,
  SECTORS,
  SECURITY_PILLARS,
  HOW_IT_WORKS,
} from "../data/content";

export default function Home() {
  const productNames = PRODUCT_CATEGORIES.flatMap((cat) => cat.items);

  return (
    <>
      <Seo
        title={`${COMPANY_NAME} — Sovereign Cloud & AI Infrastructure for Indian Businesses`}
        description="Secure, India-hosted cloud infrastructure and AI solutions built for small and medium businesses in tier 2 and tier 3 cities. Talk to us."
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-teal-500/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-saffron-500/10 blur-3xl" />
        </div>

        <div className="section-shell relative grid gap-12 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          <div>
            <StatusBadge tone="amber">Launching soon — now onboarding early conversations</StatusBadge>
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
              Sovereign cloud and AI, built for India's growing businesses.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-200">
              We give small and medium businesses across India the advanced cloud
              infrastructure and AI capabilities of a big enterprise — hosted on Indian
              soil, backed by hands-on support, without needing a technical team of your
              own.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-saffron-500 px-7 py-3.5 text-sm font-semibold text-navy-950 shadow-lg shadow-saffron-500/20 transition hover:bg-saffron-400"
              >
                Talk to Us
              </a>
              <a
                href="#products-overview"
                className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore what we're building
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="grid grid-cols-3 gap-3">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="flex aspect-square items-center justify-center rounded-lg border border-white/10 bg-white/5"
                    style={{ animationDelay: `${i * 120}ms` }}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        i % 3 === 0 ? "bg-teal-400" : i % 3 === 1 ? "bg-saffron-400" : "bg-white/30"
                      }`}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-3 text-xs text-navy-300">
                <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
                  <span>Data residency</span>
                  <span className="font-semibold text-teal-300">India only</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
                  <span>Infrastructure</span>
                  <span className="font-semibold text-saffron-300">In development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sovereign Cloud */}
      <section className="py-20 sm:py-24">
        <div className="section-shell">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wide text-teal-600">
              Why sovereign cloud
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
              Most SMBs can't afford their own data center, security team, or AI experts.
            </h2>
            <p className="mt-4 text-navy-600">
              And many are wary of global cloud providers over data control, compliance,
              and cost. That's the gap we're building {COMPANY_NAME} to close.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_POINTS.map((point) => (
              <div key={point.title} className="rounded-2xl border border-navy-900/10 p-6">
                <h3 className="font-semibold text-navy-900">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Condensed product/solutions overview */}
      <section id="products-overview" className="scroll-mt-20 bg-navy-50/60 py-20 sm:py-24">
        <div className="section-shell">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-wide text-teal-600">
                What we're building
              </span>
              <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
                An infrastructure stack — and industry solutions built on top of it.
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-600"
            >
              See the full product portfolio <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {productNames.map((p) => (
              <span
                key={p.name}
                className="inline-flex items-center gap-2 rounded-full border border-navy-900/10 bg-white px-4 py-2 text-sm font-medium text-navy-800"
              >
                <Icon name={p.icon} className="h-4 w-4 text-teal-600" />
                {p.name}
              </span>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-wide text-saffron-600">
                Industry solutions
              </span>
              <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
                End-to-end software, built on our cloud, for the sectors we know best.
              </h2>
            </div>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-600"
            >
              Explore solutions <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SECTORS.map((s) => (
              <div key={s.key} className="rounded-2xl border border-navy-900/10 bg-white p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-saffron-500/10 text-saffron-600">
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-3 font-semibold text-navy-900">{s.name}</h3>
                {s.subBrand && <p className="mt-0.5 text-xs text-navy-500">{s.subBrand}</p>}
                <StatusBadge tone="amber" className="mt-2">
                  Coming soon
                </StatusBadge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security trust strip */}
      <section className="py-20 sm:py-24">
        <div className="section-shell">
          <div className="rounded-3xl bg-navy-900 p-8 text-white sm:p-12">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div className="max-w-lg">
                <span className="text-xs font-semibold uppercase tracking-wide text-teal-400">
                  Security &amp; compliance
                </span>
                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                  The highest standards of security — because it's your data.
                </h2>
              </div>
              <Link
                to="/security"
                className="inline-flex items-center gap-1.5 self-start rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold hover:bg-white/10"
              >
                Full security detail <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SECURITY_PILLARS.slice(0, 3).map((pillar) => (
                <div key={pillar.title} className="rounded-xl bg-white/5 p-5">
                  <Icon name="lock" className="h-5 w-5 text-teal-400" />
                  <h3 className="mt-3 text-sm font-semibold">{pillar.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-navy-300">{pillar.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-navy-400">
              We're building toward ISO 27001 certification and MeitY empanelment — presented
              honestly as "in progress," not claimed before it's achieved.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-navy-50/60 py-20 sm:py-24">
        <div className="section-shell">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-wide text-teal-600">
              How it works
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
              What to expect when you talk to us.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.step} className="relative rounded-2xl border border-navy-900/10 bg-white p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-saffron-400">
                  {step.step}
                </span>
                <h3 className="mt-4 font-semibold text-navy-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
