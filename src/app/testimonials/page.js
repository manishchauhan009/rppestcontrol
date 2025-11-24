// app/testimonials/page.jsx

import Testimonials from "@/components/home/Testimonials";
import FinalCTAAndContact from "@/components/home/FinalCTAAndContact";

export const metadata = {
  title: "Customer Reviews | R.P. Pest Control, Vapi",
  description:
    "Read reviews and testimonials from homeowners, factories and businesses who have used R.P. Pest Control services in Vapi and surrounding areas.",
};

export default function TestimonialsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-slate-950 text-white py-14 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            What Our Clients Say
          </h1>
          <p className="text-sm text-slate-300 max-w-2xl">
            R.P. Pest Control is trusted by homeowners, warehouses, factories
            and offices across Vapi. Here are some of the experiences shared by
            our clients.
          </p>
        </div>
      </section>

      <Testimonials />
      <FinalCTAAndContact />
    </>
  );
}
