import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, MessageCircle, Headphones } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      content: "support@nxtfi.xyz",
      description: "24/7 email support"
    },
    {
      icon: Phone,
      title: "Phone Support", 
      content: "+1 (555) 123-4567",
      description: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: MapPin,
      title: "Office Location",
      content: "Dubai, UAE",
      description: "Visit our headquarters"
    }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: "General Inquiries",
      description: "Questions about our services and platform"
    },
    {
      icon: Clock,
      title: "Partnership",
      description: "Explore partnership opportunities"
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Get help with integration and technical issues"
    }
  ];

  return (
    <>
      <SEO
        title="Contact Us - NxtFi | Crypto Payment Solutions"
        description="Get in touch with NxtFi for crypto payment integration support. 24/7 customer service, technical support, and partnership inquiries."
        keywords="nxtfi contact, crypto payment support, technical support, partnership"
        type="website"
      />
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Get in Touch
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Have questions about NxtFi? We're here to help you integrate crypto payments 
                  and transform your business.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Info Cards */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                      <CardContent className="p-8">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                        <p className="text-foreground font-medium mb-1">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Contact Form & Support Options */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Contact Form */}
                <ContactForm />

                {/* Support Options */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">How Can We Help?</h2>
                    <p className="text-muted-foreground mb-8">
                      Choose the type of support you need and we'll connect you with the right team.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {supportOptions.map((option, index) => {
                      const Icon = option.icon;
                      return (
                        <Card key={index} className="hover:shadow-md transition-shadow">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Icon className="w-6 h-6 text-primary" />
                              </div>
                              <div>
                                <h3 className="font-semibold mb-1">{option.title}</h3>
                                <p className="text-sm text-muted-foreground">{option.description}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>

                  {/* FAQ Link */}
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-6 text-center">
                      <h3 className="font-semibold mb-2">Quick Answers</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Check our FAQ section for immediate answers to common questions.
                      </p>
                      <a href="/docs" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3">
                        View FAQ
                      </a>
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

export default Contact;