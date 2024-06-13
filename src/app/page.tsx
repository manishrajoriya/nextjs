import HeroSection from "@/components/HeroSection";
import FeaturedCoureses from "@/components/FeaturedCoureses"
import WhyChooseUs from "@/components/WhyChooseUs"
import TestimonialCard from "@/components/TestimonialCard";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import Instructor from "@/components/Instructor";

export default function Home() {
  return (
     <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCoureses/>
      <WhyChooseUs/>
      <TestimonialCard/>
      <UpcomingWebinar/>
      <Instructor/>
    </main>
  );
}
