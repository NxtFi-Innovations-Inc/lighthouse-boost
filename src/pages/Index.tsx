import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Problems } from "@/components/Problems";
import { Products } from "@/components/Products";
import { HowItWorks } from "@/components/HowItWorks";
import { EarlyAccess } from "@/components/EarlyAccess";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";

const Index = () => {
  return (
    <>
      <SEO />
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <Hero />
          <section id="features">
            <Features />
          </section>
          <Problems />
          <section id="products">
            <Products />
          </section>
          <section id="how-it-works">
            <HowItWorks />
          </section>
          <EarlyAccess />
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </>
  );
};

export default Index;
