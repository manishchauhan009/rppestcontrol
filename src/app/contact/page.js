import FinalCTAAndContact from "@/components/home/FinalCTAAndContact";

export const metadata = {
  title: "Contact R.P. Pest Control – Book Inspection",
  description:
    "Contact us for pest control services in Vapi. Call, WhatsApp or submit form for termite, rodent, cockroach, honey bee & wood borer treatment.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-slate-950 text-white py-14 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Contact Us
          </h1>
          <p className="text-sm text-slate-300 max-w-2xl">
            For quick inspections, service booking or pest-related queries,
            connect with our team through call or WhatsApp.
          </p>
        </div>
      </section>

      <FinalCTAAndContact />
    </>
  );
}
