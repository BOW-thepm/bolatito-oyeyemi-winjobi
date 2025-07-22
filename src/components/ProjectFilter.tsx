import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface ProjectFilterProps {
  categories: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export const ProjectFilter = ({ categories, activeFilter, onFilterChange }: ProjectFilterProps) => {
  return (
    <motion.div 
      className="flex flex-wrap gap-3 justify-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeFilter === category ? "default" : "outline"}
          onClick={() => onFilterChange(category)}
          className={`
            relative overflow-hidden transition-all duration-300 px-6 py-2 rounded-full
            ${activeFilter === category 
              ? 'bg-primary text-primary-foreground shadow-lg' 
              : 'hover:bg-primary/10 hover:border-primary/50'
            }
          `}
        >
          {activeFilter === category && (
            <motion.div
              className="absolute inset-0 bg-primary"
              layoutId="activeFilter"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-10">{category}</span>
        </Button>
      ))}
    </motion.div>
  );
};