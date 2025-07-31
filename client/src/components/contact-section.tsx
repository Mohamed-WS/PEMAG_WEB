import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { InsertContactSubmission, InsertNewsletterSubscription } from "@shared/schema";

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const [contactForm, setContactForm] = useState<InsertContactSubmission>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceInterest: "",
    message: ""
  });

  const [newsletterEmail, setNewsletterEmail] = useState("");

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for your message! We will contact you soon.",
      });
      setContactForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        serviceInterest: "",
        message: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const newsletterMutation = useMutation({
    mutationFn: async (data: InsertNewsletterSubscription) => {
      const response = await apiRequest("POST", "/api/newsletter", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Subscription Successful",
        description: "Thank you for subscribing to our newsletter!",
      });
      setNewsletterEmail("");
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.firstName || !contactForm.lastName || !contactForm.email || !contactForm.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(contactForm);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) {
      toast({
        title: "Validation Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    newsletterMutation.mutate({ email: newsletterEmail });
  };

  const updateContactForm = (field: keyof InsertContactSubmission, value: string) => {
    setContactForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="heading-secondary text-industrial-navy mb-6">Get In Touch</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Ready to transform your engineering career? Contact us for personalized training solutions and professional development programs.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-industrial-navy mb-4">Get In Touch</h3>
                <p className="text-gray-600 mb-4">
                  Ready to advance your engineering career? Contact us to learn more about our comprehensive training programs and consultation services.
                </p>

              </div>

              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-industrial-orange rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-industrial-navy">Address</h4>
                    <p className="text-gray-600">Nouakchott, Mauritania</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-industrial-orange rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-industrial-navy">Phone</h4>
                    <div className="text-gray-600">
                      <p>+222 36001192</p>
                      <p>+222 47388997</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-industrial-orange rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-industrial-navy">Email</h4>
                    <p className="text-gray-600">contact@pemaginnovations.org</p>
                  </div>
                </div>
              </div>

              <Card className="bg-gray-50 border-0">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="w-6 h-6 text-industrial-orange mr-2" />
                    <h3 className="text-lg font-bold text-industrial-navy">Business Hours</h3>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Saturday - Thursday</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Friday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="heading-tertiary text-industrial-navy">Request a Quote</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-semibold text-gray-700 mb-2">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        value={contactForm.firstName}
                        onChange={(e) => updateContactForm('firstName', e.target.value)}
                        required
                        className="form-input"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-semibold text-gray-700 mb-2">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        value={contactForm.lastName}
                        onChange={(e) => updateContactForm('lastName', e.target.value)}
                        required
                        className="form-input"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => updateContactForm('email', e.target.value)}
                      required
                      className="form-input"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={contactForm.phone}
                      onChange={(e) => updateContactForm('phone', e.target.value)}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <Label htmlFor="serviceInterest" className="text-sm font-semibold text-gray-700 mb-2">
                      Service Interest
                    </Label>
                    <Select value={contactForm.serviceInterest} onValueChange={(value) => updateContactForm('serviceInterest', value)}>
                      <SelectTrigger className="form-input">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="petroleum-mining">Petroleum & Mining Engineering</SelectItem>
                        <SelectItem value="energy-sustainability">Energy & Sustainability</SelectItem>
                        <SelectItem value="environment-waste">Environment and Waste Management</SelectItem>
                        <SelectItem value="agricultural-systems">Agricultural Systems & Tech</SelectItem>
                        <SelectItem value="software-training">Software Training</SelectItem>
                        <SelectItem value="ai-it">Artificial Intelligence and IT</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      value={contactForm.message}
                      onChange={(e) => updateContactForm('message', e.target.value)}
                      required
                      rows={4}
                      className="form-textarea"
                      placeholder="Tell us about your training needs..."
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full btn-primary"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-industrial-navy">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with Industry Insights</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest updates in engineering education, industry trends, and training opportunities.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <div className="flex gap-4">
                <Input 
                  type="email" 
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address" 
                  required 
                  className="flex-1 form-input bg-white"
                />
                <Button 
                  type="submit" 
                  className="bg-industrial-orange text-white hover:bg-orange-600"
                  disabled={newsletterMutation.isPending}
                >
                  {newsletterMutation.isPending ? "..." : "Subscribe"}
                </Button>
              </div>
              <p className="text-sm text-gray-400 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
