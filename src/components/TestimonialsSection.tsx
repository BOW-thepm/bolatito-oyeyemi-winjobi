
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jane Cooper",
    position: "Product Manager",
    company: "Spotify",
    content: "Bolatito created an exceptional product that exceeded our expectations. Her attention to detail and user-centered approach resulted in a design that our customers love.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    id: 2,
    name: "Alex Morgan",
    position: "CEO",
    company: "TechFlow",
    content: "Working with Bolatito was a game-changer for our product. Her intuitive designs and research-driven approach helped us increase user engagement by 45%.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "Notion",
    content: "I was impressed by Bolatito's ability to translate complex requirements into clean, intuitive interfaces. She's not just a designer but a strategic partner.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 4,
    name: "Sajad Haidary",
    position: "Technical Manager and Team Lead",
    company: "Healthcare App",
    content: "I had the pleasure of working with Bow on the UI/UX design of our healthcare application, and I can confidently say that she is a talented and dedicated designer who brings both creativity and precision to her work. From day one, Bow showed a deep understanding of user-centered design principles and transformed complex healthcare workflows into intuitive, seamless experiences for our users. She was instrumental in shaping features like appointment booking, real-time waiting time tracking, location-based search, and medical history management. Her attention to detail, responsiveness to feedback, and collaborative spirit made the entire design process smooth and efficient. Bow doesn't just design interfaces-she designs with purpose, empathy, and a clear vision for user impact. I highly recommend her for any UI/UX role and would gladly work with her again in the future.",
    rating: 5,
    avatar: "/lovable-uploads/5a4177fc-16e5-4453-b8ee-7a09d6e86f15.png"
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about working with me.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Carousel 
            className="w-full" 
            opts={{ loop: true, align: "center" }}
            setApi={(api) => {
              api?.on('select', () => {
                setActiveIndex(api.selectedScrollSnap());
              });
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className="md:basis-full">
                  <motion.div 
                    className="p-6 md:p-10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-background rounded-2xl p-6 md:p-10 shadow-lg dark:shadow-primary/5 relative">
                      <div className="absolute -top-5 -right-5 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center transform rotate-12">
                        <span className="text-xl font-bold">"</span>
                      </div>
                      
                      {/* Rating */}
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={cn(
                              "h-5 w-5", 
                              i < testimonial.rating 
                                ? "text-designer-dark-yellow fill-designer-dark-yellow" 
                                : "text-gray-300"
                            )} 
                          />
                        ))}
                      </div>
                      
                      {/* Content */}
                      <blockquote className="text-lg md:text-xl mb-8">"{testimonial.content}"</blockquote>
                      
                      {/* Client */}
                      <div className="flex items-center">
                        <div className="mr-4">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name}
                            className="w-14 h-14 rounded-full object-cover border-2 border-primary/20" 
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">{testimonial.name}</h4>
                          <p className="text-sm text-foreground/70">
                            {testimonial.position} at {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center mt-8">
              <CarouselPrevious className="relative static transform-none mx-2" />
              
              <div className="flex space-x-2 mx-4">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all duration-300",
                      activeIndex === index 
                        ? "bg-primary w-6" 
                        : "bg-primary/30"
                    )}
                    onClick={() => {
                      // This will be handled by the carousel API
                    }}
                  />
                ))}
              </div>
              
              <CarouselNext className="relative static transform-none mx-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
