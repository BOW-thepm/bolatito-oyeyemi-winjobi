import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowDownCircle, Star, ExternalLink } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const HeroSection = () => {
  // Animation variants
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };
  
  return <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 -z-10">
        <div className="absolute inset-0 bg-designer-light-yellow/30 dark:bg-designer-dark-yellow/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,213,79,0.4),transparent_30%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(255,193,7,0.2),transparent_30%)]"></div>
        
        {/* Decorative elements */}
        {[...Array(6)].map((_, i) => <motion.div key={i} className="absolute rounded-full bg-primary/30 dark:bg-primary/20" style={{
        width: `${Math.random() * 100 + 50}px`,
        height: `${Math.random() * 100 + 50}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.5 + 0.1
      }} animate={{
        x: [0, Math.random() * 20 - 10],
        y: [0, Math.random() * 20 - 10]
      }} transition={{
        duration: Math.random() * 4 + 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }} />)}
      </div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div className="lg:col-span-7 z-10" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }}>
            <motion.div className="space-y-6">
              <motion.div initial={{
              opacity: 0,
              scale: 0.8
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              delay: 0.2,
              duration: 0.6
            }} className="inline-flex items-center gap-2 bg-designer-light-yellow dark:bg-designer-dark-yellow/30 text-designer-dark-yellow rounded-full py-2 px-4">
                <Star className="h-4 w-4 fill-designer-dark-yellow text-designer-dark-yellow" />
                <span className="text-sm font-medium">UI/UX Designer</span>
              </motion.div>
              
              <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight" initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              delay: 0.3,
              duration: 0.8
            }}>
                Creating <br />
                <motion.span className="gradient-text relative inline-block" animate={{
                y: [0, -5, 0]
              }} transition={{
                duration: 2,
                repeat: Infinity
              }}>
                  beautiful
                </motion.span>
                <br className="md:hidden" /> digital experiences
              </motion.h1>
              
              <motion.p className="text-foreground/80 dark:text-foreground/70 text-lg md:text-xl max-w-2xl" initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              delay: 0.5,
              duration: 0.8
            }}>
                Hi, I'm a passionate UI/UX designer focused on crafting intuitive and engaging user experiences that solve real problems.
              </motion.p>
            </motion.div>
            
            <motion.div className="flex flex-wrap gap-4 mt-8" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.7,
            duration: 0.6
          }}>
              <Button size="lg" className="bg-primary hover:bg-designer-dark-yellow dark:hover:bg-designer-yellow/90 text-primary-foreground group relative overflow-hidden" 
                onClick={() => window.open('https://www.behance.net/bowthetechpm', '_blank', 'noopener,noreferrer')}>
                <span className="relative z-10">View My Work</span>
                <ExternalLink className="ml-1 h-4 w-4 relative z-10" />
                <span className="absolute inset-0 bg-designer-dark-yellow dark:bg-designer-yellow/90 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>
              
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 group">
                <span>Contact Me</span>
                <motion.span className="ml-2" animate={{
                x: [0, 5, 0]
              }} transition={{
                duration: 1.5,
                repeat: Infinity
              }}>
                  →
                </motion.span>
              </Button>
            </motion.div>
            
            <motion.div className="flex items-center gap-8 mt-12 text-foreground/80 dark:text-foreground/70" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.9,
            duration: 0.6
          }}>
              <motion.div className="flex flex-col" whileHover={{
              scale: 1.05
            }}>
                <span className="text-4xl font-bold text-primary">1+</span>
                <span className="text-sm">Years Experience</span>
              </motion.div>
              <div className="h-12 w-px bg-border"></div>
              <motion.div className="flex flex-col" whileHover={{
              scale: 1.05
            }}>
                <span className="text-4xl font-bold text-primary">10+</span>
                <span className="text-sm">Projects Completed</span>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div className="lg:col-span-5 relative" initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.4,
          duration: 0.7
        }}>
            <div className="relative">
              <motion.div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full z-0" animate={floatingAnimation}></motion.div>
              <motion.div className="absolute -bottom-10 -right-10 w-60 h-60 bg-primary/20 rounded-full z-0" animate={{
              ...floatingAnimation,
              transition: {
                ...floatingAnimation.transition,
                delay: 1
              }
            }}></motion.div>
              
              <Carousel className="w-full max-w-md mx-auto" opts={{
              loop: true,
              align: "center"
            }}>
                <CarouselContent>
                  <CarouselItem>
                    <motion.div className="relative z-10 rounded-xl bg-white dark:bg-gray-800 shadow-2xl overflow-hidden" whileHover={{
                    scale: 1.02,
                    rotate: 0
                  }} initial={{
                    rotate: 3
                  }} transition={{
                    duration: 0.5
                  }}>
                      <img src="/lovable-uploads/54b37118-d82f-4885-a3ae-48c116c69da7.png" alt="Designer portrait" className="w-full h-[500px] object-cover" />
                    </motion.div>
                  </CarouselItem>
                  <CarouselItem>
                    <motion.div className="relative z-10 rounded-xl bg-white dark:bg-gray-800 shadow-2xl overflow-hidden" whileHover={{
                    scale: 1.02,
                    rotate: 0
                  }} initial={{
                    rotate: -3
                  }} transition={{
                    duration: 0.5
                  }}>
                      <img src="/lovable-uploads/3a8a97c9-56ff-437b-a188-6a058798ea0f.png" alt="Designer portrait alternative pose" className="w-full h-[500px] object-cover" />
                    </motion.div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex -left-5" />
                <CarouselNext className="hidden md:flex -right-5" />
              </Carousel>
              
              <motion.div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 shadow-xl rounded-xl p-4 rotate-6 hover:rotate-0 transition-all duration-300 cursor-pointer" whileHover={{
              scale: 1.05
            }}>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground">UI</div>
                  <div>
                    <p className="font-semibold">UI Design</p>
                    <p className="text-xs text-foreground/60">Expert Level</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 shadow-xl rounded-xl p-4 -rotate-6 hover:rotate-0 transition-all duration-300 cursor-pointer" whileHover={{
              scale: 1.05
            }}>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-designer-dark-yellow rounded-full flex items-center justify-center text-white">UX</div>
                  <div>
                    <p className="font-semibold">UX Research</p>
                    <p className="text-xs text-foreground/60">Professional</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.a href="#about" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-foreground/60 hover:text-primary transition-colors" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.2,
      duration: 0.6
    }} whileHover={{
      scale: 1.1
    }}>
        <span className="text-sm mb-2">Scroll Down</span>
        <motion.div animate={{
        y: [0, 5, 0]
      }} transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop"
      }}>
          <ArrowDownCircle className="h-6 w-6" />
        </motion.div>
      </motion.a>
    </section>;
};

export default HeroSection;
