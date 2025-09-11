import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Bitcoin, 
  Shield, 
  Zap, 
  BarChart3, 
  Globe, 
  Smartphone, 
  QrCode, 
  HeadphonesIcon,
  TrendingUp,
  Lock
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Bitcoin,
      title: "Multi-Cryptocurrency Support",
      subtitle: "Accept Diverse Cryptos",
      description: "Accept payments in Bitcoin, Ethereum, USDT, and over 50 other major cryptocurrencies, with automatic detection and processing.",
      badge: "50+ Coins"
    },
    {
      icon: Zap,
      title: "Instant Fiat Conversion",
      subtitle: "Seamless Fiat Conversion",
      description: "Seamlessly convert cryptocurrencies to your preferred fiat currency (USD, EUR, GBP, AED) at competitive real-time exchange rates.",
      badge: "Real-time"
    },
    {
      icon: TrendingUp,
      title: "Simple Integration",
      subtitle: "Easy Integration",
      description: "Integrate NxtFi into your existing systems with ease using our robust APIs, e-commerce plugins, and mobile SDKs.",
      badge: "API Ready"
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      subtitle: "Bank-Grade Security",
      description: "Benefit from blockchain-secured transactions, bank-grade security measures, and multi-signature technology for enhanced protection.",
      badge: "Secure"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics & Reporting",
      subtitle: "Insightful Analytics",
      description: "Gain insights into your transactions with a real-time merchant dashboard, comprehensive analytics, and detailed reporting features.",
      badge: "Analytics"
    },
    {
      icon: Lock,
      title: "Fraud Protection",
      subtitle: "Advanced Fraud Detection",
      description: "Our advanced fraud detection systems and machine learning algorithms monitor transactions to identify and prevent suspicious activities.",
      badge: "AI Powered"
    },
    {
      icon: Globe,
      title: "Global Reach",
      subtitle: "Worldwide Accessibility",
      description: "Expand your customer base by accepting crypto payments from anywhere in the world, with support for multiple fiat currencies.",
      badge: "Global"
    },
    {
      icon: HeadphonesIcon,
      title: "Dedicated Support",
      subtitle: "24/7 Customer Support",
      description: "Access 24/7 customer and developer support to assist you with any queries or technical challenges.",
      badge: "24/7"
    },
    {
      icon: Smartphone,
      title: "Mobile Wallet",
      subtitle: "User-Friendly Mobile Wallet",
      description: "Provide your customers with a secure and user-friendly mobile wallet to store, manage, and spend their cryptocurrencies.",
      badge: "Mobile"
    },
    {
      icon: QrCode,
      title: "QR Code Payments",
      subtitle: "Quick QR Payments",
      description: "Enable quick and easy payments through QR codes, simplifying the checkout process for your customers.",
      badge: "QR Code"
    }
  ];

  return (
    <>
      <SEO
        title="Features - NxtFi | Comprehensive Crypto Payment Solutions"
        description="Explore NxtFi's comprehensive suite of features including multi-crypto support, instant fiat conversion, secure transactions, and global reach."
        keywords="nxtfi features, crypto payments, blockchain, fiat conversion, payment processing"
        type="website"
      />
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Key Features of NxtFi
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  NxtFi offers a comprehensive suite of features designed to simplify crypto-to-fiat payments for businesses and individuals.
                </p>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => window.location.href = '/contact'}
                >
                  Start Accepting Crypto
                </Button>
              </div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <Badge variant="secondary">{feature.badge}</Badge>
                        </div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                        <CardDescription className="font-medium text-primary">
                          {feature.subtitle}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Join thousands of businesses already using NxtFi to accept cryptocurrency payments and expand globally.
                </p>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => window.location.href = '/contact'}
                >
                  Start Accepting Crypto
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Features;