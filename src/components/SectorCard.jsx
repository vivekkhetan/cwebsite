import { Link } from "react-router-dom";
import Icon from "./Icon";
import StatusBadge from "./StatusBadge";

export default function SectorCard({ name, subBrand, positioning, icon, compact = false }) {
  return (
    <div className="flex flex-col rounded-2xl border border-navy-900/10 bg-white p-6">
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-saffron-500/10 text-saffron-600">
          <Icon name={icon} className="h-6 w-6" />
        </span>
        <StatusBadge tone="amber">Coming soon</StatusBadge>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-navy-900">
        {name}
        {subBrand && <span className="ml-2 text-xs font-normal text-navy-500">{subBrand}</span>}
      </h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-navy-600">{positioning}</p>
      {!compact && (
        <Link
          to={`/?sector=${encodeURIComponent(name)}#contact`}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-600"
        >
          Tell us about your {name.toLowerCase()} business
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}
