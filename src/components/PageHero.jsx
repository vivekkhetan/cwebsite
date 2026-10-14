import StatusBadge from "./StatusBadge";

export default function PageHero({ badge, title, body }) {
  return (
    <section className="bg-paper pt-16 pb-16 text-center sm:pt-20 sm:pb-20">
      <div className="section-shell">
        {badge && (
          <div className="flex justify-center">
            <StatusBadge tone="teal">{badge}</StatusBadge>
          </div>
        )}
        <h1 className="mx-auto mt-5 max-w-2xl text-4xl font-bold tracking-tight text-ink sm:text-5xl">{title}</h1>
        {body && <p className="mx-auto mt-5 max-w-xl text-muted">{body}</p>}
      </div>
    </section>
  );
}
