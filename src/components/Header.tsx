import { useEffect, useState } from "react";
import { Home, Calendar, Users, UserPlus } from "lucide-react";
import logo from "@/assets/ictclub_new_logo.png";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const footer = document.querySelector('footer');
      const footerTop = footer?.getBoundingClientRect().top || 0;
      
      // Show header after scrolling past hero and logo sections
      // Hide when footer is in view (with larger threshold)
      setIsVisible(scrollPosition > windowHeight * 1.5 && footerTop > windowHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <nav className="bg-background/30 backdrop-blur-md border border-border/50 rounded-full px-3 md:px-6 py-2 md:py-3 shadow-lg">
        <div className="flex items-center gap-3 md:gap-6">
          <img src={logo} alt="ICT Club" className="w-6 h-6 md:w-8 md:h-8 object-contain" />
          
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-foreground hover:text-primary transition-colors p-1.5 md:p-2 rounded-full hover:bg-background/50"
            aria-label="Home"
          >
            <Home className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          
          <button
            onClick={() => scrollToSection('events-section')}
            className="text-foreground hover:text-primary transition-colors p-1.5 md:p-2 rounded-full hover:bg-background/50"
            aria-label="Events"
          >
            <Calendar className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          
          <button
            onClick={() => scrollToSection('team-section')}
            className="text-foreground hover:text-primary transition-colors p-1.5 md:p-2 rounded-full hover:bg-background/50"
            aria-label="Team"
          >
            <Users className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          
          <button
            onClick={() => scrollToSection('join-section')}
            className="text-foreground hover:text-primary transition-colors p-1.5 md:p-2 rounded-full hover:bg-background/50"
            aria-label="Join Us"
          >
            <UserPlus className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </nav>
    </header>
  );
};