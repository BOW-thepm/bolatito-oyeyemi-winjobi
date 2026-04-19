import { motion } from 'framer-motion';
import { ArrowUp, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/bolatito-oyeyemi-winjobi-bowthepm',
    },
    { name: 'X', icon: Twitter, href: 'https://x.com/bowthepm?s=21' },
    {
      name: 'TikTok',
      icon: () => (
        <svg width="16" height="16" viewBox="0 0 448 512" fill="currentColor">
          <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
        </svg>
      ),
      href: 'https://www.tiktok.com/@bowthedesigner',
    },
  ];

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-background border-t border-border">
      <div className="container mx-auto px-6 md:px-10 pt-24 pb-10">
        {/* Big mark */}
        <div className="flex items-baseline justify-between mb-16">
          <motion.a
            href="#hero"
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-foreground leading-none"
            whileHover={{ opacity: 0.7 }}
          >
            BOW<span className="text-accent">.</span>
          </motion.a>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to top
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16 pt-12 border-t border-border">
          <div className="md:col-span-5">
            <p className="text-lg md:text-xl text-foreground/80 max-w-md leading-relaxed font-light">
              Creating intuitive, intentional digital experiences. Open to
              freelance and full-time opportunities.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-5">
              Navigate
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-foreground hover:text-muted-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-5">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Ibadan, Nigeria</li>
              <li>
                <a
                  href="mailto:oyeyemi8899@gmail.com"
                  className="text-foreground hover:text-muted-foreground transition-colors"
                >
                  oyeyemi8899@gmail.com
                </a>
              </li>
            </ul>

            <div className="flex gap-5 mt-6">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={link.name}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Bolatito Oyeyemi Winjobi
          </p>
          <p className="text-xs text-muted-foreground">
            Designed & built with care
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
