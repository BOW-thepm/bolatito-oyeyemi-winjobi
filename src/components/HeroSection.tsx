
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-designer-light-yellow/50 dark:bg-designer-dark-yellow/10 -z-10"></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 -z-10 bg-[radial-gradient(circle_at_20%_75%,rgba(255,213,79,0.2),transparent_40%)] dark:bg-[radial-gradient(circle_at_20%_75%,rgba(255,193,7,0.1),transparent_40%)]"></div>
      
      <div className="container mx-auto px-4 md:px-8 pt-16 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 mb-4 bg-designer-light-yellow dark:bg-designer-dark-yellow/30 text-designer-dark-yellow dark:text-designer-yellow rounded-full text-sm font-medium">UI/UX Designer</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Creating <span className="gradient-text">beautiful</span> digital experiences
              </h1>
              <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-lg">
                Hi, I'm a passionate UI/UX designer focused on crafting intuitive and engaging user experiences that solve real problems.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Button size="lg" className="bg-primary hover:bg-designer-dark-yellow dark:hover:bg-designer-yellow/90 text-primary-foreground">
                View My Work
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Contact Me
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-8 text-foreground/80 dark:text-foreground/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">5+</span>
                <span className="text-sm">Years Experience</span>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">50+</span>
                <span className="text-sm">Projects Completed</span>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full"></div>
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-primary/10 rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Designer workspace" 
                className="rounded-xl shadow-xl relative z-10 object-cover h-[500px] w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#about" className="flex flex-col items-center text-foreground/70 hover:text-primary">
          <span className="text-sm mb-2">Scroll Down</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
