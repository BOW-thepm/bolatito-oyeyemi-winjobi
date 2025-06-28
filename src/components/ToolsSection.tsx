
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useParallaxScroll';

const ToolsSection = () => {
  const fadeRef = useIntersectionObserver();
  
  const tools = [
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Jira", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
    { name: "Linear", logo: "https://asset.brandfetch.io/idw382q0ib/idZDJFLzOc.svg" },
    { name: "Slack", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
    { name: "Plane", logo: "https://plane.so/logo.svg" },
    { name: "Discord", logo: "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png" },
    { name: "Google Meet", logo: "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png" },
    { name: "FigJam", logo: "https://help.figma.com/hc/article_attachments/4405269443863/figjam-logo.png" },
    { name: "Microsoft Teams", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg" },
    { name: "Zoom", logo: "https://d24cgw3uvb9a9h.cloudfront.net/static/93516/image/new/ZoomLogo_112x112.png" },
    { name: "Google Forms", logo: "https://ssl.gstatic.com/docs/templates/thumbnails/forms-blank-googlecolors.png" },
    { name: "UserTesting", logo: "https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5b5c5e0bbcdce275960a7c7a_UserTesting_Icon.svg" }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="section-padding py-24 lg:py-32 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-slide-up" ref={fadeRef}>
          <motion.span 
            className="inline-block py-3 px-6 mb-6 bg-card/80 backdrop-blur-sm text-primary rounded-full text-sm font-medium tracking-wide border border-primary/20 shadow-sm"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Tools & Technologies
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6 text-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            My <span className="gradient-text">Toolkit</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            The essential tools I use to create exceptional digital experiences and streamline my design workflow.
          </motion.p>
        </div>

        {/* Desktop: 3-column grid, Mobile: horizontal scroll with snap */}
        <div className="hidden md:block">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                variants={item}
                className="group relative"
              >
                <div className="relative p-8 rounded-2xl bg-white/5 dark:bg-white/10 backdrop-blur-lg border border-white/10 dark:border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_10px_15px_-3px_rgba(201,167,184,0.3),0_4px_6px_-2px_rgba(201,167,184,0.2)] dark:hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_10px_15px_-3px_rgba(246,209,219,0.4),0_4px_6px_-2px_rgba(246,209,219,0.3)] transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 dark:from-primary/10 dark:via-transparent dark:to-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <motion.img
                        src={tool.logo}
                        alt={`${tool.name} logo`}
                        className="w-full h-full object-contain"
                        whileHover={{ 
                          scale: 1.1,
                          transition: { type: "spring", stiffness: 400, damping: 17 }
                        }}
                        onError={(e) => {
                          // Fallback to a simple icon if logo fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = document.createElement('div');
                          fallback.className = 'w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary font-bold text-lg';
                          fallback.textContent = tool.name.charAt(0);
                          target.parentNode?.appendChild(fallback);
                        }}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                      {tool.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile: Horizontal scroll with snap */}
        <div className="block md:hidden">
          <motion.div 
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-4 -mx-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
          >
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                variants={item}
                className="group relative flex-shrink-0 snap-center"
                style={{ width: '140px' }}
              >
                <div className="relative p-6 rounded-2xl bg-white/5 dark:bg-white/10 backdrop-blur-lg border border-white/10 dark:border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] overflow-hidden h-full">
                  
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 dark:from-primary/10 dark:via-transparent dark:to-secondary/10 rounded-2xl opacity-0 group-active:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img
                        src={tool.logo}
                        alt={`${tool.name} logo`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = document.createElement('div');
                          fallback.className = 'w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary font-bold text-sm';
                          fallback.textContent = tool.name.charAt(0);
                          target.parentNode?.appendChild(fallback);
                        }}
                      />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground leading-tight">
                      {tool.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ToolsSection;
