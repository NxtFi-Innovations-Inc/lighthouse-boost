import { Smartphone, Building, Code, ArrowRight, Check, Shield } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    icon: Smartphone,
    title: "NxtFi Wallet",
    description: "Secure mobile wallet for customers to store, manage, and spend cryptocurrencies seamlessly.",
    price: "Free",
    features: [
      "Multi-currency support",
      "Bank-grade security", 
      "QR code payments",
      "Transaction history"
    ],
    security: "Blockchain-secured, no redirection required",
    cta: "Download App",
    gradient: "from-blue-500/20 to-cyan-500/20",
    popular: false
  },
  {
    icon: Building,
    title: "Merchant Portal",
    description: "Complete payment processing solution for businesses to accept crypto and receive fiat currency.",
    price: "2.5% fee",
    features: [
      "Real-time dashboard",
      "Instant settlements",
      "Fraud protection",
      "Analytics & reporting"
    ],
    security: "End-to-end encryption with multi-signature technology",
    cta: "Start Free Trial",
    gradient: "from-green-500/20 to-emerald-500/20",
    popular: true
  },
  {
    icon: Code,
    title: "NxtFi API",
    description: "Powerful APIs and SDKs for developers to build custom crypto payment solutions.",
    price: "Custom",
    features: [
      "RESTful APIs",
      "Webhook support",
      "Sandbox environment",
      "24/7 developer support"
    ],
    security: "HTTPS enforced with secure headers",
    cta: "View Documentation",
    gradient: "from-purple-500/20 to-pink-500/20",
    popular: false
  }
];

export const Products = () => {
  const scrollToEarlyAccess = () => {
    document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Products</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive crypto-to-fiat solutions designed for businesses of all sizes.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Card 
                key={index} 
                className={`group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm relative ${
                  product.popular ? 'ring-2 ring-primary/20' : ''
                }`}
              >
                {product.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="pb-4">
                  {/* Icon with Gradient Background */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Security Badge */}
                  <div className="flex items-start gap-2 p-3 bg-primary/5 rounded-lg mb-6">
                    <Shield className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{product.security}</span>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    onClick={scrollToEarlyAccess}
                    className={`w-full group ${
                      product.popular 
                        ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                        : 'variant-outline'
                    }`}
                  >
                    {product.cta}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};