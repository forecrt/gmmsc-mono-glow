import { useEffect, useState } from "react";
import { useContent } from "@/hooks/useContent";
import { Facebook, Instagram } from "lucide-react";

export const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { coordinator } = useContent();

  // Executive members data
  const executiveMembers = [
    {
      name: "Rubiyat Partho",
      role: "President",
      batch: "Section: 12-Beta",
      id: "240982",
      image: "/src/assets/exc1.jpg",
      facebook: "#",
      instagram: "#",
    },
    {
      name: "Arian Aas Sami",
      role: "General Secretary",
      batch: "Section: 12-Beta",
      id: "241043",
      image: "/src/assets/exc2.jpg",
      facebook: "#",
      instagram: "#",
    },
    {
      name: "Rubaiya Zahin",
      role: "Vice President",
      batch: "Section: 12-Marigold",
      id: "241345",
      image: "/src/assets/exc3.jpg",
      facebook: "#",
      instagram: "#",
    },
    {
      name: "Arafat Hossain Shovon",
      role: "Vice President",
      batch: "Section: 12-Alpha",
      id: "240824",
      image: "/src/assets/exc4.jpg",
      facebook: "#",
      instagram: "#",
    },
    {
      name: "Sheikh Md. Tamim Hasan",
      role: "Additional General Secretary",
      batch: "Section: 12-Beta",
      id: "241001",
      image: "/src/assets/exc5.jpg",
      facebook: "#",
      instagram: "#",
    },
    {
      name: "Md. Khairul Noman Shaikh",
      role: "Joint Secretary",
      batch: "Section: 12-Beta",
      id: "240988",
      image: "/src/assets/exc6.jpg",
      facebook: "#",
      instagram: "#",
    },
    {
      name: "Amna Nuzhat Shabber",
      role: "Joint Secretary",
      batch: "Section: 12-Aparajita",
      id: "241100",
      image: "/src/assets/exc7.jpg",
      facebook: "#",
      instagram: "#",
    },
    {
      name: "Aboni Mahfuz",
      role: "Organizing Secretary",
      batch: "Section: 12-Marigold",
      id: "240880",
      image: "/src/assets/exc8.jpg",
      facebook: "#",
      instagram: "#",
    },
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {executiveMembers.map((member, index) => (
                  <div
                    key={index}
                    className="bg-background border border-border rounded-lg p-5 flex flex-col items-center text-center hover:border-primary transition-all duration-300"
                  >
                    <div className="w-28 h-28 rounded-full overflow-hidden mb-3 border-2 border-primary">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-base font-bold text-foreground mb-1">
                      {member.name}
                    </h4>
                    <p className="text-sm text-primary font-semibold mb-2">{member.role}</p>
                    <div className="text-xs text-muted-foreground space-y-0.5">
                      <p>Batch:</p>
                      <p>{member.batch}</p>
                      <p>ID: {member.id}</p>
                    </div>
                    <div className="flex gap-3 mt-3">
                      {member.facebook && (
                        <a
                          href={member.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Facebook className="w-4 h-4" />
                        </a>
                      )}
                      {member.instagram && (
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Instagram className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};