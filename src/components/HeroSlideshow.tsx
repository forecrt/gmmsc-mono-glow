import { useEffect, useState } from "react";
import hero1 from "@/assets/hero_1.jpg";
import ict1 from "@/assets/ict1.jpg";
import ict2 from "@/assets/ict2.jpg";
import slideshow from "@/assets/slideshow.jpg";

const images = [hero1, ict1, ict2, slideshow];

export const HeroSlideshow = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition < window.innerHeight * 0.5);
      setShowScroll(scrollPosition < window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="fixed top-0 left-0 h-screen w-full overflow-hidden z-0">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            currentImage === index ? "opacity-100 scale-100" : "opacity-0 scale-105"
          } ${!isVisible ? "blur-md" : ""}`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-black/40" />
      {showScroll && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce transition-opacity duration-500">
          <div className="flex flex-col items-center gap-2">
            <span className="text-foreground text-sm tracking-widest">SCROLL</span>
            <div className="w-px h-12 bg-foreground" />
          </div>
        </div>
      )}
    </section>
  );
};
