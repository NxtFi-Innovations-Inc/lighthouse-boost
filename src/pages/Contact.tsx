import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin, Send, MessageSquare, Users, Headphones } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
      icon: MessageSquare,
      title: "General Inquiries",
      description: "Questions about our services and platform"
    },
    {
      icon: Users,
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
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Send us a Message</CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.email@company.com"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="What can we help you with?"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us more about your inquiry..."
                        />
                      </div>
                      
                      <Button type="submit" className="w-full" size="lg">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>

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
                      <Button variant="outline" size="sm">
                        View FAQ
                      </Button>
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
}