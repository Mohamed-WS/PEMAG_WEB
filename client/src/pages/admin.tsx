import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Eye, EyeOff, Mail, Phone, User, Calendar, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { ContactSubmission, NewsletterSubscription } from "@shared/schema";

export default function AdminPage() {
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Check if already authenticated (stored in sessionStorage)
  useEffect(() => {
    const authToken = sessionStorage.getItem('admin_token');
    if (authToken) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Test the password by making a request to the admin API
      const response = await apiRequest("GET", "/api/admin/contact-submissions", undefined, {
        headers: { Authorization: `Bearer ${password}` }
      });
      
      if (response.ok) {
        sessionStorage.setItem('admin_token', password);
        setIsAuthenticated(true);
        toast({
          title: "Login Successful",
          description: "Welcome to the admin panel!",
        });
      } else {
        throw new Error("Invalid password");
      }
    } catch (error) {
      toast({
        title: "Login Failed",
        description: "Invalid password. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin_token');
    setIsAuthenticated(false);
    setPassword("");
  };

  // Fetch contact submissions
  const { data: contactSubmissions, isLoading: loadingContacts } = useQuery({
    queryKey: ['admin-contact-submissions'],
    queryFn: async () => {
      const token = sessionStorage.getItem('admin_token');
      const response = await apiRequest("GET", "/api/admin/contact-submissions", undefined, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.json() as Promise<ContactSubmission[]>;
    },
    enabled: isAuthenticated,
  });

  // Fetch newsletter subscriptions
  const { data: newsletterSubscriptions, isLoading: loadingNewsletter } = useQuery({
    queryKey: ['admin-newsletter-subscriptions'],
    queryFn: async () => {
      const token = sessionStorage.getItem('admin_token');
      const response = await apiRequest("GET", "/api/admin/newsletter-subscriptions", undefined, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.json() as Promise<NewsletterSubscription[]>;
    },
    enabled: isAuthenticated,
  });

  const formatDate = (date: string | Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getServiceLabel = (value: string) => {
    const serviceMap: Record<string, string> = {
      'petroleum-mining': 'Petroleum & Mining Engineering',
      'energy-sustainability': 'Energy & Sustainability',
      'environment-waste': 'Environment and Waste Management',
      'agricultural-systems': 'Agricultural Systems & Tech',
      'software-training': 'Software Training',
      'ai-it': 'Artificial Intelligence and IT'
    };
    return serviceMap[value] || value;
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center text-industrial-navy">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="password">Admin Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <Button type="submit" className="w-full btn-primary">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-industrial-navy">Admin Panel</h1>
          <Button onClick={handleLogout} variant="outline">
            Logout
          </Button>
        </div>

        <Tabs defaultValue="contacts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="contacts">
              Contact Submissions ({contactSubmissions?.length || 0})
            </TabsTrigger>
            <TabsTrigger value="newsletter">
              Newsletter Subscriptions ({newsletterSubscriptions?.length || 0})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="contacts">
            <Card>
              <CardHeader>
                <CardTitle>Contact Form Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                {loadingContacts ? (
                  <div className="text-center py-8">Loading...</div>
                ) : contactSubmissions?.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">No contact submissions yet.</div>
                ) : (
                  <div className="space-y-4">
                    {contactSubmissions?.map((submission) => (
                      <Card key={submission.id} className="border-l-4 border-l-industrial-orange">
                        <CardContent className="p-6">
                          <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div className="flex items-center">
                              <User className="w-4 h-4 text-industrial-orange mr-2" />
                              <span className="font-semibold">
                                {submission.firstName} {submission.lastName}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 text-industrial-orange mr-2" />
                              <span className="text-sm text-gray-600">
                                {formatDate(submission.createdAt!)}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <Mail className="w-4 h-4 text-industrial-orange mr-2" />
                              <a href={`mailto:${submission.email}`} className="text-blue-600 hover:underline">
                                {submission.email}
                              </a>
                            </div>
                            {submission.phone && (
                              <div className="flex items-center">
                                <Phone className="w-4 h-4 text-industrial-orange mr-2" />
                                <a href={`tel:${submission.phone}`} className="text-blue-600 hover:underline">
                                  {submission.phone}
                                </a>
                              </div>
                            )}
                          </div>
                          
                          {submission.serviceInterest && (
                            <div className="mb-4">
                              <Badge variant="secondary" className="bg-industrial-navy text-white">
                                {getServiceLabel(submission.serviceInterest)}
                              </Badge>
                            </div>
                          )}
                          
                          <div className="bg-gray-50 rounded-lg p-4">
                            <div className="flex items-start mb-2">
                              <MessageSquare className="w-4 h-4 text-industrial-orange mr-2 mt-1" />
                              <span className="font-semibold text-sm">Message:</span>
                            </div>
                            <p className="text-gray-700 whitespace-pre-wrap">{submission.message}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="newsletter">
            <Card>
              <CardHeader>
                <CardTitle>Newsletter Subscriptions</CardTitle>
              </CardHeader>
              <CardContent>
                {loadingNewsletter ? (
                  <div className="text-center py-8">Loading...</div>
                ) : newsletterSubscriptions?.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">No newsletter subscriptions yet.</div>
                ) : (
                  <div className="space-y-2">
                    {newsletterSubscriptions?.map((subscription) => (
                      <Card key={subscription.id} className="border-l-4 border-l-industrial-orange">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <Mail className="w-4 h-4 text-industrial-orange mr-2" />
                              <a href={`mailto:${subscription.email}`} className="text-blue-600 hover:underline">
                                {subscription.email}
                              </a>
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <Calendar className="w-4 h-4 mr-1" />
                              {formatDate(subscription.createdAt!)}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}