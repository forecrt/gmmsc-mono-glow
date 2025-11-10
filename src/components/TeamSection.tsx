import { useEffect, useState } from "react";
import director from "@/assets/drctor.jpg";
import exc1 from "@/assets/exc1.jpg";
import exc2 from "@/assets/exc2.jpg";
import exc3 from "@/assets/exc3.jpg";
import exc4 from "@/assets/exc4.jpg";
import exc5 from "@/assets/exc5.jpg";
import exc6 from "@/assets/exc6.jpg";
import exc7 from "@/assets/exc7.jpg";
import exc8 from "@/assets/exc8.jpg";

const executiveImages = [exc1, exc2, exc3, exc4, exc5, exc6, exc7, exc8];

export const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentExec, setCurrentExec] = useState(0);

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
                  alt="Coordinator"
                  className="w-48 h-48 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-foreground mb-2">
                    MD. NURUL HAQUE
                  </h3>
                  <p className="text-xl text-muted-foreground mb-4">Coordinator</p>
                  <p className="text-foreground leading-relaxed">
                    As the Coordinator of GMMSC ICT Club, MD. Nurul Haque leads our mission to foster technological innovation and excellence among students. Under his guidance, the club has become a hub for aspiring technologists, providing opportunities to learn, collaborate, and excel in the field of Information and Communication Technology.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Executive Panel</h3>
              <div className="relative w-full h-96 overflow-hidden rounded-lg">
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
