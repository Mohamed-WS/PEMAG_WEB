import { 
  Trophy, 
  Award, 
  Users, 
  TrendingUp, 
  Calendar, 
  Settings,
  Building,
  Target,
  BookOpen,
  Droplets,
  Leaf,
  Monitor
} from "lucide-react";
import { staticProjects } from "@/data/static-data";

const iconMap = {
  'graduation-cap': BookOpen,
  'award': Trophy,
  'building': Building,
  'handshake': Users,
  'trending-up': TrendingUp,
  'calendar': Calendar,
  'settings': Settings,
  'oil-well': Droplets,
  'leaf': Leaf,
  'users': Users,
  'monitor': Monitor,
};

const commitmentItems = [
  "Engineering Excellence in Mauritania",
  "Protecting People & Environment", 
  "Sustainable Development Goals",
  "Fostering Shared Growth"
];

const expertiseItems = [
  "Explore & Produce",
  "Transform & Develop", 
  "Advanced Technologies",
  "Training & Certification"
];

const impactItems = [
  "National Skill Development",
  "Industry Partnerships",
  "Innovation Leadership", 
  "Economic Growth"
];

export default function ProjectsSection() {
  const projects = staticProjects;
  const achievements = projects.slice(0, 4);

  return (
    <section id="projects" className="py-20 bg-industrial-navy text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6">Our Projects & Achievements</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leading engineering excellence across Mauritania with internationally recognized certifications and partnerships.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement) => {
            const IconComponent = iconMap[achievement.icon as keyof typeof iconMap] || Award;
            return (
              <div 
                key={achievement.id} 
                className="text-center bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-industrial-orange rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-industrial-orange mb-2">
                  {achievement.id === 1 ? "Leading" : 
                   achievement.id === 2 ? "Sustainable" : 
                   achievement.id === 3 ? "Comprehensive" : 
                   "Innovative"}
                </h3>
                <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                <p className="text-gray-300 text-sm">{achievement.description}</p>
              </div>
            );
          })}
        </div>

        {/* Three Column Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Our Commitment */}
          <div className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm">
            <div className="w-16 h-16 bg-industrial-orange rounded-lg mb-6 flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="heading-tertiary text-industrial-orange mb-4">Our Commitment</h3>
            <ul className="space-y-3 text-gray-300">
              {commitmentItems.map((item, index) => (
                <li 
                  key={index}
                  className="hover:text-white transition-colors cursor-pointer flex items-center"
                >
                  <span className="w-2 h-2 bg-industrial-orange rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Our Expertise */}
          <div className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm">
            <div className="w-16 h-16 bg-industrial-orange rounded-lg mb-6 flex items-center justify-center">
              <Settings className="w-8 h-8 text-white" />
            </div>
            <h3 className="heading-tertiary text-industrial-orange mb-4">Our Expertise</h3>
            <ul className="space-y-3 text-gray-300">
              {expertiseItems.map((item, index) => (
                <li 
                  key={index}
                  className="hover:text-white transition-colors cursor-pointer flex items-center"
                >
                  <span className="w-2 h-2 bg-industrial-orange rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Our Impact */}
          <div className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm">
            <div className="w-16 h-16 bg-industrial-orange rounded-lg mb-6 flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="heading-tertiary text-industrial-orange mb-4">Our Impact</h3>
            <ul className="space-y-3 text-gray-300">
              {impactItems.map((item, index) => (
                <li 
                  key={index}
                  className="hover:text-white transition-colors cursor-pointer flex items-center"
                >
                  <span className="w-2 h-2 bg-industrial-orange rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
