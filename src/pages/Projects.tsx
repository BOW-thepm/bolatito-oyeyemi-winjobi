import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { projects } from '@/data/projects';
import ProjectHoverPreview from '@/components/ProjectHoverPreview';
import { LockKeyhole } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hovered, setHovered] = useState<number | null>(null);

  const filteredProjects =
    activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/70 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
            Projects
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-6"
          >
            (Selected work)
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] text-foreground"
          >
            Step Into the <span className="italic font-light text-muted-foreground">Gallery of Solutions</span>
          </motion.h1>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 md:px-10 mb-16">
        <div className="container mx-auto max-w-6xl border-y border-border py-5 flex flex-wrap items-center gap-x-2 gap-y-3">
          {categories.map((cat) => {
            const active = cat === activeFilter;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-xs tracking-wide px-4 py-2 rounded-full border transition-colors ${
                  active
                    ? 'bg-foreground text-background border-foreground'
                    : 'bg-transparent text-foreground border-border hover:border-foreground/40'
                }`}
              >
                {cat}
              </button>
            );
          })}
          <span className="ml-auto text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
            {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </span>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-32 px-6 md:px-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div layout className="border-t border-border" onMouseLeave={() => setHovered(null)}>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                onMouseEnter={() => setHovered(project.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`border-b border-border transition-opacity duration-300 ${
                  hovered !== null && hovered !== project.id ? 'opacity-40' : 'opacity-100'
                }`}
              >
                <Link
                  to={`/projects/${project.slug}`}
                  onClick={(event) => {
                    if (project.locked) {
                      event.preventDefault();
                      toast({
                        title: 'Case study locked',
                        description: `${project.title} is coming soon.`,
                      });
                    }
                  }}
                  className={`group flex items-baseline gap-6 py-7 md:py-9 ${project.locked ? 'opacity-65' : ''}`}
                >
                  <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground w-8 shrink-0 transition-colors duration-300 group-hover:text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-light tracking-tight text-foreground flex items-center gap-3 transition-all duration-500 ease-out group-hover:translate-x-2 group-hover:text-accent group-hover:italic">
                    {project.title}
                    <ArrowUpRight className="h-5 w-5 md:h-6 md:w-6 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                  </h3>
                  {project.locked && (
                    <span className="inline-flex shrink-0 items-center gap-1.5 border border-accent/40 px-2 py-1 text-[9px] uppercase tracking-[0.16em] text-accent">
                      <LockKeyhole className="h-3 w-3" aria-hidden="true" />
                      Coming soon
                    </span>
                  )}
                  <span className="ml-auto hidden sm:block text-[10px] tracking-[0.25em] uppercase text-muted-foreground text-right">
                    {project.category}
                  </span>
                  <span className="text-sm text-muted-foreground tabular-nums w-12 text-right shrink-0">
                    {project.year}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <ProjectHoverPreview
            src={filteredProjects.find((p) => p.id === hovered)?.image}
            title={filteredProjects.find((p) => p.id === hovered)?.title}
          />
        </div>
      </section>
    </div>
  );
};

export default Projects;
