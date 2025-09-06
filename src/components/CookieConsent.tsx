import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    setIsVisible(false);
  };

  const handleNecessaryOnly = () => {
    localStorage.setItem("cookie-consent", "necessary");
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-black/80 backdrop-blur-sm">
      <Card className="bg-card/95 backdrop-blur-sm border-border/50 max-w-4xl mx-auto">
        <div className="p-6 relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            className="absolute top-4 right-4 h-6 w-6"
          >
            <X className="h-4 w-4" />
          </Button>
          
          <h3 className="text-lg font-semibold mb-2">Cookie Consent</h3>
          <p className="text-muted-foreground mb-4 pr-8">
            We use cookies to enhance your experience, analyze site traffic, and for marketing purposes. 
            By clicking "Accept All", you consent to our use of cookies. You can manage your preferences in settings.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={handleAcceptAll} className="bg-primary hover:bg-primary/90">
              Accept All
            </Button>
            <Button variant="outline" onClick={handleNecessaryOnly}>
              Necessary Only
            </Button>
            <Button variant="link" className="text-primary">
              Privacy Policy
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};