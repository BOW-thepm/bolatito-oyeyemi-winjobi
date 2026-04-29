import { motion } from 'framer-motion';
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Sajad Haidary',
    position: 'Technical Manager and Team Lead',
    company: 'Healthcare App',
    content:
      "I had the pleasure of working with Bow on the UI/UX design of our healthcare application, and I can confidently say that she is a talented and dedicated designer who brings both creativity and precision to her work. From day one, Bow showed a deep understanding of user-centered design principles and transformed complex healthcare workflows into intuitive, seamless experiences for our users. Her attention to detail, responsiveness to feedback, and collaborative spirit made the entire design process smooth and efficient.",
    avatar: '/lovable-uploads/5a4177fc-16e5-4453-b8ee-7a09d6e86f15.png',
  },
  {
    name: 'Amaka Obi',
    position: 'Product Manager',
    company: 'Fintech Startup',
    content:
      "Bow is one of those rare designers who pairs craft with sharp product thinking. She didn't just deliver pretty screens — she challenged our assumptions, ran lean research, and shipped flows that measurably moved our activation numbers. Working with her felt less like hiring a designer and more like adding a thoughtful co-founder to the team.",
    avatar: '',
  },
];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding relative bg-background">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-baseline justify-between border-b border-border pb-4 mb-16"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
            (04) Testimonials
          </span>
          <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground hidden sm:block">
            {String(index + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
          </span>
        </motion.div>

        <motion.blockquote
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl"
        >
          <p className="text-2xl md:text-4xl lg:text-5xl font-light leading-[1.25] tracking-tight text-foreground">
            <span className="text-muted-foreground">“</span>
            {testimonial.content}
            <span className="text-muted-foreground">”</span>
          </p>

          <footer className="mt-12 pt-6 border-t border-border flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <div className="text-base font-medium text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.position} · {testimonial.company}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default TestimonialsSection;

