import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  Vault, 
  UserCheck, 
  Monitor, 
  Key,
  CheckCircle,
  Server,
  HardDrive,
  Users
} from "lucide-react";

const Security = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: "Data Encryption",
      description: "All data transmitted between your device and our servers is encrypted using TLS 1.3. Sensitive information is encrypted at rest using AES-256."
    },
    {
      icon: UserCheck,
      title: "Multi-Factor Authentication",
      description: "MFA required for administrative access with support for TOTP, biometric authentication, and email verification."
    },
    {
      icon: Eye,
      title: "Security Testing",
      description: "Regular internal security reviews, automated vulnerability scanning, and secure development lifecycle practices."
    },
    {
      icon: AlertTriangle,
      title: "Fraud Prevention",
      description: "Advanced fraud detection with transaction monitoring, device fingerprinting, and machine learning algorithms."
    },
    {
      icon: Vault,
      title: "Cryptocurrency Storage",
      description: "Majority of assets held in secure offline cold storage with conservative hot wallet limits and secure key management."
    },
    {
      icon: CheckCircle,
      title: "Compliance",
      description: "Working towards ISO 27001 certification, implementing SOC 2 Type II controls, and maintaining regulatory compliance."
    },
    {
      icon: Key,
      title: "Access Controls",
      description: "Role-based access control with least privilege principles, comprehensive activity logging, and employee background checks."
    },
    {
      icon: Monitor,
      title: "Incident Response",
      description: "24/7 monitoring of critical systems with documented incident response and breach notification procedures."
    },
    {
      icon: Server,
      title: "Physical Security",
      description: "Controlled access to sensitive areas and environmental controls for critical infrastructure protection."
    },
    {
      icon: Users,
      title: "Security Awareness",
      description: "Comprehensive security training for all employees including onboarding and regular awareness updates."
    },
    {
      icon: HardDrive,
      title: "Business Continuity",
      description: "Robust data backup procedures and system redundancy to ensure continuous operations."
    }
  ];

  const userSecurityTips = [
    "Enable MFA on your account",
    "Use strong, unique passwords",
    "Keep your devices secure and updated",
    "Be vigilant against phishing attempts",
    "Report any suspicious activity immediately"
  ];

  return (
    <>
      <SEO
        title="Security - NxtFi | Industry-Leading Security Measures"
        description="Learn about NxtFi's comprehensive security measures including data encryption, fraud prevention, and compliance standards."
        keywords="nxtfi security, crypto security, payment security, data protection, compliance"
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
                  <Shield className="w-16 h-16 text-primary" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Security at NxtFi
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Your Security Matters: We employ industry-leading measures to protect your data and transactions.
                </p>
                <Badge variant="secondary" className="text-sm">
                  Last updated: December 11, 2024
                </Badge>
              </div>
            </div>
          </section>

          {/* Security Features Grid */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {securityFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Your Role in Security */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Your Role in Security
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    While we implement robust security measures, users also play a critical role in maintaining security.
                  </p>
                </div>
                
                <Card className="bg-card border border-border">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-6">Security Best Practices</h3>
                        <ul className="space-y-4">
                          {userSecurityTips.map((tip, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                              <span className="text-muted-foreground">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-6">Contact Security Team</h3>
                        <p className="text-muted-foreground mb-6">
                          For security-related inquiries or to report a vulnerability, contact our security team.
                        </p>
                        <Button 
                          className="bg-primary hover:bg-primary/90"
                          onClick={() => window.location.href = '/contact'}
                        >
                          Report Security Issue
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Compliance Status */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Compliance & Certifications
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                  NxtFi is committed to maintaining the highest standards of security and compliance.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">ISO 27001</h3>
                      <Badge variant="secondary">In Progress</Badge>
                    </CardContent>
                  </Card>
                  
                  <Card className="text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Lock className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">SOC 2 Type II</h3>
                      <Badge variant="secondary">Implementing</Badge>
                    </CardContent>
                  </Card>
                  
                  <Card className="text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">Regulatory Compliance</h3>
                      <Badge variant="secondary">Active</Badge>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Security;