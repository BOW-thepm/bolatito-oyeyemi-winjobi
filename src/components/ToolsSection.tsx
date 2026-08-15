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
  'Design System',
];

const totalCells = 18;

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
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border border-border"
        >
          {Array.from({ length: totalCells }).map((_, i) => {
            const tool = tools[i];
            const isLastColDefault = (i + 1) % 2 === 0;
            const isLastColSm = (i + 1) % 3 === 0;
            const isLastColLg = (i + 1) % 6 === 0;
            const isLastRowDefault = i >= totalCells - 2;
            const isLastRowSm = i >= totalCells - 3;
            const isLastRowLg = i >= totalCells - 6;

            return (
              <motion.div
                key={tool ?? `empty-${i}`}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className={[
                  'relative flex items-center justify-between p-5 md:p-6 min-h-[88px] md:min-h-[104px] border-r border-b border-border',
                  isLastColDefault ? 'border-r-0' : '',
                  isLastColSm ? 'sm:border-r-0' : '',
                  isLastColLg ? 'lg:border-r-0' : '',
                  isLastRowDefault ? 'border-b-0' : '',
                  isLastRowSm ? 'sm:border-b-0' : '',
                  isLastRowLg ? 'lg:border-b-0' : '',
                  tool ? 'group hover:bg-secondary/40 transition-colors' : '',
                ].join(' ')}
              >
                {tool ? (
                  <>
                    <span className="text-sm md:text-base font-medium text-foreground">
                      {tool}
                    </span>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </>
                ) : null}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsSection;
