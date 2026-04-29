import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, LayoutGrid, List } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { projects } from '@/data/projects';

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

type ViewMode = 'grid' | 'list';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

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
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link to={`/projects/${project.slug}`} className="group block">
                  <div className="relative overflow-hidden bg-secondary aspect-[4/5] mb-6 rounded-sm">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <div>
                      <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">
                        {String(index + 1).padStart(2, '0')} · {project.category}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-medium text-foreground flex items-center gap-2">
                        {project.title}
                        <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </h3>
                    </div>
                    <span className="text-sm text-muted-foreground tabular-nums">
                      {project.year}
                    </span>
                  </div>
                  <p className="mt-3 text-muted-foreground max-w-md leading-relaxed">
                    {project.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
