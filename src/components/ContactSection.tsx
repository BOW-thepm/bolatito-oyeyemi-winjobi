
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Send, Check, X, Sparkles } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "@/hooks/use-toast"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useIntersectionObserver } from '@/hooks/useParallaxScroll';
import LiaAssistant from './LiaAssistant';

// Define the schema for the contact form
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showLiaCelebration, setShowLiaCelebration] = useState(false);
  const fadeRef = useIntersectionObserver();
  const recipientEmail = "oyeyemi8899@gmail.com";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (values) => {
    setIsSubmitting(true);
    console.log("Sending email to:", recipientEmail);
    console.log("Form values:", values);
    
    try {
      // Create a FormData object for email service
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('message', values.message);
      formData.append('to', recipientEmail);
      formData.append('_subject', `New Contact Form Message from ${values.name}`);
      formData.append('_captcha', 'false');
      formData.append('_template', 'table');
      
      // Use FormSubmit service with direct endpoint
      const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      console.log("FormSubmit response:", response);
      
      if (response.ok) {
        const responseData = await response.json();
        console.log("FormSubmit response data:", responseData);
        
        // Close modal first
        setShowContactModal(false);
        
        // Show LIA celebration
        setShowLiaCelebration(true);
        
        // Show toast notification
        toast({
          title: "Success!",
          description: "Your message has been sent successfully!",
          duration: 5000,
        })
        
        // Show success dialog after a delay
        setTimeout(() => {
          setShowSuccessDialog(true);
        }, 1000);
        
        // Reset form
        form.reset();
      } else {
        console.error("FormSubmit error:", response.statusText);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem sending your message. Please try again later.",
          duration: 5000,
        })
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "An unexpected error occurred. Please try again later.",
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding contact-section relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(201,167,184,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="fade-slide-up" ref={fadeRef}>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-8 gradient-text"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Let's Create Something Beautiful Together
          </motion.h2>
          
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <p className="text-lg text-muted-foreground mb-8">
              Ready to bring your vision to life? Let's chat about your next project!
            </p>
            <motion.div
              className="flex items-center justify-center gap-2 text-sm text-primary/70 mb-8"
              animate={{ 
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="h-4 w-4" />
              <span>Meet LIA, my AI assistant - click the floating icon to get started!</span>
              <Sparkles className="h-4 w-4" />
            </motion.div>
          </motion.div>
        </div>

        {/* LIA Assistant */}
        <LiaAssistant 
          onMessageClick={() => setShowContactModal(true)}
          showCelebration={showLiaCelebration}
          onCelebrationComplete={() => setShowLiaCelebration(false)}
        />

        {/* Contact Modal */}
        <Dialog open={showContactModal} onOpenChange={setShowContactModal}>
          <DialogContent className="sm:max-w-md bg-gradient-to-br from-card/95 to-primary/5 backdrop-blur-md border border-primary/20 rounded-3xl overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* LIA in modal */}
              <motion.div
                className="absolute top-4 right-16 w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full shadow-lg flex items-center justify-center"
                initial={{ x: -100, y: 100, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                animate-pulse
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="h-5 w-5 text-white" />
                </motion.div>
              </motion.div>

              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 text-xl font-bold gradient-text">
                  <Send className="h-5 w-5 text-primary" />
                  Send me a message!
                </DialogTitle>
                <p className="text-sm text-muted-foreground">I'd love to hear about your project ✨</p>
              </DialogHeader>
              
              <div className="mt-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-medium">Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your Name" 
                              {...field} 
                              className="border-primary/20 focus:border-primary/40 bg-background/50 backdrop-blur-sm rounded-xl"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-medium">Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your Email" 
                              type="email" 
                              {...field} 
                              className="border-primary/20 focus:border-primary/40 bg-background/50 backdrop-blur-sm rounded-xl"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-medium">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell me about your project..."
                              className="resize-none border-primary/20 focus:border-primary/40 bg-background/50 backdrop-blur-sm rounded-xl min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex gap-3 pt-4">
                      <Button 
                        type="button"
                        variant="outline"
                        onClick={() => setShowContactModal(false)}
                        className="flex-1 border-primary/20 hover:bg-primary/10 rounded-xl"
                      >
                        <X className="h-4 w-4 mr-2" />
                        Cancel
                      </Button>
                      <Button 
                        type="submit" 
                        disabled={isSubmitting} 
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground magnetic-hover shadow-lg hover:shadow-xl rounded-xl"
                      >
                        {isSubmitting ? (
                          <>Sending...</>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>

        {/* Success Dialog */}
        <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
          <DialogContent className="sm:max-w-md bg-gradient-to-br from-card/95 to-primary/5 backdrop-blur-sm border border-primary/20 rounded-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 0.6 }}
                  >
                    <Check className="h-5 w-5 text-primary" />
                  </motion.div>
                  Message Sent Successfully!
                </DialogTitle>
              </DialogHeader>
              <div className="py-4">
                <p>Thank you for reaching out! Your message has been sent successfully to {recipientEmail}.</p>
                <p className="mt-2">I'll get back to you as soon as possible.</p>
              </div>
              <div className="flex justify-end">
                <Button 
                  onClick={() => setShowSuccessDialog(false)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground magnetic-hover"
                >
                  Perfect! ✨
                </Button>
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ContactSection;
