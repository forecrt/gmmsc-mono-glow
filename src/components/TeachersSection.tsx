import { useEffect, useState } from "react";

export const TeachersSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const teachers = [
    {
      name: "Prof. Md Nazrul Islam Khan",
      role: "Principal GMMSC, Chief Advisor GIC",
      image: "/src/assets/principal.jpg",
      speech:
        "I find GMMSC ICT Club to be one of the most versatile component of my institution. Its talented, dedicated and enthusiast crews have been providing real values to the supplementation of extra-curricular activities. We will provide them with all necessary supports to excel at their works.",
    },
    {
      name: "Md. Nurul Haque",
      role: "Lecturer in ICT, Co-ordinator GIC",
      image: "/src/assets/nurul.jpg",
      speech:
        "As the coordinator of the GMMSC ICT Club, I've had the privilege of watching our students grow and achieve remarkable things. This club isn't just about technology—it's a community where ideas come to life and friendships are built. I'm always here to support and guide our members.",
    },
    {
      name: "MD MOKLESUR RAHAMAN",
      role: "Lecturer in Physics, Moderator GIC",
      image: "/src/assets/moklesh-sir.jpg",
      speech:
        "Innovation is born when creativity meets technical skill. Dare to think differently and create solutions that transform lives.",
    },
    {
      name: "MD. ABU NAYEEM",
      role: "Asst. Teacher in ICT, Moderator GIC",
      image: "/src/assets/nayeem-sir.jpg",
      speech:
        "It's been a joy to work closely with our members. Watching their curiosity, enthusiasm, and determination grow is truly inspiring. This club gives them a chance to discover their potential, learn new skills, and contribute meaningfully. I'm committed to guiding them every step of the way.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("teachers-section");
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
      id="teachers-section"
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
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-primary text-center mb-16">
            Teachers' Speeches
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {teachers.map((teacher, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 flex flex-col items-center text-center hover:border-primary transition-all duration-300"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-primary">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {teacher.name}
                </h3>
                <p className="text-sm text-primary font-semibold mb-4">
                  {teacher.role}
                </p>
                <p className="text-xs text-muted-foreground italic leading-relaxed">
                  "{teacher.speech}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
