import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ShoppingCart, 
  Gamepad2, 
  SendHorizontal, 
  Building2, 
  Handshake, 
  Cloud
} from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: ShoppingCart,
      title: "E-commerce",
      subtitle: "Boost Online Sales",
      description: "Enable your online store to accept cryptocurrencies seamlessly, expanding your customer base and reducing transaction fees."
    },
    {
      icon: Gamepad2,
      title: "Gaming",
      subtitle: "Revolutionize In-Game Purchases",
      description: "Integrate crypto payments for in-game assets, subscriptions, and virtual currencies, offering players more flexibility and security."
    },
    {
      icon: SendHorizontal,
      title: "Remittances",
      subtitle: "Faster, Cheaper Global Transfers",
      description: "Facilitate international money transfers with lower fees and faster settlement times using cryptocurrency as an intermediary."
    },
    {
      icon: Building2,
      title: "Enterprise",
      subtitle: "Custom Solutions for Large Businesses",
      description: "Tailored crypto payment infrastructure for large enterprises, including API customization, dedicated support, and advanced reporting."
    },
    {
      icon: Handshake,
      title: "B2B Payments",
      subtitle: "Streamline Business Transactions",
      description: "Simplify B2B payments with instant, secure, and low-cost crypto transactions, eliminating intermediaries and delays."
    },
    {
      icon: Cloud,
      title: "SaaS Platforms",
      subtitle: "Modernize Subscription Payments",
      description: "Offer crypto payment options for SaaS subscriptions, attracting a new user base and providing flexible payment methods."
    }
  ];

  return (
    <>
      <SEO
        title="Solutions - NxtFi | Tailored Crypto Payment Solutions"
        description="Discover NxtFi's specialized crypto-to-fiat payment solutions for E-commerce, Gaming, Remittances, Enterprise, B2B, and SaaS platforms."
        keywords="nxtfi solutions, crypto payments, e-commerce, gaming, enterprise, b2b payments"
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
                  Tailored Solutions for Every Industry
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  NxtFi provides specialized crypto-to-fiat payment solutions designed to meet the unique needs of various industries.
                </p>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => window.location.href = '/contact'}
                >
                  Get a Custom Solution
                </Button>
              </div>
            </div>
          </section>

          {/* Solutions Grid */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {solutions.map((solution, index) => {
                  const Icon = solution.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardHeader>
                        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="text-2xl text-center">{solution.title}</CardTitle>
                        <CardDescription className="font-semibold text-primary text-center">
                          {solution.subtitle}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-muted-foreground leading-relaxed">
                          {solution.description}
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
                  Ready to Transform Your Industry?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Contact us today to discuss how NxtFi can tailor a crypto payment solution for your specific business needs.
                </p>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => window.location.href = '/contact'}
                >
                  Get a Custom Solution
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

export default Solutions;