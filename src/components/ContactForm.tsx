import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Turnstile } from "@marsidev/react-turnstile";

export const ContactForm = () => {
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
          title: "Message Sent Successfully",
          description: "Thank you for contacting us. We'll get back to you within 24 hours.",
        });
        form.reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "Message Failed to Send",
        description: "Please try again or email us directly at support@nxtfi.xyz",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send us a message</CardTitle>
        <CardDescription>
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" className="space-y-6">
          <input type="hidden" name="form-name" value="contact" />
          
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
            <Label htmlFor="company">Company (Optional)</Label>
            <Input id="company" name="company" />
          </div>

          <div>
            <Label htmlFor="subject">Subject *</Label>
            <Select name="subject" required>
              <SelectTrigger>
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Inquiry</SelectItem>
                <SelectItem value="technical">Technical Support</SelectItem>
                <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                <SelectItem value="integration">Integration Help</SelectItem>
                <SelectItem value="billing">Billing Question</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message">Message *</Label>
            <Textarea 
              id="message" 
              name="message" 
              placeholder="Tell us how we can help you..."
              required
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
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};