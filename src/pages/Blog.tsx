import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Crypto Payments: Trends to Watch in 2024",
      excerpt: "Explore the latest trends shaping the cryptocurrency payment landscape and how businesses can prepare for the future.",
      category: "Industry Insights",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "/placeholder.svg",
      featured: true
    },
    {
      id: 2,
      title: "How to Integrate NxtFi API in Your E-commerce Platform",
      excerpt: "A step-by-step guide to implementing crypto payments in your online store using NxtFi's powerful API.",
      category: "Technical Guide",
      date: "March 12, 2024",
      readTime: "8 min read",
      image: "/placeholder.svg",
      featured: false
    },
    {
      id: 3,
      title: "Understanding Crypto-to-Fiat Conversion: Benefits and Challenges",
      excerpt: "Deep dive into the mechanics of cryptocurrency conversion and why businesses are adopting this technology.",
      category: "Education",
      date: "March 10, 2024",
      readTime: "6 min read",
      image: "/placeholder.svg",
      featured: false
    },
    {
      id: 4,
      title: "Security Best Practices for Crypto Payment Processing",
      excerpt: "Essential security measures every business should implement when handling cryptocurrency transactions.",
      category: "Security",
      date: "March 8, 2024",
      readTime: "7 min read",
      image: "/placeholder.svg",
      featured: false
    },
    {
      id: 5,
      title: "Case Study: How Small Businesses Benefit from Crypto Payments",
      excerpt: "Real-world examples of small businesses that have successfully integrated cryptocurrency payments.",
      category: "Case Study",
      date: "March 5, 2024",
      readTime: "4 min read",
      image: "/placeholder.svg",
      featured: false
    },
    {
      id: 6,
      title: "The Economics of Cryptocurrency: Market Analysis 2024",
      excerpt: "Comprehensive analysis of current cryptocurrency market trends and their impact on payment processing.",
      category: "Market Analysis",
      date: "March 3, 2024",
      readTime: "9 min read",
      image: "/placeholder.svg",
      featured: false
    }
  ];

  const categories = ["All", "Industry Insights", "Technical Guide", "Education", "Security", "Case Study", "Market Analysis"];

  return (
    <>
      <SEO 
        title="Blog - NxtFi Crypto Payment Insights"
        description="Stay updated with the latest trends, guides, and insights about cryptocurrency payments, blockchain technology, and fintech innovations from NxtFi experts."
      />
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold mb-4">
                NxtFi <span className="text-primary">Blog</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Insights, guides, and the latest trends in cryptocurrency payments and fintech
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Industry Insights
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Security Tips
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Technical Guides
                </Badge>
              </div>
            </div>
          </section>

          {/* Categories Filter */}
          <section className="py-8 px-4 bg-muted/30">
            <div className="container mx-auto max-w-6xl">
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === "All" ? "default" : "outline"}
                    size="sm"
                    className="rounded-full"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Post */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
              {blogPosts.filter(post => post.featured).map((post) => (
                <Card key={post.id} className="overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-8">
                      <Badge className="mb-4">{post.category}</Badge>
                      <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
                      <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <Button className="flex items-center gap-2">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="py-16 px-4 bg-muted/30">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.filter(post => !post.featured).map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                    <CardHeader>
                      <Badge className="w-fit">{post.category}</Badge>
                      <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                      <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <Button variant="outline" className="w-full flex items-center gap-2">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl">
              <Card className="text-center p-8">
                <CardHeader>
                  <CardTitle className="text-2xl">Stay Updated</CardTitle>
                  <CardDescription>
                    Get the latest insights about cryptocurrency payments and fintech trends delivered to your inbox
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-3 py-2 border border-border rounded-md bg-background"
                    />
                    <Button>Subscribe</Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    No spam, unsubscribe at any time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Popular Topics */}
          <section className="py-16 px-4 bg-muted/30">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-2xl font-bold mb-8 text-center">Popular Topics</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card className="text-center p-6">
                  <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Market Trends</h3>
                  <p className="text-sm text-muted-foreground">
                    Latest cryptocurrency market analysis and predictions
                  </p>
                </Card>
                <Card className="text-center p-6">
                  <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Security</h3>
                  <p className="text-sm text-muted-foreground">
                    Best practices for secure crypto payment processing
                  </p>
                </Card>
                <Card className="text-center p-6">
                  <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    Technical guides for implementing crypto payments
                  </p>
                </Card>
                <Card className="text-center p-6">
                  <Calendar className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Industry News</h3>
                  <p className="text-sm text-muted-foreground">
                    Latest updates from the fintech and crypto world
                  </p>
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

export default Blog;