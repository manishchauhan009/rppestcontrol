// app/areas-we-serve/page.jsx
import Link from "next/link";
export const metadata = {
  title: "Pest Control Service Areas | Across Gujarat",
  description:
    "We provide pest control services across all of Gujarat including Vapi, Surat, Vadodara, Ahmedabad, Rajkot, Bharuch, Valsad, and nearby industrial & residential zones.",
};

const AREAS = [
  "Vapi",
  "Surat",
  "Ahmedabad",
  "Vadodara",
  "Rajkot",
  "Bharuch",
  "Valsad",
  "Navsari",
  "Ankleshwar",
  "Gandhinagar",
  "Mehsana",
  "Junagadh",
  "Bhavnagar",
  "Patan",
  "Dahod",
  "Narmada",
  "Sabarkantha",
  "Banaskantha",
  "Kutch",
  "All Gujarat Districts",
];

export default function AreasWeServePage() {
  return (
    <section className="relative bg-slate-950 text-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
          Pest Control Services Across Gujarat
        </h1>

        <p className="text-sm text-slate-300 max-w-2xl mb-10">
          R.P. Pest Control provides residential, commercial and industrial pest
          control services across the entire state of Gujarat. From major
          cities to industrial zones and rural districts – our trained
          technicians deliver reliable, safe and certified pest management
          wherever you need it.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {AREAS.map((area, i) => (
            <div
              key={i}
              className="rounded-xl bg-slate-900/70 border border-slate-700 px-5 py-4 hover:border-emerald-400/70 transition shadow-md"
            >
              <p className="text-base font-semibold text-white">{area}</p>
              <p className="text-[12px] text-slate-400 mt-1">
                Residential • Commercial • Industrial
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition"
          >
            Book a Free Inspection
          </Link>

          <p className="text-xs text-slate-500 mt-3">
            Serving all 33 districts of Gujarat
          </p>
        </div>
      </div>
    </section>
  );
}
