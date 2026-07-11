import { motion } from 'framer-motion';

const categories: { name: string; tools: string[] }[] = [
  {
    name: 'Communication',
    tools: ['Slack', 'Discord', 'Zoom', 'Google Meet', 'Microsoft Teams', 'DingTalk'],
  },
  {
    name: 'Design & Prototyping',
    tools: ['Figma', 'FigJam', 'Sketch', 'Draw.io'],
  },
  {
    name: 'Product & Project',
    tools: ['Jira', 'Linear', 'Plane', 'Notion'],
  },
  {
    name: 'Research & Testing',
    tools: ['Google Forms', 'UserTesting', 'X-Mind'],
  },
];

const MAX_TOOLS = Math.max(...categories.map((cat) => cat.tools.length));

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
          className="w-full overflow-x-auto"
        >
          <table className="w-full min-w-[760px] border-collapse border border-border">
            <thead>
              <tr>
                <th className="text-left px-5 py-4 border-b border-r border-border bg-muted/50 w-[220px]">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                    Category
                  </span>
                </th>
                {Array.from({ length: MAX_TOOLS }).map((_, i) => (
                  <th
                    key={i}
                    className="text-left px-5 py-4 border-b border-r border-border bg-muted/50 w-[1%] min-w-[140px]"
                  >
                    <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {categories.map((cat, ci) => (
                <motion.tr
                  key={cat.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: ci * 0.08 }}
                >
                  <td className="px-5 py-6 border-b border-r border-border align-middle">
                    <div className="flex items-baseline gap-4">
                      <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground tabular-nums">
                        {String(ci + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-lg md:text-xl font-medium text-foreground">
                        {cat.name}
                      </h3>
                    </div>
                  </td>
                  {Array.from({ length: MAX_TOOLS }).map((_, i) => {
                    const tool = cat.tools[i];
                    return (
                      <td
                        key={i}
                        className="border-b border-r border-border align-middle"
                      >
                        {tool ? (
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: i * 0.03 }}
                            className="bg-background hover:bg-secondary transition-colors px-5 py-6 flex items-end justify-between h-full"
                          >
                            <span className="text-sm md:text-base font-medium text-foreground">
                              {tool}
                            </span>
                            <span className="text-[10px] text-muted-foreground tabular-nums">
                              {String(i + 1).padStart(2, '0')}
                            </span>
                          </motion.div>
                        ) : (
                          <div className="px-5 py-6 bg-muted/30 h-full">
                            <span className="text-[10px] text-muted-foreground/50 tabular-nums">
                              —
                            </span>
                          </div>
                        )}
                      </td>
                    );
                  })}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsSection;
