import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { BadgeCheck, Eye, Code, Palette, Monitor, Users, FileText, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const skills = [
    { 
      name: "UI Design", 
      icon: Eye, 
      description: "Creating beautiful interfaces with attention to detail",
      color: "bg-blue-500/10 text-blue-500 dark:bg-blue-400/10 dark:text-blue-400"
    },
    { 
      name: "UX Research", 
      icon: Users, 
      description: "Understanding user needs through research and testing",
      color: "bg-green-500/10 text-green-500 dark:bg-green-400/10 dark:text-green-400"
    },
    { 
      name: "Prototyping", 
      icon: Monitor, 
      description: "Building interactive prototypes for validation",
      color: "bg-purple-500/10 text-purple-500 dark:bg-purple-400/10 dark:text-purple-400"
    },
    { 
      name: "Visual Design", 
      icon: Palette, 
      description: "Crafting cohesive visual systems and brand identities",
      color: "bg-pink-500/10 text-pink-500 dark:bg-pink-400/10 dark:text-pink-400"
    },
  ];
  
  const tabContent = [
    {
      title: "Skills",
      content: "I specialize in user research, wireframing, prototyping, interaction design, and usability testing — creating intuitive, accessible, and responsive interfaces that meet both user needs and business goals. With a strong foundation in design thinking and a collaborative mindset, I bridge the gap between strategy and execution to deliver seamless digital experiences."
    },
    {
      title: "Experience",
      content: "With over a year of experience in UI/UX design and product development, I've worked at the intersection of user needs and business vision — crafting experiences that are not only functional but truly human. I've designed for healthcare, e-commerce, personal projcets, partnering with developers, and stakeholders to bring ideas to life. Whether leading user research, mapping flows, or building responsive interfaces, I bring a product-thinking mindset to every phase of the design process."
    },
    {
      title: "Education",
      content: "I hold a Bachelor's degree in Interactive Design from California College of Arts and have completed specialized courses in Human-Computer Interaction from Stanford University. I regularly attend industry conferences and workshops to stay current with design trends and methodologies."
    }
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
    <section id="about" className="section-padding py-24 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-2/3 bg-designer-light-yellow/20 dark:bg-designer-dark-yellow/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block py-1 px-3 mb-4 bg-designer-light-yellow text-designer-dark-yellow rounded-full text-sm font-medium"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Passionate about creating <span className="gradient-text">meaningful</span> experiences
          </motion.h2>
          <motion.p 
            className="text-foreground/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            I combine research, design thinking, and creative problem-solving to craft digital experiences that are both beautiful and functional.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-full h-full border-2 border-primary rounded-xl -rotate-2"></div>
              <motion.div 
                className="relative z-10 rounded-xl overflow-hidden bg-clip-padding p-1 bg-gradient-to-r from-primary to-designer-dark-yellow"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Designer at work" 
                  className="rounded-lg object-cover h-[500px] w-full"
                />
              </motion.div>
            </div>
            
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 shadow-2xl rounded-xl p-6 w-48"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-designer-light-yellow rounded-full p-2 mb-3">
                  <BadgeCheck className="h-6 w-6 text-designer-dark-yellow" />
                </div>
                <span className="block text-2xl font-bold text-primary">5+</span>
                <span className="text-sm text-foreground/60">Years of Experience</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -top-8 -left-8 bg-white dark:bg-gray-800 shadow-2xl rounded-xl p-4 rotate-12"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0 }}
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground">UX</div>
                <p className="font-semibold">Expert</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">My Design Philosophy</h3>
            
            <div className="mb-8">
              <div className="flex border-b border-foreground/10 mb-6">
                {tabContent.map((tab, index) => (
                  <button
                    key={index}
                    className={`py-3 px-6 font-medium relative ${activeTab === index ? 'text-primary' : 'text-foreground/60 hover:text-foreground'}`}
                    onClick={() => setActiveTab(index)}
                  >
                    {tab.title}
                    {activeTab === index && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      />
                    )}
                  </button>
                ))}
              </div>
              
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-foreground/70 leading-relaxed"
              >
                <p className="mb-6">{tabContent[activeTab].content}</p>
                
                {activeTab === 1 && (
                  <p className="mb-6">
                    Every screen I design is driven by empathy, shaped by data, and refined through collaboration because great design isn't just how it looks, but how effortlessly it works.
                  </p>
                )}
                
                {activeTab !== 1 && (
                  <p className="mb-6">
                    I believe that great design is about solving real problems. My approach blends aesthetics with functionality to create interfaces that are not just beautiful but also intuitive and accessible.
                  </p>
                )}
              </motion.div>
            </div>
            
            <div className="flex gap-4 flex-wrap">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-primary hover:bg-designer-dark-yellow text-primary-foreground gap-2" asChild>
                  <a href="https://drive.google.com/file/d/1ap-JWBWX2pf1dVaIM6SDsNvIUoocmbnO/view" target="_blank" rel="noopener noreferrer">
                    <FileText className="h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 gap-2">
                  <Lightbulb className="h-4 w-4" />
                  My Process
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-24">
          <div className="text-center mb-12">
            <motion.h3 
              className="text-2xl md:text-3xl font-bold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              My Skills & Expertise
            </motion.h3>
            <motion.p
              className="text-foreground/70 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              I've developed a diverse skillset that allows me to tackle design challenges from multiple perspectives.
            </motion.p>
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
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-foreground/5"
              >
                <div className={`${skill.color} p-3 rounded-xl w-14 h-14 flex items-center justify-center mb-6`}>
                  <skill.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold mb-3">{skill.name}</h4>
                <p className="text-foreground/60 text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/5 px-6"
              >
                View My Full Skillset
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
