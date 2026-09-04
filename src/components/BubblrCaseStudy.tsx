import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import BubblrVisualRail, { type BubblrVisualSlot } from '@/components/BubblrVisualRail';
import type { Project } from '@/data/projects';

interface BubblrCaseStudyProps {
  project: Project;
  next: Project;
}

const chapterVisuals: BubblrVisualSlot[][] = [
  [{ id: 'bubblr-screen-01', label: 'Hero image', ratio: 'wide' }],
  [
    { id: 'bubblr-screen-02', label: 'Research image', ratio: 'wide' },
    { id: 'bubblr-screen-03', label: 'Research synthesis', ratio: 'wide' },
  ],
  [{ id: 'bubblr-screen-04', label: 'Bubble model', ratio: 'wide' }],
  [
    { id: 'bubblr-screen-05', label: 'Sitemap', ratio: 'wide' },
    { id: 'bubblr-screen-06', label: 'User flows', ratio: 'wide' },
  ],
  [
    { id: 'bubblr-screen-07', label: 'Post flow — screen 01', ratio: 'tall' },
    { id: 'bubblr-screen-08', label: 'Post flow — screen 02', ratio: 'tall' },
    { id: 'bubblr-screen-09', label: 'Post flow — screen 03', ratio: 'tall' },
  ],
  [
    { id: 'bubblr-screen-10', label: 'Lifestyle image', ratio: 'square' },
    { id: 'bubblr-screen-11', label: 'Logo and wordmark', ratio: 'square' },
    { id: 'bubblr-screen-12', label: 'Colour and type', ratio: 'square' },
  ],
  [
    { id: 'bubblr-screen-13', label: 'Component library', ratio: 'wide' },
    { id: 'bubblr-screen-14', label: 'Design tokens', ratio: 'wide' },
  ],
  [
    { id: 'bubblr-screen-15', label: 'High-fidelity screen 01', ratio: 'tall' },
    { id: 'bubblr-screen-16', label: 'High-fidelity screen 02', ratio: 'tall' },
    { id: 'bubblr-screen-17', label: 'High-fidelity screen 03', ratio: 'tall' },
    { id: 'bubblr-screen-18', label: 'High-fidelity screen 04', ratio: 'tall' },
  ],
];

const BubblrCaseStudy = ({ project, next }: BubblrCaseStudyProps) => {
  const chapters = project.caseStudy ?? [];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed inset-x-0 top-0 z-40 border-b border-border/50 bg-background/90 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-6 py-4 md:px-10">
          <Link to="/projects" className="flex items-center gap-2 text-sm text-foreground transition-colors hover:text-accent">
            <ArrowLeft className="h-4 w-4" />
            <span>All projects</span>
          </Link>
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{project.category}</span>
        </div>
      </nav>

      <div className="fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-end gap-5 lg:flex">
        {chapters.map((chapter, index) => (
          <a key={chapter.label} href={`#bubblr-${index + 1}`} className="group flex items-center gap-3" aria-label={chapter.title}>
            <span className="pointer-events-none max-w-36 rounded-full bg-secondary px-3 py-1 text-right text-[9px] uppercase tracking-[0.16em] text-accent opacity-0 transition-opacity group-hover:opacity-100">
              {chapter.label.replace(/^\d+\s+—\s+/, '')}
            </span>
            <span className="h-2 w-2 rounded-full bg-muted-foreground/40 transition-colors group-hover:bg-accent" />
          </a>
        ))}
      </div>

      <main>
        <section className="px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40">
          <div className="container mx-auto max-w-5xl">
            <div className="mb-6 flex items-center gap-4 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              <span>{project.year}</span><span>·</span><span>{project.category}</span>
            </div>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="text-6xl font-bold leading-none tracking-tight md:text-8xl">
              {project.title}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }} className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {project.fullDescription}
            </motion.p>
            <div className="mt-14">
              <BubblrVisualRail title="bubblr-hero" slots={[{ id: 'bubblr-hero', label: 'Bubblr hero visual', ratio: 'wide' }]} />
            </div>
          </div>
        </section>

        {project.metrics && (
          <section className="px-6 pb-20 md:px-10 md:pb-28">
            <div className="container mx-auto max-w-5xl">
              <div className="grid grid-cols-2 border-y border-border md:grid-cols-4">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="border-b border-border p-5 last:border-b-0 even:border-l md:border-b-0 md:p-6">
                    <div className="text-3xl font-bold tracking-tight md:text-4xl">{metric.value}</div>
                    <div className="mt-2 text-[9px] uppercase tracking-[0.18em] text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="px-6 pb-24 md:px-10 md:pb-36">
          <div className="container mx-auto max-w-5xl">
            <div className="mb-20 grid gap-10 border-y border-border py-10 md:grid-cols-4 md:gap-8">
              <div><span className="case-label">Year</span><p className="mt-3">{project.year}</p></div>
              <div><span className="case-label">Category</span><p className="mt-3">{project.category}</p></div>
              <div><span className="case-label">Team</span><p className="mt-3">{project.team}</p></div>
              <div><span className="case-label">Disciplines</span><div className="mt-3 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="border border-border px-2 py-1 text-[10px] text-muted-foreground">{tag}</span>)}</div></div>
            </div>

            <div className="space-y-28 md:space-y-40">
              {chapters.map((chapter, index) => (
                <motion.article key={chapter.label} id={`bubblr-${index + 1}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.65 }} className="grid gap-8 md:grid-cols-[8rem_1fr] md:gap-12">
                  <div className="pt-1 text-[10px] uppercase tracking-[0.2em] text-accent">{chapter.label}</div>
                  <div>
                    <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">{chapter.title}</h2>
                    <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{chapter.body}</p>
                    {chapter.points && <ul className="mt-7 max-w-2xl space-y-3 text-base leading-relaxed text-foreground/85 md:text-lg">{chapter.points.map((point) => <li key={point} className="flex gap-3"><span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" /><span>{point}</span></li>)}</ul>}
                    <BubblrVisualRail title={chapter.imageCaption ?? chapter.title} slots={chapterVisuals[index] ?? []} />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-6 py-16 md:px-10 md:py-24">
        <div className="container mx-auto flex max-w-5xl flex-col justify-between gap-8 md:flex-row md:items-end">
          <div><span className="case-label">Next project</span><Link to={`/projects/${next.slug}`} className="group mt-4 flex items-center gap-3 text-4xl font-bold tracking-tight md:text-6xl">{next.title}<ArrowUpRight className="h-7 w-7 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></Link></div>
          <Button asChild variant="outline" className="w-fit bg-transparent"><Link to="/projects">View all projects</Link></Button>
        </div>
      </footer>
    </div>
  );
};

export default BubblrCaseStudy;