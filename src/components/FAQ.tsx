import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "What cryptocurrencies does NxtFi support?",
      answer: "NxtFi supports over 50 major cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), USDT, USDC, and many others. We continuously add support for new cryptocurrencies based on market demand."
    },
    {
      question: "How quickly are crypto payments converted to fiat?",
      answer: "Crypto payments are converted to fiat currency instantly upon confirmation on the blockchain. The converted fiat amount is settled to your bank account within 1-2 business days."
    },
    {
      question: "What are the transaction fees?",
      answer: "Our competitive transaction fees start at 1.5% per transaction. Volume-based discounts are available for high-volume merchants. Contact our sales team for custom pricing."
    },
    {
      question: "Is NxtFi secure?",
      answer: "Yes, NxtFi employs bank-grade security measures including SSL encryption, multi-signature wallets, cold storage for crypto assets, and compliance with international security standards."
    },
    {
      question: "How do I integrate NxtFi into my existing system?",
      answer: "Integration is simple with our comprehensive API, plugins for popular e-commerce platforms, and detailed documentation. Most integrations can be completed in under an hour."
    },
    {
      question: "What countries does NxtFi operate in?",
      answer: "NxtFi currently operates in 25+ countries with plans to expand to 150+ countries by 2025. Check our supported countries list or contact us to confirm availability in your region."
    },
    {
      question: "Do you provide customer support?",
      answer: "Yes, we offer 24/7 customer support via email, chat, and phone. Our technical support team is also available to help with integration and technical issues."
    },
    {
      question: "Can I customize the payment interface?",
      answer: "Absolutely! Our payment interface is fully customizable to match your brand. You can customize colors, logos, and the overall user experience."
    }
  ];

  return (
    <section id="faq-section" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about NxtFi's crypto payment solutions.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};