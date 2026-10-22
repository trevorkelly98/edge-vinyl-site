"use client";

import { useCallback, useEffect, useState } from "react";

export type GalleryPhoto = {
  image: string;
  label: string;
};

export type GalleryItem = {
  title: string;
  subtitle: string;
  className?: string;
  photos: GalleryPhoto[];
};

export default function Gallery({ items }: { items: GalleryItem[] }) {
  const [album, setAlbum] = useState<number | null>(null);
  const [photo, setPhoto] = useState(0);

  const currentAlbum = album !== null ? items[album] : null;
  const total = currentAlbum ? currentAlbum.photos.length : 0;
  const current = currentAlbum ? currentAlbum.photos[photo] : null;

  const close = useCallback(() => {
    setAlbum(null);
    setPhoto(0);
  }, []);

  const step = useCallback(
    (dir: 1 | -1) =>
      setPhoto((cur) => (total === 0 ? cur : (cur + dir + total) % total)),
    [total]
  );

  useEffect(() => {
    if (album === null) return;
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
  }, [album, close, step]);

  return (
    <>
      <div className="grid grid-flow-dense grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 [grid-auto-rows:220px]">
        {items.map((item, i) => (
          <button
            key={item.title}
            type="button"
            onClick={() => {
              setAlbum(i);
              setPhoto(0);
            }}
            className={`group relative block w-full overflow-hidden bg-zinc-900 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${item.className ?? ""}`}
          >
            <img
              src={item.photos[0].image}
              alt={item.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
            {item.photos.length > 1 && (
              <span className="absolute right-3 top-3 bg-black/70 px-2.5 py-1 font-display text-xs font-semibold uppercase tracking-[0.18em] text-white">
                {item.photos.length} photos
              </span>
            )}
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

      {currentAlbum && current && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/95 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`${currentAlbum.title} — ${current.label}`}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-2xl text-white transition hover:bg-white/10"
          >
            ×
          </button>
          {total > 1 && (
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
          )}
          <figure
            className="max-h-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={current.image}
              alt={`${currentAlbum.title} — ${current.label}`}
              className="max-h-[82vh] w-full object-contain"
            />
            <figcaption className="mt-4 text-center">
              <span className="font-display text-xl font-semibold uppercase tracking-wide">
                {currentAlbum.title}
              </span>
              <span className="ml-3 text-zinc-400">{current.label}</span>
              {total > 1 && (
                <span className="ml-3 text-zinc-500">
                  {photo + 1} / {total}
                </span>
              )}
            </figcaption>
          </figure>
          {total > 1 && (
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
          )}
        </div>
      )}
    </>
  );
}
