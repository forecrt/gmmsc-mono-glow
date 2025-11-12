import { useEffect, useState } from "react";
import { Cpu, Code, Palette, Gamepad2 } from "lucide-react";

export const DepartmentsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("departments-section");
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

  const departments = [
    {
      icon: Cpu,
      title: "IT Skills",
      description: "Hardware, networking, and system administration"
    },
    {
      icon: Code,
      title: "Programming",
      description: "Software development and coding excellence"
    },
    {
      icon: Palette,
      title: "Content Creation",
      description: "Digital media, design, and creative content"
    },
    {
      icon: Gamepad2,
      title: "Gaming",
      description: "Game development and esports"
    }
  ];

  return (
    <section
      id="departments-section"
      className="relative min-h-screen w-full bg-card py-20"
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
            OUR DEPARTMENTS
          </h2>
          <div className="h-2 w-32 bg-primary mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <div
                  key={index}
                  className="bg-background border border-border rounded-lg p-8 hover:border-foreground transition-all duration-300 group"
                >
                  <Icon className="w-16 h-16 mb-6 text-foreground group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {dept.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {dept.description}
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
