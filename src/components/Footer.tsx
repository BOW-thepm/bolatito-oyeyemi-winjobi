
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Star, ArrowUp, Instagram, Twitter, Linkedin, Github, Mail, FileDown } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];
  
  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Github", icon: Github, href: "#" },
    { name: "Email", icon: Mail, href: "mailto:hello@designportfolio.com" },
  ];
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-designer-charcoal text-white dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
      </div>
      
      {/* Back to top button */}
      <div className="container mx-auto px-4 relative">
        <motion.button
          onClick={scrollToTop}
          className="absolute top-0 right-4 md:right-6 -translate-y-1/2 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-designer-dark-yellow transition-colors z-10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      </div>
      
      <div className="container mx-auto px-4 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo and intro */}
          <div className="lg:col-span-2">
            <motion.a 
              href="#hero" 
              className="font-playfair text-3xl md:text-4xl font-bold flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <span className="gradient-text">Design</span>
              <span className="text-primary relative">.</span>
            </motion.a>
            
            <p className="mt-6 text-gray-400 max-w-md">
              Creating intuitive and engaging digital experiences through thoughtful design. Let's build something amazing together.
            </p>
            
            <div className="mt-8 flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-gray-900 dark:border-gray-800 overflow-hidden"
                    style={{ 
                      backgroundImage: `url(https://i.pravatar.cc/40?img=${i+10})`,
                      backgroundSize: 'cover',
                      zIndex: 3 - i
                    }}
                  />
                ))}
              </div>
              <div className="flex items-center gap-1 bg-gray-800 dark:bg-gray-800/50 py-1 px-3 rounded-full">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="text-sm">5.0 Rating</span>
              </div>
            </div>
          </div>
          
          {/* Navigation links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors inline-block"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <span className="block">San Francisco</span>
                <span className="block">California, USA</span>
              </li>
              <li>
                <a href="mailto:hello@designportfolio.com" className="text-gray-400 hover:text-primary transition-colors">
                  hello@designportfolio.com
                </a>
              </li>
            </ul>
            
            <div className="mt-8">
              <Button 
                variant="outline" 
                className="border-gray-700 hover:border-primary hover:bg-primary/10 text-white group transition-all duration-300"
                asChild
              >
                <a 
                  href="https://drive.google.com/file/d/1ap-JWBWX2pf1dVaIM6SDsNvIUoocmbnO/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span>Download Resume</span>
                  <FileDown className="h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} UI/UX Designer Portfolio. All rights reserved.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-primary transition-colors"
                  whileHover={{ y: -3 }}
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
            
            <div className="flex space-x-4 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
