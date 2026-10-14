const COLS = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

export default function CardGrid({ cols = 4, className = "", children }) {
  return (
    <div
      className={`grid grid-cols-1 gap-px overflow-hidden rounded-[28px] border border-line/10 bg-line/10 ${COLS[cols]} ${className}`}
    >
      {children}
    </div>
  );
}
