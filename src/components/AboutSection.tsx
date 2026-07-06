import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FileText, ChevronDown, ChevronUp } from 'lucide-react';
import SkillBars from './SkillBars';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [aboutExpanded, setAboutExpanded] = useState(false);

  const aboutParagraphs = [
    "I didn't start my career as a Product Designer—I started by understanding products. My journey began in Product Management, where I learned that building successful products isn't about adding more features; it's about understanding people, asking the right questions, balancing business goals with user needs, and making intentional decisions. That experience continues to shape how I design today.",
    "For me, product design goes beyond creating beautiful interfaces. Design is a way of solving problems. Every screen, interaction, and workflow should have a purpose, reduce friction, and help users accomplish their goals with confidence. I enjoy breaking down complex challenges into experiences that feel simple, intuitive, and valuable.",
    "One of my favorite parts of the design process is collaboration. I enjoy working closely with product managers, engineers, QA testers, marketers, and other stakeholders because the best products are rarely designed in isolation. Different perspectives lead to better ideas, stronger decisions, and products that truly serve both users and the business.",
    "I'm driven by curiosity and continuous improvement. I ask questions, challenge assumptions, validate ideas, and iterate until we arrive at solutions that create real impact. At the end of the day, my goal isn't just to design interfaces—it's to help build products that people genuinely enjoy using and businesses are proud to grow.",
  ];

  const visibleParagraphs = aboutExpanded ? aboutParagraphs : aboutParagraphs.slice(0, 2);

  const tabLabels = ['About', 'Education'];

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
              {tabLabels.map((label, index) => (
                <button
                  key={label}
                  onClick={() => setActiveTab(index)}
                  className={`text-left py-4 border-t border-border flex items-baseline justify-between transition-colors ${
                    activeTab === index
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <span className="text-lg font-medium">{label}</span>
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
              {activeTab === 1 ? (
                <div className="space-y-10">
                  <div className="border-l-2 border-accent pl-6">
                    <h4 className="text-[10px] tracking-[0.25em] uppercase text-accent mb-3">
                      Formal Education
                    </h4>
                    <p className="text-lg leading-relaxed text-foreground/80 font-light">
                      B.Sc. Biotechnology — (IUSEBA)
                    </p>
                  </div>
                  <div className="border-l-2 border-accent pl-6">
                    <h4 className="text-[10px] tracking-[0.25em] uppercase text-accent mb-3">
                      Professional Training & Certifications
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'Product Design — HerTechTrail Academy',
                        'Product Design Certificate of Proficiency — HNG Tech',
                        'Product Management Pro — HerTechTrail Academy',
                        'Product Management Starter — HerTechTrail Academy',
                        'Product Management Certificate of Proficiency — HNG Tech',
                      ].map((item, i) => (
                        <li
                          key={i}
                           className="text-lg leading-relaxed text-foreground/80 font-light"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {visibleParagraphs.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-lg leading-relaxed text-foreground/80 font-light"
                    >
                      {paragraph}
                    </p>
                  ))}
                  <button
                    onClick={() => setAboutExpanded((prev) => !prev)}
                    className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent/80 transition-colors mt-2"
                  >
                    {aboutExpanded ? (
                      <>
                        See less <ChevronUp className="h-4 w-4" />
                      </>
                    ) : (
                      <>
                        See more <ChevronDown className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              )}

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
