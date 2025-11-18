import React from "react";
import logo from "@/assets/ictclub_new_logo.png";
import schoolLogo from "@/assets/school_logo.png";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { useContent } from "@/hooks/useContent";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

export const Footer = () => {
  const { socialLinks } = useContent();

  return (
    <footer className="relative w-full bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="GMMSC ICT Club" className="w-12 h-12 object-contain" />
              <img src={schoolLogo} alt="GMMSC School" className="w-12 h-12 object-contain" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              GMMSC ICT CLUB
            </h3>
            <p className="text-muted-foreground text-sm">
              Empowering students through technology and innovation
            </p>
            
            <div className="flex gap-4 mt-6">
              <a 
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#events-section" className="hover:text-primary transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#team-section" className="hover:text-primary transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact-section" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#join-section" className="hover:text-primary transition-colors">
                  Join Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">Contact Info</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Principal (PA): 0244822243</li>
              <li>Morning Shift: 02-44822220</li>
              <li>General: 01977-108264</li>
              <li>Email: info@mmsc.edu.bd</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} GMMSC ICT Club. All rights reserved.</p>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button 
                className="mt-2 text-xs font-bold glitch text-foreground hover:text-primary transition-colors" 
                data-text="Developed by Ornob"
              >
                Developed by Ornob
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-card border-border">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-foreground text-center text-xl">
                  Contact Developer
                </AlertDialogTitle>
                <AlertDialogDescription className="text-muted-foreground space-y-3 text-center">
                  <p className="text-base">
                    <strong className="text-foreground">Email:</strong>{" "}
                    <a href="mailto:mdjabad535@gmail.com" className="text-primary hover:underline">
                      mdjabad535@gmail.com
                    </a>
                  </p>
                  <p className="text-base">
                    <strong className="text-foreground">Instagram:</strong>{" "}
                    <a 
                      href="https://www.instagram.com/ja_b_ad" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      @ja_b_ad
                    </a>
                  </p>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="bg-secondary text-secondary-foreground hover:bg-secondary/80">Close</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </footer>
  );
};