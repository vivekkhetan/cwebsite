import Seo from "../components/Seo";
import SectorCard from "../components/SectorCard";
import PageHero from "../components/PageHero";
import ClosingCta from "../components/ClosingCta";
import CardGrid from "../components/CardGrid";
import { COMPANY_NAME, SECTORS } from "../data/content";

export default function Solutions() {
  return (
    <>
      <Seo
        title={`Industry Solutions — ${COMPANY_NAME}`}
        description="Native solutions built directly on Cachemere Cloud's own infrastructure for manufacturing, healthcare, education, and hospitality businesses across India."
      />

      <PageHero
        badge="Solutions — coming soon"
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
              />
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
