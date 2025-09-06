import { QrCode, RefreshCw, CreditCard, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "1",
    icon: QrCode,
    title: "Choose Crypto",
    description: "Customer selects cryptocurrency and completes payment using their preferred wallet or our mobile app.",
    details: [
      "QR code scanning",
      "Wallet integration", 
      "Secure transactions",
      "Real-time confirmation"
    ],
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    number: "2", 
    icon: RefreshCw,
    title: "Confirm Payment",
    description: "Our platform automatically converts cryptocurrency to your preferred fiat currency at competitive market rates.",
    details: [
      "Real-time conversion",
      "Best market rates",
      "Minimal slippage", 
      "Instant processing"
    ],
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    number: "3",
    icon: CreditCard,
    title: "Pay Now", 
    description: "Converted fiat currency is deposited directly into your bank account within 24 hours.",
    details: [
      "Bank deposits",
      "24-hour settlement",
      "Transaction tracking",
      "Detailed reporting"
    ],
    gradient: "from-green-500/20 to-emerald-500/20"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Simple, secure, and fast crypto-to-fiat transactions in three easy steps.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Lines (Desktop) */}
            <div className="hidden md:block absolute top-20 left-1/3 right-1/3 h-px bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
            <div className="hidden md:block absolute top-20 left-2/3 transform -translate-x-1/2">
              <ArrowRight className="w-6 h-6 text-primary" />
            </div>
            <div className="hidden md:block absolute top-20 left-1/3 transform -translate-x-1/2">
              <ArrowRight className="w-6 h-6 text-primary" />
            </div>

            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card 
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm relative"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>

                  <CardContent className="p-8 pt-12">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details */}
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
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
        </div>
      </div>
    </section>
  );
};