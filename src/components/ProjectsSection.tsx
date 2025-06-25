
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
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
    {
      id: 3,
      title: "Healthcare Portal",
      description: "Creating an accessible healthcare management system for patients and providers.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caseStudyUrl: "#"
    },
    {
      id: 4,
      title: "Smart Home App",
      description: "Designing an intuitive interface for controlling home devices with elegant interactions.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caseStudyUrl: "#"
    },
    {
      id: 5,
      title: "Financial Dashboard",
      description: "Modern investment platform with sophisticated data visualization and user experience.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caseStudyUrl: "#"
    },
    {
      id: 6,
      title: "Travel Experience",
      description: "Immersive travel booking platform with focus on storytelling and visual appeal.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caseStudyUrl: "#"
    },
    {
      id: 7,
      title: "Educational Platform",
      description: "Interactive learning environment designed for modern students and educators.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caseStudyUrl: "#"
    },
    {
      id: 8,
      title: "Brand Identity System",
      description: "Comprehensive visual identity design for a contemporary lifestyle brand.",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
    <section id="projects" className="section-padding py-24 lg:py-32 bg-neutral-900 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/30 to-neutral-900/50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block py-2 px-4 mb-6 bg-neutral-800/50 text-neutral-300 rounded-full text-sm font-medium tracking-wide border border-neutral-700/50"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured Work
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6 text-neutral-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Selected <span className="text-transparent bg-gradient-to-r from-neutral-300 to-neutral-500 bg-clip-text">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            A curated collection of design work showcasing thoughtful solutions and creative excellence.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
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
                className="relative overflow-hidden rounded-2xl aspect-[4/5] shadow-2xl shadow-black/40"
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
                
                {/* Dark Gradient Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
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
                  <p className="text-neutral-300 text-sm mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="text-white hover:text-neutral-200 hover:bg-white/10 p-0 gap-2 group/btn self-start border border-white/20 px-4 py-2 rounded-full backdrop-blur-sm"
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
        
        <div className="text-center mt-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Button className="bg-neutral-800 hover:bg-neutral-700 text-white text-lg px-10 py-6 h-auto rounded-full border border-neutral-600/50 shadow-2xl shadow-black/40 backdrop-blur-sm">
              View All Projects
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
