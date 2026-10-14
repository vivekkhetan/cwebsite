import Seo from "../components/Seo";
import Accordion from "../components/Accordion";
import PageHero from "../components/PageHero";
import ClosingCta from "../components/ClosingCta";
import { COMPANY_NAME, FAQS } from "../data/content";

export default function FAQ() {
  return (
    <>
      <Seo
        title={`FAQ — ${COMPANY_NAME}`}
        description="Answers to common questions about Cachemere Cloud's core infrastructure, native solutions, and how we work with businesses across India."
      />

      <PageHero badge="FAQ" title="Frequently asked questions" />

      <section className="py-16 sm:py-20">
        <div className="section-shell max-w-3xl">
          <Accordion items={FAQS} />
        </div>
      </section>

      <ClosingCta title="Still have questions?" body="Reach out directly — no obligation, just a conversation." />
    </>
  );
}
