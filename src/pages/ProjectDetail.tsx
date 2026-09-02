import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getProjectBySlug, projects } from '@/data/projects';
import ProjectGallery from '@/components/ProjectGallery';
import { useEffect, useState, useRef } from 'react';

const sectionLabels = [
  { id: 'overview', label: 'Overview' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'challenge', label: 'Challenge' },
  { id: 'approach', label: 'Approach' },
  { id: 'outcome', label: 'Outcome' },
];

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const [activeSection, setActiveSection] = useState('overview');
  const observersRef = useRef<IntersectionObserver[]>([]);

  if (!project) return <Navigate to="/projects" replace />;

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  useEffect(() => {
    // Clean up any previous observers stored in ref
    observersRef.current.forEach((obs) => obs.disconnect());
    observersRef.current = [];

    const visibleRatios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibleRatios.set(entry.target.id, entry.intersectionRatio);
        });

        // Pick the section with the highest visible ratio
        let bestId = 'overview';
        let bestRatio = 0;
        visibleRatios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        setActiveSection(bestId);
      },
      {
        root: null,
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: '-10% 0px -40% 0px',
      }
    );

    observersRef.current.push(observer);

    sectionLabels.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observersRef.current.forEach((obs) => obs.disconnect());
    };
  }, [project.slug]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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

      {/* Right-hand vertical reading progress indicator */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-end gap-6">
        {sectionLabels.map(({ id, label }) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="group flex items-center justify-end gap-3 focus:outline-none"
              aria-label={label}
            >
              <motion.span
                initial={false}
                animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 8 }}
                transition={{ duration: 0.25 }}
                className="pointer-events-none rounded-full bg-secondary px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-deep-purple-300"
              >
                {label}
              </motion.span>
              <motion.span
                animate={{ scale: isActive ? 1.25 : 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                  isActive ? 'bg-deep-purple-300' : 'bg-muted-foreground/40 group-hover:bg-deep-purple-300/50'
                }`}
              />
            </button>
          );
        })}
      </div>


      {/* Hero */}
      <section id="overview" className="pt-32 pb-16 px-6 md:px-10">
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

          {project.playUrl && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8"
            >
              <Button
                asChild
                className="rounded-full h-12 px-6 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href={project.playUrl} target="_blank" rel="noopener noreferrer">
                  <Play className="mr-2 h-4 w-4 fill-current" />
                  Play the game
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Album / gallery */}
      <div id="gallery">
        <ProjectGallery
          images={
            project.gallery && project.gallery.length > 0
              ? project.gallery
              : [project.detailImage || project.image]
          }
          title={project.title}
        />
      </div>

      {/* Full case-study board */}
      {project.caseStudyBoard && (
        <section className="px-6 md:px-10 mb-24">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-baseline justify-between mb-6">
              <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                Full case study board
              </div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground hidden md:inline">
                Scroll
              </span>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-[80vh] overflow-y-auto rounded-sm border border-border bg-secondary"
            >
              <img
                src={project.caseStudyBoard}
                alt={`${project.title} — full case study board`}
                loading="lazy"
                className="w-full block"
              />
            </motion.div>
          </div>
        </section>
      )}


      {/* Meta strip */}
      <section className="px-6 md:px-10 mb-24">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-border py-8">
            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">Year</div>
              <div className="text-foreground">{project.year}</div>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">Category</div>
              <div className="text-foreground">{project.category}</div>
            </div>
            {project.team && (
              <div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">Team</div>
                <div className="text-foreground">{project.team}</div>
              </div>
            )}
            <div className="w-fit justify-self-start">
              <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">Disciplines</div>
              <div className="flex flex-nowrap gap-2">
                {project.tags.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full border border-border text-foreground/80 whitespace-nowrap">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>



        </div>
      </section>

      {/* Story sections */}
      <section className="px-6 md:px-10 pb-24">
        <div className="container mx-auto max-w-3xl space-y-16">
          {project.challenge && (
            <div id="challenge">
              <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-4">The challenge</div>
              <p className="text-xl md:text-2xl leading-relaxed text-foreground">{project.challenge}</p>
            </div>
          )}
          {project.solution && (
            <div id="approach">
              <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-4">The approach</div>
              <p className="text-xl md:text-2xl leading-relaxed text-foreground">{project.solution}</p>
            </div>
          )}
          {project.outcome && (
            <div id="outcome">
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
