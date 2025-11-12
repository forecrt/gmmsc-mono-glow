import { useEffect, useState } from "react";
import { BookOpen, Users, Lightbulb } from "lucide-react";

export const AboutUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about-section");
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

  const features = [
    {
      icon: BookOpen,
      title: "Learn",
      description: "Master cutting-edge technologies"
    },
    {
      icon: Users,
      title: "Connect",
      description: "Build lasting professional relationships"
    },
    {
      icon: Lightbulb,
      title: "Innovate",
      description: "Create solutions that matter"
    }
  ];

  return (
    <section
      id="about-section"
      className="relative min-h-screen w-full bg-background py-16"
    >
      <div className="container mx-auto px-5">
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground mb-3">
            ABOUT US
          </h2>
          <div className="h-2 w-28 bg-primary mb-14" />

          <div className="max-w-4xl mb-14">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Welcome to GMMSC ICT Club, where innovation meets passion. We are a vibrant community of tech enthusiasts, programmers, designers, and gamers dedicated to pushing the boundaries of technology. Our club provides a platform for students to learn, collaborate, and create cutting-edge solutions while building lasting professional relationships. Join us on our journey to explore the limitless possibilities of technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-7 hover:border-foreground transition-all duration-300"
                >
                  <Icon className="w-11 h-11 mb-3 text-foreground" />
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-base">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
