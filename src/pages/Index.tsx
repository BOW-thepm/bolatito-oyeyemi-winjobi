
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Change page title
    document.title = "Bolatito Oyeyemi Winjobi (BOW) - UI/UX Designer Portfolio";
    
    // Add Satoshi font
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap';
    document.head.appendChild(link);
    
    // Apply Satoshi font to the body
    document.body.style.fontFamily = '"Satoshi", sans-serif';
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen font-['Satoshi',sans-serif]">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
