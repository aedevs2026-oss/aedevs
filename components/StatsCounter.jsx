import { stats } from "@/lib/content";

export function StatsCounter() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" role="list" aria-label="Company statistics">
      {stats.map((stat) => (
        <div key={stat.label} className="card p-6 text-center" role="listitem" aria-label={`${stat.value} ${stat.label}`}>
          <p className="font-display text-4xl font-bold text-gradient">{stat.value}</p>
          <p className="mt-2 text-sm font-medium text-slate-600">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
