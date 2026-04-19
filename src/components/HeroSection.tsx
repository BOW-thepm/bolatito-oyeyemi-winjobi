import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowDownCircle, ArrowUpRight, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'digital experiences';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 90);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 bg-background"
    >
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 -z-0">
        <div
          className="blob blob-drift"
          style={{
            width: '520px',
            height: '520px',
            top: '-120px',
            left: '-120px',
            background: 'hsl(var(--primary) / 0.55)',
          }}
        />
        <div
          className="blob blob-drift"
          style={{
            width: '460px',
            height: '460px',
            bottom: '-140px',
            right: '-100px',
            background: 'hsl(var(--secondary) / 0.5)',
            animationDelay: '-6s',
          }}
        />
        <div
          className="blob blob-drift"
          style={{
            width: '320px',
            height: '320px',
            top: '40%',
            left: '55%',
            background: 'hsl(var(--accent) / 0.35)',
            animationDelay: '-12s',
          }}
        />
      </div>

      {/* Dotted grid */}
      <div className="absolute inset-0 dot-grid opacity-60 -z-0" />

      {/* Noise texture */}
      <div className="noise-overlay" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 bg-card/60 backdrop-blur-md text-xs md:text-sm text-muted-foreground mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for select projects · 2026
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] text-foreground"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            Crafting beautiful
            <br />
            <span className="italic font-light text-muted-foreground">human-centered </span>
            <span className="gradient-text">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                className="ml-1 text-primary"
              >
                |
              </motion.span>
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            className="mt-8 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            I'm <span className="text-foreground font-medium">Bolatito</span> — a UI/UX designer
            shaping intuitive, intentional interfaces that solve real problems.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-3 mt-10 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Button
              size="lg"
              className="group bg-foreground hover:bg-foreground/90 text-background rounded-full px-7 h-12 transition-all duration-300"
              onClick={() =>
                window.open('https://www.behance.net/bowthetechpm', '_blank', 'noopener,noreferrer')
              }
            >
              <span>View My Work</span>
              <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="group rounded-full px-7 h-12 border-border bg-card/40 backdrop-blur-md hover:bg-card transition-all duration-300"
            >
              <Sparkles className="mr-1 h-4 w-4 text-primary" />
              <span>Let's talk</span>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex items-center gap-10 md:gap-14 mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div className="flex flex-col items-start">
              <span className="text-3xl md:text-4xl font-bold text-foreground">2+</span>
              <span className="text-xs md:text-sm text-muted-foreground tracking-wide uppercase mt-1">
                Years
              </span>
            </div>
            <div className="h-10 w-px bg-border"></div>
            <div className="flex flex-col items-start">
              <span className="text-3xl md:text-4xl font-bold text-foreground">10+</span>
              <span className="text-xs md:text-sm text-muted-foreground tracking-wide uppercase mt-1">
                Projects
              </span>
            </div>
            <div className="h-10 w-px bg-border hidden sm:block"></div>
            <div className="hidden sm:flex flex-col items-start">
              <span className="text-3xl md:text-4xl font-bold text-foreground">∞</span>
              <span className="text-xs md:text-sm text-muted-foreground tracking-wide uppercase mt-1">
                Curiosity
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-primary transition-colors z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDownCircle className="h-5 w-5" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;
