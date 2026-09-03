import { useEffect, useRef, useState } from 'react';
import { ImagePlus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BubblrMockupSlotProps {
  projectTitle: string;
  sectionTitle: string;
  caption?: string;
  ratio?: 'wide' | 'tall' | 'square';
}

interface UploadedMockup {
  id: string;
  name: string;
  url: string;
}

const ratioClasses = {
  wide: 'aspect-[16/9] min-w-[min(76vw,34rem)]',
  tall: 'aspect-[4/5] min-w-[min(58vw,22rem)]',
  square: 'aspect-square min-w-[min(58vw,22rem)]',
};

const BubblrMockupSlot = ({ projectTitle, sectionTitle, caption, ratio = 'wide' }: BubblrMockupSlotProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [mockups, setMockups] = useState<UploadedMockup[]>([]);

  useEffect(() => {
    return () => mockups.forEach((mockup) => URL.revokeObjectURL(mockup.url));
  }, [mockups]);

  const addMockups = (files: FileList | null) => {
    if (!files) return;

    const nextMockups = Array.from(files)
      .filter((file) => file.type.startsWith('image/'))
      .map((file) => ({
        id: `${file.name}-${file.lastModified}-${crypto.randomUUID()}`,
        name: file.name,
        url: URL.createObjectURL(file),
      }));

    setMockups((current) => [...current, ...nextMockups]);
    if (inputRef.current) inputRef.current.value = '';
  };

  const removeMockup = (id: string) => {
    setMockups((current) => {
      const mockup = current.find((item) => item.id === id);
      if (mockup) URL.revokeObjectURL(mockup.url);
      return current.filter((item) => item.id !== id);
    });
  };

  return (
    <figure className="mt-8">
      <div className="border border-dashed border-border bg-secondary/40 p-3 md:p-4">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-3 px-1">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Design mockups</p>
            <p className="mt-1 text-xs text-muted-foreground/80">Add screens for {sectionTitle.toLowerCase()}</p>
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="bg-background"
            onClick={() => inputRef.current?.click()}
          >
            <ImagePlus className="h-4 w-4" />
            Upload images
          </Button>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            multiple
            className="sr-only"
            onChange={(event) => addMockups(event.target.files)}
            aria-label={`Upload ${projectTitle} ${sectionTitle} mockups`}
          />
        </div>

        <div className="flex min-h-40 gap-3 overflow-x-auto pb-2">
          {mockups.length === 0 ? (
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="flex min-h-40 w-full min-w-full flex-col items-center justify-center border border-border/70 bg-background/50 px-6 text-center transition-colors hover:border-accent hover:bg-background md:min-h-52"
            >
              <ImagePlus className="mb-3 h-6 w-6 text-accent" />
              <span className="text-sm text-foreground">Upload mockups for this section</span>
              <span className="mt-1 text-xs text-muted-foreground">PNG, JPG, or WEBP · select multiple screens</span>
            </button>
          ) : (
            mockups.map((mockup) => (
              <div key={mockup.id} className={`group relative shrink-0 overflow-hidden border border-border bg-background ${ratioClasses[ratio]}`}>
                <img src={mockup.url} alt={`${projectTitle} ${sectionTitle} mockup — ${mockup.name}`} className="h-full w-full object-cover" />
                <Button
                  type="button"
                  variant="secondary"
                  size="icon"
                  className="absolute right-2 top-2 h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
                  onClick={() => removeMockup(mockup.id)}
                  aria-label={`Remove ${mockup.name}`}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))
          )}
        </div>
      </div>
      {caption && (
        <figcaption className="mt-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default BubblrMockupSlot;