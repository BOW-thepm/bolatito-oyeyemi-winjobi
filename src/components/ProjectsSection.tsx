import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects as allProjects } from '@/data/projects';
import ProjectHoverPreview from '@/components/ProjectHoverPreview';

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

        <div className="border-t border-border" onMouseLeave={() => setHovered(null)}>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              onMouseEnter={() => setHovered(project.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`border-b border-border transition-opacity duration-300 ${
                hovered !== null && hovered !== project.id ? 'opacity-40' : 'opacity-100'
              }`}
            >
              <Link
                to={`/projects/${project.slug}`}
                className="group flex items-baseline gap-6 py-7 md:py-9"
              >
                <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground w-8 shrink-0 transition-colors duration-300 group-hover:text-accent">
                  {project.number}
                </span>
                <h3 className="text-3xl md:text-5xl font-light tracking-tight text-foreground flex items-center gap-3 transition-all duration-500 ease-out group-hover:translate-x-2 group-hover:text-accent group-hover:italic">
                  {project.title}
                  <ArrowUpRight className="h-5 w-5 md:h-6 md:w-6 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                </h3>
                <span className="ml-auto hidden sm:block text-[10px] tracking-[0.25em] uppercase text-muted-foreground text-right">
                  {project.tag}
                </span>
                <span className="text-sm text-muted-foreground tabular-nums w-12 text-right shrink-0">
                  {project.year}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <ProjectHoverPreview
          src={projects.find((p) => p.id === hovered)?.image}
          title={projects.find((p) => p.id === hovered)?.title}
        />

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
