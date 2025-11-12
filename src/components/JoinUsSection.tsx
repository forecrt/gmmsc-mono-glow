import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Facebook, Monitor, Users, Trophy } from "lucide-react";
import { useContent } from "@/hooks/useContent";

export const JoinUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const { socialLinks } = useContent();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("join-section");
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
    <>
      <section
        id="join-section"
        className="relative min-h-screen w-full bg-gradient-to-br from-background via-primary/5 to-background py-16 flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 left-8 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-16 right-8 w-80 h-80 bg-primary rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-5 relative z-10">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground mb-5">
                JOIN US
              </h2>
              <div className="h-2 w-28 bg-primary mx-auto mb-10" />
              
              <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                Become a part of GMMSC ICT Club and embark on a journey of technological excellence. 
                Connect with like-minded individuals, participate in exciting events, and shape the future of technology.
              </p>

              <div className="grid md:grid-cols-3 gap-7 mb-10">
                <div className="bg-card border border-border rounded-lg p-5 hover:border-primary transition-all hover:scale-105">
                  <Monitor className="w-11 h-11 mx-auto mb-3 text-primary" />
                  <h3 className="text-lg font-bold text-foreground mb-2">Learn & Grow</h3>
                  <p className="text-muted-foreground text-sm">
                    Access workshops, training sessions, and mentorship programs
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-5 hover:border-primary transition-all hover:scale-105">
                  <Users className="w-11 h-11 mx-auto mb-3 text-primary" />
                  <h3 className="text-lg font-bold text-foreground mb-2">Network</h3>
                  <p className="text-muted-foreground text-sm">
                    Connect with peers, professionals, and industry experts
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-5 hover:border-primary transition-all hover:scale-105">
                  <Trophy className="w-11 h-11 mx-auto mb-3 text-primary" />
                  <h3 className="text-lg font-bold text-foreground mb-2">Compete</h3>
                  <p className="text-muted-foreground text-sm">
                    Participate in competitions, hackathons, and esports tournaments
                  </p>
                </div>
              </div>

              <Button 
                size="lg" 
                className="text-base px-7 py-5 font-bold tracking-wider hover:scale-105 transition-transform"
                onClick={() => setShowDialog(true)}
              >
                BECOME A MEMBER
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Join GMMSC ICT Club</DialogTitle>
            <DialogDescription>
              To become a member, please contact us on Facebook. We'll guide you through the registration process.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button
              size="lg"
              className="gap-2"
              onClick={() => window.open(socialLinks.facebook, '_blank')}
            >
              <Facebook className="w-5 h-5" />
              Contact us on Facebook
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};