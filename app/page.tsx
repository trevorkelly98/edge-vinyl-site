import QuoteForm from "../components/QuoteForm";
import Gallery, { type GalleryItem } from "../components/Gallery";

const galleryItems: GalleryItem[] = [
  {
    title: "Evo X — Matte Black",
    subtitle: "Avery SW900 Matte Black",
    image: "/gallery/evo-x-matte-black.jpg",
    className: "row-span-2 sm:col-span-2",
  },
  {
    title: "Miata Track Car",
    subtitle: "Gloss lime green full wrap",
    image: "/gallery/miata-track-car.jpg",
    className: "sm:col-span-2",
  },
  {
    title: "CBR1000RR",
    subtitle: "Avery SW900 Gloss Black",
    image: "/gallery/cbr1000rr-gloss-black.jpg",
  },
  {
    title: "Chrome Delete",
    subtitle: "Ram 1500, blacked out",
    image: "/gallery/ram-chrome-delete.jpg",
  },
  {
    title: "Evo X",
    subtitle: "3M 2080 Gloss White Gold Sparkle",
    image: "/gallery/evo-x-gold-sparkle.jpg",
  },
  {
    title: "Kitchen Countertop",
    subtitle: "Gloss white architectural wrap",
    image: "/gallery/countertop-gloss-white.jpg",
  },
  {
    title: "Mini-Split Cover",
    subtitle: "Gloss black architectural wrap",
    image: "/gallery/mini-split-gloss-black.jpg",
  },
];

const evoStory = [
  {
    step: "01",
    title: "Factory Silver",
    film: "How it started",
    image: "/gallery/evo-x-silver.jpg",
    alt: "Evo X in its original factory silver",
  },
  {
    step: "02",
    title: "Gloss White Gold Sparkle",
    film: "3M 2080",
    image: "/gallery/evo-x-gold-sparkle.jpg",
    alt: "Evo X wrapped in 3M 2080 Gloss White Gold Sparkle, head-on at sunset",
  },
  {
    step: "03",
    title: "Matte Black",
    film: "Avery SW900",
    image: "/gallery/evo-x-matte-black.jpg",
    alt: "Evo X wrapped in Avery SW900 Matte Black",
  },
];

const services = [
  {
    title: "Full Wraps",
    description:
      "Complete color changes for cars, trucks, and bikes. New color, new attitude — and the paint underneath stays protected the whole time.",
    tag: "From $1,600",
  },
  {
    title: "Chrome Deletes",
    description:
      "Blacked-out trim for the clean OEM+ look, without committing to a full wrap. Small change, completely different attitude.",
    tag: "Cars · Trucks",
  },
  {
    title: "Paint Protection Film",
    description:
      "Nearly invisible film that takes the rock chips and road wear so your paint doesn't have to.",
    tag: "Full fronts · High-impact areas",
  },
  {
    title: "Motorcycle Wraps",
    description:
      "Fairings, tanks, and tight curves. Small panels and zero room for error — that's the fun part.",
    tag: "Sport bikes",
  },
  {
    title: "Custom & Track Projects",
    description:
      "Roofs, mirrors, spoilers, accent panels, and one-off ideas for builds that don't do stock.",
    tag: "If you can picture it, ask",
  },
  {
    title: "Architectural Wraps",
    description:
      "Countertops, cabinets, appliances — even mini-split covers. Yes, really. Vinyl isn't just for cars.",
    tag: "Homes",
  },
];

const processSteps = [
  {
    title: "Consult",
    description:
      "Photos, finish, price. You know the number and the plan before we ever touch the car.",
  },
  {
    title: "Prep",
    description:
      "Wash, decontaminate, and strip anything that would fight the film. Wraps fail at prep, not at install.",
  },
  {
    title: "Install",
    description:
      "Panel by panel, laid by hand. Tight curves and deep recesses get time, not shortcuts.",
  },
  {
    title: "Finish",
    description:
      "Every edge checked and heat-set, then a final once-over in good light. That's the standard.",
  },
];

