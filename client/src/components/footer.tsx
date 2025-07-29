import { Facebook, Linkedin, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-industrial-neutral-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <div className="text-2xl font-bold">
                <span className="text-industrial-orange">PEMAG</span>
                <span className="text-sm font-normal block text-gray-400">Engineering Excellence</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Everyday is a new day for us and we work really hard to satisfy our engineering professionals everywhere through quality training and development programs.
            </p>

            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-industrial-orange transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/petroleum-energy-mining-and-agriculture-company/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-industrial-orange transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')} 
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('blog')} 
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Blog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Career</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Petroleum Engineering</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mining Operations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Energy Transition</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Green Technologies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Agriculture Technology</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Software Training</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-industrial-orange mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Nouakchott, Mauritania</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-industrial-orange mr-3" />
                <div className="text-gray-400">
                  <p>+222 36001192</p>
                  <p>+222 47388997</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-industrial-orange mr-3" />
                <p className="text-gray-400">pemaginnovations@gmail.com</p>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-industrial-orange mr-3" />
                <p className="text-gray-400">Sat-Thu: 8AM-6PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} PEMAG. All rights reserved. Engineering Excellence in Mauritania.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
