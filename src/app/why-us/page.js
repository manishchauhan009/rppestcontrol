import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProcessAndStats from "@/components/home/ProcessAndStats";
import FinalCTAAndContact from "@/components/home/FinalCTAAndContact";

export const metadata = {
  title: "Why Choose R.P. Pest Control | Govt Approved & ISO Certified",
  description:
    "R.P. Pest Control is a government approved and ISO 9001:2015 certified company offering safe, effective and reliable pest control services in Vapi and nearby areas.",
};

export default function WhyUsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-slate-950 text-white py-14 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Why Choose R.P. Pest Control?
          </h1>
          <p className="text-sm text-slate-300 max-w-2xl">
            From small homes to large factories, we follow certified, safe and
            transparent pest control practices. Here’s what makes us a trusted
            partner for thousands of customers.
          </p>
        </div>
      </section>

      <WhyChooseUs />
      <ProcessAndStats />
      <FinalCTAAndContact />
    </>
  );
}
