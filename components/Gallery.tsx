"use client";

import { useCallback, useEffect, useState } from "react";

export type GalleryItem = {
  title: string;
  subtitle: string;
  image: string;
  className?: string;
};

export default function Gallery({ items }: { items: GalleryItem[] }) {
  const [selected, setSelected] = useState<number | null>(null);

  const close = useCallback(() => setSelected(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setSelected((cur) =>
        cur === null ? cur : (cur + dir + items.length) % items.length
      ),
    [items.length]
  );

  useEffect(() => {
    if (selected === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected, close, step]);

  const current = selected !== null ? items[selected] : null;

  return (
    <>
      <div className="grid grid-flow-dense grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 [grid-auto-rows:220px]">
        {items.map((item, i) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setSelected(i)}
            className={`group relative block w-full overflow-hidden bg-zinc-900 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${item.className ?? ""}`}
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <div className="font-display text-xl font-semibold uppercase tracking-wide">
                {item.title}
              </div>
              <div className="mt-0.5 text-sm text-zinc-300">
                {item.subtitle}
              </div>
            </div>
          </button>
        ))}

        <a
          href="#quote"
          className="group relative flex flex-col justify-between overflow-hidden bg-red-600 p-5 transition hover:bg-red-500 sm:col-span-2 lg:col-span-1"
        >
          <div className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-red-200">
            Next up
          </div>
          <div>
            <div className="font-display text-3xl font-semibold uppercase leading-tight">
              Your build here
            </div>
            <div className="mt-2 text-sm text-red-100">
              Text photos of your vehicle and the finish you want.
            </div>
            <div className="mt-4 font-display text-lg font-semibold uppercase tracking-wide">
              Get a quote →
            </div>
          </div>
        </a>
      </div>

      {current && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/95 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`${current.title} — ${current.subtitle}`}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-2xl text-white transition hover:bg-white/10"
          >
            ×
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-2xl text-white transition hover:bg-white/10"
          >
            ‹
          </button>
          <figure
            className="max-h-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={current.image}
              alt={current.title}
              className="max-h-[82vh] w-full object-contain"
            />
            <figcaption className="mt-4 text-center">
              <span className="font-display text-xl font-semibold uppercase tracking-wide">
                {current.title}
              </span>
              <span className="ml-3 text-zinc-400">{current.subtitle}</span>
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-2xl text-white transition hover:bg-white/10"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
