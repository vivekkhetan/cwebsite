import { Link } from "react-router-dom";
import Icon from "./Icon";
import StatusBadge from "./StatusBadge";

export default function SectorCard({ name, subBrand, positioning, icon, comingSoon = false, compact = false }) {
  return (
    <div className="flex flex-col gap-3 bg-surface p-7 transition hover:bg-accent/[0.04] sm:p-8">
      <div className="flex items-start justify-between gap-3">
        <Icon name={icon} className="h-7 w-7 text-accent" strokeWidth={1.6} />
        {comingSoon && <StatusBadge tone="amber">Coming soon</StatusBadge>}
      </div>
      <h3 className="text-base font-semibold text-ink">
        {name}
        {subBrand && <span className="ml-2 text-xs font-normal text-muted">{subBrand}</span>}
      </h3>
      <p className="flex-1 text-sm leading-relaxed text-muted">{positioning}</p>
      {!compact && (
        <Link
          to={`/?sector=${encodeURIComponent(name)}#contact`}
          className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-accent"
        >
          Tell us about your {name.toLowerCase()} business
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}
