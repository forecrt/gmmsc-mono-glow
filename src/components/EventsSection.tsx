import { useEffect, useState } from "react";
import { useContent } from "@/hooks/useContent";

export const EventsSection = () => {
  const [currentEvent, setCurrentEvent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null);
  const { events } = useContent();

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEvent((prev) => (prev + 1) % events.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [events.length]);

  return (
    <section
      id="events-section"
      className="relative h-screen w-full overflow-hidden"
    >
      {events.map((event, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-all duration-1000 cursor-pointer ${
            currentEvent === index && isVisible
              ? "opacity-100 scale-100"
              : "opacity-0 scale-110"
          }`}
          onMouseEnter={() => setHoveredEvent(index)}
          onMouseLeave={() => setHoveredEvent(null)}
        >
          <img 
            src={event.image}
            alt={`Event ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {hoveredEvent === index && event.description && (
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center p-10 animate-in fade-in duration-300">
              <div className="max-w-xl text-center">
                <p className="text-white text-lg md:text-xl leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 pointer-events-none" />
      <div className="absolute top-10 left-10 pointer-events-none">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-glow">
          EVENTS
        </h2>
        <div className="h-2 w-28 bg-foreground mt-3" />
      </div>
    </section>
  );
};