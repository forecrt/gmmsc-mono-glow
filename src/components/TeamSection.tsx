import { useEffect, useState } from "react";
import director from "@/assets/drctor.jpg";

export const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);

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
                  src={director}
                  alt="Director"
                  className="w-48 h-48 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-foreground mb-2">
                    MD. NURUL HAQUE
                  </h3>
                  <p className="text-xl text-muted-foreground mb-4">Director</p>
                  <p className="text-foreground leading-relaxed">
                    As the Director of GMMSC ICT Club, MD. Nurul Haque leads our mission to foster technological innovation and excellence among students. Under his guidance, the club has become a hub for aspiring technologists, providing opportunities to learn, collaborate, and excel in the field of Information and Communication Technology.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl text-muted-foreground">👤</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">President</h3>
                <p className="text-muted-foreground">Name TBA</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl text-muted-foreground">👤</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Secretary</h3>
                <p className="text-muted-foreground">Name TBA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
