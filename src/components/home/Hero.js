import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-slate-950 text-white"
    >
      {/* background gradient blob */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -top-32 -right-10 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute bottom-[-6rem] -left-12 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: text + CTAs */}
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-emerald-300 mb-3">
            Govt. Approved • ISO 9001:2015
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            Professional{" "}
            <span className="text-emerald-400">
              Pest Control Services
            </span>{" "}
            in Gujarat
          </h1>

          <p className="text-sm sm:text-base text-slate-200/90 mb-6 max-w-xl">
            R.P. Pest Control provides safe and effective treatment for homes,
            bungalows, factories, offices and more. Termites, rodents,
            cockroaches, honey bees, wooden borers – we handle all types of
            infestations with certified chemicals and trained technicians.
          </p>

          <div className="flex flex-wrap gap-3 mb-4">
            <Link
              href="tel:+919824931033"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition"
            >
              Call Now for Inspection
            </Link>
            <Link
              href="https://wa.me/919824931033?text=Hi%2C%20I%20need%20pest%20control%20service%20at%20my%20location."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-500 px-5 py-2 text-sm font-semibold text-slate-100 hover:border-emerald-400 hover:text-emerald-300 transition"
            >
              Chat on WhatsApp
            </Link>
          </div>

          <p className="text-[11px] text-slate-400 mb-5">
            Same-day service • Residential &amp; Industrial • Odourless &
            child-safe options available
          </p>

          {/* Badges row */}
          <div className="flex flex-wrap gap-3 text-[11px] text-slate-200">
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/70 border border-slate-700 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Termite &amp; rodent control
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/70 border border-slate-700 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Cockroach gel &amp; honey bee treatment
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/70 border border-slate-700 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Wooden borer &amp; cobweb treatment
            </span>
          </div>
        </div>

        {/* Right: hero image + info card */}
        <div className="md:justify-self-end w-full">
          <div className="relative max-w-md ml-auto">
            {/* main image */}
            <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl shadow-black/50">
              <Image
                src="/images/pest-hero.jpg"
                alt="Pest control technician spraying treatment around a house"
                fill 
                className="object-cover"
              />
            </div>

            {/* floating card */}
            <div className="absolute -bottom-6 left-4 right-4 rounded-2xl bg-slate-950/95 border border-slate-700 px-4 py-3 shadow-xl backdrop-blur">
              <p className="text-xs text-slate-300 mb-1">
                R.P. Pest Control • Vapi
              </p>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-lg font-semibold text-emerald-400">
                    1000+ sites treated
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Homes, bungalows, factories &amp; offices
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-400">Emergency support</p>
                  <p className="text-sm font-semibold text-slate-100">
                    98249 31033 / 84697 28777
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* spacing for mobile so floating card doesn't overlap */}
          <div className="h-10 md:hidden" />
        </div>
      </div>
    </section>
  );
}
