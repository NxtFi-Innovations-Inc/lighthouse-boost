import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Palette, 
  Briefcase, 
  Heart, 
  GraduationCap, 
  DollarSign, 
  Clock,
  Users,
  Zap,
  Globe
} from "lucide-react";

const Careers = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      items: [
        "Comprehensive health insurance",
        "Mental health support",
        "Fitness & wellness allowance",
        "Flexible work arrangements"
      ]
    },
    {
      icon: GraduationCap,
      title: "Professional Development",
      items: [
        "Learning & development budget",
        "Conference attendance",
        "Internal training programs",
        "Career advancement paths"
      ]
    },
    {
      icon: DollarSign,
      title: "Financial Benefits",
      items: [
        "Competitive salary packages",
        "Equity participation",
        "Performance bonuses",
        "Crypto payment options"
      ]
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      items: [
        "Remote work options",
        "Flexible hours",
        "Unlimited PTO policy",
        "Team retreats & events"
      ]
    }
  ];

  const departments = [
    {
      icon: Code,
      title: "Engineering",
      description: "Backend, Frontend, Blockchain, DevOps, and Security Engineering positions.",
      badge: "Tech Roles"
    },
    {
      icon: Palette,
      title: "Product & Design",
      description: "Product Management, UX/UI Design, and Product Marketing roles.",
      badge: "Creative Roles"
    },
    {
      icon: Briefcase,
      title: "Business & Operations",
      description: "Sales, Marketing, Operations, Legal, and Finance positions.",
      badge: "Business Roles"
    }
  ];

  const values = [
    {
      icon: Zap,
      title: "Innovation First",
      description: "Work with the latest blockchain technologies, AI, and financial systems to build next-generation payment solutions."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Make a real impact on businesses and individuals worldwide by democratizing access to financial services."
    },
    {
      icon: Users,
      title: "Great Culture",
      description: "Join a diverse, inclusive team where every voice is heard and innovation thrives through collaboration."
    }
  ];

  return (
    <>
      <SEO
        title="Careers - NxtFi | Join the Future of Finance"
        description="Join NxtFi's innovative team and help revolutionize crypto-to-fiat payments. Remote and on-site opportunities available."
        keywords="nxtfi careers, jobs, fintech careers, blockchain jobs, crypto jobs"
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
                  Join the Future of Finance
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Be part of the team revolutionizing crypto-to-fiat payments and building the financial infrastructure of tomorrow.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90"
                    onClick={() => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View Openings
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Apply Now
                  </Button>
                </div>
                <Badge className="mt-6" variant="secondary">
                  Remote & On-site opportunities
                </Badge>
              </div>
            </div>
          </section>

          {/* Why Work at NxtFi */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Work at NxtFi?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Join a dynamic team of innovators, builders, and visionaries working to transform the global financial landscape.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                      <CardContent className="p-8">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Benefits & Perks */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Benefits & Perks
                </h2>
                <p className="text-xl text-muted-foreground">
                  We believe in taking care of our team with comprehensive benefits and exciting perks.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{benefit.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {benefit.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-sm text-muted-foreground flex items-start">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Open Positions */}
          <section id="open-positions" className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Open Positions
                </h2>
                <p className="text-xl text-muted-foreground">
                  Explore exciting career opportunities across engineering, product, design, and business functions.
                </p>
                <Badge className="mt-4" variant="secondary">
                  Multiple positions available - Remote & On-site
                </Badge>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
                {departments.map((dept, index) => {
                  const Icon = dept.icon;
                  return (
                    <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                      <CardContent className="p-8">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{dept.title}</h3>
                        <Badge className="mb-4" variant="outline">{dept.badge}</Badge>
                        <p className="text-muted-foreground">{dept.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="text-center">
                <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Apply for a Position</h3>
                    <p className="text-muted-foreground mb-6">
                      Ready to join our team? Submit your application and help us build the future of finance.
                    </p>
                    <Button 
                      size="lg" 
                      className="bg-primary hover:bg-primary/90"
                      onClick={() => window.location.href = '/contact'}
                    >
                      Apply Now
                    </Button>
                    <p className="text-sm text-muted-foreground mt-4">
                      Your information is secure and confidential
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Careers;