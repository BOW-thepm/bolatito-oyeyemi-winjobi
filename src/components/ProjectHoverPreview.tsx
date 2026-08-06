import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ProjectHoverPreviewProps {
  src?: string;
  title?: string;
}

/** Cursor-following image preview shown while hovering a project row. */
const ProjectHoverPreview = ({ src, title }: ProjectHoverPreviewProps) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          key={src}
          initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          exit={{ opacity: 0, scale: 0.9, rotate: 2 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          style={{ left: pos.x, top: pos.y }}
          className="pointer-events-none fixed z-50 hidden md:block -translate-x-1/2 -translate-y-1/2"
        >
          <div className="w-[300px] aspect-[4/3] overflow-hidden rounded-sm bg-secondary shadow-2xl ring-1 ring-border">
            <img src={src} alt={title ?? ''} className="w-full h-full object-cover" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectHoverPreview;
