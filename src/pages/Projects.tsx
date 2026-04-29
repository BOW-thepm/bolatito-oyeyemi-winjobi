import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronDown, Filter, Grid, List } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectModal } from '@/components/ProjectModal';
import { ProjectFilter } from '@/components/ProjectFilter';
import { useParallaxScroll, useIntersectionObserver } from '@/hooks/useParallaxScroll';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  caseStudyUrl: string;
  tags: string[];
  year: string;
  category: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'timeline'>('grid');
  const heroRef = useParallaxScroll(0.3);
  const sectionRef = useIntersectionObserver();
  
  const projects: Project[] = [
    {
      id: 1,
      title: "TODO++",
      description: "A simple hardware based to do list designed for users who want a dedicated task management device.",
      fullDescription: "TODO++ is an innovative hardware-based task management solution that bridges the gap between digital convenience and physical interaction. The project focused on creating a dedicated device that helps users manage their daily tasks without the distractions of smartphones or computers. Through extensive user research and iterative prototyping, we developed a tactile interface that combines the satisfaction of physical interaction with digital efficiency.",
      image: "/lovable-uploads/dde561b4-ffa1-4856-80c1-0961939c864f.png",
      caseStudyUrl: "https://www.behance.net/gallery/226627939/TODO",
      tags: ["Product Design", "Hardware", "UX/UI", "User Research"],
      year: "2024",
      category: "Product Design"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Designing a seamless shopping experience for a fashion retailer with modern aesthetics.",
      fullDescription: "A comprehensive e-commerce platform redesign focusing on user experience, conversion optimization, and brand storytelling. The project involved creating a cohesive design system that reflects the brand's premium positioning while ensuring accessibility and performance. We implemented advanced filtering, personalized recommendations, and streamlined checkout flows that increased conversion rates by 40%.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caseStudyUrl: "#",
      tags: ["E-commerce", "Web Design", "UX Strategy", "Conversion Optimization"],
      year: "2023",
      category: "Web Design"
    },
    {
      id: 3,
      title: "Healthcare Portal",
      description: "Creating an accessible healthcare management system for patients and providers.",
      fullDescription: "A patient-centered healthcare portal designed to improve communication between patients and healthcare providers. The project emphasized accessibility, data visualization, and streamlined workflows to enhance the overall healthcare experience. We conducted extensive user testing with diverse patient groups to ensure the interface meets WCAG 2.1 AA standards and provides clear, actionable health insights.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caseStudyUrl: "#",
      tags: ["Healthcare", "Accessibility", "Data Visualization", "User Testing"],
      year: "2023",
      category: "Healthcare"
    },
    {
      id: 4,
      title: "Smart Home App",
      description: "Designing an intuitive interface for controlling home devices with elegant interactions.",
      fullDescription: "An IoT control application that simplifies smart home management through intuitive design and thoughtful user flows. The project focused on creating a unified experience across multiple device types and platforms. We developed a context-aware interface that learns user preferences and suggests optimal automation routines, resulting in 60% increased user engagement.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caseStudyUrl: "#",
      tags: ["IoT", "Mobile Design", "Interaction Design", "Smart Systems"],
      year: "2023",
      category: "Mobile"
    },
    {
      id: 5,
      title: "Financial Dashboard",
      description: "Modern investment platform with sophisticated data visualization and user experience.",
      fullDescription: "A comprehensive financial dashboard that transforms complex investment data into actionable insights. The design emphasizes clarity, trust, and sophisticated data visualization while maintaining ease of use for both novice and expert investors. We implemented real-time data feeds, predictive analytics visualizations, and educational tooltips to democratize financial information.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caseStudyUrl: "#",
      tags: ["Fintech", "Data Visualization", "Dashboard Design", "Analytics"],
      year: "2022",
      category: "Fintech"
    },
    {
      id: 6,
      title: "Travel Experience",
      description: "Immersive travel booking platform with focus on storytelling and visual appeal.",
      fullDescription: "A travel platform that reimagines the booking experience through immersive storytelling and beautiful visual design. The project aimed to inspire wanderlust while providing practical booking functionality. We created interactive destination guides, 360° virtual previews, and social proof integration that increased booking completion rates by 35%.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caseStudyUrl: "#",
      tags: ["Travel", "Storytelling", "Visual Design", "Interactive Media"],
      year: "2022",
      category: "Travel"
    }
  ];

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleQuickView = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

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
    <div className="min-h-screen gallery-backdrop">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 glass-morphism border-b border-border/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-all duration-300 group">
            <motion.div
              whileHover={{ x: -4 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowLeft size={20} />
            </motion.div>
            <span className="font-medium">Back to Home</span>
          </Link>
          
          <motion.h1 
            className="text-xl font-bold text-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Projects
          </motion.h1>
          
          <div className="flex items-center gap-3">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className="rounded-full"
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === 'timeline' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('timeline')}
              className="rounded-full"
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div ref={heroRef} className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-foreground leading-none">
              Projects
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 px-4" ref={sectionRef}>

      {/* Projects Grid */}
      <section className="pb-24 px-4">
        <div className="container mx-auto">
          {viewMode === 'grid' ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              layout
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onQuickView={handleQuickView}
                />
              ))}
            </motion.div>
          ) : (
            <div className="space-y-12">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="flex flex-col lg:flex-row gap-8 items-center p-8 gallery-card rounded-3xl"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full aspect-[4/3] object-cover rounded-2xl"
                    />
                  </div>
                  <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <span className="text-sm text-primary font-medium">{project.year} • {project.category}</span>
                    <h3 className="text-3xl font-bold text-foreground mt-2 mb-4">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{project.fullDescription}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button onClick={() => handleQuickView(project)} className="rounded-full">
                      View Project
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      {/* Floating back to top */}
      <motion.div
        className="fixed bottom-8 right-8 z-30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Button
          variant="outline"
          size="sm"
          className="rounded-full w-12 h-12 p-0 glass-morphism hover:scale-110 transition-all duration-300"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ChevronDown className="w-5 h-5 rotate-180" />
        </Button>
      </motion.div>
    </div>
  );
};

export default Projects;