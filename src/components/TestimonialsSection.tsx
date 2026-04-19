import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonial = {
  name: 'Sajad Haidary',
  position: 'Technical Manager and Team Lead',
  company: 'Healthcare App',
  content:
    "I had the pleasure of working with Bow on the UI/UX design of our healthcare application, and I can confidently say that she is a talented and dedicated designer who brings both creativity and precision to her work. From day one, Bow showed a deep understanding of user-centered design principles and transformed complex healthcare workflows into intuitive, seamless experiences for our users. Her attention to detail, responsiveness to feedback, and collaborative spirit made the entire design process smooth and efficient.",
  avatar: '/lovable-uploads/5a4177fc-16e5-4453-b8ee-7a09d6e86f15.png',
};

const TestimonialsSection = () => {
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
            (04) Testimonial
          </span>
          <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground hidden sm:block">
            In their words
          </span>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <p className="text-2xl md:text-4xl lg:text-5xl font-light leading-[1.25] tracking-tight text-foreground">
            <span className="text-muted-foreground">“</span>
            {testimonial.content}
            <span className="text-muted-foreground">”</span>
          </p>

          <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 pt-6 border-t border-border flex items-center gap-4"
          >
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
          </motion.footer>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default TestimonialsSection;
