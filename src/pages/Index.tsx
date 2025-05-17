
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import CustomCursor from '@/components/CustomCursor';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Change page title
    document.title = "Bolatito Oyeyemi Winjobi (BOW) - UI/UX Designer Portfolio";
    
    // Simulate page loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      <ParticleBackground />
      
      <AnimatePresence>
        {isLoading ? (
          <motion.div 
            className="fixed inset-0 bg-background flex items-center justify-center z-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            key="loader"
          >
            <motion.div className="text-center">
              <motion.div 
                className="text-4xl md:text-6xl font-bold font-playfair relative inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.span 
                  className="gradient-text"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    textShadow: [
                      "0 0 5px rgba(var(--primary), 0.3)",
                      "0 0 15px rgba(var(--primary), 0.5)",
                      "0 0 5px rgba(var(--primary), 0.3)"
                    ]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  BOW
                </motion.span>
              </motion.div>
              <motion.div 
                className="mt-4 text-sm text-foreground/70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div 
                  className="inline-block h-1 w-1 bg-primary rounded-full mr-1"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.div 
                  className="inline-block h-1 w-1 bg-primary rounded-full mr-1"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, delay: 0.2, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.div 
                  className="inline-block h-1 w-1 bg-primary rounded-full"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, delay: 0.4, repeat: Infinity, repeatType: "reverse" }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div 
            className="min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            key="content"
          >
            <NavBar />
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;
