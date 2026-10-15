import Seo from "../components/Seo";
import ProductCard from "../components/ProductCard";
import PageHero from "../components/PageHero";
import ClosingCta from "../components/ClosingCta";
import CardGrid from "../components/CardGrid";
import StatusBadge from "../components/StatusBadge";
import { COMPANY_NAME, PRODUCT_CATEGORIES, PLATFORM_OPERATIONS, SERVICES } from "../data/content";

function gridCols(n) {
  if (n % 4 === 0) return 4;
  if (n % 3 === 0) return 3;
  return 2;
}

function CategoryGrid({ items }) {
  if (items.length === 1) {
    return (
      <div className="mt-6 max-w-sm overflow-hidden rounded-[28px] border border-line/10">
        <ProductCard {...items[0]} />
      </div>
    );
  }
  const cols = gridCols(items.length);
  const orphan = items.length % cols === 1;
  return (
    <CardGrid cols={cols} className="mt-6">
      {items.map((item, i) =>
        orphan && i === items.length - 1 ? (
          <div key={item.name} className="sm:col-span-2">
            <ProductCard {...item} />
          </div>
        ) : (
          <ProductCard key={item.name} {...item} />
        )
      )}
    </CardGrid>
  );
}

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
              <CategoryGrid items={cat.items} />
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line/10 bg-surface py-16 sm:py-20">
        <div className="section-shell">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wide text-accent">Platform operations</span>
            <StatusBadge tone="amber">In development</StatusBadge>
          </div>
          <h2 className="mt-3 max-w-xl text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Running it is on us too.
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Access control, visibility and hands-on management — included with how we run your account, not
            provisioned like a resource.
          </p>
          <CardGrid cols={3} className="mt-8">
            {PLATFORM_OPERATIONS.map((item) => (
              <ProductCard key={item.name} {...item} />
            ))}
          </CardGrid>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="section-shell">
          <span className="block text-xs font-semibold uppercase tracking-wide text-accent">Services</span>
          <h2 className="mt-3 max-w-xl text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Getting there is part of the plan, not an extra line item.
          </h2>
          <CardGrid cols={3} className="mt-8">
            {SERVICES.map((item) => (
              <ProductCard key={item.name} {...item} />
            ))}
          </CardGrid>
        </div>
      </section>

      <ClosingCta
        title="Have a specific infrastructure need?"
        body="We're shaping this stack around real early conversations. Tell us what you're running today and where it's falling short."
      />
    </>
  );
}
