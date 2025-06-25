
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowDownCircle, ExternalLink } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useParallaxScroll, useIntersectionObserver } from '@/hooks/useParallaxScroll';

const HeroSection = () => {
  const parallaxRef = useParallaxScroll(0.3);
  const fadeRef = useIntersectionObserver();

  // Animation variants
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };
  
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      {/* Parallax Background Elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 -z-10" ref={parallaxRef}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(201,167,184,0.3),transparent_40%)]"></div>
        
        {/* Decorative floating elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div 
            key={i} 
            className="absolute rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm" 
            style={{
              width: `${Math.random() * 120 + 60}px`,
              height: `${Math.random() * 120 + 60}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4 + 0.1
            }} 
            animate={{
              x: [0, Math.random() * 30 - 15],
              y: [0, Math.random() * 30 - 15],
              scale: [1, 1.1, 1]
            }} 
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }} 
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            className="lg:col-span-7 z-10 fade-slide-up" 
            ref={fadeRef}
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <motion.div className="space-y-6">
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Creating <br />
                <motion.span 
                  className="gradient-text relative inline-block" 
                  animate={{ y: [0, -5, 0] }} 
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  beautiful
                </motion.span>
                <br className="md:hidden" /> digital experiences
              </motion.h1>
              
              <motion.p 
                className="text-foreground/80 dark:text-foreground/70 text-lg md:text-xl max-w-2xl" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Hi, I'm a passionate UI/UX designer focused on crafting intuitive and engaging user experiences that solve real problems.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-4 mt-8" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground magnetic-hover shadow-lg hover:shadow-xl backdrop-blur-sm border border-primary/20" 
                onClick={() => window.open('https://www.behance.net/bowthetechpm', '_blank', 'noopener,noreferrer')}
              >
                <span className="relative z-10">View My Work</span>
                <ExternalLink className="ml-1 h-4 w-4 relative z-10" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 magnetic-hover backdrop-blur-sm"
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
              className="flex items-center gap-8 mt-12 text-foreground/80 dark:text-foreground/70" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <motion.div className="flex flex-col" whileHover={{ scale: 1.05 }}>
                <span className="text-4xl font-bold text-primary">1+</span>
                <span className="text-sm">Years Experience</span>
              </motion.div>
              <div className="h-12 w-px bg-border"></div>
              <motion.div className="flex flex-col" whileHover={{ scale: 1.05 }}>
                <span className="text-4xl font-bold text-primary">10+</span>
                <span className="text-sm">Projects Completed</span>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-5 relative" 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-full z-0 backdrop-blur-sm" 
                animate={floatingAnimation}
              />
              <motion.div 
                className="absolute -bottom-10 -right-10 w-60 h-60 bg-gradient-to-br from-secondary/30 to-primary/20 rounded-full z-0 backdrop-blur-sm" 
                animate={{
                  ...floatingAnimation,
                  transition: { ...floatingAnimation.transition, delay: 1 }
                }}
              />
              
              <Carousel className="w-full max-w-md mx-auto" opts={{ loop: true, align: "center" }}>
                <CarouselContent>
                  <CarouselItem>
                    <motion.div 
                      className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-primary/20" 
                      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                    >
                      <img 
                        src="/lovable-uploads/20dd3bb4-98df-409b-b155-235ffd1a56f4.png" 
                        alt="Designer professional portrait" 
                        className="w-full h-[500px] object-contain bg-card" 
                      />
                    </motion.div>
                  </CarouselItem>
                  <CarouselItem>
                    <motion.div 
                      className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-primary/20" 
                      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                    >
                      <img 
                        src="/lovable-uploads/43599bfc-4daf-4eb9-9ed4-8dcd971fcc46.png" 
                        alt="Designer casual portrait" 
                        className="w-full h-[500px] object-contain bg-card" 
                      />
                    </motion.div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex -left-5 border-primary/20 hover:border-primary/40" />
                <CarouselNext className="hidden md:flex -right-5 border-primary/20 hover:border-primary/40" />
              </Carousel>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-foreground/60 hover:text-primary transition-colors magnetic-hover" 
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
