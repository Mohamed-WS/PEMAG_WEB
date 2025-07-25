import Header from "@/components/header";
import HeroCarousel from "@/components/hero-carousel";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import ProjectsSection from "@/components/projects-section";
import BlogSection from "@/components/blog-section";
// import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroCarousel />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <BlogSection />
        {/* <TestimonialsSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
