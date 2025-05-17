
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Star } from 'lucide-react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('hero');
  const [hoverLink, setHoverLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'projects', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveLink(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Orbit navigation items (only for desktop)
  const navLinks = [
    { name: 'Home', href: '#hero', angle: 0 },
    { name: 'About', href: '#about', angle: 90 },
    { name: 'Projects', href: '#projects', angle: 180 },
    { name: 'Contact', href: '#contact', angle: 270 },
  ];

  // Animation for logo
  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      } 
    }
  };

  // Animation for the orbiting links
  const orbitRadius = 120; // Radius of the orbit

  return (
    <motion.nav 
      className={cn(
        'fixed w-full z-50 transition-all duration-300 px-4 md:px-8',
        isScrolled 
          ? 'py-3 backdrop-blur-lg bg-background/90 shadow-md' 
          : 'py-5 bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.a 
          href="#hero" 
          className="font-playfair relative z-10 group flex items-center"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="logo-container flex items-center">
            <div className="logo-box relative mr-3 z-10">
              <div className="logo-bg absolute inset-0 bg-primary rounded-md -rotate-3 shadow-lg opacity-30"></div>
              <div className="logo-text relative px-3 py-1 font-bold text-2xl md:text-3xl">
                <span className="gradient-text">B<span className="text-primary relative inline-flex items-center justify-center">0</span>W</span>
                <motion.span 
                  className="absolute -top-1 -right-1 h-2 w-2 bg-primary rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity
                  }}
                />
              </div>
            </div>
            <span className="text-xs sm:text-sm md:text-base font-medium opacity-80">Bolatito Oyeyemi Winjobi</span>
          </div>
        </motion.a>

        {/* Desktop Orbiting Navigation */}
        <div className="hidden md:block relative h-12">
          {!isScrolled && (
            <div className="absolute left-0 w-[240px] h-[240px] -translate-x-1/2 -translate-y-1/2" style={{ top: '50%' }}>
              {navLinks.map((link, index) => {
                // Calculate position on the orbit
                const angle = (link.angle + (Date.now() / 100) * 0.05) % 360;
                const x = Math.cos(angle * (Math.PI / 180)) * orbitRadius;
                const y = Math.sin(angle * (Math.PI / 180)) * orbitRadius;
                
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "absolute flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 backdrop-blur-sm",
                      "hover:bg-primary/30 transition-all duration-300",
                      activeLink === link.href.substring(1) ? "ring-2 ring-primary" : "ring-0",
                      hoverLink === link.name ? "scale-125" : "scale-100"
                    )}
                    style={{
                      left: `${orbitRadius + x}px`,
                      top: `${orbitRadius + y}px`,
                    }}
                    onClick={() => setActiveLink(link.href.substring(1))}
                    onMouseEnter={() => setHoverLink(link.name)}
                    onMouseLeave={() => setHoverLink(null)}
                    whileHover={{ scale: 1.2 }}
                    animate={{
                      boxShadow: activeLink === link.href.substring(1) 
                        ? '0 0 15px rgba(255, 213, 79, 0.7)' 
                        : '0 0 0px rgba(255, 213, 79, 0)',
                    }}
                  >
                    <span className="text-sm font-medium">{link.name.charAt(0)}</span>
                    
                    <AnimatePresence>
                      {hoverLink === link.name && (
                        <motion.span 
                          className="absolute whitespace-nowrap bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs"
                          style={{ top: 'calc(100% + 5px)' }}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          {link.name}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.a>
                );
              })}
            </div>
          )}
          
          {/* Standard Navigation when scrolled */}
          {isScrolled && (
            <div className="flex space-x-6 items-center">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-foreground hover:text-primary font-medium transition-colors relative py-2",
                    activeLink === link.href.substring(1) && "text-primary"
                  )}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setActiveLink(link.href.substring(1))}
                >
                  {link.name}
                  {activeLink === link.href.substring(1) && (
                    <motion.div 
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"
                      layoutId="navIndicator"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>
          )}
        </div>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          {/* Mobile Navigation Toggle */}
          <button 
            className="text-foreground p-1 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-8 h-6 flex flex-col justify-between overflow-hidden">
              <motion.span 
                className="w-8 h-0.5 bg-foreground rounded-full"
                animate={{ 
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 10 : 0
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                className="w-8 h-0.5 bg-foreground rounded-full"
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                className="w-8 h-0.5 bg-foreground rounded-full"
                animate={{ 
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -10 : 0
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden fixed top-[68px] left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto py-6 flex flex-col space-y-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-foreground hover:text-primary font-medium px-6 py-3 rounded-md hover:bg-foreground/5 transition-colors",
                    "flex items-center space-x-3"
                  )}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setActiveLink(link.href.substring(1));
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <motion.span 
                    className="h-2 w-2 bg-primary rounded-full" 
                    animate={{ scale: activeLink === link.href.substring(1) ? [1, 1.5, 1] : 1 }}
                    transition={{ repeat: activeLink === link.href.substring(1) ? Infinity : 0, duration: 1.5 }}
                  />
                  <span>{link.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
