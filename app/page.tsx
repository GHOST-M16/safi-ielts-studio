import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import OfficialIeltsCentre from "@/components/OfficialIeltsCentre";
import WhyChooseUs from "@/components/WhyChooseUs";
import FoundersMessage from "@/components/FoundersMessage";
import TestimonialMarquee from "@/components/TestimonialMarquee";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureCards />
      <OfficialIeltsCentre />
      <WhyChooseUs />
      <FoundersMessage />
      <TestimonialMarquee />
    </>
  );
}
