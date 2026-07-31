import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import ProductCard from "../components/ProductCard";
import StatusBadge from "../components/StatusBadge";
import { COMPANY_NAME, PRODUCT_CATEGORIES } from "../data/content";

export default function Products() {
  return (
    <>
      <Seo
        title={`Infrastructure Products — ${COMPANY_NAME}`}
        description="The full infrastructure portfolio from Cachemere Cloud: GPU cloud, compute, storage, networking, and managed data services — being built for Indian SMBs."
      />

      <section className="bg-navy-950 py-16 text-white sm:py-20">
        <div className="section-shell">
          <StatusBadge tone="teal">Our infrastructure stack — in development</StatusBadge>
          <h1 className="mt-5 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Everything you need to run modern workloads, without running your own data center.
          </h1>
          <p className="mt-5 max-w-xl text-navy-300">
            A full cloud infrastructure portfolio — compute, storage, resilience,
            networking, and data — built for Indian businesses and hosted on Indian soil.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="section-shell space-y-14">
          {PRODUCT_CATEGORIES.map((cat) => (
            <div key={cat.category}>
              <h2 className="text-xl font-bold text-navy-900">{cat.category}</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {cat.items.map((item) => (
                  <ProductCard key={item.name} {...item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-navy-900/10 bg-navy-50/60 py-16 text-center sm:py-20">
        <div className="section-shell">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
            Have a specific infrastructure need?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-navy-600">
            We're shaping this stack around real early conversations. Tell us what you're
            running today and where it's falling short.
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
