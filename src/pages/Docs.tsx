import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Code, Play, Shield, Zap } from "lucide-react";

const Docs = () => {
  return (
    <>
      <SEO 
        title="API Documentation - NxtFi Developer Resources"
        description="Comprehensive API documentation for NxtFi crypto-to-fiat payment platform. RESTful APIs, SDKs, webhooks, and integration guides for developers."
      />
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold mb-4">
                Developer <span className="text-primary">Documentation</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Integrate NxtFi's crypto-to-fiat payment platform with our powerful APIs and SDKs
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Bank-grade Security
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Real-time Processing
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  RESTful APIs
                </Badge>
              </div>
            </div>
          </section>

          {/* API Documentation */}
          <section className="py-16 px-4 bg-muted/30">
            <div className="container mx-auto max-w-6xl">
              <Tabs defaultValue="getting-started" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
                  <TabsTrigger value="api-reference">API Reference</TabsTrigger>
                  <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
                  <TabsTrigger value="sdks">SDKs</TabsTrigger>
                </TabsList>

                <TabsContent value="getting-started" className="mt-8">
                  <div className="grid gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Play className="w-5 h-5" />
                          Quick Start Guide
                        </CardTitle>
                        <CardDescription>
                          Get up and running with NxtFi API in minutes
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="bg-muted p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">1. Get API Keys</h4>
                          <p className="text-sm text-muted-foreground">
                            Sign up for a developer account and generate your API keys from the dashboard.
                          </p>
                        </div>
                        <div className="bg-muted p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">2. Make Your First Request</h4>
                          <pre className="bg-background p-3 rounded text-sm overflow-x-auto">
                            <code>{`curl -X POST https://api.nxtfi.xyz/v1/payments \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 100.00,
    "currency": "USD",
    "crypto_currency": "BTC"
  }'`}</code>
                          </pre>
                        </div>
                        <div className="bg-muted p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">3. Handle Webhooks</h4>
                          <p className="text-sm text-muted-foreground">
                            Set up webhook endpoints to receive real-time payment notifications.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="api-reference" className="mt-8">
                  <div className="grid gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Payments API</CardTitle>
                        <CardDescription>Create and manage crypto-to-fiat payments</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="border-l-4 border-primary pl-4">
                            <h4 className="font-semibold">POST /v1/payments</h4>
                            <p className="text-sm text-muted-foreground">Create a new payment request</p>
                          </div>
                          <div className="border-l-4 border-secondary pl-4">
                            <h4 className="font-semibold">GET /v1/payments/[id]</h4>
                            <p className="text-sm text-muted-foreground">Retrieve payment details</p>
                          </div>
                          <div className="border-l-4 border-accent pl-4">
                            <h4 className="font-semibold">GET /v1/payments</h4>
                            <p className="text-sm text-muted-foreground">List all payments</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Exchange Rates API</CardTitle>
                        <CardDescription>Get real-time crypto to fiat exchange rates</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="border-l-4 border-primary pl-4">
                            <h4 className="font-semibold">GET /v1/rates</h4>
                            <p className="text-sm text-muted-foreground">Get current exchange rates</p>
                          </div>
                          <div className="border-l-4 border-secondary pl-4">
                            <h4 className="font-semibold">GET /v1/rates/[crypto]/[fiat]</h4>
                            <p className="text-sm text-muted-foreground">Get specific rate pair</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="webhooks" className="mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Webhook Events</CardTitle>
                      <CardDescription>Real-time notifications for payment events</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-muted p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">payment.created</h4>
                          <p className="text-sm text-muted-foreground">Triggered when a new payment is created</p>
                        </div>
                        <div className="bg-muted p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">payment.confirmed</h4>
                          <p className="text-sm text-muted-foreground">Triggered when payment is confirmed on blockchain</p>
                        </div>
                        <div className="bg-muted p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">payment.completed</h4>
                          <p className="text-sm text-muted-foreground">Triggered when fiat is deposited to merchant account</p>
                        </div>
                        <div className="bg-muted p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">payment.failed</h4>
                          <p className="text-sm text-muted-foreground">Triggered when payment processing fails</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="sdks" className="mt-8">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <CardTitle>JavaScript SDK</CardTitle>
                        <CardDescription>For web and Node.js applications</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
                          <code>{`npm install @nxtfi/sdk`}</code>
                        </pre>
                        <div className="mt-4">
                          <pre className="bg-background p-3 rounded text-sm overflow-x-auto">
                            <code>{`import { NxtFi } from '@nxtfi/sdk';

const nxtfi = new NxtFi({
  apiKey: 'your-api-key',
  environment: 'sandbox'
});

const payment = await nxtfi.payments.create({
  amount: 100.00,
  currency: 'USD',
  cryptoCurrency: 'BTC'
});`}</code>
                          </pre>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Python SDK</CardTitle>
                        <CardDescription>For Python applications and data science</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
                          <code>{`pip install nxtfi-python`}</code>
                        </pre>
                        <div className="mt-4">
                          <pre className="bg-background p-3 rounded text-sm overflow-x-auto">
                            <code>{`import nxtfi

client = nxtfi.Client(
    api_key="your-api-key",
    environment="sandbox"
)

payment = client.payments.create(
    amount=100.00,
    currency="USD",
    crypto_currency="BTC"
)`}</code>
                          </pre>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>PHP SDK</CardTitle>
                        <CardDescription>For PHP and Laravel applications</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
                          <code>{`composer require nxtfi/php-sdk`}</code>
                        </pre>
                        <div className="mt-4">
                          <pre className="bg-background p-3 rounded text-sm overflow-x-auto">
                            <code>{`use NxtFi\\Client;

$nxtfi = new Client([
    'api_key' => 'your-api-key',
    'environment' => 'sandbox'
]);

$payment = $nxtfi->payments->create([
    'amount' => 100.00,
    'currency' => 'USD',
    'crypto_currency' => 'BTC'
]);`}</code>
                          </pre>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Mobile SDKs</CardTitle>
                        <CardDescription>iOS and Android native SDKs</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">iOS (Swift)</h4>
                            <pre className="bg-muted p-3 rounded text-sm">
                              <code>pod 'NxtFiSDK'</code>
                            </pre>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Android (Kotlin)</h4>
                            <pre className="bg-muted p-3 rounded text-sm">
                              <code>implementation 'com.nxtfi:android-sdk:1.0.0'</code>
                            </pre>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* Support Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our developer support team is here to help you integrate successfully
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>24/7 Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Get help from our expert developers around the clock
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Sandbox Environment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Test your integration safely with our sandbox APIs
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Community</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Join our developer community for tips and best practices
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

export default Docs;