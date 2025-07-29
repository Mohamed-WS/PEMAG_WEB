import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Phone, MapPin, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-industrial-navy text-white relative">
      {/* Top Contact Bar */}
      <div className="bg-industrial-orange py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              Nouakchott, Mauritania
            </span>
            <span className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              +222 36001192
            </span>
          </div>
          <Button
            size="sm"
            variant="secondary"
            className="bg-white text-industrial-orange hover:bg-gray-100"
            onClick={() => scrollToSection('contact')}
          >
            Request Quote
          </Button>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src={`${import.meta.env.BASE_URL}logo.svg`} 
              alt="PEMAG Logo" 
              className="w-12 h-12 mr-3"
            />
            <div className="text-2xl font-bold">
              <span className="text-industrial-orange">PEMAG</span>
              <span className="text-sm font-normal block text-gray-300">Engineering Excellence</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
            <button onClick={() => scrollToSection('blog')} className="nav-link">Blog</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-600 pt-4">
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('home')} className="nav-link text-left">Home</button>
              <button onClick={() => scrollToSection('about')} className="nav-link text-left">About</button>
              <button onClick={() => scrollToSection('services')} className="nav-link text-left">Services</button>
              <button onClick={() => scrollToSection('projects')} className="nav-link text-left">Projects</button>
              <button onClick={() => scrollToSection('blog')} className="nav-link text-left">Blog</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link text-left">Contact</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
