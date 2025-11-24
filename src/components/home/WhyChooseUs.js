// src/components/home/WhyChooseUs.jsx

export default function WhyChooseUs() {
  const features = [
    {
      title: "Govt. Approved & ISO Certified",
      desc: "R.P. Pest Control is licensed and ISO 9001:2015 certified for safe and standardized pest management practices.",
      icon: "🛡️",
    },
    {
      title: "Safe for Kids & Pets",
      desc: "We use odourless, eco-friendly, non-hazardous chemicals approved for residential and industrial use.",
      icon: "🌿",
    },
    {
      title: "Expert Trained Technicians",
      desc: "Our professionals follow scientific treatment methods for termites, rodents, cockroaches and all pests.",
      icon: "👨‍🔧",
    },
    {
      title: "Same-Day Service Available",
      desc: "Quick response team for emergency treatments in homes, bungalows, factories and offices.",
      icon: "⚡",
    },
    {
      title: "Affordable & Transparent Pricing",
      desc: "No hidden charges. Clear inspection, clear quotation, and best value guaranteed.",
      icon: "💰",
    },
    {
      title: "Guaranteed Results",
      desc: "We offer service warranty depending on treatment type to ensure long-term protection.",
      icon: "🏆",
    },
  ];

  return (
    <section
      id="why-us"
      className="relative bg-slate-900 text-white py-16 md:py-20 overflow-hidden"
    >
      {/* background light blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 right-10 w-72 h-72 bg-emerald-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-3">
          Why Choose{" "}
          <span className="text-emerald-400">R.P. Pest Control?</span>
        </h2>
        <p className="text-slate-300 text-center text-sm max-w-2xl mx-auto mb-12">
          Trusted by homes, factories and offices across Vapi for over 10+ years.
          Certified treatments. Fast response. Guaranteed results.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="relative group bg-slate-800/40 border border-slate-700 rounded-2xl p-6 backdrop-blur-md hover:border-emerald-400 hover:bg-slate-800/60 transition shadow-[0_0_20px_-5px_rgba(0,0,0,0.5)]"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{item.icon}</div>

              {/* Title */}
              <h3 className="font-semibold text-lg text-white mb-2 group-hover:text-emerald-300 transition">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed">
                {item.desc}
              </p>

              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
