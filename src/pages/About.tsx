import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, Shield, Globe, Award, Target } from "lucide-react";

const About = () => {
  const stats = [
    { value: "50+", label: "DeFi Protocols" },
    { value: "24/7", label: "Platform Availability" },
    { value: "15+", label: "Blockchain Networks" },
    { value: "Secure", label: "Smart Contracts" },
  ];

  const milestones = [
    { year: "2024", title: "Platform Development", description: "Core DeFi infrastructure built" },
    { year: "2024", title: "Security Audits", description: "Comprehensive security testing completed" },
    { year: "2024", title: "Beta Testing", description: "Limited beta testing with select users" },
    { year: "2024", title: "Public Launch", description: "Platform available to all users" },
  ];

  return (
    <>
      <SEO
        title="About NxtFi - Next Generation DeFi Platform"
        description="Learn about NxtFi's mission to democratize access to decentralized finance. Meet our team, investors, and discover our journey."
        keywords="about nxtfi, defi team, blockchain investors, cryptocurrency company, fintech startup"
      />
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge variant="outline" className="mb-6">About NxtFi</Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Building the Future of Finance
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  We're on a mission to democratize access to decentralized finance and make sophisticated 
                  financial tools accessible to everyone, everywhere.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <Card className="p-8">
                  <CardHeader className="text-center pb-6">
                    <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-2xl">Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      To bridge the gap between traditional finance and decentralized finance by providing 
                      secure, user-friendly, and compliant DeFi solutions that empower individuals and 
                      institutions to participate in the new economy.
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-8">
                  <CardHeader className="text-center pb-6">
                    <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-2xl">Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      A world where financial services are open, transparent, and accessible to everyone, 
                      regardless of geographic location or economic status. We envision a future where 
                      DeFi is the standard for financial operations globally.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Technology Section */}
          <section className="py-20 bg-muted/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">Our Technology</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for the Future</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Our platform leverages cutting-edge blockchain technology to provide secure, 
                  scalable, and efficient DeFi solutions.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center p-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Shield className="w-12 h-12 text-primary" />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Security First</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Multi-layer security protocols and smart contract audits</p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <TrendingUp className="w-12 h-12 text-primary" />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">High Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Optimized for speed and efficiency across multiple blockchains</p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">User Focused</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Intuitive interface designed for both beginners and experts</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="py-20 bg-muted/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">Our Journey</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Company Milestones</h2>
              </div>

              <div className="max-w-4xl mx-auto">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-center mb-8 last:mb-0">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-6">
                      {milestone.year}
                    </div>
                    <Card className="flex-grow p-6">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{milestone.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">Our Values</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">What Drives Us</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <Card className="text-center p-8">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardHeader>
                    <CardTitle>Security First</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We prioritize the security of user funds and data above all else, implementing 
                      industry-leading security measures and regular audits.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-8">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardHeader>
                    <CardTitle>User-Centric</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Every product decision is made with our users in mind, ensuring intuitive 
                      interfaces and seamless experiences across all platforms.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-8">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardHeader>
                    <CardTitle>Innovation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We continuously push the boundaries of what's possible in DeFi, developing 
                      cutting-edge solutions for complex financial challenges.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <CookieConsent />
      </div>
    </>
  );
};

export default About;