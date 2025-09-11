import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Scale, 
  Shield, 
  FileText, 
  Users, 
  Building, 
  AlertCircle, 
  TrendingUp, 
  BookOpen,
  CheckCircle,
  UserCheck,
  Eye,
  Phone
} from "lucide-react";

const Compliance = () => {
  const complianceAreas = [
    {
      icon: Scale,
      title: "Regulatory Adherence",
      description: "We strictly adhere to financial regulations, including Anti-Money Laundering (AML) and Know Your Customer (KYC) policies."
    },
    {
      icon: Shield,
      title: "Data Protection and Privacy",
      description: "We comply with global data protection regulations such as GDPR and CCPA, implementing stringent measures to protect your information."
    },
    {
      icon: Building,
      title: "Licensing and Registrations",
      description: "NxtFi holds all necessary licenses and registrations in the regions where we operate, ensuring legal authorization."
    },
    {
      icon: Eye,
      title: "Internal Controls and Audits",
      description: "We maintain strong internal controls and conduct regular independent audits to verify compliance with requirements."
    },
    {
      icon: AlertCircle,
      title: "Risk Management",
      description: "Our comprehensive risk management framework identifies, assesses, and mitigates potential risks effectively."
    },
    {
      icon: TrendingUp,
      title: "Anti-Fraud Measures",
      description: "We employ advanced anti-fraud technologies and procedures to detect and prevent fraudulent transactions."
    },
    {
      icon: FileText,
      title: "Reporting and Transparency",
      description: "NxtFi provides regular reports to relevant regulatory bodies, demonstrating our ongoing compliance efforts."
    },
    {
      icon: BookOpen,
      title: "Employee Training",
      description: "All employees receive continuous training on compliance policies and procedures for regulatory best practices."
    },
    {
      icon: Users,
      title: "Continuous Improvement",
      description: "Our compliance framework is continuously reviewed and updated to adapt to evolving regulatory landscapes."
    }
  ];

  const userRights = [
    {
      icon: FileText,
      title: "Access",
      description: "Request a copy of your personal data"
    },
    {
      icon: UserCheck,
      title: "Correction",
      description: "Update inaccurate information"
    },
    {
      icon: AlertCircle,
      title: "Deletion",
      description: "Request erasure of your data"
    },
    {
      icon: Eye,
      title: "Opt-Out",
      description: "From marketing communications"
    },
    {
      icon: TrendingUp,
      title: "Portability",
      description: "Get your data in readable format"
    },
    {
      icon: Phone,
      title: "Complaints",
      description: "Lodge with supervisory authority"
    }
  ];

  return (
    <>
      <SEO
        title="Compliance - NxtFi | Regulatory Commitment & Privacy"
        description="Learn about NxtFi's comprehensive compliance measures including GDPR, CCPA, AML, KYC policies, and regulatory adherence."
        keywords="nxtfi compliance, regulatory compliance, GDPR, CCPA, AML, KYC, data protection"
        type="website"
      />
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <div className="flex justify-center mb-6">
                  <Scale className="w-16 h-16 text-primary" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Compliance at NxtFi
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Regulatory Commitment: NxtFi operates in full compliance with all applicable laws and regulations across the jurisdictions we serve.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Badge variant="secondary" className="text-sm">
                    GDPR Compliance In Progress
                  </Badge>
                  <Badge variant="secondary" className="text-sm">
                    CCPA Alignment Ongoing
                  </Badge>
                </div>
                <Badge variant="outline" className="text-sm">
                  Last updated: December 11, 2024
                </Badge>
              </div>
            </div>
          </section>

          {/* Compliance Status */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Compliance Status
                </h2>
                <p className="text-xl text-muted-foreground">
                  NxtFi is currently implementing comprehensive privacy measures while pursuing full regulatory certifications.
                </p>
              </div>
              
              <Card className="max-w-4xl mx-auto bg-primary/5 border-primary/20">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">GDPR Compliance</h3>
                      <Badge variant="secondary">In Progress</Badge>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">CCPA Alignment</h3>
                      <Badge variant="secondary">Ongoing</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Compliance Areas */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our Compliance Framework
                </h2>
                <p className="text-xl text-muted-foreground">
                  Comprehensive measures to ensure regulatory adherence and protect your rights.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {complianceAreas.map((area, index) => {
                  const Icon = area.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{area.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {area.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* User Rights */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Your Rights
                </h2>
                <p className="text-xl text-muted-foreground">
                  We respect and protect your rights regarding your personal data and privacy.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {userRights.map((right, index) => {
                  const Icon = right.icon;
                  return (
                    <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-semibold mb-2">{right.title}</h3>
                        <p className="text-sm text-muted-foreground">{right.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Contact Compliance Team */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Card className="bg-card border border-border">
                  <CardContent className="p-8 text-center">
                    <h2 className="text-3xl font-bold mb-6">Contact Our Compliance Team</h2>
                    <p className="text-xl text-muted-foreground mb-8">
                      For compliance-related inquiries or to report any concerns, please reach out to us.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button 
                        size="lg" 
                        className="bg-primary hover:bg-primary/90"
                        onClick={() => window.location.href = '/contact'}
                      >
                        Submit Inquiry
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline"
                        onClick={() => window.location.href = 'mailto:compliance@nxtfi.xyz'}
                      >
                        Email Compliance Team
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-6">
                      compliance@nxtfi.xyz
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

export default Compliance;