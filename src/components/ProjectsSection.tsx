import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects as allProjects } from '@/data/projects';

const ProjectsSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const projects = allProjects.slice(0, 2).map((p, i) => ({
    ...p,
    number: String(i + 1).padStart(2, '0'),
    tag: p.tags.slice(0, 2).join(' · '),
  }));

  return (
    <section id="projects" className="section-padding relative bg-background">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-baseline justify-between border-b border-border pb-4 mb-16"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
            (03) Selected work
          </span>
          <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground hidden sm:block">
            2024 — 2026
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl mb-20 text-foreground"
        >
          A small body of <span className="italic font-light text-muted-foreground">considered work</span>.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to={`/projects/${project.slug}`} className="group block">
              onMouseLeave={() => setHovered(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group block"
            >
              <div className="relative overflow-hidden bg-secondary aspect-[4/5] mb-6">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  animate={{ scale: hovered === project.id ? 1.04 : 1 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>

              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">
                    {project.number} · {project.tag}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-medium text-foreground flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </h3>
                </div>
                <span className="text-sm text-muted-foreground tabular-nums">{project.year}</span>
              </div>

              <p className="mt-3 text-muted-foreground max-w-md leading-relaxed">
                {project.description}
              </p>
            </motion.a>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-border flex items-center justify-between">
          <span className="text-sm text-muted-foreground">More work in the archive</span>
          <Button
            variant="outline"
            asChild
            className="rounded-full h-12 px-6 border-border bg-transparent hover:bg-secondary"
          >
            <Link to="/projects">
              View all projects
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
