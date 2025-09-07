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
    { value: "$50M+", label: "Assets Under Management" },
    { value: "10,000+", label: "Active Users" },
    { value: "15+", label: "Blockchain Networks" },
    { value: "99.9%", label: "Uptime Guarantee" },
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "CEO & Founder",
      bio: "Former Goldman Sachs VP with 10+ years in traditional finance and blockchain technology.",
      image: "/placeholder.svg"
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      bio: "Ex-Google engineer specializing in distributed systems and cryptocurrency infrastructure.",
      image: "/placeholder.svg"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Product",
      bio: "Product leader from Coinbase with expertise in user experience and regulatory compliance.",
      image: "/placeholder.svg"
    },
    {
      name: "Dr. Emily Wang",
      role: "Chief Risk Officer",
      bio: "PhD in Financial Engineering from Stanford, former JP Morgan risk management executive.",
      image: "/placeholder.svg"
    }
  ];

  const investors = [
    { name: "Andreessen Horowitz", type: "Lead Series A", amount: "$15M" },
    { name: "Coinbase Ventures", type: "Strategic", amount: "$8M" },
    { name: "Pantera Capital", type: "Series A", amount: "$12M" },
    { name: "Binance Labs", type: "Strategic", amount: "$5M" },
  ];

  const milestones = [
    { year: "2022", title: "Company Founded", description: "NxtFi established with seed funding" },
    { year: "2023", title: "Series A Funding", description: "$40M raised from top VCs" },
    { year: "2023", title: "Product Launch", description: "Beta platform goes live" },
    { year: "2024", title: "Global Expansion", description: "Multi-region deployment" },
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

          {/* Team Section */}
          <section className="py-20 bg-muted/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">Our Team</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Experts</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Our diverse team combines decades of experience in traditional finance, 
                  blockchain technology, and product development.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, index) => (
                  <Card key={index} className="text-center p-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-12 h-12 text-primary" />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{member.bio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Investors Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">Our Investors</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Backed by Industry Leaders</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  We're proud to be supported by some of the most respected names in venture capital and crypto.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {investors.map((investor, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{investor.name}</h3>
                        <Badge variant="secondary" className="mb-2">{investor.type}</Badge>
                        <p className="text-2xl font-bold text-primary">{investor.amount}</p>
                      </div>
                      <TrendingUp className="w-12 h-12 text-primary" />
                    </div>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-lg text-muted-foreground mb-6">
                  Total Funding Raised: <span className="font-bold text-primary">$40M</span>
                </p>
                <Button size="lg">
                  Investor Relations
                </Button>
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