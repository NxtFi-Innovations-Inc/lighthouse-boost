import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Mail, User, Building, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const EarlyAccess = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Success!",
      description: "Thank you for your interest! We'll be in touch soon.",
    });

    setFormData({ name: "", email: "", company: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="early-access" className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Early Access Program
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join thousands of businesses already using NxtFi to accept cryptocurrency payments 
              and receive fiat currency instantly.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Benefits */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">What you'll get:</h3>
              
              <div className="space-y-4">
                {[
                  "Priority access to NxtFi platform",
                  "Dedicated onboarding support",
                  "Beta testing opportunities",
                  "Special launch pricing",
                  "Direct feedback channel"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-muted/50 rounded-lg border border-border/50">
                <p className="text-sm text-muted-foreground">
                  <strong>Limited spots available:</strong> We're accepting the first 500 businesses 
                  into our early access program to ensure the best experience.
                </p>
              </div>
            </div>

            {/* Form */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="pl-10 h-12"
                      />
                    </div>

                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        name="email"
                        type="email"
                        placeholder="Business Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="pl-10 h-12"
                      />
                    </div>

                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="pl-10 h-12"
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Get Early Access
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-6">
              Start accepting crypto payments today - Bitcoin, Ethereum, USDT & more
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Started Now
              </Button>
              <Button variant="outline" size="lg">
                View Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};