import Seo from "../components/Seo";
import SectorCard from "../components/SectorCard";
import ProductCard from "../components/ProductCard";
import PageHero from "../components/PageHero";
import ClosingCta from "../components/ClosingCta";
import CardGrid from "../components/CardGrid";
import { COMPANY_NAME, SECTORS, INDUSTRY_SOFTWARE } from "../data/content";

export default function Solutions() {
  return (
    <>
      <Seo
        title={`Industry Solutions — ${COMPANY_NAME}`}
        description="Native solutions built directly on Cachemere Cloud's own infrastructure for manufacturing, healthcare, education, and hospitality businesses across India."
      />

      <PageHero
        badge="Industry clouds — in development"
        title="Native solutions, built directly on our own infrastructure, for the sectors we know best."
        body="Each solution runs natively on our own infrastructure — in a multi-tenant model (shared, cost-efficient) or a single-tenant model (dedicated, more control) — so you get enterprise-grade reliability without the engineering lift of building it yourself."
      />

      <section className="py-16 sm:py-20">
        <div className="section-shell">
          <CardGrid cols={4}>
            {SECTORS.map((sector) => (
              <SectorCard
                key={sector.key}
                name={sector.name}
                subBrand={sector.subBrand}
                positioning={sector.positioning}
                icon={sector.icon}
                comingSoon={sector.comingSoon}
              />
            ))}
          </CardGrid>
          <p className="mx-auto mt-10 max-w-md text-center text-sm text-muted">
            Run your own applications on any industry cloud, or use our software — your choice, same infrastructure
            underneath.
          </p>
        </div>
      </section>

      <section className="border-t border-line/10 bg-surface py-16 sm:py-20">
        <div className="section-shell">
          <div className="max-w-xl">
            <span className="block text-xs font-semibold uppercase tracking-wide text-accent">
              Industry software
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Or skip the building entirely.
            </h2>
            <p className="mt-3 text-muted">Ready-made software, running natively on the industry cloud above.</p>
          </div>
          <CardGrid cols={4} className="mt-8">
            {INDUSTRY_SOFTWARE.map((item) => (
              <ProductCard key={item.name} {...item} />
            ))}
          </CardGrid>
        </div>
      </section>

      <ClosingCta
        title="Don't see your industry?"
        body="Our core infrastructure works across sectors, whether or not we've built a native solution for yours yet — talk to us about what you need."
      />
    </>
  );
}
