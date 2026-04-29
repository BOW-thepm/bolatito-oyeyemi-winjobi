import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import SkillBars from './SkillBars';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabContent = [
    {
      title: 'About',
      content:
        "I'm Bolatito Oyeyemi Winjobi — a product designer who believes great design starts with understanding people. I approach every project with empathy, strategic thinking, and care for the smallest detail.",
    },
    {
      title: 'Education',
      content:
        "Bachelor's in Interactive Design from California College of Arts, plus continued study in Human-Computer Interaction. I attend industry workshops to keep current with methodology.",
    },
  ];

  return (
    <section id="about" className="section-padding relative bg-background">
      <div className="container mx-auto px-6 md:px-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-baseline justify-between border-b border-border pb-4 mb-16"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
            (01) About
          </span>
          <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground hidden sm:block">
            Designer · Researcher
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] max-w-5xl text-foreground"
        >
          Designing with <span className="italic font-light text-muted-foreground">empathy</span>,
          shipping with <span className="italic font-light text-muted-foreground">intent</span>.
        </motion.h2>

        {/* Tabbed content */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <div className="flex flex-col">
              {tabContent.map((tab, index) => (
                <button
                  key={tab.title}
                  onClick={() => setActiveTab(index)}
                  className={`text-left py-4 border-t border-border flex items-baseline justify-between transition-colors ${
                    activeTab === index
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <span className="text-lg font-medium">{tab.title}</span>
                  <span className="text-[10px] tracking-[0.2em] uppercase">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </button>
              ))}
              <div className="border-t border-border" />
            </div>
          </div>

          <div className="lg:col-span-8">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <p className="text-xl md:text-2xl leading-relaxed text-foreground/80 max-w-2xl font-light">
                {tabContent[activeTab].content}
              </p>

              <div className="mt-12 flex flex-wrap gap-3">
                <Button
                  className="rounded-full h-12 px-6 bg-foreground text-background hover:bg-foreground/90"
                  asChild
                >
                  <a
                    href="https://drive.google.com/file/d/1ap-JWBWX2pf1dVaIM6SDsNvIUoocmbnO/view"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="h-4 w-4" />
                    Download résumé
                  </a>
                </Button>
                <Button
                  variant="outline"
                  onClick={() =>
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="rounded-full h-12 px-6 border-border bg-transparent hover:bg-secondary"
                >
                  See process
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-32 pt-16 border-t border-border">
          <div className="flex items-baseline justify-between mb-12">
            <h3 className="text-2xl md:text-3xl font-medium text-foreground">Skills & expertise</h3>
            <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
              (Proficiency)
            </span>
          </div>
          <SkillBars />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