const faqs = [
  {
    q: "How much does a full wrap cost?",
    a: "Full wraps start at $1,600. Your exact price depends on the vehicle, the film, and how much coverage you want. Text a few photos and you'll get a real number — not a guess.",
  },
  {
    q: "What films do you use?",
    a: "3M, Avery Dennison, and KPMF — the same films on the builds in the gallery. Have a color in mind? Send it over and we'll match it to a real film.",
  },
  {
    q: "Will a wrap damage my paint?",
    a: "No. Quality vinyl is made to come off clean, and while it's on, it shields your paint from sun and road wear. If your paint is already peeling or failing, I'll tell you up front — some cars need paint work first.",
  },
  {
    q: "How long does a wrap take?",
    a: "It depends on the car and the job. A chrome delete is quick; a full color change on a sport bike is slow, detailed work. You'll get a timeframe with your quote, before you commit to anything.",
  },
  {
    q: "Do you only wrap cars?",
    a: "No — trucks, bikes, track cars, and the occasional kitchen countertop or mini-split cover. If it's smooth and you want it a different color, ask.",
  },
  {
    q: "How do I get started?",
    a: "Text (801) 865-9601 or use the form below. Send photos of your vehicle, the finish you want, and what parts you want wrapped — that's enough to start pricing.",
  },
];

const marqueeItems = [
  "Full Wraps",
  "Chrome Deletes",
  "Paint Protection Film",
  "Motorcycle Wraps",
  "Architectural Wraps",
  "Utah",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: "Edge Vinyl",
  url: "https://edge-vinyl.net",
  telephone: "+1-801-865-9601",
  email: "trevor@edge-vinyl.com",
  image: "https://edge-vinyl.net/gallery/featured-evo-x.jpg",
  description:
    "Utah vinyl wrap shop: full wraps, paint protection film, chrome deletes, motorcycle wraps, and architectural wraps.",
  areaServed: "Utah",
  sameAs: ["https://instagram.com/edge_vinyl"],
};

