import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      action: "Call us anytime",
    },
    {
      icon: Mail,
      title: "Email",
      details: "support@pisgoba.com",
      action: "Send us a message",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "123 Food Street, NY 10001",
      action: "Visit our office",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold">Get in Touch</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Have a question or feedback? We'd love to hear from you. 
            Our team is here to help 24/7.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-16 grid gap-8 md:grid-cols-3">
          {contactInfo.map((info) => (
            <Card key={info.title}>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <info.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{info.title}</h3>
                <p className="mb-1 font-medium">{info.details}</p>
                <p className="text-sm text-muted-foreground">{info.action}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <div className="mx-auto max-w-2xl">
          <Card>
            <CardContent className="p-8">
              <h2 className="mb-6 text-2xl font-bold">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more..."
                    className="min-h-[150px]"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto max-w-3xl space-y-4">
            {[
              {
                q: "What are your delivery hours?",
                a: "We deliver 24/7! Order anytime you want.",
              },
              {
                q: "How long does delivery take?",
                a: "Most deliveries arrive within 30 minutes. During peak hours, it may take up to 45 minutes.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, debit cards, and cash on delivery.",
              },
              {
                q: "Is there a minimum order amount?",
                a: "The minimum order amount varies by restaurant, typically between $10-15.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
