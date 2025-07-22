import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const projects = [
    {
      id: 1,
      title: "TODO++",
      description: "A simple hardware based to do list designed for users who want a dedicated task management device.",
      fullDescription: "TODO++ is an innovative hardware-based task management solution that bridges the gap between digital convenience and physical interaction. The project focused on creating a dedicated device that helps users manage their daily tasks without the distractions of smartphones or computers.",
      image: "/lovable-uploads/dde561b4-ffa1-4856-80c1-0961939c864f.png",
      caseStudyUrl: "https://www.behance.net/gallery/226627939/TODO",
      tags: ["Product Design", "Hardware", "UX/UI"],
      year: "2024"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Designing a seamless shopping experience for a fashion retailer with modern aesthetics.",
      fullDescription: "A comprehensive e-commerce platform redesign focusing on user experience, conversion optimization, and brand storytelling. The project involved creating a cohesive design system that reflects the brand's premium positioning while ensuring accessibility and performance.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caseStudyUrl: "#",
      tags: ["E-commerce", "Web Design", "UX Strategy"],
      year: "2023"
    },
    {
      id: 3,
      title: "Healthcare Portal",
      description: "Creating an accessible healthcare management system for patients and providers.",
      fullDescription: "A patient-centered healthcare portal designed to improve communication between patients and healthcare providers. The project emphasized accessibility, data visualization, and streamlined workflows to enhance the overall healthcare experience.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caseStudyUrl: "#",
      tags: ["Healthcare", "Accessibility", "Data Visualization"],
      year: "2023"
    },
    {
      id: 4,
      title: "Smart Home App",
      description: "Designing an intuitive interface for controlling home devices with elegant interactions.",
      fullDescription: "An IoT control application that simplifies smart home management through intuitive design and thoughtful user flows. The project focused on creating a unified experience across multiple device types and platforms.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caseStudyUrl: "#",
      tags: ["IoT", "Mobile Design", "Interaction Design"],
      year: "2023"
    },
    {
      id: 5,
      title: "Financial Dashboard",
      description: "Modern investment platform with sophisticated data visualization and user experience.",
      fullDescription: "A comprehensive financial dashboard that transforms complex investment data into actionable insights. The design emphasizes clarity, trust, and sophisticated data visualization while maintaining ease of use for both novice and expert investors.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caseStudyUrl: "#",
      tags: ["Fintech", "Data Visualization", "Dashboard Design"],
      year: "2022"
    },
    {
      id: 6,
      title: "Travel Experience",
      description: "Immersive travel booking platform with focus on storytelling and visual appeal.",
      fullDescription: "A travel platform that reimagines the booking experience through immersive storytelling and beautiful visual design. The project aimed to inspire wanderlust while providing practical booking functionality.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caseStudyUrl: "#",
      tags: ["Travel", "Storytelling", "Visual Design"],
      year: "2022"
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Home</span>
          </Link>
          <h1 className="text-xl font-bold text-foreground">Projects</h1>
          <div className="w-24"></div> {/* Spacer for centering */}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My <span className="gradient-text">Projects</span>
          </motion.h1>
          <motion.p 
            className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A comprehensive showcase of my design work, featuring thoughtful solutions across various industries and platforms. Each project represents a unique challenge and creative journey.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 px-4">
        <div className="container mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
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
                  
                  {/* Gradient Overlay */}
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
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-xs bg-white/20 text-white px-2 py-1 rounded-full backdrop-blur-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-white/70 text-sm">{project.year}</span>
                    </div>
                    
                    <h3 className="text-white text-xl font-bold mb-2 font-serif leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-white/90 text-sm mb-4 leading-relaxed line-clamp-3">
                      {project.fullDescription}
                    </p>
                    
                    <Button 
                      variant="ghost" 
                      className="text-white hover:text-white hover:bg-white/20 p-0 gap-2 group/btn self-start border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm"
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
                          <ExternalLink size={16} />
                        </motion.div>
                      </a>
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Project Info Below Image */}
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;