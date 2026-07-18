import Image from "next/image";
import { clients } from "@/lib/content";

function getFaviconUrl(url) {
  try {
    const { hostname } = new URL(url);
    return `https://www.google.com/s2/favicons?domain=${hostname}&sz=128`;
  } catch {
    return "https://www.google.com/s2/favicons?domain=example.com&sz=128";
  }
}

export function Clients() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {clients.map((client) => {
        const logoSrc = client.logo || getFaviconUrl(client.href);

        return (
          <a
            key={client.company}
            href={client.href}
            target="_blank"
            rel="noopener noreferrer"
            className="card card-lift group flex flex-col items-center p-6 text-center"
            aria-label={`Visit ${client.company} website`}
          >
            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
              <Image
                src={logoSrc}
                alt={`${client.company} logo`}
                width={40}
                height={40}
                loading="lazy"
                className="h-10 w-10 object-contain"
              />
            </div>
            <p className="mt-4 font-display text-sm font-semibold text-slate-900 transition-colors group-hover:text-blue-600">
              {client.company}
            </p>
            <p className="mt-1 text-xs text-slate-500">{client.category}</p>
            <p className="mt-2 text-xs text-slate-400">{client.location}</p>
          </a>
        );
      })}
    </div>
  );
}
