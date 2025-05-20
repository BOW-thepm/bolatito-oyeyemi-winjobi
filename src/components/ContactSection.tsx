import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Send, Check } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

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
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
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
      // This ensures you get a copy of the submission
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
        
        // Show toast notification
        toast({
          title: "Success!",
          description: "Your message has been sent successfully!",
          duration: 5000, // Show for 5 seconds
        })
        
        // Show success dialog
        setShowSuccessDialog(true);
        
        // Reset form
        form.reset();
      } else {
        console.error("FormSubmit error:", response.statusText);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem sending your message. Please try again later.",
          duration: 5000, // Show for 5 seconds
        })
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "An unexpected error occurred. Please try again later.",
        duration: 5000, // Show for 5 seconds
      })
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Contact Me
        </motion.h2>
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Email" type="email" {...field} />
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
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Write your message here"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
              <p className="text-xs text-center text-muted-foreground mt-2">
                Your message will be sent directly to {recipientEmail}
              </p>
            </form>
          </Form>
        </motion.div>

        {/* Success Dialog */}
        <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                Message Sent Successfully!
              </DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <p>Thank you for reaching out! Your message has been sent successfully to {recipientEmail}.</p>
              <p className="mt-2">I'll get back to you as soon as possible.</p>
            </div>
            <div className="flex justify-end">
              <Button onClick={() => setShowSuccessDialog(false)}>
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ContactSection;
