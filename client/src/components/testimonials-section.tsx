import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { staticTestimonials } from "@/data/static-data";

const partnerLogos = [
  { name: "SNIM", image: "/logos/snim.jpg" },
  { name: "MINISTÈRE DES MINES ET DE L'INDUSTRIE", image: "/logos/idm-industries.jpg" },
  { name: "MINISTÈRE DE L'ENERGIE ET DU PÉTROLE", image: "/logos/MEP.jpg" },
  { name: "AMC TRAVAUX", image: "/logos/amc-travaux.avif" },
  { name: "BRITISH SAFETY SERVICES", image: "/logos/ministry-mines-industry.jpg" },
  { name: "IDM INDUSTRIES", image: "/logos/british-safety-services.jpg" },
  { name: "SMH", image: "/logos/Logo-SMH.png" }
];

export default function TestimonialsSection() {
  const testimonials = staticTestimonials;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-secondary text-industrial-navy mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from industry professionals who have transformed their careers through our training programs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="card-elevated">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Avatar className="w-16 h-16 mr-4">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-lg font-bold text-industrial-navy">{testimonial.name}</h4>
                      <p className="text-industrial-orange font-semibold">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    "{testimonial.content}"
                  </p>
                  <div className="flex text-industrial-orange">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <Star key={index} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* Partner Logos Section */}
        <div className="mt-16 bg-industrial-navy rounded-xl p-8 text-white">
          <div className="text-center">
            <h3 className="heading-tertiary mb-8">Trusted by Industry Leaders</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
              {partnerLogos.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 h-24 flex items-center justify-center hover:scale-105 transition-all duration-200 shadow-lg border border-gray-200 overflow-hidden"
                >
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className={`max-w-full object-contain filter brightness-110 contrast-110 ${
                      partner.name === "MINISTÈRE DE L'ENERGIE ET DU PÉTROLE" 
                        ? "max-h-20 scale-110" 
                        : partner.name === "MINISTÈRE DES MINES ET DE L'INDUSTRIE"
                        ? "max-h-20 scale-110"
                        : "max-h-16"
                    }`}
                    title={partner.name}
                    style={{ mixBlendMode: 'multiply' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
