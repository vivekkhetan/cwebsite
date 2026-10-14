import Seo from "../components/Seo";
import Icon from "../components/Icon";
import PageHero from "../components/PageHero";
import ClosingCta from "../components/ClosingCta";
import CardGrid from "../components/CardGrid";
import { COMPANY_NAME, SECURITY_PILLARS } from "../data/content";

const ICONS = ["lock", "shield-check", "shield", "check", "shield-check"];

export default function Security() {
  return (
    <>
      <Seo
        title={`Security & Compliance — ${COMPANY_NAME}`}
        description="Verifiable security and compliance — infrastructure hosted in India, encryption, access controls, and an honest certification roadmap from Cachemere Cloud."
      />

      <PageHero
        badge="Security & compliance"
        title="Earn trust through reliability, not promises."
        body="Verifiable, directly-assessable security and compliance — whether you touch our infrastructure directly or run a native solution on top of it."
      />

      <section className="py-16 sm:py-20">
        <div className="section-shell">
          <CardGrid cols={2}>
            {SECURITY_PILLARS.map((pillar, i) => {
              const isOrphan = SECURITY_PILLARS.length % 2 !== 0 && i === SECURITY_PILLARS.length - 1;
              return (
                <div
                  key={pillar.title}
                  className={`flex flex-col gap-3 bg-surface p-7 sm:p-8 ${isOrphan ? "sm:col-span-2" : ""}`}
                >
                  <Icon name={ICONS[i % ICONS.length]} className="h-7 w-7 text-accent" strokeWidth={1.6} />
                  <h3 className="font-semibold text-ink">{pillar.title}</h3>
                  <p className="max-w-lg text-sm leading-relaxed text-muted">{pillar.body}</p>
                </div>
              );
            })}
          </CardGrid>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="section-shell">
          <div className="rounded-[20px] border border-line/10 bg-paper p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-ink">A note on certifications</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
              We won't claim a certification we haven't earned. Where compliance work is
              still underway, we say so plainly — "working toward" or "in progress," not a
              badge we haven't been awarded. Once PCI-DSS, ISO 27001, ISO 20000, MeitY
              empanelment, or other credentials are formally achieved, we'll update this
              page with verifiable details.
            </p>
          </div>
        </div>
      </section>

      <ClosingCta
        title="Questions about how we handle your data?"
        body="Talk to us directly — we're happy to walk through our approach in detail."
      />
    </>
  );
}
