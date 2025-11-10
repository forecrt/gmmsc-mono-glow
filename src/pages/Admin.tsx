import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useContent } from "@/hooks/useContent";
import { Trash2 } from "lucide-react";

const ADMIN_ID = "82049730";
const ADMIN_PASS = "MG{mCSCTs@clu}B693#9463";

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginId, setLoginId] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const { events, coordinator, executiveImages, socialLinks, updateContent } = useContent();
  const { toast } = useToast();
  const navigate = useNavigate();

  const [newEvents, setNewEvents] = useState(events);
  const [newCoordinator, setNewCoordinator] = useState(coordinator);
  const [newExecutiveImages, setNewExecutiveImages] = useState(executiveImages);
  const [newSocialLinks, setNewSocialLinks] = useState(socialLinks);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginId === ADMIN_ID && loginPass === ADMIN_PASS) {
      setIsLoggedIn(true);
      toast({
        title: "Login successful",
        description: "Welcome to admin panel",
      });
    } else {
      toast({
        title: "Login failed",
        description: "Invalid credentials",
        variant: "destructive",
      });
    }
  };

  const handleSave = () => {
    updateContent({
      events: newEvents,
      coordinator: newCoordinator,
      executiveImages: newExecutiveImages,
      socialLinks: newSocialLinks
    });
    toast({
      title: "Changes saved",
      description: "Content updated successfully",
    });
  };

  const addEvent = () => {
    setNewEvents([...newEvents, { image: "", description: "" }]);
  };

  const removeEvent = (index: number) => {
    setNewEvents(newEvents.filter((_, i) => i !== index));
  };

  const addExecutiveImage = () => {
    setNewExecutiveImages([...newExecutiveImages, ""]);
  };

  const removeExecutiveImage = (index: number) => {
    setNewExecutiveImages(newExecutiveImages.filter((_, i) => i !== index));
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-full max-w-md p-8 bg-card border border-border rounded-lg">
          <h1 className="text-3xl font-bold text-foreground mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="id">Admin ID</Label>
              <Input
                id="id"
                type="text"
                value={loginId}
                onChange={(e) => setLoginId(e.target.value)}
                placeholder="Enter admin ID"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={loginPass}
                onChange={(e) => setLoginPass(e.target.value)}
                placeholder="Enter password"
              />
            </div>
            <Button type="submit" className="w-full">Login</Button>
            <Button 
              type="button" 
              variant="outline" 
              className="w-full"
              onClick={() => navigate('/')}
            >
              Back to Home
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-foreground">Admin Panel</h1>
          <div className="flex gap-4">
            <Button onClick={handleSave}>Save Changes</Button>
            <Button variant="outline" onClick={() => navigate('/')}>Back to Site</Button>
            <Button variant="destructive" onClick={() => setIsLoggedIn(false)}>Logout</Button>
          </div>
        </div>

        <div className="space-y-8">
          {/* Events Section */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Events</h2>
            <div className="space-y-4">
              {newEvents.map((event, index) => (
                <div key={index} className="border border-border rounded p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Event {index + 1}</h3>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeEvent(index)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <div>
                    <Label>Image URL</Label>
                    <Input
                      value={event.image}
                      onChange={(e) => {
                        const updated = [...newEvents];
                        updated[index].image = e.target.value;
                        setNewEvents(updated);
                      }}
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                  <div>
                    <Label>Description</Label>
                    <Textarea
                      value={event.description}
                      onChange={(e) => {
                        const updated = [...newEvents];
                        updated[index].description = e.target.value;
                        setNewEvents(updated);
                      }}
                      placeholder="Event description"
                    />
                  </div>
                </div>
              ))}
              <Button onClick={addEvent} variant="outline" className="w-full">
                Add Event
              </Button>
            </div>
          </div>

          {/* Coordinator Section */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Coordinator</h2>
            <div className="space-y-3">
              <div>
                <Label>Name</Label>
                <Input
                  value={newCoordinator.name}
                  onChange={(e) => setNewCoordinator({ ...newCoordinator, name: e.target.value })}
                />
              </div>
              <div>
                <Label>Image URL</Label>
                <Input
                  value={newCoordinator.image}
                  onChange={(e) => setNewCoordinator({ ...newCoordinator, image: e.target.value })}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <div>
                <Label>Description</Label>
                <Textarea
                  value={newCoordinator.description}
                  onChange={(e) => setNewCoordinator({ ...newCoordinator, description: e.target.value })}
                />
              </div>
            </div>
          </div>

          {/* Executive Images Section */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Executive Panel Images</h2>
            <div className="space-y-3">
              {newExecutiveImages.map((image, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={image}
                    onChange={(e) => {
                      const updated = [...newExecutiveImages];
                      updated[index] = e.target.value;
                      setNewExecutiveImages(updated);
                    }}
                    placeholder="https://example.com/image.jpg"
                  />
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeExecutiveImage(index)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
              <Button onClick={addExecutiveImage} variant="outline" className="w-full">
                Add Executive Image
              </Button>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Social Links</h2>
            <div className="space-y-3">
              <div>
                <Label>Facebook URL</Label>
                <Input
                  value={newSocialLinks.facebook}
                  onChange={(e) => setNewSocialLinks({ ...newSocialLinks, facebook: e.target.value })}
                />
              </div>
              <div>
                <Label>Instagram URL</Label>
                <Input
                  value={newSocialLinks.instagram}
                  onChange={(e) => setNewSocialLinks({ ...newSocialLinks, instagram: e.target.value })}
                />
              </div>
              <div>
                <Label>YouTube URL</Label>
                <Input
                  value={newSocialLinks.youtube}
                  onChange={(e) => setNewSocialLinks({ ...newSocialLinks, youtube: e.target.value })}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}