import { Bitcoin, Twitter, Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/lovable-uploads/9ca025af-4e01-410a-92fb-8487ab58eadc.png" alt="NxtFi Logo" className="w-8 h-8 object-contain" />
              <span className="text-xl font-bold">NxtFi innovations Inc.</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Seamless crypto-to-fiat payment platform for modern businesses. 
              Accept cryptocurrency, receive fiat currency.
            </p>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                <a href="https://x.com/NxtFi_UAE" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                <a href="https://www.linkedin.com/company/nxtfi-innovations-inc/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                <a href="https://www.instagram.com/nxtfi_uae?igsh=Y3d6bGdpbDczZmE0&utm_source=qr" target="_blank" rel="noopener noreferrer">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                <a href="https://www.facebook.com/share/15eRbGNrgG/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                <a href="/contact">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-semibold">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection('products')} className="text-muted-foreground hover:text-foreground transition-colors">
                  NxtFi Wallet
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products')} className="text-muted-foreground hover:text-foreground transition-colors">
                  Merchant Portal
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products')} className="text-muted-foreground hover:text-foreground transition-colors">
                  NxtFi API
                </button>
              </li>
              <li>
                <a href="/api" className="text-muted-foreground hover:text-foreground transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection('how-it-works')} className="text-muted-foreground hover:text-foreground transition-colors">
                  Help Center
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('early-access')} className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Support
                </button>
              </li>
              <li>
                <a href="/api" className="text-muted-foreground hover:text-foreground transition-colors">
                  API Status
                </a>
              </li>
              <li>
                <a href="/api" className="text-muted-foreground hover:text-foreground transition-colors">
                  Developer Portal
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} NxtFi. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="/contact" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>;
};