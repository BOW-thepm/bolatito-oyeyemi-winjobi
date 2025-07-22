import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Eye } from 'lucide-react';
import { useState } from 'react';

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

interface ProjectCardProps {
  project: Project;
  index: number;
  onQuickView: (project: Project) => void;
}

export const ProjectCard = ({ project, index, onQuickView }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className="gallery-card rounded-3xl overflow-hidden aspect-[4/5] relative cursor-pointer"
        whileHover={{ 
          y: -12,
          transition: { 
            duration: 0.4, 
            ease: [0.25, 0.46, 0.45, 0.94] 
          } 
        }}
        onClick={() => onQuickView(project)}
      >
        {/* Image Container */}
        <div className="relative w-full h-full overflow-hidden">
          <motion.img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ 
              scale: isHovered ? 1.08 : 1,
              filter: isHovered ? 'brightness(0.7)' : 'brightness(1)'
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          
          {/* Shimmer effect on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            style={{ transform: 'translateX(-100%) translateY(-100%) rotate(45deg)' }}
            animate={isHovered ? {
              transform: 'translateX(100%) translateY(100%) rotate(45deg)'
            } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>

        {/* Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Content Overlay */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-end p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20
          }}
          transition={{ duration: 0.4, delay: isHovered ? 0.1 : 0 }}
        >
          {/* Year badge */}
          <motion.span 
            className="text-white/80 text-sm font-medium mb-3 inline-block w-fit px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isHovered ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {project.year}
          </motion.span>

          {/* Title */}
          <motion.h3 
            className="text-white text-2xl font-bold mb-3 leading-tight"
            initial={{ y: 10, opacity: 0 }}
            animate={isHovered ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            {project.title}
          </motion.h3>

          {/* Description */}
          <motion.p 
            className="text-white/90 text-sm leading-relaxed mb-6 line-clamp-3"
            initial={{ y: 10, opacity: 0 }}
            animate={isHovered ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {project.fullDescription}
          </motion.p>

          {/* Tags */}
          <motion.div 
            className="flex flex-wrap gap-2 mb-6"
            initial={{ y: 10, opacity: 0 }}
            animate={isHovered ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            {project.tags.slice(0, 3).map((tag, tagIndex) => (
              <motion.span
                key={tag}
                className="text-xs bg-white/20 text-white px-3 py-1 rounded-full backdrop-blur-sm"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isHovered ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + tagIndex * 0.05 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="flex gap-3"
            initial={{ y: 10, opacity: 0 }}
            animate={isHovered ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Button
              size="sm"
              variant="ghost"
              className="text-white hover:bg-white/20 border border-white/30 backdrop-blur-sm rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                onQuickView(project);
              }}
            >
              <Eye className="w-4 h-4 mr-2" />
              Quick View
            </Button>
            
            <Button
              size="sm"
              variant="ghost"
              className="text-white hover:bg-white/20 border border-white/30 backdrop-blur-sm rounded-full"
              asChild
              onClick={(e) => e.stopPropagation()}
            >
              <a href={project.caseStudyUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Case Study
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating corner decoration */}
        <motion.div
          className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full backdrop-blur-sm"
          animate={isHovered ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Info below card */}
      <div className="mt-6 px-2">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full transition-colors duration-300 hover:bg-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};