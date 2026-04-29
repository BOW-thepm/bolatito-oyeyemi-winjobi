import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getProjectBySlug, projects } from '@/data/projects';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) return <Navigate to="/projects" replace />;

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/70 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
          <Link
            to="/projects"
            className="flex items-center gap-2 text-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">All projects</span>
          </Link>
          <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
            {project.category}
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-10">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-baseline gap-4 text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-6"
          >
            <span>{project.year}</span>
            <span>·</span>
            <span>{project.category}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-8"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            {project.fullDescription}
          </motion.p>
        </div>
      </section>

      {/* Hero image */}
      <section className="px-6 md:px-10 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="container mx-auto max-w-6xl"
        >
          <div className="aspect-[16/10] overflow-hidden bg-secondary rounded-sm">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Meta strip */}
      <section className="px-6 md:px-10 mb-24">
        <div className="container mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-border py-8">
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">Year</div>
            <div className="text-foreground">{project.year}</div>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">Category</div>
            <div className="text-foreground">{project.category}</div>
          </div>
          <div className="col-span-2">
            <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">Disciplines</div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-full border border-border text-foreground/80">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story sections */}
      <section className="px-6 md:px-10 pb-24">
        <div className="container mx-auto max-w-3xl space-y-16">
          {project.challenge && (
            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-4">The challenge</div>
              <p className="text-xl md:text-2xl leading-relaxed text-foreground">{project.challenge}</p>
            </div>
          )}
          {project.solution && (
            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-4">The approach</div>
              <p className="text-xl md:text-2xl leading-relaxed text-foreground">{project.solution}</p>
            </div>
          )}
          {project.outcome && (
            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-4">The outcome</div>
              <p className="text-xl md:text-2xl leading-relaxed text-foreground">{project.outcome}</p>
            </div>
          )}

          {project.caseStudyUrl && project.caseStudyUrl !== '#' && (
            <div className="pt-8">
              <Button
                asChild
                variant="outline"
                className="rounded-full h-12 px-6 border-border bg-transparent hover:bg-secondary"
              >
                <a href={project.caseStudyUrl} target="_blank" rel="noopener noreferrer">
                  Read full case study on Behance
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Next project */}
      <section className="px-6 md:px-10 pb-24">
        <div className="container mx-auto max-w-6xl border-t border-border pt-12">
          <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-6">Next project</div>
          <Link to={`/projects/${next.slug}`} className="group block">
            <div className="flex items-baseline justify-between gap-6">
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground flex items-center gap-3">
                {next.title}
                <ArrowUpRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </h3>
              <span className="text-sm text-muted-foreground">{next.year}</span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
