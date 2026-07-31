import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Accordion from "../components/Accordion";
import StatusBadge from "../components/StatusBadge";
import { COMPANY_NAME, FAQS } from "../data/content";

export default function FAQ() {
  return (
    <>
      <Seo
        title={`FAQ — ${COMPANY_NAME}`}
        description="Answers to common questions about Cachemere Cloud's sovereign cloud infrastructure, data residency, and how we work with Indian SMBs."
      />

      <section className="bg-navy-950 py-16 text-white sm:py-20">
        <div className="section-shell">
          <StatusBadge tone="teal">FAQ</StatusBadge>
          <h1 className="mt-5 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Frequently asked questions
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="section-shell max-w-3xl">
          <Accordion items={FAQS} />
        </div>
      </section>

      <section className="border-t border-navy-900/10 bg-navy-50/60 py-16 text-center sm:py-20">
        <div className="section-shell">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Still have questions?</h2>
          <p className="mx-auto mt-3 max-w-lg text-navy-600">
            Reach out directly — no obligation, just a conversation.
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
