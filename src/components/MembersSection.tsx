import { useEffect, useState } from "react";
import { Users } from "lucide-react";

export const MembersSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("members-section");
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
      id="members-section"
      className="relative min-h-screen w-full bg-background py-20 flex items-center justify-center"
    >
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-primary text-center mb-16">
            Our Members
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-12 md:p-16 text-center">
              <div className="flex justify-center mb-6">
                <Users className="w-20 h-20 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                150+ Active Members
              </h3>
              <p className="text-muted-foreground text-lg mb-8">
                Join our vibrant community of tech enthusiasts and innovators
              </p>
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity shadow-lg">
                View All Members
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
