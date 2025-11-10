import { useState, useEffect } from 'react';
import events from "@/assets/events.jpg";
import event2 from "@/assets/event2.jpg";
import director from "@/assets/drctor.jpg";
import exc1 from "@/assets/exc1.jpg";
import exc2 from "@/assets/exc2.jpg";
import exc3 from "@/assets/exc3.jpg";
import exc4 from "@/assets/exc4.jpg";
import exc5 from "@/assets/exc5.jpg";
import exc6 from "@/assets/exc6.jpg";
import exc7 from "@/assets/exc7.jpg";
import exc8 from "@/assets/exc8.jpg";

const defaultExecutiveImages = [exc1, exc2, exc3, exc4, exc5, exc6, exc7, exc8];

const defaultEvents = [
  { image: events, description: "1ST GMMSC ESPORTS TOURNAMENT 2025 - Join us for an exciting gaming competition featuring top esports titles" },
  { image: event2, description: "Annual Tech Workshop - Learn cutting-edge technologies from industry experts" }
];

const defaultCoordinator = {
  name: "MD. NURUL HAQUE",
  image: director,
  description: "As the Coordinator of GMMSC ICT Club, MD. Nurul Haque leads our mission to foster technological innovation and excellence among students. Under his guidance, the club has become a hub for aspiring technologists, providing opportunities to learn, collaborate, and excel in the field of Information and Communication Technology."
};

const defaultSocialLinks = {
  facebook: "https://www.facebook.com/club.ict.gmmsc/",
  instagram: "https://www.instagram.com/gmmsc.ict.club/",
  youtube: "https://www.youtube.com/@gmmscictclub"
};

export interface Event {
  image: string;
  description: string;
}

export interface Coordinator {
  name: string;
  image: string;
  description: string;
}

export interface SocialLinks {
  facebook: string;
  instagram: string;
  youtube: string;
}

export interface ContentData {
  events: Event[];
  coordinator: Coordinator;
  executiveImages: string[];
  socialLinks: SocialLinks;
}

export const useContent = () => {
  const [events, setEvents] = useState<Event[]>(defaultEvents);
  const [coordinator, setCoordinator] = useState<Coordinator>(defaultCoordinator);
  const [executiveImages, setExecutiveImages] = useState<string[]>(defaultExecutiveImages);
  const [socialLinks, setSocialLinks] = useState<SocialLinks>(defaultSocialLinks);

  useEffect(() => {
    const loadContent = () => {
      try {
        const stored = localStorage.getItem('gmmsc_content');
        if (stored) {
          const data: ContentData = JSON.parse(stored);
          setEvents(data.events || defaultEvents);
          setCoordinator(data.coordinator || defaultCoordinator);
          setExecutiveImages(data.executiveImages || defaultExecutiveImages);
          setSocialLinks(data.socialLinks || defaultSocialLinks);
        }
      } catch (error) {
        console.error('Error loading content:', error);
      }
    };

    loadContent();
  }, []);

  const updateContent = (data: Partial<ContentData>) => {
    const currentData: ContentData = {
      events,
      coordinator,
      executiveImages,
      socialLinks
    };
    
    const newData = { ...currentData, ...data };
    localStorage.setItem('gmmsc_content', JSON.stringify(newData));
    
    if (data.events) setEvents(data.events);
    if (data.coordinator) setCoordinator(data.coordinator);
    if (data.executiveImages) setExecutiveImages(data.executiveImages);
    if (data.socialLinks) setSocialLinks(data.socialLinks);
  };

  return {
    events,
    coordinator,
    executiveImages,
    socialLinks,
    updateContent
  };
};