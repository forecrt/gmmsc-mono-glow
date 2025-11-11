import { useEffect, useState } from "react";
import { useContent } from "@/hooks/useContent";

export const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentExec, setCurrentExec] = useState(0);
  const { coordinator, executiveImages } = useContent();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("team-section");
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
      setCurrentExec((prev) => (prev + 1) % executiveImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [executiveImages.length]);

  return (
    <section
      id="team-section"
      className="relative min-h-screen w-full bg-background py-20"
    >
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-foreground mb-4">
            TEAM
          </h2>
          <div className="h-2 w-32 bg-primary mb-16" />

          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 mb-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <img
                  src={coordinator.image}
                  alt="Coordinator"
                  className="w-48 h-48 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-foreground mb-2">
                    {coordinator.name}
                  </h3>
                  <p className="text-xl text-muted-foreground mb-4">Coordinator</p>
                  <p className="text-foreground leading-relaxed">
                    {coordinator.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4 md:p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Executive Panel</h3>
              <div className="relative w-screen md:w-full -mx-4 md:mx-0 h-96 md:h-[600px] overflow-hidden md:rounded-lg">
                {executiveImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Executive member ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      currentExec === index ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};