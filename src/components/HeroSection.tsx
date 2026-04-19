import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-between relative overflow-hidden pt-32 pb-12 bg-background"
    >
      {/* Top meta row */}
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between text-xs tracking-[0.2em] uppercase text-muted-foreground"
        >
          <span>Portfolio · 2026</span>
          <span className="hidden sm:inline-flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-foreground opacity-50 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-foreground" />
            </span>
            Available for select work
          </span>
        </motion.div>
      </div>

      {/* Main */}
      <div className="container mx-auto px-6 md:px-10 flex-1 flex items-center">
        <div className="w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-bold tracking-tight leading-[0.95] text-foreground text-[14vw] md:text-[10vw] lg:text-[9rem] xl:text-[10rem]"
          >
            Bolatito
            <br />
            <span className="italic font-light text-muted-foreground">Winjobi</span>
          </motion.h1>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="md:col-span-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-md"
            >
              Independent product designer crafting calm, considered interfaces
              for ambitious teams.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="md:col-span-6 flex flex-wrap gap-3 md:justify-end"
            >
              <Button
                size="lg"
                onClick={scrollToContact}
                className="group rounded-full h-12 px-6 bg-foreground text-background hover:bg-foreground/90"
              >
                Start a project
                <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-full h-12 px-6 border-border bg-transparent hover:bg-secondary"
              >
                <a
                  href="https://www.behance.net/bowthetechpm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View work
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="container mx-auto px-6 md:px-10 mt-16"
      >
        <div className="border-t border-border pt-6 flex flex-wrap items-end justify-between gap-6">
          <div className="flex items-end gap-10 md:gap-16">
            <div>
              <div className="text-3xl md:text-4xl font-medium text-foreground">02</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-1">
                Years
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-medium text-foreground">10+</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-1">
                Projects
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="text-3xl md:text-4xl font-medium text-foreground">UI · UX</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-1">
                Discipline
              </div>
            </div>
          </div>

          <a
            href="#about"
            className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors group"
          >
            Scroll
            <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
