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
      <Testimonials />
      <FinalCTAAndContact />
    </>
  );
}
