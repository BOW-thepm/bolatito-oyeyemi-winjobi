import { ArrowLeft, LockKeyhole } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import type { Project } from '@/data/projects';

interface LockedProjectNoticeProps {
  project: Project;
}

const LockedProjectNotice = ({ project }: LockedProjectNoticeProps) => (
  <main className="flex min-h-screen items-center justify-center bg-background px-6 py-24 text-foreground">
    <section className="w-full max-w-xl border-y border-border py-12 text-center">
      <LockKeyhole className="mx-auto mb-6 h-8 w-8 text-accent" aria-hidden="true" />
      <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-accent">Coming soon</p>
      <h1 className="text-4xl font-bold tracking-tight md:text-6xl">{project.title}</h1>
      <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
        This case study is locked for now. Please check back soon.
      </p>
      <Button asChild variant="outline" className="mt-10 bg-transparent">
        <Link to="/projects">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to projects
        </Link>
      </Button>
    </section>
  </main>
);

export default LockedProjectNotice;