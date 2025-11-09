import { HeroSlideshow } from "@/components/HeroSlideshow";
import { LogoReveal } from "@/components/LogoReveal";
import { EventsSection } from "@/components/EventsSection";

const Index = () => {
  return (
    <main className="relative">
      <HeroSlideshow />
      <LogoReveal />
      <EventsSection />
    </main>
  );
};

export default Index;
