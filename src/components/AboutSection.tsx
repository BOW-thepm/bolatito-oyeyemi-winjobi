
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BadgeCheck, Eye, Code, Palette, Monitor, Users } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { name: "UI Design", icon: Eye, description: "Creating beautiful interfaces with attention to detail" },
    { name: "UX Research", icon: Users, description: "Understanding user needs through research and testing" },
    { name: "Prototyping", icon: Monitor, description: "Building interactive prototypes for validation" },
    { name: "Visual Design", icon: Palette, description: "Crafting cohesive visual systems and brand identities" },
  ];
  
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.5,
      },
    }),
  };
  
  return (
    <section id="about" className="section-padding bg-designer-soft-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block py-1 px-3 mb-4 bg-designer-light-purple text-designer-dark-purple rounded-full text-sm font-medium"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Passionate about creating <span className="gradient-text">meaningful</span> experiences
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            I combine research, design thinking, and creative problem-solving to craft digital experiences that are both beautiful and functional.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10">
              <div className="absolute -top-5 -left-5 w-full h-full border-2 border-designer-purple rounded-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Designer at work" 
                className="rounded-xl shadow-lg object-cover h-[400px] w-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white shadow-lg rounded-lg p-4 w-36 flex items-center justify-center">
              <div className="text-center">
                <span className="block text-2xl font-bold text-designer-purple">5+</span>
                <span className="text-xs text-gray-500">Years of Experience</span>
              </div>
            </div>
          </motion.div>
          
          <div>
            <motion.h3 
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              My Design Philosophy
            </motion.h3>
            
            <motion.p 
              className="text-gray-600 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              I believe that great design is about solving real problems. My approach blends aesthetics with functionality to create interfaces that are not just beautiful but also intuitive and accessible.
            </motion.p>
            
            <motion.p 
              className="text-gray-600 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              With a background in both design and user research, I bring a holistic perspective to every project, ensuring that the end result not only meets business objectives but also genuinely serves the people who use it.
            </motion.p>
            
            <motion.div 
              className="flex gap-4 flex-wrap"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button className="bg-designer-purple hover:bg-designer-dark-purple text-white">
                Download Resume
              </Button>
              <Button variant="outline" className="border-designer-purple text-designer-purple hover:bg-designer-light-purple">
                My Process
              </Button>
            </motion.div>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="text-center mb-12">
            <motion.h3 
              className="text-2xl md:text-3xl font-bold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              My Skills & Expertise
            </motion.h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUpVariant}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="bg-designer-light-purple p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <skill.icon className="w-5 h-5 text-designer-purple" />
                </div>
                <h4 className="text-xl font-bold mb-2">{skill.name}</h4>
                <p className="text-gray-600 text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
