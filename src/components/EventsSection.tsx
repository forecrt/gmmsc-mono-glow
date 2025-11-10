import { useEffect, useState } from "react";
import events from "@/assets/events.jpg";
import event2 from "@/assets/event2.jpg";

const eventImages = [events, event2];

export const EventsSection = () => {
  const [currentEvent, setCurrentEvent] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEvent((prev) => (prev + 1) % eventImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="events-section"
      className="relative h-screen w-full overflow-hidden"
    >
      {eventImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            currentEvent === index && isVisible
              ? "opacity-100 scale-100"
              : "opacity-0 scale-110"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      <div className="absolute top-12 left-12">
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-glow">
          EVENTS
        </h2>
        <div className="h-2 w-32 bg-foreground mt-4" />
      </div>
    </section>
  );
};
