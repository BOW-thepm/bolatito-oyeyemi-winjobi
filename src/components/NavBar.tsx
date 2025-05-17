
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ThemeToggle';
import { motion } from 'framer-motion';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('hero');

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

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'py-3 backdrop-blur-lg bg-background/90 shadow-md' 
          : 'py-5 bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <motion.a 
          href="#hero" 
          className="font-playfair relative z-10 group flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="logo-container flex items-center">
            <div className="logo-box relative mr-3">
              <div className="logo-bg absolute inset-0 bg-primary rounded-md -rotate-3 shadow-lg opacity-30"></div>
              <div className="logo-text relative px-3 py-1 font-bold text-2xl md:text-3xl">
                <span className="gradient-text">BOW</span>
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10 items-center">
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
                  />
                )}
              </motion.a>
            ))}
          </div>
          <ThemeToggle />
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button 
            className="text-foreground p-1"
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
      <motion.div 
        className={cn(
          "md:hidden fixed top-[68px] left-0 right-0 bg-background dark:bg-background/95 dark:backdrop-blur-md shadow-lg",
          "overflow-hidden"
        )}
        initial={{ height: 0 }}
        animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto py-6 flex flex-col space-y-6">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-foreground hover:text-primary font-medium px-6 py-3 rounded-md hover:bg-foreground/5 transition-colors"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setActiveLink(link.href.substring(1));
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default NavBar;
