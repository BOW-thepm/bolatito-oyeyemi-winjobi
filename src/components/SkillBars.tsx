
import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { useEffect, useState } from 'react';

interface Skill {
  name: string;
  level: number;
  description: string;
}

const skills: Skill[] = [
  { name: 'UI Design', level: 90, description: 'Expert' },
  { name: 'UX Research', level: 85, description: 'Advanced' },
  { name: 'Prototyping', level: 88, description: 'Expert' },
  { name: 'Visual Design', level: 92, description: 'Expert' },
  { name: 'User Testing', level: 80, description: 'Skilled' },
  { name: 'Wireframing', level: 95, description: 'Expert' },
];

const SkillBars = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevels, setAnimatedLevels] = useState<number[]>(new Array(skills.length).fill(0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill levels
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedLevels(prev => {
                const newLevels = [...prev];
                newLevels[index] = skill.level;
                return newLevels;
              });
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('skills-section');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div id="skills-section" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          whileHover={{ y: -8, scale: 1.02 }}
          className="group"
        >
          <div 
            className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg p-6 rounded-2xl border border-white/20 dark:border-gray-700/30 hover:bg-white/15 dark:hover:bg-gray-800/25 hover:border-white/30 dark:hover:border-gray-600/40 transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-semibold text-foreground">{skill.name}</h4>
              <motion.span 
                className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                {skill.description}
              </motion.span>
            </div>
            
            <div className="relative">
              <div className="flex justify-between items-center mb-2">
                <div className="w-full bg-white/20 dark:bg-gray-700/30 backdrop-blur-sm rounded-full h-3 overflow-hidden border border-white/10">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full relative shadow-inner"
                    initial={{ width: 0 }}
                    animate={{ width: `${animatedLevels[index]}%` }}
                    transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20 rounded-full"
                      animate={{ 
                        opacity: [0.3, 0.7, 0.3],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: 1 + index * 0.2
                      }}
                    />
                  </motion.div>
                </div>
                <motion.span 
                  className="ml-3 text-sm font-bold text-primary min-w-[40px] text-right"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                >
                  {animatedLevels[index]}%
                </motion.span>
              </div>
            </div>
            
            {/* Frequency visualization */}
            <div className="flex items-end justify-center mt-4 h-8 gap-1">
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="bg-primary/30 w-1 rounded-full backdrop-blur-sm"
                  animate={{
                    height: isVisible ? [4, Math.random() * 20 + 8, 4] : 4,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: (index * 0.2) + (i * 0.1),
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillBars;
