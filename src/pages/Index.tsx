import { HeroSlideshow } from "@/components/HeroSlideshow";
import { LogoReveal } from "@/components/LogoReveal";
import { EventsSection } from "@/components/EventsSection";
import { TeamSection } from "@/components/TeamSection";
import { ContactSection } from "@/components/ContactSection";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <main className="relative">
      <HeroSlideshow />
      <div className="relative" style={{ marginTop: '100vh' }}>
        <LogoReveal />
        <EventsSection />
        <TeamSection />
        <ContactSection />
      </div>
      <Header />
    </main>
  );
};

export default Index;
