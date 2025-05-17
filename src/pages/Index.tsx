
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Change page title
    document.title = "Bolatito Oyeyemi Winjobi (BOW) - UI/UX Designer Portfolio";
    
    // Apply futuristic styles to body
    document.body.classList.add('royal-futuristic-theme');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/90 backdrop-blur-sm">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
