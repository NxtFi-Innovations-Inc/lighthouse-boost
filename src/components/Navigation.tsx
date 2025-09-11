import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Bitcoin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${sectionId}`;
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Features", href: "/features", isScroll: false },
    { label: "Solutions", href: "/solutions", isScroll: false },
    { label: "Pricing", href: "/pricing", isScroll: false },
    { label: "API", href: "/api", isScroll: false },
    { label: "About", href: "/about", isScroll: false },
    { label: "Contact", href: "/contact", isScroll: false },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/9ca025af-4e01-410a-92fb-8487ab58eadc.png" 
              alt="NxtFi Logo" 
              className="w-8 h-8 object-contain"
            />
            <span className="text-xl font-bold">NxtFi</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              item.isScroll ? (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href.slice(1))}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={index}
                  to={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  {item.label}
                </Link>
              )
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
                item.isScroll ? (
                  <button
                    key={index}
                    onClick={() => scrollToSection(item.href.slice(1))}
                    className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={index}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                  >
                    {item.label}
                  </Link>
                )
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