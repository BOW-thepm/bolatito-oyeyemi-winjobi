
import { motion } from 'framer-motion';
import { 
  Figma, 
  MessageSquare, 
  Users, 
  Video, 
  FileText, 
  TestTube 
} from 'lucide-react';

const ToolsSection = () => {
  const tools = [
    { name: 'Figma', icon: Figma, category: 'Design' },
    { name: 'Jira', icon: FileText, category: 'Project Management' },
    { name: 'Linear', icon: FileText, category: 'Project Management' },
    { name: 'Slack', icon: MessageSquare, category: 'Communication' },
    { name: 'Plane', icon: FileText, category: 'Project Management' },
    { name: 'Discord', icon: MessageSquare, category: 'Communication' },
    { name: 'Google Meet', icon: Video, category: 'Communication' },
    { name: 'FigJam', icon: Figma, category: 'Design' },
    { name: 'Microsoft Teams', icon: Users, category: 'Communication' },
    { name: 'Zoom', icon: Video, category: 'Communication' },
    { name: 'Google Forms', icon: FileText, category: 'Research' },
    { name: 'UserTesting', icon: TestTube, category: 'Research' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  return (
    <>
      <style>
        {`
          .toolkit-scroll::-webkit-scrollbar {
            display: none;
          }
          .toolkit-scroll {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          
          .neumorphic-card {
            background: linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 
              inset 0 1px 0 rgba(255, 255, 255, 0.1),
              0 4px 12px rgba(0, 0, 0, 0.1),
              0 2px 4px rgba(0, 0, 0, 0.06);
          }
          
          .dark .neumorphic-card {
            background: linear-gradient(145deg, rgba(201, 167, 184, 0.08), rgba(201, 167, 184, 0.03));
            border: 1px solid rgba(201, 167, 184, 0.15);
            box-shadow: 
              inset 0 1px 0 rgba(201, 167, 184, 0.1),
              0 4px 12px rgba(0, 0, 0, 0.2),
              0 2px 4px rgba(0, 0, 0, 0.1);
          }
          
          .card-glow {
            box-shadow: 
              inset 0 1px 0 rgba(255, 255, 255, 0.1),
              0 8px 25px rgba(201, 167, 184, 0.2),
              0 4px 12px rgba(0, 0, 0, 0.1);
          }
          
          .dark .card-glow {
            box-shadow: 
              inset 0 1px 0 rgba(201, 167, 184, 0.15),
              0 8px 25px rgba(201, 167, 184, 0.3),
              0 4px 12px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>
      
      <section className="section-padding bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
              My Toolkit
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The tools and platforms I use to bring ideas to life, from design conception to final delivery
            </p>
          </motion.div>

          {/* Desktop Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="hidden md:grid grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {tools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <motion.div
                  key={tool.name}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -4,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  className="neumorphic-card hover:card-glow rounded-2xl p-8 text-center transition-all duration-300 group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.1,
                      transition: { type: "spring", stiffness: 400, damping: 15 }
                    }}
                    className="mb-4 flex justify-center"
                  >
                    <IconComponent className="h-12 w-12 text-primary group-hover:text-primary/80 transition-colors" />
                  </motion.div>
                  <h3 className="font-semibold text-foreground mb-1">{tool.name}</h3>
                  <p className="text-sm text-muted-foreground">{tool.category}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="toolkit-scroll flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {tools.map((tool, index) => {
                const IconComponent = tool.icon;
                return (
                  <motion.div
                    key={tool.name}
                    variants={cardVariants}
                    className="neumorphic-card rounded-2xl p-6 text-center flex-shrink-0 w-40 snap-center"
                  >
                    <div className="mb-3 flex justify-center">
                      <IconComponent className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">{tool.name}</h3>
                    <p className="text-xs text-muted-foreground">{tool.category}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ToolsSection;
