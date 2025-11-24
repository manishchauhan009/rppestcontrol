import ServicesOverview from "@/components/home/ServicesOverview";
import FinalCTAAndContact from "@/components/home/FinalCTAAndContact";

export default function CitySeoPage({
  city,
  nearbyAreas = [],
  industrialAreas = [],
}) {
  return (
    <>
      {/* City-specific hero */}
      <section className="bg-slate-950 text-white py-14 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.22em] text-emerald-400 mb-2">
            Pest Control in {city}, Gujarat
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Professional Pest Control Services in {city}
          </h1>
          <p className="text-sm text-slate-300 max-w-2xl mb-4">
            R.P. Pest Control provides safe, reliable and government-approved
            pest control services in {city}
            {nearbyAreas.length > 0 && <> and nearby areas like{" "}
              {nearbyAreas.join(", ")}
            </>}
            . We handle termites, rodents, cockroaches, honey bees, wood borers
            and more for homes, apartments, societies, factories and offices.
          </p>
          <p className="text-xs text-slate-400 max-w-2xl">
            Our trained technicians use ISO 9001:2015 certified processes and
            child-safe, pet-safe chemicals wherever possible.
          </p>
        </div>
      </section>

      {/* Services reused (generic) */}
      <ServicesOverview />

      {/* Local coverage block */}
      <section className="bg-slate-950 text-white py-10 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold mb-2">
              Areas we serve in {city}
            </h2>
            <p className="text-sm text-slate-300 mb-4">
              Whether you are a homeowner, society member, factory owner or
              office manager, R.P. Pest Control can provide a customized pest
              management plan for your property in {city}.
            </p>
            <p className="text-xs text-slate-400">
              We cover both residential and industrial locations – from small
              1BHK flats to large manufacturing units.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-200">
            {nearbyAreas.length > 0 && (
              <div>
                <p className="text-[12px] font-semibold text-slate-100 mb-2">
                  Nearby Areas
                </p>
                <ul className="space-y-1 text-[12px]">
                  {nearbyAreas.map((a) => (
                    <li key={a} className="text-slate-300">
                      • {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {industrialAreas.length > 0 && (
              <div>
                <p className="text-[12px] font-semibold text-slate-100 mb-2">
                  Industrial / Commercial Zones
                </p>
                <ul className="space-y-1 text-[12px]">
                  {industrialAreas.map((a) => (
                    <li key={a} className="text-slate-300">
                      • {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Reuse final CTA + contact */}
      <FinalCTAAndContact />
    </>
  );
}
