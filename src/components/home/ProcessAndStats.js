import Link from "next/link";
const STEPS = [
  {
    step: "01",
    title: "Inspection & Problem Finding",
    desc: "Our technician visits your site, checks all rooms, furniture, ceilings and surrounding areas to understand the type and level of infestation.",
  },
  {
    step: "02",
    title: "Treatment Plan & Quotation",
    desc: "Based on inspection, we suggest the right treatment method, chemicals to be used, safety instructions and give a clear cost estimate.",
  },
  {
    step: "03",
    title: "Professional Treatment",
    desc: "Our trained team carries out the treatment with proper equipment, PPE kits and govt-approved chemicals – with minimum disturbance to your routine.",
  },
  {
    step: "04",
    title: "Follow-up & Warranty Support",
    desc: "We guide you on post-treatment care and provide follow-up visits or warranty support depending on the service selected.",
  },
];

const STATS = [
  { label: "Sites treated", value: "1000+" },
  { label: "Years of experience", value: "10+" },
  { label: "Repeat customers", value: "90%" },
];

export default function ProcessAndStats() {
  return (
    <section
      id="process"
      className="relative bg-slate-900 text-white py-16 md:py-20 overflow-hidden"
    >
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-16 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-[-6rem] left-0 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] gap-10 lg:gap-14 items-start">
        {/* Process steps */}
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3">
            How our{" "}
            <span className="text-emerald-400">pest control process</span> works
          </h2>
          <p className="text-sm text-slate-300 mb-8 max-w-xl">
            A clear, step-by-step process so you know exactly what will happen
            during inspection, treatment and follow-up. No confusion, no hidden
            actions.
          </p>

          <ol className="space-y-4">
            {STEPS.map((item) => (
              <li
                key={item.step}
                className="relative flex gap-4 rounded-2xl bg-slate-800/50 border border-slate-700/80 px-4 py-4 sm:px-5 sm:py-5 backdrop-blur-md"
              >
                {/* step number */}
                <div className="flex flex-col items-center">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 border border-emerald-400 text-xs font-semibold text-emerald-300">
                    {item.step}
                  </div>
                  {/* vertical line (hidden on last item via border color trick) */}
                  <div className="mt-2 h-full w-px bg-slate-700/70" />
                </div>

                {/* content */}
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Stats + quick highlight card */}
        <aside className="space-y-5">
          <div className="rounded-2xl bg-slate-950/80 border border-slate-700 px-5 py-5 shadow-[0_20px_40px_-24px_rgba(0,0,0,0.9)] backdrop-blur">
            <p className="text-xs text-emerald-300 uppercase tracking-[0.2em] mb-2">
              Results in numbers
            </p>
            <h3 className="text-lg font-semibold mb-3">
              Trusted pest control partner for homes &amp; industries.
            </h3>
            <p className="text-sm text-slate-300 mb-4">
              R.P. Pest Control has handled a wide range of projects – from
              small 1BHK apartments to large factories and warehouses in and
              around Vapi.
            </p>

            <div className="grid grid-cols-3 gap-3">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-slate-900 border border-slate-700 px-3 py-3 text-center"
                >
                  <p className="text-lg font-bold text-emerald-400">
                    {stat.value}
                  </p>
                  <p className="text-[10px] text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-5 py-4 text-sm text-emerald-50">
            <p className="font-semibold mb-1">
              First-time pest control at your site?
            </p>
            <p className="text-xs sm:text-sm text-emerald-100 mb-2">
              We explain every step before starting – chemicals used, safety
              precautions, and how long you need to keep the area closed.
            </p>
            <Link
              href="tel:+919824931083"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-1.5 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition"
            >
              Talk to a technician
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
