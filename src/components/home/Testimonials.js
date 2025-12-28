import Link from "next/link";
const TESTIMONIALS = [
  {
    name: "Amit Shah",
    role: "Homeowner – Vapi",
    text: "Very professional team. They explained the whole termite problem clearly and the treatment worked perfectly. No smell, no mess. Highly recommended!",
    icon: "🏡",
  },
  {
    name: "Rajesh Industries",
    role: "Factory Owner – GIDC",
    text: "We signed an AMC with R.P. Pest Control and their service quality is excellent. Regular visits, proper documentation and complete rodent control.",
    icon: "🏭",
  },
  {
    name: "Sneha Patel",
    role: "Apartment Owner",
    text: "Cockroach gel treatment was quick and extremely effective. Safe for kids and pets too. The team was polite and punctual.",
    icon: "🍽️",
  },
  {
    name: "Royal Packaging",
    role: "Warehouse – Sarigam",
    text: "Our warehouse had a heavy rodent issue. Their technicians handled it very professionally. Issue solved within a week.",
    icon: "📦",
  }
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative bg-slate-950 text-white py-16 md:py-20 overflow-hidden"
    >
      {/* gradient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 right-10 w-72 h-72 bg-emerald-500/10 blur-3xl rounded-full" />
        <div className="absolute -bottom-16 left-0 w-80 h-80 bg-sky-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-3">
          What our clients{" "}
          <span className="text-emerald-400">say about us</span>
        </h2>
        <p className="text-slate-300 text-center text-sm max-w-xl mx-auto mb-12">
          Trusted by homeowners, factories and businesses across Vapi for safe,
          reliable and effective pest management solutions.
        </p>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.8)] backdrop-blur-sm hover:border-emerald-400/80 hover:bg-slate-900 transition"
            >
              {/* icon */}
              <div className="text-3xl mb-3">{t.icon}</div>

              {/* quote text */}
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                “{t.text}”
              </p>

              {/* name & role */}
              <div>
                <p className="text-sm font-semibold text-white">
                  {t.name}
                </p>
                <p className="text-[11px] text-slate-400">{t.role}</p>
              </div>

              {/* glow hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-emerald-500/5 transition"></div>
            </div>
          ))}
        </div>

        {/* bottom CTA */}
        <div className="text-center mt-12">
          <Link
            href="https://wa.me/919824931083?text=Hi%2C%20I%20want%20to%20book%20a%20pest%20control%20service."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition"
          >
            Book Your Service Today
          </Link>
        </div>
      </div>
    </section>
  );
}
