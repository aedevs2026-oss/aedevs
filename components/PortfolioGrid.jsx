"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { portfolioCategories, portfolioItems } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";

export function PortfolioGrid({ limit }) {
  const [active, setActive] = useState("All");
  const tabRefs = useRef([]);

  const filtered =
    active === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === active);

  const items = limit ? filtered.slice(0, limit) : filtered;

  const handleKeyDown = useCallback(
    (event, index) => {
      const tabs = portfolioCategories;
      let nextIndex = index;

      if (event.key === "ArrowRight") {
        nextIndex = (index + 1) % tabs.length;
      } else if (event.key === "ArrowLeft") {
        nextIndex = (index - 1 + tabs.length) % tabs.length;
      } else if (event.key === "Home") {
        nextIndex = 0;
      } else if (event.key === "End") {
        nextIndex = tabs.length - 1;
      } else {
        return;
      }

      event.preventDefault();
      setActive(tabs[nextIndex]);
      tabRefs.current[nextIndex]?.focus();
    },
    []
  );

  return (
    <div>
      {!limit ? (
        <div
          className="flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter portfolio by category"
        >
          {portfolioCategories.map((category, index) => {
            const tabId = `portfolio-tab-${category.toLowerCase().replace(/\s+/g, "-")}`;
            return (
              <button
                key={category}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                id={tabId}
                type="button"
                role="tab"
                aria-selected={active === category}
                aria-controls="portfolio-panel"
                tabIndex={active === category ? 0 : -1}
                onClick={() => setActive(category)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                className={`chip cursor-pointer ${active === category ? "chip-active" : ""}`}
              >
                {category}
              </button>
            );
          })}
        </div>
      ) : null}

      <div
        id="portfolio-panel"
        role={limit ? undefined : "tabpanel"}
        aria-labelledby={limit ? undefined : `portfolio-tab-${active.toLowerCase().replace(/\s+/g, "-")}`}
        className={`grid gap-6 md:grid-cols-2 ${limit ? "" : "mt-8"} xl:grid-cols-3`}
      >
        {items.map((item) => (
          <article key={item.title} className="card card-lift group overflow-hidden">
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
              <Image
                src={item.image}
                alt={`${item.title} — ${item.category} project`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="chip">{item.category}</span>
                <span className="text-xs text-slate-400">{item.location}</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
              <div className="mt-4 flex items-center justify-between gap-4">
                <p className="text-xs text-slate-500">
                  Client: <span className="font-medium text-slate-700">{item.client}</span>
                </p>
                <TextLink href={item.href} external>
                  Visit
                </TextLink>
              </div>
            </div>
          </article>
        ))}
      </div>

      {limit ? (
        <div className="mt-10 text-center">
          <Button href="/portfolio" variant="secondary">
            View all projects
          </Button>
        </div>
      ) : null}
    </div>
  );
}
