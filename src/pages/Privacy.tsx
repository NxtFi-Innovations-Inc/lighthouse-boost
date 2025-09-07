import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, Users, FileText, AlertCircle, Mail } from "lucide-react";

export default function Privacy() {
  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: Eye,
      content: [
        "Personal information you provide when creating an account (name, email address, phone number)",
        "Transaction data and payment information processed through our platform",
        "Technical information including IP address, device type, and browser information",
        "Usage data about how you interact with our services",
        "KYC (Know Your Customer) documentation required for compliance"
      ]
    },
    {
      id: "information-use",
      title: "How We Use Your Information",
      icon: FileText,
      content: [
        "Process cryptocurrency transactions and conversions",
        "Verify your identity and prevent fraud",
        "Provide customer support and technical assistance",
        "Comply with legal and regulatory requirements",
        "Improve our services and develop new features",
        "Send important updates about your account and our services"
      ]
    },
    {
      id: "information-sharing",
      title: "Information Sharing",
      icon: Users,
      content: [
        "We do not sell, trade, or rent your personal information to third parties",
        "We may share information with trusted service providers who assist in our operations",
        "Legal compliance: We may disclose information when required by law",
        "Business transfers: Information may be transferred in case of merger or acquisition",
        "With your consent: We may share information for purposes you explicitly approve"
      ]
    },
    {
      id: "data-security",
      title: "Data Security",
      icon: Lock,
      content: [
        "End-to-end encryption for all sensitive data transmission",
        "Multi-signature technology for cryptocurrency transactions",
        "Regular security audits and penetration testing",
        "Secure data centers with 24/7 monitoring",
        "Employee access controls and regular security training",
        "Compliance with industry-standard security frameworks"
      ]
    },
    {
      id: "user-rights",
      title: "Your Rights",
      icon: Shield,
      content: [
        "Access: Request a copy of the personal information we hold about you",
        "Correction: Request correction of inaccurate or incomplete information",
        "Deletion: Request deletion of your personal information (subject to legal requirements)",
        "Portability: Request transfer of your data to another service provider",
        "Objection: Object to processing of your personal information in certain circumstances"
      ]
    },
    {
      id: "cookies",
      title: "Cookies and Tracking",
      icon: AlertCircle,
      content: [
        "Essential cookies required for basic functionality",
        "Analytics cookies to understand how you use our service",
        "Preference cookies to remember your settings",
        "You can control cookie settings through your browser",
        "Some features may not work properly if cookies are disabled"
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Privacy Policy - NxtFi | Data Protection & Security"
        description="Learn how NxtFi protects your personal information and transaction data. Comprehensive privacy policy covering data collection, usage, and your rights."
        
        type="website"
      />
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Privacy Policy
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Your privacy and data security are our top priorities. Learn how we collect, 
                  use, and protect your information.
                </p>
                <p className="text-sm text-muted-foreground mt-6">
                  Last updated: January 2024
                </p>
              </div>
            </div>
          </section>

          {/* Introduction */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">Our Commitment to Privacy</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      At NxtFi, we understand that trust is fundamental to our relationship with you. 
                      This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                      information when you use our cryptocurrency payment platform.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      We are committed to maintaining the highest standards of data protection and 
                      compliance with applicable privacy laws, including GDPR, CCPA, and other 
                      relevant regulations.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Privacy Sections */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto space-y-8">
                {sections.map((section, index) => {
                  const Icon = section.icon;
                  return (
                    <Card key={index} id={section.id}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-xl">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          {section.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {section.content.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground leading-relaxed">{item}</span>
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

          {/* Contact for Privacy */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Card>
                  <CardContent className="p-8 text-center">
                    <h2 className="text-2xl font-bold mb-4">Questions About Privacy?</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      If you have any questions about this Privacy Policy or our data practices, 
                      please don't hesitate to contact our Data Protection Officer.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="w-4 h-4 text-primary" />
                        <span>privacy@nxtfi.xyz</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Shield className="w-4 h-4 text-primary" />
                        <span>Data Protection Officer</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Table of Contents */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Navigation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {sections.map((section, index) => {
                        const Icon = section.icon;
                        return (
                          <a
                            key={index}
                            href={`#${section.id}`}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                          >
                            <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm font-medium">{section.title}</span>
                          </a>
                        );
                      })}
                    </div>
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
}