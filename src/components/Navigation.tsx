import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Bitcoin } from "lucide-react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Products", href: "#products" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Contact", href: "#early-access" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Bitcoin className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">NxtFi</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href.slice(1))}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            
            <Button 
              onClick={() => scrollToSection('early-access')}
              className="bg-primary hover:bg-primary/90"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-lg">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href.slice(1))}
                  className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              
              <Button 
                onClick={() => scrollToSection('early-access')}
                className="w-full bg-primary hover:bg-primary/90 mt-4"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};