import QuoteForm from "../components/QuoteForm";

export default function EdgeVinylWebsite() {
  const services = [
    {
      title: "Full Wraps",
      description:
        "Complete color changes and custom finishes for cars, trucks, and bikes with a clean, high-end result.",
    },
    {
      title: "Paint Protection Film",
      description:
        "Nearly invisible PPF that shields your paint from rock chips, scratches, and road wear.",
    },
    {
      title: "Chrome Delete",
      description:
        "Blacked-out trim for a cleaner, more aggressive look without committing to a full wrap.",
    },
    {
      title: "Motorcycle Wraps",
      description:
        "Precision wrapping for bikes, fairings, tanks, and details where tight curves matter most.",
    },
    {
      title: "Custom Projects",
      description:
        "Track cars, accent panels, mirrors, spoilers, roofs, and one-off styling projects tailored to your build.",
    },
  ];

  const gallery = [
    {
      title: "Evo X",
      subtitle: "3M 2080 Gloss White Gold Sparkle",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "CBR1000RR",
      subtitle: "Avery SW900 Gloss Black",
      image:
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Chrome Delete",
      subtitle: "Clean OEM+ restyling",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.22),transparent_30%),linear-gradient(180deg,#090909_0%,#050505_100%)]">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:36px_36px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-10 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-300">
              Utah Vinyl Wraps • Chrome Deletes • Custom Builds
            </div>
            <div className="max-w-2xl">
              <img
                src="/edge-vinyl-logo.png"
                alt="Edge Vinyl logo"
                className="mb-0 h-auto w-full max-w-[320px] object-contain"
              />
              <h1 className="-mt-2 text-3xl font-black tracking-tight md:text-5xl lg:text-6xl">
                <span className="block text-zinc-500">NO SHORTCUTS.</span>
                <span className="block text-white">
                  EVERY EDGE MATTERS.
                </span>
              </h1>
            </div>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
              Transform your car — starting at $1600. High-end vinyl wraps,
              chrome deletes, and custom automotive styling built for people who
              care about details.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="sms:18018659601"
                className="rounded-2xl bg-red-600 px-6 py-3 font-semibold text-white shadow-lg shadow-red-900/30 transition hover:bg-red-500"
              >
                Text for Quote
              </a>
              <a
                href="#gallery"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                View Work
              </a>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-2 gap-4 text-sm text-zinc-300 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xl font-bold text-white">Full Wraps</div>
                <div className="mt-1">Cars, trucks, bikes</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xl font-bold text-white">Chrome Delete</div>
                <div className="mt-1">Clean OEM+ look</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xl font-bold text-white">Utah Based</div>
                <div className="mt-1">DM or text to book</div>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center md:mt-10 lg:mt-14 xl:mt-16">
            <div className="absolute -left-6 top-8 h-32 w-32 rounded-full bg-red-600/20 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-red-500/10 blur-3xl" />

            <div className="relative w-full rounded-[2rem] border border-white/10 bg-zinc-950/90 p-4 shadow-2xl shadow-black/60">
              <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,#111_0%,#090909_100%)] p-6">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <div className="text-sm uppercase tracking-[0.25em] text-zinc-400">
                      Featured Build
                    </div>
                    <div className="mt-2 text-2xl font-bold">
                      Precision. Style. Edge.
                    </div>
                  </div>
                  <div className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-semibold tracking-[0.2em] text-red-300">
                    EDGE VINYL
                  </div>
                </div>

                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-900">
                  <img
                    src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=80"
                    alt="Wrapped car"
                    className="h-[360px] w-full object-cover"
                  />
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3 text-center text-sm">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <div className="font-semibold text-white">Gloss</div>
                    <div className="mt-1 text-zinc-400">Premium finish</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <div className="font-semibold text-white">Satin</div>
                    <div className="mt-1 text-zinc-400">Stealth look</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <div className="font-semibold text-white">Matte</div>
                    <div className="mt-1 text-zinc-400">Modern flat</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center gap-4">
                  <img
                    src="/edge-vinyl-logo.png"
                    alt="Edge Vinyl"
                    className="h-12 w-12 rounded-full border border-white/10 object-cover"
                  />
                  <div>
                    <div className="font-semibold">Edge Vinyl</div>
                    <div className="text-sm text-zinc-400">
                      Utah • Wraps • Chrome Deletes
                    </div>
                  </div>
                </div>
                <a
                  href="sms:18018659601"
                  className="rounded-2xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
                >
                  Text Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-red-400">
              Services
            </div>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Built for clean finishes and aggressive styling.
            </h2>
          </div>
          <p className="max-w-xl leading-8 text-zinc-400">
            From full color changes to chrome deletes, every panel gets
            prepped, wrapped, and finished like it’s our own car.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-lg shadow-black/20"
            >
              <div className="mb-4 h-1 w-12 rounded-full bg-red-500" />
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="mt-3 leading-7 text-zinc-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-12">
          <div className="text-sm uppercase tracking-[0.25em] text-red-400">
            About
          </div>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Detail-obsessed, Utah-based.
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-zinc-400">
            Edge Vinyl is a Utah-based automotive styling shop specializing in
            full vinyl wraps, paint protection film, chrome deletes, and
            motorcycle wraps. Every panel gets prepped, wrapped, and finished
            like it’s our own car — no shortcuts, every edge matters.
          </p>
        </div>
      </section>

      <section id="gallery" className="border-y border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="text-sm uppercase tracking-[0.25em] text-red-400">
            Gallery
          </div>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Recent work and standout finishes.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {gallery.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-black"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="text-lg font-bold">{item.title}</div>
                  <div className="mt-1 text-sm text-zinc-400">
                    {item.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-red-400">
              Get a Quote
            </div>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Ready to change the look of your build?
            </h2>
            <p className="mt-4 max-w-xl leading-8 text-zinc-400">
              Send over your vehicle, the finish you want, and a few photos.
              We’ll help you choose the right look and get pricing started.
            </p>

            <QuoteForm />
          </div>

          <div>
            <div className="mt-3">
              <img
                src="/edge-vinyl-logo.png"
                alt="Edge Vinyl logo"
                className="h-auto w-full max-w-[200px] object-contain mb-6 drop-shadow-[0_0_10px_rgba(255,0,0,0.4)]"
              />
            </div>

            <div className="mt-8 space-y-6 text-zinc-300">
              <div>
                <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                  Phone
                </div>
                <a
                  href="tel:18018659601"
                  className="mt-2 inline-block text-xl font-semibold transition hover:text-red-400"
                >
                  (801) 865-9601
                </a>
              </div>

              <div>
                <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                  Email
                </div>
                <a
                  href="mailto:trevor@edge-vinyl.com"
                  className="mt-2 inline-block break-all text-xl font-semibold transition hover:text-red-400"
                >
                  trevor@edge-vinyl.com
                </a>
              </div>

              <div>
                <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                  Location
                </div>
                <div className="mt-2 text-xl font-semibold">Utah</div>
              </div>

              <div>
                <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                  Instagram
                </div>
                <a
                  href="https://instagram.com/edge_vinyl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-xl font-semibold text-red-400 transition hover:text-red-300"
                >
                  @edgevinyl → View Work
                </a>
              </div>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-red-500/20 bg-red-500/10 p-5 text-red-200">
              DM photos of your vehicle, the color or finish you want, and what
              parts you want wrapped to get started fast.
            </div>
          </div>
        </div>
      </section>

      <a
        href="sms:18018659601"
        className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full bg-red-600 px-6 py-3 font-semibold text-white shadow-lg shadow-red-900/40 transition hover:bg-red-500"
      >
        Text Now for Quote
      </a>
    </div>
  );
}
