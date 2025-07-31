import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type ContactForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceInterest: string;
  message: string;
};

export default function ContactSection() {
  const { toast } = useToast();
  
  const [contactForm, setContactForm] = useState<ContactForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceInterest: "",
    message: ""
  });

  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.firstName || !contactForm.lastName || !contactForm.email || !contactForm.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // For GitHub Pages deployment, use Formspree or similar service
    // For now, we'll use a simple mailto link as fallback
    const subject = `Contact Form Submission - ${contactForm.firstName} ${contactForm.lastName}`;
    const body = `
Name: ${contactForm.firstName} ${contactForm.lastName}
Email: ${contactForm.email}
Phone: ${contactForm.phone || 'Not provided'}
Service Interest: ${contactForm.serviceInterest || 'Not specified'}

Message:
${contactForm.message}
    `;
    
    const mailtoLink = `mailto:contact@pemaginnovations.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Try to open email client
    window.location.href = mailtoLink;
    
    toast({
      title: "Email Client Opened",
      description: "Please send the email from your email client to complete the submission.",
    });
    
    // Clear form
    setContactForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      serviceInterest: "",
      message: ""
    });
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
    
    // For GitHub Pages deployment, use mailto as fallback
    const subject = `Newsletter Subscription Request`;
    const body = `Please add ${newsletterEmail} to the PEMAG Innovations newsletter.`;
    const mailtoLink = `mailto:contact@pemaginnovations.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Email Client Opened",
      description: "Please send the email to complete your newsletter subscription.",
    });
    
    setNewsletterEmail("");
  };

  const updateContactForm = (field: keyof ContactForm, value: string) => {
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
                  >
                    Send Message
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
                >
                  Subscribe
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
