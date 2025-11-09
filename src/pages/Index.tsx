import { HeroSlideshow } from "@/components/HeroSlideshow";
import { LogoReveal } from "@/components/LogoReveal";
import { EventsSection } from "@/components/EventsSection";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <main className="relative">
      <HeroSlideshow />
      <div className="relative" style={{ marginTop: '100vh' }}>
        <LogoReveal />
        <EventsSection />
      </div>
      <Header />
    </main>
  );
};

export default Index;
