import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Zap, TrendingUp } from "lucide-react";

export const Hero = () => {
  const scrollToEarlyAccess = () => {
    document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Announcement Banner */}
        <div className="text-center mb-8">
          <Badge 
            variant="secondary" 
            className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium"
          >
            <Zap className="w-4 h-4 mr-2" />
            Easy crypto payment integration for every platform
          </Badge>
        </div>

        {/* Main Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent mb-6 leading-tight">
            Accept Crypto, Receive Fiat Instantly
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Transform your business with NxtFi's seamless crypto-to-fiat payment platform. 
            Accept Bitcoin, Ethereum, and other cryptocurrencies while receiving stable fiat currency in your bank account.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>Blockchain-secured, no redirection</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>Bank-grade security</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span>Instant settlements</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={scrollToEarlyAccess}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold group"
            >
              Unlock Early Access
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-primary/20 hover:bg-primary/5 px-8 py-6 text-lg"
            >
              Learn More
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-4">
            Get early access to the next-gen crypto-to-fiat platform.
          </p>
        </div>

        {/* Hero Image Placeholder */}
        <div className="text-center">
          <div className="relative mx-auto max-w-4xl">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl border border-border/50 backdrop-blur-sm shadow-2xl">
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground">Crypto to Fiat Conversion Platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};