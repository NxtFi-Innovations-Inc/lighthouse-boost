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


          {/* Contact Form */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto">
                <ContactForm />

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