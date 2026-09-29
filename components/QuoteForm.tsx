"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none placeholder:text-zinc-500";

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [photoCount, setPhotoCount] = useState(0);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        body: new FormData(e.currentTarget),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="mt-8 rounded-2xl border border-green-500/30 bg-green-500/10 p-6 text-green-200">
        <div className="text-xl font-semibold text-white">
          Request received.
        </div>
        <p className="mt-2 leading-7">
          Thanks — we’ll look it over and get back to you with pricing. Want a
          faster answer? Text us at{" "}
          <a href="sms:18018659601" className="font-semibold text-white underline">
            (801) 865-9601
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-4 md:grid-cols-2">
      <input name="name" required className={inputClass} placeholder="Name" />
      <input
        name="contact"
        required
        className={inputClass}
        placeholder="Phone or Email"
      />
      <input
        name="vehicle"
        className={`${inputClass} md:col-span-2`}
        placeholder="Vehicle Year / Make / Model"
      />
      <textarea
        name="message"
        className={`${inputClass} min-h-[140px] md:col-span-2`}
        placeholder="Tell us what you want wrapped"
      />
      <label
        className={`${inputClass} cursor-pointer md:col-span-2 ${
          photoCount > 0 ? "text-white" : "text-zinc-500"
        }`}
      >
        <input
          type="file"
          name="photos"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => setPhotoCount(e.target.files?.length ?? 0)}
        />
        {photoCount > 0
          ? `${photoCount} photo${photoCount === 1 ? "" : "s"} selected`
          : "Attach vehicle photos (optional)"}
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-2xl bg-red-600 px-6 py-4 font-semibold text-white transition hover:bg-red-500 disabled:opacity-60 md:col-span-2"
      >
        {status === "sending" ? "Sending…" : "Request Pricing"}
      </button>
      {status === "error" && (
        <p className="text-red-300 md:col-span-2">
          Something went wrong — please try again or text us directly at (801)
          865-9601.
        </p>
      )}
    </form>
  );
}
