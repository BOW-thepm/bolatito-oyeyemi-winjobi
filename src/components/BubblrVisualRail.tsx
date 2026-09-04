import { useEffect, useRef, useState } from 'react';
import { ImagePlus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface BubblrVisualSlot {
  id: string;
  label: string;
  ratio?: 'wide' | 'tall' | 'square';
}

interface BubblrVisualRailProps {
  title: string;
  slots: BubblrVisualSlot[];
}

interface UploadedVisual {
  name: string;
  url: string;
}

const slotDimensions = {
  wide: 'aspect-[16/9] min-w-[min(82vw,38rem)]',
  tall: 'aspect-[4/5] min-w-[min(58vw,20rem)]',
  square: 'aspect-square min-w-[min(58vw,22rem)]',
};

const BubblrVisualRail = ({ title, slots }: BubblrVisualRailProps) => {
  const [uploads, setUploads] = useState<Record<string, UploadedVisual>>({});
  const uploadsRef = useRef(uploads);

  useEffect(() => {
    uploadsRef.current = uploads;
  }, [uploads]);

  useEffect(() => {
    return () => Object.values(uploadsRef.current).forEach(({ url }) => URL.revokeObjectURL(url));
  }, []);

  const upload = (slot: BubblrVisualSlot, file: File | undefined) => {
    if (!file || !file.type.startsWith('image/')) return;
    const existing = uploadsRef.current[slot.id];
    if (existing) URL.revokeObjectURL(existing.url);
    const visual = { name: file.name, url: URL.createObjectURL(file) };
    setUploads((current) => ({ ...current, [slot.id]: visual }));
  };

  const remove = (slotId: string) => {
    const existing = uploadsRef.current[slotId];
    if (existing) URL.revokeObjectURL(existing.url);
    setUploads((current) => {
      const next = { ...current };
      delete next[slotId];
      return next;
    });
  };

  return (
    <div className="mt-10 border border-border/70 bg-secondary/20 p-3 md:p-4">
      <div className="mb-4 flex items-center justify-between gap-4 px-1">
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-accent">Visual assets</p>
          <p className="mt-1 text-xs text-muted-foreground">{title}</p>
        </div>
        <span className="hidden text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:block">
          {slots.length} {slots.length === 1 ? 'slot' : 'slots'}
        </span>
      </div>

      <div className="flex snap-x gap-3 overflow-x-auto pb-2">
        {slots.map((slot) => {
          const uploaded = uploads[slot.id];
          return (
            <div key={slot.id} className={`relative shrink-0 snap-start overflow-hidden border border-border bg-background ${slotDimensions[slot.ratio ?? 'wide']}`}>
              {uploaded ? (
                <>
                  <img src={uploaded.url} alt={`${title} — ${slot.label}`} className="h-full w-full object-contain" />
                  <Button
                    type="button"
                    variant="secondary"
                    size="icon"
                    className="absolute right-2 top-2 h-8 w-8"
                    onClick={() => remove(slot.id)}
                    aria-label={`Remove ${slot.label}`}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </>
              ) : (
                <label className="flex h-full w-full cursor-pointer flex-col items-center justify-center px-6 text-center transition-colors hover:bg-secondary/70">
                  <ImagePlus className="mb-3 h-6 w-6 text-accent" />
                  <span className="text-sm text-foreground">{slot.label}</span>
                  <span className="mt-2 max-w-[14rem] text-xs leading-relaxed text-muted-foreground">Upload the original screen or image here</span>
                  <Button asChild type="button" variant="outline" size="sm" className="pointer-events-none mt-5 bg-background">
                    <span>Choose image</span>
                  </Button>
                  <input
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    onChange={(event) => upload(slot, event.target.files?.[0])}
                    aria-label={`Upload ${slot.label}`}
                  />
                </label>
              )}
              <span className="pointer-events-none absolute bottom-2 left-2 bg-background/90 px-2 py-1 text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                {slot.id}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BubblrVisualRail;