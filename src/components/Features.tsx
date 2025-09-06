import { Bitcoin, DollarSign, Code, Shield, Zap, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Bitcoin,
    title: "Accept Multiple Cryptocurrencies",
    description: "Support for Bitcoin, Ethereum, USDT, and 50+ other cryptocurrencies with automatic detection and processing.",
    details: ["Bitcoin (BTC)", "Ethereum (ETH)", "Tether (USDT)", "50+ More Coins"],
    gradient: "from-orange-500/20 to-yellow-500/20"
  },
  {
    icon: DollarSign,
    title: "Receive in Fiat",
    description: "Instant conversion to your preferred fiat currency (USD, EUR, GBP, AED) with competitive exchange rates.",
    details: ["Real-time conversion", "Competitive rates", "Multiple currencies", "Bank deposits"],
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: Code,
    title: "Simple Integration",
    description: "Easy-to-use APIs and plugins for popular e-commerce platforms. Get started in minutes, not weeks.",
    details: ["RESTful APIs", "E-commerce plugins", "Mobile SDKs", "24/7 support"],
    gradient: "from-blue-500/20 to-purple-500/20"
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">What We Do</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            NxtFi bridges the gap between cryptocurrency and traditional finance, 
            enabling businesses to accept crypto payments while receiving stable fiat currency.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  {/* Icon with Gradient Background */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Feature Content */}
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Feature Details */}
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Blockchain-secured, no redirection required</span>
          </div>
        </div>
      </div>
    </section>
  );
};