import { HeroSlideshow } from "@/components/HeroSlideshow";
import { LogoReveal } from "@/components/LogoReveal";
import { AboutUsSection } from "@/components/AboutUsSection";
import { DepartmentsSection } from "@/components/DepartmentsSection";
import { EventsSection } from "@/components/EventsSection";
import { TeamSection } from "@/components/TeamSection";
import { MembersSection } from "@/components/MembersSection";
import { TeachersSection } from "@/components/TeachersSection";
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
        <AboutUsSection />
        <DepartmentsSection />
        <EventsSection />
        <TeamSection />
        <MembersSection />
        <TeachersSection />
        <JoinUsSection />
        <ContactSection />
        <Footer />
      </div>
      <Header />
    </main>
  );
};

export default Index;
