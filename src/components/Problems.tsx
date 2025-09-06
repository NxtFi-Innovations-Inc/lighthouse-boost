import { AlertTriangle, TrendingDown, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const problems = [
  {
    icon: AlertTriangle,
    title: "Complex Crypto-Fiat Systems",
    description: "Existing solutions require technical expertise and complex integrations that most businesses can't handle.",
    gradient: "from-red-500/20 to-orange-500/20"
  },
  {
    icon: TrendingDown,
    title: "Low Adoption Rates",
    description: "High barriers to entry and poor user experience prevent widespread adoption of crypto payment solutions.",
    gradient: "from-yellow-500/20 to-red-500/20"
  },
  {
    icon: Smartphone,
    title: "Lack of Secure Mobile Wallets",
    description: "Limited secure mobile wallet options make it difficult for customers to make crypto payments on-the-go.",
    gradient: "from-purple-500/20 to-pink-500/20"
  }
];

export const Problems = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Problems We Solve</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Traditional payment systems face significant challenges in the digital economy. 
            NxtFi addresses these pain points with innovative solutions.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-destructive/20 bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-8 text-center">
                  {/* Icon with Gradient Background */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${problem.gradient} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-destructive" />
                  </div>

                  {/* Problem Content */}
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-destructive transition-colors">
                    {problem.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};