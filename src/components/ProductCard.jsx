import Icon from "./Icon";

export default function ProductCard({ name, subtitle, description, icon }) {
  return (
    <div className="rounded-2xl border border-navy-900/10 bg-white p-6 transition hover:border-teal-500/40 hover:shadow-md">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-4 text-base font-semibold text-navy-900">
        {name}
        {subtitle && <span className="ml-2 text-xs font-normal text-navy-500">{subtitle}</span>}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-navy-600">{description}</p>
    </div>
  );
}
