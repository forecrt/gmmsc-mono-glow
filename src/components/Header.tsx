import { useEffect, useState } from "react";
import { Home, Globe, Instagram, Mail, Moon, Sun } from "lucide-react";
import logo from "@/assets/ictclub_new_logo.png";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const footer = document.querySelector('footer');
      const footerTop = footer?.getBoundingClientRect().top || 0;
      
      // Show header after scrolling past hero and logo sections
      // Hide when footer is in view
      setIsVisible(scrollPosition > windowHeight * 1.5 && footerTop > 100);
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

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <nav className="bg-background/30 backdrop-blur-md border border-border/50 rounded-full px-6 py-3 shadow-lg">
        <div className="flex items-center gap-6">
          <img src={logo} alt="ICT Club" className="w-8 h-8 object-contain" />
          
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-background/50"
            aria-label="Home"
          >
            <Home className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => scrollToSection('events-section')}
            className="text-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-background/50"
            aria-label="Events"
          >
            <Globe className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => scrollToSection('team-section')}
            className="text-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-background/50"
            aria-label="Team"
          >
            <Instagram className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => scrollToSection('join-section')}
            className="text-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-background/50"
            aria-label="Join Us"
          >
            <Mail className="w-5 h-5" />
          </button>

          <div className="w-px h-6 bg-border" />
          
          <button
            onClick={toggleTheme}
            className="text-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-background/50"
            aria-label="Toggle theme"
          >
            {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
        </div>
      </nav>
    </header>
  );
};