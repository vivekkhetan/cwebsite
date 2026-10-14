import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import StatusBadge from "../components/StatusBadge";
import Icon from "../components/Icon";
import CardGrid from "../components/CardGrid";
import ContactSection from "../components/ContactSection";
import {
  COMPANY_NAME,
  WHY_POINTS,
  PRODUCT_CATEGORIES,
  SECTORS,
  SECURITY_PILLARS,
  HOW_IT_WORKS,
} from "../data/content";

// Mirrors real product icons (compute, storage, resilience, networking) so the
// hero visual previews the actual infrastructure stack shown further down the page.
const HERO_STACK_ICONS = ["cpu", "server", "cube", "disk", "bucket", "shield-check", "grid", "shield", "network", "scale"];
const WHY_ICONS = ["grid", "server", "chat", "globe"];

export default function Home() {
  const productNames = PRODUCT_CATEGORIES.flatMap((cat) => cat.items);

  return (
    <>
      <Seo
        title={`${COMPANY_NAME} — Cloud Infrastructure & Native Solutions for India`}
        description="Core cloud infrastructure and native, industry-ready solutions for growing businesses across India. One platform, human support. Talk to us."
      />

      {/* Hero */}
      <section className="bg-paper pt-16 pb-20 text-center sm:pt-24 sm:pb-24">
        <div className="section-shell">
          <div className="flex justify-center">
            <StatusBadge tone="amber">Launching soon — now onboarding early conversations</StatusBadge>
          </div>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            The cloud your business never has to think about.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Build directly on our core infrastructure, or run a ready-made solution for
            your industry — either way, you get the same reliability, transparent
            pricing, and human support, purpose-built for businesses across India.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
            <a
              href="#contact"
              className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition hover:opacity-90"
            >
              Talk to Us
            </a>
            <a
              href="#products-overview"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-accent"
            >
              Explore what we're building
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>

          <div className="aurora relative mx-auto mt-14 flex h-[280px] max-w-5xl items-center justify-center p-6 sm:h-[380px] sm:p-12">
            <div className="blob blob-1" />
            <div className="blob blob-2" />
            <div className="blob blob-3" />
            <div className="grid-overlay" />
            <div className="relative z-10 grid grid-cols-5 gap-3 sm:gap-4">
              {HERO_STACK_ICONS.map((icon, i) => (
                <div
                  key={icon}
                  className="relative flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm sm:h-16 sm:w-16"
                >
                  <Icon name={icon} className="h-5 w-5 text-white/70 sm:h-6 sm:w-6" />
                  <span
                    className={`absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full ${
                      i % 3 === 0 ? "bg-teal-400" : i % 3 === 1 ? "bg-amber-400" : "bg-white/30"
                    }`}
                  />
                </div>
              ))}
            </div>
            <div className="absolute bottom-5 left-6 z-10 flex items-center gap-2 text-xs text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
              Core infrastructure — in active development
            </div>
          </div>
        </div>
      </section>

      {/* Why Cachemere Cloud */}
      <section className="py-20 sm:py-24">
        <div className="section-shell">
          <div className="max-w-xl">
            <span className="block text-xs font-semibold uppercase tracking-wide text-accent">
              Why {COMPANY_NAME}
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Built differently, on purpose.
            </h2>
            <p className="mt-4 text-muted">
              Every business in India can run on enterprise-grade infrastructure —
              without worrying too much. Four decisions that shape everything we build.
            </p>
          </div>

          <CardGrid cols={4} className="mt-12">
            {WHY_POINTS.map((point, i) => (
              <div key={point.title} className="flex flex-col gap-3 bg-surface p-7 sm:p-8">
                <Icon name={WHY_ICONS[i % WHY_ICONS.length]} className="h-7 w-7 text-accent" strokeWidth={1.6} />
                <h3 className="font-semibold text-ink">{point.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{point.body}</p>
              </div>
            ))}
          </CardGrid>
        </div>
      </section>

      {/* Core infrastructure / Native solutions feature spreads */}
      <section id="products-overview" className="scroll-mt-20 bg-surface py-20 sm:py-24">
        <div className="section-shell space-y-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wide text-accent">
                Core infrastructure
              </span>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Compute. Storage. Network. Security. Yours to build on.
              </h2>
              <p className="mt-4 max-w-md text-muted">
                A complete infrastructure stack through a single control plane — no
                stitching together five vendors.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {productNames.map((p) => (
                  <span
                    key={p.name}
                    className="inline-flex items-center gap-2 rounded-full border border-line/10 bg-paper px-3.5 py-1.5 text-xs font-medium text-ink"
                  >
                    <Icon name={p.icon} className="h-3.5 w-3.5 text-accent" />
                    {p.name}
                  </span>
                ))}
              </div>
              <Link
                to="/products"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-accent"
              >
                See the full product portfolio <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
            <div className="aspect-[4/3] rounded-[22px] border border-line/10 bg-paper p-10">
              <div className="flex h-full flex-col justify-center gap-3">
                {[92, 100, 78, 88].map((w, i) => (
                  <div
                    key={i}
                    className="relative h-[15%] rounded-xl border border-line/10"
                    style={{
                      width: `${w}%`,
                      background: "linear-gradient(90deg, rgb(15 127 184 / 0.18), rgb(15 127 184 / 0.05))",
                    }}
                  >
                    <span className="absolute top-1/2 left-4 h-1.5 w-7 -translate-y-1/2 rounded-full bg-accent/60" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1 aspect-[4/3] rounded-[22px] border border-line/10 bg-paper">
              <svg viewBox="0 0 320 240" fill="none" className="h-full w-full">
                <g stroke="currentColor" className="text-line/20" strokeWidth="1.5">
                  <line x1="160" y1="120" x2="70" y2="60" />
                  <line x1="160" y1="120" x2="250" y2="60" />
                  <line x1="160" y1="120" x2="70" y2="180" />
                  <line x1="160" y1="120" x2="250" y2="180" />
                </g>
                <circle cx="160" cy="120" r="14" className="fill-accent" />
                <circle cx="70" cy="60" r="8" className="fill-teal-400" />
                <circle cx="250" cy="60" r="8" className="fill-teal-400" />
                <circle cx="70" cy="180" r="8" className="fill-amber-400" />
                <circle cx="250" cy="180" r="8" className="fill-amber-400" />
              </svg>
            </div>
            <div className="order-1 lg:order-2">
              <span className="block text-xs font-semibold uppercase tracking-wide text-accent">
                Native solutions
              </span>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Or skip the building entirely.
              </h2>
              <p className="mt-4 max-w-md text-muted">
                Ready-made software built directly on our own infrastructure, for the
                sectors we know best — including Nest by Cachemere for hospitality.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {SECTORS.map((s) => (
                  <div key={s.key} className="flex items-center gap-2.5 rounded-xl border border-line/10 bg-paper px-3.5 py-2.5">
                    <Icon name={s.icon} className="h-4 w-4 text-accent" />
                    <span className="text-xs font-medium text-ink">{s.name}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/solutions"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-accent"
              >
                Explore solutions <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Security — dark statement band */}
      <section className="bg-band py-20 text-center text-band-ink sm:py-28">
        <div className="section-shell">
          <span className="block text-xs font-semibold uppercase tracking-wide text-teal-400">
            Security &amp; compliance
          </span>
          <h2 className="mx-auto mt-3 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
            Earn trust through reliability, not promises.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-band-muted">
            Verifiable, directly-assessable security — whether you touch our
            infrastructure directly or run a native solution on top of it.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {SECURITY_PILLARS.slice(0, 4).map((pillar) => (
              <span
                key={pillar.title}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-band-ink"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                {pillar.title}
                <span className="text-xs text-band-muted">in progress</span>
              </span>
            ))}
          </div>
          <Link
            to="/security"
            className="mt-10 inline-flex items-center gap-1.5 text-sm font-semibold text-band-ink hover:text-teal-300"
          >
            Full security detail <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 sm:py-24">
        <div className="section-shell">
          <div className="max-w-xl">
            <span className="block text-xs font-semibold uppercase tracking-wide text-accent">
              How it works
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              What to expect when you talk to us.
            </h2>
          </div>

          <CardGrid cols={3} className="mt-12">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.step} className="flex flex-col gap-3 bg-surface p-7 sm:p-8">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-sm font-bold text-paper">
                  {step.step}
                </span>
                <h3 className="font-semibold text-ink">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{step.body}</p>
              </div>
            ))}
          </CardGrid>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
