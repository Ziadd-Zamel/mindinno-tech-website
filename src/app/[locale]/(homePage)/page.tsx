import CaseStudiesSection from "./_components/case-study-section";
import CEOStepsSection from "./_components/ceo-section";
import ClientsSection from "./_components/clients-section";
import CTASection from "./_components/cta-section";
import HeroSection from "./_components/hero";
import IndustriesSection from "./_components/industries-section";
import ServicesSection from "./_components/services-section";
import StatsSection from "./_components/stats-section";
import TestimonialsSection from "./_components/testimonials-section";

export default async function Page() {
  return (
    <main className="min-h-screen pt-40">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <IndustriesSection />
      <ClientsSection />
      <CEOStepsSection />
      <TestimonialsSection />
      <CaseStudiesSection />
      <CTASection />
    </main>
  );
}
