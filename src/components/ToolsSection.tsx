import { motion } from 'framer-motion';

const tools: string[] = [
  'Figma',
  'FigJam',
  'Sketch',
  'Draw.io',
  'Jira',
  'Linear',
  'Plane',
  'Notion',
  'Slack',
  'Discord',
  'Zoom',
  'Google Meet',
  'Microsoft Teams',
  'DingTalk',
  'Google Forms',
  'UserTesting',
  'X-Mind',
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="border-y border-border divide-y divide-border"
        >
          {tools.map((tool, i) => (
            <motion.div
              key={tool}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="grid grid-cols-12 items-center gap-4 py-5 px-2 group hover:bg-secondary/40 transition-colors"
            >
              <span className="col-span-2 md:col-span-1 text-[10px] tracking-[0.25em] uppercase text-muted-foreground tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="col-span-10 md:col-span-9 text-base md:text-lg font-medium text-foreground">
                {tool}
              </span>
              <span className="hidden md:block md:col-span-2 text-right text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                Tool
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsSection;
