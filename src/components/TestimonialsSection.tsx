
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState, useEffect } from 'react';

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
    id: 4,
    name: "Sajad Haidary",
    position: "Technical Manager and Team Lead",
    company: "Healthcare App",
    content: "I had the pleasure of working with Bow on the UI/UX design of our healthcare application, and I can confidently say that she is a talented and dedicated designer who brings both creativity and precision to her work. From day one, Bow showed a deep understanding of user-centered design principles and transformed complex healthcare workflows into intuitive, seamless experiences for our users. She was instrumental in shaping features like appointment booking, real-time waiting time tracking, location-based search, and medical history management. Her attention to detail, responsiveness to feedback, and collaborative spirit made the entire design process smooth and efficient. Bow doesn't just design interfaces-she designs with purpose, empathy, and a clear vision for user impact. I highly recommend her for any UI/UX role and would gladly work with her again in the future.",
    rating: 5,
    avatar: "/lovable-uploads/5a4177fc-16e5-4453-b8ee-7a09d6e86f15.png"
  }
];

const TestimonialsSection = () => {
  const currentTestimonial = testimonials[0];

  return (
    <section id="testimonials" className="py-20 bg-primary/5 overflow-hidden">
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

        <div className="flex justify-center">
          <div className="max-w-4xl w-full relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ 
                  duration: 0.6,
                  ease: "easeOut"
                }}
                className="bg-background rounded-3xl p-8 md:p-12 shadow-xl dark:shadow-primary/10 relative overflow-hidden"
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-primary/10 rounded-full -ml-10 -mb-10"></div>
                
                <div className="relative">
                  {/* Client info and image */}
                  <div className="flex items-center mb-8">
                    <Avatar className="w-20 h-20 mr-6 border-4 border-primary/20">
                      <AvatarImage src={currentTestimonial.avatar} alt={currentTestimonial.name} />
                      <AvatarFallback>{currentTestimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <h4 className="font-bold text-xl md:text-2xl">{currentTestimonial.name}</h4>
                      <p className="text-base text-foreground/70 mb-3">
                        {currentTestimonial.position} at {currentTestimonial.company}
                      </p>
                      
                      {/* Rating */}
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={cn(
                              "h-5 w-5", 
                              i < currentTestimonial.rating 
                                ? "text-designer-dark-yellow fill-designer-dark-yellow" 
                                : "text-gray-300"
                            )} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative">
                    <Quote className="absolute top-0 left-0 h-12 w-12 text-primary/20 -translate-x-2 -translate-y-2" />
                    <blockquote className="text-lg md:text-xl mt-6 relative">
                      <p className="text-foreground/80 leading-relaxed">{currentTestimonial.content}</p>
                    </blockquote>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
