export default function StatusBadge({ children, tone = "amber", className = "" }) {
  const tones = {
    amber: "text-amber-600",
    teal: "text-accent",
    navy: "text-ink",
  };
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-line/10 bg-surface px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-ink ${className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full bg-current ${tones[tone]}`} />
      {children}
    </span>
  );
}
