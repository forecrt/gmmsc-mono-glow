import { useEffect, useState } from "react";
import school from "@/assets/school.jpg";
import schoolLogo from "@/assets/school_logo.png";

export const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("contact-section");
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
      id="contact-section"
      className="relative h-screen w-full overflow-hidden"
    >
      <div
        className={`absolute inset-0 transition-all duration-1000 ${
          isVisible ? "scale-100 opacity-100" : "scale-110 opacity-0"
        }`}
        style={{
          backgroundImage: `url(${school})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      
      <div className="absolute top-6 left-6">
        <img src={schoolLogo} alt="GMMSC School Logo" className="w-32 h-32 object-contain" />
      </div>
      
      <div
        className={`absolute bottom-12 right-12 transition-all duration-1000 delay-300 ${
          isVisible
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        <div className="bg-background/90 backdrop-blur-md border border-border rounded-lg p-8 max-w-md">
          <h2 className="text-4xl font-black tracking-tighter text-foreground mb-6">
            CONTACT
          </h2>
          <div className="space-y-3 text-foreground">
            <p className="font-bold text-lg">
              GOVT. MOHAMMADPUR MODEL SCHOOL AND COLLEGE
            </p>
            <p className="text-sm">
              <span className="font-semibold">Principal (PA):</span> 0244822243
            </p>
            <p className="text-sm">
              <span className="font-semibold">Morning Shift Co-Ordinator:</span> 02-44822220
            </p>
            <p className="text-sm">
              <span className="font-semibold">General Info:</span> 01977-108264
            </p>
            <p className="text-sm">
              <span className="font-semibold">SMS:</span> 01309-108264
            </p>
            <p className="text-sm">
              <span className="font-semibold">Email:</span> info@mmsc.edu.bd
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};