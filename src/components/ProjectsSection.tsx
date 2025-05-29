import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, ArrowRight, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const projects = [
    {
      id: 1,
      title: "TODO++",
      description: "A simple hardware based to do list designed for users who want a dedicated task management device on their desk.",
      image: "/lovable-uploads/dde561b4-ffa1-4856-80c1-0961939c864f.png",
      category: "Mobile App",
      tags: ["UI Design", "UX Research", "Prototyping"],
      caseStudyUrl: "https://www.behance.net/gallery/226627939/TODO"
    },
    {
      id: 2,
      title: "E-commerce Website",
      description: "Designing a seamless shopping experience for a fashion retailer",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Web Design",
      tags: ["UI Design", "Design System", "Front-end"]
    },
    {
      id: 3,
      title: "Healthcare Portal",
      description: "Creating an accessible healthcare management system for patients",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Web App",
      tags: ["UX Design", "Accessibility", "User Testing"]
    },
    {
      id: 4,
      title: "Smart Home App",
      description: "Designing an intuitive interface for controlling home devices",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Mobile App",
      tags: ["UI Design", "Interaction Design", "Prototyping"]
    },
  ];

  const filters = ['All', 'Web Design', 'Mobile App', 'Web App'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  // Animation variants
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
    <section id="projects" className="section-padding py-24 lg:py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block py-1 px-3 mb-4 bg-designer-light-yellow text-designer-dark-yellow rounded-full text-sm font-medium"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            My Work
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-foreground/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Explore some of my recent design work, showcasing my approach to solving complex problems through thoughtful design.
          </motion.p>
        </div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full p-1.5 flex gap-2 shadow-md">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "relative px-4 py-2 rounded-full text-sm font-medium transition-all",
                  "hover:text-primary focus:outline-none"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeFilter === filter && (
                  <motion.div
                    layoutId="filterBackground"
                    className="absolute inset-0 bg-primary rounded-full"
                    initial={false}
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
                <span className={activeFilter === filter ? "text-primary-foreground relative z-10" : ""}>
                  {filter}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              transition={{ duration: 0.5 }}
              className="group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden aspect-video">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center"
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  >
                    <Button 
                      variant="secondary" 
                      size="lg"
                      className="gap-2 shadow-xl"
                    >
                      <Eye size={18} />
                      View Details
                    </Button>
                  </motion.div>
                  
                  <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                    animate={{ 
                      scale: hoveredProject === project.id ? 1.05 : 1
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  <Badge 
                    variant="outline" 
                    className="absolute top-4 right-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-foreground border-none z-20"
                  >
                    {project.category}
                  </Badge>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  </div>
                  <p className="text-foreground/70 mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Button 
                      variant="ghost" 
                      className="text-primary hover:text-designer-dark-yellow hover:bg-designer-light-yellow/50 p-0 gap-2 group/btn"
                      asChild
                    >
                      <a 
                        href={project.caseStudyUrl || "#"} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        View Case Study 
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight size={16} />
                        </motion.div>
                      </a>
                    </Button>
                    
                    <Button 
                      size="icon"
                      variant="outline"
                      className="rounded-full h-8 w-8"
                    >
                      <ExternalLink size={14} />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-primary hover:bg-designer-dark-yellow text-primary-foreground text-lg px-8 py-6 h-auto rounded-xl shadow-lg shadow-primary/20">
              View All Projects
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

// Helper function since cn might be missing in this context
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
