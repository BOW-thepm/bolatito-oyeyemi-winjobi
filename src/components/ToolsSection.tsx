
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useParallaxScroll';

const ToolsSection = () => {
  const fadeRef = useIntersectionObserver();
  
  const tools = [
    {
      category: "Design",
      items: [
        { name: "Figma", icon: "🎨" },
        { name: "Adobe XD", icon: "🔷" },
        { name: "Sketch", icon: "💎" },
        { name: "Adobe Illustrator", icon: "🎭" },
        { name: "Adobe Photoshop", icon: "🖼️" },
        { name: "Framer", icon: "⚡" }
      ]
    },
    {
      category: "Prototyping",
      items: [
        { name: "InVision", icon: "🚀" },
        { name: "Principle", icon: "⭐" },
        { name: "ProtoPie", icon: "🥧" },
        { name: "Marvel", icon: "✨" }
      ]
    },
    {
      category: "Research",
      items: [
        { name: "Maze", icon: "🔍" },
        { name: "UserTesting", icon: "👥" },
        { name: "Hotjar", icon: "🔥" },
        { name: "Miro", icon: "🎯" }
      ]
    },
    {
      category: "Development",
      items: [
        { name: "HTML/CSS", icon: "💻" },
        { name: "React", icon: "⚛️" },
        { name: "JavaScript", icon: "📜" },
        { name: "Git", icon: "🌿" }
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
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
            The tools and technologies I use to bring designs to life and create exceptional user experiences.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {tools.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              variants={item}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="group"
            >
              <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg p-6 rounded-2xl border border-white/20 dark:border-gray-700/30 hover:bg-white/15 dark:hover:bg-gray-800/25 hover:border-white/30 dark:hover:border-gray-600/40 transition-all duration-300 shadow-lg hover:shadow-xl magnetic-hover h-full">
                <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                  {category.category}
                </h3>
                
                <div className="space-y-4">
                  {category.items.map((tool, toolIndex) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: categoryIndex * 0.1 + toolIndex * 0.05 
                      }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/20 transition-colors group-hover:translate-x-1 transition-transform duration-200"
                    >
                      <span className="text-2xl">{tool.icon}</span>
                      <span className="text-foreground font-medium">{tool.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsSection;
