import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Shield, Headphones } from "lucide-react";

const Pricing = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEO 
        title="Pricing Plans - NxtFi Crypto Payment Platform"
        description="Transparent pricing for NxtFi's crypto-to-fiat payment platform. Free wallet app, competitive merchant fees, and custom API solutions for all business sizes."
      />
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold mb-4">
                Simple, <span className="text-primary">Transparent</span> Pricing
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Choose the perfect plan for your business. No hidden fees, no surprises.
              </p>
              <div className="flex justify-center mb-8">
                <Badge variant="secondary" className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  30-day money-back guarantee
                </Badge>
              </div>
            </div>
          </section>

          {/* Pricing Cards */}
          <section className="py-16 px-4 bg-muted/30">
            <div className="container mx-auto max-w-6xl">
              <div className="grid gap-8 md:grid-cols-3">
                {/* Free Plan */}
                <Card className="relative">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">NxtFi Wallet</CardTitle>
                    <CardDescription>For individual users and crypto enthusiasts</CardDescription>
                    <div className="py-4">
                      <span className="text-4xl font-bold">Free</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        <span>Multi-currency support</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        <span>Bank-grade security</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        <span>QR code payments</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        <span>Transaction history</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        <span>24/7 customer support</span>
                      </li>
                    </ul>
                    <Button 
                      onClick={() => window.location.href = '/#early-access'}
                      className="w-full"
                      variant="outline"
                    >
                      Download App
                    </Button>
                  </CardContent>
                </Card>

                {/* Business Plan */}
                <Card className="relative border-primary shadow-lg">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Most Popular
                    </Badge>
                  </div>
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">Merchant Portal</CardTitle>
                    <CardDescription>Perfect for businesses accepting crypto payments</CardDescription>
                    <div className="py-4">
                      <span className="text-4xl font-bold">2.5%</span>
                      <span className="text-muted-foreground"> per transaction</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        <span>Real-time dashboard</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        <span>Instant settlements</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        <span>Fraud protection</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        <span>Analytics & reporting</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        <span>E-commerce integrations</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        <span>Priority support</span>
                      </li>
                    </ul>
    <Button 
                      onClick={() => window.location.href = '/#early-access'}
                      className="w-full"
                    >
                      Start Free Trial
                    </Button>
                  </CardContent>
                </Card>

                {/* Enterprise Plan */}
                <Card className="relative">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">NxtFi API</CardTitle>
                    <CardDescription>For developers and large enterprises</CardDescription>
                    <div className="py-4">
                      <span className="text-4xl font-bold">Custom</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        <span>RESTful APIs</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        <span>Webhook support</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        <span>Sandbox environment</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        <span>Custom integrations</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        <span>Dedicated support</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        <span>SLA guarantees</span>
                      </li>
                    </ul>
                    <Button 
                      onClick={() => window.location.href = '/contact'}
                      className="w-full"
                      variant="outline"
                    >
                      Contact Sales
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Features Comparison */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Compare Features</h2>
                <p className="text-xl text-muted-foreground">
                  See what's included in each plan
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">Feature</th>
                      <th className="text-center p-4">Wallet</th>
                      <th className="text-center p-4">Merchant</th>
                      <th className="text-center p-4">API</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4">Multi-currency support</td>
                      <td className="text-center p-4"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                      <td className="text-center p-4"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                      <td className="text-center p-4"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Real-time dashboard</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                      <td className="text-center p-4"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">API access</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">Basic</td>
                      <td className="text-center p-4">Full</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Transaction volume</td>
                      <td className="text-center p-4">Unlimited</td>
                      <td className="text-center p-4">Unlimited</td>
                      <td className="text-center p-4">Unlimited</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Settlement time</td>
                      <td className="text-center p-4">Instant</td>
                      <td className="text-center p-4">24 hours</td>
                      <td className="text-center p-4">Custom</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Support</td>
                      <td className="text-center p-4">Community</td>
                      <td className="text-center p-4">Priority</td>
                      <td className="text-center p-4">Dedicated</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 px-4 bg-muted/30">
            <div className="container mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-xl text-muted-foreground">
                  Got questions? We've got answers.
                </p>
              </div>

              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Are there any setup fees?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>No, there are no setup fees for any of our plans. You can get started immediately without any upfront costs.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Can I change plans later?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any differences.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>What cryptocurrencies do you support?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>We support Bitcoin (BTC), Ethereum (ETH), Tether (USDT), and over 50 other major cryptocurrencies. New currencies are added regularly.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>How fast are settlements?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Merchant Portal settlements are processed within 24 hours. Enterprise customers can get custom settlement schedules including same-day processing.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Is there a money-back guarantee?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Yes, we offer a 30-day money-back guarantee on all paid plans. If you're not satisfied, we'll refund your payment in full.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of businesses already using NxtFi for crypto payments
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.location.href = '/#early-access'}
                  size="lg"
                  className="flex items-center gap-2"
                >
                  <Zap className="w-5 h-5" />
                  Start Free Trial
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.location.href = '/contact'}
                  className="flex items-center gap-2"
                >
                  <Headphones className="w-5 h-5" />
                  Talk to Sales
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Pricing;