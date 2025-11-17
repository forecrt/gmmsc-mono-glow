import { useEffect, useState } from "react";
import { useContent } from "@/hooks/useContent";
import { Award } from "lucide-react";

export const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { coordinator } = useContent();

  // Executive members data
  const executiveMembers = [
    { name: "Rubiyat Partho", batch: "2025-26" },
    { name: "Arian Aas Sami", batch: "2025-26" },
    { name: "Rubaiya Zahin", batch: "2025-26" },
    { name: "Arafat Hossain Shovon", batch: "2025-26" },
    { name: "Sheikh Md. Tamim Hasan", batch: "2025-26" },
    { name: "Md. Khairul Noman Shaikh", batch: "2025-26" },
    { name: "Amna Nuzhat Shabber", batch: "2025-26" },
    { name: "Aboni Mahfuz", batch: "2025-26" },
    { name: "Navin Mahbub", batch: "2025-26" },
    { name: "Zarin Tasnim Moumita", batch: "2025-26" },
    { name: "Mst. Marufa Akter", batch: "2025-26" },
    { name: "S M Ishmam", batch: "2025-26" },
  ];

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

            <div className="bg-card border border-border rounded-lg p-6 md:p-7">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Executive Committee</h3>
              <div className="overflow-x-auto md:overflow-visible scrollbar-hide">
                <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pb-4 md:pb-0 md:animate-none animate-[auto-scroll_20s_linear_infinite]">
                  {/* Duplicate for seamless scroll on mobile */}
                  {[...executiveMembers, ...executiveMembers].map((member, index) => (
                    <div
                      key={index}
                      className="bg-background border border-border rounded-lg p-5 flex flex-col items-center text-center hover:border-primary transition-all duration-300 min-w-[200px] md:min-w-0 flex-shrink-0"
                    >
                      <div className="w-28 h-28 rounded-full overflow-hidden mb-3 border-2 border-primary relative">
                        <img
                          src="/src/assets/default-exec.jpg"
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute -top-1 -right-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center border-2 border-background">
                          <Award className="w-4 h-4 text-primary-foreground" />
                        </div>
                      </div>
                      <h4 className="text-base font-bold text-foreground mb-1">
                        {member.name}
                      </h4>
                      <div className="text-xs text-muted-foreground">
                        <p>Batch: {member.batch}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};