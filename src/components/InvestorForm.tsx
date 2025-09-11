import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Turnstile } from "@marsidev/react-turnstile";

export const InvestorForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!turnstileToken) {
      toast({
        title: "Verification Required",
        description: "Please complete the security verification.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("cf-turnstile-response", turnstileToken);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        toast({
          title: "Inquiry Submitted Successfully",
          description: "Thank you for your interest. Our team will contact you within 24 hours.",
        });
        form.reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly at investors@nxtfi.xyz",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Investor Inquiry</CardTitle>
        <CardDescription>
          Interested in investing in NxtFi? Fill out the form below and our team will get back to you.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} name="investor-inquiry" method="POST" data-netlify="true" className="space-y-6">
          <input type="hidden" name="form-name" value="investor-inquiry" />
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name *</Label>
              <Input id="firstName" name="firstName" required />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name *</Label>
              <Input id="lastName" name="lastName" required />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input id="email" name="email" type="email" required />
          </div>

          <div>
            <Label htmlFor="company">Company/Organization</Label>
            <Input id="company" name="company" />
          </div>

          <div>
            <Label htmlFor="investorType">Investor Type *</Label>
            <Select name="investorType" required>
              <SelectTrigger>
                <SelectValue placeholder="Select investor type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="angel">Angel Investor</SelectItem>
                <SelectItem value="vc">Venture Capital</SelectItem>
                <SelectItem value="pe">Private Equity</SelectItem>
                <SelectItem value="institutional">Institutional Investor</SelectItem>
                <SelectItem value="strategic">Strategic Investor</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="investmentRange">Investment Range (USD)</Label>
            <Select name="investmentRange">
              <SelectTrigger>
                <SelectValue placeholder="Select investment range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="50k-250k">$50K - $250K</SelectItem>
                <SelectItem value="250k-1m">$250K - $1M</SelectItem>
                <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                <SelectItem value="5m-10m">$5M - $10M</SelectItem>
                <SelectItem value="10m+">$10M+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="timeline">Investment Timeline</Label>
            <Select name="timeline">
              <SelectTrigger>
                <SelectValue placeholder="Select timeline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="immediate">Immediate (0-3 months)</SelectItem>
                <SelectItem value="short">Short-term (3-6 months)</SelectItem>
                <SelectItem value="medium">Medium-term (6-12 months)</SelectItem>
                <SelectItem value="long">Long-term (12+ months)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message">Message/Questions</Label>
            <Textarea 
              id="message" 
              name="message" 
              placeholder="Tell us about your investment interests, questions, or additional information..."
              rows={4}
            />
          </div>

          <div className="flex justify-center">
            <Turnstile
              siteKey="0x4AAAAAABmAawuw8zXDRfZv"
              onSuccess={setTurnstileToken}
              onError={() => setTurnstileToken("")}
              onExpire={() => setTurnstileToken("")}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting || !turnstileToken}
          >
            {isSubmitting ? "Submitting..." : "Submit Inquiry"}
          </Button>

          <p className="text-sm text-muted-foreground text-center">
            All inquiries are confidential and will be reviewed by our executive team.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};