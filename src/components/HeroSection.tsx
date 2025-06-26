
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowDownCircle, ExternalLink } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: 'url("/lovable-uploads/20dd3bb4-98df-409b-b155-235ffd1a56f4.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for text contrast */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(rgba(28, 26, 29, 0.6), rgba(28, 26, 29, 0.6))'
        }}
      />
      
      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div 
            className="max-w-[700px] space-y-6"
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Creating <br />
              <motion.span 
                className="text-primary relative inline-block" 
                animate={{ y: [0, -5, 0] }} 
                transition={{ duration: 2, repeat: Infinity }}
              >
                beautiful
              </motion.span>
              <br className="md:hidden" /> digital experiences
            </motion.h1>
            
            <motion.p 
              className="text-white/90 text-lg md:text-xl leading-relaxed" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Hi, I'm a passionate UI/UX designer focused on crafting intuitive and engaging user experiences that solve real problems.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap gap-4 mt-8 justify-center" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-lg px-8 py-3" 
              onClick={() => window.open('https://www.behance.net/bowthetechpm', '_blank', 'noopener,noreferrer')}
            >
              <span>View My Work</span>
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm rounded-lg px-8 py-3"
            >
              <span>Contact Me</span>
              <motion.span 
                className="ml-2" 
                animate={{ x: [0, 5, 0] }} 
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Button>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-8 mt-12 text-white/90" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <motion.div className="flex flex-col" whileHover={{ scale: 1.05 }}>
              <span className="text-3xl md:text-4xl font-bold text-primary">1+</span>
              <span className="text-sm">Years Experience</span>
            </motion.div>
            <div className="h-12 w-px bg-white/30"></div>
            <motion.div className="flex flex-col" whileHover={{ scale: 1.05 }}>
              <span className="text-3xl md:text-4xl font-bold text-primary">10+</span>
              <span className="text-sm">Projects Completed</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <motion.a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70 hover:text-primary transition-colors z-20" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <motion.div 
          animate={{ y: [0, 5, 0] }} 
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
        >
          <ArrowDownCircle className="h-6 w-6" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;
