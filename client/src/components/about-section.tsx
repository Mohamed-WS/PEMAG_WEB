import { Button } from "@/components/ui/button";
import { Award, Users, BookOpen } from "lucide-react";

// Original PEMAG statistics
const stats = [
  {
    id: 1,
    number: 200,
    title: "Trained Professionals",
    icon: Users
  },
  {
    id: 2,
    number: 100,
    title: "Completed Projects", 
    icon: Award
  },
  {
    id: 3,
    number: 7,
    title: "Partner Organizations",
    icon: BookOpen
  }
];

export default function AboutSection() {

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <h2 className="heading-secondary text-industrial-navy mb-6">About PEMAG</h2>
            <h3 className="text-2xl font-semibold text-industrial-steel mb-6">
              Engineering Excellence in Mauritania's Strategic Transformation
            </h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              We have training plans aligned with the national strategic transformation to improve the engineering profession in Mauritania and raise the quality and creativity of engineers to qualify and lead.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our comprehensive programs span petroleum engineering, mining operations, sustainable energy solutions, and advanced agricultural technologies, preparing professionals for tomorrow's challenges.
            </p>
            <Button className="btn-primary" onClick={scrollToContact}>
              More Information
            </Button>
          </div>
          
          <div className="relative animate-fade-in-up">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Professional engineers collaborating"
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-industrial-navy text-white p-6 rounded-lg shadow-xl">
              <div className="text-center">
                <p className="text-3xl font-bold text-industrial-orange">15+</p>
                <p className="text-sm text-gray-300">Years Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div key={stat.id} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-industrial-orange rounded-lg flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-industrial-orange mb-2">
                  {stat.number}
                </div>
                <p className="text-industrial-steel font-semibold">{stat.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
