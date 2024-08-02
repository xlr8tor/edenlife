import FAQ from "@/components/FAQ";
import HeroSection from "@/components/Hero";
import Testimonials from "@/components/Testimonial";
import Press from "@/components/PressSection";
import AboutVideo from "@/components/AboutVideo";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <AboutVideo />
      <Testimonials />
      <FAQ />
      <Press />
    </>
  );
}
