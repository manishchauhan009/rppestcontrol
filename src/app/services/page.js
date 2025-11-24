// app/services/page.jsx

import ServicesOverview from "@/components/home/ServicesOverview";
import FinalCTAAndContact from "@/components/home/FinalCTAAndContact";

export const metadata = {
  title: "Pest Control Services in Vapi | R.P. Pest Control",
  description:
    "Complete pest control services in Vapi: termite control, rodent control, cockroach gel treatment, honey bee removal, wood borer and more. Govt approved & ISO certified.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-slate-950 text-white py-14 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Our Pest Control Services
          </h1>
          <p className="text-sm text-slate-300 max-w-2xl">
            R.P. Pest Control provides complete protection for residential,
            commercial and industrial properties through safe, effective and
            certified treatment methods.
          </p>
        </div>
      </section>

      <ServicesOverview />
      <FinalCTAAndContact />
    </>
  );
}
