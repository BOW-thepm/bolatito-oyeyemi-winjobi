
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from '@/components/ThemeProvider';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';

const Index = () => {
  useEffect(() => {
    // Change page title
    document.title = "Bolatito Oyeyemi Winjobi (BOW) - UI/UX Designer Portfolio";
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        className="min-h-screen relative bg-background overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ParticleBackground />
        <NavBar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
