import { Fragment } from "react";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import ClosingCta from "../components/ClosingCta";
import CardGrid from "../components/CardGrid";
import { COMPANY_NAME, BRAND_VALUES } from "../data/content";

const COMPARISON = [
  {
    theme: "How you get started",
    us: "Build directly on our infrastructure, or run a native solution — one provider, either way.",
    global: "Often locked into a single delivery model, with no path to change as you grow.",
  },
  {
    theme: "What \"native\" means",
    us: "Solutions built directly for our own infrastructure — real technical and reliability advantages.",
    global: "Vertical products frequently bolted onto someone else's cloud, adding a layer of dependency.",
  },
  {
    theme: "Who it's built for",
    us: "Pricing, support, and presence purpose-built for India.",
    global: "A global platform adapted downward, or not serving this market at all.",
  },
  {
    theme: "The guarantee",
    us: "The same security, compliance, backups, and support at every layer you touch.",
    global: "Guarantees that can vary depending on which product or tier you're on.",
  },
];

export default function About() {
  return (
    <>
      <Seo
        title={`About Us — ${COMPANY_NAME}`}
        description="One platform, two ways in — the purpose behind Cachemere Cloud's core infrastructure and native solutions for India."
      />

      <PageHero badge="About us" title="Infrastructure built for India's growing businesses." />

      <section className="py-16 sm:py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-ink">Why we exist</h2>
            <p className="mt-4 leading-relaxed text-muted">
              India is home to millions of ambitious businesses, and {COMPANY_NAME} gives
              them direct access to the same cloud infrastructure large enterprises rely
              on: compute, storage, networking, and databases, built and supported
              specifically for this market, so they can run their operations without
              needing to become infrastructure experts themselves.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              For the industries we know best, we go further — ready-made, native
              solutions built directly on our own infrastructure, so businesses don't
              have to build from scratch to get enterprise-grade operations. Either way,
              we stand beside our customers with human support, so their energy goes into
              their business, not their infrastructure.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Our vision is a country digitized from the ground up — where businesses in
              every city have real access to reliable cloud infrastructure and the
              freedom to build what their business needs on top of it. We're currently in
              development, talking to founders, IT leads, and
              operators across our focus sectors to make sure what we build actually
              solves their problems — not just ours.
            </p>
          </div>

          <div className="rounded-[20px] border border-line/10 bg-surface p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-ink">Founding team</h2>
            <p className="mt-2 text-sm text-muted">
              Team bios and photos will be added here as they're finalized.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[1, 2].map((i) => (
                <div key={i} className="rounded-xl border border-dashed border-line/20 p-5 text-center">
                  <div className="mx-auto h-16 w-16 rounded-full bg-line/10" />
                  <p className="mt-3 text-sm font-medium text-muted">Bio coming soon</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="section-shell">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">What we believe</h2>
          <p className="mt-3 max-w-2xl text-muted">Our brand values, in practice.</p>

          <CardGrid cols={2} className="mt-8">
            {BRAND_VALUES.map((value) => (
              <div key={value.title} className="flex flex-col gap-3 bg-surface p-7 sm:p-8">
                <h3 className="font-semibold text-ink">{value.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{value.body}</p>
              </div>
            ))}
          </CardGrid>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="section-shell">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            How we're different from global cloud providers
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            A factual comparison — not a knock on anyone, just what we're optimizing for.
          </p>

          <div className="mt-8 overflow-hidden rounded-[20px] border border-line/10 bg-surface">
            <div className="grid grid-cols-3 gap-px bg-line/10 text-sm">
              <div className="bg-surface p-4 font-semibold text-ink">Theme</div>
              <div className="bg-ink p-4 font-semibold text-paper">{COMPANY_NAME}</div>
              <div className="bg-surface p-4 font-semibold text-ink">Global hyperscalers</div>
              {COMPARISON.map((row) => (
                <Fragment key={row.theme}>
                  <div className="bg-surface p-4 font-medium text-ink">{row.theme}</div>
                  <div className="bg-accent/5 p-4 text-ink">{row.us}</div>
                  <div className="bg-surface p-4 text-muted">{row.global}</div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ClosingCta title="Want to be part of the early conversations?" />
    </>
  );
}
