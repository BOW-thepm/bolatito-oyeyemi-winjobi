import { motion } from 'framer-motion';

const categories: { name: string; tools: string[] }[] = [
  {
    name: 'Design & Prototyping',
    tools: ['Figma', 'FigJam', 'Sketch', 'Draw.io'],
  },
  {
    name: 'Product & Project',
    tools: ['Jira', 'Linear', 'Plane', 'Notion'],
  },
  {
    name: 'Communication',
    tools: ['Slack', 'Discord', 'Zoom', 'Google Meet', 'Microsoft Teams', 'DingTalk'],
  },
  {
    name: 'Research & Testing',
    tools: ['Google Forms', 'UserTesting', 'X-Mind'],
  },
];

const ToolsSection = () => {
  return (
    <section className="section-padding relative bg-background">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-baseline justify-between border-b border-border pb-4 mb-16"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
            (02) Toolkit
          </span>
          <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground hidden sm:block">
            Daily drivers
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] max-w-3xl mb-20 text-foreground"
        >
          Tools that shape{' '}
          <span className="italic font-light text-muted-foreground">the work</span>.
        </motion.h2>

        <div className="space-y-16">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: ci * 0.05 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 border-t border-border pt-8"
            >
              <div className="lg:col-span-4">
                <div className="flex items-baseline gap-4">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground tabular-nums">
                    {String(ci + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-medium text-foreground">
                    {cat.name}
                  </h3>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-border border border-border">
                  {cat.tools.map((tool, i) => (
                    <motion.div
                      key={tool}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.03 }}
                      className="bg-background hover:bg-secondary transition-colors px-5 py-8 flex items-end justify-between"
                    >
                      <span className="text-sm md:text-base font-medium text-foreground">
                        {tool}
                      </span>
                      <span className="text-[10px] text-muted-foreground tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
