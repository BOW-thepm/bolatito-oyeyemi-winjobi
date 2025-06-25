
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowUp, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerLinks = [{
    name: "Home",
    href: "#hero"
  }, {
    name: "About",
    href: "#about"
  }, {
    name: "Projects",
    href: "#projects"
  }, {
    name: "Testimonials",
    href: "#testimonials"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/bolatito-oyeyemi-winjobi-bowthepm?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    }, 
    {
      name: "X",
      icon: Twitter,
      href: "https://x.com/bowthepm?s=21"
    }, 
    {
      name: "TikTok",
      icon: () => (
        <svg width="16" height="16" viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
        </svg>
      ),
      href: "https://www.tiktok.com/@bowthedesigner?_t=ZM-8wYJJ6mqrQ6&_r=1"
    }
  ];
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="footer-section text-foreground dark:text-foreground relative overflow-hidden">
      {/* Soft decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-secondary/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      </div>
      
      {/* Back to top button */}
      <div className="container mx-auto px-4 relative">
        <motion.button 
          onClick={scrollToTop} 
          className="absolute top-0 right-4 md:right-6 -translate-y-1/2 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors z-10 magnetic-hover" 
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
              <span className="text-foreground">BOW</span>
              <span className="text-primary relative">.</span>
            </motion.a>
            
            <p className="mt-6 text-muted-foreground max-w-md">
              Creating intuitive and engaging digital experiences through thoughtful design. Let's build something amazing together.
            </p>
          </div>
          
          {/* Navigation links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.map(link => (
                <li key={link.name}>
                  <motion.a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors inline-block" 
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
            <h3 className="text-lg font-bold mb-4 text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li className="text-muted-foreground">
                <span className="block">Ibadan, Nigeria</span>
              </li>
              <li>
                <a 
                  href="mailto:oyeyemi8899@gmail.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  oyeyemi8899@gmail.com
                </a>
              </li>
            </ul>
            
            <div className="mt-8">
              <Button 
                variant="outline" 
                className="border-primary/30 hover:border-primary/50 hover:bg-primary/10 text-foreground group transition-all duration-300 magnetic-hover" 
                asChild
              >
                <a 
                  href="https://drive.google.com/file/d/1ap-JWBWX2pf1dVaIM6SDsNvIUoocmbnO/view" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2"
                >
                  <span>Download Resume</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-muted-foreground text-sm">
              &copy; {currentYear} UI/UX Designer Portfolio. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              {socialLinks.map(link => {
                const IconComponent = link.icon;
                return (
                  <motion.a 
                    key={link.name} 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors magnetic-hover" 
                    whileHover={{ y: -3 }}
                    aria-label={link.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
            
            <div className="flex space-x-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
