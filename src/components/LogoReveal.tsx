import { useEffect, useState } from "react";
import logo from "@/assets/logo.jpg";

export const LogoReveal = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min(scrollPosition / windowHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = Math.max(0, scrollProgress - 0.3) * 2;
  const scale = 0.5 + (opacity * 0.5);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div
        className="relative z-10 flex flex-col items-center justify-center gap-8 transition-all duration-300"
        style={{
          opacity: opacity,
          transform: `scale(${scale})`,
        }}
      >
        <img
          src={logo}
          alt="GMMSC ICT Club Logo"
          className="w-64 h-64 md:w-80 md:h-80 object-contain animate-pulse-slow"
        />
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center tracking-wider text-glow">
          GMMSC ICT CLUB
        </h1>
        <div className="h-1 w-48 bg-foreground animate-scale-in" />
        <p className="text-xl md:text-2xl tracking-widest text-center animate-fade-in-up">
          TIME TO BE DYNAMIC
        </p>
      </div>
    </section>
  );
};
