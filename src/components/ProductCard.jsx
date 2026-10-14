import Icon from "./Icon";

export default function ProductCard({ name, subtitle, description, icon }) {
  return (
    <div className="flex flex-col gap-3 bg-surface p-7 transition hover:bg-accent/[0.04] sm:p-8">
      <Icon name={icon} className="h-7 w-7 text-accent" strokeWidth={1.6} />
      <h3 className="text-base font-semibold text-ink">
        {name}
        {subtitle && <span className="ml-2 text-xs font-normal text-muted">{subtitle}</span>}
      </h3>
      <p className="text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}
