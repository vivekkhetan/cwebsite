import { Fragment } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import StatusBadge from "../components/StatusBadge";
import { COMPANY_NAME } from "../data/content";

const COMPARISON = [
  {
    theme: "Data sovereignty",
    us: "Hosted on Indian soil, under Indian jurisdiction, always.",
    global: "Often hosted in overseas regions with cross-border data flows.",
  },
  {
    theme: "Support model",
    us: "A dedicated, hands-on point of contact who knows your business.",
    global: "Ticket queues and tiered support plans.",
  },
  {
    theme: "Who it's built for",
    us: "SMBs in tier 2/3 cities who don't have an in-house infra or AI team.",
    global: "Often optimized for large enterprises with dedicated cloud teams.",
  },
  {
    theme: "Pricing & billing",
    us: "INR billing, built for SMB budgets (full detail coming as we launch).",
    global: "Complex global pricing, frequently billed in foreign currency.",
  },
];

export default function About() {
  return (
    <>
      <Seo
        title={`About Us — ${COMPANY_NAME}`}
        description="Why an India-first, sovereign cloud provider matters now — the mission behind Cachemere Cloud."
      />

      <section className="bg-navy-950 py-16 text-white sm:py-20">
        <div className="section-shell">
          <StatusBadge tone="teal">About us</StatusBadge>
          <h1 className="mt-5 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Built for the businesses that make Bharat run.
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold text-navy-900">Why we exist</h2>
            <p className="mt-4 leading-relaxed text-navy-600">
              India's tier 2 and tier 3 cities are home to millions of ambitious
              businesses in manufacturing, healthcare, education, and hospitality — but
              most of them are locked out of the cloud and AI infrastructure that large
              enterprises take for granted. Global hyperscalers are built for global
              enterprise buyers: complex pricing, cross-border data flows, and support
              models that assume you already have an infrastructure team.
            </p>
            <p className="mt-4 leading-relaxed text-navy-600">
              {COMPANY_NAME} exists to close that gap — sovereign, India-hosted cloud and
              AI infrastructure, with hands-on support, built specifically for businesses
              that want enterprise-grade capability without needing to build an
              enterprise-grade team to run it.
            </p>
            <p className="mt-4 leading-relaxed text-navy-600">
              We're currently in development, talking to founders, IT leads, and operators
              across our focus sectors to make sure what we build actually solves their
              problems — not just ours.
            </p>
          </div>

          <div className="rounded-2xl border border-navy-900/10 bg-navy-50/60 p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-navy-900">Founding team</h2>
            <p className="mt-2 text-sm text-navy-600">
              Team bios and photos will be added here as they're finalized.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[1, 2].map((i) => (
                <div key={i} className="rounded-xl border border-dashed border-navy-900/20 p-5 text-center">
                  <div className="mx-auto h-16 w-16 rounded-full bg-navy-900/10" />
                  <p className="mt-3 text-sm font-medium text-navy-500">Bio coming soon</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-navy-900/10 bg-navy-50/60 py-16 sm:py-20">
        <div className="section-shell">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
            How we're different from global cloud providers
          </h2>
          <p className="mt-3 max-w-2xl text-navy-600">
            A factual comparison — not a knock on anyone, just what we're optimizing for.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-navy-900/10 bg-white">
            <div className="grid grid-cols-3 gap-px bg-navy-900/10 text-sm">
              <div className="bg-navy-50 p-4 font-semibold text-navy-900">Theme</div>
              <div className="bg-navy-900 p-4 font-semibold text-white">{COMPANY_NAME}</div>
              <div className="bg-navy-50 p-4 font-semibold text-navy-900">Global hyperscalers</div>
              {COMPARISON.map((row) => (
                <Fragment key={row.theme}>
                  <div className="bg-white p-4 font-medium text-navy-800">{row.theme}</div>
                  <div className="bg-teal-500/5 p-4 text-navy-700">{row.us}</div>
                  <div className="bg-white p-4 text-navy-500">{row.global}</div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 text-center sm:py-20">
        <div className="section-shell">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Want to be part of the early conversations?</h2>
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
