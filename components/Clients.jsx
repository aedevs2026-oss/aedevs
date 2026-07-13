import { clients } from "@/lib/content";

export function Clients() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {clients.map((client) => (
        <a
          key={client.company}
          href={client.href}
          target="_blank"
          rel="noopener noreferrer"
          className="card card-lift group flex flex-col items-center p-6 text-center"
          aria-label={`Visit ${client.company} website`}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 font-display text-lg font-bold text-white">
            {client.company.charAt(0)}
          </div>
          <p className="mt-4 font-display text-sm font-semibold text-slate-900 transition-colors group-hover:text-blue-600">
            {client.company}
          </p>
          <p className="mt-1 text-xs text-slate-500">{client.category}</p>
          <p className="mt-2 text-xs text-slate-400">{client.location}</p>
        </a>
      ))}
    </div>
  );
}
