import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Droplets, 
  Leaf, 
  Recycle, 
  Users, 
  Monitor, 
  Lightbulb,
  CheckCircle,
  ArrowRight 
} from "lucide-react";
import type { Service } from "@shared/schema";

const iconMap = {
  'oil-well': Droplets,
  'leaf': Leaf,
  'recycle': Recycle,
  'users': Users,
  'monitor': Monitor,
  'lightbulb': Lightbulb,
};

export default function ServicesSection() {
  const { data: services, isLoading, error } = useQuery<Service[]>({
    queryKey: ['/api/services'],
  });

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (error) {
    return (
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-red-600">Unable to load services. Please try again later.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-secondary text-industrial-navy mb-6">What We Can Offer</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive engineering training programs designed to meet industry demands and national development goals.
          </p>
        </div>

        {isLoading ? (
          <div className="grid lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <Card key={index} className="animate-pulse">
                <div className="h-64 bg-gray-200"></div>
                <CardContent className="p-8">
                  <div className="h-4 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {services?.map((service) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Lightbulb;
              return (
                <Card 
                  key={service.id} 
                  className="service-card card-elevated group overflow-hidden"
                >
                  <div className="relative h-64 bg-gradient-to-br from-industrial-navy to-industrial-steel">
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <IconComponent className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-industrial-orange rounded-lg flex items-center justify-center mr-4">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="heading-tertiary text-industrial-navy">
                          {service.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </CardDescription>
                    
                    {service.features && service.features.length > 0 && (
                      <ul className="space-y-2 text-sm text-gray-600 mb-6">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-industrial-orange mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    <button className="text-industrial-orange font-semibold hover:text-orange-600 transition-colors group-hover:underline flex items-center">
                      Learn More 
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        <div className="text-center mt-12">
          <Button className="btn-primary" onClick={scrollToContact}>
            Request Custom Training
          </Button>
        </div>
      </div>
    </section>
  );
}
