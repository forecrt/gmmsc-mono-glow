import { HeroSlideshow } from "@/components/HeroSlideshow";
import { LogoReveal } from "@/components/LogoReveal";
import { EventsSection } from "@/components/EventsSection";
import { TeamSection } from "@/components/TeamSection";
import { ContactSection } from "@/components/ContactSection";
import { JoinUsSection } from "@/components/JoinUsSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <main className="relative">
      <HeroSlideshow />
      <div className="relative" style={{ marginTop: '100vh' }}>
        <LogoReveal />
        <EventsSection />
        <TeamSection />
        <JoinUsSection />
        <ContactSection />
        <Footer />
      </div>
      <Header />
    </main>
  );
};

export default Index;