export default function EdgeVinylWebsite() {
  return (
    <div className="min-h-screen bg-black font-sans text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
          <a href="#top" className="flex items-center">
            <img
              src="/edge-vinyl-logo.png"
              alt="Edge Vinyl"
              className="h-10 w-auto object-contain"
            />
          </a>
          <nav className="hidden items-center gap-8 font-display text-sm font-medium uppercase tracking-[0.18em] text-zinc-300 md:flex">
            <a href="#work" className="transition hover:text-white">
              Work
            </a>
            <a href="#evo" className="transition hover:text-white">
              The Evo
            </a>
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#process" className="transition hover:text-white">
              Process
            </a>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
          </nav>
          <a
            href="sms:18018659601"
            className="bg-red-600 px-4 py-2.5 font-display text-sm font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-red-500"
          >
            Text for Quote
          </a>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden bg-black">
        <img
          src="/gallery/featured-evo-x.jpg"
          alt="Evo X wrapped in gloss white with gold sparkle on a mountain road surrounded by fall colors"
          className="absolute inset-0 hidden h-full w-full object-cover [object-position:center_75%] md:block"
        />
        <div className="absolute inset-0 hidden bg-gradient-to-t from-black via-black/40 to-black/15 md:block" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-black/60 via-transparent to-transparent md:block" />

        <div className="relative md:hidden">
          <img
            src="/gallery/featured-evo-x.jpg"
            alt="Evo X wrapped in gloss white with gold sparkle on a mountain road surrounded by fall colors"
            className="aspect-[3/2] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-end px-6 pb-16 pt-10 md:min-h-[92vh] md:px-10 md:pt-40">
          <div className="flex items-center gap-3 font-display text-sm font-medium uppercase tracking-[0.3em] text-red-400">
            <span className="h-px w-10 bg-red-500" />
            Utah Vinyl Wraps
          </div>
          <h1 className="mt-5 font-display font-bold uppercase leading-[0.95] tracking-tight">
            <span className="block text-6xl md:text-8xl">No shortcuts.</span>
            <span className="block text-6xl text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.9)] md:text-8xl">
              Every edge matters.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-200">
            Full wraps, chrome deletes, and PPF for people who care about
            details — done by hand, in Utah, one car at a time.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#quote"
              className="bg-red-600 px-7 py-3.5 font-display text-base font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-red-500"
            >
              Get a Quote
            </a>
            <a
              href="#work"
              className="border border-white/40 px-7 py-3.5 font-display text-base font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-white/10"
            >
              See the Work
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 font-display text-sm font-medium uppercase tracking-[0.2em] text-zinc-300">
            <span>
              Full wraps <span className="text-white">from $1,600</span>
            </span>
            <span>Cars · Trucks · Bikes</span>
            <span>3M · Avery · KPMF</span>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-white/10 bg-zinc-950 py-4" aria-hidden="true">
        <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map(
            (item, i) => (
              <span
                key={i}
                className="flex items-center gap-8 font-display text-lg font-semibold uppercase tracking-[0.25em] text-zinc-400"
              >
                {item}
                <span className="text-red-500">•</span>
              </span>
            )
          )}
        </div>
      </div>

      <section id="work" className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="font-display text-sm font-medium uppercase tracking-[0.3em] text-red-400">
              Selected Work
            </div>
            <h2 className="mt-3 font-display text-4xl font-semibold uppercase md:text-5xl">
              The work speaks.
            </h2>
          </div>
          <p className="max-w-sm leading-7 text-zinc-400">
            Every photo on this page is a real Edge Vinyl job. Tap any photo
            to see it full-screen.
          </p>
        </div>

        <Gallery items={galleryItems} />
      </section>

      <section id="evo" className="border-y border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="font-display text-sm font-medium uppercase tracking-[0.3em] text-red-400">
            The Shop Car
          </div>
          <h2 className="mt-3 font-display text-4xl font-semibold uppercase md:text-5xl">
            One car. Three colors.
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-zinc-400">
            This Evo X is the test bed — every finish gets proven on my own
            car before it ever goes on a customer's. It's worn all three of
            these looks.
          </p>

          <div className="mt-12 grid gap-3 md:grid-cols-3">
            {evoStory.map((phase) => (
              <figure key={phase.step} className="group relative overflow-hidden bg-zinc-900">
                <img
                  src={phase.image}
                  alt={phase.alt}
                  loading="lazy"
                  className="h-80 w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <div className="font-display text-sm font-semibold tracking-[0.3em] text-red-400">
                    {phase.step}
                  </div>
                  <div className="mt-1 font-display text-2xl font-semibold uppercase leading-tight">
                    {phase.title}
                  </div>
                  <div className="mt-1 text-sm text-zinc-300">{phase.film}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="font-display text-sm font-medium uppercase tracking-[0.3em] text-red-400">
          Services
        </div>
        <h2 className="mt-3 font-display text-4xl font-semibold uppercase md:text-5xl">
          What gets wrapped
        </h2>

        <div className="mt-12 border-t border-white/10">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group grid gap-3 border-b border-white/10 py-8 transition hover:bg-white/[0.02] md:grid-cols-[70px_1fr_1.2fr_auto] md:items-baseline md:gap-6"
            >
              <div className="font-display text-lg font-semibold text-red-500">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-3xl font-semibold uppercase leading-none">
                {service.title}
              </h3>
              <p className="max-w-xl leading-7 text-zinc-400">
                {service.description}
              </p>
              <div className="font-display text-sm font-medium uppercase tracking-[0.2em] text-zinc-300">
                {service.tag}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="process" className="border-y border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="font-display text-sm font-medium uppercase tracking-[0.3em] text-red-400">
            How It Works
          </div>
          <h2 className="mt-3 font-display text-4xl font-semibold uppercase md:text-5xl">
            The process
          </h2>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <div key={step.title} className="border-t-2 border-red-600 pt-5">
                <div className="font-display text-5xl font-bold text-white/15">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 font-display text-2xl font-semibold uppercase">
                  {step.title}
                </h3>
                <p className="mt-2 leading-7 text-zinc-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative overflow-hidden">
            <img
              src="/gallery/evo-x-overlook.jpg"
              alt="White Evo X wrapped in 3M 2080 Gloss White Gold Sparkle parked above the Utah valley"
              loading="lazy"
              className="h-[420px] w-full object-cover lg:h-[520px]"
            />
            <div className="absolute bottom-4 left-4 bg-black/80 px-4 py-2 font-display text-sm font-medium uppercase tracking-[0.2em] text-zinc-200">
              The Evo — Gloss White Gold Sparkle
            </div>
          </div>
          <div>
            <div className="font-display text-sm font-medium uppercase tracking-[0.3em] text-red-400">
              About
            </div>
            <h2 className="mt-3 font-display text-4xl font-semibold uppercase leading-tight md:text-5xl">
              About Edge Vinyl
            </h2>
            <div className="mt-6 space-y-4 leading-8 text-zinc-300">
              <p>
                Edge Vinyl is owned and operated by Trevor. He handles the
                quote, prep, installation, and final inspection on every job,
                so nothing gets handed off or lost along the way.
              </p>
              <p>
                His Evo X has worn three different finishes. It gives
                customers a chance to see how the colors look in real
                daylight — not just on a sample swatch.
              </p>
              <p>
                The work covers cars, trucks, and motorcycles, plus select
                architectural projects like countertops and mini-split covers.
              </p>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-white/10 pt-8">
              <div>
                <dt className="font-display text-sm font-medium uppercase tracking-[0.22em] text-zinc-500">
                  Owner / Installer
                </dt>
                <dd className="mt-1.5 font-display text-xl font-semibold">
                  Trevor
                </dd>
              </div>
              <div>
                <dt className="font-display text-sm font-medium uppercase tracking-[0.22em] text-zinc-500">
                  Based in
                </dt>
                <dd className="mt-1.5 font-display text-xl font-semibold">
                  Utah
                </dd>
              </div>
              <div>
                <dt className="font-display text-sm font-medium uppercase tracking-[0.22em] text-zinc-500">
                  Film brands
                </dt>
                <dd className="mt-1.5 font-display text-xl font-semibold">
                  3M · Avery · KPMF
                </dd>
              </div>
              <div>
                <dt className="font-display text-sm font-medium uppercase tracking-[0.22em] text-zinc-500">
                  Get a quote
                </dt>
                <dd className="mt-1.5 font-display text-xl font-semibold">
                  Text · Email · Form
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section id="faq" className="border-y border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="font-display text-sm font-medium uppercase tracking-[0.3em] text-red-400">
            Questions
          </div>
          <h2 className="mt-3 font-display text-4xl font-semibold uppercase md:text-5xl">
            Before you ask
          </h2>

          <div className="mt-12 grid gap-x-12 lg:grid-cols-2">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border-b border-white/10">
                <summary className="flex cursor-pointer items-center justify-between gap-4 py-6">
                  <span className="font-display text-xl font-semibold uppercase tracking-wide">
                    {faq.q}
                  </span>
                  <span className="font-display text-3xl font-light leading-none text-red-500 transition duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="pb-6 leading-7 text-zinc-400">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="font-display text-sm font-medium uppercase tracking-[0.3em] text-red-400">
              Get a Quote
            </div>
            <h2 className="mt-3 font-display text-4xl font-semibold uppercase md:text-5xl">
              Get a number.
            </h2>
            <p className="mt-4 max-w-xl leading-8 text-zinc-400">
              Send your vehicle, the finish you want, and a few photos. You'll
              get real pricing and a timeframe — no obligation, no pressure.
            </p>
            <QuoteForm />
          </div>

          <div className="lg:pt-24">
            <img
              src="/edge-vinyl-logo.png"
              alt="Edge Vinyl logo"
              className="mb-8 h-auto w-full max-w-[200px] object-contain"
            />
            <div className="space-y-7">
              <div>
                <div className="font-display text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
                  Text / Call
                </div>
                <a
                  href="tel:18018659601"
                  className="mt-1.5 inline-block font-display text-2xl font-semibold transition hover:text-red-400"
                >
                  (801) 865-9601
                </a>
              </div>
              <div>
                <div className="font-display text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
                  Email
                </div>
                <a
                  href="mailto:trevor@edge-vinyl.com"
                  className="mt-1.5 inline-block break-all font-display text-2xl font-semibold transition hover:text-red-400"
                >
                  trevor@edge-vinyl.com
                </a>
              </div>
              <div>
                <div className="font-display text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
                  Instagram
                </div>
                <a
                  href="https://instagram.com/edge_vinyl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 inline-block font-display text-2xl font-semibold text-red-400 transition hover:text-red-300"
                >
                  @edge_vinyl
                </a>
              </div>
              <div>
                <div className="font-display text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
                  Location
                </div>
                <div className="mt-1.5 font-display text-2xl font-semibold">
                  Utah
                </div>
              </div>
            </div>
            <p className="mt-10 border-l-2 border-red-600 pl-4 leading-7 text-zinc-400">
              Fastest route: text photos of your vehicle, the color or finish
              you want, and what parts you want wrapped.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-zinc-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
          <img
            src="/edge-vinyl-logo.png"
            alt="Edge Vinyl"
            className="h-9 w-auto object-contain"
          />
          <nav className="flex flex-wrap gap-x-7 gap-y-2 font-display text-sm font-medium uppercase tracking-[0.18em] text-zinc-400">
            <a href="#work" className="transition hover:text-white">
              Work
            </a>
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#process" className="transition hover:text-white">
              Process
            </a>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
            <a href="#quote" className="transition hover:text-white">
              Quote
            </a>
          </nav>
          <div className="text-sm text-zinc-500">
            © 2026 Edge Vinyl · Utah · Every photo: real Edge Vinyl work
          </div>
        </div>
      </footer>

      <a
        href="sms:18018659601"
        className="fixed bottom-4 right-4 z-50 bg-red-600 px-5 py-3 font-display text-sm font-semibold uppercase tracking-[0.15em] text-white shadow-lg shadow-red-900/40 transition hover:bg-red-500 md:hidden"
      >
        Text for Quote
      </a>
    </div>
  );
}
