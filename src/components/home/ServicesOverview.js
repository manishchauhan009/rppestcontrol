import Link from "next/link";
const SERVICES = [
  {
    name: "General Pest Control",
    short: "For homes, bungalows, factories & offices",
    desc: "Complete treatment for ants, spiders, silverfish and common crawling insects using odourless, surface-safe chemicals.",
    icon: "🏠",
  },
  {
    name: "Termite Control (Pre & Post Construction)",
    short: "Protect structure & furniture",
    desc: "Drilling, injection and soil treatment methods to stop termites from damaging your walls, doors and wooden furniture.",
    icon: "🐜",
  },
  {
    name: "Rodent Control",
    short: "Rats & mice management",
    desc: "Baiting, trapping and proofing solutions to control rats in homes, godowns, factories and commercial premises.",
    icon: "🐀",
  },
  {
    name: "Cockroach Gel Treatment",
    short: "Kitchen & food areas",
    desc: "Non-smelly, stain-free gel application – ideal for homes, hotels, restaurants and food processing units.",
    icon: "🧴",
  },
  {
    name: "Honey Bee & Wasp Treatment",
    short: "Safe removal of hives",
    desc: "Safe chemical treatment and removal of honey bee and wasp hives from balconies, terraces and high-rise buildings.",
    icon: "🐝",
  },
  {
    name: "Wood Borer Treatment",
    short: "Wood protection",
    desc: "Specialized chemical injection to protect doors, furniture and wooden structures from wood-boring insects.",
    icon: "🪵",
  },
  {
    name: "Cobweb & Spider Treatment",
    short: "Clean ceilings & corners",
    desc: "Mechanical removal and residual spray to control spiders and cobwebs in factories, warehouses and homes.",
    icon: "🕷️",
  },
  {
    name: "Annual Maintenance Contracts (AMC)",
    short: "Regular scheduled visits",
    desc: "Yearly pest control plans for housing societies, factories, offices, hotels and institutions with scheduled services.",
    icon: "📅",
  },
];

export default function ServicesOverview() {
  return (
    <section
      id="services"
      className="relative bg-slate-950 text-white py-16 md:py-20 overflow-hidden"
    >
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-[-6rem] right-0 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3">
              Complete{" "}
              <span className="text-emerald-400">Pest Control Solutions</span>
            </h2>
            <p className="text-sm text-slate-300 max-w-xl">
              From small homes to large industrial units – R.P. Pest Control
              provides customized treatment plans for every type of property in
              and around Vapi.
            </p>
          </div>
          <div className="text-xs text-slate-400">
            <p className="font-semibold text-slate-200">
              Residential • Commercial • Industrial
            </p>
            <p>Houses, bungalows, societies, factories, offices &amp; more</p>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service) => (
            <article
              key={service.name}
              className="group relative flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.8)] hover:border-emerald-400/80 hover:bg-slate-900 transition"
            >
              {/* icon */}
              <div className="mb-3 flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 group-hover:bg-emerald-500/20 transition text-2xl">
                  {service.icon}
                </div>
              </div>

              {/* title */}
              <h3 className="text-sm sm:text-base font-semibold text-white mb-1 group-hover:text-emerald-300 transition">
                {service.name}
              </h3>

              {/* short line */}
              <p className="text-[11px] text-emerald-300 mb-2">
                {service.short}
              </p>

              {/* desc */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed flex-1">
                {service.desc}
              </p>

              {/* subtle glow on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-emerald-500/5" />
            </article>
          ))}
        </div>

        {/* bottom CTA */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-slate-300">
            Not sure which treatment you need? Share your pest problem and we
            will suggest the right service.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="tel:+919824931083"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2 text-xs sm:text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition"
            >
              Call for Free Inspection
            </Link>
            <Link
              href="https://wa.me/919824931083?text=Hi%2C%20I%20need%20help%20choosing%20a%20pest%20control%20service."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-5 py-2 text-xs sm:text-sm font-semibold text-slate-100 hover:border-emerald-400 hover:text-emerald-300 transition"
            >
              Send Photos on WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
