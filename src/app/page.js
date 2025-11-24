import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServicesOverview from "@/components/home/ServicesOverview";
import ProcessAndStats from "@/components/home/ProcessAndStats";
import Testimonials from "@/components/home/Testimonials";
import FAQSection from "@/components/home/FAQSection";
import FinalCTAAndContact from "@/components/home/FinalCTAAndContact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <ServicesOverview />
      <ProcessAndStats />
      <Testimonials />
      <FAQSection />       {/* 👈 new */}
      <FinalCTAAndContact />
    </>
  );
}
