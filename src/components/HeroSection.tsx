
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useTheme } from '@/components/ThemeProvider';
import { ArrowDownCircle } from 'lucide-react';

const HeroSection = () => {
  const controls = useAnimation();
  const { theme } = useTheme();
  const [scrollIndicator, setScrollIndicator] = useState(true);
  
  useEffect(() => {
    // Hide scroll indicator after scrolling
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrollIndicator(false);
      } else {
        setScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Start animation sequence when component mounts
    const sequence = async () => {
      await controls.start("visible");
    };
    sequence();
  }, [controls]);

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      }
    },
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: '100%',
      transition: { duration: 1, ease: "easeInOut" }
    }
  };

  // Custom cursor point component
  const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };

      const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'A' || target.tagName === 'BUTTON' || 
            target.closest('a') || target.closest('button')) {
          setIsHovering(true);
        } else {
          setIsHovering(false);
        }
      };

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseover', handleMouseOver);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseover', handleMouseOver);
      };
    }, []);

    return (
      <motion.div
        className="fixed w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: position.x - 12,
          y: position.y - 12,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <motion.div 
          className="w-full h-full rounded-full bg-white opacity-50"
          animate={{ scale: isHovering ? 1.2 : 1 }}
        />
      </motion.div>
    );
  };

  // Generate the background gradient based on theme
  const backgroundGradient = theme === 'dark' 
    ? 'bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155]' // Dark space blue
    : 'bg-gradient-to-br from-[#FEF9C3] via-[#FEF5E7] to-[#FFFBEB]'; // Soft cream

  return (
    <section 
      id="hero" 
      className={`min-h-screen flex flex-col items-center justify-center relative overflow-hidden ${backgroundGradient}`}
    >
      {/* Custom cursor (desktop only) */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>
      
      {/* Centered content */}
      <motion.div
        className="container mx-auto px-4 text-center z-10"
        initial="hidden"
        animate={controls}
        variants={textVariants}
      >
        {/* Logo */}
        <motion.div 
          className="mb-8"
          variants={textVariants}
        >
          <motion.div
            className="inline-block relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div 
              className="absolute -inset-6 bg-primary/20 rounded-full blur-xl"
              animate={{ 
                scale: [0.8, 1.1, 0.8], 
                opacity: [0.5, 0.8, 0.5] 
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            <div className="relative py-3 px-5 text-6xl md:text-8xl font-bold text-foreground">
              <span className="font-playfair">B</span>
              <motion.span 
                className="relative inline-flex items-center justify-center text-primary mx-1"
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{ 
                  duration: 15, 
                  repeat: Infinity,
                  ease: "linear" 
                }}
              >
                <span className="absolute w-10 h-10 md:w-14 md:h-14 border-2 border-primary/30 rounded-full" />
                <span className="absolute w-4 h-4 md:w-6 md:h-6 bg-primary/10 rounded-full backdrop-blur-sm" />
                0
              </motion.span>
              <span className="font-playfair">W</span>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Full name */}
        <motion.h2 
          className="text-xl md:text-2xl font-light text-foreground/80 tracking-wider mb-6"
          variants={textVariants}
        >
          Bolatito Oyeyemi Winjobi
        </motion.h2>
        
        {/* Decorative line */}
        <motion.div 
          className="h-px bg-primary/50 w-0 mx-auto"
          variants={lineVariants}
        />
        
        {/* Role description */}
        <motion.p
          className="mt-6 text-lg md:text-xl font-light text-foreground/70 max-w-md mx-auto"
          variants={textVariants}
        >
          UI/UX Designer & Creative Product Manager
        </motion.p>
      </motion.div>
      
      {/* Scroll indicator */}
      {scrollIndicator && (
        <motion.a 
          href="#about"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-foreground/60 hover:text-primary transition-colors"
          initial={{ opacity: 0, y: -10 }}
          animate={{ 
            opacity: [0, 1, 0.5, 1], 
            y: [0, 10, 5, 10] 
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-sm mb-2">Scroll</span>
          <ArrowDownCircle className="h-6 w-6" />
        </motion.a>
      )}
      
      {/* Decorative floating elements */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/10 backdrop-blur-sm"
          style={{
            width: `${Math.random() * 200 + 50}px`,
            height: `${Math.random() * 200 + 50}px`,
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
            zIndex: 0
          }}
          animate={{
            x: [0, Math.random() * 50 - 25],
            y: [0, Math.random() * 50 - 25],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-background/30 pointer-events-none" />
    </section>
  );
};

export default HeroSection;
