import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useParallaxScroll';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const fadeRef = useIntersectionObserver();
  
  const projects = [
    {
      id: 1,
      title: "TODO++",
      description: "A simple hardware based to do list designed for users who want a dedicated task management device.",
      image: "/lovable-uploads/dde561b4-ffa1-4856-80c1-0961939c864f.png",
      caseStudyUrl: "https://www.behance.net/gallery/226627939/TODO"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Designing a seamless shopping experience for a fashion retailer with modern aesthetics.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caseStudyUrl: "#"
    },
  ];
  
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <section id="projects" className="section-padding py-24 lg:py-32 featured-work-section relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(174,198,207,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 fade-slide-up" ref={fadeRef}>
          <motion.span 
            className="inline-block py-3 px-6 mb-6 bg-card/80 backdrop-blur-sm text-primary rounded-full text-sm font-medium tracking-wide border border-primary/20 shadow-sm"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured Work
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6 text-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Selected <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            A curated collection of design work showcasing thoughtful solutions and creative excellence.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <motion.div 
                className="relative overflow-hidden rounded-2xl aspect-[4/5] shadow-xl shadow-primary/10 bg-card border border-primary/10"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Project Image */}
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  animate={{ 
                    scale: hoveredProject === project.id ? 1.05 : 1
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                
                {/* Soft Gradient Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent"
                  animate={{ 
                    opacity: hoveredProject === project.id ? 1 : 0
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                
                {/* Content Overlay */}
                <motion.div
                  className="absolute inset-0 flex flex-col justify-end p-6"
                  animate={{ 
                    opacity: hoveredProject === project.id ? 1 : 0,
                    y: hoveredProject === project.id ? 0 : 20
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <h3 className="text-white text-xl font-bold mb-2 font-serif leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-white/90 text-sm mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="text-white hover:text-white hover:bg-white/20 p-0 gap-2 group/btn self-start border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm magnetic-hover"
                    asChild
                  >
                    <a 
                      href={project.caseStudyUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      View Case Study 
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ArrowRight size={16} />
                      </motion.div>
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 px-8 py-6 text-lg"
              asChild
            >
              <Link to="/projects">
                View All Projects
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
