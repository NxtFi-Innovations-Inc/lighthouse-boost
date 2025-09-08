import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <>
      <SEO 
        title="Terms of Service - NxtFi"
        description="Terms of Service and legal conditions for using NxtFi's crypto-to-fiat payment platform and services."
      />
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: March 15, 2024</p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <p className="mb-4">
                  By accessing and using NxtFi's services, you accept and agree to be bound by the terms and provision of this agreement. These Terms of Service ("Terms") govern your use of the NxtFi platform, including our website, mobile applications, and payment processing services.
                </p>
                <p className="mb-4">
                  If you do not agree with any part of these terms, then you may not access or use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
                <p className="mb-4">
                  NxtFi provides a crypto-to-fiat payment processing platform that enables businesses to accept cryptocurrency payments and receive fiat currency settlements. Our services include:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Payment processing for multiple cryptocurrencies</li>
                  <li>Real-time conversion to fiat currencies</li>
                  <li>Merchant dashboard and analytics</li>
                  <li>API and SDK integrations</li>
                  <li>Mobile wallet application</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
                <p className="mb-4">
                  To access certain features of our service, you must create an account. You are responsible for:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Immediately notifying us of any unauthorized use</li>
                  <li>Providing accurate and complete information</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use</h2>
                <p className="mb-4">
                  You agree not to use our services for any unlawful purpose or in any way that could damage, disable, or impair our services. Prohibited uses include:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Money laundering or terrorist financing</li>
                  <li>Fraud or illegal gambling</li>
                  <li>Sale of illegal goods or services</li>
                  <li>Violation of any applicable laws or regulations</li>
                  <li>Interference with our security measures</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Fees and Payments</h2>
                <p className="mb-4">
                  Our fees are clearly disclosed on our pricing page and in your merchant agreement. By using our services, you agree to pay all applicable fees. Fees may include:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Transaction processing fees</li>
                  <li>Currency conversion fees</li>
                  <li>Settlement fees</li>
                  <li>Chargeback fees</li>
                </ul>
                <p className="mb-4">
                  We reserve the right to modify our fees with 30 days' notice to users.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Privacy and Data Protection</h2>
                <p className="mb-4">
                  Your privacy is important to us. Our collection, use, and disclosure of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
                <p className="mb-4">
                  The NxtFi platform and its content are protected by intellectual property laws. You may not:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Copy, modify, or distribute our software or content</li>
                  <li>Reverse engineer our platform</li>
                  <li>Use our trademarks without permission</li>
                  <li>Create derivative works</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">8. Disclaimers and Limitation of Liability</h2>
                <p className="mb-4">
                  Our services are provided "as is" without warranties of any kind. We disclaim all warranties, express or implied, including warranties of merchantability and fitness for a particular purpose.
                </p>
                <p className="mb-4">
                  In no event shall NxtFi be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">9. Risk Disclosures</h2>
                <p className="mb-4">
                  Cryptocurrency transactions involve inherent risks, including but not limited to:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Price volatility</li>
                  <li>Regulatory changes</li>
                  <li>Technical risks</li>
                  <li>Market risks</li>
                </ul>
                <p className="mb-4">
                  You acknowledge these risks and agree that NxtFi is not responsible for any losses resulting from market conditions or cryptocurrency volatility.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">10. Compliance and KYC</h2>
                <p className="mb-4">
                  We are committed to compliance with all applicable laws and regulations. You agree to provide accurate information for Know Your Customer (KYC) and Anti-Money Laundering (AML) procedures as required.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">11. Termination</h2>
                <p className="mb-4">
                  Either party may terminate this agreement at any time with or without cause. Upon termination:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Your access to our services will cease</li>
                  <li>Outstanding transactions will be completed</li>
                  <li>Any pending settlements will be processed</li>
                  <li>You remain liable for all fees and obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">12. Governing Law</h2>
                <p className="mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">13. Dispute Resolution</h2>
                <p className="mb-4">
                  Any disputes arising under these Terms shall be resolved through binding arbitration rather than in court, except that you may assert claims in small claims court if your claims qualify.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">14. Changes to Terms</h2>
                <p className="mb-4">
                  We reserve the right to modify these Terms at any time. We will notify users of any material changes via email or through our platform. Continued use of our services after such changes constitutes acceptance of the new Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">15. Severability</h2>
                <p className="mb-4">
                  If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">16. Contact Information</h2>
                <p className="mb-4">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <ul className="list-none pl-0 mb-4">
                  <li>Email: legal@nxtfi.xyz</li>
                  <li>Address: [Company Address]</li>
                  <li>Phone: [Phone Number]</li>
                </ul>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Terms;