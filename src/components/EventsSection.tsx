import { useEffect, useState } from "react";
import events from "@/assets/events.jpg";

export const EventsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("events-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.7;
        setIsVisible(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="events-section"
      className="relative h-screen w-full overflow-hidden"
    >
      <div
        className={`absolute inset-0 transition-all duration-1000 ${
          isVisible ? "scale-100 opacity-100" : "scale-110 opacity-0"
        }`}
        style={{
          backgroundImage: `url(${events})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      <div
        className={`absolute top-12 left-12 transition-all duration-1000 delay-300 ${
          isVisible
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }`}
      >
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-glow">
          EVENTS
        </h2>
        <div className="h-2 w-32 bg-foreground mt-4 animate-slide-in-right" />
      </div>
    </section>
  );
};
