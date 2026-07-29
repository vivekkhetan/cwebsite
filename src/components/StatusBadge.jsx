export default function StatusBadge({ children, tone = "amber", className = "" }) {
  const tones = {
    amber: "bg-saffron-500/10 text-saffron-600 ring-saffron-500/30",
    teal: "bg-teal-500/10 text-teal-700 ring-teal-500/30",
    navy: "bg-navy-900/5 text-navy-700 ring-navy-900/15",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ring-1 ${tones[tone]} ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}
