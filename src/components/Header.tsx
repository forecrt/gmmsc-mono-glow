import { useEffect, useState } from "react";
import { NavLink } from "@/components/NavLink";
import logo from "@/assets/logo.jpg";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      // Show header after scrolling past hero and logo sections
      setIsVisible(scrollPosition > windowHeight * 1.5);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
      style={{
        background: "rgba(0, 0, 0, 0.3)",
        backdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={logo} alt="GMMSC Logo" className="w-10 h-10 object-contain" />
          </NavLink>
          
          <div className="flex items-center gap-8">
            <NavLink
              to="/events"
              className="text-foreground hover:text-primary transition-colors tracking-wider"
              activeClassName="text-primary"
            >
              EVENTS
            </NavLink>
            <NavLink
              to="/team"
              className="text-foreground hover:text-primary transition-colors tracking-wider"
              activeClassName="text-primary"
            >
              TEAM
            </NavLink>
            <NavLink
              to="/contact"
              className="text-foreground hover:text-primary transition-colors tracking-wider"
              activeClassName="text-primary"
            >
              CONTACT
            </NavLink>
            <NavLink
              to="/join"
              className="px-6 py-2 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all tracking-wider"
              activeClassName="bg-foreground text-background"
            >
              JOIN US
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};
