
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('hero');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'projects', 'testimonials', 'contact'];
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
    { name: 'Home', href: '#hero', isRoute: false },
    { name: 'About', href: '#about', isRoute: false },
    { name: 'Projects', href: '/projects', isRoute: true },
    { name: 'Testimonials', href: '#testimonials', isRoute: false },
    { name: 'Contact', href: '#contact', isRoute: false },
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
        <motion.div
          className="font-playfair relative z-10 group flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <Link to="/" className="flex items-center">
          <div className="logo-container flex items-center">
            <div className="logo-box relative mr-3">
              <div className="logo-text relative font-bold text-2xl md:text-3xl">
                <span className="gradient-text">BOW</span>
                <motion.span
                  className="absolute -top-1 -right-1 h-2 w-2 bg-accent rounded-full"
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
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => {
            const isActive = link.isRoute 
              ? location.pathname === link.href 
              : activeLink === link.href.substring(1);
            
            if (link.isRoute) {
              return (
                <motion.div key={link.name} whileHover={{ scale: 1.05 }}>
                  <Link
                    to={link.href}
                    className={cn(
                      "text-foreground hover:text-primary font-medium transition-colors relative py-2",
                      isActive && "text-primary"
                    )}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div 
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"
                        layoutId="navIndicator"
                      />
                    )}
                  </Link>
                </motion.div>
              );
            }
            
            return (
              <motion.a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-foreground hover:text-primary font-medium transition-colors relative py-2",
                  isActive && "text-primary"
                )}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveLink(link.href.substring(1))}
              >
                {link.name}
                {isActive && (
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"
                    layoutId="navIndicator"
                  />
                )}
              </motion.a>
            );
          })}
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
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
          {navLinks.map((link, index) => {
            if (link.isRoute) {
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    to={link.href}
                    className="text-foreground hover:text-primary font-medium px-6 py-3 rounded-md hover:bg-foreground/5 transition-colors block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              );
            }
            
            return (
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
            );
          })}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default NavBar;
