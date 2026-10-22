"use client";

import { useState } from "react";

export type EvoPhase = {
  step: string;
  title: string;
  film: string;
  image: string;
  alt: string;
};

export default function EvoCompare({ phases }: { phases: EvoPhase[] }) {
  const [pos, setPos] = useState(0);
  const active = Math.min(phases.length - 1, Math.max(0, Math.round(pos)));
  const current = phases[active];

  return (
    <div className="mt-12">
      <div className="relative h-[420px] overflow-hidden bg-zinc-900 md:h-[540px]">
        {phases.map((phase, i) => (
          <img
            key={phase.step}
            src={phase.image}
            alt={phase.alt}
            className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
            style={{ opacity: Math.max(0, 1 - Math.abs(pos - i)) }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 md:p-7">
          <div>
            <div className="font-display text-sm font-semibold tracking-[0.3em] text-red-400">
              {current.step} / {String(phases.length).padStart(2, "0")}
            </div>
            <div className="mt-1 font-display text-3xl font-semibold uppercase leading-tight md:text-4xl">
              {current.title}
            </div>
            <div className="mt-1 text-zinc-300">{current.film}</div>
          </div>
          <div className="hidden font-display text-sm font-medium uppercase tracking-[0.25em] text-zinc-400 md:block">
            Same car · Three finishes
          </div>
        </div>
      </div>

      <div className="mt-6">
        <label
          htmlFor="evo-compare-slider"
          className="font-display text-sm font-medium uppercase tracking-[0.25em] text-zinc-400"
        >
          Drag to flip through the finishes
        </label>
        <input
          id="evo-compare-slider"
          type="range"
          min={0}
          max={phases.length - 1}
          step={0.01}
          value={pos}
          onChange={(e) => setPos(parseFloat(e.target.value))}
          aria-label="Compare the Evo X finishes"
          className="mt-3 w-full cursor-pointer accent-red-600"
        />
        <div className="mt-4 grid grid-cols-3 gap-2">
          {phases.map((phase, i) => (
            <button
              key={phase.step}
              type="button"
              onClick={() => setPos(i)}
              aria-pressed={active === i}
              className={`border px-3 py-3 text-left font-display text-sm font-semibold uppercase tracking-wide transition md:text-base ${
                active === i
                  ? "border-red-600 bg-red-600/10 text-white"
                  : "border-white/15 text-zinc-400 hover:border-white/40 hover:text-white"
              }`}
            >
              <span className="mr-2 text-red-500">{phase.step}</span>
              {phase.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
