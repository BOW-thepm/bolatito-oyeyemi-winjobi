
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];
  
  const socialLinks = [
    { name: "Dribbble", href: "#" },
    { name: "Behance", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "Instagram", href: "#" },
  ];
  
  return (
    <footer className="bg-designer-charcoal text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 mb-8">
          <a href="#hero" className="font-playfair text-2xl font-bold text-white">
            Design<span className="text-designer-purple">.</span>
          </a>
          
          <div className="flex space-x-4 md:space-x-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="outline"
                size="sm"
                className="border-gray-600 hover:border-white hover:bg-transparent"
                asChild
              >
                <a href={link.href}>{link.name}</a>
              </Button>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} UI/UX Designer. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
