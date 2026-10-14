import Seo from "../components/Seo";
import ProductCard from "../components/ProductCard";
import PageHero from "../components/PageHero";
import ClosingCta from "../components/ClosingCta";
import CardGrid from "../components/CardGrid";
import { COMPANY_NAME, PRODUCT_CATEGORIES } from "../data/content";

export default function Products() {
  return (
    <>
      <Seo
        title={`Infrastructure Products — ${COMPANY_NAME}`}
        description="The core infrastructure portfolio from Cachemere Cloud: compute, storage, networking, and managed data services you can build your business on, purpose-built for India."
      />

      <PageHero
        badge="Our infrastructure stack — in development"
        title="Everything you need to build and run your operations — without becoming an infrastructure expert."
        body="The core infrastructure portfolio — compute, storage, resilience, networking, and data — one platform, purpose-built for India."
      />

      <section className="py-16 sm:py-20">
        <div className="section-shell space-y-14">
          {PRODUCT_CATEGORIES.map((cat) => (
            <div key={cat.category}>
              <h2 className="text-xl font-bold text-ink">{cat.category}</h2>
              {cat.items.length === 1 ? (
                <div className="mt-6 max-w-sm overflow-hidden rounded-[28px] border border-line/10">
                  <ProductCard {...cat.items[0]} />
                </div>
              ) : (
                <CardGrid cols={Math.min(cat.items.length, 3)} className="mt-6">
                  {cat.items.map((item) => (
                    <ProductCard key={item.name} {...item} />
                  ))}
                </CardGrid>
              )}
            </div>
          ))}
        </div>
      </section>

      <ClosingCta
        title="Have a specific infrastructure need?"
        body="We're shaping this stack around real early conversations. Tell us what you're running today and where it's falling short."
      />
    </>
  );
}
