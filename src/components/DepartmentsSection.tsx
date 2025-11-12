import { useEffect, useState } from "react";
import itSkillsLogo from "@/assets/it-skills-logo.png";
import programmingLogo from "@/assets/programming-logo.png";
import ccLogo from "@/assets/cc-logo.png";
import gamingLogo from "@/assets/gaming-logo.png";

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
      logo: itSkillsLogo,
      title: "IT Skills",
      description: "Hardware, networking, and system administration"
    },
    {
      logo: programmingLogo,
      title: "Programming",
      description: "Software development and coding excellence"
    },
    {
      logo: ccLogo,
      title: "Content Creation",
      description: "Digital media, design, and creative content"
    },
    {
      logo: gamingLogo,
      title: "Gaming",
      description: "Game development and esports"
    }
  ];

  return (
    <section
      id="departments-section"
      className="relative min-h-screen w-full bg-card py-16"
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
            OUR DEPARTMENTS
          </h2>
          <div className="h-2 w-28 bg-primary mb-14" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-lg p-7 hover:border-foreground transition-all duration-300 group"
              >
                <img 
                  src={dept.logo} 
                  alt={dept.title}
                  className="w-14 h-14 mb-5 object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {dept.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {dept.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
