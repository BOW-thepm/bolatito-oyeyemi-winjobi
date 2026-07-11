import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

const ProjectGallery = ({ images, title }: ProjectGalleryProps) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback(
    (next: number) => {
      const total = images.length;
      const normalized = ((next % total) + total) % total;
      setDirection(next > index ? 1 : -1);
      setIndex(normalized);
    },
    [index, images.length],
  );

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => go(index + 1), 5500);
    return () => clearInterval(id);
  }, [index, images.length, go]);

  if (!images.length) return null;

  const variants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 60 : -60,
      scale: 0.98,
    }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -60 : 60,
      scale: 0.98,
    }),
  };

  return (
    <section className="px-6 md:px-10 mb-24">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-baseline justify-between mb-6">
          <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
            Album · {String(index + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </div>
          {images.length > 1 && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => go(index - 1)}
                aria-label="Previous screen"
                className="h-9 w-9 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => go(index + 1)}
                aria-label="Next screen"
                className="h-9 w-9 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>

        <div className="relative aspect-[16/10] overflow-hidden bg-secondary rounded-sm">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.img
              key={images[index]}
              src={images[index]}
              alt={`${title} — screen ${index + 1}`}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 220, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.5 },
              }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>

        {images.length > 1 && (
          <div className="mt-6 grid grid-cols-4 md:grid-cols-6 gap-3">
            {images.map((src, i) => (
              <button
                key={src + i}
                onClick={() => go(i)}
                aria-label={`Go to screen ${i + 1}`}
                className={`relative aspect-[4/3] overflow-hidden rounded-sm border transition-all ${
                  i === index
                    ? 'border-foreground opacity-100'
                    : 'border-border opacity-60 hover:opacity-100'
                }`}
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectGallery;
