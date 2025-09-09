import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { useParams, Link } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  
  // Mock blog post data - in a real app, this would be fetched based on the ID
  const blogPosts = {
    "1": {
      title: "The Future of Crypto Payments: Trends to Watch in 2024",
      content: `
        <p>The cryptocurrency payment landscape is evolving rapidly, with 2024 marking a pivotal year for mainstream adoption. As businesses worldwide recognize the benefits of accepting digital currencies, several key trends are shaping the future of crypto payments.</p>
        
        <h2>1. Institutional Adoption Accelerates</h2>
        <p>Major corporations are increasingly integrating cryptocurrency payment options into their platforms. This institutional backing provides legitimacy and drives consumer confidence in crypto transactions.</p>
        
        <h2>2. Regulatory Clarity Emerges</h2>
        <p>Governments worldwide are developing clearer regulatory frameworks for cryptocurrency payments, reducing uncertainty and encouraging business adoption.</p>
        
        <h2>3. Lightning Network and Layer 2 Solutions</h2>
        <p>The implementation of Lightning Network and other Layer 2 solutions is making Bitcoin and other cryptocurrency transactions faster and more cost-effective for everyday payments.</p>
        
        <h2>4. Stablecoin Integration</h2>
        <p>Stablecoins are becoming the preferred medium for crypto payments due to their price stability, making them ideal for business transactions.</p>
        
        <h2>5. Enhanced Security Measures</h2>
        <p>Advanced security protocols and multi-signature wallets are making crypto payments more secure than ever, addressing one of the primary concerns of businesses.</p>
        
        <p>As we move forward, the integration of these trends will continue to drive the adoption of cryptocurrency payments, making them an essential part of the global financial ecosystem.</p>
      `,
      category: "Industry Insights",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
      author: "NxtFi Team"
    },
    "2": {
      title: "How to Integrate NxtFi API in Your E-commerce Platform",
      content: `
        <p>Integrating cryptocurrency payments into your e-commerce platform has never been easier with NxtFi's comprehensive API. This step-by-step guide will walk you through the entire integration process.</p>
        
        <h2>Getting Started</h2>
        <p>Before you begin, ensure you have:</p>
        <ul>
          <li>A verified NxtFi merchant account</li>
          <li>API credentials from your dashboard</li>
          <li>Basic understanding of REST APIs</li>
        </ul>
        
        <h2>Step 1: API Authentication</h2>
        <p>All API requests require authentication using your unique API key. Include this in the header of every request:</p>
        <pre><code>Authorization: Bearer YOUR_API_KEY</code></pre>
        
        <h2>Step 2: Creating a Payment Intent</h2>
        <p>To accept a crypto payment, first create a payment intent by sending a POST request to our payments endpoint with the transaction details.</p>
        
        <h2>Step 3: Handling Webhooks</h2>
        <p>Set up webhook endpoints to receive real-time updates about payment status changes. This ensures your system stays synchronized with payment confirmations.</p>
        
        <h2>Step 4: Testing Your Integration</h2>
        <p>Use our sandbox environment to test your integration thoroughly before going live. This allows you to simulate various payment scenarios safely.</p>
        
        <p>Need help with integration? Our developer support team is available 24/7 to assist you with any technical questions.</p>
      `,
      category: "Technical Guide",
      date: "March 12, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
      author: "Dev Team"
    },
    "3": {
      title: "Understanding Crypto-to-Fiat Conversion: Benefits and Challenges",
      content: `
        <p>Crypto-to-fiat conversion is the backbone of modern cryptocurrency payment systems, enabling businesses to accept digital currencies while receiving traditional money in their bank accounts.</p>
        
        <h2>How It Works</h2>
        <p>When a customer pays with cryptocurrency, the payment processor immediately converts the digital currency to fiat money at current market rates, protecting merchants from volatility.</p>
        
        <h2>Key Benefits</h2>
        <ul>
          <li><strong>Volatility Protection:</strong> Merchants receive stable fiat currency</li>
          <li><strong>Global Reach:</strong> Accept payments from anywhere in the world</li>
          <li><strong>Lower Fees:</strong> Reduced transaction costs compared to traditional payment methods</li>
          <li><strong>Faster Settlements:</strong> Receive funds in your account within 24-48 hours</li>
        </ul>
        
        <h2>Challenges to Consider</h2>
        <ul>
          <li>Market volatility during conversion</li>
          <li>Regulatory compliance requirements</li>
          <li>Technical integration complexity</li>
          <li>Customer education needs</li>
        </ul>
        
        <h2>Best Practices</h2>
        <p>To maximize the benefits of crypto-to-fiat conversion:</p>
        <ol>
          <li>Choose a reliable payment processor with competitive conversion rates</li>
          <li>Implement real-time conversion to minimize volatility exposure</li>
          <li>Maintain compliance with local regulations</li>
          <li>Educate your customers about the payment process</li>
        </ol>
        
        <p>With proper implementation, crypto-to-fiat conversion can significantly expand your business opportunities while maintaining financial stability.</p>
      `,
      category: "Education",
      date: "March 10, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",
      author: "Finance Team"
    }
  };

  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={`${post.title} - NxtFi Blog`}
        description={post.content.substring(0, 160).replace(/<[^>]*>/g, '')}
        type="article"
        keywords={`${post.category.toLowerCase()}, crypto payments, blockchain, nxtfi`}
      />
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="pt-20">
          {/* Back Button */}
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-4xl">
              <Link to="/blog">
                <Button variant="ghost" className="flex items-center gap-2 mb-6">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Button>
              </Link>
            </div>
          </section>

          {/* Article Header */}
          <section className="px-4">
            <div className="container mx-auto max-w-4xl">
              <div className="mb-8">
                <Badge className="mb-4">{post.category}</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  {post.title}
                </h1>
                <div className="flex items-center gap-6 text-muted-foreground mb-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                  <div>By {post.author}</div>
                </div>
                <Button variant="outline" className="flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Share Article
                </Button>
              </div>
            </div>
          </section>

          {/* Featured Image */}
          <section className="px-4 mb-12">
            <div className="container mx-auto max-w-4xl">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </div>
          </section>

          {/* Article Content */}
          <section className="px-4 pb-16">
            <div className="container mx-auto max-w-4xl">
              <div 
                className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 bg-muted/30">
            <div className="container mx-auto max-w-4xl text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-8">
                Join thousands of businesses already using NxtFi for crypto payments
              </p>
              <Link to="/#early-access">
                <Button size="lg">Start Your Integration</Button>
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;